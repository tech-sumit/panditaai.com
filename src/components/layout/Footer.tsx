import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-[#131313] border-t border-outline-variant/10">
      <div className="flex flex-col items-center md:items-start gap-4">
        <Link href="/" className="text-xl font-black text-white font-headline tracking-tighter">
          PANDITAAI
        </Link>
        <p className="font-headline tracking-widest text-[10px] uppercase text-white/40">
          A Pandit.ai Company
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        <Link
          href="/about"
          className="font-headline tracking-widest text-xs uppercase text-white/40 hover:text-white transition-opacity"
        >
          About
        </Link>
        <Link
          href="/interest"
          className="font-headline tracking-widest text-xs uppercase text-white/40 hover:text-white transition-opacity"
        >
          Interest
        </Link>
        <Link
          href="/investor-connect"
          className="font-headline tracking-widest text-xs uppercase text-[#FF6B00] hover:text-white transition-opacity"
        >
          Investor Connect
        </Link>
      </div>

      <div className="font-headline tracking-widest text-[10px] uppercase text-white/20">
        &copy; {new Date().getFullYear()} PanditaAI. All rights reserved.
      </div>
    </footer>
  );
}
