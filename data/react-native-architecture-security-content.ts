import type { InterviewQuestion } from "./interview-types";

export const architectureSecurityQuestions: InterviewQuestion[] = [
  {
    "id": "how-would-you-architect-a-react-native-application-that-needs-to-scale-f",
    "question": "How would you architect a React Native application that needs to scale from 10 features to 100+ features?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "I would scale the React Native application using feature-based modular architecture rather than organizing everything by file type. 1. Feature-based structure src/ ├── features/ │   ├── auth/ │   ├── payments/ │   ├── orders/ │   └── profile/ ├── core/ │   ├── api/ │   ├── navigation/ │   ├── storage/ │   ├── analytics/ │   └── security/ ├── components/ ├── design-system/ ├── hooks/ ├── utils/ └── config/ 2. Define clear boundaries Each feature owns its screens, hooks, API logic, state and tests. Shared functionality goes into core or design-system. Avoid direct dependencies between unrelated features. 3. State management Local UI state → useState/useReducer Feature state → Zustand/Redux Server state → TanStack Query Persist only data that actually needs persistence. 4. API layer Create a centralized API client with: Authentication/interceptors Error handling Request cancellation Retry policies Response normalization 5. Design system Build reusable: Buttons Inputs Modals Typography Colors Spacing Accessibility primitives This prevents 100+ features from creating inconsistent UI. 6. Navigation Use modular navigation with feature-level navigators instead of maintaining one huge navigation file. 7. Performance Plan for: Lazy loading FlatList optimization Memoization where justified Image caching Avoiding unnecessary global state updates Profiling JS/UI thread performance 8. Testing Each feature should have: Unit tests Component tests Integration tests Critical E2E flows 9. CI/CD and quality gates Automate: lint → type-check → tests → build → security checks → deployment 10. Scalability principle The key is to make features independently developable, testable, and removable without affecting the rest of the application. For 100+ features, I would also consider monorepo/package-level modularization if the team and codebase become large enough."
      },
      {
        "type": "diagram",
        "title": "Scalable feature architecture",
        "nodes": [
          {
            "label": "App shell",
            "detail": "Navigation, startup, environment config"
          },
          {
            "label": "Feature modules",
            "detail": "Each owns UI, state, API calls, and domain rules"
          },
          {
            "label": "Shared contracts",
            "detail": "Design system, platform adapters, common services"
          },
          {
            "label": "Data layer",
            "detail": "API clients, local repository, cache and sync"
          },
          {
            "label": "Delivery pipeline",
            "detail": "Checks, builds, release controls and telemetry"
          }
        ],
        "note": "Keep feature dependencies flowing through small public interfaces."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-do-you-decide-when-a-react-native-application-needs-modularization",
    "question": "How do you decide when a React Native application needs modularization?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "I look for complexity and team scalability, not just project size. I would modularize when: Features become tightly coupled and changes in one feature affect others. The codebase develops large shared files/components that are difficult to maintain. Multiple developers/teams frequently create merge conflicts. Feature ownership becomes unclear. Build/test times start increasing significantly. Business domains can be clearly separated, such as auth, payments, orders, profile. Features need to be developed, tested, or released independently. Reusable functionality is duplicated across multiple features. Interview line: “I don't modularize based on the number of screens. I modularize when the codebase has clear domain boundaries, ownership problems, coupling, or team-scaling issues. The goal is to create independent, maintainable modules without introducing unnecessary complexity.”"
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-structure-a-large-react-native-codebase-used-by-multiple-d",
    "question": "How would you structure a large React Native codebase used by multiple development teams?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "I would use a domain/feature-based architecture with clear ownership boundaries. src/ ├── features/ │   ├── auth/ │   ├── payments/ │   ├── orders/ │   └── profile/ │ ├── shared/ │   ├── components/ │   ├── hooks/ │   ├── utils/ │   └── types/ │ ├── core/ │   ├── api/ │   ├── navigation/ │   ├── storage/ │   ├── analytics/ │   └── security/ │ └── design-system/ Each team owns specific features/domains. Features should have minimal dependency on each other. core contains infrastructure; shared contains genuinely reusable code. Establish dependency rules so one feature cannot directly access another feature's internals. Use TypeScript with strict typing and shared contracts. For a very large organization, move independent domains into workspace packages/monorepo modules. Enforce standards through ESLint, TypeScript, tests, CI/CD and code ownership. Interview line: “My primary goal is to make team boundaries match code boundaries, so teams can develop and test their features independently without creating coupling or merge conflicts.”"
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-do-you-prevent-tight-coupling",
    "question": "How would you prevent a large React Native project from becoming tightly coupled?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "I would prevent tight coupling through clear architectural boundaries and dependency rules: Feature-based modules — each feature owns its UI, state, API and business logic. One-way dependencies — Feature → Core/Shared, not Feature A → Feature B internals. Interfaces/contracts — communicate through defined interfaces, callbacks, events or services instead of directly accessing implementation details. Centralized infrastructure — API client, storage, analytics, authentication, etc. stay in core. Shared design system — common UI components instead of cross-feature component dependencies. Dependency injection where appropriate for services and native modules. Strict TypeScript + ESLint rules to prevent forbidden imports. Avoid global state by default — keep state local to the feature unless it genuinely needs to be shared. Code ownership + PR reviews to enforce boundaries. Interview line: “I control coupling by controlling dependencies: features depend on stable shared contracts and infrastructure, not on each other's internal implementation.”"
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-do-you-handle-feature-based-architecture",
    "question": "How would you divide a React Native application into feature-based modules?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "I would divide the application based on business domains, not technical layers. src/ ├── features/ │   ├── auth/ │   │   ├── screens/ │   │   ├── components/ │   │   ├── hooks/ │   │   ├── services/ │   │   ├── store/ │   │   └── types.ts │   │ │   ├── orders/ │   ├── payments/ │   └── profile/ │ ├── core/ ├── shared/ └── design-system/ For each feature, I keep its UI, business logic, state, API integration and tests together. Rules: Feature → core/shared Feature → another feature only through a public interface No access to another feature's internal files Move code to shared only when it is genuinely reusable Interview line: “I identify business domains first and make each domain an independently maintainable module containing its own UI, state, services and tests.”"
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-design-communication-between-independent-feature-modules",
    "question": "How would you design communication between independent feature modules?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use well-defined interfaces/contracts rather than direct internal imports. Shared services/interfaces for common operations. Navigation for user-flow communication. Event bus only for loosely coupled cross-cutting events. Shared state only when truly necessary. Prevent direct access to another feature's internals. Rule: Feature A should depend on Feature B's public contract, not its implementation."
      }
    ]
  },
  {
    "id": "how-would-you-handle-shared-utilities-components-hooks-and-services-acro",
    "question": "How would you handle shared utilities, components, hooks, and services across multiple modules?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Create a shared layer for genuinely reusable code. shared/ ├── components/ ├── hooks/ ├── utils/ ├── services/ └── types/ components → reusable UI hooks → reusable behavior utils → pure utilities services → common infrastructure Avoid putting feature-specific logic into shared. If something is shared by only one feature, keep it inside that feature."
      }
    ]
  },
  {
    "id": "how-would-you-design-a-react-native-app-where-android-and-ios-have-signi",
    "question": "How would you design a React Native app where Android and iOS have significantly different business requirements?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Keep common business logic shared, while isolating platform-specific behavior. features/payment/ ├── Payment.ts ├── Payment.android.ts └── Payment.ios.ts Use: Platform-specific files Platform.select Native modules when required Shared domain models and interfaces Don't force identical implementations when the platform requirements are genuinely different."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-migrate-a-large-existing-react-native-application-without-",
    "question": "How would you migrate a large existing React Native application without stopping feature development?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use incremental migration, not a big-bang rewrite. Identify boundaries and technical debt. Introduce the target architecture alongside the existing one. Migrate one feature at a time. Keep old and new modules interoperable. Add tests around migrated areas. Remove legacy code after migration. Use feature flags for risky changes. Strangler pattern: gradually replace the old architecture while development continues."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-identify-architectural-bottlenecks-in-a-react-native-appli",
    "question": "How would you identify architectural bottlenecks in a React Native application?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "I would measure before changing architecture. Check: JS/UI thread performance Rendering and re-render frequency Startup time Memory usage Network/API latency Navigation performance Bundle size Native bridge/JS communication Build time Crash and ANR rates Use profiling, production monitoring and performance traces to identify the actual bottleneck."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "when-would-you-choose-native-modules-over-implementing-functionality-ent",
    "question": "When would you choose native modules over implementing functionality entirely in JavaScript?",
    "topic": "Native & tooling",
    "answer": [
      {
        "type": "paragraph",
        "content": "When functionality requires: Platform APIs unavailable in RN High-performance native processing Background execution Bluetooth/NFC/call handling Deep OS integration Existing native SDKs Real-time processing Use JavaScript for business logic and UI when possible; use native code when platform capabilities or performance require it."
      }
    ]
  },
  {
    "id": "how-would-you-design-a-react-native-application-that-needs-extensive-nat",
    "question": "How would you design a React Native application that needs extensive native Android and iOS integrations?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Create a native integration layer behind stable TypeScript interfaces. React Native ↓ TypeScript Interface ↓ Native Module ↙     ↘ Android   iOS Kotlin    Swift Keep: Native code responsible for OS integration. JS responsible for UI/business orchestration. Platform differences hidden behind common interfaces."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-decide-whether-a-feature-should-be-implemented-in-react-na",
    "question": "How would you decide whether a feature should be implemented in React Native, Kotlin/Java, or Swift/Objective-C?",
    "topic": "Native & tooling",
    "answer": [
      {
        "type": "paragraph",
        "content": "I evaluate: Does RN provide the required API? Is performance critical? Does it require OS-level/background functionality? Is there an existing native SDK? Is the functionality platform-specific? RN: UI and shared business logic Kotlin/Swift: OS-specific or performance-critical functionality Java/Objective-C: mainly when integrating existing legacy native libraries/code."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-handle-platform-specific-code-without-duplicating-the-enti",
    "question": "How would you handle platform-specific code without duplicating the entire feature?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Share the feature's domain logic and UI structure, and isolate only the platform-specific implementation. Feature ├── business logic ├── shared UI └── platform adapter ├── Android └── iOS Use .android.ts, .ios.ts, Platform, or native modules."
      }
    ]
  },
  {
    "id": "how-would-you-design-an-architecture-that-allows-react-native-and-native",
    "question": "How would you design an architecture that allows React Native and native screens to coexist?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use native navigation as the application-level shell and embed RN screens/modules where appropriate. Native App ├── Native Screen ├── React Native Screen ├── Native Screen └── React Native Screen Define clear navigation and lifecycle contracts between native and RN. This is particularly useful for incremental migration or applications with heavy native functionality."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-approach-migrating-a-legacy-react-native-application-to-th",
    "question": "How would you approach migrating a legacy React Native application to the New Architecture?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "I would migrate incrementally: Audit third-party dependencies and native modules. Upgrade React Native and dependencies. Identify incompatible libraries. Replace deprecated/native integrations. Enable New Architecture in development. Test Fabric/TurboModules/JSI integrations. Monitor performance and crashes. Roll out gradually. I would avoid enabling it blindly across a large production application without dependency and native-module validation."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "what-architectural-problems-become-more-visible-as-a-react-native-applic",
    "question": "What architectural problems become more visible as a React Native application grows?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Common problems: Tight coupling Large global state Circular dependencies Duplicate business logic God components Poor feature boundaries Excessive re-renders Slow builds Difficult testing Inconsistent UI Native/JS boundary problems Increasing dependency complexity"
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-design-a-react-native-application-for-millions-of-users",
    "question": "How would you design a React Native application for millions of users?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Focus on reliability, performance and scalability across the entire system. CDN and optimized assets API scalability and caching Pagination/lazy loading Efficient local caching Crash/ANR monitoring Offline handling Feature flags CI/CD with staged rollout Remote configuration Performance monitoring Secure storage and API communication Mobile clients should remain lightweight while scalability is primarily handled through resilient backend infrastructure and efficient client-server communication."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-design-react-native-applications-for-multiple-white-label-",
    "question": "How would you design React Native applications for multiple white-label clients?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Separate core functionality from client configuration and branding. Core ├── Features ├── Business Logic └── Design System"
      },
      {
        "type": "paragraph",
        "content": "Client A → Theme + Config + Assets Client B → Theme + Config + Assets Client C → Theme + Config + Assets Use: Environment/client configuration Theme tokens Asset configuration Feature flags Client-specific adapters where required For larger scale, use monorepo/workspace packages and separate app targets."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-handle-multiple-app-environments-such-as-development-stagi",
    "question": "How would you handle multiple app environments such as development, staging, UAT, and production?",
    "topic": "Build & release",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use environment-specific configuration, not hardcoded values. .env.development .env.staging .env.uat .env.production Separate: API endpoints Firebase projects Bundle/application IDs where required Feature flags Signing configurations Analytics configuration Use CI/CD to select the environment and inject configuration during builds. Production secrets should never be committed to the repository."
      },
      {
        "type": "ordered-list",
        "items": [
          {
            "heading": "React Native New Architecture",
            "content": ""
          }
        ]
      }
    ]
  },
  {
    "id": "what-are-the-major-differences-between-the-old-and-new-architecture-of-r",
    "question": "What are the major differences between the old and New Architecture of React Native?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Old Architecture New Architecture Bridge-based communication JSI-based interop Batched/serialized communication More direct native/JS interaction Legacy Native Modules TurboModules Legacy renderer Fabric Runtime-dynamic interfaces Codegen-generated interfaces More bridge overhead Reduced communication overhead"
      },
      {
        "type": "paragraph",
        "content": "Key point: The New Architecture is designed to reduce JS-native communication overhead and provide better extensibility and performance."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-do-fabric-turbomodules-jsi-and-codegen-work-together",
    "question": "How do Fabric, TurboModules, JSI, and Codegen work together?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "TypeScript Spec ↓ Codegen ↓ Native Interfaces ↓ TurboModules ──────→ Native APIs │ ↓ JSI ↑ │ Fabric ← React rendering JSI → low-level JS ↔ native interoperability. TurboModules → modern native module system using JSI. Fabric → modern rendering system. Codegen → generates type-safe native interfaces from JS/TS specifications."
      },
      {
        "type": "diagram",
        "title": "How the New Architecture pieces fit",
        "nodes": [
          {
            "label": "Typed specs",
            "detail": "Codegen creates native interfaces"
          },
          {
            "label": "JSI",
            "detail": "JavaScript/native interoperability"
          },
          {
            "label": "TurboModules",
            "detail": "Lazy, typed native modules"
          },
          {
            "label": "Fabric",
            "detail": "Concurrent renderer and native host views"
          }
        ],
        "note": "The pieces solve different parts of the integration; enabling the architecture does not make every workload faster automatically."
      }
    ]
  },
  {
    "id": "what-problem-does-jsi-solve-in-react-native",
    "question": "What problem does JSI solve in React Native?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "JSI provides a direct C++ interface between JavaScript and native/C++ code, avoiding the traditional serialized Bridge communication model. This enables: Lower communication overhead Synchronous calls when appropriate Direct access to native/C++ objects Better support for high-performance libraries"
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-are-turbomodules-different-from-the-legacy-native-module-system",
    "question": "How are TurboModules different from the legacy Native Module system?",
    "topic": "Native & tooling",
    "answer": [
      {
        "type": "paragraph",
        "content": "Legacy: Uses the Bridge. Module initialization can be eager. Data is serialized between JS and native. TurboModules: Use JSI. Support lazy module loading. Use Codegen-generated interfaces. Reduce communication overhead. Provide stronger type contracts."
      }
    ]
  },
  {
    "id": "what-problem-does-fabric-solve",
    "question": "What problem does Fabric solve?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Fabric is React Native's new rendering architecture. It improves: Rendering consistency JS/native interoperability Concurrent React support Component interoperability Rendering performance It replaces the legacy UIManager/renderer approach."
      }
    ]
  },
  {
    "id": "how-does-the-new-architecture-affect-application-performance",
    "question": "How does the New Architecture affect application performance?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Potential improvements include: Reduced JS-native communication overhead Faster native module access Lazy TurboModule initialization More efficient rendering with Fabric Better handling of concurrent rendering But: New Architecture does not automatically make every application faster. Poor React rendering, excessive state updates, large lists, network latency, or inefficient business logic can still be bottlenecks."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      },
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "what-migration-problems-have-you-encountered-when-moving-a-project-to-th",
    "question": "What migration problems have you encountered when moving a project to the New Architecture?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Typical issues include: Third-party libraries using legacy Native Modules. Custom native modules requiring migration. Fabric incompatibilities. Codegen/specification errors. Android/iOS build failures. Changes in lifecycle or initialization behavior. Native dependencies relying on deprecated APIs. I would migrate dependencies first, then custom native modules, followed by application-level validation."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-identify-whether-a-third-party-library-is-compatible-with-",
    "question": "How would you identify whether a third-party library is compatible with the New Architecture?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "I would check: Library documentation. Current release/changelog. Whether it explicitly supports Fabric/TurboModules. GitHub issues and migration status. Native implementation for legacy Bridge dependencies. Test it in a New Architecture-enabled sample/application. I would not assume compatibility just because the library works with the latest React Native version."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "what-happens-if-a-critical-dependency-is-not-compatible-with-the-new-arc",
    "question": "What happens if a critical dependency is not compatible with the New Architecture?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "I would evaluate: Upgrade to a compatible version. Replace the dependency. Patch/fork and migrate it. Temporarily isolate the dependency if technically possible. Delay migration if it is business-critical and cannot safely be replaced. Never force the migration at the expense of production stability."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-design-a-custom-native-module-using-turbomodules",
    "question": "How would you design a custom native module using TurboModules?",
    "topic": "Native & tooling",
    "answer": [
      {
        "type": "paragraph",
        "content": "Define a typed JS/TS specification first: TypeScript Spec ↓ Codegen ↓ TurboModule interface ↓ Android implementation ↓ iOS implementation The JS layer interacts only with the generated interface, while Kotlin/Swift implements the platform-specific behavior."
      }
    ]
  },
  {
    "id": "what-is-codegen-and-why-is-it-important-in-the-new-architecture",
    "question": "What is Codegen and why is it important in the New Architecture?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Codegen automatically generates native interfaces and boilerplate from typed JS/TS specifications. It provides: Type safety Consistent JS/native contracts Less manual boilerplate Earlier detection of API mismatches Better TurboModule/Fabric integration"
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "what-is-the-difference-between-synchronous-and-asynchronous-native-calls",
    "question": "What is the difference between synchronous and asynchronous native calls?",
    "topic": "Native & tooling",
    "answer": [
      {
        "type": "paragraph",
        "content": "Synchronous: JS → Native → result → JS JS waits for the native result. Asynchronous: JS → Native ↓ later result ↓ Promise/Event/Callback JS continues execution without waiting."
      }
    ]
  },
  {
    "id": "what-risks-are-associated-with-using-synchronous-jsi-calls",
    "question": "What risks are associated with using synchronous JSI calls?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Main risk: blocking the JavaScript thread. If the native operation is expensive, it can cause: UI freezes Frame drops Increased input latency ANRs/jank indirectly through JS work Use synchronous calls only for small, fast operations where blocking is predictable."
      }
    ]
  },
  {
    "id": "how-would-you-debug-a-crash-that-occurs-only-after-enabling-the-new-arch",
    "question": "How would you debug a crash that occurs only after enabling the New Architecture?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "I would isolate the problem systematically: Confirm the crash disappears when New Architecture is disabled. Check native crash logs and stack traces. Identify recently migrated/third-party native modules. Verify TurboModule/Fabric compatibility. Check Codegen-generated interfaces. Reproduce in a minimal environment. Test Android and iOS independently. Upgrade/patch the problematic dependency. Add a staged rollout after fixing. The key is to determine whether the failure is in Fabric, TurboModules, Codegen, JSI, or a third-party native dependency."
      },
      {
        "type": "diagram",
        "title": "Narrow down a New Architecture crash",
        "nodes": [
          {
            "label": "Reproduce",
            "detail": "Confirm it is tied to the architecture setting"
          },
          {
            "label": "Inspect",
            "detail": "Native stack, Codegen output, and library compatibility"
          },
          {
            "label": "Isolate",
            "detail": "Test Fabric, TurboModules, and dependencies"
          },
          {
            "label": "Roll out",
            "detail": "Patch, verify, then stage the release"
          }
        ]
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      }
    ]
  },
  {
    "id": "how-would-you-investigate-a-screen-that-takes-3-4-seconds-to-become-inte",
    "question": "How would you investigate a screen that takes 3–4 seconds to become interactive?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "Measure startup → JS execution → API → rendering → interaction. Profile JS thread and UI thread. Check slow synchronous initialization and large component trees. Check API latency. Check bundle loading/parsing. Identify expensive effects, calculations and renders. Reproduce in release build, not only debug."
      }
    ]
  },
  {
    "id": "how-do-you-identify-whether-a-performance-issue-is-in-javascript-native-",
    "question": "How do you identify whether a performance issue is in JavaScript, native code, rendering, or the network?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use profiling and timing: JS: CPU profile, long JS tasks, excessive renders. Native/UI: Android Studio Profiler / Xcode Instruments. Rendering: dropped frames, UI thread activity, React DevTools/Profiler. Network: request duration, DNS, TLS, server response and payload size."
      },
      {
        "type": "diagram",
        "title": "Isolate the slow layer",
        "nodes": [
          {
            "label": "Measure",
            "detail": "Capture the user-visible delay"
          },
          {
            "label": "JS",
            "detail": "Look for long tasks and excess renders"
          },
          {
            "label": "UI/native",
            "detail": "Profile frames, layout, and native work"
          },
          {
            "label": "Network",
            "detail": "Measure DNS, TLS, server time, and payload"
          }
        ]
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "how-do-you-optimize-re-renders-in-react-native",
    "question": "What causes unnecessary re-renders?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Common causes: Parent re-rendering. State updates. Context value changes. Redux/Zustand subscription changes. New object/array/function references. Incorrect component keys. Broad state subscriptions."
      }
    ]
  },
  {
    "id": "how-would-you-optimize-a-component-that-renders-thousands-of-times-durin",
    "question": "How would you optimize a component that renders thousands of times during an interaction?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "First identify what triggers each render. Then: Localize state. Split the component. Narrow state subscriptions/selectors. Memoize stable child components. Remove unnecessary context dependencies. Avoid creating unnecessary objects/functions. Virtualize large lists."
      }
    ]
  },
  {
    "id": "when-should-you-use-react-memo-usememo-and-usecallback",
    "question": "When should you use React.memo, useMemo, and useCallback?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "React.memo → prevent child re-render when props haven't meaningfully changed. useMemo → cache an expensive calculated value. useCallback → preserve function reference when reference stability matters. Use them based on profiling, not by default."
      }
    ]
  },
  {
    "id": "when-can-usememo-or-usecallback-make-performance-worse",
    "question": "When can useMemo or useCallback make performance worse?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "They introduce: Dependency comparison overhead. Memory usage. More complex code. Potentially unnecessary work when computation is already cheap. If the component rarely re-renders or the calculation is trivial, memoization may provide no benefit."
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "how-do-you-optimize-flatlist-for-large-datasets",
    "question": "How do you optimize a large FlatList?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Implement keyExtractor. Use stable keys. Memoize row components. Keep renderItem lightweight. Use getItemLayout for fixed-height rows. Tune initialNumToRender, windowSize, maxToRenderPerBatch. Avoid unnecessary parent re-renders. Optimize images. Paginate data instead of loading everything."
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "how-do-flatlist-sectionlist-scrollview-and-virtualizedlist-differ",
    "question": "How do FlatList, SectionList, ScrollView, and VirtualizedList differ?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Component Use ScrollView Small content; renders everything FlatList Large flat lists; virtualized SectionList Large grouped/sectioned lists VirtualizedList Lower-level/custom virtualization"
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "how-do-you-handle-10-000-records",
    "question": "How do you handle 10,000+ records?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Don't render/load all records at once. Use: Server-side pagination/infinite scrolling. FlatList virtualization. Database/local storage pagination if offline. Memoized rows. Efficient selectors. Search/filter on the backend where appropriate."
      }
    ]
  },
  {
    "id": "how-do-you-optimize-images",
    "question": "How do you optimize images?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use appropriately sized/compressed images. Prefer thumbnails for lists. Lazy-load images. Cache frequently used images. Avoid unnecessarily large resolution. Use modern formats where supported. Prevent repeated image downloads."
      }
    ]
  },
  {
    "id": "how-do-you-diagnose-excessive-memory-consumption",
    "question": "How do you diagnose excessive memory consumption?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Reproduce the scenario repeatedly. Monitor memory over time. Capture heap/native memory snapshots. Look for objects continuously increasing. Check images, large arrays, caches and native resources. Compare memory before/after navigation cycles."
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "what-causes-memory-leaks",
    "question": "What causes memory leaks?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Common causes: Unremoved event listeners. Timers/intervals. Subscriptions. WebSockets. Long-lived references/closures. Large caches. Native resources not released. Incorrect lifecycle handling."
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "how-do-you-identify-and-fix-event-listener-memory-leaks",
    "question": "How do you identify and fix event-listener memory leaks?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Check whether listeners increase after every mount. useEffect(() => { const subscription = emitter.addListener('event', handler);"
      },
      {
        "type": "code",
        "language": "JavaScript",
        "content": "return () => {\n    subscription.remove();\n  };\n}, []);\nEnsure every subscription has a corresponding cleanup."
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "how-do-you-reduce-app-startup-time",
    "question": "How do you optimize startup time?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Measure startup first. Reduce synchronous initialization. Lazy-load non-critical features. Defer analytics/non-essential work. Reduce bundle size. Optimize native initialization. Avoid expensive startup API calls. Use Hermes. Test release builds on low-end devices."
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "what-techniques-reduce-the-javascript-bundle-size",
    "question": "What techniques reduce JavaScript bundle size?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Remove unused dependencies. Prefer smaller libraries. Enable tree shaking where applicable. Split/lazy-load features where supported. Avoid importing entire utility libraries. Compress production assets. Analyze the bundle to find large dependencies."
      }
    ]
  },
  {
    "id": "how-does-hermes-affect-react-native-performance",
    "question": "How does Hermes affect React Native performance?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Hermes is a JavaScript engine optimized for React Native. It can improve: Startup time. Memory usage. JavaScript execution efficiency. Production runtime characteristics. The actual benefit depends on the application and device."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      },
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "how-do-you-investigate-frame-drops-during-scrolling",
    "question": "How do you investigate frame drops during scrolling?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Check both JS and UI threads. Profile scrolling. Look for expensive renderItem. Check image decoding/loading. Check excessive JS work. Check layout calculations. Check animations. Check list configuration."
      }
    ]
  },
  {
    "id": "how-do-the-javascript-and-ui-threads-differ",
    "question": "How do the JavaScript and UI threads differ?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "JS thread: executes React/JavaScript logic, state updates and JS event handling. UI/main thread: handles native UI operations, layout and drawing. A bottleneck on either can cause poor user experience."
      },
      {
        "type": "diagram",
        "title": "A frame depends on timely work",
        "nodes": [
          {
            "label": "JavaScript",
            "detail": "App logic, React work, and event handlers"
          },
          {
            "label": "Renderer",
            "detail": "Schedules and commits view updates"
          },
          {
            "label": "UI thread",
            "detail": "Applies native view updates and draws"
          }
        ],
        "note": "Thread responsibilities vary by work and architecture; profile the actual bottleneck."
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "what-happens-when-js-thread-is-blocked-for-500-ms",
    "question": "What happens when JS thread is blocked for 500 ms?",
    "topic": "Architecture",
    "answer": [
      {
        "type": "paragraph",
        "content": "JavaScript work cannot execute during that period. Potential effects: Delayed state updates. Delayed event handling. Unresponsive interactions. JS-driven animations stutter. UI can appear frozen depending on what work depends on JS."
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "how-do-you-handle-cpu-intensive-processing",
    "question": "How do you handle CPU-intensive processing?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Move expensive work away from the main JS execution path. Options: Native Kotlin/Swift modules. JSI/C++ for performance-critical workloads. Worker/background processing where appropriate. Server-side processing. Chunk the work into smaller operations."
      }
    ]
  },
  {
    "id": "how-do-you-optimize-animations",
    "question": "How do you optimize animations?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Prefer UI-thread/native-driven animation systems. Use Reanimated. Avoid heavy JS work during animation. Avoid unnecessary component re-renders. Animate transform/opacity where possible. Avoid expensive layout changes every frame."
      }
    ]
  },
  {
    "id": "why-can-js-driven-animations-cause-problems",
    "question": "Why can JS-driven animations cause problems?",
    "topic": "Animation",
    "answer": [
      {
        "type": "paragraph",
        "content": "Animations requiring JS execution depend on the JS thread. If JS is busy: Heavy JS work ↓ JS thread blocked ↓ Animation updates delayed ↓ Dropped frames"
      }
    ]
  },
  {
    "id": "how-do-reanimated-worklets-improve-animation-performance",
    "question": "How do Reanimated worklets improve animation performance?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Worklets allow animation logic to execute outside the normal JS execution path, typically on the UI thread. Therefore animation can continue smoothly even when the JS thread is busy."
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "how-would-you-investigate-a-performance-issue-that-appears-only-on-low-e",
    "question": "How would you investigate a performance issue that appears only on low-end Android devices?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Compare: CPU usage Memory pressure JS execution time UI thread frame time Image sizes Network latency Device-specific native behavior Then reproduce on a representative low-end device in release mode and optimize the actual bottleneck."
      }
    ],
    "references": [
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "how-do-you-monitor-react-native-performance-in-production",
    "question": "How do you monitor React Native performance in production?",
    "topic": "Performance",
    "answer": [
      {
        "type": "paragraph",
        "content": "Track: Crash-free sessions ANRs App startup time Screen/load time API latency JS errors Memory usage Frame/render performance Network failures Use tools such as Firebase Performance/Crashlytics, Sentry, native profilers and custom performance metrics."
      }
    ],
    "references": [
      {
        "label": "React Native architecture",
        "href": "https://reactnative.dev/architecture/landing-page"
      },
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance"
      }
    ]
  },
  {
    "id": "what-is-ssl-pinning-in-react-native",
    "question": "What is SSL pinning in React Native?",
    "topic": "Security",
    "answer": [
      {
        "type": "callout",
        "tone": "caution",
        "title": "Optional hardening, with an availability cost",
        "content": "Pinning tightens normal TLS trust evaluation; it should not replace certificate-chain or hostname validation. Android Developers caution that pinning can lock out installed apps after server or CA changes. Use it only when the threat model justifies it, and plan key rotation and recovery."
      },
      {
        "type": "paragraph",
        "content": "What is SSL Pinning in react native SSL pinning (also called certificate pinning) is a security technique where your app is configured to trust only a specific certificate or public key when talking to your server, instead of trusting any certificate signed by a trusted Certificate Authority (CA). Why it's needed Normally, a device trusts hundreds of CAs. If an attacker installs a rogue CA on the device (or compromises a CA), they can run a man-in-the-middle (MITM) attack using tools like Charles Proxy, Burp Suite, or mitmproxy, and read or modify your app's HTTPS traffic. Pinning blocks this: even if the certificate is \"valid\" by the system's standards, the connection fails if it doesn't match what your app expects. What can be pinned Certificate: the full server certificate. Strongest, but you must update the app whenever the cert is renewed. Public key (SPKI hash): the key inside the certificate. More flexible, since the key can stay the same across renewals. This is the commonly recommended approach. Intermediate/root CA: less strict, easier to maintain. How to implement it in React Native React Native's built-in fetch and XMLHttpRequest don't support pinning, so you need a library or native configuration. 1. react-native-ssl-pinning Replaces fetch with a pinned version. import { fetch } from 'react-native-ssl-pinning';"
      },
      {
        "type": "paragraph",
        "content": "fetch('https://api.example.com/data', { method: 'GET', timeoutInterval: 10000, sslPinning: { certs: ['my_cert'], // cert file(s) bundled in the app (e.g., my_cert.cer) }, headers: { Accept: 'application/json' }, }) .then(res => res.json()) .then(data => console.log(data)) .catch(err => console.log('Pinning failed:', err));"
      },
      {
        "type": "paragraph",
        "content": "You place the .cer file in android/app/src/main/assets/ and add it to the Xcode project for iOS. 2. react-native-ssl-public-key-pinning Pins by public key hash, so it's more maintainable. import { initializeSslPinning, } from 'react-native-ssl-public-key-pinning';"
      },
      {
        "type": "code",
        "language": "JavaScript",
        "content": "await initializeSslPinning({\n  'api.example.com': {\n    includeSubdomains: true,\n    publicKeyHashes: [\n      'sha256/primaryKeyHash=',\n      'sha256/backupKeyHash=', // always include a backup\n    ],\n  },\n});"
      },
      {
        "type": "paragraph",
        "content": "After initialization, normal fetch/axios calls to that domain are pinned. 3. Native configuration Android: Use network_security_config.xml with <pin-set>, or OkHttp's CertificatePinner. iOS: Use TrustKit or NSAppTransportSecurity / NSPinnedDomains in Info.plist (iOS 14+). Getting a public key hash openssl s_client -servername api.example.com -connect api.example.com:443 </dev/null 2>/dev/null \\ | openssl x509 -pubkey -noout \\ | openssl pkey -pubin -outform der \\ | openssl dgst -sha256 -binary | openssl enc -base64"
      },
      {
        "type": "paragraph",
        "content": "Drawbacks and best practices Certificate expiry can break your app. If the pinned cert changes and users haven't updated the app, requests fail. Always include backup pins. Plan for rotation. Pin the public key, and keep a backup key ready. Don't rely on it alone. Determined attackers can bypass pinning on rooted/jailbroken devices using tools like Frida or objection. Combine it with root detection, obfuscation, and server-side validation. Test with a proxy (Charles/mitmproxy) to confirm requests actually fail when intercepted. Consider remote-configurable pins or a kill switch for emergencies. Summary SSL pinning in React Native makes your app accept only your server's known certificate or public key, protecting against MITM attacks. Since React Native doesn't support it out of the box, you use a library like react-native-ssl-public-key-pinning or configure it natively on Android and iOS, and always plan for certificate rotation. If you tell me whether you're using Expo or bare React Native, and which HTTP client (fetch or axios), I can give you a more specific setup."
      },
      {
        "type": "diagram",
        "title": "Where pinning fits in HTTPS",
        "nodes": [
          {
            "label": "React Native request",
            "detail": "Use the app networking path"
          },
          {
            "label": "Platform TLS checks",
            "detail": "Validate trust chain, hostname, and certificate dates"
          },
          {
            "label": "Optional pin check",
            "detail": "Match a controlled public key or certificate"
          },
          {
            "label": "API server",
            "detail": "Proceed only when every check passes"
          }
        ],
        "note": "Keep a backup pin and verify that the implementation covers the networking clients and WebView paths your app uses."
      }
    ],
    "references": [
      {
        "label": "Android network security configuration",
        "href": "https://developer.android.com/privacy-and-security/security-config"
      },
      {
        "label": "Apple server trust authentication",
        "href": "https://developer.apple.com/documentation/Foundation/performing-manual-server-trust-authentication"
      },
      {
        "label": "OWASP certificate pinning guidance",
        "href": "https://mas.owasp.org/MASTG-KNOW-0015/"
      }
    ]
  },
  {
    "id": "how-do-you-store-sensitive-data-securely",
    "question": "How would you securely store authentication tokens?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use platform secure storage: Android: Keystore-backed encrypted storage. iOS: Keychain. React Native can access these through a well-maintained secure-storage library/native module. Avoid storing long-lived secrets in plain storage."
      }
    ]
  },
  {
    "id": "why-we-should-not-store-in-async-storage",
    "question": "Why not store sensitive information in AsyncStorage?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "AsyncStorage is intended for persistent non-sensitive data. It should not be treated as a secure vault. Use it for preferences/cache, not: Access tokens Refresh tokens Passwords Encryption keys Financial information"
      }
    ]
  },
  {
    "id": "how-implement-secure-token-storage-on-android-ios",
    "question": "How do you implement secure token storage on Android and iOS?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "React Native ↓ Secure Storage abstraction ↙           ↘ Android      iOS Keystore     Keychain Keep the storage implementation behind a common TypeScript interface."
      }
    ]
  },
  {
    "id": "how-protect-an-application-against-reverse-engineering",
    "question": "How do you protect a React Native app against reverse engineering?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "You cannot completely prevent reverse engineering. Use defense in depth: Minification/obfuscation. Remove debug information. Don't embed secrets. Runtime integrity checks. Root/jailbreak detection where justified. Secure API authentication/authorization. Code signing. Play Integrity/App Attest where applicable."
      }
    ]
  },
  {
    "id": "what-sensitive-information-should-never-be-hardcoded",
    "question": "What sensitive information should never be hardcoded?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Never hardcode: Private API secrets. Database credentials. Private encryption keys. Signing credentials. Passwords. Long-lived authentication tokens. Cloud service private keys."
      }
    ]
  },
  {
    "id": "how-do-you-secure-api-keys-in-react-native",
    "question": "Can API keys be securely hidden inside an APK/IPA?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "No. Anything shipped to the client can potentially be extracted. Public client identifiers can be embedded when designed for that purpose, but real secrets must remain server-side."
      }
    ]
  },
  {
    "id": "how-protect-api-communication-from-mitm-attacks",
    "question": "How do you protect API communication from MITM attacks?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "HTTPS/TLS. Proper certificate validation. Modern TLS configuration. Certificate/public-key pinning where justified. Don't disable hostname/certificate verification. Strong server-side authentication."
      }
    ]
  },
  {
    "id": "how-implement-certificate-pinning",
    "question": "How do you implement certificate pinning?",
    "topic": "Security",
    "answer": [
      {
        "type": "callout",
        "tone": "caution",
        "title": "Keep the pin check in the networking path",
        "content": "React Native fetch and XMLHttpRequest do not expose a JavaScript pin policy. Use native network configuration or a maintained library that enforces pins in the native HTTP stack, and confirm every relevant client and WebView path is covered. Keep standard TLS validation enabled and test certificate rotation before release."
      },
      {
        "type": "callout",
        "tone": "caution",
        "title": "Check the platform guidance first",
        "content": "Android documentation warns that pinning can lock out installed apps after server or CA changes. If your threat model still calls for pinning, keep backup keys and a managed rotation plan. On iOS, preserve App Transport Security and tighten server trust evaluation rather than weakening it."
      },
      {
        "type": "paragraph",
        "content": "Implement pinning at the native networking layer or through a trusted library that supports Android/iOS pinning. RN API Client ↓ Native HTTP stack ↓ TLS validation + pinned certificate/public key ↓ Server Validate the expected certificate/public key before trusting the connection."
      }
    ],
    "references": [
      {
        "label": "Android network security configuration",
        "href": "https://developer.android.com/privacy-and-security/security-config"
      },
      {
        "label": "Apple server trust authentication",
        "href": "https://developer.apple.com/documentation/Foundation/performing-manual-server-trust-authentication"
      },
      {
        "label": "OWASP certificate pinning guidance",
        "href": "https://mas.owasp.org/MASTG-KNOW-0015/"
      }
    ]
  },
  {
    "id": "what-are-the-limitations-of-certificate-pinning",
    "question": "What are the limitations of certificate pinning?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Certificate rotation can break the app. Requires careful backup pins. Operational complexity. Complicates debugging. Pinning does not protect a compromised/rooted device completely."
      },
      {
        "type": "callout",
        "tone": "caution",
        "title": "Android operational caveat",
        "content": "Android Developers do not recommend pinning for most apps because server or certificate-authority changes can break connectivity until users install an app update. If pinning is required, use backup keys, an expiration/rotation strategy, and a tested recovery path."
      }
    ],
    "references": [
      {
        "label": "Android network security configuration",
        "href": "https://developer.android.com/privacy-and-security/security-config"
      },
      {
        "label": "Apple server trust authentication",
        "href": "https://developer.apple.com/documentation/Foundation/performing-manual-server-trust-authentication"
      },
      {
        "label": "OWASP certificate pinning guidance",
        "href": "https://mas.owasp.org/MASTG-KNOW-0015/"
      }
    ]
  },
  {
    "id": "how-do-you-handle-token-refresh",
    "question": "How do you secure refresh tokens?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Store them in Keychain/Keystore-backed storage. Use short-lived access tokens. Rotate refresh tokens. Detect token reuse server-side. Revoke tokens on logout/security events. Never log them."
      }
    ]
  },
  {
    "id": "how-design-authentication-and-authorization",
    "question": "How do you design authentication and authorization?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Login ↓ Access + Refresh Token ↓ Secure Storage ↓ API requests ↓ Server validates token ↓ Authorization based on user roles/permissions Authentication answers “Who are you?” Authorization answers “What are you allowed to do?” Authorization must ultimately be enforced server-side."
      },
      {
        "type": "diagram",
        "title": "Session and API authorization",
        "nodes": [
          {
            "label": "Sign in",
            "detail": "Server issues short-lived access and refresh credentials"
          },
          {
            "label": "Secure persistence",
            "detail": "Keep refresh credential in Keychain or Keystore"
          },
          {
            "label": "API request",
            "detail": "Attach access credential over TLS"
          },
          {
            "label": "Server",
            "detail": "Authorize the requested resource"
          }
        ],
        "note": "Client-side UI checks improve flow but never replace server authorization."
      }
    ]
  },
  {
    "id": "how-handle-token-expiration-during-multiple-api-requests",
    "question": "How do you handle token expiration during multiple API requests?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use a centralized API interceptor: Request → 401 ↓ Refresh token ↓ Retry failed requests Queue requests while refresh is happening instead of independently refreshing for every request."
      },
      {
        "type": "diagram",
        "title": "Single-flight token refresh",
        "nodes": [
          {
            "label": "Several requests get 401",
            "detail": "Pause and share one refresh operation"
          },
          {
            "label": "Refresh once",
            "detail": "Rotate credentials with the server"
          },
          {
            "label": "Retry requests",
            "detail": "Resume with the new access token"
          },
          {
            "label": "Refresh fails",
            "detail": "Clear session and request sign-in"
          }
        ]
      }
    ]
  },
  {
    "id": "how-prevent-simultaneous-refresh-requests",
    "question": "How do you prevent simultaneous token refresh requests?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use a single-flight refresh mechanism: Request A ─┐ Request B ─┼→ Refresh Lock → One refresh request Request C ─┘                     ↓ Retry queued requests Only the first request performs the refresh; others wait for its result."
      },
      {
        "type": "diagram",
        "title": "Single-flight token refresh",
        "nodes": [
          {
            "label": "Several requests get 401",
            "detail": "Pause and share one refresh operation"
          },
          {
            "label": "Refresh once",
            "detail": "Rotate credentials with the server"
          },
          {
            "label": "Retry requests",
            "detail": "Resume with the new access token"
          },
          {
            "label": "Refresh fails",
            "detail": "Clear session and request sign-in"
          }
        ]
      }
    ]
  },
  {
    "id": "how-protect-locally-stored-offline-data",
    "question": "How do you protect locally stored offline data?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Encrypt sensitive data at rest. Store encryption keys in Keystore/Keychain. Minimize stored data. Apply data expiration/cleanup. Use database-level encryption where appropriate. Never log sensitive offline data."
      }
    ]
  },
  {
    "id": "how-detect-rooted-jailbroken-devices",
    "question": "How do you detect rooted or jailbroken devices?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use platform-specific integrity/root detection mechanisms and security libraries. Look for signals such as: Suspicious filesystem access. Modified system binaries. Debugging/instrumentation indicators. Platform integrity failures. Treat detection as a risk signal, not proof."
      }
    ]
  },
  {
    "id": "should-the-app-completely-trust-root-jailbreak-detection",
    "question": "Should the app completely trust root/jailbreak detection?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "No. Detection can be bypassed. Use it as one signal in a broader defense strategy, especially for high-risk operations."
      }
    ]
  },
  {
    "id": "how-protect-a-payment-related-application",
    "question": "How do you protect a payment-related application?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use: TLS and appropriate pinning. Secure token storage. Strong server-side authorization. Token rotation. Device/app integrity checks. Minimal local sensitive data. No payment secrets in the app. Secure WebViews/payment SDKs. Transaction verification on the backend. Audit/security monitoring. Never trust the mobile client to authorize a payment."
      }
    ]
  },
  {
    "id": "how-prevent-sensitive-information-in-logs",
    "question": "How do you prevent sensitive information from appearing in logs?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Never log tokens/passwords/payment data. Create a centralized logging wrapper. Redact sensitive fields automatically. Disable verbose logs in production. Review third-party SDK logging. Ensure crash-reporting tools don't capture secrets."
      }
    ]
  },
  {
    "id": "how-implement-biometric-authentication",
    "question": "How do you implement biometric authentication?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use platform biometric APIs through a trusted RN/native module. RN ↓ Biometric API ↓ Android BiometricPrompt / iOS LocalAuthentication ↓ Success/Failure Prefer biometrics to unlock a locally stored credential rather than treating biometric data itself as application data."
      }
    ]
  },
  {
    "id": "how-protect-screenshots-on-sensitive-android-screens",
    "question": "How do you protect screenshots on sensitive Android screens?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use Android's FLAG_SECURE on sensitive activities/windows. This can prevent screenshots and screen recording in supported Android scenarios. iOS requires different platform-specific handling and has different limitations."
      }
    ]
  },
  {
    "id": "how-prevent-sensitive-information-through-deep-links",
    "question": "How do you prevent sensitive information from leaking through deep links?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Never put secrets in URLs. Avoid: myapp://reset?token=SECRET Prefer a short-lived identifier/code and exchange it securely with the backend."
      }
    ]
  },
  {
    "id": "how-securely-handle-deep-links",
    "question": "How do you handle deep links securely?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Validate: Scheme/domain. Path. Parameters. Authentication state. Authorization. For sensitive links, prefer Universal Links/App Links + HTTPS and validate everything server-side."
      }
    ]
  },
  {
    "id": "how-secure-webview-communication",
    "question": "How do you secure WebView communication?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Load only trusted origins. Validate URLs/navigation. Minimize JavaScript injection. Restrict postMessage communication. Validate message origin/content. Don't expose unnecessary native methods. Never pass secrets unnecessarily."
      }
    ]
  },
  {
    "id": "how-identify-vulnerabilities-in-third-party-dependencies",
    "question": "How do you identify vulnerabilities in third-party dependencies?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Use: npm audit GitHub Dependabot/security alerts SCA/dependency scanners Lockfiles Package changelogs/security advisories Regular dependency updates Also review native Android/iOS dependencies, not just npm packages."
      }
    ]
  },
  {
    "id": "what-would-you-do-if-a-vulnerability-were-discovered-in-production",
    "question": "What would you do if a vulnerability were discovered in production?",
    "topic": "Security",
    "answer": [
      {
        "type": "paragraph",
        "content": "Assess severity and exploitability. Identify affected versions. Check whether the vulnerability is actually reachable in the app. Upgrade/patch immediately if possible. Replace or temporarily isolate the dependency if necessary. Release through an expedited/staged deployment. Revoke/rotate exposed credentials if applicable. Monitor for exploitation. Document the incident and remediation."
      }
    ]
  }
];
