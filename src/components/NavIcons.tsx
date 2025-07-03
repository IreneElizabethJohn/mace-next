"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";
//TODO:ISSUE WITH NAVICON-blinking on each click
export default function NavIcons() {
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const [isCartOpen, setisCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  // const isLoggedIn = false; //temporary
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setisProfileOpen((prev) => !prev);
  };

  //AUTH WITH WIX MANAGED
  // const wixClient = useWixClient();
  // const login = async () => {
  //   const loginRequestData = wixClient.auth.generateOAuthData(
  //     "http://localhost:3000" // Redirect URI
  //   );

  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
  //   const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
  //   window.location.href = authUrl;
  // };

  const { cart, counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href); //path name shldnt be used as hydration caused so dynamically inject in navbar this component
    setIsLoading(false);
    setisProfileOpen(false);
    router.push(logoutUrl);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
        // onClick={login}
      />
      {isProfileOpen && (
        <div className="flex flex-col absolute p-4 bg-white rounded-md top-12 left-0 text-sm z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            {isLoading ? "Logging out" : "Logout"}
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setisCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-mace text-sm text-white rounded-full flex items-center justify-center">
          {counter}
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}
