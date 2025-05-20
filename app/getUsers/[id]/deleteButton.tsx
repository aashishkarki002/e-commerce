"use client";
import { getApiDetails } from "@/utils/constant";

import React from "react";

export default function DeleteButton({ id }: { id: number }) {
  async function deleteUser() {
    const { method, url } = getApiDetails("deleteUsers");
    const res = await fetch(`${url}${id}`, {
      method,
    });
    if (res.ok) {
      alert("deleted your details");
    }
  }
  return (
    <div>
      <button className="bg-red-400 text-white px-4 py-3" onClick={deleteUser}>
        delete account
      </button>
    </div>
  );
}
