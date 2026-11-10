import { importedReactNativeQuestions } from "./react-native-interview-content";
import { architectureSecurityQuestions } from "./react-native-architecture-security-content";
import { dataManagementQuestions } from "./react-native-data-management-content";
import type { InterviewQuestion } from "./interview-types";

/** Add subject slugs here as interview content is prepared. */
const baseReactNativeQuestions: InterviewQuestion[] = [
  {
    id: "what-is-react-native",
    question: "What is React Native?",
    topic: "Fundamentals",
    answer: [
      {
        type: "paragraph",
        content:
          "React Native is an open-source framework for building Android and iOS applications with React and JavaScript. It lets you describe your interface with reusable React components while using each platform’s native capabilities and APIs.",
      },
    ],
    references: [
      {
        label: "React Native documentation",
        href: "https://reactnative.dev/docs/getting-started",
      },
    ],
  },
  {
    id: "what-are-the-advantages-of-react-native",
    question: "What are some advantages of React Native?",
    topic: "Fundamentals",
    answer: [
      {
        type: "ordered-list",
        items: [
          {
            heading: "Cross-Platform Development",
            content:
              "You can write one codebase that runs on both iOS and Android, saving time and development effort compared to building separate native apps.",
          },
          {
            heading: "Native Performance",
            content:
              "React Native renders core components as platform-native views, which can provide a native look and feel. Performance still depends on the workload and implementation.",
          },
          {
            heading: "Faster Development with Hot Reloading",
            content:
              "Hot Reload and Fast Refresh let developers see changes quickly without rebuilding the entire app, speeding up development and debugging.",
          },
          {
            heading: "JavaScript and React Ecosystem",
            content:
              "Since it is based on JavaScript and React, developers can use a familiar language and framework with existing tools, libraries, and knowledge.",
          },
          {
            heading: "Rich UI Components",
            content:
              "React Native provides pre-built components and APIs for creating smooth, interactive interfaces that feel native.",
          },
          {
            heading: "Large Community and Ecosystem",
            content:
              "A strong developer community provides open-source libraries, tools, tutorials, and active support.",
          },
          {
            heading: "Third-Party Plugin Support",
            content:
              "You can integrate native modules or third-party plugins written in Java, Swift, or Objective-C for more control or hardware access.",
          },
          {
            heading: "Code Sharing with Web",
            content:
              "With frameworks such as React Native Web, you can share components and logic across web and mobile platforms.",
          },
        ],
      },
    ],
    references: [],
  },
  ...importedReactNativeQuestions,
];

function mergeQuestionContent(
  base: InterviewQuestion[],
  additions: InterviewQuestion[],
): InterviewQuestion[] {
  const merged = [...base];
  const indexById = new Map<string, number>(
    merged.map((question, index): [string, number] => [question.id, index]),
  );

  for (const addition of additions) {
    const existingIndex = indexById.get(addition.id);
    if (existingIndex === undefined) {
      indexById.set(addition.id, merged.length);
      merged.push(addition);
      continue;
    }

    const existing = merged[existingIndex];
    if (!existing) continue;
    existing.question = addition.question;
    existing.topic = addition.topic;
    existing.answer = [
      ...existing.answer,
      { type: "heading", content: "Additional interview detail" },
      ...addition.answer,
    ];
    existing.references = Array.from(
      new Map(
        [...(existing.references ?? []), ...(addition.references ?? [])].map(
          (reference) => [reference.href, reference] as const,
        ),
      ).values(),
    );
  }

  return merged;
}

const reactNativeQuestions = mergeQuestionContent(baseReactNativeQuestions, [
  ...architectureSecurityQuestions,
  ...dataManagementQuestions,
]);

export const interviewQuestions: Record<string, InterviewQuestion[]> = {
  "react-native": reactNativeQuestions,
};
