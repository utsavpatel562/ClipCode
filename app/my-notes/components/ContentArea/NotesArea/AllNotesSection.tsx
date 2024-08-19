import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useGlobalContext } from "@/ContextApi";
import { IconBrandJavascript, IconHeart, IconTrash } from "@tabler/icons-react";
import React from "react";
import {
  materialLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { SingleNoteType } from "@/app/Types";

export default function AllNotesSection() {
  const {
    allNotesObject: { allNotes },
  } = useGlobalContext();

  return (
    <div className="mt-5 flex flex-wrap gap-4">
      {allNotes.map((note, index) => (
        <SingleNote key={index} note={note} />
      ))}
    </div>
  );
}

function SingleNote({ note }: { note: SingleNoteType }) {
  const {
    darkModeObject: { darkMode },
    openContentNoteObject: { openContentNote },
  } = useGlobalContext();

  const isDarkMode = darkMode[1].isSelected;

  return (
    <div
      className={`${isDarkMode ? "bg-slate-900 text-white" : "bg-white"} ${
        openContentNote ? "w-full" : "w-[400px]"
      } max-sm:w-full rounded-lg py-4 flex-wrap`}
    >
      <NoteHeader title={note.title} isFavorite={note.isFavorite} />
      <NoteDate creationDate={note.creationDate} />
      <NoteTags tags={note.tags} />
      <NoteDescription description={note.description} />
      <CodeBlock language={note.language} code={note.code} />
      <NoteFooter language={note.language} />
    </div>
  );
}

function NoteHeader({
  title,
  isFavorite,
}: {
  title: string;
  isFavorite: boolean;
}) {
  const {
    openContentNoteObject: { setOpenContentNote },
  } = useGlobalContext();

  return (
    <div
      className="flex justify-between mx-4"
      onClick={() => setOpenContentNote(true)}
    >
      <span className="font-bold text-lg w-[87%] hover:text-green-600 cursor-pointer">
        {title}
      </span>
      <IconHeart
        className={`text-slate-400 cursor-pointer ${
          isFavorite ? "text-red-500" : ""
        }`}
      />
    </div>
  );
}

function NoteTags({ tags }: { tags: string[] }) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkMode = darkMode[1].isSelected;

  return (
    <div className="text-slate-500 text-[11px] mx-4 flex-wrap flex gap-1 mt-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`bg-green-100 p-1 rounded-md px-2 ${
            isDarkMode ? "text-black font-semibold" : "text-green-600"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function NoteDate({ creationDate }: { creationDate: string }) {
  return (
    <div className="text-slate-500 text-[11px] flex gap-1 font-light mx-4 mt-1">
      <span>{creationDate}</span>
    </div>
  );
}

function NoteDescription({ description }: { description: string }) {
  const {
    darkModeObject: { darkMode },
    openContentNoteObject: { setOpenContentNote },
  } = useGlobalContext();

  const isDarkMode = darkMode[1].isSelected;

  return (
    <div
      className={`${
        isDarkMode ? "text-slate-300" : "text-slate-600"
      } text-[13px] mt-4 mx-4`}
      onClick={() => setOpenContentNote(true)}
    >
      {description}
    </div>
  );
}

const CodeBlock: React.FC<{ language: string; code: string }> = ({
  language,
  code,
}) => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div className="overflow-hidden text-sm">
      <SyntaxHighlighter
        language={language}
        style={darkMode[1].isSelected ? oneDark : materialLight}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

function NoteFooter({ language }: { language: string }) {
  return (
    <div className="flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
      <div className="flex gap-1 items-center text-md">
        <IconBrandJavascript className="mb-[2px]" size={25} />
        <span>{language}</span>
      </div>
      <IconTrash style={{ fontSize: 14 }} className="cursor-pointer" />
    </div>
  );
}
