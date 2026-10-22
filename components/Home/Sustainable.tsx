import Image from 'next/image'
import Link from 'next/link'
import { BsBoxSeam } from 'react-icons/bs'
import { FaChevronRight } from 'react-icons/fa'
import { GoShieldCheck } from 'react-icons/go'
import { LuLeaf, LuUsers } from 'react-icons/lu'

const Sustainable = () => {
    return (
        <section className='py-16 bg-background'>
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col gap-8 items-center mt-10'>
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
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-5'>
                        {[1, 2, 3, 4].map((item, idx) => (
                            <div key={idx} className="bg-white py-4 lg:px-4 px-3 rounded-[10px] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] hover:shadow-none">
                                <div className='w-[62px] h-[62px] rounded-full object-contain bg-background flex items-center justify-center'>
                                    <Image src="/images/shipping.svg" alt="tiny" width="42" height="42" className="mx-auto w-[42px] h-[42px] object-contain" />
                                </div>

                                <h3 className="text-lg leading-5 font-semibold text-primary ">
                                    Custom Size & Style
                                </h3>
                                <p className="text-sm font-normal text-desc">
                                    No matter the size of your custom packaging order, you'll get the best boxes at prices to match.
                                </p>
                            </div>
                        ))}
                    </div>
                    <Link href="/about-us" className='text-base font-semibold text-white hover:text-primary border border-white hover:border-primary bg-primary hover:bg-transparent rounded-md px-4 whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5 mt-5'>
                        Explor Sustainable Packaging <FaChevronRight className='border w-7 h-7 rounded-full p-1' />
                    </Link>
                </div>
            </div>
            <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-4.5 md:divide-x md:divide-y-0 divide-x-0 divide-y divide-black/20 items-center mt-[50px] rounded-xl bg-white p-5'>
                <div className='h-full py-2 px-2.5 flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                    <LuLeaf className='text-6xl text-primary'/>
                    <div>
                        <h4 className='text-base leading-none font-medium text-primary mb-1.5'>
                            Competitive Pricing
                        </h4>
                        <p className='text-sm font-normal text-desc'>
                            Order more save more unbeatable bulk pricing guaranteed.
                        </p>
                    </div>
                </div>
                <div className='h-full py-2 px-2.5 flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                    <GoShieldCheck className='text-6xl text-primary'/>
                    <div>
                        <h4 className='text-base leading-none font-medium text-primary mb-1.5'>
                            Competitive Pricing
                        </h4>
                        <p className='text-sm font-normal text-desc'>
                            Order more save more unbeatable bulk pricing guaranteed.
                        </p>
                    </div>
                </div>
                <div className='h-full py-2 px-2.5 flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                    <BsBoxSeam className='text-6xl text-primary'/>
                    <div>
                        <h4 className='text-base leading-none font-medium text-primary mb-1.5'>
                            Competitive Pricing
                        </h4>
                        <p className='text-sm font-normal text-desc'>
                            Order more save more unbeatable bulk pricing guaranteed.
                        </p>
                    </div>
                </div>
                <div className='h-full py-2 px-2.5 flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                  <LuUsers className='text-6xl text-primary'/>
                    <div>
                        <h4 className='text-base leading-none font-medium text-primary mb-1.5'>
                            Competitive Pricing
                        </h4>
                        <p className='text-sm font-normal text-desc'>
                            Order more save more unbeatable bulk pricing guaranteed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sustainable