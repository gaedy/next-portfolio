import { Circle, Triangle } from "lucide-react";
import Link from "next/link";

// const MotionCircle = motion(Circle);
// const MotionTriangle = motion(Triangle);

export default function Joystick() {
  // const circle = useAnimationControls();
  // const triangle = useAnimationControls();

  // const collision = async () => {
  //   await circle.start({
  //     x: [-50, 0],
  //     transition: {
  //       duration: 0.45,
  //       ease: "easeIn",
  //     },
  //   });

  //   // 2. Impact — triangle reacts
  //   triangle.start({
  //     x: 2,
  //     rotate: 4,

  //     transition: {
  //       type: "spring",
  //       stiffness: 180,
  //       damping: 14,
  //     },
  //   });

  //   circle.start({
  //     x: -2,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 18,
  //     },
  //   });

  //   // ⏸ small pause so the eye catches it
  //   await new Promise((r) => setTimeout(r, 350));

  //   // 3. Return to rest
  //   triangle.start({
  //     x: 0,
  //     rotate: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 140,
  //       damping: 10,
  //     },
  //   });

  //   circle.start({
  //     x: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 18,
  //     },
  //   });
  // };

  // useEffect(() => {
  //   async function run() {
  //     collision();
  //   }

  //   run();
  // }, [circle, triangle]);

  return (
    <>
      <div className="mr-auto flex items-center gap-2">
        <Link
          href="#projects"
          className="hover:scale-110 transition-transform cursor-pointer"
        >
          <Circle size={14} strokeWidth={3} className="text-chart-1" />
        </Link>

        <Link
          href="/writing"
          className="hover:scale-110 transition-transform cursor-pointer"
        >
          <Triangle size={14} strokeWidth={3} className="text-chart-1" />
        </Link>
      </div>

      {/* <div className="mr-auto flex items-center gap-2">
        <Link href="#projects">
          <Circle
            size={14}
            strokeWidth={3}
            className=" mr-auto transition-transform text-chart-1 cursor-pointer hover:scale-110 active:scale-100"
          />
        </Link>
        <Link href="/writing">
          <Triangle
            size={14}
            strokeWidth={3}
            className="text-chart-1 transition-transform hover:scale-110 cursor-pointer active:scale-100"
          />
        </Link>
      </div> */}
    </>
  );
}
