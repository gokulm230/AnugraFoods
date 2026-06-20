"use client";

import { useMemo, useState } from "react";
import ShopHero from "@/components/shop/ShopHero";
import ShippingNotice from "@/components/shop/ShippingNotice";
import WhereToBuy from "@/components/shop/WhereToBuy";
import SeafoodSection from "@/components/shop/SeafoodSection";
import OrganicSection from "@/components/shop/OrganicSection";
import CTA from "@/components/home/CTA";
import ShopBanner from "@/components/shop/ShopBanner";
import seafoodProducts from "@/data/seafoodProducts";
import organicProducts from "@/data/organicProducts";

const getSearchIndex = (product) =>
  [product.name, product.tamilName, product.description, product.category]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

const matchesSearch = (product, normalizedQuery) => {
  if (!normalizedQuery) {
    return true;
  }

  return getSearchIndex(product).includes(normalizedQuery);
};

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const totalCount = seafoodProducts.length + organicProducts.length;

  const resultCount = useMemo(() => {
    return [...seafoodProducts, ...organicProducts].filter((product) =>
      matchesSearch(product, normalizedQuery),
    ).length;
  }, [normalizedQuery]);

  return (
    <>
      <ShopBanner />
      <ShopHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClearSearch={() => setSearchQuery("")}
        totalCount={totalCount}
        resultCount={resultCount}
      />
      {/* <ShippingNotice /> */}
      {/* <WhereToBuy /> */}
      <SeafoodSection searchQuery={normalizedQuery} />
      <OrganicSection searchQuery={normalizedQuery} />
      {/* <CTA /> */}
    </>
  );
}