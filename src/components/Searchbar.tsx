"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Searchbar() {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");

    if (name) {
      router.push(`/lists?name=${name}`);
    }
  };
  return (
    <form
      className="flex items-center justify-between gap-4  bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search"
        name="name"
        className="bg-transparent outline-none flex-1"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
}
