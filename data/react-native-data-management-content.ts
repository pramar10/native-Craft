import type { InterviewAnswerBlock, InterviewQuestion, InterviewListItem } from "./interview-types";

const paragraph = (content: string): InterviewAnswerBlock => ({ type: "paragraph", content });
const code = (language: string, content: string): InterviewAnswerBlock => ({ type: "code", language, content });
const diagram = (
  title: string,
  nodes: { label: string; detail?: string }[],
  note?: string,
): InterviewAnswerBlock => ({ type: "diagram", title, nodes, ...(note ? { note } : {}) });
const list = (items: InterviewListItem[], ordered = false): InterviewAnswerBlock => ({
  type: ordered ? "ordered-list" : "unordered-list",
  items,
});
const points = (items: string[]): InterviewAnswerBlock =>
  list(items.map((content) => ({ heading: "", content })));
const namedPoints = (items: [string, string][]): InterviewAnswerBlock =>
  list(items.map(([itemHeading, content]) => ({ heading: itemHeading, content })));

export const dataManagementQuestions: InterviewQuestion[] = [
  {
    id: "how-do-you-handle-offline-first-apps",
    question: "How do you handle offline-first apps?",
    topic: "State & data",
    answer: [
      paragraph("Treat the local database as the source the UI reads from. Network requests synchronize that local model with the server in the background. An offline-capable app has fallback behavior when the network is unavailable; an offline-first app is designed so core reads and writes work locally first."),
      diagram("Offline-first data flow", [
        { label: "UI", detail: "Reads local state and shows sync status" },
        { label: "Local repository", detail: "Owns reads and writes for the feature" },
        { label: "Database + outbox", detail: "Persists records and pending operations" },
        { label: "Sync engine", detail: "Pushes local changes and pulls server updates" },
        { label: "Backend API", detail: "Validates, authorizes, and stores changes" },
      ], "Persist an operation before attempting network delivery so app restarts do not lose it."),
      namedPoints([
        ["Read locally first", "Render cached data immediately and refresh it in the background."],
        ["Write locally first", "Validate input, save the change, mark it pending, and show that sync is still needed."],
        ["Synchronize deliberately", "Use a durable queue, track per-operation status, and resolve conflicts with domain rules."],
        ["Choose data intentionally", "Cache data needed for real offline workflows; do not mirror the entire backend by default."],
      ]),
    ],
    references: [
      { label: "React Native networking guide", href: "https://reactnative.dev/docs/network" },
    ],
  },
  {
    id: "how-do-you-choose-a-local-database-for-react-native-offline-data",
    question: "How do you choose a local database for offline React Native data?",
    topic: "State & data",
    answer: [
      paragraph("Choose storage from the data model and access patterns. For structured, relational, frequently updated, or large datasets, compare database options such as SQLite-based storage and Realm against the app's requirements. A key-value store is better suited to small preferences or simple caches than complex relational queries."),
      namedPoints([
        ["Query patterns", "List the filters, sorts, joins, and pagination the app needs, then compare query performance."],
        ["Consistency", "Check transaction support and how multi-record changes remain atomic."],
        ["Security", "Review encryption at rest, key handling, backups, and data deletion behavior."],
        ["Offline sync", "Check how the chosen storage fits the app's conflict and synchronization model."],
        ["Operations", "Consider React Native integration, maintenance, migration tooling, and the team's experience."],
      ]),
      paragraph("Keep the database behind a repository interface so screens and features do not depend on a specific storage library."),
    ],
  },
  {
    id: "how-do-you-design-offline-sync-and-conflict-resolution",
    question: "How do you design offline synchronization and conflict resolution?",
    topic: "State & data",
    answer: [
      diagram("A synchronization cycle", [
        { label: "Local edits", detail: "Save record IDs, versions, and pending status" },
        { label: "Push", detail: "Send queued operations with stable operation IDs" },
        { label: "Pull", detail: "Fetch server changes since the last sync cursor" },
        { label: "Resolve", detail: "Apply explicit conflict rules" },
        { label: "Update local DB", detail: "Commit server state and sync status" },
      ]),
      namedPoints([
        ["Last-write-wins", "Simple, but timestamps can overwrite a meaningful concurrent change."],
        ["Server-wins or client-wins", "Useful only when one side has a clearly defined priority."],
        ["Field-level merge", "Combine independent changes when the domain permits it."],
        ["Domain-specific resolution", "Best for important records where business rules determine how competing edits should be reconciled."],
      ]),
      paragraph("Use versions, updated timestamps, or ETags to detect stale writes. Do not rely only on device clocks for ordering changes."),
    ],
  },
  {
    id: "how-do-you-build-a-durable-offline-operation-queue",
    question: "How do you build a durable offline operation queue?",
    topic: "State & data",
    answer: [
      code("TypeScript", "type PendingOperation = {\n  id: string; // stable client operation ID\n  type: string;\n  payload: unknown;\n  status: 'pending' | 'in-progress' | 'failed';\n  retryCount: number;\n  createdAt: number;\n};"),
      namedPoints([
        ["Persist before sending", "Write the operation and its ID to the local database before attempting delivery."],
        ["Make retries safe", "Send an idempotency key and have the server return the same result for a repeated operation ID."],
        ["Retry selectively", "Use exponential backoff with jitter and a maximum retry count; retry transient failures, respect Retry-After, and do not retry permanent client errors blindly."],
        ["Recover after restart", "On startup, inspect pending and in-progress records and reconcile them with server state or idempotency results."],
        ["Track each operation", "A failed operation should not erase successful neighboring operations; retry only the failed work."],
      ]),
      diagram("Safe retry path", [
        { label: "Save operation ID", detail: "Persist the outbox entry" },
        { label: "Send request", detail: "Include the same idempotency key" },
        { label: "Server deduplicates", detail: "Return the stored result on a repeat" },
        { label: "Mark complete", detail: "Remove or archive the operation" },
      ]),
    ],
  },
  {
    id: "how-do-you-present-cached-data-and-detect-connectivity-offline",
    question: "How do you present cached data and detect connectivity in an offline-first app?",
    topic: "State & data",
    answer: [
      diagram("Stale-while-revalidate", [
        { label: "Read local cache", detail: "Render immediately" },
        { label: "Refresh from API", detail: "Run without blocking the current screen" },
        { label: "Update local DB", detail: "Notify subscribers of fresh data" },
      ], "Show a small refresh or stale-data indicator instead of blanking the screen while refreshing."),
      paragraph("Use a connectivity monitor for connection type and reachability changes, but do not treat a connected network interface as proof that the backend can be reached. DNS, captive portals, TLS errors, or server outages can still prevent a request. For critical actions, confirm reachability through the API request itself."),
      paragraph("Represent sync status explicitly, for example: synced, pending, syncing, or failed. Let the user understand whether a local edit has reached the server."),
    ],
  },
  {
    id: "how-do-you-handle-offline-forms-and-protect-cached-data",
    question: "How do you handle offline forms and protect cached user data?",
    topic: "State & data",
    answer: [
      diagram("Save an offline form", [
        { label: "Submit", detail: "Validate fields locally" },
        { label: "Persist", detail: "Save the draft or operation locally" },
        { label: "Mark pending", detail: "Show that synchronization is needed" },
        { label: "Sync later", detail: "Send when the service is reachable" },
      ]),
      namedPoints([
        ["Minimize", "Store only fields and records needed for the offline workflow."],
        ["Protect", "Encrypt sensitive data at rest when appropriate and keep encryption keys in platform-backed secure storage."],
        ["Separate credentials", "Keep refresh credentials in Keychain/Keystore-backed storage; do not treat an offline cache as authorization."],
        ["Clear and expire", "Apply retention rules and remove account data on logout or account removal."],
      ]),
      paragraph("A cached record must never grant permission by itself. The server remains responsible for authorization when data is synchronized or an action is performed."),
    ],
  },
  {
    id: "redux-vs-redux-toolkit-vs-zustand-when-do-you-choose-what",
    question: "How would you decide between Context API, Redux Toolkit, Zustand, MobX, and local component state?",
    topic: "State & data",
    answer: [
      namedPoints([
        ["Local component state", "Keep component-specific, temporary UI state close to the component."],
        ["Context API", "Use for low-frequency shared values such as theme or app configuration. Broad context updates can re-render many consumers, so split contexts by purpose and update pattern."],
        ["Redux Toolkit", "Choose for larger applications that benefit from predictable state transitions, middleware, debugging tools, and consistent team patterns."],
        ["Zustand", "Choose for lightweight shared client state when a small API and low ceremony fit the app."],
        ["MobX", "Choose when an observable, reactive state model fits the team's conventions and the team is comfortable debugging it."],
      ]),
      paragraph("Compare state complexity, update frequency, team conventions, and debugging needs. Popularity alone is not a useful selection rule. Keep server data caching separate from client interaction state when that simplifies ownership."),
    ],
  },
  {
    id: "how-do-you-handle-global-vs-local-state",
    question: "What state should remain local and what should be global?",
    topic: "State & data",
    answer: [
      namedPoints([
        ["Local", "Form input, modal visibility, selected tab, temporary UI state, and component-specific loading state."],
        ["Global", "Authentication/session, user preferences, app-wide configuration, and shared client state used across multiple screens."],
      ]),
      paragraph("If only one component needs the state, keep it local. Lift it or place it in a shared store when multiple parts of the app must coordinate around it."),
    ],
  },
  {
    id: "how-design-redux-state-large-scale",
    question: "How would you design Redux state for a large-scale application?",
    topic: "State & data",
    answer: [
      paragraph("Organize the store by business domain and feature. Keep the state minimal, normalize relational entities when useful, and keep UI-only state separate from domain data."),
      code("text", "store/\n├── auth/\n├── users/\n├── orders/\n├── payments/\n└── settings/"),
      namedPoints([
        ["Selectors", "Keep selectors separate from reducers and memoize expensive derived data."],
        ["Async behavior", "Put request workflows in the appropriate thunk or middleware layer."],
        ["Normalized entities", "Store related records by ID where it makes updates and subscriptions more focused."],
        ["Server state", "Use an API cache or server-state layer for remote data that needs staleness, refetch, or invalidation behavior."],
      ]),
    ],
  },
  {
    id: "how-do-you-avoid-unnecessary-re-renders-with-redux",
    question: "How do you prevent unnecessary re-renders from global state?",
    topic: "Performance",
    answer: [
      points([
        "Use granular selectors and subscribe only to the values a component needs.",
        "Memoize derived values when profiling shows the computation or unstable result is costly.",
        "Normalize entities so changing one record does not replace a large nested tree.",
        "Avoid returning new objects or arrays from selectors on every read.",
        "Use React.memo for expensive children with stable props, and split components by update responsibility.",
        "Keep ephemeral input, modal, and tab state local instead of dispatching every small interaction globally.",
      ]),
      paragraph("Measure renders before adding memoization. Memoization also has comparison and maintenance costs, so it should solve an observed problem."),
    ],
  },
  {
    id: "how-would-you-structure-state-for-a-large-rn-app",
    question: "How do you structure Redux slices in a large React Native application?",
    topic: "State & data",
    answer: [
      paragraph("Group slices by business domain, not by screen. Each feature should own its state, actions, selectors, and async workflows, and expose a small public API to other features."),
      code("text", "features/\n├── auth/\n│   ├── authSlice.ts\n│   ├── selectors.ts\n│   └── thunks.ts\n├── orders/\n│   ├── ordersSlice.ts\n│   └── selectors.ts\n└── payments/"),
      paragraph("Avoid importing another feature's private reducer internals. Coordinate through exported selectors, actions, or service contracts."),
    ],
  },
  {
    id: "how-do-you-handle-server-state-differently-from-client-state",
    question: "How do you handle server state differently from client state?",
    topic: "State & data",
    answer: [
      namedPoints([
        ["Server state", "Data owned by an API. It can become stale, needs caching/refetching, may be shared across screens, and needs invalidation after mutations. A server-state tool such as TanStack Query can own those cache rules."],
        ["Client state", "Local interactions, temporary UI, preferences, and client-owned session/configuration state. Manage it with local state, Context, Redux Toolkit, Zustand, or another store chosen for its scope."],
      ]),
      paragraph("Keep one clear owner for each piece of data. Avoid copying every API response into a global client store if the query cache already owns its freshness and lifecycle."),
    ],
    references: [
      { label: "TanStack Query documentation", href: "https://tanstack.com/query/latest/docs/framework/react/overview" },
    ],
  },
  {
    id: "what-problems-occur-when-api-data-and-ui-state-are-stored-together",
    question: "What problems occur when API data and UI state are stored together?",
    topic: "State & data",
    answer: [
      points([
        "API data can become stale or duplicated across different store slices.",
        "Cache invalidation and refresh rules become difficult to reason about.",
        "Reducers accumulate loading, error, and synchronization details unrelated to client UI state.",
        "Broad updates can cause extra re-renders.",
        "It becomes harder to reconcile local interaction state with backend-owned data.",
      ]),
      paragraph("Give remote data a clear cache owner and keep temporary view state close to the UI that owns it."),
    ],
  },
  {
    id: "how-do-you-handle-cache-invalidation",
    question: "How do you handle cache invalidation?",
    topic: "State & data",
    answer: [
      paragraph("Define cache ownership and invalidation rules around queries and mutations. For example, after creating an order, invalidate the affected orders query so the cache refreshes the relevant data."),
      diagram("Targeted invalidation", [
        { label: "Create order", detail: "Mutation succeeds" },
        { label: "Invalidate orders", detail: "Mark related query stale" },
        { label: "Refetch", detail: "Load the current server result" },
      ]),
      points([
        "Use stable query keys or tags to identify data ownership.",
        "Set freshness times that reflect how quickly the data changes.",
        "Invalidate targeted queries after related mutations.",
        "Avoid clearing the entire cache for every update.",
      ]),
    ],
  },
  {
    id: "how-do-you-handle-optimistic-updates",
    question: "How do you handle optimistic updates?",
    topic: "State & data",
    answer: [
      paragraph("An optimistic update changes the visible client/cache state before the server confirms the mutation. Capture enough previous state to restore it if the request fails."),
      diagram("Optimistic update lifecycle", [
        { label: "User action", detail: "Save the previous state" },
        { label: "Update cache", detail: "Show the expected result immediately" },
        { label: "Send request", detail: "Ask the server to commit the change" },
        { label: "Success / failure", detail: "Keep the update or restore prior state" },
      ]),
    ],
  },
  {
    id: "what-happens-if-an-optimistic-update-fails",
    question: "What happens if an optimistic update fails?",
    topic: "State & data",
    answer: [
      points([
        "Roll back to the captured previous state or refetch the canonical server result.",
        "Show a clear message that the change was not saved.",
        "Offer retry when the failure is transient and retry is safe.",
        "Log the operation outcome without recording sensitive values.",
      ]),
      paragraph("The user should not be left with a success-looking screen after the server rejected the change."),
    ],
  },
  {
    id: "how-do-you-prevent-race-conditions-between-api-requests",
    question: "How do you prevent race conditions between API requests that update the same state?",
    topic: "State & data",
    answer: [
      diagram("Latest valid response wins", [
        { label: "Request A", detail: "Version 1" },
        { label: "Request B", detail: "Version 2, sent later" },
        { label: "Responses arrive", detail: "May arrive out of order" },
        { label: "Apply safely", detail: "Ignore stale response A when B supersedes it" },
      ]),
      points([
        "Attach a request ID or version and accept only the latest valid response for replaceable reads.",
        "Cancel obsolete reads when the networking/query layer supports cancellation.",
        "Use query libraries that manage request identity and deduplicate equivalent requests.",
        "Serialize mutations or use server versions/ETags when write ordering matters; latest-response-wins alone is not safe for every mutation.",
      ]),
    ],
  },
  {
    id: "how-do-you-restore-authentication-state-after-app-restart",
    question: "How do you manage authentication state across application restarts?",
    topic: "Security",
    answer: [
      diagram("Restore a session safely", [
        { label: "App starts", detail: "Read refresh credential from secure storage" },
        { label: "Refresh session", detail: "Exchange it with the backend" },
        { label: "Validate user", detail: "Fetch current account and permissions" },
        { label: "Continue or sign in", detail: "Restore session or clear invalid credentials" },
      ]),
      points([
        "Keep access tokens short-lived and store refresh credentials in Keychain/Keystore-backed storage.",
        "Restore the session with the server instead of trusting a locally persisted isLoggedIn flag.",
        "Fetch or validate the current user and authorization after refresh.",
        "Clear credentials and in-memory session data on logout or invalid refresh.",
      ]),
    ],
  },
  {
    id: "how-do-you-persist-state-securely-on-mobile",
    question: "How do you persist Redux state safely?",
    topic: "Security",
    answer: [
      paragraph("Persist only the non-sensitive slices needed after restart, and whitelist them explicitly. Treat persisted Redux state as ordinary app storage unless the configured adapter provides suitable encryption."),
      diagram("Separate session credentials from app state", [
        { label: "Refresh credential", detail: "Keychain / Android Keystore" },
        { label: "Preferences", detail: "Persist only required, non-sensitive slices" },
        { label: "App restart", detail: "Restore and validate session with backend" },
      ]),
      points([
        "Do not place passwords or raw long-lived secrets in a persisted Redux store.",
        "Use platform-backed secure storage for authentication credentials.",
        "Whitelist only needed slices and define expiry/logout cleanup behavior.",
        "Keep migrations versioned when persisted schema changes.",
      ]),
    ],
  },
  {
    id: "how-do-you-migrate-persisted-redux-state",
    question: "How do you handle state migration when persisted Redux structure changes?",
    topic: "State & data",
    answer: [
      paragraph("Version the persisted schema. When the app loads an older version, run a migration that maps it to the new shape before reducers and screens consume it."),
      code("TypeScript", "type PersistedStateV2 = {\n  version: 2;\n  preferences: { theme: 'light' | 'dark' };\n};\n\nfunction migrateV1ToV2(old: { theme?: string }): PersistedStateV2 {\n  return {\n    version: 2,\n    preferences: {\n      theme: old.theme === 'dark' ? 'dark' : 'light',\n    },\n  };\n}"),
      paragraph("Test migrations against representative old snapshots. If data is corrupt or cannot be migrated safely, fall back to a known initial state and preserve a recoverable error report without leaking user data."),
    ],
  },
  {
    id: "how-do-you-debug-a-production-only-state-management-issue",
    question: "How do you debug a state-management issue that only occurs in production?",
    topic: "Testing & debugging",
    answer: [
      list([
        { heading: "Capture context", content: "Add structured action/request diagnostics while redacting tokens, passwords, and personal data." },
        { heading: "Reconstruct sequence", content: "Record the order of relevant actions, requests, responses, and persistence events." },
        { heading: "Compare versions", content: "Check app version, persisted schema version, and production configuration." },
        { heading: "Check timing", content: "Look for request races, retries, cancellations, and startup hydration order." },
        { heading: "Reproduce", content: "Replay the same state and action sequence in a production-like build." },
        { heading: "Add focused telemetry", content: "If the cause remains unclear, measure the affected transition without logging sensitive payloads." },
      ], true),
    ],
  },
];
