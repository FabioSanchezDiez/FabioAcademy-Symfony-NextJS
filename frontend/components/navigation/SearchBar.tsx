"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <form className="form relative">
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
        defaultValue={searchParams.get("search")?.toString()}
      />
    </form>
  );
}
