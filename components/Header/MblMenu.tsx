import Link from 'next/link';
import React from 'react'
import { MdClose } from 'react-icons/md'

type Props = {
    setMblMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MblMenu = ({ setMblMenu }: Props) => {
    return (
        <div className='fixed h-full w-full z-50 left-0 right-0 flex flex-col gap-y-10 items-center justify-center bg-primary/95 top-0 duration-300'>
            <button
                onClick={() => setMblMenu(false)}
                className="text-white text-2xl absolute right-6 top-6"
            >
                <MdClose />
            </button>
            <ul className='flex flex-col items-center gap-y-6 text-white'>
                <li>
                    <Link href="/products" onClick={() => setMblMenu(false)} className='cursor-pointer font-medium text-sm uppercase'>
                        Products
                    </Link>
                </li>
                <li>
                    <Link href="/industries" onClick={() => setMblMenu(false)} className='cursor-pointer font-medium text-sm uppercase'>
                        Industries
                    </Link>
                </li>
                <li>
                    <Link href="/about-us" onClick={() => setMblMenu(false)} className='cursor-pointer font-medium text-sm uppercase'>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/contact-us" onClick={() => setMblMenu(false)} className='cursor-pointer font-medium text-sm uppercase'>
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link href="/blog" onClick={() => setMblMenu(false)} className='cursor-pointer font-medium text-sm uppercase'>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href="/reviews" onClick={() => setMblMenu(false)} className='cursor-pointer font-medium text-sm uppercase'>
                        Reviews
                    </Link>
                </li>
            </ul>
            <div className='flex flex-col gap-3 items-center'>
                <Link href="/request-quote" onClick={() => setMblMenu(false)} className='text-xs font-semibold bg-white text-primary py-2 w-48 mx-auto text-center rounded'>
                    Request a Quote
                </Link>
                <Link href="/cart" onClick={() => setMblMenu(false)} className='text-xs font-semibold bg-white text-primary py-2 w-48 mx-auto text-center rounded'>
                    View Cart
                </Link>
            </div>
        </div>
    )
}