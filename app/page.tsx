import CodeIcon from "@mui/icons-material/Code";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
    </div>
  );
}
function Navbar() {
  return (
    <>
      <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
        <Logo />
        <Buttons />
      </div>
    </>
  );
}
function Logo() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <div className={`bg-green-1 p-[6px] rounded-md`}>
          <CodeIcon sx={{ fontSize: 27, color: "white" }} />
        </div>
        <div className="flex gap-1 text-[19px]">
          <span className={`font-bold text-green-1`}>Clip</span>
          <span className="text-slate-600">Code</span>
        </div>
      </div>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
        <Button className="bg-green-1 px-8 p-[20px] hover:bg-green-1 max-sm:w-full">
          Sign In
        </Button>
        <Button className="bg-white border border-green-1 text-green-1 px-8 p-[19px] max-sm:w-full hover:text-white hover:border-black">
          Sign Up
        </Button>
      </div>
    </>
  );
}
