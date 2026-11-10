export type InterviewListItem = {
  heading: string;
  content: string;
};

export type InterviewAnswerBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "ordered-list"; items: InterviewListItem[] }
  | { type: "unordered-list"; items: InterviewListItem[] }
  | { type: "code"; language: string; content: string }
  | {
      type: "diagram";
      title: string;
      nodes: { label: string; detail?: string }[];
      note?: string;
    }
  | {
      type: "callout";
      title: string;
      content: string;
      tone?: "info" | "caution";
    };

export type InterviewQuestion = {
  id: string;
  question: string;
  answer: InterviewAnswerBlock[];
  topic: string;
  references?: { label: string; href: string }[];
};

export type InterviewQuestionMeta = Pick<
  InterviewQuestion,
  "id" | "question" | "topic"
>;
