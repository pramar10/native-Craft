"use client";

import { useEffect, useMemo, useState } from "react";
import type { InterviewAnswerBlock, InterviewQuestion, InterviewQuestionMeta } from "@/data/interview-types";
import { subjects } from "@/data/subjects";

const groupedSubjects = subjects.reduce<Record<string, typeof subjects>>(
  (groups, subject) => {
    (groups[subject.category] ??= [] as typeof subjects).push(subject);
    return groups;
  },
  {},
);

function AnswerBlockView({ block }: { block: InterviewAnswerBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.content}</p>;
    case "heading":
      return <h3 className="interview-answer-heading">{block.content}</h3>;
    case "ordered-list":
    case "unordered-list": {
      const List = block.type === "ordered-list" ? "ol" : "ul";
      return (
        <List className="interview-answer-list">
          {block.items.map((item, index) => (
            <li key={`${item.heading}-${index}`}>
              {item.heading && <strong>{item.heading}</strong>}
              {item.content && <p>{item.content}</p>}
            </li>
          ))}
        </List>
      );
    }
    case "code":
      return (
        <div className="interview-code-block">
          <div className="interview-code-label">
            <span aria-hidden="true">&lt;/&gt;</span>
            {block.language}
          </div>
          <pre>
            <code>{block.content}</code>
          </pre>
        </div>
      );
    case "diagram":
      return (
        <div
          className="interview-diagram"
          role="group"
          aria-label={`Diagram: ${block.title}`}
        >
          <h3>{block.title}</h3>
          <div className="interview-diagram-flow">
            {block.nodes.map((node, index) => (
              <div className="interview-diagram-step-wrap" key={`${node.label}-${index}`}>
                <div className="interview-diagram-node">
                  <strong>{node.label}</strong>
                  {node.detail && <span>{node.detail}</span>}
                </div>
                {index < block.nodes.length - 1 && (
                  <span className="interview-diagram-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          {block.note && <p>{block.note}</p>}
        </div>
      );
    case "callout":
      return (
        <aside className={`interview-answer-callout ${block.tone ?? "info"}`}>
          <strong>{block.title}</strong>
          <p>{block.content}</p>
        </aside>
      );
  }
}

export function InterviewExplorer({
  questionIndex,
  contentRevision,
}: {
  questionIndex: Record<string, InterviewQuestionMeta[]>;
  contentRevision: string;
}) {
  const [selectedSlug, setSelectedSlug] = useState("react-native");
  const [query, setQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All topics");
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    "what-is-react-native",
  );
  const [loadedAnswers, setLoadedAnswers] = useState<Record<string, InterviewQuestion>>({});
  const [failedAnswer, setFailedAnswer] = useState<string | null>(null);
  const [retryVersion, setRetryVersion] = useState(0);

  const selectedSubject =
    subjects.find((subject) => subject.slug === selectedSlug) ?? subjects[0];
  const subjectQuestions = questionIndex[selectedSlug] ?? [];
  const topics = useMemo(
    () => [
      "All topics",
      ...new Set(subjectQuestions.map((item) => item.topic)),
    ],
    [subjectQuestions],
  );
  const filteredQuestions = subjectQuestions.filter((item) => {
    const matchesQuery = item.question
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const matchesTopic =
      selectedTopic === "All topics" || item.topic === selectedTopic;
    return matchesQuery && matchesTopic;
  });

  useEffect(() => {
    if (!openQuestion) return;
    const key = `${contentRevision}:${selectedSlug}:${openQuestion}`;
    if (loadedAnswers[key]) return;

    const controller = new AbortController();
    const search = new URLSearchParams({
      subject: selectedSlug,
      id: openQuestion,
      revision: contentRevision,
    });
    fetch(`/api/interview-answer?${search.toString()}`, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Answer request failed");
        return response.json() as Promise<InterviewQuestion>;
      })
      .then((answer) => {
        setLoadedAnswers((current) => ({ ...current, [key]: answer }));
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === "AbortError") return;
        setFailedAnswer(key);
      });

    return () => controller.abort();
  }, [contentRevision, loadedAnswers, openQuestion, retryVersion, selectedSlug]);

  function chooseSubject(slug: string) {
    setSelectedSlug(slug);
    setSelectedTopic("All topics");
    setQuery("");
    setFailedAnswer(null);
    setOpenQuestion(questionIndex[slug]?.[0]?.id ?? null);
  }

  return (
    <section
      className="interview-explorer container"
      aria-label="Interview questions"
    >
      <aside className="interview-subjects" aria-label="Choose a subject">
        <div className="interview-sidebar-heading">
          <span className="interview-sidebar-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
              <path d="M4 5.5v16M8 7h8m-8 4h8" />
            </svg>
          </span>
          <div>
            <strong>Subjects</strong>
            <span>{subjects.length} learning areas</span>
          </div>
        </div>
        <div className="interview-subject-groups">
          {Object.entries(groupedSubjects).map(
            ([category, categorySubjects]) => (
              <div className="interview-subject-group" key={category}>
                <h3>{category}</h3>
                {categorySubjects?.map((subject) => {
                  const count = questionIndex[subject.slug]?.length ?? 0;
                  return (
                    <button
                      className={`interview-subject-option ${selectedSlug === subject.slug ? "selected" : ""}`}
                      key={subject.slug}
                      type="button"
                      onClick={() => chooseSubject(subject.slug)}
                      aria-pressed={selectedSlug === subject.slug}
                    >
                      <span
                        className={`interview-subject-monogram subject-${subject.accent}`}
                      >
                        {subject.icon}
                      </span>
                      <span className="interview-subject-name">
                        {subject.title}
                      </span>
                      <span className="interview-subject-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            ),
          )}
        </div>
        <div className="interview-sidebar-note">
          <span aria-hidden="true">✳</span>
          <p>New questions will be added as each subject is prepared.</p>
        </div>
      </aside>

      <div className="interview-content">
        <div className="interview-content-topline">
          <div className="interview-breadcrumb">
            <span>Interview prep</span>
            <span aria-hidden="true">/</span>
            <strong>{selectedSubject.title}</strong>
          </div>
          <span className="interview-question-total">
            <i aria-hidden="true" />
            {subjectQuestions.length}{" "}
            {subjectQuestions.length === 1 ? "question" : "questions"}
          </span>
        </div>

        <div className="interview-subject-heading">
          <div>
            <span className="interview-subject-kicker">
              {selectedSubject.category}
            </span>
            <h2>{selectedSubject.title}</h2>
            <p>
              Review core ideas and practice explaining them with confidence.
            </p>
          </div>
          <span
            className={`interview-large-monogram subject-${selectedSubject.accent}`}
            aria-hidden="true"
          >
            {selectedSubject.icon}
          </span>
        </div>

        <label className="interview-search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.5 4.5" />
          </svg>
          <input
            type="search"
            placeholder={`Search ${selectedSubject.title} questions`}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label={`Search ${selectedSubject.title} interview questions`}
          />
          {query && (
            <button
              className="interview-search-clear"
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
          {!query && <span className="interview-search-hint">Search</span>}
        </label>

        {subjectQuestions.length > 0 ? (
          <>
            {topics.length > 1 && (
              <div className="interview-topics" aria-label="Filter by topic">
                {topics.map((topic) => (
                  <button
                    className={selectedTopic === topic ? "selected" : ""}
                    type="button"
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    aria-pressed={selectedTopic === topic}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            )}

            {filteredQuestions.length > 0 ? (
              <div className="interview-question-list">
                {filteredQuestions.map((item, index) => {
                  const expanded = openQuestion === item.id;
                  const answerId = `answer-${item.id}`;
                  const answerKey = `${contentRevision}:${selectedSlug}:${item.id}`;
                  const loadedAnswer = loadedAnswers[answerKey];
                  return (
                    <article
                      className={`interview-question-card ${expanded ? "expanded" : ""}`}
                      key={item.id}
                    >
                      <button
                        className="interview-question-trigger"
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={answerId}
                        onClick={() => {
                          setFailedAnswer(null);
                          setOpenQuestion(expanded ? null : item.id);
                        }}
                      >
                        <span className="interview-question-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="interview-question-text">
                          <span className="interview-question-topic">
                            {item.topic}
                          </span>
                          <strong>{item.question}</strong>
                        </span>
                        <span
                          className="interview-expand-icon"
                          aria-hidden="true"
                        >
                          <svg viewBox="0 0 24 24">
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </span>
                      </button>
                      {expanded && (
                        <div className="interview-answer" id={answerId}>
                          {!loadedAnswer && failedAnswer !== answerKey && (
                            <p className="interview-answer-pending">Loading answer…</p>
                          )}
                          {failedAnswer === answerKey && (
                            <div className="interview-answer-callout info">
                              <strong>Couldn’t load this answer</strong>
                              <p>Please try again.</p>
                              <button
                                className="interview-answer-retry"
                                type="button"
                                onClick={() => {
                                  setFailedAnswer(null);
                                  setRetryVersion((version) => version + 1);
                                }}
                              >
                                Retry
                              </button>
                            </div>
                          )}
                          {loadedAnswer && (
                            <div className="interview-answer-copy">
                              {loadedAnswer.answer.length > 0 ? (
                                loadedAnswer.answer.map((block, blockIndex) => (
                                  <AnswerBlockView
                                    block={block}
                                    key={`${item.id}-answer-${blockIndex}`}
                                  />
                                ))
                              ) : (
                                <p className="interview-answer-pending">
                                  Answer content will be added soon.
                                </p>
                              )}
                            </div>
                          )}
                          {loadedAnswer?.references && loadedAnswer.references.length > 0 && (
                            <div className="interview-references">
                              <span>Read more</span>
                              {loadedAnswer.references.map((reference) => (
                                <a
                                  href={reference.href}
                                  key={reference.href}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {reference.label}
                                  <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M14 4h6v6m0-6-9 9" />
                                    <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
                                  </svg>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="interview-empty-state">
                <span className="interview-empty-icon" aria-hidden="true">
                  ⌕
                </span>
                <h3>No matching questions</h3>
                <p>
                  Try another phrase or clear your search to see all questions.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSelectedTopic("All topics");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="interview-empty-state interview-coming-soon">
            <span className="interview-empty-icon" aria-hidden="true">
              ✳
            </span>
            <span className="interview-coming-label">CONTENT IN PROGRESS</span>
            <h3>{selectedSubject.title} questions are on the way</h3>
            <p>
              This subject is ready for its interview guide. Choose another
              subject from the list or come back as new questions are added.
            </p>
            <div className="interview-coming-meta">
              <span>{selectedSubject.level}</span>
              <span>{selectedSubject.modules.length} learning modules</span>
            </div>
          </div>
        )}

        <div className="interview-practice-note">
          <span className="interview-practice-symbol" aria-hidden="true">
            ↗
          </span>
          <div>
            <strong>Make every answer your own</strong>
            <p>
              Use these explanations as a starting point, then practice in your
              own words.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
