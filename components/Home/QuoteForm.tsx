
"use client";

import { useRef, useState } from "react";
import type { FormEvent, DragEvent } from "react";
import {
    FiCheck,
    FiChevronDown,
    FiCloud,
    FiFileText,
    FiAward,
    FiMessageCircle,
    FiPackage,
    FiPhone,
    FiShield,
    FiTrash2,
    FiUser,
    FiArrowRight,
    FiArrowLeft,
    FiLock,
    FiClock,
} from "react-icons/fi";

type FormData = {
    fullName: string;
    email: string;
    phone: string;
    company: string;
    packagingType: string;
    boxStyle: string;
    dimensions: string;
    quantity: string;
    material: string;
    thickness: string;
    printing: string;
    colors: string;
    finishing: string;
    coating: string;
    notes: string;
    productName: string;
    productWeight: string;
    deliveryDate: string;
    deliveryLocation: string;
    productDescription: string;
    postcode: string;
};

const initialData: FormData = {
    fullName: "",
    email: "",
    phone: "",
    company: "",
    packagingType: "",
    boxStyle: "",
    dimensions: "",
    quantity: "",
    material: "",
    thickness: "",
    printing: "",
    colors: "",
    finishing: "",
    coating: "",
    notes: "",
    productName: "",
    productWeight: "",
    deliveryDate: "",
    deliveryLocation: "",
    productDescription: "",
    postcode: "",
};

const inputClass =
    "mt-1 block h-9 w-full min-w-0 rounded-md border border-slate-200 bg-white px-2.5 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100";

const labelClass = "block text-[11px] font-medium text-slate-700";

const options = {
    packagingType: [
        "Mailer Boxes",
        "Shipping Boxes",
        "Rigid Boxes",
        "Folding Cartons",
        "Paper Bags",
        "Custom Packaging",
    ],
    boxStyle: [
        "Mailer Box",
        "Regular Slotted Carton",
        "Tuck End Box",
        "Two-Piece Box",
        "Sleeve Box",
        "Custom Style",
    ],
    material: [
        "Kraft Cardboard",
        "Corrugated Cardboard",
        "Rigid Board",
        "Recycled Paper",
        "Other",
    ],
    printing: [
        "No Printing",
        "Digital Printing",
        "Offset Printing",
        "Flexographic Printing",
    ],
    colors: ["Full Color", "1 Color", "2 Colors", "3 Colors", "Custom"],
    finishing: [
        "None",
        "Matte Lamination",
        "Gloss Lamination",
        "Spot UV",
        "Foil Stamping",
        "Embossing",
    ],
    coating: ["None", "Matte", "Gloss", "Soft Touch", "Water-Based"],
    deliveryLocation: [
        "United Kingdom",
        "Europe",
        "United States",
        "International",
    ],
};

function Field({
    label,
    name,
    value,
    onChange,
    placeholder = "Enter your details",
    required = false,
    type = "text",
    min,
}: {
    label: string;
    name: keyof FormData;
    value: string;
    onChange: (name: keyof FormData, value: string) => void;
    placeholder?: string;
    required?: boolean;
    type?: string;
    min?: string;
}) {
    return (
        <label className={labelClass}>
            {label}
            {required && <span className="text-rose-500"> *</span>}
            <input
                name={name}
                type={type}
                value={value}
                min={min}
                required={required}
                placeholder={placeholder}
                onChange={(e) => onChange(name, e.target.value)}
                className={inputClass}
            />
        </label>
    );
}

function SelectField({
    label,
    name,
    value,
    onChange,
    items,
    required = false,
}: {
    label: string;
    name: keyof FormData;
    value: string;
    onChange: (name: keyof FormData, value: string) => void;
    items: string[];
    required?: boolean;
}) {
    return (
        <label className={labelClass}>
            {label}
            {required && <span className="text-rose-500"> *</span>}
            <span className="relative block">
                <select
                    name={name}
                    value={value}
                    required={required}
                    onChange={(e) => onChange(name, e.target.value)}
                    className={`${inputClass} appearance-none pr-8`}
                >
                    <option value="">Select an option</option>
                    {items.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <FiChevronDown className="pointer-events-none absolute right-2.5 top-3 text-slate-400" />
            </span>
        </label>
    );
}

function SectionHeading({
    icon: Icon,
    title,
}: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
}) {
    return (
        <div className="flex items-start gap-2.5 pt-1">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                <Icon size={16} />
            </span>
            <span className="max-w-[100px] pt-1.5 text-[11px] font-semibold leading-snug text-slate-800">
                {title}
            </span>
        </div>
    );
}

function Divider() {
    return <div className="my-5 border-t border-slate-100" />;
}

export default function QuoteForm() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<FormData>(initialData);
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);

    function update(name: keyof FormData, value: string) {
        setData((current) => ({ ...current, [name]: value }));
        setError("");
    }

    function addFiles(selected: FileList | File[]) {
        const incoming = Array.from(selected);
        const allowed = /\.(pdf|png|jpe?g|ai|eps|svg|zip)$/i;
        const valid = incoming.filter((file) => allowed.test(file.name));

        if (valid.length !== incoming.length) {
            setError("Some files were skipped. Please use PDF, PNG, JPG, AI, EPS, SVG or ZIP.");
        }

        setFiles((current) => {
            const combined = [...current, ...valid];
            return combined.filter(
                (file, index) =>
                    combined.findIndex(
                        (other) =>
                            other.name === file.name &&
                            other.size === file.size &&
                            other.lastModified === file.lastModified
                    ) === index
            );
        });
    }

    function handleDrop(event: DragEvent<HTMLDivElement>) {
        event.preventDefault();
        addFiles(event.dataTransfer.files);
    }

    function removeFile(index: number) {
        setFiles((current) => current.filter((_, i) => i !== index));
    }

    function validateCurrentStep() {
        if (step === 1) {
            const required: (keyof FormData)[] = [
                "fullName",
                "email",
                "phone",
                "packagingType",
                "boxStyle",
                "dimensions",
                "quantity",
            ];

            const missing = required.some((key) => !String(data[key]).trim());

            if (missing) {
                setError("Please complete all required fields marked with *.");
                return false;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                setError("Please enter a valid email address.");
                return false;
            }

            if (Number(data.quantity) < 1) {
                setError("Quantity must be at least 1.");
                return false;
            }
        }

        if (step === 2 && !data.productName.trim()) {
            setError("Please enter your product name.");
            return false;
        }

        setError("");
        return true;
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!validateCurrentStep()) return;

        if (step < 3) {
            setStep((current) => current + 1);

            return;
        }

        // Demo behavior: replace with your API endpoint to send real requests.
        const request = {
            ...data,
            attachments: files.map((file) => ({
                name: file.name,
                size: file.size,
                type: file.type,
            })),
        };

        console.log("Quote request:", request);
        setSubmitted(true);
    }

    function resetForm() {
        setData(initialData);
        setFiles([]);
        setStep(1);
        setError("");
        setSubmitted(false);
    }

    const benefits = [
        {
            icon: FiAward,
            title: "Best Prices",
            description: "Competitive pricing for bulk orders.",
        },
        {
            icon: FiShield,
            title: "Expert Support",
            description: "Get professional help at every step.",
        },
        {
            icon: FiMessageCircle,
            title: "Quick Response",
            description: "We get back to you fast.",
        },
    ];

    return (
        <section className="min-h-screen bg-[#f2f3f8] py-5 px-5 sm:px-10 sm:py-8 lg:px-10">
            <div className="mx-auto flex w-full max-w-[1400px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.12)] lg:min-h-[680px] lg:flex-row">
                {/* SIDEBAR */}
                <aside className="flex flex-col bg-[#0b0d25] px-5 py-7 text-white sm:px-8 lg:w-[32%] lg:shrink-0 lg:px-7 lg:py-8">
                    <div className="mb-5 flex items-center gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-200">
                            Get a custom quote
                        </span>
                        <span className="h-px w-8 bg-violet-400" />
                    </div>

                    <h1 className="max-w-[350px] text-[30px] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[clamp(27px,2.7vw,39px)]">
                        Let’s build the perfect{" "}
                        <span className="text-[#a78bfa]">packaging</span> for your brand
                    </h1>

                    <p className="mt-4 max-w-[330px] text-xs leading-[1.8] text-slate-300">
                        Fill out the details and our packaging experts will send you a
                        custom quote tailored to your requirements.
                    </p>

                    <div className="mt-5 h-px w-10 bg-violet-400" />

                    <div className="mt-5 space-y-4 rounded-xl border border-white/5 bg-white/[0.035] p-4">
                        {benefits.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="flex items-center gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/15 text-violet-300">
                                    <Icon size={17} />
                                </span>
                                <div>
                                    <h3 className="text-xs font-semibold">{title}</h3>
                                    <p className="mt-1 text-[10px] leading-relaxed text-slate-400">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                        <h3 className="text-xs font-semibold text-violet-200">
                            Need help right now?
                        </h3>
                        <p className="mt-1 text-[10px] leading-relaxed text-slate-400">
                            Our packaging specialists are here to assist you.
                        </p>
                        <div className="mt-3 space-y-3 text-[10px] text-slate-300">
                            <a
                                href="tel:+18005588047"
                                className="flex items-center gap-2 hover:text-white"
                            >
                                <FiPhone size={13} /> 800 558 8047
                            </a>
                            <a
                                href="mailto:sales@erixumpackaging.com"
                                className="flex items-center gap-2 hover:text-white"
                            >
                                <FiMessageCircle size={13} /> sales@erixumpackaging.com
                            </a>
                            <p className="flex items-center gap-2">
                                <FiClock size={13} /> Mon – Fri: 9 AM – 5 PM
                            </p>
                        </div>
                    </div>

                    <div className="mt-auto hidden items-center gap-2 pt-8 text-[10px] text-slate-500 lg:flex">
                        <FiLock size={13} />
                        Your information is safe and secure.
                    </div>
                </aside>

                {/* FORM */}
                <div className="flex min-w-0 flex-1 flex-col bg-white px-4 py-6 sm:px-7 lg:px-8 lg:py-7">
                    {/* PROGRESS */}
                    <div className="mb-7 flex items-center justify-between gap-1 sm:gap-3">
                        {[
                            { number: 1, label: "Your Requirements" },
                            { number: 2, label: "Product Details" },
                            { number: 3, label: "Review & Submit" },
                        ].map((item, index) => (
                            <div
                                key={item.number}
                                className="flex min-w-0 flex-1 items-center"
                            >
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (item.number < step) {
                                            setStep(item.number);
                                            setError("");
                                        }
                                    }}
                                    className="flex min-w-0 items-center gap-1.5 text-left"
                                >
                                    <span
                                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${step === item.number
                                            ? "bg-violet-700 text-white"
                                            : step > item.number
                                                ? "bg-violet-100 text-violet-700"
                                                : "bg-slate-200 text-slate-500"
                                            }`}
                                    >
                                        {step > item.number ? (
                                            <FiCheck size={13} />
                                        ) : (
                                            item.number
                                        )}
                                    </span>
                                    <span
                                        className={`hidden truncate text-[10px] sm:block ${step === item.number
                                            ? "font-semibold text-violet-700"
                                            : "text-slate-500"
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                </button>
                                {index < 2 && (
                                    <span className="mx-2 h-px min-w-2 flex-1 bg-slate-200 sm:mx-3" />
                                )}
                            </div>
                        ))}
                    </div>

                    {submitted ? (
                        <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                                <FiCheck size={30} />
                            </span>
                            <h2 className="md:text-[32px] text-2xl font-extrabold leading-tight text-primary mb-4">
                                Thank you for your request!
                            </h2>
                            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                                Your demo submission has been completed. Connect your backend
                                to receive and process real quote requests.
                            </p>
                            <button
                                type="button"
                                onClick={resetForm}
                                className="mt-6 rounded-md bg-violet-700 px-5 py-3 text-xs font-semibold text-white hover:bg-violet-800"
                            >
                                Create another quote
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="flex min-w-0 flex-1 flex-col"
                        >
                            {step === 1 && (
                                <>
                                    {/* CONTACT */}
                                    <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-[108px_minmax(0,1fr)]">
                                        <SectionHeading
                                            icon={FiUser}
                                            title="Contact Information"
                                        />
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            <Field
                                                label="Full Name"
                                                name="fullName"
                                                value={data.fullName}
                                                onChange={update}
                                                placeholder="Enter your full name"
                                                required
                                            />
                                            <Field
                                                label="Email Address"
                                                name="email"
                                                value={data.email}
                                                onChange={update}
                                                placeholder="Enter your email address"
                                                type="email"
                                                required
                                            />
                                            <Field
                                                label="Phone Number"
                                                name="phone"
                                                value={data.phone}
                                                onChange={update}
                                                placeholder="Enter your phone number"
                                                type="tel"
                                                required
                                            />
                                            <Field
                                                label="Company Name"
                                                name="company"
                                                value={data.company}
                                                onChange={update}
                                                placeholder="Enter your company name"
                                            />
                                        </div>
                                    </div>

                                    <Divider />

                                    {/* PACKAGING */}
                                    <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-[108px_minmax(0,1fr)]">
                                        <SectionHeading
                                            icon={FiPackage}
                                            title="Packaging Requirements"
                                        />
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            <SelectField
                                                label="Packaging Type"
                                                name="packagingType"
                                                value={data.packagingType}
                                                onChange={update}
                                                items={options.packagingType}
                                                required
                                            />
                                            <SelectField
                                                label="Box Style"
                                                name="boxStyle"
                                                value={data.boxStyle}
                                                onChange={update}
                                                items={options.boxStyle}
                                                required
                                            />
                                            <Field
                                                label="Dimensions (L × W × H)"
                                                name="dimensions"
                                                value={data.dimensions}
                                                onChange={update}
                                                placeholder="e.g. 20 × 15 × 10 cm"
                                                required
                                            />
                                            <Field
                                                label="Quantity"
                                                name="quantity"
                                                value={data.quantity}
                                                onChange={update}
                                                placeholder="e.g. 500"
                                                type="number"
                                                min="1"
                                                required
                                            />
                                            <SelectField
                                                label="Material"
                                                name="material"
                                                value={data.material}
                                                onChange={update}
                                                items={options.material}
                                            />
                                            <Field
                                                label="Thickness / GSM (if known)"
                                                name="thickness"
                                                value={data.thickness}
                                                onChange={update}
                                                placeholder="e.g. 300gsm"
                                            />
                                        </div>
                                    </div>

                                    <Divider />

                                    {/* PRINTING */}
                                    <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-[108px_minmax(0,1fr)]">
                                        <SectionHeading
                                            icon={FiFileText}
                                            title="Printing & Finishing"
                                        />
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            <SelectField
                                                label="Printing Option"
                                                name="printing"
                                                value={data.printing}
                                                onChange={update}
                                                items={options.printing}
                                            />
                                            <SelectField
                                                label="Colors"
                                                name="colors"
                                                value={data.colors}
                                                onChange={update}
                                                items={options.colors}
                                            />
                                            <SelectField
                                                label="Finishing Options"
                                                name="finishing"
                                                value={data.finishing}
                                                onChange={update}
                                                items={options.finishing}
                                            />
                                            <SelectField
                                                label="Coating"
                                                name="coating"
                                                value={data.coating}
                                                onChange={update}
                                                items={options.coating}
                                            />
                                        </div>
                                    </div>

                                    <Divider />

                                    {/* ADDITIONAL INFORMATION */}
                                    <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-[108px_minmax(0,1fr)]">
                                        <SectionHeading
                                            icon={FiMessageCircle}
                                            title="Additional Information"
                                        />
                                        <div className="space-y-4">
                                            <label className={labelClass}>
                                                Additional Notes / Special Instructions
                                                <textarea
                                                    name="notes"
                                                    value={data.notes}
                                                    onChange={(e) => update("notes", e.target.value)}
                                                    rows={3}
                                                    placeholder="Tell us more about your requirements..."
                                                    className="mt-1 block min-h-[65px] w-full resize-y rounded-md border border-slate-200 px-3 py-2 text-xs outline-none placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                                                />
                                            </label>

                                            <div>
                                                <p className={`${labelClass} mb-2`}>
                                                    Attach Artwork / References (Optional)
                                                </p>
                                                <input
                                                    ref={fileRef}
                                                    type="file"
                                                    multiple
                                                    accept=".pdf,.png,.jpg,.jpeg,.ai,.eps,.svg,.zip"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        if (e.target.files) addFiles(e.target.files);
                                                        e.target.value = "";
                                                    }}
                                                />

                                                <div
                                                    role="button"
                                                    tabIndex={0}
                                                    onClick={() => fileRef.current?.click()}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter" || e.key === " ") {
                                                            e.preventDefault();
                                                            fileRef.current?.click();
                                                        }
                                                    }}
                                                    onDragOver={(e) => e.preventDefault()}
                                                    onDrop={handleDrop}
                                                    className="flex min-h-[100px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-violet-200 bg-violet-50/40 px-3 py-4 text-center transition hover:border-violet-400 hover:bg-violet-50"
                                                >
                                                    <FiCloud size={23} className="text-violet-600" />
                                                    <span className="mt-2 text-[11px] font-semibold text-slate-700">
                                                        Drag & drop files here or browse
                                                    </span>
                                                    <span className="mt-1 text-[10px] text-slate-400">
                                                        PDF, JPG, PNG, AI, EPS, SVG, ZIP
                                                    </span>
                                                </div>

                                                {files.length > 0 && (
                                                    <ul className="mt-2 space-y-1">
                                                        {files.map((file, index) => (
                                                            <li
                                                                key={`${file.name}-${file.size}-${index}`}
                                                                className="flex items-center justify-between gap-2 rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-600"
                                                            >
                                                                <span className="truncate">{file.name}</span>
                                                                <button
                                                                    type="button"
                                                                    aria-label={`Remove ${file.name}`}
                                                                    onClick={() => removeFile(index)}
                                                                    className="shrink-0 text-slate-400 hover:text-rose-500"
                                                                >
                                                                    <FiTrash2 size={14} />
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-[108px_minmax(0,1fr)]">
                                    <SectionHeading
                                        icon={FiPackage}
                                        title="Product Details"
                                    />
                                    <div className="space-y-5">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <Field
                                                label="Product Name"
                                                name="productName"
                                                value={data.productName}
                                                onChange={update}
                                                placeholder="What are you packaging?"
                                                required
                                            />
                                            <Field
                                                label="Product Weight"
                                                name="productWeight"
                                                value={data.productWeight}
                                                onChange={update}
                                                placeholder="e.g. 500g"
                                            />
                                            <Field
                                                label="Target Delivery Date"
                                                name="deliveryDate"
                                                value={data.deliveryDate}
                                                onChange={update}
                                                type="date"
                                            />
                                            <SelectField
                                                label="Delivery Location"
                                                name="deliveryLocation"
                                                value={data.deliveryLocation}
                                                onChange={update}
                                                items={options.deliveryLocation}
                                            />
                                        </div>

                                        <label className={labelClass}>
                                            Intended Use / Product Description
                                            <textarea
                                                name="productDescription"
                                                value={data.productDescription}
                                                onChange={(e) =>
                                                    update("productDescription", e.target.value)
                                                }
                                                rows={5}
                                                placeholder="Tell us about your product, packaging purpose and special requirements..."
                                                className="mt-1 block w-full rounded-md border border-slate-200 p-3 text-xs outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                                            />
                                        </label>

                                        <Field
                                            label="Delivery Postcode"
                                            name="postcode"
                                            value={data.postcode}
                                            onChange={update}
                                            placeholder="Enter your postcode"
                                        />
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-[108px_minmax(0,1fr)]">
                                    <SectionHeading icon={FiCheck} title="Review & Submit" />
                                    <div className="space-y-5">
                                        <div>
                                            <h2 className="text-base font-semibold text-slate-900">
                                                Review your quote request
                                            </h2>
                                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                                Check your details before submitting. Use Back to
                                                make any changes.
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-slate-200 p-4">
                                            <h3 className="text-xs font-semibold text-violet-700">
                                                Contact information
                                            </h3>
                                            <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                {(
                                                    [
                                                        ["Name", data.fullName],
                                                        ["Email", data.email],
                                                        ["Phone", data.phone],
                                                        ["Company", data.company],
                                                    ] as const
                                                ).map(([label, value]) => (
                                                    <div key={label} className="min-w-0">
                                                        <dt className="text-[10px] text-slate-400">
                                                            {label}
                                                        </dt>
                                                        <dd className="mt-1 break-words text-xs text-slate-700">
                                                            {value || "Not provided"}
                                                        </dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        </div>

                                        <div className="rounded-lg border border-slate-200 p-4">
                                            <h3 className="text-xs font-semibold text-violet-700">
                                                Packaging requirements
                                            </h3>
                                            <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                {(
                                                    [
                                                        ["Packaging", data.packagingType],
                                                        ["Box style", data.boxStyle],
                                                        ["Dimensions", data.dimensions],
                                                        ["Quantity", data.quantity],
                                                        ["Material", data.material],
                                                        ["Printing", data.printing],
                                                        ["Finishing", data.finishing],
                                                        ["Product", data.productName],
                                                    ] as const
                                                ).map(([label, value]) => (
                                                    <div key={label} className="min-w-0">
                                                        <dt className="text-[10px] text-slate-400">
                                                            {label}
                                                        </dt>
                                                        <dd className="mt-1 break-words text-xs text-slate-700">
                                                            {value || "Not provided"}
                                                        </dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        </div>

                                        {data.notes && (
                                            <div className="rounded-lg bg-slate-50 p-4">
                                                <h3 className="text-xs font-semibold text-slate-700">
                                                    Additional notes
                                                </h3>
                                                <p className="mt-2 whitespace-pre-wrap text-xs leading-5 text-slate-600">
                                                    {data.notes}
                                                </p>
                                            </div>
                                        )}

                                        <p className="text-xs text-slate-500">
                                            Attachments selected: {files.length}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <p
                                    role="alert"
                                    className="mt-5 rounded-md border border-rose-100 bg-rose-50 px-3 py-2 text-xs text-rose-700"
                                >
                                    {error}
                                </p>
                            )}

                            {/* FOOTER ACTIONS */}
                            <div className="mt-auto pt-7">
                                <div className="flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="inline-flex min-h-9 items-center justify-center rounded-md border border-violet-200 px-4 text-[11px] font-medium text-violet-700 transition hover:bg-violet-50"
                                    >
                                        Start Over
                                    </button>

                                    <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                                        <FiShield size={13} />
                                        Your information is safe and secure.
                                    </div>

                                    <div className="flex gap-2">
                                        {step > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setStep((current) => current - 1);
                                                    setError("");
                                                }}
                                                className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-md border border-slate-200 px-4 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-50"
                                            >
                                                <FiArrowLeft size={13} />
                                                Back
                                            </button>
                                        )}

                                        <button
                                            type="submit"
                                            className="inline-flex min-h-9 flex-1 items-center justify-center gap-2 rounded-md bg-violet-700 px-5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 sm:flex-none"
                                        >
                                            {step === 3 ? "Submit Request" : "Next Step"}
                                            {step === 3 ? (
                                                <FiCheck size={14} />
                                            ) : (
                                                <FiArrowRight size={14} />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
