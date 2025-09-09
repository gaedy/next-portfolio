type Props = {
  color: "green" | "orange" | "red";
};

const availableColors: Record<Props["color"], string> = {
  green: "bg-green-400 animate-pulse",
  orange: "bg-orange-400 animate-none",
  red: "bg-red-400 animate-none",
};

export default function Available({ color }: Props) {
  return (
    <div
      className="flex bg-green-900 pointer-events-none select-none text-green-200
     rounded-full gap-1.5 p-1 px-2 items-center text-xs"
    >
      <div
        className={`rounded-full w-1.5 h-1.5 ${availableColors[color]}`}
      ></div>
      <p>Available For Work</p>
    </div>
  );
}
