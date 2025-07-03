"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import { useEffect } from "react";
import { media as wixMedia } from "@wix/sdk"; //cant directly use the imgeurl in response need to be converted
import { currentCart } from "@wix/ecom";

export default async function CartModal() {
  // const cartItems = true;//temp
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  const handleCheckout = async () => {
    console.log("checking out");
    try {
      const checkout =
        await wixClient.currentCart.createCheckoutFromCurrentCart({
          channelType: currentCart.ChannelType.WEB,
        });
      console.log("CHECKOUT-->", checkout);
      const { redirectSession } =
        await wixClient.redirects.createRedirectSession({
          ecomCheckout: { checkoutId: checkout.checkoutId },
          callbacks: {
            postFlowUrl: window.location.origin,
            thankYouPageUrl: `${window.location.origin}/success`,
          },
        });

      if (redirectSession?.fullUrl) {
        window.location.href = redirectSession.fullUrl;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-max absolute p-4 rounded-md top-12 right-0 bg-white text-sm z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col gap-6 z-20">
      {!cart.lineItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <div className="flex flex-col gap-8">
          <h2 className="text-xl">Shopping Cart</h2>
          {cart.lineItems.map((item) => (
            <div className="flex gap-4" key={item._id}>
              {item.image && (
                <Image
                  src={wixMedia.getScaledToFillImageUrl(item.image, 72, 96, {})}
                  alt=""
                  width={72}
                  height={96}
                  className="object-cover rounded-md"
                />
              )}

              <div className="flex flex-col justify-between w-full">
                <div className="">
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">
                      {item.productName?.original}
                    </h3>
                    <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                      {item.quantity && item.quantity > 1 && (
                        <div className="text-xs text-green-500">
                          {item.quantity} x{" "}
                        </div>
                      )}
                      ${item.price?.amount}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.availability?.status}
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. {item.quantity}</span>
                  <span
                    className="text-blue-500"
                    style={{
                      cursor: isLoading ? "not-allowed" : "pointer",
                    }}
                    onClick={() => removeItem(wixClient, item._id!)}
                  >
                    Remove
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">${cart.subtotal.amount}</span>
            </div>
            <p className="text-gray-500 mt-2 text-sm mb-4">
              Shopping & taxes calculated at end.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rouded-md px-4 py-3 ring-1 ring-gray-300">
                View Cart
              </button>
              <button
                className="rouded-md px-4 py-3 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                disabled={isLoading}
                onClick={handleCheckout}
              >
                Checkout
                {/* todo:added paypal not worked,try again else buy premium for 'stripe' provider as it automatically redirects
                to test create product with 0 price and then fill details in checkout page,choose free shipping option,
                check if free shipping in seetings of wix[shipping] */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
