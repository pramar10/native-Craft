export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  minutes: number;
  code: string;
};

export type Module = { title: string; lessons: Lesson[] };

export type Subject = {
  slug: string;
  title: string;
  category: string;
  level: string;
  hours: number;
  description: string;
  icon: string;
  accent: "mint" | "blue" | "violet" | "amber";
  modules: Module[];
};

const outlines: Array<
  Omit<Subject, "modules"> & {
    outline: string[][];
    code: string;
  }
> = [
  {
    slug: "javascript",
    title: "JavaScript",
    category: "Foundations",
    level: "Beginner",
    hours: 8,
    description:
      "Learn the language of the web: values, functions, objects, asynchronous code, and the patterns used in modern apps.",
    icon: "JS",
    accent: "amber",
    outline: [
      [
        "Language foundations",
        "Values, variables, and types",
        "Operators and control flow",
        "Working with arrays",
      ],
      [
        "Functions and objects",
        "Functions and scope",
        "Objects and destructuring",
        "Modules and reusable code",
      ],
      [
        "Async JavaScript",
        "Promises and async/await",
        "Fetch data from an API",
        "Handle errors and loading",
      ],
    ],
    code: `const learner = { name: "Sam", topic: "JavaScript" };\n\nfunction welcome(person) {\n  return \`Welcome, \${person.name}!\`;\n}\n\nconsole.log(welcome(learner));`,
  },
  {
    slug: "typescript",
    title: "TypeScript",
    category: "Foundations",
    level: "Beginner",
    hours: 7,
    description:
      "Add a reliable type system to JavaScript and build confidence as your applications grow.",
    icon: "TS",
    accent: "blue",
    outline: [
      [
        "TypeScript basics",
        "Your first types",
        "Objects and interfaces",
        "Unions and narrowing",
      ],
      [
        "Typed application code",
        "Functions and generics",
        "Type-safe API data",
        "Typing React props",
      ],
      [
        "Working with a codebase",
        "Reusable utility types",
        "Modules and declarations",
        "Strictness and migration",
      ],
    ],
    code: `type Learner = {\n  name: string;\n  topics: string[];\n};\n\nconst sam: Learner = {\n  name: "Sam",\n  topics: ["TypeScript", "React"],\n};`,
  },
  {
    slug: "html",
    title: "HTML",
    category: "Foundations",
    level: "Beginner",
    hours: 4,
    description:
      "Structure meaningful web pages with semantic elements, accessible forms, and well-organized content.",
    icon: "5",
    accent: "amber",
    outline: [
      [
        "Document structure",
        "How a web document works",
        "Semantic page regions",
        "Headings and content flow",
      ],
      [
        "Links, media, and forms",
        "Links and navigation",
        "Images and media",
        "Accessible forms",
      ],
      [
        "Polish and accessibility",
        "Tables and structured data",
        "Labels and accessible names",
        "Metadata and validation",
      ],
    ],
    code: `<main>\n  <article>\n    <h1>Learning HTML</h1>\n    <p>Build a clear structure for the web.</p>\n    <a href="/learn">Explore lessons</a>\n  </article>\n</main>`,
  },
  {
    slug: "css",
    title: "CSS",
    category: "Styling",
    level: "Beginner",
    hours: 7,
    description:
      "Turn structured content into polished interfaces with layout, responsive design, and maintainable styles.",
    icon: "#",
    accent: "mint",
    outline: [
      [
        "CSS foundations",
        "Selectors and the cascade",
        "Color, type, and spacing",
        "The box model",
      ],
      [
        "Modern layout",
        "Flexbox for interfaces",
        "Grid for page layouts",
        "Positioning and stacking",
      ],
      [
        "Responsive styling",
        "Fluid sizing and breakpoints",
        "Responsive navigation",
        "Motion and accessibility",
      ],
    ],
    code: `.lesson-card {\n  display: grid;\n  gap: 1rem;\n  padding: clamp(1rem, 3vw, 2rem);\n  border: 1px solid #334155;\n  border-radius: 1rem;\n}`,
  },
  {
    slug: "tailwind-css",
    title: "Tailwind CSS",
    category: "Styling",
    level: "Beginner",
    hours: 5,
    description:
      "Build consistent interfaces quickly with utility classes, responsive variants, and reusable patterns.",
    icon: "TW",
    accent: "mint",
    outline: [
      [
        "Utility-first workflow",
        "How utility classes work",
        "Spacing, color, and type",
        "Responsive variants",
      ],
      [
        "Build interface patterns",
        "Flex and grid utilities",
        "States and interaction",
        "Compose reusable components",
      ],
      [
        "Theme and maintainability",
        "Design tokens and theme",
        "Organize class strings",
        "Accessibility and cleanup",
      ],
    ],
    code: `<button className="rounded-xl bg-emerald-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-200">\n  Continue learning\n</button>`,
  },
  {
    slug: "babel",
    title: "Babel",
    category: "Tooling",
    level: "Intermediate",
    hours: 3,
    description:
      "Understand how Babel transforms modern JavaScript and how presets and plugins fit into a build.",
    icon: "B",
    accent: "amber",
    outline: [
      [
        "How Babel works",
        "Source code and transforms",
        "Your first configuration",
        "Presets and targets",
      ],
      [
        "Configure a project",
        "Environment-specific config",
        "React and TypeScript presets",
        "Babel with a bundler",
      ],
      [
        "Extend Babel",
        "Plugin ordering",
        "Write a small transform",
        "Debugging generated code",
      ],
    ],
    code: `// babel.config.js\nmodule.exports = {\n  presets: [\n    ["@babel/preset-env", { targets: "defaults" }],\n    "@babel/preset-react",\n    "@babel/preset-typescript",\n  ],\n};`,
  },
  {
    slug: "webpack",
    title: "Webpack",
    category: "Tooling",
    level: "Intermediate",
    hours: 6,
    description:
      "Bundle modern applications with a clear understanding of entries, loaders, plugins, and optimization.",
    icon: "W",
    accent: "blue",
    outline: [
      [
        "Bundling fundamentals",
        "Entry and output",
        "Loaders and asset handling",
        "Plugins and build lifecycle",
      ],
      [
        "Development workflow",
        "Development server",
        "Environment configuration",
        "Source maps and debugging",
      ],
      [
        "Production builds",
        "Code splitting",
        "Caching and optimization",
        "Analyze a bundle",
      ],
    ],
    code: `// webpack.config.js\nmodule.exports = {\n  entry: "./src/index.js",\n  output: { filename: "app.js" },\n  module: { rules: [{ test: /\\.css$/, use: ["style-loader", "css-loader"] }] },\n};`,
  },
  {
    slug: "vite",
    title: "Vite",
    category: "Tooling",
    level: "Beginner",
    hours: 4,
    description:
      "Start fast, build smoothly, and understand the development server and production pipeline behind Vite.",
    icon: "V",
    accent: "mint",
    outline: [
      [
        "Getting started",
        "Create a Vite project",
        "Understand the dev server",
        "Use environment variables",
      ],
      [
        "Extend the workflow",
        "Configure aliases",
        "Add and configure plugins",
        "Work with assets",
      ],
      [
        "Build and deploy",
        "Production build",
        "Preview a production bundle",
        "Deploy a static app",
      ],
    ],
    code: `// vite.config.ts\nimport { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react";\n\nexport default defineConfig({\n  plugins: [react()],\n});`,
  },
  {
    slug: "react",
    title: "React.js",
    category: "Frameworks",
    level: "Beginner",
    hours: 8,
    description:
      "Build interactive user interfaces with components, props, state, effects, and predictable data flow.",
    icon: "⚛",
    accent: "blue",
    outline: [
      [
        "React foundations",
        "Think in components",
        "Props and composition",
        "Render lists and conditions",
      ],
      [
        "State and interaction",
        "Events and local state",
        "Forms and controlled inputs",
        "Share state between components",
      ],
      [
        "Effects and data",
        "Effects and cleanup",
        "Fetch data safely",
        "Reusable custom hooks",
      ],
    ],
    code: `function WelcomeCard({ name }) {\n  return (\n    <article className="welcome-card">\n      <h2>Welcome, {name}</h2>\n      <p>Your next lesson is ready.</p>\n    </article>\n  );\n}`,
  },
  {
    slug: "next-js",
    title: "Next.js",
    category: "Frameworks",
    level: "Intermediate",
    hours: 8,
    description:
      "Create production-ready React applications with routing, layouts, server rendering, and data patterns.",
    icon: "N",
    accent: "mint",
    outline: [
      [
        "App Router foundations",
        "Pages, layouts, and routes",
        "Dynamic route segments",
        "Navigation and loading UI",
      ],
      [
        "Rendering and data",
        "Server and client components",
        "Fetch data in a route",
        "Mutations and forms",
      ],
      [
        "Production patterns",
        "Metadata and SEO",
        "Error boundaries",
        "Deploy and monitor",
      ],
    ],
    code: `// app/learn/page.tsx\nexport default async function LearnPage() {\n  const subjects = await getSubjects();\n\n  return <SubjectList subjects={subjects} />;\n}`,
  },
  {
    slug: "react-native",
    title: "React Native",
    category: "Mobile",
    level: "Beginner",
    hours: 9,
    description:
      "Create native mobile experiences with React skills, native components, device APIs, and reliable layouts.",
    icon: "RN",
    accent: "blue",
    outline: [
      [
        "Foundation",
        "Introduction to React Native",
        "React Native Architecture Overview",
        "React Native vs Native Android/iOS",
        "Expo vs React Native Community CLI",
        "Environment Setup",
        "Creating Your First Application",
        "Understanding Project Structure",
        "View and Text Components",
        "Image and ImageBackground",
        "TextInput and Pressable",
        "ScrollView and FlatList Introduction",
        "StyleSheet Fundamentals",
        "Flexbox Layout",
        "Platform-Specific Code",
        "Running on Android and iOS",
      ],
      [
        "Core Development",
        "Screen navigation",
        "Manage app state",
        "Forms and keyboard behavior",
      ],
      [
        "Advanced Development",
        "Images and platform assets",
        "Use device APIs",
        "Build and release basics",
      ],
      [
        "Professional Development",
        "Images and platform assets",
        "Use device APIs",
        "Build and release basics",
      ],
      [
        "Expert & Architecture",
        "Images and platform assets",
        "Use device APIs",
        "Build and release basics",
      ],
    ],
    code: `import { Pressable, Text, View } from "react-native";\n\nexport function LessonCard({ title, onOpen }) {\n  return (\n    <Pressable onPress={onOpen}>\n      <View><Text>{title}</Text></View>\n    </Pressable>\n  );\n}`,
  },
  {
    slug: "expo",
    title: "Expo",
    category: "Mobile",
    level: "Beginner",
    hours: 5,
    description:
      "Build and ship React Native apps with Expo tools, device features, and a smooth developer workflow.",
    icon: "E",
    accent: "mint",
    outline: [
      [
        "Expo workflow",
        "Create an Expo app",
        "Run on a device",
        "Project configuration",
      ],
      [
        "Use native capabilities",
        "Images and fonts",
        "Camera and location",
        "Notifications and permissions",
      ],
      [
        "Ship your app",
        "Development builds",
        "Updates and channels",
        "Prepare a store release",
      ],
    ],
    code: `import * as ImagePicker from "expo-image-picker";\n\nconst result = await ImagePicker.launchImageLibraryAsync({\n  mediaTypes: ["images"],\n  quality: 0.8,\n});\n\nif (!result.canceled) setPhoto(result.assets[0].uri);`,
  },
  {
    slug: "redux",
    title: "Redux",
    category: "State management",
    level: "Intermediate",
    hours: 4,
    description:
      "Understand predictable state, actions, reducers, and when a centralized store helps your app.",
    icon: "R",
    accent: "mint",
    outline: [
      [
        "Redux mental model",
        "State and one-way flow",
        "Actions and reducers",
        "The store and subscriptions",
      ],
      [
        "Build with Redux",
        "Dispatch updates",
        "Organize feature state",
        "Async logic basics",
      ],
      [
        "Use Redux well",
        "Normalize state",
        "Select derived data",
        "Debug state changes",
      ],
    ],
    code: `const initialState = { value: 0 };\n\nfunction counterReducer(state = initialState, action) {\n  if (action.type === "counter/increment") {\n    return { value: state.value + 1 };\n  }\n  return state;\n}`,
  },
  {
    slug: "redux-toolkit",
    title: "Redux Toolkit",
    category: "State management",
    level: "Intermediate",
    hours: 5,
    description:
      "Use the recommended Redux tools to write concise slices, async thunks, and typed store logic.",
    icon: "RTK",
    accent: "mint",
    outline: [
      [
        "Toolkit foundations",
        "Configure a store",
        "Create a slice",
        "Use generated actions",
      ],
      [
        "Async application state",
        "Async thunks",
        "Loading and error states",
        "Connect React components",
      ],
      [
        "Scale the store",
        "Selectors and memoization",
        "RTK Query overview",
        "Type a Redux store",
      ],
    ],
    code: `import { createSlice } from "@reduxjs/toolkit";\n\nconst counter = createSlice({\n  name: "counter",\n  initialState: 0,\n  reducers: { increment: state => state + 1 },\n});\n\nexport const { increment } = counter.actions;`,
  },
  {
    slug: "mobx",
    title: "MobX",
    category: "State management",
    level: "Intermediate",
    hours: 4,
    description:
      "Model observable application state and learn how MobX tracks changes through your UI.",
    icon: "M",
    accent: "amber",
    outline: [
      [
        "Observable state",
        "Observables and reactions",
        "Actions and mutations",
        "Computed values",
      ],
      [
        "React with MobX",
        "Make components observer",
        "Organize stores",
        "Async actions",
      ],
      [
        "MobX in practice",
        "Choose state boundaries",
        "Debug reactions",
        "Test observable state",
      ],
    ],
    code: `import { makeAutoObservable } from "mobx";\n\nclass CounterStore {\n  value = 0;\n  constructor() { makeAutoObservable(this); }\n  increment() { this.value += 1; }\n}\n\nexport const counter = new CounterStore();`,
  },
  {
    slug: "zustand",
    title: "Zustand",
    category: "State management",
    level: "Beginner",
    hours: 3,
    description:
      "Manage shared React state with a small API, focused selectors, and minimal boilerplate.",
    icon: "Z",
    accent: "mint",
    outline: [
      [
        "Zustand essentials",
        "Create a store",
        "Read and update state",
        "Use selectors",
      ],
      [
        "Build app features",
        "Async store actions",
        "Share state across screens",
        "Persist selected state",
      ],
      [
        "Keep state maintainable",
        "Split stores by feature",
        "Avoid unnecessary renders",
        "Test store behavior",
      ],
    ],
    code: `import { create } from "zustand";\n\nexport const useCounter = create(set => ({\n  value: 0,\n  increment: () => set(state => ({ value: state.value + 1 })),\n}));`,
  },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const subjects: Subject[] = outlines.map(
  ({ outline, code, ...subject }) => ({
    ...subject,
    modules: outline.map(([moduleTitle, ...lessonTitles], moduleIndex) => ({
      title: moduleTitle,
      lessons: lessonTitles.map((title, lessonIndex) => ({
        slug: slugify(title),
        title,
        summary: `Understand ${title.toLowerCase()} and apply it in a small, practical example.`,
        minutes: 8 + moduleIndex * 2 + lessonIndex * 3,
        code:
          lessonIndex === 0 && moduleIndex === 0
            ? code
            : `// ${title}\n\n// Start with the smallest useful example.\n// Then change one thing at a time.`,
      })),
    })),
  }),
);

export const categories = [
  "All subjects",
  ...Array.from(new Set(subjects.map((subject) => subject.category))),
];

export function getSubject(slug: string) {
  return subjects.find((subject) => subject.slug === slug);
}

export function getLesson(subjectSlug: string, lessonSlug: string) {
  const subject = getSubject(subjectSlug);
  if (!subject) return undefined;
  for (const subjectModule of subject.modules) {
    const lesson = subjectModule.lessons.find(
      (item) => item.slug === lessonSlug,
    );
    if (lesson) return { subject, module: subjectModule, lesson };
  }
}
