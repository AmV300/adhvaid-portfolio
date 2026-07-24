import Image from "next/image";

type CaseStudyImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
};

export function CaseStudyImage({
  src,
  alt,
  className = "",
  priority = false,
  fit = "cover",
}: CaseStudyImageProps) {
  return (
    <div className={`relative overflow-hidden bg-[#E8E5DB] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        sizes="100vw"
        className={fit === "contain" ? "object-contain" : "object-cover"}
      />
    </div>
  );
}