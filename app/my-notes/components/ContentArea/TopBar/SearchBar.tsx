import { IconSearch } from "@tabler/icons-react";
import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="relative pl-3 w-[60%] h-[38px] bg-slate-100 rounded-3xl flex items-center gap-2">
        <IconSearch className="text-green-1" style={{ fontSize: 13 }} />
        <input
          placeholder="Search a snippet..."
          className="w-[80%] outline-none text-sm bg-slate-100 text-slate-500"
        />
        <AddSnippetButton />
      </div>
    </>
  );
};
function AddSnippetButton() {
  return (
    <>
      <div className="absoulte flex gap-2 px-3 rounded-3xl bg-green-600 p-1 text-[13px] text-white top-[5px] right-[2px] items-center cursor-pointer select-none">
        <div className="font-bold">+</div>
        <div>Snippet</div>
      </div>
    </>
  );
}
export default SearchBar;
