import Link from 'next/link'
import React from 'react'
import IndustrySlider from './IndustrySlider'
import ProductBox from '../Product/ProductBox'

const FeaturedProducts = ({ categories }: any) => {
    return (
        <section className='py-10'>
            <div className='container mx-auto px-4 mb-8 flex md:flex-row flex-col md:gap-10 gap-8 items-center justify-between'>
                <div className='w-full'>
                    <h2 className='md:text-[32px] text-2xl font-extrabold leading-tight text-primary mb-4'>
                        Trending And Popular Products
                    </h2>
                    <p className='mt-2 max-w-2xl text-lg text-desc sm:text-lg'>
                        Explore our diverse range of customizable packaging solutions designed to suit any business. With endless shape, size,
                        and color options, create packaging that enhances your brand identity, improves product presentation, and delivers a lasting impression.
                    </p>
                </div>
                <div className='md:w-fit w-full'>
                    <Link href="#" className='text-base font-semibold text-white hover:text-primary border border-white hover:border-primary bg-primary hover:bg-transparent rounded-md px-10 whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5'>
                        View all Products
                    </Link>
                </div>
            </div>
            <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-5'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
                    <ProductBox key={idx} data={item} view='grid' />
                ))}
            </div>
        </section>
    )
}

export default FeaturedProducts


