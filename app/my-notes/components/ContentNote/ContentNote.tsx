"use client";
import { SingleNoteType } from "@/app/Types";
import { useGlobalContext } from "@/ContextApi";
import React, { useEffect, useState } from "react";

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
      className={`border bg-white p-3 rounded-lg z-50 w-auto${
        isMobile
          ? "w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          : "w-1/2"
      } ${openContentNote ? "block" : "hidden"}`}
    >
      {singleNote && (
        <ContentNoteHeader
          singleNote={singleNote}
          setSingleNote={setSingleNote}
        />
      )}

      <div onClick={() => setOpenContentNote(false)} className="cursor-pointer">
        Close
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
      placeholder="New Title"
      value={singleNote.title}
      onChange={onUpdateTitle}
    />
  );
}
