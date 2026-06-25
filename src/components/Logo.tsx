import logoBird from "@/assets/logo-bird.png";

export function Logo({
  className = "",
  invert = false,
  size = "md",
}: {
  className?: string;
  invert?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const text = invert ? "#ffffff" : "#000000";
  const subText = invert ? "#a3a3a3" : "#666666";
  const dim = size === "sm" ? "h-12 w-12" : size === "lg" ? "h-16 w-16" : "h-14 w-14";
  const brand = size === "sm" ? "text-[17px]" : size === "lg" ? "text-xl" : "text-lg";
  const sub = size === "sm" ? "text-[10px]" : size === "lg" ? "text-[12px]" : "text-[11px]";

  return (
    <div className={`flex items-center gap-3 leading-none ${className}`}>
      <img
        src={logoBird}
        alt="Swift Assets"
        width={96}
        height={96}
        className={`${dim} object-contain`}
      />
      <div className="flex flex-col" style={{ color: text }}>
        <div className={`${brand} font-semibold tracking-[0.22em]`}>SWIFT ASSETS</div>
        <div className={`${sub} font-light tracking-[0.18em] mt-1`} style={{ color: subText }}>
          UG (HAFTUNGSBESCHRÄNKT)
        </div>
      </div>
    </div>
  );
}
