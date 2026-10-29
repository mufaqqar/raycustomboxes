export type BlogSection = {
    heading?: string;
    paragraphs: string[];
};

export type BlogPost = {
    slug: string;
    title: string;
    category: string;
    date: string;
    image: string;
    excerpt: string;
    sections: BlogSection[];
    /** Raw HTML body from WordPress. Takes precedence over `sections`. */
    contentHtml?: string;
};

export const Blogs: BlogPost[] = [
    {
        slug: "types-of-packaging",
        title: "Types of Packaging: A Complete Guide to Packaging Materials",
        category: "Packaging Basics",
        date: "March 12, 2026",
        image: "/images/gallery/1.jpg",
        excerpt:
            "From corrugated shippers to folding cartons and rigid boxes, here is how to pick the right packaging format for your product and channel.",
        sections: [
            {
                paragraphs: [
                    "Packaging does three jobs at once: it protects the product, it carries your brand, and it tells the customer what to expect before they open the box. Choosing the right format starts with understanding where your product will be sold — ecommerce, retail shelf, or both.",
                    "The most common formats are corrugated mailers, folding cartons, rigid boxes, kraft shippers and flexible pouches. Each has a different cost profile, print capability and strength, so it helps to match the format to the weight and fragility of what you sell.",
                ],
            },
            {
                heading: "Corrugated mailers",
                paragraphs: [
                    "Corrugated mailers are the workhorse of ecommerce. A fluted board holds its shape in transit, and a tuck-front or auto-lock closure means no tape is needed. Because the mailer is assembled from one die-cut sheet, you can print the inside as well as the outside and turn unboxing into a brand moment.",
                ],
            },
            {
                heading: "Folding cartons and rigid boxes",
                paragraphs: [
                    "Folding cartons are lightweight, stack flat and are the standard for cosmetics, food and retail products that sit on a shelf. Rigid boxes use wrapped greyboard and are the premium option: they hold their shape, support magnetic closures and accept soft-touch lamination, foil stamping and embossing.",
                ],
            },
            {
                heading: "Pouches and flexible packaging",
                paragraphs: [
                    "Stand-up pouches with barrier liners keep coffee, snacks and powders fresh while using far less material than a box. They are a strong fit for subscription and refill models where shelf presence matters less than freshness and shipping weight.",
                ],
            },
            {
                heading: "How to choose",
                paragraphs: [
                    "Start with the product: weight, fragility, and whether it needs barrier protection. Then consider the channel, the unboxing experience and your order volume. If you are unsure, our packaging team can recommend a format and produce a sample before you commit to a production run.",
                ],
            },
        ],
    },
    {
        slug: "shoe-box-dimensions",
        title: "Shoe Box Dimensions: A Complete Guide to Standard Sizes",
        category: "Sizing Guides",
        date: "March 4, 2026",
        image: "/images/gallery/2.jpg",
        excerpt:
            "Standard shoe box sizes, how much clearance to add, and why the right fit reduces returns and shipping damage.",
        sections: [
            {
                paragraphs: [
                    "Shoe boxes are one of the few packaging formats with de facto standard sizes. A men's box typically runs around 13.5 x 8 x 5 inches, a women's box around 12 x 7.5 x 4 inches, and kids' boxes sit proportionally smaller. These dimensions cover most sneakers, dress shoes and boots without extra filler.",
                ],
            },
            {
                heading: "Add clearance, not slack",
                paragraphs: [
                    "A box that is too tight can scuff leather and compress the toe box; a box that is too loose lets the pair slide around. Aim for roughly 0.25 to 0.5 inches of clearance on each side, plus tissue or paper stuffing to hold the shape. If you include a dust bag or accessories, add their thickness to the internal dimensions.",
                ],
            },
            {
                heading: "Match the board to the weight",
                paragraphs: [
                    "Single-wall corrugated is enough for most retail pairs. For stacked warehouse storage or heavier boots, a double-wall board or a reinforced two-piece box prevents crushing. If the box doubles as a shipping carton, use at least a 32 ECT board.",
                ],
            },
            {
                heading: "Custom sizing pays for itself",
                paragraphs: [
                    "Custom dimensions reduce void fill, cut dimensional weight charges and make returns easier to process. If you sell multiple styles, consider two or three box sizes instead of one oversized box for everything.",
                ],
            },
        ],
    },
    {
        slug: "what-is-corrugate",
        title: "What Is Corrugate? Types, Materials, Uses and Benefits",
        category: "Packaging Basics",
        date: "February 24, 2026",
        image: "/images/gallery/3.jpg",
        excerpt:
            "A plain-language explanation of corrugated board, flute profiles and how to specify the right grade for your boxes.",
        sections: [
            {
                paragraphs: [
                    "Corrugate is a sandwich of linerboard and a wavy inner layer called fluting. The flute gives the board its strength-to-weight ratio: it creates air columns that resist crushing while keeping the material light and affordable.",
                ],
            },
            {
                heading: "Flute profiles",
                paragraphs: [
                    "A-flute is the thickest and strongest, ideal for fragile or heavy goods. B-flute is thinner and prints well, making it common for retail packaging. C-flute is the all-rounder used for most shipping cartons, and E-flute is thin enough to fold like a carton while still offering some cushioning.",
                ],
            },
            {
                heading: "Single wall vs double wall",
                paragraphs: [
                    "Single-wall board handles most ecommerce shipments. Double wall adds a second flute and liner for heavier loads, long transit times or stacking in a warehouse. The right choice depends on the product weight, the shipping method and how many times the box will be handled.",
                ],
            },
            {
                heading: "Printing on corrugate",
                paragraphs: [
                    "Flexographic printing is the most economical option for one or two colours on large runs. Digital print gives you full colour and short runs with no plates, while litho-lamination wraps a pre-printed sheet around the board for photo-quality retail packaging.",
                ],
            },
        ],
    },
    {
        slug: "packaging-materials-guide",
        title: "Corrugated vs Kraft vs Rigid: Choosing a Packaging Material",
        category: "Materials",
        date: "February 10, 2026",
        image: "/images/gallery/4.jpg",
        excerpt:
            "A side-by-side comparison of the three most popular packaging materials, with cost, strength and printability notes.",
        sections: [
            {
                paragraphs: [
                    "Most packaging decisions come down to three materials: corrugated board, kraft board and rigid greyboard. Each one trades off cost, strength and print quality in a different way.",
                ],
            },
            {
                heading: "Corrugated",
                paragraphs: [
                    "Best for shipping and structural strength. It is available in many flute profiles and can be printed digitally for short runs or flexographically for volume. If your product needs protection first, start here.",
                ],
            },
            {
                heading: "Kraft",
                paragraphs: [
                    "Kraft board is unbleached, recyclable and carries a natural look that suits sustainable brands. It prints well with a single bold colour but shows fibre texture, which is part of its appeal. It is lighter than corrugate and better suited to retail cartons than heavy shipping.",
                ],
            },
            {
                heading: "Rigid",
                paragraphs: [
                    "Rigid boxes are wrapped greyboard. They are the most expensive option but deliver the highest perceived value, with magnetic closures, foam inserts and premium finishes. Use them for gift sets, electronics and luxury products where the unboxing is part of the purchase.",
                ],
            },
        ],
    },
    {
        slug: "custom-box-printing",
        title: "Custom Box Printing: Finishes That Make Packaging Stand Out",
        category: "Design",
        date: "January 28, 2026",
        image: "/images/gallery/5.jpg",
        excerpt:
            "Spot UV, foil stamping, embossing and soft-touch lamination explained — and when each finish is worth the cost.",
        sections: [
            {
                paragraphs: [
                    "Printing gets your artwork onto the box; finishing is what makes it feel expensive. The right combination of coatings and textures can lift a simple carton without changing the structure.",
                ],
            },
            {
                heading: "Coatings",
                paragraphs: [
                    "A matte aqueous coating gives a clean, modern look and protects against scuffing. Soft-touch lamination adds a velvety feel that is especially popular for cosmetics and premium retail. Gloss coating maximises colour saturation but shows fingerprints.",
                ],
            },
            {
                heading: "Foil and embossing",
                paragraphs: [
                    "Hot foil stamping applies metallic colour with a crisp edge and is the fastest way to signal premium quality. Embossing and debossing raise or recess a logo or pattern, adding tactile depth that photographs well for social media.",
                ],
            },
            {
                heading: "Spot UV",
                paragraphs: [
                    "Spot UV adds a glossy layer to selected areas, usually over a matte background. It works best on logos, patterns and product names, and can be combined with soft-touch lamination for a high-contrast finish.",
                ],
            },
        ],
    },
    {
        slug: "sustainable-packaging",
        title: "Sustainable Packaging: Practical Swaps That Cut Waste",
        category: "Sustainability",
        date: "January 15, 2026",
        image: "/images/gallery/6.jpg",
        excerpt:
            "Recyclable materials, right-sized boxes and plastic-free inserts — simple changes that reduce cost and waste together.",
        sections: [
            {
                paragraphs: [
                    "Sustainability does not have to mean a full packaging redesign. Most brands see the biggest wins from three changes: right-sizing, switching to recyclable materials, and removing plastic from the unboxing.",
                ],
            },
            {
                heading: "Right-size the box",
                paragraphs: [
                    "Oversized boxes need more void fill and cost more to ship. Matching the box to the product reduces material use, cuts dimensional weight charges and gives a tidier unboxing experience.",
                ],
            },
            {
                heading: "Choose recyclable board",
                paragraphs: [
                    "Corrugated and kraft boards are widely recyclable and made with a high proportion of recycled fibre. Water-based inks and aqueous coatings keep the board recyclable, while plastic lamination and foil can complicate the waste stream — use them sparingly and label clearly.",
                ],
            },
            {
                heading: "Replace plastic inserts",
                paragraphs: [
                    "Moulded pulp, paper honeycomb and die-cut cardboard inserts protect products without plastic. For apparel, tissue paper and paper tape replace poly bags and plastic ribbon while improving the unboxing feel.",
                ],
            },
        ],
    },
];

export const getBlog = (slug: string) => Blogs.find((post) => post.slug === slug);
export const getRelatedBlogs = (slug: string, limit = 3) =>
    Blogs.filter((post) => post.slug !== slug).slice(0, limit);
