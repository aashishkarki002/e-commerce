"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { getApiDetails } from "@/utils/constant";
import Loader from "@/components/loader";

export default function Page() {
  const params = useParams();
  const productId = params.id;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const updateProduct = async (data: {
    title: string;
    price: string;
    description: string;
    category: string;
  }) => {
    try {
      setLoading(true);
      const { method, url } = getApiDetails("updateProduct");

      const res = await fetch(`${url}${productId}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Product updated");
      } else {
        alert("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !price.trim() ||
      !description.trim() ||
      !category.trim()
    ) {
      alert("All fields are required.");
      return;
    }

    if (isNaN(Number(price)) || Number(price) <= 0) {
      alert("Price must be a positive number.");
      return;
    }

    const data = { title, price, description, category };
    updateProduct(data);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow-md font-sans">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Loader />
        </div>
      ) : (
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="title" className="font-semibold text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            disabled={loading}
          />

          <label htmlFor="price" className="font-semibold text-gray-700">
            Price
          </label>
          <input
            id="price"
            type="number"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            disabled={loading}
          />

          <label htmlFor="category" className="font-semibold text-gray-700">
            Category
          </label>
          <input
            id="category"
            type="text"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            disabled={loading}
          />

          <label htmlFor="description" className="font-semibold text-gray-700">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            disabled={loading}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
            disabled={loading}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
