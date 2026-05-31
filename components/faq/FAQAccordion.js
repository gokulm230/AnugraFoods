"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({
  question,
  answer,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-2xl overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <span className="font-semibold">
          {question}
        </span>

        <ChevronDown
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}