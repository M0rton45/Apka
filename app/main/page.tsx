import { CustomForm } from "@/src/components/Form";
import { CustomInput } from "@/src/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-[20px] font-bold w-[100vw] h-[90vh] flex">
      <div className="w-[50vw] h-[100%] bg-[#222]">
        {/* inputs */}
        <div className="flex justify-center w-[100%] items-center gap-[20px] flex-wrap">
          <CustomForm/>
        </div>
      </div>
      <div className="w-[50vw] h-[100%] bg-[#122]">CV</div>
    </div>
  );
}
