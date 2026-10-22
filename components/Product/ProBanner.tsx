import { MdOutlineCloudUpload } from 'react-icons/md'
import BreadCrumb from '../BreadCrumb'
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa'
import ProductGallery from './ProductGallery'

const ProBanner = ({ data }: any) => {
    return (
        <section className='pt-10 bg-background'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-10'>
                <ProductGallery />
                <div>
                    <div className='bg-white px-4 py-5 rounded-[18px]'>
                        <BreadCrumb title={data.name} />
                        <div className='max-h-[90px] overflow-y-auto scrollDiv'>
                            <h1 className='text-2xlxl lg:text-2xl font-semibold text-primary mb-2.5'>
                                {data.name}
                            </h1>
                            <p className='text-base font-normal text-primary'>
                                What if you can promote your products without any extra investment just with the effective and attractive packaging of products? It is seen that promotional packaging is of luxury type and unable to bear the weight of products during shipment and storage.
                            </p>
                        </div>
                    </div>
                    <div className='mt-2.5'>
                        <form className='grid md:grid-cols-3 grid-cols-1 gap-y-2.5 gap-x-3.75 py-3.5 px-4.5 bg-primary rounded-[25px]'>
                            <div>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Full Name'
                                    className='text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none' />
                            </div>
                            <div>
                                <input
                                    type='tel'
                                    name='phone'
                                    placeholder='Phone Number'
                                    className='text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none' />
                            </div>
                            <div>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email Address'
                                    className='text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none' />
                            </div>
                            <div>
                                <input
                                    type='number'
                                    name='length'
                                    placeholder='Length'
                                    className='text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none' />
                            </div>
                            <div>
                                <input
                                    type='number'
                                    name='width'
                                    placeholder='Width'
                                    className='text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none' />

                            </div>
                            <div>
                                <input
                                    type='number'
                                    name='depth'
                                    placeholder='Depth'
                                    className='text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none' />
                            </div>
                            <div>
                                <select
                                    name='unit'
                                    className="text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none">
                                    <option>Unit</option>
                                    <option>Inches</option>
                                    <option>CM</option>
                                    <option>MM</option>
                                </select>
                            </div>
                            <div>
                                <select
                                    name="material"
                                    className="text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none">
                                    <option>Material</option>
                                    <option>Kraft</option>
                                    <option>Cardboard</option>
                                    <option>Corrugated</option>
                                </select>
                            </div>
                            <div>
                                <select name="stock"
                                    className="text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none">
                                    <option>Stock</option>
                                    <option>12pt</option>
                                    <option>14pt</option>
                                    <option>16pt</option>
                                    <option>18pt</option>
                                    <option>20pt</option>
                                    <option>22pt</option>
                                    <option>24pt</option>
                                </select>
                            </div>
                            <div className="md:col-span-3 grid md:grid-cols-2 grid-cols-1 gap-y-2.5 gap-x-3.75">
                                <div>
                                    <select name="printing"
                                        className="text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none">
                                        <option>Printing</option>
                                        <option>1 Color</option>
                                        <option>2 Color</option>
                                        <option>3 Color</option>
                                        <option>4 Color</option>
                                        <option>Full Color</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        name='quantity'
                                        placeholder='Quantity'
                                        className='text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none' />
                                </div>
                            </div>
                            <div className="md:col-span-3 grid md:grid-cols-2 grid-cols-1 gap-y-2.5 gap-x-3.75">
                                <textarea name="message"
                                    placeholder='Additional Information'
                                    className='h-full text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none'></textarea>

                                <div className="flex flex-col gap-y-2.5 gap-x-3.75">
                                    <div className="w-full">
                                        <label className="flex gap-1.5 text-white text-base leading-none font-medium items-center justify-center py-2 px-4 border-dashed border-2 border-[#ddddddb8] rounded-sm">
                                            <MdOutlineCloudUpload size={20} />
                                            <span>Upload design</span>
                                            <input type="file"
                                                className="hidden text-base leading-none font-normal text-primary placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none" />
                                        </label>
                                    </div>
                                    <div className="relative self-baseline w-full">
                                        <input
                                            type='number'
                                            name='answer'
                                            placeholder='Captcha'
                                            className='text-base leading-none font-normal text-primary placeholder:text-primary bg-white border-2 border-transparent rounded-xl py-2 px-4 w-full focus:border-primary outline-none' />
                                        <span className="absolute right-0 bottom-0 py-1 px-2 bg-primary text-white text-lg rounded-md">1+6</span>
                                    </div>
                                    <div className=''>
                                        <button type='submit' className='text-[13px] font-semibold uppercase text-white bg-RC_Green hover:scale-105 transition-all duration-200 py-3 px-6 rounded-lg w-full'>
                                            Submit Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='w-full border-[#1c621a33] rounded-2xl p-1.25 mt-2 flex items-center shadow-[0_6px_25px_-8px_rgb(55,56,130,0.15)]'>
                        <div className='w-2/3 flex gap-2 items-center py-1.5 px-4 bg-[linear-gradient(135deg,rgb(182_182_205/16%)_0%,rgb(70_184_140/.02)_100%)] rounded-l-2xl'>
                            <span className='text-[10px] font-semibold text-primary/70 uppercase'>
                                starting from
                            </span>
                            <sub className='text-base font-semibold text-primary'>$</sub>
                            <span className="md:text-[28px] md:leading-none text-xl font-extrabold bg-[linear-gradient(135deg,#383882_0%,#006039_100%)] bg-clip-text text-transparent">
                                0.10</span>
                            <sup className='text-[11px] font-medium text-primary/50'>/ unit</sup>
                        </div>
                        <div className='w-[195px]'>
                            <button className='text-[13px] font-semibold text-white uppercase bg-primary hover:bg-prim_hovr px-4 py-2 flex items-center justify-between gap-2 rounded-[14px] group'>
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