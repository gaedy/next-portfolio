import { Circle, Triangle } from "lucide-react";
import Link from "next/link";

export default function Joystick() {
  return (
    <div className="mr-auto flex items-center gap-2">
      <Link href="#projects">
        <Circle
          size={14}
          strokeWidth={3}
          className=" mr-auto text-chart-1 cursor-pointer hover:scale-110 active:scale-100"
        />
      </Link>

      <Link href="/writing">
        <Triangle
          size={14}
          strokeWidth={3}
          className="text-chart-1 hover:scale-110 cursor-pointer active:scale-100"
        />
      </Link>
    </div>
  );
}
