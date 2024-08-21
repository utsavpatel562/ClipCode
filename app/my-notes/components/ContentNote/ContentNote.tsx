"use client";
import { SingleNoteType } from "@/app/Types";
import { useGlobalContext } from "@/ContextApi";
import React, { useEffect, useState } from "react";

function ContentNote() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    isMobileObject: { isMobile },
    selectedNoteObject: { selectedNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(
    undefined
  );

  useEffect(() => {
    if (openContentNote && selectedNote) {
      setSingleNote(selectedNote);
    }
  }, [openContentNote, selectedNote]);

  useEffect(() => {
    if (isNewNote && singleNote?.title) {
      setAllNotes([...allNotes, singleNote]);
      setIsNewNote(false);
    }
  }, [singleNote]);

  return (
    <div
      className={`transition-transform duration-300 ease-in-out rounded-lg ${
        isMobile
          ? "w-full max-w-md absolute top-0 right-0 h-full"
          : "w-1/3 h-full"
      } ${openContentNote ? "block" : "hidden"}`}
    >
      <div
        className={`border bg-white p-4 rounded-lg h-full w-[650px] ${
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

    const newAllNotes = allNotes.map((note) =>
      note._id === singleNote._id ? newSingleNote : note
    );
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
