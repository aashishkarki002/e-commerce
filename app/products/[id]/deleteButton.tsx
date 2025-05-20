"use client";
import { getApiDetails } from "@/utils/constant";

export default function DeleteButton({ id }: { id: number }) {
  async function handleDelete() {
    const { method, url } = getApiDetails("deleteProduct");
    const res = await fetch(`${url}${id}`, {
      method,
    });
    if (res.ok) {
      alert("Product deleted");
    } else {
      alert("Failed to delete product");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white mt-4 px-6 py-2 rounded"
    >
      Delete Product
    </button>
  );
}
