import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

type Crumb = {
    label: string;
    href?: string;
};

export default function PageHero({
    title,
    subtitle,
    crumbs = [],
}: {
    title: string;
    subtitle?: string;
    crumbs?: Crumb[];
}) {
    return (
        <section className="bg-background">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-10 md:py-14">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-primary">
                    <Link href="/" className="transition hover:text-prim_hovr">
                        Home
                    </Link>

                    {crumbs.map((crumb) => (
                        <span key={crumb.label} className="flex items-center gap-2">
                            <FiChevronRight size={13} />

                            {crumb.href ? (
                                <Link href={crumb.href} className="transition hover:text-prim_hovr">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-primary font-medium">{crumb.label}</span>
                            )}
                        </span>
                    ))}
                </nav>

                {/* Heading */}
                <h1 className="mb-4 text-[30px] leading-[1.15] font-extrabold tracking-tight text-primary sm:text-[38px]">
                    {title}
                </h1>

                {subtitle && (
                    <p className="max-w-[820px] text-base leading-[26px] font-normal text-desc sm:text-base">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
