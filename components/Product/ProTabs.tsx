
"use client"
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ProTabs = () => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <section className='py-16'>
            <div className="container mx-auto px-4">
                {/* Tabs */}
                <ul className="flex gap-2 items-center p-1.5 rounded-[10px] border-b-3 border-[#e2e6ea]">
                    <li>
                        <button
                            onClick={() => setActiveTab("description")}
                            className={`text-[13px] leading-4 font-semibold px-5.5 py-2.5 rounded-lg border 
                            ${activeTab === "description"
                                    ? "bg-primary text-white"
                                    : "bg-white text-title border-[#e2e6ea] hover:bg-primary hover:text-white"
                                }`}
                        >
                            Description
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => setActiveTab("specification")}
                            className={`text-[13px] leading-4 font-semibold px-5.5 py-2.5 rounded-lg border 
                            ${activeTab === "specification"
                                    ? "bg-primary text-white"
                                    : "bg-white text-title border-[#e2e6ea] hover:bg-primary hover:text-white"
                                }`}
                        >
                            Specification
                        </button>
                    </li>
                </ul>
                {/* Content */}
                <div className='pt-4'>
                    <div className='bg-white md:py-10 md:px-7.5 px-4 py-5 rounded-[15px] shadow-[0_1px_20px_rgb(0,0,0,.09)]'>
                        {activeTab === "description" ? <Tab1 /> : <Tab2 />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProTabs;

const Tab1 = () => {
    return (
        <div className='scrollDiv overflow-y-auto px-[18px] h-[500px]'>
            <div className='scrollContent'>
                <h2 className=''>
                    Custom Boxes Wholesale Suppliers in the USA
                </h2>
                <p className=''>
                    Custom boxes plays a wide role in the retail market and product quality. With all the competition in the retail world, unique packaging today is a key that is required when selling a product to a consumer and when presenting a product to the customer as well as brand awareness. We Print Boxes is a wholesaler supplier of custom boxes in the USA with pride. At We Print Boxes, we manufacture luxury custom boxes at wholesale rates in the USA. Our specialty for custom packaging solutions for many industries is durability, and premium looks. We Print Boxes offers fully customizable packaging solutions at wholesale rates to any type of business ranging between big and small.
                </p>
                <p>
                    So are you starting your own venture? Or selling your homemade goods? Or operating a brand at the enterprise level? We have custom boxes in bulk at the most competitive wholesale prices. Whether you require retail display boxes, or need to ship the product in the durable shipping boxes or the luxurious packaging, we have a large variety of the styles, sizes, and finishes available to create a touch of class and pack it safely on its way.
                </p>
                <h2 className=''>
                    Customization of Custom Boxes with Logo Wholesale
                </h2>
                <p>
                    Logos are needed in custom boxes as they are needed in the identity of brands and uniqueness of products. With the assistance of premium additional choices such as embossing, debossing, foil stamping, soft-touch lamination, and die-cut windows, our facility of custom packaging is provided by We Print Boxes at wholesale prices. Our boxes fit like a glove to create an improved presentation and be unforgettable during the unboxing. Purchasing bulk gets you affordable prices and enhances brand awareness. We can assist you to make your brand bigger, with beautiful, cost effective packaging.
                </p>
                <h2>
                    The Significance of Custom Packaging in Branding Protection
                </h2>
                <p>
                    Packaging serves more purposes than just protecting goods; it also enhances a company's reputation and attracts clients. Custom boxes spread your message, differentiate your brand, and promote customer loyalty. Packaging that is visually appealing attracts attention and encourages people to try your product. Although quality is important, customers can't experience your product until they see it.
                </p>
                <h2>
                    Enhance your brands' value with We Print Boxes
                </h2>
                <p>
                    In today's market, custom packaging serves more than just protecting your products. Packaging plays three major roles: it helps clients recognize brands, engages them, and boosts the worth of products. Custom boxes from We Print Boxes provide the following objectives:
                </p>
            </div>
        </div>
    )
}

const Tab2 = () => {
    return (
        <div className="px-[18px]">
            <h3 className="text-lg font-bold text-title mb-5 flex items-center gap-2">
                <FaCheck className="text-primary" />  Specifications
            </h3>
            <table className="spec-table">
                <tbody>
                    <tr>
                        <td>Box Style</td>
                        <td>Cereal Boxes</td>
                    </tr>
                    <tr>
                        <td>Dimension (L + W + H)</td>
                        <td>All Custom Sizes and Shapes</td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td>No Minimum</td>
                    </tr>
                    <tr>
                        <td>Paper Stock</td>
                        <td>10pt to 28pt (60lb to 400lb) Eco-Friendly Kraft, E-flute Corrugated, Bux Board, Cardstock</td>
                    </tr>
                    <tr>
                        <td>Printing</td>
                        <td>No Printing, CMYK, CMYK + 1 PMS color, CMYK + 2 PMS colors</td>
                    </tr>
                    <tr>
                        <td>Finishing</td>
                        <td>Gloss Lamination, Matte Lamination, Gloss AQ, Gloss UV, Matte UV, Spot UV, Embossing, Foiling</td>
                    </tr>
                    <tr>
                        <td>Included Options</td>
                        <td>Die Cutting, Gluing, Scored,Perforation</td>
                    </tr>
                    <tr>
                        <td>Proof</td>
                        <td>Flat View, 3D Mock-up, Physical Sampling (On request)</td>
                    </tr>
                    <tr>
                        <td>Turnaround</td>
                        <td>6-8 Business Days, RUSH</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Ship Flat, Packed in Boxes, UPS, FedEx, DHL, Skynet, DPD</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}