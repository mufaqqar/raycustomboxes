export const Navlinks = [
    {
        label: "Boxes by industry",
        slug: "#",
        type: "mega" as const,
        children: [
            {
                items: [
                    {
                        label: "Top Tuck Auto-lock Boxes",
                        slug: "/category/corrugated-boxes",
                    },
                    {
                        label: "Mylar Bags",
                        slug: "/mylar-bags",
                    },
                    {
                        label: "CBD Boxes",
                        slug: "/cbd-boxes",
                    },
                    {
                        label: "Mailer Boxes",
                        slug: "/mailer-boxes",
                    },
                    {
                        label: "Kraft Boxes",
                        slug: "/kraft-boxes",
                    },
                    {
                        label: "Cardboard Boxes",
                        slug: "/cardboard-boxes",
                    },
                    {
                        label: "Shapes & Styles",
                        slug: "/shapes-styles",
                    },
                    {
                        label: "Pet Boxes",
                        slug: "/pet-boxes",
                    },
                ],
            },
        ],
    },

    {
        label: "Boxes By Style",
        slug: "#",
        type: "mega" as const,
        children: [
            {
                items: [
                    {
                        label: "Top Tuck Auto-lock Boxes",
                        slug: "/category/corrugated-boxes",
                    },
                    {
                        label: "Mylar Bags",
                        slug: "/mylar-bags",
                    },
                    {
                        label: "CBD Boxes",
                        slug: "/cbd-boxes",
                    },
                    {
                        label: "Mailer Boxes",
                        slug: "/mailer-boxes",
                    },
                    {
                        label: "Kraft Boxes",
                        slug: "/kraft-boxes",
                    },
                    {
                        label: "Cardboard Boxes",
                        slug: "/cardboard-boxes",
                    },
                    {
                        label: "Shapes & Styles",
                        slug: "/shapes-styles",
                    },
                    {
                        label: "Pet Boxes",
                        slug: "/pet-boxes",
                    },
                ],
            },
        ],
    },

    {
        label: "Boxes By Material",
        slug: "#",
        type: "dropdown" as const,
        children: [
            { label: "Corrugated", slug: "/category/corrugated-boxes" },
            { label: "Kraft", slug: "/category/corrugated-boxes" },
            { label: "Rigid", slug: "/category/corrugated-boxes" },
        ],
    },

    {
        label: "Contact Us",
        slug: "/contact-us",
        type: "link" as const,
    },
];

export type NavLink = {
    type: "link";
    label: string;
    slug?: string;
};

export type Dropdown = {
    type: "dropdown";
    slug?: string;
    label: string;
    children: { label: string; slug: string }[];
};

export type MegaMenu = {
    type: "mega";
    slug?: string;
    label: string;
    children: {
        items: {
            label: string;
            slug: string;
        }[];
    }[];
};

export type NavigationItem = NavLink | Dropdown | MegaMenu;