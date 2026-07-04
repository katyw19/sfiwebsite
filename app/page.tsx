import { Hero } from "@/components/home/Hero";
import { ImpactStats } from "@/components/home/ImpactStats";
import { FourPillars } from "@/components/home/FourPillars";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { FeatureBlocks } from "@/components/home/FeatureBlocks";
import { FeaturedBlog } from "@/components/home/FeaturedBlog";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <FourPillars />
      <WhatWeDo />
      <FeatureBlocks />
      <FeaturedBlog />
    </>
  );
}
