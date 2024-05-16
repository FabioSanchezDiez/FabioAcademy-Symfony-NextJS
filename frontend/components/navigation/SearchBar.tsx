"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (term: string) => {
    if (term) {
      setQuery(term);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
          className="w-5 h-5 text-gray-700 dark:text-gray-100"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <input
        className="input bg-gray-200 dark:bg-slate-700 dark:text-gray-100 rounded-full px-10 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 shadow-xl"
        placeholder={placeholder}
        required
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button
        type="reset"
        className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
        onClick={() => setQuery("")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700 dark:text-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </form>
  );
}
