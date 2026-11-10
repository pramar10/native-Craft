import Link from "next/link";
import { Tag } from "@/components/ui";

export type Course = {
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  lessons: number;
  rating: string;
  price: string;
  color: string;
  glyph: string;
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <div className={`course-art art-${course.color}`}>
        <span className="art-orb">{course.glyph}</span>
        <span className="art-lines" />
      </div>
      <div className="course-copy">
        <div className="course-kicker">{course.category}</div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-meta">
          <span>◷ {course.duration}</span>
          <span>{course.lessons} lessons</span>
        </div>
        <div className="course-bottom">
          <span className="rating">
            <b>★★★★★</b> {course.rating}
          </span>
          <strong>{course.price}</strong>
        </div>
        <Link className="card-link" href="/learn">
          View course <span>↗</span>
        </Link>
      </div>
      <Tag
        tone={
          course.level === "Beginner"
            ? "neutral"
            : course.level === "Advanced"
              ? "blue"
              : "purple"
        }
      >
        {course.level}
      </Tag>
    </article>
  );
}
