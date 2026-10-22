"use client";

import Slider from "react-slick";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
];

export default function ProductGallery() {
    const sliderRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const goNext = () => {
        sliderRef.current?.slickNext();
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        beforeChange: (_: number, next: number) => {
            setActiveIndex(next);
        },
    };

    return (
        <div className="flex gap-4 h-fit overflow-hidden">
            <div className="md:w-1/5 flex flex-col gap-3 max-h-[526px] overscroll-y-auto">
                {images.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt="thumb"
                        width={111}
                        height={123}
                        onClick={() => sliderRef.current.slickGoTo(index)}
                        className={`w-[75px] h-auto object-cover rounded-md cursor-pointer border transition
              ${activeIndex === index ? "border-primary" : "border-transparent"}
            `}
                    />
                ))}
            </div>
            <div className="relative md:w-4/5 z-1">
                <Slider ref={sliderRef} {...settings}>
                    {images.map((img, index) => (
                        <div key={index} className="h-full">
                            <Image
                                src={img}
                                alt="feature"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover rounded-lg bg-[#f5f5f5]"
                            />
                        </div>
                    ))}
                </Slider>

                {/* Custom Buttons */}
                <button
                    onClick={goPrev}
                    className="absolute top-1/2 -translate-y-1/2 left-4 bg-primary text-white w-[42px] h-[43px] rounded-full flex items-center justify-center hover:scale-110 transition"
                >
                    <FaChevronLeft />
                </button>

                <button
                    onClick={goNext}
                    className="absolute top-1/2 -translate-y-1/2 right-4 bg-primary text-white w-[42px] h-[43px] rounded-full flex items-center justify-center hover:scale-110 transition"
                >
                    <FaChevronRight />
                </button>

            </div>
        </div>
    );
}
