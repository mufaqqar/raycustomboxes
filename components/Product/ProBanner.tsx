import { MdOutlineCloudUpload } from 'react-icons/md'
import BreadCrumb from '../BreadCrumb'
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa'
import ProductGallery from './ProductGallery'
import Link from 'next/link'
import type { Product } from '@/data/Products'

const ProBanner = ({ data }: { data: Product }) => {
    return (
        <section className='pt-8 bg-background'>
            <div className='max-w-[1400px] mx-auto px-5 sm:px-10 grid md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10'>
                <ProductGallery />
                <div>
                    <div className='bg-white px-5 py-5 rounded-[18px] border border-RC_border'>
                        <BreadCrumb title={data.name} />
                        <div>
                            <h1 className='text-2xl lg:text-3xl font-extrabold text-primary mb-2.5'>
                                {data.name}
                            </h1>
                            <p className='text-sm leading-6 text-desc'>
                                {data.description}
                            </p>
                            <div className='mt-3 flex flex-wrap items-center gap-3 text-xs text-desc'>
                                <span className='rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary'>
                                    Starting from {data.startingPrice}
                                </span>
                                <Link href={data.trace} className='font-semibold text-primary hover:text-RC_Green'>
                                    Browse {data.category}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <form className='grid md:grid-cols-3 grid-cols-1 gap-y-2.5 gap-x-3 py-4 px-5 bg-primary/95 rounded-[18px]'>
                            <div className='md:col-span-3'>
                                <p className='text-sm font-semibold text-white'>Get a Free Quote</p>
                                <p className='text-xs text-white/80'>Tell us your size and quantity and we’ll send pricing today.</p>
                            </div>
                            <div>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Full Name'
                                    className='text-sm leading-none font-normal text-primary placeholder:text-desc bg-white border-2 border-transparent rounded-lg py-2.5 px-3 w-full focus:border-white outline-none' />
                            </div>
                            <div>
                                <input
                                    type='tel'
                                    name='phone'
                                    placeholder='Phone Number'
                                    className='text-sm leading-none font-normal text-primary placeholder:text-desc bg-white border-2 border-transparent rounded-lg py-2.5 px-3 w-full focus:border-white outline-none' />
                            </div>
                            <div>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email Address'
                                    className='text-sm leading-none font-normal text-primary placeholder:text-desc bg-white border-2 border-transparent rounded-lg py-2.5 px-3 w-full focus:border-white outline-none' />
                            </div>
                            <div>
                                <input
                                    type='number'
                                    name='length'
                                    placeholder='Length'
                                    className='text-sm leading-none font-normal text-primary placeholder:text-desc bg-white border-2 border-transparent rounded-lg py-2.5 px-3 w-full focus:border-white outline-none' />
                            </div>
                            <div>
                                <input
                                    type='number'
                                    name='width'
                                    placeholder='Width'
                                    className='text-sm leading-none font-normal text-primary placeholder:text-desc bg-white border-2 border-transparent rounded-lg py-2.5 px-3 w-full focus:border-white outline-none' />

                            </div>
                            <div>
                                <input
                                    type='number'
                                    name='depth'
                                    placeholder='Depth'
                                    className='text-sm leading-none font-normal text-primary placeholder:text-desc bg-white border-2 border-transparent rounded-lg py-2.5 px-3 w-full focus:border-white outline-none' />
                            </div>
                            <div className='md:col-span-2'>
                                <input
                                    type='number'
                                    name='quantity'
                                    placeholder='Quantity'
                                    className='text-sm leading-none font-normal text-primary placeholder:text-desc bg-white border-2 border-transparent rounded-lg py-2.5 px-3 w-full focus:border-white outline-none' />
                            </div>
                            <div className='md:col-span-1'>
                                <button type='button' className='bg-white hover:bg-white/90 h-[42px] w-full rounded-lg text-primary text-sm font-semibold flex items-center justify-center gap-2'>
                                    <MdOutlineCloudUpload size={18} /> Upload Artwork
                                </button>
                            </div>
                            <div className='md:col-span-3 flex md:flex-row flex-col gap-3'>
                                <button type='button' className='bg-RC_Green hover:bg-RC_Green_hovr h-11 flex-1 rounded-lg text-white text-sm font-semibold flex items-center justify-center gap-2'>
                                    <FaShoppingCart size={14} /> Add to Cart
                                </button>
                                <button type='button' className='bg-white hover:bg-white/90 h-11 flex-1 rounded-lg text-primary text-sm font-semibold flex items-center justify-center gap-2'>
                                    Request a Quote <FaArrowRight size={12} />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='w-full border border-RC_border rounded-2xl p-1 mt-3 flex items-center shadow-[0_6px_25px_-8px_rgb(56,56,130,0.15)] bg-white'>
                        <div className='w-2/3 flex gap-2 items-center py-1.5 px-4'>
                            <span className='text-[10px] font-semibold text-primary/70 uppercase'>
                                starting from
                            </span>
                            <span className="md:text-[28px] md:leading-none text-xl font-extrabold text-primary">
                                {data.startingPrice}
                            </span>
                        </div>
                        <div className='w-[195px]'>
                            <button className='text-[13px] font-semibold text-white uppercase bg-primary hover:bg-prim_hovr px-4 py-2 flex items-center justify-between gap-2 rounded-[14px] group w-full'>
                                <span className='min-w-[26px] min-h-[26px] bg-white/30 group-hover:scale-105 rounded-full flex items-center justify-center'>
                                    <FaShoppingCart size={14} />
                                </span>  Add to Cart
                                <span className='min-w-[26px] min-h-[26px] bg-white/30 group-hover:scale-105 rounded-full flex items-center justify-center'>
                                    <FaArrowRight />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProBanner
