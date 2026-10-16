import Image from 'next/image'

const CustomIndustry = () => {
    return (
        <section className='py-10'>
            <div className='max-w-[994px] mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-4.5 items-center mb-[50px]'>
                <div className='bg-[#e9e7fa] h-full py-2 px-3 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                    <Image src="/images/pricing.svg" alt='pricing' width={32} height={32} />
                    <h4 className='text-base leading-none font-medium text-primary text-center'>
                        Competitive Pricing
                    </h4>
                </div>
                <div className='bg-[#f7d6de] h-full py-2 px-3 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                    <Image src="/images/shipping.svg" alt='shipping' width={32} height={32} />
                    <h4 className='text-base leading-none font-medium text-primary text-center'>
                        Free Shipping
                    </h4>
                </div>
                <div className='bg-[#f3e6d3] h-full py-2 px-3 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                    <Image src="/images/turnaround.svg" alt='turnaround' width={32} height={32} />
                    <h4 className='text-base leading-none font-medium text-primary text-center'>
                        Quick Turnaround Time
                    </h4>
                </div>
                <div className='bg-[#e3f1d9] h-full py-2 px-3 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                    <Image src="/images/graphic.svg" alt='graphic' width={32} height={32} />
                    <h4 className='text-base leading-none font-medium text-primary text-center'>
                        Free Graphic Designing
                    </h4>
                </div>
            </div>
        </section>
    )
}

export default CustomIndustry