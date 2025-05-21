"use client";
import { getApiDetails } from "@/utils/constant";
import React from "react";

export default function DeleteButton({ id, apiKey }) {
  async function Delete() {
    const { method, url } = getApiDetails(apiKey);
    const res = await fetch(`${url}${id}`, {
      method,
    });
    if (res.ok) {
      alert(`${apiKey} deleted succesfully`);
    }
  }
  return (
    <div>
      <button
        className="bg-red-600 text-white rounded-sm mt-4 px-6 py-2"
        onClick={Delete}
      >
        delete
      </button>
    </div>
  );
}
