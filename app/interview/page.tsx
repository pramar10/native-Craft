import { createHash } from "node:crypto";
import type { Metadata } from "next";
import { InterviewExplorer } from "@/components/interview-explorer";
import { PageIntro } from "@/components/ui";
import { interviewQuestions } from "@/data/interview-questions";
import type { InterviewQuestionMeta } from "@/data/interview-types";
import { subjects } from "@/data/subjects";

const questionCount = Object.values(interviewQuestions).reduce(
  (total, questions) => total + questions.length,
  0,
);
const questionIndex: Record<string, InterviewQuestionMeta[]> =
  Object.fromEntries(
    Object.entries(interviewQuestions).map(([subjectSlug, questions]) => [
      subjectSlug,
      questions.map(({ id, question, topic }) => ({ id, question, topic })),
    ]),
  );
const contentRevision = createHash("sha256")
  .update(JSON.stringify(interviewQuestions))
  .digest("hex");

export const metadata: Metadata = {
  title: "Interview prep",
  description:
    "Explore clear interview questions and answers for the technologies behind modern web and mobile apps.",
};

export default function InterviewPage() {
  return (
    <main className="interview-page">
      <PageIntro
        eyebrow="INTERVIEW PREP"
        title="Know your subjects. Own your answers."
        description="Review focused questions and clear explanations for every subject in the NativeForge library. Pick a topic, open a question, and build an answer in your own words."
        action={
          <span className="interview-total-badge">
            <b>{subjects.length}</b> subjects
            <span aria-hidden="true">·</span>
            <b>{questionCount}</b>{" "}
            {questionCount === 1 ? "question" : "questions"}
          </span>
        }
      />
      <InterviewExplorer
        questionIndex={questionIndex}
        contentRevision={contentRevision}
      />
    </main>
  );
}
