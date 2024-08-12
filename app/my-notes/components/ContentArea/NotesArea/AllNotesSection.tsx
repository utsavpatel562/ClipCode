import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useGlobalContext } from "@/ContextApi";
import { IconBrandJavascript, IconHeart, IconTrash } from "@tabler/icons-react";
import React from "react";
import {
  materialLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
function AllNotesSection() {
  return (
    <div className="mt-5 flex flex-wrap gap-4">
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
    </div>
  );
}
export default AllNotesSection;
function SingleNote() {
  const {
    darkModeObject: { darkMode },
    openContentNoteObject: { openContentNote },
  } = useGlobalContext();
  return (
    <>
      <div
        className={`${
          darkMode[1].isSelected ? "bg-slate-900 text-white" : "bg-white"
        } ${
          openContentNote ? "w-full" : "w-[380px]"
        } max-sm:w-full rounded-lg py-4`}
      >
        <NoteHeader />
        <NoteDate />
        <NoteTags />
        <NoteDescription />
        <CodeBlock language="javascript" />
        <NoteFooter />
      </div>
    </>
  );
}
function NoteHeader() {
  return (
    <div className="flex justify-between mx-4">
      <span className="font-bold text-lg w-[87%]">
        Lorem ipsum dolor, sit amet consectetur.
      </span>
      <IconHeart className="text-slate-400 cursor-pointer" />
    </div>
  );
}
function NoteTags() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <>
      <div className="text-slate-500 text-[11px] mx-4 flex-wrap flex gap-1 mt-4">
        <span
          className={`bg-green-100 p-1 rounded-md px-2 ${
            darkMode[1].isSelected
              ? "text-black font-semibold"
              : "text-green-600"
          }`}
        >
          function
        </span>
        <span
          className={`bg-green-100 p-1 rounded-md px-2 ${
            darkMode[1].isSelected
              ? "text-black font-semibold"
              : "text-green-600"
          }`}
        >
          functions
        </span>
        <span
          className={`bg-green-100 p-1 rounded-md px-2 ${
            darkMode[1].isSelected
              ? "text-black font-semibold"
              : "text-green-600"
          }`}
        >
          functions
        </span>
        <span
          className={`bg-green-100 p-1 rounded-md px-2 ${
            darkMode[1].isSelected
              ? "text-black font-semibold"
              : "text-green-600"
          }`}
        >
          functions
        </span>
      </div>
    </>
  );
}
function NoteDate() {
  return (
    <div className="text-slate-500 text-[11px] flex gap-1 font-light mx-4 mt-1">
      <span className="">23th June 2024</span>
    </div>
  );
}
function NoteDescription() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <>
      <div
        className={`${
          darkMode[1].isSelected ? "text-slate-300" : ""
        } text-slate-600 text-[13px] mt-4 mx-4`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
        reprehenderit cupiditate repudiandae fuga labore numquam eum aperiam
        assumenda, velit, a suscipit? Enim error labore quis voluptate minima
        dolor? Sapiente, rem!
      </div>
    </>
  );
}
interface CodeBlockProps {
  language: string;
}
const CodeBlock: React.FC<CodeBlockProps> = ({ language }) => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const codeString = `
import React from 'react';
function HelloWorld(){
return <h1>Hello, world!</h1>;
}
export default HelloWorld;
`;
  return (
    <>
      <div className="overflow-hidden text-sm">
        <SyntaxHighlighter
          language={language}
          style={darkMode[1].isSelected ? oneDark : materialLight}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
};
function NoteFooter() {
  return (
    <>
      <div className="flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
        <div className="flex gap-1 items-center text-md">
          <IconBrandJavascript className="mb-[2px]" size={25} />
          Javascript
        </div>
        <IconTrash style={{ fontSize: 14 }} className="cursor-pointer" />
      </div>
    </>
  );
}
