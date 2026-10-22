import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const contactCards = [
    {
        icon: FaPhoneAlt,
        title: "Call Us",
        lines: ["(817) 704-2917", "800 558 8047"],
        href: "tel:8005588047",
        action: "Request a Call Back",
    },
    {
        icon: FaEnvelope,
        title: "Email Us",
        lines: ["sales@erixumpackaging.com"],
        href: "mailto:sales@erixumpackaging.com",
        action: "Send an Email",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Visit Us",
        lines: ["4500 Mercantile Plaza, Suite 300", "Fort Worth, TX 76137, United States"],
        href: "https://maps.google.com/?q=4500+Mercantile+Plaza+Suite+300+Fort+Worth+TX+76137",
        action: "Get Directions",
    },
    {
        icon: FaClock,
        title: "Working Hours",
        lines: ["Monday – Friday: 9:00 AM – 5:00 PM", "Saturday: 10:00 AM – 2:00 PM"],
        href: null,
        action: null,
    },
];

export default function ContactInfo() {
    return (
        <div className="flex h-full flex-col gap-6">
            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactCards.map(({ icon: Icon, title, lines, href, action }) => (
                    <div
                        key={title}
                        className="rounded-[12px] border border-RC_border bg-white p-5 shadow-[0_6px_20px_rgb(0,0,0,0.04)] transition hover:shadow-[0_10px_28px_rgb(0,0,0,0.08)]"
                    >
                        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Icon size={19} />
                        </span>

                        <h3 className="mb-2 text-lg font-bold text-primary">{title}</h3>

                        <ul className="space-y-1 text-sm leading-6 text-desc">
                            {lines.map((line) => (
                                <li key={line}>{line}</li>
                            ))}
                        </ul>

                        {href && action && (
                            <Link
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-prim_hovr"
                            >
                                {action}
                                <FiArrowRight size={14} />
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            {/* Map */}
            <div className="flex-1 overflow-hidden rounded-[12px] border border-RC_border bg-white shadow-[0_6px_20px_rgb(0,0,0,0.04)]">
                <iframe
                    title="Ray Custom Boxes location on Google Maps"
                    src="https://www.google.com/maps?q=4500+Mercantile+Plaza+Suite+300+Fort+Worth+TX+76137&output=embed"
                    width="100%"
                    height="320"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-[320px] w-full border-0"
                />
            </div>
        </div>
    );
}
