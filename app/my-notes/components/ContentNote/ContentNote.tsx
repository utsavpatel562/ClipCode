import { useGlobalContext } from "@/ContextApi";

function ContentNote() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
  } = useGlobalContext();
  return (
    <>
      <div
        className={`border w-1/2 bg-white p-3 rounded-lg ${
          openContentNote ? "block" : "hidden"
        } h-[700px]`}
      >
        ContentNote
        <div onClick={() => setOpenContentNote(false)}>Close</div>
      </div>
    </>
  );
}
export default ContentNote;
