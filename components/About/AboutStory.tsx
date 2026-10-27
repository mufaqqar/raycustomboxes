import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const pillars = [
    {
        icon: "/images/pricing.svg",
        title: "Custom Size & Style",
        description:
            "Every order is built to your dimensions and product. Pick the style, material and finishes that fit your brand and your budget.",
    },
    {
        icon: "/images/graphic.svg",
        title: "Free Graphic Designing",
        description:
            "Send us your logo or artwork and our design team prepares print-ready files, dielines and mockups before production.",
    },
    {
        icon: "/images/turnaround.svg",
        title: "Quick Turnaround",
        description:
            "Fast sampling and production schedules keep your launch on time, with updates at every stage of the run.",
    },
    {
        icon: "/images/shipping.svg",
        title: "Free Shipping",
        description:
            "We pack and ship across the USA and worldwide so your packaging arrives exactly when your product needs it.",
    },
];

export default function AboutStory() {
    return (
        <section className="bg-white py-14 md:py-16">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
                {/* Heading */}
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <h2 className="mb-4 text-2xl font-extrabold leading-tight text-primary md:text-[32px]">Our Story</h2>

                    <p className="text-base leading-7 text-desc">
                        Ray Custom Boxes started with a simple idea: small and mid-sized brands deserve the same
                        packaging quality as the biggest retailers. Today we produce mailer boxes, corrugated
                        shipping boxes, rigid boxes, folding cartons and paper bags for more than a thousand
                        brands, while keeping the same hands-on service we started with.
                    </p>
                </div>

                {/* Image + Text */}
                <div className="mb-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-background">
                        <Image
                            src="/images/p1.jpg"
                            alt="Printed corrugated boxes ready for dispatch"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h3 className="mb-4 text-xl font-extrabold leading-tight text-primary md:text-2xl">
                            Packaging built around your product
                        </h3>

                        <p className="mb-4 text-base leading-7 text-desc">
                            Good packaging has to do three things at once: protect the product in transit, present the
                            brand the way you want it seen, and fit the budget of the business shipping it. That is why
                            every quote we prepare starts with your product, your dimensions and your volume.
                        </p>

                        <p className="mb-6 text-base leading-7 text-desc">
                            We work with corrugate, kraft, rigid board and recycled materials, and finish boxes with
                            printing, lamination, spot UV, foil stamping and embossing. You get one clear price, one
                            point of contact and one production timeline.
                        </p>

                        <Link
                            href="/request-quote"
                            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-md border border-white bg-primary px-6 text-base font-semibold text-white transition hover:bg-prim_hovr"
                        >
                            Get a Custom Quote
                            <FiArrowRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="rounded-[12px] border border-RC_border bg-background p-6 text-center transition hover:shadow-[0_10px_28px_rgb(0,0,0,0.06)]"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                                <Image src={pillar.icon} alt={pillar.title} width={28} height={28} className="h-7 w-7 object-contain" />
                            </div>

                            <h3 className="mb-2 text-lg font-bold leading-snug text-primary">{pillar.title}</h3>

                            <p className="text-sm leading-6 text-desc">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
