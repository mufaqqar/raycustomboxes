import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { FiAward, FiBox, FiHeadphones, FiPrinter } from 'react-icons/fi'

const WhoWeAre = () => {
    return (
        <section className='pb-14 pt-5'>
            <div className='max-w-[1400px] mx-auto px-5 sm:px-10 flex md:flex-row flex-col gap-8 items-center mt-10'>
                <div className='md:w-1/2 w-full'>
                    <Image src="/images/workbanner.png" alt='workbanner' width={600} height={598} className='w-full h-full' />
                </div>
                <div className='md:w-1/2 w-full text-desc/80 md:text-left text-center'>
                    <h2 className='md:text-[32px] text-2xl font-extrabold leading-tight text-primary mb-4'>
                        Who We Are
                    </h2>
                    <p className='text-lg text-desc sm:text-lg'>
                        At Custom Fit Boxes, we specialize in crafting innovative, high-quality packaging solutions that enhance brand identity.
                        Our focus on sustainability, precision, and creativity ensures your packaging leaves a lasting impact in the competitive market.
                    </p>
                    <p className='text-lg text-desc sm:text-lg'>
                        Custom Fit Boxes is a USA-based company dedicated to providing high-quality custom packaging solutions to businesses across the USA and worldwide.
                    </p>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-4 mt-5'>
                        {packagingFeatures.map((feature, idx) => {
                            const Icon = feature.icon;

                            return (<div key={idx} className="bg-white py-4 lg:px-4 px-3 rounded-[10px] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] hover:shadow-none">
                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>

                                <h3 className="text-lg leading-5 font-semibold text-primary text-center ">
                                    {feature.title}
                                </h3>
                                <p className="text-sm font-normal text-desc text-center">
                                    {feature.description}
                                </p>
                            </div>
                            );
                        })}
                    </div>
                    <Link href="/about-us" className='text-base font-semibold text-white hover:text-primary border border-white hover:border-primary bg-primary hover:bg-transparent rounded-md px-4 whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5 mt-5'>
                        About Us <FaChevronRight className='border w-7 h-7 rounded-full p-1' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre


const packagingFeatures = [
    {
        title: "Custom Size & Style",
        description:
            "Fully customizable dimensions and styles to fit your product perfectly.",
        icon: FiBox,
    },
    {
        title: "High Quality Printing Options",
        description:
            "Vibrant printing with premium materials and finishes.",
        icon: FiPrinter,
    },
    {
        title: "Expert Support",
        description:
            "Professional support at every step from design to delivery.",
        icon: FiHeadphones,
    },
    {
        title: "Design Excellence",
        description:
            "Creative packaging designs that elevate your brand identity.",
        icon: FiAward,
    },
];