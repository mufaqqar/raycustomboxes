import Image from "next/image"

const Feature = () => {
    return (
        <section className="bg-background pt-[26px] pb-16">
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-5'>
                <div className=''>
                    <Image src="/images/google-review.png" alt="google-review" width={271} height={39} className="py-3.5 px-2.5 rounded-[14px] bg-white mb-2 shadow-[0_6px_20px_rgb(0,0,0,0.05)]" />
                    <Image src="/images/trustpoliot.png" alt="trustpoliot" width={271} height={39} className="py-3.5 px-2.5 rounded-[14px] bg-white mb-2 shadow-[0_6px_20px_rgb(0,0,0,0.05)]" />
                </div>
                <div className='md:w-[30%] w-full'>
                    <div className='bg-primary py-4.5 px-7.5 rounded-2xl shadow-[0_10px_30px_rgb(0,0,0,0.06)] overflow-hidden call_box'>
                        <Image src="/images/callicon.svg" alt='callicon' width={36} height={36} />
                        <p className='text-base font-medium text-white capitalize mb-1'>
                            WhatsApp Chat With
                        </p>
                        <h3 className='md:text-2xl text-xl font-medium text-white capitalize mb-1'>
                            Packaging Experts
                        </h3>
                    </div>
                </div>
                <div className='md:w-[45%] w-full grid md:grid-cols-2 grid-cols-1 gap-4.5 items-center'>
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
            </div>
        </section>
    )
}

export default Feature