
"use client";

import {
    useMemo,
    useRef,
    useState,
    type FormEvent,
    type PointerEvent as ReactPointerEvent,
} from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";

import {
    FiArrowRight,
    FiCheck,
    FiChevronDown,
    FiMaximize2,
    FiMinus,
    FiPlus,
    FiRotateCcw,
    FiZoomIn,
    FiZoomOut,
    FiBox,
    FiLayers,
    FiPrinter,
    FiX,
} from "react-icons/fi";

const styles = [
    {
        id: "mailer",
        label: "Mailer Box",
        image: "/images/p1.jpg",
    },
    {
        id: "rigid",
        label: "Rigid Box",
        image: "/images/p2.jpg",
    },
    {
        id: "tuck",
        label: "Tuck End Box",
        image: "/images/p3.jpg",
    },
    {
        id: "display",
        label: "Display Box",
        image: "/images/p4.jpg",
    },
    {
        id: "folding",
        label: "Folding Carton",
        image: "/images/p5.jpg",
    },
];

const materials = [
    { name: "Premium Rigid", color: "#24144f", text: "#ffffff" },
    { name: "Kraft Paper", color: "#b18b5c", text: "#ffffff" },
    { name: "White Cardboard", color: "#e9e6e0", text: "#40384d" },
    { name: "Recycled Board", color: "#78866b", text: "#ffffff" },
];

const printingOptions = [
    "Full Color Printing",
    "One Color Printing",
    "No Printing",
];

const finishes = [
    "Matte Lamination",
    "Gloss Lamination",
    "Soft Touch",
    "No Finish",
];

const patterns = [
    { label: "Botanical", value: "botanical" },
    { label: "Minimal", value: "minimal" },
    { label: "Geometric", value: "geometric" },
    { label: "No Pattern", value: "none" },
];

const tabs = [
    { label: "Style", icon: FiBox, target: "custom-style" },
    { label: "Size", icon: FiMaximize2, target: "custom-size" },
    { label: "Material", icon: FiLayers, target: "custom-material" },
    { label: "Printing", icon: FiPrinter, target: "custom-printing" },
    { label: "Finish", icon: FaWandMagicSparkles, target: "custom-finish" },
];

type DimensionKey = "length" | "width" | "height";

function StepTitle({
    number,
    title,
}: {
    number: number;
    title: string;
}) {
    return (
        <div className="flex items-center gap-2">
            <span className="flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-full bg-[#2815a0] text-sm font-bold text-white">
                {number}
            </span>
            <h3 className="text-sm font-semibold text-[#24233b]">
                {title}
            </h3>
        </div>
    );
}

function PatternArtwork({
    pattern,
    printing,
}: {
    pattern: string;
    printing: string;
}) {
    if (printing === "No Printing" || pattern === "none") {
        return null;
    }

    const stroke = printing === "One Color Printing" ? "#ffffff" : "#d9cbff";

    return (
        <svg
            viewBox="0 0 300 180"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
        >
            {pattern === "botanical" && (
                <g fill="none" stroke={stroke} strokeWidth="1.1" opacity=".8">
                    <path d="M8 180 Q40 145 26 103 Q22 82 8 65" />
                    <path d="M26 144 Q5 126 10 104 Q31 115 26 144Z" />
                    <path d="M29 119 Q50 103 44 82 Q25 95 29 119Z" />
                    <path d="M47 164 Q58 141 46 119" />
                    <path d="M292 180 Q258 143 275 103 Q284 87 297 76" />
                    <path d="M273 144 Q296 125 290 104 Q269 117 273 144Z" />
                    <path d="M268 120 Q249 105 256 85 Q275 97 268 120Z" />
                    <path d="M251 165 Q239 142 252 120" />
                </g>
            )}

            {pattern === "geometric" && (
                <g fill="none" stroke={stroke} strokeWidth=".8" opacity=".7">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <path
                            key={`v-${i}`}
                            d={`M${i * 40 - 20} 0 L${i * 40 + 60} 180`}
                        />
                    ))}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <path key={`h-${i}`} d={`M0 ${i * 36} H300`} />
                    ))}
                </g>
            )}

            {pattern === "minimal" && (
                <g fill={stroke} opacity=".65">
                    <circle cx="20" cy="20" r="1.5" />
                    <circle cx="280" cy="20" r="1.5" />
                    <circle cx="20" cy="160" r="1.5" />
                    <circle cx="280" cy="160" r="1.5" />
                    <path d="M90 24 H210" stroke={stroke} strokeWidth=".7" />
                    <path d="M90 156 H210" stroke={stroke} strokeWidth=".7" />
                </g>
            )}
        </svg>
    );
}

function NumberInput({
    label,
    value,
    onChange,
}: {
    label: string;
    value: number;
    onChange: (value: number) => void;
}) {
    return (
        <label className="block min-w-0">
            <span className="mb-1 block text-xs text-desc">{label}</span>
            <div className="flex h-9 items-center rounded-md border border-slate-200 bg-white focus-within:border-violet-400">
                <input
                    type="number"
                    min={1}
                    max={200}
                    value={value}
                    onChange={(event) => {
                        const raw = event.target.value;
                        onChange(raw === "" ? 1 : Number(raw));
                    }}
                    className="w-full min-w-0 bg-transparent px-2 text-xs outline-none"
                />
                <span className="pr-2 text-xs text-desc">cm</span>
            </div>
        </label>
    );
}

export default function PackagingCustomizer() {
    const [style, setStyle] = useState("mailer");
    const [size, setSize] = useState({
        length: 30,
        width: 22,
        height: 10,
    });

    const [material, setMaterial] = useState("Premium Rigid");
    const [printing, setPrinting] = useState("Full Color Printing");
    const [finish, setFinish] = useState("Matte Lamination");
    const [pattern, setPattern] = useState("botanical");
    const [quantity, setQuantity] = useState(500);

    const [rotation, setRotation] = useState(-13);
    const [zoom, setZoom] = useState(100);
    const [showDimensions, setShowDimensions] = useState(false);
    const [activeTab, setActiveTab] = useState("Style");
    const [isDragging, setIsDragging] = useState(false);

    const dragRef = useRef({
        pointerX: 0,
        rotation: 0,
        pointerId: -1,
    });

    const [showQuote, setShowQuote] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [quoteSubmitted, setQuoteSubmitted] = useState(false);

    const currentStyle = styles.find((item) => item.id === style) ?? styles[0];

    const currentMaterial =
        materials.find((item) => item.name === material) ?? materials[0];

    const boxColor = currentMaterial.color;
    const textColor = currentMaterial.text;

    const price = useMemo(() => {
        const volume = (size.length * size.width * size.height) / 1000;

        const styleFactor =
            style === "rigid" ? 2.3 : style === "display" ? 1.35 : 1;

        const materialFactor =
            material === "Premium Rigid"
                ? 1.45
                : material === "Recycled Board"
                    ? 1.1
                    : 1;

        const printFactor =
            printing === "Full Color Printing"
                ? 1.2
                : printing === "One Color Printing"
                    ? 1.08
                    : 1;

        const finishFactor =
            finish === "Soft Touch" ? 1.18 : finish === "No Finish" ? 1 : 1.1;

        const baseUnit =
            Math.max(0.35, 0.45 + volume * 0.012) *
            styleFactor *
            materialFactor *
            printFactor *
            finishFactor;

        const discount =
            quantity >= 5000
                ? 0.7
                : quantity >= 2000
                    ? 0.78
                    : quantity >= 1000
                        ? 0.88
                        : 1;

        const unit = baseUnit * discount;

        return { unit, total: unit * quantity };
    }, [size, style, material, printing, finish, quantity]);

    const currency = (value: number) =>
        new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            maximumFractionDigits: 2,
        }).format(value);

    function changeSize(key: DimensionKey, value: number) {
        setSize((old) => ({
            ...old,
            [key]: Math.min(200, Math.max(1, value || 1)),
        }));
    }

    function resetView() {
        setRotation(-13);
        setZoom(100);
        setShowDimensions(false);
    }

    function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
        if ((event.target as HTMLElement).closest("button")) return;

        dragRef.current = {
            pointerX: event.clientX,
            rotation,
            pointerId: event.pointerId,
        };

        setIsDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
    }

    function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
        if (!isDragging || dragRef.current.pointerId !== event.pointerId) return;

        const delta = event.clientX - dragRef.current.pointerX;

        setRotation(
            Math.max(-65, Math.min(65, dragRef.current.rotation + delta * 0.65)),
        );
    }

    function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
        if (
            dragRef.current.pointerId === event.pointerId &&
            event.currentTarget.hasPointerCapture(event.pointerId)
        ) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }

        setIsDragging(false);
        dragRef.current.pointerId = -1;
    }

    function submitQuote(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const quote = {
            name,
            email,
            boxStyle: currentStyle.label,
            dimensions: size,
            material,
            printing,
            finish,
            pattern,
            quantity,
            estimatedUnitPrice: price.unit,
            estimatedTotal: price.total,
        };

        // Replace this with your real API endpoint when ready.
        console.log("Packaging quote request:", quote);
        setQuoteSubmitted(true);
    }

    function scrollToTab(tab: (typeof tabs)[number]) {
        setActiveTab(tab.label);

        document.getElementById(tab.target)?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }

    return (
        <section className="w-full bg-[#f8f8ff] px-3 py-8 sm:px-6 sm:py-12">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
                {/* HEADING */}
                <header className="mb-7 text-center sm:mb-9">
                    <div className="mb-1.5 flex items-center justify-center gap-2">
                        <span className="h-px w-5 bg-violet-300" />
                        <span className="text-sm font-semibold uppercase tracking-[.16em] text-[#3424ad]">
                            Interactive Customization
                        </span>
                        <span className="h-px w-5 bg-violet-300" />
                    </div>

                    <h2 className="md:text-[32px] text-2xl font-extrabold leading-tight text-primary text-center mb-4">
                        Create Packaging <span className="text-[#3825b8]">Your Way</span>
                    </h2>

                    <p className="mx-auto mt-2 max-w-4/5 text-lg text-desc sm:text-lg text-center">
                        Choose your box style, dimensions, material, printing and finishes
                        <br className="hidden sm:block" />
                        to create packaging around your product and brand.
                    </p>
                </header>

                {/* MAIN TWO-COLUMN LAYOUT */}
                <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2">
                    {/* LEFT: CONTROLS */}
                    <div className="min-w-0 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-[0_5px_18px_rgba(35,25,90,0.05)] sm:p-4">
                        {/* STEP 1: PRODUCT IMAGES */}
                        <div id="custom-style">
                            <div className="mb-2.5 flex items-center justify-between gap-2">
                                <StepTitle number={1} title="Choose Box Style" />

                                <select
                                    aria-label="Choose box style"
                                    value={style}
                                    onChange={(e) => setStyle(e.target.value)}
                                    className="max-w-[120px] bg-transparent text-xs text-desc outline-none"
                                >
                                    {styles.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-5 gap-1.5">
                                {styles.map((item) => (
                                    <button
                                        type="button"
                                        key={item.id}
                                        onClick={() => setStyle(item.id)}
                                        aria-pressed={style === item.id}
                                        className={`relative min-w-0 rounded-md border p-1.5 transition ${style === item.id
                                            ? "border-violet-400 bg-violet-50"
                                            : "border-slate-200 hover:border-violet-300"
                                            }`}
                                    >
                                        <div className="flex h-12 items-center justify-center overflow-hidden rounded-sm bg-white sm:h-16">
                                            <img
                                                src={item.image}
                                                alt={item.label}
                                                className="h-full w-full object-contain p-0.5"
                                                loading="lazy"
                                                onError={(e) => {
                                                    // Keep the layout usable if an image hasn't been added yet.
                                                    e.currentTarget.style.opacity = "0.25";
                                                }}
                                            />
                                        </div>

                                        <p className="mt-1.5 min-h-5 text-center text-xs leading-tight text-desc">
                                            {item.label}
                                        </p>

                                        {style === item.id && (
                                            <span className="absolute right-1 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-violet-700 text-white">
                                                <FiCheck size={9} />
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="my-3.5 border-t border-slate-100" />

                        {/* STEP 2: DIMENSIONS */}
                        <div id="custom-size">
                            <div className="mb-2.5 flex items-center justify-between">
                                <StepTitle number={2} title="Enter Custom Size" />
                                <span className="text-xs text-desc">Centimeters</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                <NumberInput
                                    label="Length"
                                    value={size.length}
                                    onChange={(v) => changeSize("length", v)}
                                />
                                <NumberInput
                                    label="Width"
                                    value={size.width}
                                    onChange={(v) => changeSize("width", v)}
                                />
                                <NumberInput
                                    label="Height"
                                    value={size.height}
                                    onChange={(v) => changeSize("height", v)}
                                />
                            </div>
                        </div>

                        <div className="my-3.5 border-t border-slate-100" />

                        {/* STEP 3: MATERIAL */}
                        <div id="custom-material">
                            <StepTitle number={3} title="Select Material" />

                            <div className="mt-2.5 grid grid-cols-2 gap-2">
                                {materials.map((item) => (
                                    <button
                                        type="button"
                                        key={item.name}
                                        onClick={() => setMaterial(item.name)}
                                        aria-pressed={material === item.name}
                                        className={`flex min-w-0 items-center gap-2 rounded-md border px-2 py-2 text-left transition ${material === item.name
                                            ? "border-violet-400 bg-violet-50/70"
                                            : "border-slate-200 hover:border-violet-300"
                                            }`}
                                    >
                                        <span
                                            className="h-7 w-7 shrink-0 rounded-md border border-black/5"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <span className="min-w-0 flex-1 truncate text-xs font-medium text-desc">
                                            {item.name}
                                        </span>
                                        {material === item.name && (
                                            <FiCheck className="shrink-0 text-violet-700" size={12} />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="my-3.5 border-t border-slate-100" />

                        {/* STEP 4: PRINTING */}
                        <div id="custom-printing">
                            <StepTitle number={4} title="Choose Printing" />

                            <div className="mt-2.5">
                                <label className="relative block">
                                    <select
                                        value={printing}
                                        onChange={(e) => setPrinting(e.target.value)}
                                        className="h-9 w-full appearance-none rounded-md border border-slate-200 bg-white px-3 pr-8 text-sm text-desc outline-none focus:border-violet-400"
                                    >
                                        {printingOptions.map((option) => (
                                            <option key={option}>{option}</option>
                                        ))}
                                    </select>
                                    <FiChevronDown
                                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-desc"
                                        size={13}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="my-3.5 border-t border-slate-100" />

                        {/* STEP 5: FINISHING */}
                        <div id="custom-finish">
                            <StepTitle number={5} title="Add Finishing" />

                            <div className="mt-2.5">
                                <label className="relative block">
                                    <select
                                        value={finish}
                                        onChange={(e) => setFinish(e.target.value)}
                                        className="h-9 w-full appearance-none rounded-md border border-slate-200 bg-white px-3 pr-8 text-sm text-desc outline-none focus:border-violet-400"
                                    >
                                        {finishes.map((option) => (
                                            <option key={option}>{option}</option>
                                        ))}
                                    </select>
                                    <FiChevronDown
                                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-desc"
                                        size={13}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="my-3.5 border-t border-slate-100" />

                        {/* PATTERN AND QUANTITY */}
                        <div className="grid grid-cols-2 gap-2.5">
                            <label className="min-w-0">
                                <span className="mb-1.5 block text-xs font-medium text-desc">
                                    Artwork Pattern
                                </span>
                                <select
                                    value={pattern}
                                    onChange={(e) => setPattern(e.target.value)}
                                    className="h-9 w-full rounded-md border border-slate-200 bg-white px-2 text-sm outline-none focus:border-violet-400"
                                >
                                    {patterns.map((item) => (
                                        <option key={item.value} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <div className="min-w-0">
                                <span className="mb-1.5 block text-xs font-medium text-desc">
                                    Quantity
                                </span>
                                <div className="flex h-9 items-center justify-between rounded-md border border-slate-200 px-2">
                                    <button
                                        type="button"
                                        aria-label="Decrease quantity"
                                        onClick={() => setQuantity((q) => Math.max(100, q - 100))}
                                        className="text-desc hover:text-primary"
                                    >
                                        <FiMinus size={12} />
                                    </button>

                                    <span className="text-sm font-semibold">
                                        {quantity.toLocaleString()}
                                    </span>

                                    <button
                                        type="button"
                                        aria-label="Increase quantity"
                                        onClick={() => setQuantity((q) => Math.min(100000, q + 100))}
                                        className="text-desc hover:text-primary"
                                    >
                                        <FiPlus size={12} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* ACTIONS */}
                        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            <button
                                type="button"
                                onClick={() => {
                                    setActiveTab("Style");
                                    document.getElementById("custom-style")?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center",
                                    });
                                }}
                                className="flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-3 text-sm font-semibold text-white transition hover:bg-prim_hovr"
                            >
                                Start Customizing <FiArrowRight size={14} />
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setQuoteSubmitted(false);
                                    setShowQuote(true);
                                }}
                                className="flex h-10 items-center justify-center gap-1.5 rounded-md border border-slate-200 px-3 text-xs font-medium text-desc hover:border-violet-300 hover:text-primary"
                            >
                                Get Instant Quote <FiArrowRight size={12} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: LIVE PACKAGING PREVIEW */}
                    <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_5px_18px_rgba(35,25,90,0.05)]">
                        <div className="flex items-center justify-between gap-2 border-b border-slate-100 px-3 py-3 sm:px-4">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-800">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                                LIVE 3D PREVIEW
                            </span>

                            <button
                                type="button"
                                onClick={() => setShowDimensions((v) => !v)}
                                className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs ${showDimensions
                                    ? "bg-violet-100 text-violet-800"
                                    : "text-desc hover:bg-slate-50"
                                    }`}
                            >
                                <FiMaximize2 size={12} />
                                Dimensions
                            </button>
                        </div>

                        <div
                            className={`relative flex min-h-[330px] flex-1 select-none items-center justify-center overflow-hidden bg-gradient-to-br from-[#f4f1ff] via-[#efedfc] to-[#e5e1f7] px-3 py-8 sm:min-h-[440px] sm:px-5 ${isDragging ? "cursor-grabbing" : "cursor-grab"
                                }`}
                            style={{ touchAction: "pan-y" }}
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                            onPointerCancel={handlePointerUp}
                            onLostPointerCapture={() => setIsDragging(false)}
                        >
                            <div className="pointer-events-none absolute inset-0 opacity-40">
                                <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
                                <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-violet-300/40 blur-3xl" />
                            </div>

                            {/* PREVIEW CONTROLS */}
                            <div className="absolute right-3 top-3 z-30 flex flex-col gap-1.5 sm:right-4 sm:top-4">
                                <button
                                    type="button"
                                    aria-label="Zoom in"
                                    onClick={() => setZoom((z) => Math.min(130, z + 10))}
                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-white/90 text-desc shadow-sm hover:text-primary"
                                >
                                    <FiZoomIn size={14} />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Zoom out"
                                    onClick={() => setZoom((z) => Math.max(70, z - 10))}
                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-white/90 text-desc shadow-sm hover:text-primary"
                                >
                                    <FiZoomOut size={14} />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Rotate box"
                                    onClick={() => setRotation((r) => (r + 15 > 65 ? -65 : r + 15))}
                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-white/90 text-desc shadow-sm hover:text-primary"
                                >
                                    <FiRotateCcw size={14} />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Reset preview"
                                    onClick={resetView}
                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-white/90 text-desc shadow-sm hover:text-primary"
                                >
                                    <FiCheck size={14} />
                                </button>
                            </div>

                            {/* CSS BOX MODEL */}
                            <div
                                className="relative z-10 w-full max-w-[430px] transition-transform duration-150"
                                style={{
                                    perspective: "1100px",
                                    transform: `scale(${zoom / 100})`,
                                }}
                            >
                                <div
                                    className="relative mx-auto aspect-[1.15/1] w-[92%] max-w-[430px]"
                                    style={{
                                        transformStyle: "preserve-3d",
                                        transform: `rotateX(-5deg) rotateY(${rotation}deg)`,
                                    }}
                                >
                                    <div
                                        className="absolute left-[12%] top-[69%] h-[21%] w-[80%] rounded-[50%] bg-[#24144f]/25 blur-xl"
                                        style={{ transform: "rotate(-5deg)" }}
                                    />

                                    {/* LID */}
                                    <div
                                        className="absolute left-[17%] top-[5%] h-[43%] w-[72%] overflow-hidden border border-white/20 shadow-lg"
                                        style={{
                                            background: boxColor,
                                            clipPath:
                                                "polygon(0 10%, 85% 0, 100% 10%, 100% 100%, 0 100%)",
                                            transform: "rotateX(-9deg)",
                                            transformOrigin: "bottom center",
                                        }}
                                    >
                                        <PatternArtwork pattern={pattern} printing={printing} />

                                        {printing !== "No Printing" && (
                                            <div
                                                className="absolute inset-0 flex flex-col items-center justify-center"
                                                style={{ color: textColor }}
                                            >
                                                <span className="text-[8px] font-semibold tracking-[.16em] sm:text-sm">
                                                    Ray Custom
                                                </span>
                                                <span className="text-sm font-black tracking-[.12em] sm:text-xl">
                                                    BOXES
                                                </span>
                                                <span className="mt-1 text-[5px] tracking-[.12em] sm:text-[7px]">
                                                    CUSTOM PACKAGING
                                                </span>
                                                <span className="mt-1 text-[5px] sm:text-[7px]">
                                                    Made for your brand
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* INNER BOX */}
                                    <div
                                        className="absolute left-[14%] top-[41%] h-[27%] w-[78%] overflow-hidden border border-white/15"
                                        style={{
                                            background: `linear-gradient(135deg, ${boxColor}, ${boxColor}cc)`,
                                            clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
                                        }}
                                    >
                                        {printing !== "No Printing" && (
                                            <div
                                                className="absolute inset-0 flex items-center justify-center"
                                                style={{ color: textColor }}
                                            >
                                                <span className="text-xs font-bold tracking-widest">
                                                    {style === "rigid" ? "LUXURY" : "YOUR BRAND"}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* LEFT SIDE */}
                                    <div
                                        className="absolute left-[7%] top-[46%] h-[35%] w-[22%] overflow-hidden border border-white/15"
                                        style={{
                                            background: `linear-gradient(100deg, ${boxColor}dd, ${boxColor}99)`,
                                            clipPath: "polygon(0 0,100% 0,100% 82%,0 100%)",
                                        }}
                                    >
                                        <PatternArtwork pattern={pattern} printing={printing} />
                                    </div>

                                    {/* RIGHT SIDE */}
                                    <div
                                        className="absolute right-[5%] top-[46%] h-[35%] w-[23%] overflow-hidden border border-white/15"
                                        style={{
                                            background: `linear-gradient(260deg, ${boxColor}cc, ${boxColor})`,
                                            clipPath: "polygon(0 0,100% 0,100% 100%,0 82%)",
                                        }}
                                    >
                                        <PatternArtwork pattern={pattern} printing={printing} />
                                    </div>

                                    {/* FRONT */}
                                    <div
                                        className="absolute left-[14%] top-[46%] h-[42%] w-[78%] overflow-hidden border border-white/20 shadow-xl"
                                        style={{
                                            background:
                                                finish === "Gloss Lamination"
                                                    ? `linear-gradient(145deg, ${boxColor}, ${boxColor} 60%, #ffffff35)`
                                                    : finish === "Soft Touch"
                                                        ? `linear-gradient(145deg, ${boxColor}ee, ${boxColor})`
                                                        : boxColor,
                                            clipPath: "polygon(0 0,100% 0,87% 100%,13% 100%)",
                                        }}
                                    >
                                        <PatternArtwork pattern={pattern} printing={printing} />

                                        {printing !== "No Printing" && (
                                            <div
                                                className="absolute inset-0 flex flex-col items-center justify-center text-center"
                                                style={{ color: textColor }}
                                            >
                                                <span className="text-[7px] font-semibold tracking-[.16em] sm:text-sm">
                                                    Ray Custom
                                                </span>
                                                <span className="text-lg font-black tracking-[.13em] sm:text-2xl">
                                                    BOXES
                                                </span>
                                                <span className="mt-1 text-[5px] tracking-[.12em] sm:text-[7px]">
                                                    {style === "rigid"
                                                        ? "PREMIUM PACKAGING"
                                                        : "CUSTOM PACKAGING"}
                                                </span>
                                                <span className="mt-1 text-[5px] sm:text-[7px]">
                                                    Made for your brand
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* FRONT RIM */}
                                    <div
                                        className="absolute left-[18%] top-[85%] h-[4%] w-[70%] border border-white/10"
                                        style={{
                                            background: `linear-gradient(to bottom, ${boxColor}, ${boxColor}bb)`,
                                            clipPath: "polygon(0 0,100% 0,96% 100%,4% 100%)",
                                        }}
                                    />

                                    {style === "tuck" && (
                                        <div
                                            className="absolute left-[30%] top-[35%] z-10 h-[13%] w-[40%] border border-white/20"
                                            style={{
                                                background: boxColor,
                                                transform: "rotate(-2deg)",
                                            }}
                                        />
                                    )}

                                    {style === "display" && (
                                        <div
                                            className="absolute left-[27%] top-[38%] z-10 h-[10%] w-[48%] border border-white/20"
                                            style={{
                                                background: boxColor,
                                                clipPath:
                                                    "polygon(0 0,100% 0,85% 100%,15% 100%)",
                                            }}
                                        />
                                    )}

                                    {style === "folding" && (
                                        <div
                                            className="absolute left-[30%] top-[41%] z-10 h-[6%] w-[42%]"
                                            style={{
                                                background: `${boxColor}bb`,
                                                clipPath:
                                                    "polygon(0 0,100% 0,85% 100%,15% 100%)",
                                            }}
                                        />
                                    )}

                                    {showDimensions && (
                                        <div className="absolute -bottom-5 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-violet-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-violet-800 shadow-sm">
                                            {size.length} × {size.width} × {size.height} cm
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg border border-white/80 bg-white/80 px-2.5 py-2 backdrop-blur-sm sm:bottom-4 sm:left-4">
                                <span
                                    className="h-3 w-3 rounded-full border border-black/10"
                                    style={{ backgroundColor: boxColor }}
                                />
                                <span className="text-xs font-medium text-desc">
                                    {material}
                                </span>
                            </div>

                            <div className="absolute bottom-3 right-3 rounded-lg border border-white/80 bg-white/80 px-2.5 py-2 text-xs text-desc backdrop-blur-sm sm:bottom-4 sm:right-4">
                                Drag to rotate · {zoom}%
                            </div>
                        </div>

                        {/* SUMMARY AND TABS */}
                        <div className="bg-white px-3 py-3.5 sm:px-4">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <h3 className="text-[12px] font-bold text-slate-900">
                                        {currentStyle.label}
                                    </h3>
                                    <p className="mt-1 text-xs leading-relaxed text-desc">
                                        {size.length} × {size.width} × {size.height} cm
                                        <span className="mx-1.5">·</span>
                                        {material}
                                    </p>
                                    <p className="mt-1 text-xs text-desc">
                                        {printing} · {finish}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs text-desc">
                                        Estimated unit price
                                    </p>
                                    <p className="mt-0.5 text-lg font-bold text-[#28158f]">
                                        {currency(price.unit)}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-5 gap-1 rounded-lg border border-slate-100 bg-[#f9f8ff] p-1">
                                {tabs.map(({ label, icon: Icon, target }) => (
                                    <button
                                        type="button"
                                        key={label}
                                        onClick={() => scrollToTab({ label, icon: Icon, target })}
                                        className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-md py-2 text-xs transition ${activeTab === label
                                            ? "bg-white font-semibold text-violet-800 shadow-sm"
                                            : "text-desc hover:bg-white hover:text-primary"
                                            }`}
                                    >
                                        <Icon size={15} />
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* TOTAL ESTIMATE */}
                <div className="mt-4 flex flex-col justify-between gap-3 rounded-xl border border-violet-100 bg-white/90 p-4 sm:flex-row sm:items-center sm:px-5">
                    <div>
                        <h3 className="text-xs font-bold text-desc">
                            Your packaging estimate
                        </h3>
                        <p className="mt-1 text-sm text-desc">
                            {quantity.toLocaleString()} units · {currentStyle.label} · {material}
                        </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                        <div className="text-right">
                            <p className="text-xs text-desc">Estimated total</p>
                            <p className="text-lg font-bold text-violet-800">
                                {currency(price.total)}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                setQuoteSubmitted(false);
                                setShowQuote(true);
                            }}
                            className="flex h-10 items-center gap-2 rounded-lg bg-[#28158f] px-4 text-sm font-semibold text-white transition hover:bg-violet-800"
                        >
                            Get Instant Quote <FiArrowRight size={13} />
                        </button>
                    </div>
                </div>
            </div>

            {/* QUOTE MODAL */}
            {showQuote && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4 backdrop-blur-sm"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setShowQuote(false);
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="quote-heading"
                        className="relative my-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
                    >
                        <button
                            type="button"
                            aria-label="Close quote modal"
                            onClick={() => setShowQuote(false)}
                            className="absolute right-4 top-4 rounded-lg p-2 text-desc hover:bg-slate-100"
                        >
                            <FiX size={18} />
                        </button>

                        {quoteSubmitted ? (
                            <div className="py-7 text-center">
                                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                                    <FiCheck size={24} />
                                </span>
                                <h3 className="mt-4 text-lg font-bold text-slate-900">
                                    Quote request prepared
                                </h3>
                                <p className="mt-2 text-xs leading-5 text-desc">
                                    This demo logs the quote configuration to your browser
                                    console. Connect your backend API to receive real requests.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setShowQuote(false)}
                                    className="mt-5 rounded-lg bg-violet-700 px-5 py-2.5 text-xs font-semibold text-white"
                                >
                                    Back to designer
                                </button>
                            </div>
                        ) : (
                            <>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-violet-800">
                                    <FaWandMagicSparkles size={12} /> Custom Packaging
                                </span>

                                <h3
                                    id="quote-heading"
                                    className="mt-3 text-xl font-bold text-slate-900"
                                >
                                    Get your instant quote
                                </h3>
                                <p className="mt-1 text-xs leading-5 text-desc">
                                    Confirm your contact details for this packaging configuration.
                                </p>

                                <div className="mt-4 rounded-lg bg-violet-50 p-3.5">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <p className="text-xs font-semibold text-desc">
                                                {currentStyle.label}
                                            </p>
                                            <p className="mt-1 text-sm text-desc">
                                                {size.length} × {size.width} × {size.height} cm
                                            </p>
                                            <p className="mt-1 text-sm text-desc">
                                                {quantity.toLocaleString()} units · {material}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-desc">
                                                Estimated total
                                            </p>
                                            <p className="text-base font-bold text-violet-800">
                                                {currency(price.total)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={submitQuote} className="mt-5 space-y-4">
                                    <label className="block text-xs font-medium text-desc">
                                        Full name
                                        <input
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your name"
                                            className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                                        />
                                    </label>

                                    <label className="block text-xs font-medium text-desc">
                                        Email address
                                        <input
                                            required
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@company.com"
                                            className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                                        />
                                    </label>

                                    <button
                                        type="submit"
                                        className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#28158f] text-xs font-semibold text-white transition hover:bg-violet-800"
                                    >
                                        Submit Quote Request <FiArrowRight size={14} />
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
