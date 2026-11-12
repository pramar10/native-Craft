import type {
  InterviewAnswerBlock,
  InterviewListItem,
} from "./interview-types";

export const paragraph = (content: string): InterviewAnswerBlock => ({
  type: "paragraph",
  content,
});
export const code = (
  language: string,
  content: string,
): InterviewAnswerBlock => ({
  type: "code",
  language,
  content,
});
export const diagram = (
  title: string,
  nodes: { label: string; detail?: string }[],
  note?: string,
): InterviewAnswerBlock => ({
  type: "diagram",
  title,
  nodes,
  ...(note ? { note } : {}),
});
export const list = (
  items: InterviewListItem[],
  ordered = false,
): InterviewAnswerBlock => ({
  type: ordered ? "ordered-list" : "unordered-list",
  items,
});
export const points = (items: string[]): InterviewAnswerBlock =>
  list(items.map((content) => ({ heading: "", content })));
export const namedPoints = (items: [string, string][]): InterviewAnswerBlock =>
  list(
    items.map(([itemHeading, content]) => ({ heading: itemHeading, content })),
  );
