import { useGlobalContext } from "@/ContextApi";

function ContentNote() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    isMobileObject: { isMobile, setIsMobile },
  } = useGlobalContext();

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
        ContentNote
        <div onClick={() => setOpenContentNote(false)}>Close</div>
      </div>
    </>
  );
}
export default ContentNote;
