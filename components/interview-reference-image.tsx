import type { InterviewAnswerBlock } from "@/data/interview-types";

type InterviewImageBlock = Extract<InterviewAnswerBlock, { type: "image" }>;

function isSafeSourceLink(href: string) {
  try {
    const url = new URL(href);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}

function isSafeImageSource(src: string) {
  if (src.startsWith("/")) return !src.startsWith("//") && !src.includes(String.fromCharCode(92));
  return isSafeSourceLink(src);
}

export function InterviewReferenceImage({ block }: { block: InterviewImageBlock }) {
  if (!isSafeImageSource(block.src)) {
    return (
      <p className="interview-reference-image-error" role="note">
        This image reference is unavailable.
      </p>
    );
  }

  const sourceHref = block.source && isSafeSourceLink(block.source.href)
    ? block.source.href
    : undefined;

  return (
    <figure className="interview-reference-image">
      {/* Remote reference URLs vary by host, so the browser element avoids a global Next Image host allowlist. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="interview-reference-image-media"
        src={block.src}
        alt={block.alt}
        width={block.width}
        height={block.height}
        loading="lazy"
        decoding="async"
      />
      {(block.caption || (sourceHref && block.source)) && (
        <figcaption className="interview-reference-image-caption">
          {block.caption && <span>{block.caption}</span>}
          {sourceHref && block.source && (
            <a href={sourceHref} target="_blank" rel="noreferrer noopener">
              {block.source.label}
              <span aria-hidden="true"> ↗</span>
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
