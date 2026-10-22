"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { FiCheck, FiUser, FiMessageCircle, FiSend } from "react-icons/fi";

type ContactFormData = {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

const initialData: ContactFormData = {
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

const subjects = [
    "Custom Box Quote",
    "Existing Order Enquiry",
    "Design Support",
    "Samples & Proofs",
    "Shipping & Delivery",
    "General Question",
];

const inputClass =
    "mt-1.5 block h-11 w-full min-w-0 rounded-md border border-RC_border bg-white px-3 text-sm text-desc outline-none transition placeholder:text-desc/60 focus:border-primary focus:ring-2 focus:ring-primary/15";

const labelClass = "block text-[13px] font-medium text-primary";

export default function ContactForm() {
    const [data, setData] = useState<ContactFormData>(initialData);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function update(name: keyof ContactFormData, value: string) {
        setData((current) => ({ ...current, [name]: value }));
        setError("");
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!data.fullName.trim() || !data.email.trim() || !data.message.trim()) {
            setError("Please complete the required fields marked with *.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Demo behavior: replace with your API endpoint to receive real messages.
        console.log("Contact message:", data);

        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="flex h-full flex-col items-center justify-center rounded-[12px] border border-RC_border bg-white p-8 text-center shadow-[0_6px_20px_rgb(0,0,0,0.04)]">
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiCheck size={30} />
                </span>

                <h2 className="mb-2 text-2xl font-extrabold leading-tight text-primary">Message Sent!</h2>

                <p className="max-w-sm text-sm leading-6 text-desc">
                    Thank you for reaching out. Our packaging experts will get back to you within one business day.
                </p>

                <button
                    type="button"
                    onClick={() => {
                        setData(initialData);
                        setSubmitted(false);
                    }}
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-white transition hover:bg-prim_hovr"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="h-full rounded-[12px] border border-RC_border bg-white p-6 shadow-[0_6px_20px_rgb(0,0,0,0.04)] md:p-8"
        >
            <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiMessageCircle size={18} />
                </span>
                <div>
                    <h2 className="text-xl font-extrabold leading-tight text-primary">Send Us a Message</h2>
                    <p className="text-xs text-desc">We reply within one business day.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className={labelClass}>
                    Full Name <span className="text-RC_Green">*</span>
                    <input
                        type="text"
                        name="fullName"
                        value={data.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        placeholder="Enter your full name"
                        className={inputClass}
                    />
                </label>

                <label className={labelClass}>
                    Email Address <span className="text-RC_Green">*</span>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="Enter your email address"
                        className={inputClass}
                    />
                </label>

                <label className={labelClass}>
                    Phone Number
                    <input
                        type="tel"
                        name="phone"
                        value={data.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className={inputClass}
                    />
                </label>

                <label className={labelClass}>
                    Subject
                    <select
                        name="subject"
                        value={data.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        className={`${inputClass} appearance-none`}
                    >
                        <option value="">Select a subject</option>
                        {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                                {subject}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <label className={`${labelClass} mt-4 block`}>
                Message <span className="text-RC_Green">*</span>
                <textarea
                    name="message"
                    value={data.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={6}
                    placeholder="Tell us about your packaging requirements..."
                    className="mt-1.5 block w-full resize-y rounded-md border border-RC_border bg-white px-3 py-2.5 text-sm text-desc outline-none transition placeholder:text-desc/60 focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
            </label>

            {error && (
                <p role="alert" className="mt-4 rounded-md border border-[#f3d5d5] bg-[#fdf1f1] px-3 py-2 text-sm text-[#b42318]">
                    {error}
                </p>
            )}

            <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-white transition hover:bg-prim_hovr sm:w-auto"
            >
                <FiSend size={15} />
                Send Message
            </button>

            <p className="mt-4 flex items-center gap-2 text-xs text-desc">
                <FiUser size={13} />
                Your information is kept private and never shared.
            </p>
        </form>
    );
}
