import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className=" px-4 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">404 Error: Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button>
      </Link>
    </div>
  );
}
