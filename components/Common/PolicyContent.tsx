export type PolicySection = {
    heading: string;
    paragraphs: string[];
};

type Props = {
    updated: string;
    intro: string;
    sections: PolicySection[];
};

export default function PolicyContent({ updated, intro, sections }: Props) {
    return (
        <section className="bg-white py-12 md:py-16">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
                <div className="mx-auto max-w-[900px]">
                    <p className="mb-8 rounded-[10px] border border-RC_border bg-background px-5 py-3 text-xs text-desc">
                        Last updated: {updated}
                    </p>

                    <p className="mb-10 text-[15px] leading-[27px] text-desc">{intro}</p>

                    <div className="space-y-9">
                        {sections.map((section, index) => (
                            <div key={section.heading}>
                                <h2 className="mb-3 text-xl font-extrabold leading-tight text-primary md:text-2xl">
                                    {index + 1}. {section.heading}
                                </h2>

                                <div className="space-y-3">
                                    {section.paragraphs.map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="text-[15px] leading-[27px] text-desc"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 rounded-[12px] border border-RC_border bg-background p-6">
                        <h2 className="mb-2 text-lg font-bold text-primary">
                            Questions about this policy?
                        </h2>
                        <p className="text-sm leading-6 text-desc">
                            Email{" "}
                            <a
                                href="mailto:sales@erixumpackaging.com"
                                className="font-semibold text-primary underline decoration-RC_Green underline-offset-2"
                            >
                                sales@erixumpackaging.com
                            </a>{" "}
                            or call{" "}
                            <a
                                href="tel:+18005588047"
                                className="font-semibold text-primary underline decoration-RC_Green underline-offset-2"
                            >
                                800 558 8047
                            </a>
                            . Our team is available Monday to Friday, 9 AM – 5 PM.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
