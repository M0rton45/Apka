import Counter from "@/src/components/shared/Counter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-[20px] font-bold">
      HELP{" "}
      <div>
        <Counter count={2} />
        <Counter count={5} />
        <Counter count={8} />
      </div>{" "}
    </div>
  );
}
