import type { Course } from "@/components/course-card";
import type { LearningPath } from "@/components/learning-path-card";

export const learningPaths: LearningPath[] = [
  {
    title: "React Native foundations",
    description:
      "Build a strong base in components, layout, navigation, state, and the Expo workflow.",
    level: "Beginner",
    modules: 6,
    lessons: 18,
    hours: 8,
    glyph: "⌘",
    tone: "violet",
  },
  {
    title: "Production-ready apps",
    description:
      "Ship resilient experiences with APIs, offline data, performance, and release pipelines.",
    level: "Intermediate",
    modules: 8,
    lessons: 24,
    hours: 14,
    glyph: "↗",
    tone: "blue",
  },
  {
    title: "Mobile architecture",
    description:
      "Make confident architecture choices for large codebases, teams, and evolving products.",
    level: "Advanced",
    modules: 5,
    lessons: 16,
    hours: 10,
    glyph: "◈",
    tone: "cyan",
  },
];

export const courses: Course[] = [
  {
    title: "React Native, from zero",
    description:
      "Your practical start with components, styles, navigation, and device APIs.",
    category: "Core skills",
    level: "Beginner",
    duration: "4h 20m",
    lessons: 18,
    rating: "4.9",
    price: "Free",
    color: "violet",
    glyph: "✳",
  },
  {
    title: "TypeScript for mobile",
    description:
      "Model API data, navigation, forms, and app state with confidence.",
    category: "Type-safe apps",
    level: "Intermediate",
    duration: "3h 10m",
    lessons: 12,
    rating: "4.8",
    price: "$29",
    color: "blue",
    glyph: "TS",
  },
  {
    title: "Your first polished app",
    description:
      "Turn a product brief into a tested app with accessible, production-minded UI.",
    category: "Build & ship",
    level: "Intermediate",
    duration: "5h 45m",
    lessons: 21,
    rating: "5.0",
    price: "$39",
    color: "green",
    glyph: "✓",
  },
];

export const challenges = [
  {
    title: "Build a debounced search hook",
    category: "State",
    time: "15 min",
    difficulty: "Intermediate",
    description:
      "Delay a query until the user stops typing. Handle cleanup and rapid input changes.",
  },
  {
    title: "Create a reusable list row",
    category: "UI patterns",
    time: "20 min",
    difficulty: "Beginner",
    description:
      "Make a flexible row component with leading icons, supporting text, and trailing actions.",
  },
  {
    title: "Cache an API response",
    category: "Networking",
    time: "25 min",
    difficulty: "Advanced",
    description:
      "Design a cache strategy that handles stale data, refresh, and offline states.",
  },
];

export const projects = [
  {
    title: "Habit & focus tracker",
    description: "Design a calm, offline-friendly daily routine app.",
    category: "Wellness",
    level: "Beginner",
    stack: "Expo · AsyncStorage · Charts",
    theme: "violet",
    glyph: "◷",
  },
  {
    title: "Connected fitness companion",
    description: "Bring device data and thoughtful insight together.",
    category: "Health",
    level: "Intermediate",
    stack: "Reanimated · Health APIs · Sync",
    theme: "blue",
    glyph: "⌁",
  },
  {
    title: "Real-time market watch",
    description: "Build a polished streaming dashboard experience.",
    category: "Data",
    level: "Advanced",
    stack: "WebSockets · Performance · Testing",
    theme: "amber",
    glyph: "↗",
  },
];
