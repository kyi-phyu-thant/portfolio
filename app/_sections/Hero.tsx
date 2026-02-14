import Image from "next/image";
import Link from "next/link";
import SectionShell from "../_components/SectionShell";
import { site } from "../_config/site";

export default function Hero() {
  return (
    <SectionShell className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] min-h-[70vh]">
      {/* Left column - black background, text */}
      <div className=" flex items-center">
        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight font-sans">
            Kyi Phyu Thant — UI/UX designer and project manager crafting
            user-centered digital experiences. Currently studying in Austria.
          </p>
          <p className="mt-4 md:mt-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight font-sans">
            <Link
              href={`mailto:${site.contact.email}`}
              className="underline underline-offset-2 decoration-[#555] hover:decoration-[#777] transition-colors"
            >
              Available
            </Link>{" "}
            for freelance projects and collaborations.
          </p>
        </div>
      </div>

      {/* Right column - white background, image */}
      <div className="flex items-center justify-center md:justify-start relative overflow-hidden">
        <div className="relative w-full aspect-square max-w-lg md:max-w-none md:w-full md:aspect-auto md:h-full min-h-[320px]">
          <Image
            src="/profile.png"
            alt="Kyi Phyu Thant"
            fill
            className="object-contain object-center grayscale"
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
        </div>
      </div>
    </SectionShell>
  );
}
