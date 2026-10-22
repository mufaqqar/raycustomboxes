
import Image from "next/image";
import Link from "next/link";

const galleryColumns = [
    {
        images: [
            {
                src: "/images/gallery/1.jpg",
                alt: "Luxury navy blue printed packaging boxes",
                aspect: "aspect-[245/306]",
            },
            {
                src: "/images/gallery/2.jpg",
                alt: "Premium blue product packaging",
                aspect: "aspect-[245/147]",
            },
        ],
    },
    {
        images: [
            {
                src: "/images/gallery/3.jpg",
                alt: "Skincare bottles and custom packaging",
                aspect: "aspect-[245/201]",
            },
            {
                src: "/images/gallery/4.jpg",
                alt: "Colorful custom printed food packaging",
                aspect: "aspect-[245/236]",
            },
        ],
    },
    {
        images: [
            {
                src: "/images/gallery/5.jpg",
                alt: "Creative branded retail packaging boxes",
                aspect: "aspect-[245/187]",
            },
            {
                src: "/images/gallery/6.jpg",
                alt: "Minimal cosmetic packaging design",
                aspect: "aspect-[245/236]",
            },
        ],
    },
    {
        images: [
            {
                src: "/images/gallery/7.jpg",
                alt: "Elegant peach colored product packaging",
                aspect: "aspect-square",
            },
            {
                src: "/images/gallery/8.jpg",
                alt: "Black and gold luxury packaging",
                aspect: "aspect-[245/147]",
            },
        ],
    },
];

export default function PackagingGallery() {
    return (
        <section className="relative isolate overflow-hidden bg-white py-16">
            {/* Mint background with curved bottom-right edge */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 -z-10 h-[450px] rounded-br-[100px] bg-[#e9f8f6]"
            />

            {/* Gallery */}
            <div className="mx-auto container px-4 ">
                <div>
                    <h2 className='md:text-[32px] text-2xl font-extrabold leading-tight text-primary text-center mb-4'>
                        Get Creative Packaging Design Inspiration

                    </h2>
                    <p className='mx-auto mt-2 max-w-2xl text-lg text-desc sm:text-lg text-center'>
                        Elevate your packaging with stunning premium finishes that enhance appeal and sophistication. From gold and silver foils to holographic effects,<br className='hidden sm:block' />
                        our high-quality finishing options ensure a luxurious, eye-catching presentation that leaves a lasting impression.
                    </p>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-primary text-center max-w-fit mx-auto mt-2 flex">
                        Follow Us On Instagram: @RefinePackaging
                    </Link>
                </div>
                <div className="grid grid-cols-2 items-start gap-3 sm:gap-5 md:grid-cols-4 mt-10">
                    {galleryColumns.map((column, columnIndex) => (
                        <div
                            key={columnIndex}
                            className={`flex min-w-0 flex-col gap-3 sm:gap-4 ${columnIndex === 0
                                ? "pt-8 sm:pt-16"
                                : columnIndex === 1
                                    ? "pt-0"
                                    : columnIndex === 2
                                        ? "pt-5 sm:pt-10"
                                        : "pt-8 sm:pt-16"
                                }`}
                        >
                            {column.images.map((image) => (
                                <div
                                    key={image.src}
                                    className={`relative w-full overflow-hidden rounded-lg ${image.aspect}`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 639px) 45vw, (max-width: 767px) 45vw, (max-width: 1070px) 22vw, 245px"
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
