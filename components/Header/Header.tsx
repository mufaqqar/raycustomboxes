"use client"
import { NavigationItem, Navlinks } from "@/data/NavLinks";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa"
import { HiChevronDown } from "react-icons/hi"
import { MdClose } from "react-icons/md";
import { MblMenu } from "./MblMenu";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsCart } from "react-icons/bs";

const links: NavigationItem[] = Navlinks;

const Header = () => {
    const [mblMenu, setMblMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const navRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveMenu(null);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <header className="bg-background relative">
            <div className="md:hidden flex gap-2 items-center justify-center bg-primary">
                    <Link href="tel:8005588047" className="text-xs font-medium text-white px-3 py-2 rounded-lg flex justify-center items-center gap-1 transition-all duration-300 ease-in-out">
                        <FaPhoneVolume size={20} />  800 558 8047
                    </Link>
                    <Link href="https://wa.me/18005588047" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-white px-3 py-2 rounded-lg flex justify-center items-center gap-1 transition-all duration-300 ease-in-out">
                        <IoLogoWhatsapp size={18} />  WhatsApp Us
                    </Link>
            </div>
            <div className='max-w-[1400px] mx-auto px-5 sm:px-10 md:py-3 py-1.5 flex items-center justify-between border-b border-RC_border md:border-none'>
                <div>
                    <Link href="/" className="inline-flex">
                        <Image src="/images/logoblack.png" alt="logo" width={220} height={61} className="md:w-[200px] w-[150px] md:h-auto" />
                    </Link>
                </div>
                {mblMenu && <MblMenu setMblMenu={setMblMenu} />}
                <div className="md:block hidden w-80 xl:w-125">
                    <form className="rounded-lg border border-RC_border bg-transparent flex items-center py-2.5 px-4 h-10">
                        <input
                            id="search"
                            name="search"
                            placeholder="Search Products..."
                            className="w-full outline-none traking-wider text-xs sm:text-sm h-full text-desc placeholder:text-desc" />
                        <button className="text-title/50">
                            <FaSearch />
                        </button>
                    </form>
                </div>
                <div className="flex items-center gap-3">
                    <Link href="tel:8005588047" className="text-base font-medium text-primary hover:text-white px-3 py-2 rounded-lg hidden md:flex items-center gap-2 bg-transparent hover:bg-primary border-2 border-primary transition-all duration-300 ease-in-out">
                        <FaPhoneVolume size={22} />  800 558 8047
                    </Link>
                    <Link href="https://wa.me/18005588047" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-white hover:text-RC_Green px-3 py-2 rounded-lg hidden md:flex items-center gap-2 bg-RC_Green hover:bg-transparent border-2 border-RC_Green transition-all duration-300 ease-in-out">
                        <IoLogoWhatsapp size={22} />  WhatsApp Us
                    </Link>
                    <button onClick={() => setMblMenu(!mblMenu)} className="text-primary text-2xl md:hidden flex items-center gap-5">
                        {!mblMenu ? <FaBars /> : <MdClose />}
                    </button>
                    <button className="text-2xl text-primary hover:text-prim_hovr relative cursor-pointer">
                        <Link href="/cart" aria-label="Cart" className="relative inline-flex">
                            <span className="text-xs inline-flex w-4.5 h-4.5 rounded-full bg-primary text-white text-center justify-center items-center absolute -right-2 -top-2">0</span>
                            <BsCart />
                        </Link>
                    </button>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto px-5 sm:px-10 md:flex hidden items-center justify-between bg-white py-2 border border-RC_border/50 rounded">
                <nav>
                    <ul ref={navRef} className="flex md:flex-row gap-x-6 lg:gap-x-10 items-center justify-start">
                        {links.map((item) => (
                            <li key={item.label} className="relative">

                                {/* LINK */}
                                {item.type === "link" && (
                                    <Link
                                        onMouseEnter={() => setActiveMenu(null)}
                                        href={item.slug || "#"}
                                        className="text-xs xl:text-sm uppercase font-medium text-desc flex items-center gap-3 hover:scale-95 duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {/* DROPDOWN */}
                                {item.type === "dropdown" && (
                                    <>
                                        <Link
                                            href={item.slug || "#"}
                                            onMouseEnter={() => setActiveMenu(item.label)}
                                            className="text-xs xl:text-sm uppercase font-medium text-desc flex items-center gap-2 hover:scale-95 duration-300"
                                        >
                                            {item.label} <HiChevronDown />
                                        </Link>

                                        {activeMenu === item.label && (
                                            <div onMouseLeave={() => setActiveMenu(null)} className="absolute w-60 top-full bg-white shadow-[0_10px_30px_0_rgba(0,0,0,0.15)] border border-RC_border/50 border-t-2 border-t-primary p-2.5 flex flex-col gap-1 divide-y divide-[#eee] z-[999] mt-4">
                                                {item.children?.map((child) => (
                                                    <Link
                                                        key={child.label}
                                                        href={child.slug}
                                                        className="flex items-center gap-x-2.5 hover:text-primary text-desc px-3.5 py-2.5 rounded-sm group"
                                                        onClick={() => setActiveMenu(null)}
                                                    >
                                                        <span className="text-[13px] font-bold text-desc capitalize group-hover:bg-primary group-hover:text-white w-7 h-7 rounded-md flex items-center justify-center bg-primary/10">
                                                            {child.label[0]}
                                                        </span>
                                                        <span className="text-xs sm:text-sm font-medium">{child.label}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}

                                {/* MEGA MENU */}
                                {item.type === "mega" && (
                                    <>
                                        <Link
                                            href={item.slug || "#"}
                                            onMouseEnter={() => setActiveMenu(item.label)}
                                            className="text-xs xl:text-sm uppercase font-medium text-desc flex items-center gap-2 hover:scale-95 duration-300"
                                        >
                                            {item.label} <HiChevronDown />
                                        </Link>

                                        {activeMenu === item.label && (
                                            <div onMouseLeave={() => setActiveMenu(null)} className="absolute w-full top-full pt-4 left-0 right-0 z-[999]">
                                                <div className="w-[720px] bg-white shadow-[0_10px_30px_0_rgba(0,0,0,0.15)] p-5 border border-RC_border/50 border-t-2 border-t-primary bg-[radial-gradient(circle_at_top_left,rgba(55,56,130,0.05),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(55,56,130,0.05),transparent_50%)]">
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                        {item.children?.flatMap(group => group.items).map((i) => (
                                                            <Link
                                                                key={i.label}
                                                                href={i.slug}
                                                                className="flex items-center gap-x-2.5 hover:text-primary text-desc bg-transparent hover:bg-primary/5 py-2 px-3 rounded-sm border-b border-[#eee] group"
                                                                onClick={() => setActiveMenu(null)}
                                                            >
                                                                <span className="text-[13px] font-bold text-desc capitalize group-hover:bg-primary group-hover:text-white w-7 h-7 rounded-md flex items-center justify-center bg-primary/10">
                                                                    {i.label[0]}
                                                                </span>
                                                                <span className="text-xs sm:text-sm font-medium">{i.label}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="hidden items-center gap-4 lg:flex">
                    <Link href="/request-quote" className="text-xs font-semibold text-center text-white bg-primary hover:bg-prim_hovr rounded-lg py-3 px-6 hover:-translate-y-0.5 transition-all ease-in-out duration-300">
                        Request a quote
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header