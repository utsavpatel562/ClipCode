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
    <>
      <div
        className={`border ${
          isMobile ? "w-4/5" : "w-1/2"
        } z-50 bg-white p-3 rounded-lg ${
          openContentNote ? "block" : "hidden"
        } h-[700px] ${
          isMobile
            ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : ""
        }`}
      >
        {singleNote && (
          <ContentNoteHeader
            singleNote={singleNote}
            setSingleNote={setSingleNote}
          />
        )}

        <div
          onClick={() => setOpenContentNote(false)}
          className="cursor-pointer"
        >
          Close
        </div>
      </div>
    </>
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
      if (note._id === singleNote._id) {
        return newSingleNote;
      }
      return note;
    });
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
