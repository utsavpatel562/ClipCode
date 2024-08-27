"use client";
import { SingleNoteType } from "@/app/Types";
import { useGlobalContext } from "@/ContextApi";
import TitleIcon from "@mui/icons-material/Title";
import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import StyleIcon from "@mui/icons-material/Style";
import EditIcon from "@mui/icons-material/Edit";

function ContentNote() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    isMobileObject: { isMobile, setIsMobile },
    selectedNoteObject: { selectedNote, setSelectedNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(
    undefined
  );

  useEffect(() => {
    if (openContentNote) {
      if (selectedNote) {
        setSingleNote(selectedNote);
      }
    }
  }, [openContentNote, selectedNote]);

  useEffect(() => {
    if (isNewNote) {
      if (singleNote && singleNote.title !== "") {
        setAllNotes([...allNotes, singleNote]);
        setIsNewNote(false);
      }
    }
  }, [singleNote]);

  return (
    <div
      className={`transition-transform duration-300 ease-in-out rounded-lg bg-white p-4 ${
        isMobile
          ? "w-full max-w-md absolute top-0 right-0 h-full"
          : "w-1/3 h-full"
      } ${openContentNote ? "block" : "hidden"} ${
        isMobile ? "w-full" : "w-full"
      }`}
    >
      {singleNote && (
        <ContentNoteHeader
          singleNote={singleNote}
          setSingleNote={setSingleNote}
        />
      )}
      <button
        onClick={() => setOpenContentNote(false)}
        className="mt-2 text-red-500"
      >
        Close
      </button>
    </div>
  );
}

export default ContentNote;

function ContentNoteHeader({
  singleNote,
  setSingleNote,
}: {
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
}) {
  const {
    allNotesObject: { allNotes, setAllNotes },
    openContentNoteObject: { setOpenContentNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
  } = useGlobalContext();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function onUpdateTitle(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newSingleNote = { ...singleNote, title: event.target.value };
    setSingleNote(newSingleNote);

    const newAllNotes = allNotes.map((note) => {
      if (note.id === singleNote.id) {
        return newSingleNote;
      }
      return note;
    });
    setAllNotes(newAllNotes);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  return (
    <>
      <div className="flex justify-between gap-8 mb-4">
        <div className="flex gap-2 w-full">
          <TitleIcon
            style={{ fontSize: 19 }}
            className="text-slate-400 mt-[4px]"
          />
          <textarea
            ref={textareaRef}
            placeholder="New Title..."
            value={singleNote.title}
            onChange={onUpdateTitle}
            onKeyDown={handleKeyDown}
            className="font-bold text-xl outline-none resize-none h-auto overflow-hidden w-full"
          />
        </div>
        <CloseIcon
          onClick={() => {
            setIsNewNote(false);
            setOpenContentNote(false);
          }}
          className="text-slate-400 mt-[7px] cursor-pointer"
          style={{ cursor: "pointer", fontSize: "22" }}
        />
      </div>
    </>
  );
}
function NoteTags({
  singleNote,
  setSingleNote,
}: {
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div className="flex text-[13px] items-center gap-2">
        <StyleIcon
          style={{ fontSize: 19 }}
          className={`${hovered ? "text-purple-600" : "text-slate-400"}`}
        />
      </div>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex justify-between w-full"
      >
        <div className="flex gap-2 items-center flex-wrap">
          {singleNote.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-slate-100 text-slate-400 p-1 px-2 rounded-md"
            >
              {" "}
              {tag}
            </div>
          ))}
          {hovered && (
            <EditIcon
              style={{ fontSize: 19 }}
              className="text-slate-400 cursor-pointer"
            />
          )}
        </div>
      </div>
    </>
  );
}
