"use client";

import Image from "next/image";

export default function CartModal() {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md top-12 right-0 bg-white text-sm z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <div className="flex flex-col gap-8">
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex gap-4">
            <Image
              src=""
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              <div className="">
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                <div className="text-sm text-gray-500">AVILABLE</div>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 mt-2 text-sm mb-4">
              Shopping & taxes calculated at end.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rouded-md px-4 py-3 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rouded-md px-4 py-3 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
