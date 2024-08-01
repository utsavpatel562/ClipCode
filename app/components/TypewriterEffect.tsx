"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Organize",
      className: "text-gray-200 dark:text-gray-200",
    },
    {
      text: "Your",
      className: "text-gray-200 dark:text-gray-200",
    },
    {
      text: "Code",
      className: "text-gray-200 dark:text-gray-200",
    },
    {
      text: "Snippets",
      className: "text-gray-200 dark:text-gray-200",
    },
    {
      text: "Efficiently!",
      className: "text-green-1 dark:text-green-1",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-gray-400 text-center text-[17px]">
        With our advanced tagging and search features, you can quickly find the
        snippet you need, right when
        <br /> you need it. Spend less time searching for code and more time
        writing it.
      </div>
    </div>
  );
}
