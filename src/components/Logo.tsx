export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2"
        y="2"
        width="56"
        height="56"
        rx="14"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      {/* D */}
      <path
        d="M16 17 L16 43 Q16 43 16 43 L24 43 Q36 43 36 30 Q36 17 24 17 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Y */}
      <path
        d="M34 17 L40 28 L46 17 M40 28 L40 43"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col leading-none tracking-[3px] ${className}`}>
      <span className="font-light text-charcoal">dress</span>
      <span className="font-extrabold text-dark">you</span>
    </div>
  );
}
