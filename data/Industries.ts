export type Industry = {
    slug: string;
    name: string;
    description: string;
    categorySlug: string;
    image: string;
};

export const Industries: Industry[] = [
    {
        slug: "ecommerce-retail",
        name: "Ecommerce & Retail",
        description:
            "Mailers and retail-ready boxes built for shipping, shelf presence and repeat orders.",
        categorySlug: "mailer-boxes",
        image: "/images/p3.jpg",
    },
    {
        slug: "beauty-cosmetics",
        name: "Beauty & Cosmetics",
        description:
            "Soft-touch cartons and rigid boxes that make skincare, makeup and fragrance feel premium.",
        categorySlug: "cosmetic-boxes",
        image: "/images/p7.jpg",
    },
    {
        slug: "food-beverage",
        name: "Food & Beverage",
        description:
            "Food-safe, grease-resistant packaging for takeaway, meal kits and pantry brands.",
        categorySlug: "food-boxes",
        image: "/images/p11.jpg",
    },
    {
        slug: "bakery-sweets",
        name: "Bakery & Sweets",
        description:
            "Windowed boxes, cake boards and pastry cartons that keep bakes fresh and gift-ready.",
        categorySlug: "bakery-boxes",
        image: "/images/p10.jpg",
    },
    {
        slug: "apparel-fashion",
        name: "Apparel & Fashion",
        description:
            "Garment boxes and printed mailers with inserts, tissue and ribbon for fashion brands.",
        categorySlug: "apparel-boxes",
        image: "/images/p12.jpg",
    },
    {
        slug: "cbd-wellness",
        name: "CBD & Wellness",
        description:
            "Compliant cartons, tincture boxes and pouches with child-resistant options.",
        categorySlug: "cbd-boxes",
        image: "/images/p1.jpg",
    },
    {
        slug: "pets",
        name: "Pet Products",
        description:
            "Bold, durable packaging for treats, toys and supplements that stands out in-store.",
        categorySlug: "pet-boxes",
        image: "/images/p13.jpg",
    },
    {
        slug: "subscription-boxes",
        name: "Subscription Boxes",
        description:
            "Custom-printed presentation boxes that turn monthly deliveries into unboxing events.",
        categorySlug: "shapes-styles",
        image: "/images/p5.jpg",
    },
];
