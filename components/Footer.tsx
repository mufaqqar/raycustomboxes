
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcAmex,
  FaCcDiscover,
  FaCcPaypal,
} from "react-icons/fa";
import { SiMastercard } from "react-icons/si";

const mainMenu = [
  { label: "All Products", href: "/products" },
  { label: "All Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
];

const usefulLinks = [
  { label: "Contact Us", href: "/contact-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Reviews", href: "/reviews" },
];

const quickLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
    className: "bg-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
    className:
      "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: FaPinterestP,
    className: "bg-[#BD081C]",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
    className: "bg-[#FF0000]",
  },
];

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="relative min-w-0">
      <h3 className="mb-4 text-[23px] font-bold leading-tight text-white sm:text-2xl">
        {title}
      </h3>

      <ul className="space-y-[7px] text-[13px] leading-[18px] text-white">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="transition-colors duration-200 hover:text-white/75"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto container px-4">
        {/* Top section */}
        <div className="grid grid-cols-1 items-center gap-7 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-[37px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="Home">
              <Image
                src="/images/whitelogo.png"
                alt="RayCustom Packaging"
                width={250}
                height={90}
                priority
                className="h-auto w-[250px] object-contain"
              />
            </Link>
          </div>

          {/* Social media */}
          <div className="flex items-center gap-[15px] lg:pl-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full text-[14px] text-white transition-transform duration-200 hover:-translate-y-1 ${social.className}`}
                >
                  <Icon />
                </Link>
              );
            })}
          </div>

          {/* Newsletter */}
          <div className="w-full lg:pl-1 lg:col-span-2 ">
            <p className="mb-[9px] text-[13px] font-normal leading-5 text-white">
              Sign up for Exclusive Offers and Updates!
            </p>

            <form
              action="#"
              method="get"
              className="w-full grid grid-cols-3 gap-1.5 lg:grid-cols-3 items-end lg:gap-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                aria-label="Name"
                autoComplete="name"
                className="h-[32px] min-w-0 rounded-[2px] border border-RC_border bg-background px-3 text-[12px] text-desc outline-none placeholder:text-desc focus:border-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                autoComplete="email"
                required
                className="h-[32px] min-w-0 rounded-[2px] border border-RC_border bg-background px-3 text-[12px] text-desc outline-none placeholder:text-desc focus:border-white"
              />

              <button
                type="submit"
                className="md:col-span-2 h-[32px] rounded-[3px] bg-white px-4 text-[12px] font-medium text-primary transition-colors duration-200 hover:bg-white/75 lg:col-span-1"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:pb-[31px]">
          <div className="relative lg:pr-7 lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:h-[62px] lg:after:w-px lg:after:bg-RC_border">
            <FooterLinks title="Main Menu" links={mainMenu} />
          </div>

          <div className="relative lg:px-[41px] lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:h-[62px] lg:after:w-px lg:after:bg-RC_border">
            <FooterLinks title="Useful Links" links={usefulLinks} />
          </div>

          <div className="relative lg:px-[41px] lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:h-[62px] lg:after:w-px lg:after:bg-RC_border">
            <FooterLinks title="Quick Links" links={quickLinks} />
          </div>

          {/* Contact details */}
          <div className="min-w-0 lg:pl-[30px]">
            <h3 className="mb-4 whitespace-nowrap text-[22px] font-bold leading-tight text-white sm:text-[23px]">
              Contact Details
            </h3>

            <ul className="space-y-[11px] text-[12px] leading-[18px] text-white">
              <li className="flex items-start gap-[9px]">
                <FaPhoneAlt className="mt-[2px] shrink-0 text-[14px] text-white" />
                <a
                  href="tel:+18177042917"
                  className="transition-colors hover:text-white/75"
                >
                  (817)-704-2917
                </a>
              </li>

              <li className="flex items-start gap-[9px]">
                <FaEnvelope className="mt-[2px] shrink-0 text-[14px] text-white" />
                <a
                  href="mailto:sales@erixumpackaging.com"
                  className="break-all transition-colors hover:text-white/75"
                >
                  sales@erixumpackaging.com
                </a>
              </li>

              <li className="flex items-start gap-[10px]">
                <FaMapMarkerAlt className="mt-[2px] shrink-0 text-base text-white" />
                <a
                  href="https://maps.google.com/?q=4500+Mercantile+Plaza+Suite+300+Fort+Worth+TX+76137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white/75"
                >
                  4500 Mercantile Plaza, Suite 300
                  <br />
                  Fort Worth, TX 76137 United
                  <br />
                  States
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-RC_border py-[15px] sm:flex-row sm:gap-4">
          <p className="text-center text-[12px] leading-5 text-white sm:text-left">
            All rights reserved Ray Custom Packaging © 2026
          </p>

          {/* Payment methods */}
          <div className="flex h-[46px] w-[230px] shrink-0 items-center justify-around rounded-[8px] border border-RC_border bg-background px-2 text-primary">
            <SiMastercard className="text-[28px] text-[#eb001b]" />
            <FaCcVisa className="text-[28px] text-[#0754a4]" />
            <FaCcAmex className="text-[28px] text-[#2474b8]" />
            <FaCcDiscover className="text-[27px] text-[#263b4b]" />
            <FaCcPaypal className="text-[27px] text-[#0965a8]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
