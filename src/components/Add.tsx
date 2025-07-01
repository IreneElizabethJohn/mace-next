"use client";
import { useState } from "react";

export default function Add() {
  //temp
  const stock = 4;
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type: "i" | "d") => {
    if (type == "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type == "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left!
            <br />
            {"Don't"} miss it
          </div>
        </div>

        <button className="w-36 ring-1 text-sm rounded-3xl ring-mace text-mace py-2 px-4 hover:bg-mace hover:text-white disabled:cursor-not-allowed disabled:text-white disabled:bg-pink-200 disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
