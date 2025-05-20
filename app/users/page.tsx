import React from "react";
import { getApiDetails } from "@/utils/constant";
import Link from "next/link";
const getUsers = async () => {
  const { method, url } = getApiDetails("getUser");
  const res = await fetch(url, {
    method,
  });
  const data = await res.json();
  return data;
};

export default async function page() {
  const users = await getUsers();
  return (
    <>
      <ul className=" grid gap-4 grid-cols-2 container mt-4">
        {users.map((user) => (
          <Link href={`/getUsers/${user.id}`}>
            <li key={user.id} className="bg-gray-100 p-4 rounded shadow">
              <div className="text-lg font-semibold">{user.username}</div>
              <div className="text-gray-600">{user.email}</div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
