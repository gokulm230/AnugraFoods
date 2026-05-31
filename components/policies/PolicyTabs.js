"use client";

import { useState } from "react";
import policiesData from "@/data/policiesData";

export default function PolicyTabs() {
  const [active, setActive] = useState("terms");

  const currentPolicy = policiesData.find(
    (policy) => policy.id === active
  );

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Tabs */}

        <div className="flex flex-wrap gap-4 justify-center mb-10">

          {policiesData.map((policy) => (
            <button
              key={policy.id}
              onClick={() => setActive(policy.id)}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                active === policy.id
                  ? "bg-[#1B6CA8] text-white"
                  : "bg-gray-400"
              }`}
            >
              {policy.title}
            </button>
          ))}

        </div>

        {/* Content */}

        <div className="bg-white shadow-sm border rounded-3xl p-10">

          <h2 className="text-3xl text-black font-bold mb-6">
            {currentPolicy.title}
          </h2>

          <div className="whitespace-pre-line text-gray-600 leading-8">
            {currentPolicy.content}
          </div>

        </div>

      </div>
    </section>
  );
}