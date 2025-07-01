import Image from "next/image";
import Link from "next/link";

export default function ProductList() {
  return (
    <div className="mt-12 flex justify-between flex-wrap gap-x-8 gap-y-16 ">
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500 mt-4 mb-4">description</div>
        <button className="rounded-2xl ring-1 ring-mace text-mace w-max py-2 px-4 text-xs hover:bg-mace hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
}
