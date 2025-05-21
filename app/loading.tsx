import React from "react";
import Loader from "@/components/loader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader />
    </div>
  );
}
