import Link from "next/link";
import type { Subject } from "@/data/subjects";

export function SubjectCard({
  subject,
  index = 0,
}: {
  subject: Subject;
  index?: number;
}) {
  const lessonCount = subject.modules.reduce(
    (sum, module) => sum + module.lessons.length,
    0,
  );
  return (
    <Link
      className={`subject-card subject-${subject.accent}`}
      href={`/learn/${subject.slug}`}
    >
      <div className="subject-card-top">
        <span className="subject-icon">{subject.icon}</span>
        <span className="subject-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <span className="subject-category">{subject.category}</span>
      <h3>{subject.title}</h3>
      <p>{subject.description}</p>
      <div className="subject-card-foot">
        <span>
          {lessonCount} lessons · {subject.hours} hrs
        </span>
        <span className="subject-arrow">↗</span>
      </div>
    </Link>
  );
}
