import Link from "next/link";
import { Tag } from "@/components/ui";

export type LearningPath = {
  title: string;
  description: string;
  level: string;
  modules: number;
  lessons: number;
  hours: number;
  glyph: string;
  tone: string;
};

export function LearningPathCard({ path }: { path: LearningPath }) {
  return (
    <article className="path-card">
      <div className={`path-glyph ${path.tone}`}>{path.glyph}</div>
      <Tag
        tone={
          path.level === "Beginner"
            ? "neutral"
            : path.level === "Advanced"
              ? "blue"
              : "purple"
        }
      >
        {path.level}
      </Tag>
      <h3>{path.title}</h3>
      <p>{path.description}</p>
      <div className="path-meta">
        <span>{path.modules} modules</span>
        <span>
          {path.lessons} lessons · {path.hours} hrs
        </span>
      </div>
      <Link href="/learn" className="path-action">
        View learning path <span>↗</span>
      </Link>
    </article>
  );
}
