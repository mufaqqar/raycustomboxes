import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

function CTA() {
    return (
        <section className='bg-prim_hovr py-16'>
            {/* HEADER */}
            <div className="container mx-auto px-4 flex md:flex-row flex-col items-center justify-between gap-3">
                <div className="min-w-0 md:text-left text-center">
                    <h2 className="md:text-[32px] text-2xl font-extrabold leading-tight text-white mb-4">
                        Learn About Custom Boxes from the Pros
                    </h2>

                    <p className="mt-2 max-w-2xl text-lg text-white sm:text-lg">
                        Stay updated with the latest packaging trends, design ideas,
                        and expert tips, all curated by Erum Packaging professionals.
                    </p>
                </div>

                <Link
                    href="#"
                    className="text-base font-semibold text-primary hover:text-white border border-white hover:border-white bg-white hover:bg-transparent rounded-md px-10 whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5"
                >
                    Request a Qoute <FiArrowRight size={11} />
                </Link>
            </div>
        </section>
    )
}

export default CTA