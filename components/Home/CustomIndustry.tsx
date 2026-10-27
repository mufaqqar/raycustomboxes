import { BsBoxSeam } from 'react-icons/bs'
import { FaHeadphones } from 'react-icons/fa'
import { GoShieldCheck } from 'react-icons/go'
import { LuLeaf, LuTag, LuUsers } from 'react-icons/lu'
import { MdOutlineTimer } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const CustomIndustry = () => {
    return (
        <div className='max-w-[1260px] mx-auto px-5 sm:px-8 grid md:grid-cols-5 grid-cols-1 gap-4.5 md:divide-x md:divide-y-0 divide-x-0 divide-y divide-black/20 items-center mt-[-60px] rounded-xl bg-white p-5'>
            <div className='h-full py-2 px-2.5 flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                <span className='bg-[#e9e7fa] min-w-10 h-10 rounded-full flex items-center justify-center'>
                    <LuTag className='text-2xl leading-none text-primary' />
                </span>
                <div>
                    <h4 className='text-base leading-none font-medium text-primary mb-1.5'>
                        Competitive Pricing
                    </h4>
                    <p className='text-sm font-normal text-desc'>
                        Best Quality at Lowest Prices.
                    </p>
                </div>
            </div>
            <div className='h-full py-2 px-2.5 flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                <span className='bg-[#f7d6de] min-w-10 h-10 rounded-full flex items-center justify-center'>
                    <TbTruckDelivery className='text-2xl leading-none text-primary' />
                </span>
                <div>
                    <h4 className='text-base leading-none font-medium text-primary mb-1.5'>
                        Free Shipping
                    </h4>
                    <p className='text-sm font-normal text-desc'>
                        Fast and Free Delivery across USA.
                    </p>
                </div>
            </div>
            <div className='h-full py-2 px-2.5 flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                <span className='bg-[#f3e6d3] min-w-10 h-10 rounded-full flex items-center justify-center'>
                    <BsBoxSeam className='text-2xl leading-none text-primary' />
                </span>
                <div>
                    <h4 className='text-base leading-none font-medium text-primary mb-1.5'>
                        Low MOQ
                    </h4>
                    <p className='text-sm font-normal text-desc'>
                        Order Small or Bulk.
                    </p>
                </div>
            </div>
            <div className='h-full py-2 px-2.5 flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                <span className='bg-[#e9e7fa] min-w-10 h-10 rounded-full flex items-center justify-center'>
                    <MdOutlineTimer className='text-2xl leading-none text-primary' />
                </span>
                <div>
                    <h4 className='text-base leading-none font-medium text-primary mb-1.5'>
                        Fast Turnaround
                    </h4>
                    <p className='text-sm font-normal text-desc'>
                        Quick Production & On-Time Delivery
                    </p>
                </div>
            </div>
            <div className='h-full py-2 px-2.5 flex items-center justify-center gap-2.5 hover:-translate-y-1 transition-all ease-in-out duration-300'>
                <span className='bg-[#e3f1d9] min-w-10 h-10 rounded-full flex items-center justify-center'>
                    <FaHeadphones className='text-2xl leading-none text-primary' />
                </span>
                <div>
                    <h4 className='text-base leading-none font-medium text-primary mb-1.5'>
                        Free Design Support
                    </h4>
                    <p className='text-sm font-normal text-desc'>
                        Professional Design Assistant.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CustomIndustry