import React from "react";
import { getApiDetails } from "@/utils/constant";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";

async function getProducts() {
  const { method, url } = getApiDetails("getProducts");
  const res = await fetch(url, { method });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <Navbar></Navbar>
      <div className="px-4 md:px-12 lg:px-20 py-10">
        <header className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Our Products
        </header>
        <ul className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-white"
            >
              <Link href={`/products/${product.id}`}>
                <div className="p-4 flex flex-col items-center text-center h-full">
                  <Image
                    src={product.image}
                    width={120}
                    height={120}
                    alt={product.title}
                    className="object-contain rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {product.description}
                  </p>
                  <p className="font-bold mt-2">Price RS: {product.price}</p>
                </div>
              </Link>
              <div></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
