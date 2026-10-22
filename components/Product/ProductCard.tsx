import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { Product } from "@/data/Products";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <article className="group flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-RC_border bg-white transition-shadow duration-300 hover:shadow-[0_14px_34px_rgb(56,56,130,0.14)]">
            <Link
                href={`/product/${product.slug}`}
                className="relative block aspect-[4/3] overflow-hidden bg-[#f5f5f5]"
                aria-label={product.name}
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                />
            </Link>

            <div className="flex flex-1 flex-col px-5 py-4">
                <Link
                    href={product.trace}
                    className="text-[11px] font-semibold uppercase tracking-wide text-RC_Green hover:text-RC_Green_hovr"
                >
                    {product.category}
                </Link>

                <Link href={`/product/${product.slug}`}>
                    <h3 className="mt-1 text-base font-bold leading-snug text-primary hover:text-prim_hovr">
                        {product.name}
                    </h3>
                </Link>

                <p className="mt-2 line-clamp-2 text-xs leading-5 text-desc">
                    {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-sm font-semibold text-primary">
                        From {product.startingPrice}
                    </span>

                    <Link
                        href={`/product/${product.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-RC_Green"
                    >
                        View <FiArrowRight size={11} />
                    </Link>
                </div>
            </div>
        </article>
    );
}
