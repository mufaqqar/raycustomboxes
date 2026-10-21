"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface ProductSearchProps {
    onSearch?: (query: string) => void;
    placeholder?: string;
}

export default function ProductSearch({
    onSearch,
    placeholder = "Search for a product...",
}: ProductSearchProps) {
    const [query, setQuery] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch?.(query.trim());
    };

    return (
        <section className="bg-white pt-16">
            <div className="mx-auto container px-4">
                <div className="ml-auto w-full lg:max-w-[611px]">
                    <h2 className="md:text-[32px] text-2xl font-extrabold leading-tight text-primary mb-4">
                        SEARCH PRODUCTS
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        role="search"
                        className="flex h-[51px] w-full items-center overflow-hidden rounded-full border border-primary bg-white transition focus-within:ring-2 focus-within:ring-primary/20"
                    >
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={placeholder}
                            aria-label="Search products"
                            className="h-full min-w-0 flex-1 bg-transparent px-6 text-[16px] text-[#222222] outline-none placeholder:text-primary sm:text-[17px]"
                        />

                        <button
                            type="submit"
                            aria-label="Search"
                            className="flex h-full w-[50px] shrink-0 items-center justify-center text-RC_Green transition hover:text-RC_Green_hovr"
                        >
                            <FiSearch size={22} strokeWidth={3} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
