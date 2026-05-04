import Image from "next/image";

const LOGO_WIDTH = 612;
const LOGO_HEIGHT = 330;

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Dress You"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={`object-contain object-left shrink-0 ${className}`}
      priority
    />
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
