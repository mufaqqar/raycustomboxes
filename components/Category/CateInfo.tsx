import Image from 'next/image'
import Link from 'next/link'

export default function CateInfo() {
    return (
        <section className="px-4 py-12 md:py-16">
            <div className="container mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px]">
                    <Image
                        src="/images/workbanner.png"
                        alt="Premium custom packaging boxes"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <div className='scrollDiv overflow-y-auto px-[6px] h-[420px] md:h-[500px]'>
                        <div className='scrollContent'>
                            <h2 className='mb-3 text-2xl font-extrabold leading-tight text-primary md:text-[32px]'>
                                Custom Boxes Wholesale Suppliers in the USA
                            </h2>
                            <p className='mb-3 text-sm leading-6 text-desc'>
                                Custom boxes plays a wide role in the retail market and product quality. With all the competition in the retail world, unique packaging today is a key that is required when selling a product to a consumer and when presenting a product to the customer as well as brand awareness. Ray Custom Boxes is a wholesaler supplier of custom boxes in the USA with pride. At Ray Custom Boxes, we manufacture luxury custom boxes at wholesale rates in the USA. Our specialty for custom packaging solutions for many industries is durability, and premium looks. Ray Custom Boxes offers fully customizable packaging solutions at wholesale rates to any type of business ranging between big and small.
                            </p>
                            <p className='mb-4 text-sm leading-6 text-desc'>
                                So are you starting your own venture? Or selling your homemade goods? Or operating a brand at the enterprise level? We have custom boxes in bulk at the most competitive wholesale prices. Whether you require retail display boxes, or need to ship the product in the durable shipping boxes or the luxurious packaging, we have a large variety of the styles, sizes, and finishes available to create a touch of class and pack it safely on its way.
                            </p>
                            <h2 className='mb-3 text-xl font-extrabold leading-tight text-primary md:text-2xl'>
                                Customization of Custom Boxes with Logo Wholesale
                            </h2>
                            <p className='mb-4 text-sm leading-6 text-desc'>
                                Logos are needed in custom boxes as they are needed in the identity of brands and uniqueness of products. With the assistance of premium additional choices such as embossing, debossing, foil stamping, soft-touch lamination, and die-cut windows, our facility of custom packaging is provided by Ray Custom Boxes at wholesale prices. Our boxes fit like a glove to create an improved presentation and be unforgettable during the unboxing. Purchasing bulk gets you affordable prices and enhances brand awareness. We can assist you to make your brand bigger, with beautiful, cost effective packaging.
                            </p>
                            <h2 className='mb-3 text-xl font-extrabold leading-tight text-primary md:text-2xl'>
                                The Significance of Custom Packaging in Branding Protection
                            </h2>
                            <p className='mb-4 text-sm leading-6 text-desc'>
                                Packaging serves more purposes than just protecting goods; it also enhances a company's reputation and attracts clients. Custom boxes spread your message, differentiate your brand, and promote customer loyalty. Packaging that is visually appealing attracts attention and encourages people to try your product. Although quality is important, customers can't experience your product until they see it.
                            </p>
                            <h2 className='mb-3 text-xl font-extrabold leading-tight text-primary md:text-2xl'>
                                Enhance your brands' value with Ray Custom Boxes
                            </h2>
                            <p className='mb-3 text-sm leading-6 text-desc'>
                                In today's market, custom packaging serves more than just protecting your products. Packaging plays three major roles: it helps clients recognize brands, engages them, and boosts the worth of products. Custom boxes from Ray Custom Boxes provide the following objectives:
                            </p>
                            <ul className='space-y-2 text-sm text-desc'>
                                <li>
                                    <b className='text-primary'>Brand Recognition:</b> Unique Branding Elements Include Custom Boxes with Logos Together with Special Colors and Graphics.
                                </li>
                                <li>
                                    <b className='text-primary'>Product Protection:</b> Increased protection with perfect-sizing boxes designed specifically for each product.
                                </li>
                                <li>
                                    <Link href="/category/cosmetic-boxes" className='text-primary underline decoration-RC_Green underline-offset-2'>
                                        Cosmetic Packaging Boxes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/mailer-boxes" className='text-primary underline decoration-RC_Green underline-offset-2'>
                                        Mailer Boxes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/food-boxes" className='text-primary underline decoration-RC_Green underline-offset-2'>
                                        Food Boxes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/soap-boxes" className='text-primary underline decoration-RC_Green underline-offset-2'>
                                        Soap Boxes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/bakery-boxes" className='text-primary underline decoration-RC_Green underline-offset-2'>
                                        Bakery Boxes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/apparel-boxes" className='text-primary underline decoration-RC_Green underline-offset-2'>
                                        Apparel Boxes
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
