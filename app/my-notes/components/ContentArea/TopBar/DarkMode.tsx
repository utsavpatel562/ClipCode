import { useGlobalContext } from "@/ContextApi";
function DarkMode() {
  const {
    darkModeObject: { darkMode, setDarkMode },
  } = useGlobalContext();
  function handleClickedDarkMode(index: number) {
    const updateDarkModeObject = darkMode.map((item, i) => {
      if (i === index) {
        return { ...item, isSelected: true };
      } else {
        return { ...item, isSelected: false };
      }
    });
    setDarkMode(updateDarkModeObject);
  }
  return (
    <>
      <div
        className={`h-[36px] w-[74px] rounded-3xl flex items-center gap-2 pl-[5px] ${
          darkMode[1].isSelected ? "bg-slate-800" : "bg-slate-100"
        }`}
      >
        {darkMode.map((item, index) => {
          return (
            <div
              className={`${
                item.isSelected
                  ? "bg-green-1 text-white"
                  : "bg-slate-100 text-green-600"
              } w-7 h-7 flex items-center justify-center rounded-full top-[4px] p-1 left-1 cursor-pointer select-none`}
              key={index}
              onClick={() => handleClickedDarkMode(index)}
            >
              {item.icon}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default DarkMode;
