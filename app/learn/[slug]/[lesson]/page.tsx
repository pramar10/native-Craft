import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson, subjects } from "@/data/subjects";

export function generateStaticParams() {
  return subjects.flatMap((subject) =>
    subject.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({
        slug: subject.slug,
        lesson: lesson.slug,
      })),
    ),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}): Promise<Metadata> {
  const { slug, lesson } = await params;
  const result = getLesson(slug, lesson);
  return { title: result?.lesson.title ?? "Lesson" };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}) {
  const { slug, lesson: lessonSlug } = await params;
  const result = getLesson(slug, lessonSlug);
  if (!result) notFound();
  const { subject, module, lesson } = result;
  const sequence = subject.modules.flatMap((item) =>
    item.lessons.map((entry) => ({ module: item.title, lesson: entry })),
  );
  const currentIndex = sequence.findIndex(
    (item) => item.lesson.slug === lesson.slug,
  );
  const previous = sequence[currentIndex - 1];
  const next = sequence[currentIndex + 1];
  return (
    <main className="lesson-page">
      <div className="lesson-topline container">
        <Link href="/learn">Subjects</Link>
        <span>/</span>
        <Link href={`/learn/${subject.slug}`}>{subject.title}</Link>
        <span>/</span>
        <span>{module.title}</span>
      </div>
      <div className="lesson-layout container">
        <aside className="lesson-sidebar">
          <Link className="lesson-course-link" href={`/learn/${subject.slug}`}>
            ← &nbsp; {subject.title}
          </Link>
          <div className="lesson-sidebar-title">CURRICULUM</div>
          {subject.modules.map((item, moduleIndex) => (
            <div className="lesson-sidebar-module" key={item.title}>
              <div className="sidebar-module-name">
                <span>{String(moduleIndex + 1).padStart(2, "0")}</span>
                {item.title}
              </div>
              {item.lessons.map((entry) => (
                <Link
                  key={entry.slug}
                  className={entry.slug === lesson.slug ? "current" : ""}
                  href={`/learn/${subject.slug}/${entry.slug}`}
                >
                  <span className="sidebar-lesson-icon">
                    {entry.slug === lesson.slug ? "▶" : "·"}
                  </span>
                  {entry.title}
                </Link>
              ))}
            </div>
          ))}
        </aside>
        <article className="lesson-content">
          <div className="lesson-label">
            {subject.title.toUpperCase()} <span>·</span>{" "}
            {module.title.toUpperCase()}
          </div>
          <h1>{lesson.title}</h1>
          <p className="lesson-lede">{lesson.summary}</p>
          <div className="lesson-meta">
            <span>◷ &nbsp;{lesson.minutes} min read</span>
            <span>
              Lesson {currentIndex + 1} of {sequence.length}
            </span>
          </div>
          <hr />
          <h2>Overview</h2>
          <p>
            Good software gets easier to understand when each idea has a clear
            purpose. In this lesson, we’ll look at{" "}
            <strong>{lesson.title.toLowerCase()}</strong> in {subject.title} and
            connect it to a small example you can adapt as you build.
          </p>
          <p>
            Begin with the simplest version. Notice what each part is
            responsible for, then change one thing at a time. This makes it
            easier to spot how the language or tool behaves and where it fits in
            a real application.
          </p>
          <div className="lesson-note">
            <span>✦</span>
            <p>
              <b>Keep in mind</b>
              <br />
              You don’t need to memorize every detail. Focus on understanding
              the shape of the problem and knowing what to explore next.
            </p>
          </div>
          <h2>See it in code</h2>
          <p>Here’s a small example using a common {subject.title} pattern:</p>
          <pre className="lesson-code-block">
            <div>
              <span>EXAMPLE</span>
              <button type="button">{subject.title}</button>
            </div>
            <code>{lesson.code}</code>
          </pre>
          <h2>Try it yourself</h2>
          <p>
            Make a small variation: rename one part, add a second value, or
            change the output. Then explain what changed and why.
          </p>
          <div className="lesson-exercise">
            <span className="exercise-icon">⌘</span>
            <div>
              <b>Quick practice</b>
              <p>
                Take the example above and adapt it for something you are
                currently building.
              </p>
            </div>
          </div>
          <div className="lesson-complete-note">
            ✓ &nbsp; Lesson complete? Continue when you’re ready.
          </div>
          <nav className="lesson-pagination" aria-label="Lesson navigation">
            {previous ? (
              <Link href={`/learn/${subject.slug}/${previous.lesson.slug}`}>
                <small>← PREVIOUS</small>
                <b>{previous.lesson.title}</b>
              </Link>
            ) : (
              <Link href={`/learn/${subject.slug}`}>
                <small>← SUBJECT OVERVIEW</small>
                <b>{subject.title} curriculum</b>
              </Link>
            )}
            {next ? (
              <Link
                className="next-lesson"
                href={`/learn/${subject.slug}/${next.lesson.slug}`}
              >
                <small>NEXT LESSON →</small>
                <b>{next.lesson.title}</b>
              </Link>
            ) : (
              <Link className="next-lesson" href="/">
                <small>FINISHED THIS SUBJECT? →</small>
                <b>Explore another subject</b>
              </Link>
            )}
          </nav>
        </article>
      </div>
    </main>
  );
}
