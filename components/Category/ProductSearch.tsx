"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface ProductSearchProps {
    onSearch?: (query: string) => void;
    placeholder?: string;
}

export default function ProductSearch({
    onSearch,
    placeholder = "Search for a product...",
}: ProductSearchProps) {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const q = query.trim();
        if (!q) return;
        onSearch?.(q);
        router.push("/products");
    };

    return (
        <section className="bg-white pt-10 md:pt-14">
            <div className="mx-auto container px-4">
                <div className="ml-auto w-full lg:max-w-[611px]">
                    <h2 className="md:text-[28px] text-2xl font-extrabold leading-tight text-primary mb-4 md:text-left text-center">
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
                            className="h-full min-w-0 flex-1 bg-transparent px-6 text-[15px] text-[#222222] outline-none placeholder:text-primary/70 sm:text-[16px]"
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
