"use client";
import { SingleNoteType } from "@/app/Types";
import { useGlobalContext } from "@/ContextApi";
import React, { useEffect, useState } from "react";

function ContentNote() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    isMobileObject: { isMobile },
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
  console.log(singleNote);
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
  } = useGlobalContext();

  function onUpdateTitle(event: React.ChangeEvent<HTMLInputElement>) {
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

  return (
    <input
      className="w-full border p-2 rounded-md"
      placeholder="New Title"
      value={singleNote.title}
      onChange={onUpdateTitle}
    />
  );
}
