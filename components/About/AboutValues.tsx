import { FiAward, FiTarget, FiHeart, FiShield, FiClock, FiUsers } from "react-icons/fi";

const cards = [
    {
        icon: FiTarget,
        title: "Our Mission",
        description:
            "To make premium custom packaging accessible to every brand, with honest pricing, reliable quality and support that actually answers the question you asked.",
    },
    {
        icon: FiAward,
        title: "Our Vision",
        description:
            "To become the packaging partner of choice for USA brands, known for designs that sell, deliveries that arrive on time and service that feels personal.",
    },
    {
        icon: FiHeart,
        title: "Our Values",
        description:
            "Craftsmanship, transparency and sustainability. We design for the shelf and for the landfill, and we tell you exactly what your order will cost before it runs.",
    },
];

const promises = [
    {
        icon: FiShield,
        title: "Quality You Can Inspect",
        description: "Every run is checked for print accuracy, dimensions and finishing before it leaves our floor.",
    },
    {
        icon: FiUsers,
        title: "A Real Point of Contact",
        description: "One dedicated account manager from the first quote to the delivery of your finished boxes.",
    },
    {
        icon: FiClock,
        title: "Deadlines We Keep",
        description: "Production and delivery dates are agreed in writing, and we communicate early if anything shifts.",
    },
];

export default function AboutValues() {
    return (
        <section className="bg-background py-14 md:py-16">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
                {/* Heading */}
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <h2 className="mb-4 text-2xl font-extrabold leading-tight text-primary md:text-[32px]">
                        What We Stand For
                    </h2>

                    <p className="text-base leading-7 text-desc">
                        Packaging is only one part of your brand promise. These are the ideas that keep our production
                        team, designers and account managers pointed in the same direction.
                    </p>
                </div>

                {/* Mission / Vision / Values */}
                <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {cards.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="rounded-[12px] border border-RC_border bg-white p-7 shadow-[0_6px_20px_rgb(0,0,0,0.04)]"
                        >
                            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Icon size={22} />
                            </span>

                            <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>

                            <p className="text-sm leading-6 text-desc">{description}</p>
                        </div>
                    ))}
                </div>

                {/* Promises */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {promises.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="flex items-start gap-4 rounded-[12px] border border-RC_border bg-white p-6"
                        >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-RC_Green/15 text-RC_Green">
                                <Icon size={19} />
                            </span>

                            <div>
                                <h3 className="mb-1 text-base font-bold text-primary">{title}</h3>
                                <p className="text-sm leading-6 text-desc">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
