export type Product = {
    slug: string;
    name: string;
    category: string;
    trace: string;
    image: string;
    startingPrice: string;
    description: string;
    /** Optional gallery image URLs (WordPress media). */
    gallery?: string[];
};

export const Products: Product[] = [
    {
        slug: "corrugated-mailer-boxes",
        name: "Corrugated Mailer Boxes",
        category: "Mailer Boxes",
        trace: "/category/mailer-boxes",
        image: "/images/p2.jpg",
        startingPrice: "$0.85",
        description:
            "Durable corrugated mailers with a tuck-front or auto-lock closure, printed inside and out for a memorable unboxing.",
    },
    {
        slug: "custom-printed-boxes",
        name: "Custom Printed Boxes",
        category: "Custom Boxes",
        trace: "/category/corrugated-boxes",
        image: "/images/p3.jpg",
        startingPrice: "$0.92",
        description:
            "Full-colour printed boxes built to your exact dimensions, with free artwork support and no plate charges.",
    },
    {
        slug: "kraft-shipping-boxes",
        name: "Kraft Shipping Boxes",
        category: "Kraft Boxes",
        trace: "/category/kraft-boxes",
        image: "/images/p4.jpg",
        startingPrice: "$0.75",
        description:
            "Eco-friendly kraft shippers with reinforced walls for safe transit and a natural, recyclable finish.",
    },
    {
        slug: "rigid-luxury-boxes",
        name: "Rigid Luxury Boxes",
        category: "Rigid Boxes",
        trace: "/category/shapes-styles",
        image: "/images/p5.jpg",
        startingPrice: "$2.40",
        description:
            "Premium wrapped rigid boxes with magnetic closures, foam inserts and foil or embossed branding.",
    },
    {
        slug: "folding-cartons",
        name: "Folding Cartons",
        category: "Cartons",
        trace: "/category/cardboard-boxes",
        image: "/images/p6.jpg",
        startingPrice: "$0.65",
        description:
            "Lightweight folding cartons for retail shelves, cosmetics and food, available with window patching.",
    },
    {
        slug: "cosmetic-packaging-boxes",
        name: "Cosmetic Packaging Boxes",
        category: "Cosmetics",
        trace: "/category/cosmetic-boxes",
        image: "/images/p7.jpg",
        startingPrice: "$0.95",
        description:
            "Soft-touch cosmetic boxes and sleeves that make skincare, makeup and fragrance lines look premium.",
    },
    {
        slug: "soap-boxes",
        name: "Soap Boxes",
        category: "Soap",
        trace: "/category/soap-boxes",
        image: "/images/p8.jpg",
        startingPrice: "$0.55",
        description:
            "Die-cut soap sleeves and boxes with grease-resistant coatings and vivid custom printing.",
    },
    {
        slug: "candle-boxes",
        name: "Candle Boxes",
        category: "Candles",
        trace: "/category/shapes-styles",
        image: "/images/p9.jpg",
        startingPrice: "$0.80",
        description:
            "Sturdy candle boxes with inserts that hold jars and tins securely during shipping and display.",
    },
    {
        slug: "bakery-boxes",
        name: "Bakery Boxes",
        category: "Bakery",
        trace: "/category/bakery-boxes",
        image: "/images/p10.jpg",
        startingPrice: "$0.70",
        description:
            "Food-safe bakery boxes with grease barriers and clear windows for cakes, pastries and cookies.",
    },
    {
        slug: "food-packaging-boxes",
        name: "Food Packaging Boxes",
        category: "Food",
        trace: "/category/food-boxes",
        image: "/images/p11.jpg",
        startingPrice: "$0.78",
        description:
            "FDA-compliant food packaging in printed board, kraft and corrugated, with barrier liners on request.",
    },
    {
        slug: "apparel-boxes",
        name: "Apparel Boxes",
        category: "Apparel",
        trace: "/category/apparel-boxes",
        image: "/images/p12.jpg",
        startingPrice: "$0.88",
        description:
            "Garment boxes and mailers with tissue, ribbon and insert options for fashion and streetwear brands.",
    },
    {
        slug: "pet-packaging-boxes",
        name: "Pet Packaging Boxes",
        category: "Pet",
        trace: "/category/pet-boxes",
        image: "/images/p13.jpg",
        startingPrice: "$0.82",
        description:
            "Retail-ready boxes for treats, toys and supplements with bold printing and tamper-evident seals.",
    },
    {
        slug: "mylar-stand-up-pouches",
        name: "Mylar Stand-Up Pouches",
        category: "Mylar",
        trace: "/category/mylar-bags",
        image: "/images/pro1.jpg",
        startingPrice: "$0.35",
        description:
            "Barrier mylar pouches with resealable zippers for coffee, snacks, powders and CBD products.",
    },
    {
        slug: "cbd-packaging-boxes",
        name: "CBD Packaging Boxes",
        category: "CBD",
        trace: "/category/cbd-boxes",
        image: "/images/p1.jpg",
        startingPrice: "$0.90",
        description:
            "Compliant CBD cartons and tincture boxes with child-resistant inserts and QR-ready artwork panels.",
    },
];

export const getProduct = (slug: string) => Products.find((product) => product.slug === slug);
