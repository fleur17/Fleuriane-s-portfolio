"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:fleurianelam77@hotmail.com?subject=Contact from ${encodeURIComponent(
      formData.name,
    )}&body=${encodeURIComponent(
      formData.message + "\n\nFrom: " + formData.email,
    )}`;

    if (typeof window !== "undefined") {
      window.location.href = mailtoLink;
    } else {
      // Fallback: if somehow this ran during SSR (shouldn't), we simply log the link
      // so it can be used by the caller or during debugging.

      console.log("mailto link:", mailtoLink);
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div className="mx-auto max-w-2xl px-6 pt-40 pb-52">
        <h1 className="text-center font-['Shippori_Mincho_B1:ExtraBold'] text-[48px] tracking-wide text-black">
          Contact
        </h1>

        <p className="mt-4 text-center font-['Crimson_Text'] text-[20px] text-neutral-700">
          Feel free to reach out for collaborations, inquiries or information.
        </p>

        <div className="mt-20">
          {submitted ? (
            <p className="text-center font-['Crimson_Text'] text-[22px] text-black">
              Your message has been sent. Thank you.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="flex flex-col gap-2">
                <label className="font-['Shippori_Mincho_B1:Medium'] text-[18px] text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-black bg-transparent py-3 font-['Crimson_Text'] text-[18px] text-black focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Shippori_Mincho_B1:Medium'] text-[18px] text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-black bg-transparent py-3 font-['Crimson_Text'] text-[18px] text-black focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Shippori_Mincho_B1:Medium'] text-[18px] text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none border-b border-black bg-transparent py-3 font-['Crimson_Text'] text-[18px] text-black focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mx-auto mt-12 block border border-black px-10 py-3 font-['Crimson_Text'] text-[20px] text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Send
              </button>
            </form>
          )}
        </div>
        <p className="mt-6 text-center font-['Crimson_Text'] text-[16px] text-black">
          Or contact me directly at{" "}
          <a
            href="mailto:fleurianelam77@hotmail.com"
            className="underline hover:text-gray-700"
          >
            fleurianelam77@hotmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
