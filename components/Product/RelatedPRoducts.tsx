import React from 'react'
import ProductBox from './ProductBox'

const RelatedPRoducts = () => {
    return (
        <section className='pt-5 pb-16'>
            <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
                <h3 className="md:text-[32px] text-2xl font-extrabold leading-tight text-primary text-center mb-4">
                    Related Products
                </h3>
                <p className='text-base font-normal text-primary text-center max-w-[940px] mx-auto mb-5'>
                    Explore more custom cardboard packaging solutions designed to elevate your brand.
                </p>
                <div className='max-w-[1400px] mx-auto px-5 sm:px-10 grid md:grid-cols-4 grid-cols-1 gap-5 pt-4'>
                    {[1, 2, 3, 4].map((item, idx) => (
                        <ProductBox key={idx} data={item} view='grid' />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RelatedPRoducts