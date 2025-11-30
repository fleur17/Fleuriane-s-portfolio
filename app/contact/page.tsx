"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const mailtoLink = `mailto:fleurianelam77@hotmail.com?subject=Contact from ${encodeURIComponent(
    formData.name
  )}&body=${encodeURIComponent(
    formData.message + "\n\nFrom: " + formData.email
  )}`;

  window.location.href = mailtoLink;

  setSubmitted(true);
  setFormData({ name: "", email: "", message: "" });
};


  return (
    <div className="relative min-h-screen bg-white">

      {/* --- STICKY HEADER --- */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm">
        <Header />
      </div>

      {/* PAGE CONTENT */}
      <div className="px-6 pt-40 pb-52 max-w-2xl mx-auto">

        {/* TITLE */}
        <h1 className="font-['Shippori_Mincho_B1:ExtraBold'] text-[48px] text-black text-center tracking-wide">
          Contact
        </h1>

        {/* SUBTEXT */}
        <p className="mt-4 text-center font-['Crimson_Text'] text-[20px] text-neutral-700">
          Feel free to reach out for collaborations, inquiries or information.
        </p>

        {/* FORM CONTAINER */}
        <div className="mt-20">

          {submitted ? (
            <p className="text-center text-black font-['Crimson_Text'] text-[22px]">
              Your message has been sent. Thank you.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">

              {/* NAME */}
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
                  className="w-full border-b border-black bg-transparent py-3
                  font-['Crimson_Text'] text-[18px] text-black focus:outline-none"
                />
              </div>

              {/* EMAIL */}
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
                  className="w-full border-b border-black bg-transparent py-3
                  font-['Crimson_Text'] text-[18px] text-black focus:outline-none"
                />
              </div>

              {/* MESSAGE */}
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
                  className="w-full border-b border-black bg-transparent py-3 resize-none
                  font-['Crimson_Text'] text-[18px] text-black focus:outline-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="block mx-auto mt-12 px-10 py-3 border border-black 
                font-['Crimson_Text'] text-[20px] text-black hover:bg-black hover:text-white 
                transition-all duration-300"
              >
                Send
              </button>
            </form>
          )}
        </div>
        {/* FORM NOTE */}
<p className="mt-6 text-center text-black font-['Crimson_Text'] text-[16px]">
  Or contact me directly at{" "}
  <a
    href="mailto:fleurianelam77@hotmail.com"
    className="underline hover:text-gray-700"
  >
    fleurianelam77@hotmail.com
  </a>
</p>

      </div>

      {/* --- NORMAL FOOTER --- */}
      <Footer />
    </div>
  );
}
