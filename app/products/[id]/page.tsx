import React from "react";
import { getApiDetails } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";
async function getSingleProduct(id: number) {
  const { method, url } = getApiDetails("getSingleProduct");
  const res = await fetch(`${url}${id}`, { method });
  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-2xl font-bold mb-4 text-center">
        {product.title}
      </header>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <Image
          src={product.image}
          width={200}
          height={200}
          alt="product"
          className="rounded-lg shadow-md"
        />
        <div className="space-y-4">
          <p className="text-gray-700">{product.description}</p>
          <p className="text-lg font-semibold">Price: ${product.price}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          <div className="flex gap-4">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
            <Link href={`/editProducts/${product.id}`}>
              <button className="bg-black text-white rounded-sm mt-4 px-6 py-2 ">
                Edit a product
              </button>
            </Link>
            <DeleteButton apiKey="deleteProduct" id={product.id}></DeleteButton>
          </div>
        </div>
      </div>
    </div>
  );
}
