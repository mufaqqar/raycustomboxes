import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const stats = [
    { value: "1,000+", label: "USA brands served" },
    { value: "10+", label: "Years of packaging expertise" },
    { value: "48h", label: "Artwork turnaround" },
    { value: "100%", label: "Custom sizes and styles" },
];

export default function AboutHero() {
    return (
        <section className="bg-background">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 items-center gap-10 px-5 sm:px-10 py-10 lg:grid-cols-2 lg:gap-14 md:py-14">
                {/* Left Content */}
                <div>
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-primary">
                        <Link href="/" className="transition hover:text-prim_hovr">
                            Home
                        </Link>

                        <FiChevronRight size={13} />

                        <span className="text-primary font-medium">About Us</span>
                    </nav>

                    <h1 className="mb-5 text-[30px] leading-[1.15] font-extrabold tracking-tight text-primary sm:text-[38px]">
                        About Ray Custom Boxes
                    </h1>

                    <p className="mb-4 max-w-[620px] text-base leading-[26px] text-desc sm:text-base">
                        We are a USA-based packaging company helping brands across the country and beyond launch
                        products in packaging that looks premium, ships safely and stands apart on the shelf.
                    </p>

                    <p className="mb-6 max-w-[620px] text-base leading-[26px] text-desc sm:text-base">
                        From a single mailer box to a full e-commerce packaging program, our team combines
                        in-house design support, flexible production runs and quick turnarounds to make custom
                        packaging simple for growing businesses.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-[12px] border border-RC_border bg-white px-4 py-5 text-center shadow-[0_6px_20px_rgb(0,0,0,0.04)]">
                                <span className="block text-2xl font-extrabold leading-none text-primary">{stat.value}</span>
                                <span className="mt-2 block text-xs leading-5 text-desc">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-[#f3e8d5]">
                    <Image
                        src="/images/workbanner.png"
                        alt="Custom printed packaging boxes produced by Ray Custom Boxes"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
