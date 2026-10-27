import Link from "next/link";
import { FiAward, FiChevronRight, FiMessageCircle, FiPackage, FiShield } from "react-icons/fi";

const benefits = [
    {
        icon: FiAward,
        title: "Best Prices",
        description: "Competitive pricing for bulk and repeat orders.",
    },
    {
        icon: FiShield,
        title: "Expert Support",
        description: "Guidance on styles, materials and finishing.",
    },
    {
        icon: FiMessageCircle,
        title: "Quick Response",
        description: "A clear quote, usually within one business day.",
    },
    {
        icon: FiPackage,
        title: "Flexible Orders",
        description: "Low minimums for samples, runs and launches.",
    },
];

export default function QuoteHero() {
    return (
        <section className="bg-background">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-10 md:py-14">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-primary">
                    <Link href="/" className="transition hover:text-prim_hovr">
                        Home
                    </Link>

                    <FiChevronRight size={13} />

                    <span className="text-primary font-medium">Get a Quote</span>
                </nav>

                {/* Heading */}
                <h1 className="mb-4 text-[30px] leading-[1.15] font-extrabold tracking-tight text-primary sm:text-[38px]">
                    Get a Custom Quote
                </h1>

                <p className="mb-8 max-w-[820px] text-base leading-[26px] font-normal text-desc sm:text-base">
                    Tell us what you are packaging and how many boxes you need. Share your dimensions, preferred
                    material and artwork if you have it, and our packaging team will prepare a quote with the right
                    box style, print and finishing options for your brand.
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="flex items-start gap-3 rounded-[12px] border border-RC_border bg-white p-5 shadow-[0_6px_20px_rgb(0,0,0,0.04)]"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Icon size={18} />
                            </span>

                            <div>
                                <h2 className="text-base font-bold text-primary">{title}</h2>
                                <p className="mt-1 text-xs leading-5 text-desc">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
