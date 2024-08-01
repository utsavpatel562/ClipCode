"use client";
import React from "react";
import { WobbleCard } from "../../components/ui/wobble-card";
import Terminal from "@mui/icons-material/Terminal";
import ViewQuilt from "@mui/icons-material/ViewQuilt";
import AllInclusive from "@mui/icons-material/AllInclusive";
import FilterDrama from "@mui/icons-material/FilterDrama";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-8">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-lg">
          <Terminal className="mb-2 w-[35px] h-[35px] text-neutral-200" />
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Syntax Highlighting
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Support for multiple programming languages. Custom themes to match
            your preferred coding style.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <ViewQuilt className="mb-2 w-[35px] h-[35px] text-neutral-200" />
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Intuitive UI:
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Clean and modern design with Tailwind CSS for a smooth user
          experience.
        </p>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-700">
        <FilterDrama className="mb-2 w-[35px] h-[35px] text-neutral-200" />
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Cloud Sync
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Access your snippets from any device, anytime. Automatic backups to
          ensure your code is always safe.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-purple-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <AllInclusive className="mb-2 w-[35px] h-[35px] text-neutral-200" />
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Seamless Organization
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Categorize and tag your snippets for quick retrieval. Drag and drop
            functionality for effortless reorganization.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}
