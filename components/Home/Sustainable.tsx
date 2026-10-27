import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight, FaRecycle, FaTree } from 'react-icons/fa'
import { FiBox, FiFeather, } from "react-icons/fi";

const Sustainable = () => {
    return (
        <section className='py-16 bg-background'>
            <div className='max-w-[1400px] mx-auto md:px-0 px-5 sm:px-10 flex md:flex-row flex-col gap-8 items-center mt-10'>
                <div className='md:w-1/2 w-full'>
                    <Image src="/images/instant.png" alt='instant' width={600} height={598} className='w-full h-full' />
                </div>
                <div className='md:w-1/2 w-full'>
                    <h2 className='md:text-[32px] text-2xl font-extrabold leading-tight text-primary mb-4 md:text-left text-center'>
                        Better Packaging Choices
                    </h2>
                    <p className='mt-2 text-lg text-desc sm:text-lg md:text-left text-center'>
                        At Custom Fit Boxes, we specialize in crafting innovative, high-quality packaging solutions that enhance brand identity.
                        Our focus on sustainability, precision, and creativity ensures your packaging leaves a lasting impact in the competitive market.
                    </p>
                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {sustainabilityFeatures.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-[10px] bg-white px-3 py-4 shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] transition-shadow hover:shadow-none lg:px-4"
                                >
                                    <div className="mb-2 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-background">
                                        <Icon className="h-[32px] w-[32px] text-primary" />
                                    </div>

                                    <h3 className="text-lg font-semibold leading-5 text-primary">
                                        {item.title}
                                    </h3>

                                    <p className="mt-1 text-sm font-normal text-desc">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <Link href="/about-us" className='text-base font-semibold text-white hover:text-primary border border-white hover:border-primary bg-primary hover:bg-transparent rounded-md px-4 whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5 mt-5'>
                        Explor Sustainable Packaging <FaChevronRight className='border w-7 h-7 rounded-full p-1' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Sustainable


const sustainabilityFeatures = [
    {
        title: "Recyclable Materials",
        description:
            "Packaging materials designed with recyclability in mind.",
        icon: FaRecycle,
    },
    {
        title: "Responsibly Sourced Paper",
        description:
            "Paper-based options from responsible sources.",
        icon: FaTree,
    },
    {
        title: "Right-Sized Packaging",
        description:
            "Custom dimensions that help reduce unnecessary packaging material and waste.",
        icon: FiBox,
    },
    {
        title: "Recycled Content Options",
        description:
            "Materials containing recycled content options where available.",
        icon: FiFeather,
    },
];