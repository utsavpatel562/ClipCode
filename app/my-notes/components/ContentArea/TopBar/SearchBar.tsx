import { useGlobalContext } from "@/ContextApi";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import React from "react";

const SearchBar = () => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <>
      <div
        className={`relative pl-3 w-[60%] h-[38px] bg-slate-100 rounded-3xl flex items-center gap-2 ${
          darkMode[1].isSelected ? "bg-slate-800" : "bg-slate-100"
        }`}
      >
        <IconSearch className="text-green-1" style={{ fontSize: 13 }} />
        <input
          placeholder="Search a snippet..."
          className={`${
            darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-slate-100"
          } w-[80%] outline-none text-sm text-slate-500"`}
        />
        <AddSnippetButton />
      </div>
    </>
  );
};
function AddSnippetButton() {
  return (
    <>
      <div className="absoulte flex gap-2 px-3 rounded-3xl bg-green-600 p-1 text-[13px] text-white top-[5px] right-[2px] items-center cursor-pointer select-none max-md:px-2">
        <IconPlus style={{ width: 18 }} />
        <div className="max-md:hidden">Snippet</div>
      </div>
    </>
  );
}
export default SearchBar;
