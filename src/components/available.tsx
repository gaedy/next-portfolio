type Props = {
  color: "green" | "orange" | "red";
};

const availableColors: Record<Props["color"], string> = {
  green: "bg-green-500 animate-pulse",
  orange: "bg-orange-400 animate-none",
  red: "bg-red-500 animate-none",
};

export default function Available({ color }: Props) {
  return (
    <div className={`rounded-full w-2 h-2 ${availableColors[color]}`}></div>
  );
}
