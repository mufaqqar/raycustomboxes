'use client'

import { useRef } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import CategoryBox from '../Category/CategoryBox'

const IndustrySlider = () => {
    const sliderRef = useRef<Slider>(null)

    const goNext = () => {
        sliderRef.current?.slickNext()
    }

    const goPrev = () => {
        sliderRef.current?.slickPrev()
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    }
    return (
        <section>
            <div className='container mx-auto px-4'>
                <div className='w-full'>
                    <h2 className='md:text-[32px] text-2xl font-extrabold leading-tight text-primary text-center mb-4'>
                        Choose Your Custom Packaging Boxes Style
                    </h2>
                    <p className='mx-auto mt-2 max-w-2xl text-lg text-desc sm:text-lg text-center'>
                        We provide you the best packaging solutions with customized printed box service, which matches your industry and product specific needs. Get high-quality custom boxes with logo with a flexible and simple packaging process.
                    </p>
                </div>
            </div>
            <div className='container mx-auto px-4 mt-14 relative'>
                <div className=''>
                    <Slider ref={sliderRef} {...settings} className="CatSlider">
                    {['corrugated-boxes','mailer-boxes','kraft-boxes','cbd-boxes','apparel-boxes'].map((slug) => (
                        <CategoryBox key={slug} slug={slug} />
                    ))}
                    </Slider>
                    <div className='flex items-center justify-center gap-10 mt-10'>
                        <button onClick={goPrev} className="text-white text-xs flex items-center justify-center scale-100 hover:scale-110 w-10 h-10 rounded-full bg-primary hover:bg-prim_hovr transition-all duration-100 absolute top-[45%] -translate-y-1/2 left-0">
                            <FaChevronLeft />
                        </button>

                        <button onClick={goNext} className="text-white text-xs flex items-center justify-center scale-100 hover:scale-110 w-10 h-10 rounded-full bg-primary hover:bg-prim_hovr transition-all duration-100 absolute top-[45%] -translate-y-1/2 right-0">
                            <FaChevronRight />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default IndustrySlider