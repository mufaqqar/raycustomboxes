import Image from 'next/image'
import Link from 'next/link'
import { FaRegStar } from 'react-icons/fa'

const Banner = () => {
    return (
        <section className='pb-8 pt-5 md:py-10 lg:py-16 bg-[linear-gradient(to_bottom,#f7f8fc_0%,#f7f8fc_60%,#e9ecf5_100%)]'>
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-10 justify-between'>
                <div className='md:w-1/2 w-full'>
                    <h1 className='md:text-4xl text-xl font-extrabold text-primary mb-3'>
                        Custom Printed Boxes & Packaging Solutions in USA
                    </h1>
                    <p className='text-lg font-normal text-primary max-w-[90%] mb-8'>
                        Ray Custom Boxes delivers premium custom printed boxes and packaging solutions across the USA. Get wholesale packaging tailored to your brand with durable materials, luxury finishes, fast turnaround, and free shipping. Perfect for retail, shipping, and product presentation for businesses of all sizes.
                    </p>
                    <div className='flex gap-3'>
                        <Link href="#" className='text-sm font-semibold uppercase text-center text-white bg-primary hover:bg-prim_hovr rounded-lg py-3 px-6 inline-flex transform translate-y-0 hover:-translate-y-0.5 transition-all ease-in-out duration-300'>
                            REQUEST A QUOTE
                        </Link>
                        <Link href="#" className='text-sm font-semibold uppercase text-center text-white bg-RC_Green hover:bg-RC_Green_hovr rounded-lg py-3 px-6 inline-flex transform translate-y-0 hover:-translate-y-0.5 transition-all ease-in-out duration-300 gap-1'>
                            <FaRegStar size={20} />  See Reviews
                        </Link>
                    </div>
                </div>
                <div className='md:w-1/2 w-full flex md:justify-end'>
                    <Image src="/images/banner.png" alt='banner' width={559} height={333} />
                </div>
            </div>
        </section>
    )
}

export default Banner