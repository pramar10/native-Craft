import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/ui";
import { getSubject, subjects } from "@/data/subjects";

export function generateStaticParams() {
  return subjects.map((subject) => ({ slug: subject.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subject = getSubject(slug);
  return { title: subject?.title ?? "Subject" };
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();
  const lessons = subject.modules.flatMap((module) => module.lessons);
  return (
    <main>
      <div className="breadcrumb container">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/learn">Subjects</Link>
        <span>/</span>
        <span>{subject.title}</span>
      </div>
      <PageIntro
        eyebrow={`${subject.category.toUpperCase()} · ${subject.level.toUpperCase()}`}
        title={subject.title}
        description={subject.description}
        action={
          <span className={`subject-icon large icon-${subject.accent}`}>
            {subject.icon}
          </span>
        }
      />
      <section className="section container subject-detail-layout">
        <div className="curriculum-main">
          <div className="curriculum-summary">
            <div>
              <div className="eyebrow">YOUR LEARNING PATH</div>
              <h2>A practical curriculum, step by step.</h2>
              <p>
                Move through short lessons in order or jump to the topic you
                need today.
              </p>
            </div>
            <div className="curriculum-facts">
              <span>
                <b>{lessons.length}</b> lessons
              </span>
              <span>
                <b>{subject.hours}</b> hours
              </span>
            </div>
          </div>
          <div className="module-list">
            {subject.modules.map((module, moduleIndex) => (
              <section className="module-card" key={module.title}>
                <div className="module-heading">
                  <span className="module-number">
                    MODULE {String(moduleIndex + 1).padStart(2, "0")}
                  </span>
                  <h2>{module.title}</h2>
                  <span className="module-lessons">
                    {module.lessons.length} lessons
                  </span>
                </div>
                <div className="lesson-list">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <Link
                      href={`/learn/${subject.slug}/${lesson.slug}`}
                      className="lesson-row"
                      key={lesson.slug}
                    >
                      <span className="lesson-play">
                        {lessonIndex === 0 && moduleIndex === 0 ? "▶" : "↗"}
                      </span>
                      <span className="lesson-row-title">
                        <b>{lesson.title}</b>
                        <small>{lesson.summary}</small>
                      </span>
                      <span className="lesson-time">{lesson.minutes} min</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
        <aside className="subject-side">
          <div className="start-card">
            <span className={`subject-icon icon-${subject.accent}`}>
              {subject.icon}
            </span>
            <h3>Start learning</h3>
            <p>
              Begin with the first lesson and build a solid foundation in{" "}
              {subject.title}.
            </p>
            <Link
              className="button button-primary"
              href={`/learn/${subject.slug}/${lessons[0].slug}`}
            >
              Start first lesson <span>↗</span>
            </Link>
          </div>
          <div className="side-card subject-outcomes">
            <div className="eyebrow">WHAT YOU’LL COVER</div>
            {subject.modules.map((module) => (
              <div key={module.title}>
                <span>✓</span>
                {module.title}
              </div>
            ))}
          </div>
          <Link className="back-to-subjects" href="/">
            ← Browse all subjects
          </Link>
        </aside>
      </section>
      <section className="section section-soft">
        <div className="container related-section">
          <div>
            <div className="eyebrow">KEEP CONNECTING THE DOTS</div>
            <h2>Explore another subject next.</h2>
          </div>
          <Link className="button button-secondary" href="/">
            See all subjects <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
