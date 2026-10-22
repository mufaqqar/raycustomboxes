export type Category = {
    slug: string;
    name: string;
    shortName: string;
    description: string;
    image: string;
    startingPrice: string;
};

export const Categories: Category[] = [
    {
        slug: "corrugated-boxes",
        name: "Custom Corrugated Boxes",
        shortName: "Corrugated Boxes",
        description:
            "Heavy-duty corrugated boxes engineered for shipping and retail display, printed edge to edge with your branding.",
        image: "/images/p2.jpg",
        startingPrice: "$0.85",
    },
    {
        slug: "cardboard-boxes",
        name: "Custom Cardboard Boxes",
        shortName: "Cardboard Boxes",
        description:
            "Lightweight cardboard packaging for shelf-ready retail, available in folding cartons and printed sleeves.",
        image: "/images/p6.jpg",
        startingPrice: "$0.65",
    },
    {
        slug: "mailer-boxes",
        name: "Custom Mailer Boxes",
        shortName: "Mailer Boxes",
        description:
            "E-commerce mailers with tuck-front or auto-lock closures, printed inside for a premium unboxing moment.",
        image: "/images/p3.jpg",
        startingPrice: "$0.80",
    },
    {
        slug: "kraft-boxes",
        name: "Custom Kraft Boxes",
        shortName: "Kraft Boxes",
        description:
            "Natural kraft packaging that is recyclable, sturdy and ideal for sustainable brand positioning.",
        image: "/images/p4.jpg",
        startingPrice: "$0.75",
    },
    {
        slug: "mylar-bags",
        name: "Custom Mylar Bags",
        shortName: "Mylar Bags",
        description:
            "Barrier mylar pouches with zipper seals and matte finishes for coffee, snacks, powders and supplements.",
        image: "/images/pro1.jpg",
        startingPrice: "$0.35",
    },
    {
        slug: "cbd-boxes",
        name: "Custom CBD Boxes",
        shortName: "CBD Boxes",
        description:
            "Compliant CBD and cannabis packaging with child-resistant inserts, tamper seals and clean label space.",
        image: "/images/p1.jpg",
        startingPrice: "$0.90",
    },
    {
        slug: "pet-boxes",
        name: "Custom Pet Boxes",
        shortName: "Pet Boxes",
        description:
            "Playful, durable packaging for pet treats, toys and supplements that stands out on crowded shelves.",
        image: "/images/p13.jpg",
        startingPrice: "$0.82",
    },
    {
        slug: "shapes-styles",
        name: "Shapes & Styles",
        shortName: "Shapes & Styles",
        description:
            "Rigid boxes, drawer boxes, pillow boxes, sleeves and more — custom die-lines built around your product.",
        image: "/images/p5.jpg",
        startingPrice: "$1.20",
    },
    {
        slug: "cosmetic-boxes",
        name: "Custom Cosmetic Boxes",
        shortName: "Cosmetic Boxes",
        description:
            "Soft-touch cartons, sleeves and rigid boxes for skincare, makeup and fragrance collections.",
        image: "/images/p7.jpg",
        startingPrice: "$0.95",
    },
    {
        slug: "food-boxes",
        name: "Custom Food Boxes",
        shortName: "Food Boxes",
        description:
            "Food-safe, grease-resistant packaging for takeaway, meal kits and pantry products.",
        image: "/images/p11.jpg",
        startingPrice: "$0.78",
    },
    {
        slug: "soap-boxes",
        name: "Custom Soap Boxes",
        shortName: "Soap Boxes",
        description:
            "Printed soap sleeves and boxes with moisture-resistant coatings that keep bars fresh and gift-ready.",
        image: "/images/p8.jpg",
        startingPrice: "$0.55",
    },
    {
        slug: "bakery-boxes",
        name: "Custom Bakery Boxes",
        shortName: "Bakery Boxes",
        description:
            "Windowed bakery boxes for cakes, cookies and pastries with food-safe board and easy-fold assembly.",
        image: "/images/p10.jpg",
        startingPrice: "$0.70",
    },
    {
        slug: "apparel-boxes",
        name: "Custom Apparel Boxes",
        shortName: "Apparel Boxes",
        description:
            "Garment boxes and mailers with tissue, ribbon and insert options for fashion and streetwear brands.",
        image: "/images/p12.jpg",
        startingPrice: "$0.88",
    },
];

export const getCategory = (slug: string) => Categories.find((category) => category.slug === slug);
