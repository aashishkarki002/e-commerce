import React from "react";
import { getApiDetails } from "@/utils/constant";
import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";
async function getSingleUser(id: number) {
  const { method, url } = getApiDetails("getSingleUser");
  const res = await fetch(`${url}${id}`, {
    method,
  });
  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const user = await getSingleUser(id);

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Your details</h1>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-md">
          <p className="mb-2 text-gray-700">
            <span className="font-semibold">ID:</span> {user.id}
          </p>{" "}
          <p className="mb-2 text-gray-700">
            <span className="font-semibold">Username:</span> {user.username}
          </p>
          <p className="mb-2 text-gray-700">
            <span className="font-semibold">Password:</span> {user.password}
          </p>
          <div className="flex justify-between items-center">
            <Link href={`/updateUsers/${user.id}`}>
              <button className="bg-blue-400 text-white rounded-sm  px-6 py-2  justify-between items-center">
                update details
              </button>
            </Link>
            <DeleteButton apiKey="deleteUsers" id={user.id}></DeleteButton>
          </div>
        </div>
      </div>
    </div>
  );
}
