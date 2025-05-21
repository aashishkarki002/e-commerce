import { getApiDetails } from "@/utils/constant";
import React from "react";

async function getCarts() {
  const { method, url } = getApiDetails("carts");
  const res = await fetch(url, {
    method,
  });
  const data = await res.json();

  return data;
}

export default async function Page() {
  const carts = await getCarts();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Carts</h1>
      <ul className="space-y-4 ">
        {carts.map((cart) => (
          <li key={cart.id} className="border p-4 rounded shadow grid-cols-3">
            <h2 className="font-semibold">Cart ID: {cart.id}</h2>
            <p>User ID: {cart.userId}</p>
            <p>Date: {new Date(cart.date).toLocaleDateString()}</p>
            <h3 className="mt-2 font-medium">Products:</h3>
            <ul className="list-disc list-inside ml-4">
              {cart.products.map((product) => (
                <li key={product.productId}>
                  Product ID: {product.productId}, Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
