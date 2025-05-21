"use client";
import { getApiDetails } from "@/utils/constant";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Loader from "@/components/loader";
export default function Page() {
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const userId = params.id;

  const validation = () => {
    const newErrors = { name: "", email: "", password: "" };
    let isValid = true;
    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";

      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const updateUsers = async (userData) => {
    try {
      setloading(true);
      const { method, url } = getApiDetails("updateUser");

      const res = await fetch(`${url}${userId}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        alert("User updated");
      } else {
        alert("Failed to update user");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("Something went wrong");
    } finally {
      setloading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;
    const userData = {
      name,
      email,
      password,
    };
    updateUsers(userData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {loading ? (
        <Loader />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4"
        >
          <h1 className="text-xl font-bold text-center">Update your details</h1>

          <div className="flex flex-col">
            <label
              htmlFor="user-name"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="user-name"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setName(e.target.value)}
              value={name}
              disabled={loading}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={loading}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              disabled={loading}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            disabled={loading}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
