"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert(
      "Thank you for reaching out! We'll get back to you within 24 hours."
    );
  };

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Send Us A Message
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <button
            type="submit"
            className="w-full bg-[#1B6CA8] text-white py-4 rounded-xl"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}