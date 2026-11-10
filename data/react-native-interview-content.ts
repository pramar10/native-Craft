import type { InterviewQuestion } from "./interview-types";

export const importedReactNativeQuestions: InterviewQuestion[] = [
  {
    id: "list-out-some-of-the-drawbacks-of-react-native",
    question: "List out some of the Drawbacks of React Native?",
    answer: [
      {
        type: "paragraph",
        content: "Here are some of the key drawbacks of React Native: ",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Performance Limitations",
            content:
              "While React Native is close to native performance, it's not always suitable for apps with heavy animations, complex gestures, or high-performance graphics (like 3D games).",
          },
          {
            heading: "Native Code Dependency",
            content:
              'For advanced features or deep device integration (e.g., Bluetooth, AR, background services), you often need to write native modules in Swift, Objective-C, or Java/Kotlin. This reduces the "write once, run anywhere" benefit.',
          },
          {
            heading: "Inconsistent UI Across Platforms",
            content:
              "Even though you write one codebase, UI behavior can differ between iOS and Android due to platform-specific design guidelines and rendering differences.",
          },
          {
            heading: "Limited Third-Party Libraries for Native Modules",
            content:
              "Some third-party libraries are outdated, poorly maintained, or lack support for newer OS features. You might need to build and maintain your own native modules.",
          },
          {
            heading: "Larger App Size",
            content:
              "React Native apps can be larger in size compared to fully native apps, due to bundling the JavaScript runtime and additional dependencies.",
          },
          {
            heading: "Debugging Complexity",
            content:
              "Debugging issues in React Native can be challenging, especially when they involve native modules or when errors come from the bridge between JS and native code.",
          },
          {
            heading: "JS-to-Native Bridge Bottleneck",
            content:
              "React Native uses a bridge to communicate between JavaScript and native code. High-frequency interactions (like real-time updates or large data transfers) can cause performance issues due to this asynchronous bridge.",
          },
          {
            heading: "Learning Curve for Native Code",
            content:
              "Even though it's JavaScript-based, React Native developers often need at least a basic understanding of native development to solve deeper problems or integrate advanced features.",
          },
          {
            heading: "Upgrade and Maintenance Overhead",
            content:
              "Upgrading React Native versions can sometimes break existing code or libraries, especially if you\u2019re relying on many third-party packages or custom native modules.",
          },
        ],
      },
    ],
    topic: "App development",
  },
  {
    id: "how-does-the-react-native-bridge-work",
    question: "How does the React Native Bridge work?",
    answer: [
      {
        type: "callout",
        tone: "caution",
        title: "Legacy architecture context",
        content:
          "The asynchronous Bridge described here belongs to React Native\u2019s legacy architecture. The New Architecture removes React Native\u2019s dependency on that Bridge and uses JSI for JavaScript-to-native communication.",
      },
      {
        type: "paragraph",
        content:
          "The React Native bridge is a communication mechanism that allows JavaScript code to interact with native code in a React Native application. Since React Native apps run JavaScript code, but need to interface with the native components and APIs of the platform (iOS or Android), the bridge serves as a connection between these two worlds. In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components Native Components. React Native comes with a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's Core Components.",
      },
      {
        type: "paragraph",
        content:
          "Here\u2019s how it works: 1. JavaScript Side: On the JavaScript side, when you write React Native code, you\u2019re essentially writing JavaScript that describes how your app should look and behave. This code interacts with React Native components and APIs just like you would in a web environment. 2. Native Side: On the native side (iOS or Android), React Native provides a set of native modules and components that correspond to the functionality you use in your JavaScript code. These native modules and components are written in the respective platform\u2019s native languages (Objective-C/Swift for iOS, Java/Kotlin for Android). 3. Bridge: The React Native bridge serves as a communication channel between the JavaScript runtime and the native runtime. When you use a React Native component or call a native module from your JavaScript code, React Native translates these calls into messages that are passed over the bridge to the native side. 4. Execution: On the native side, these messages are received by the bridge and interpreted. If it\u2019s a request to create or update a native UI component, the native code handles the creation or update. If it\u2019s a request to execute a native function, the corresponding native code is invoked. 5. Return Values: Similarly, if the native code needs to communicate back to the JavaScript side (for example, when an event occurs in the native UI), it sends messages back over the bridge to the JavaScript runtime.",
      },
      {
        type: "paragraph",
        content:
          "In summary, the React Native bridge facilitates seamless communication between JavaScript code running in the React Native environment and the native code running on the platform. This enables React Native apps to access and utilize native platform functionality while still benefiting from the productivity and flexibility of JavaScript development.",
      },
      {
        type: "diagram",
        title: "Legacy Bridge and the New Architecture",
        nodes: [
          {
            label: "JavaScript",
            detail: "React app and business logic",
          },
          {
            label: "Legacy Bridge",
            detail: "Async messages and serialization",
          },
          {
            label: "Native platform",
            detail: "Native modules and host views",
          },
        ],
        note: "Modern React Native uses JSI for direct JavaScript/native interop; this is not a claim that every operation should be synchronous.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "About the New Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "what-is-yoga-in-react-native",
    question: "What is Yoga in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "React Native Yoga is a cross-platform layout engine developed by Facebook for React Native applications. It\u2019s responsible for calculating and applying the layout of components within a React Native app. Here\u2019s a brief explanation: 1. Cross-Platform: React Native Yoga is designed to work consistently across different platforms (iOS, Android, and others). This ensures that your app\u2019s layout behaves consistently regardless of the underlying platform. 2.Flexbox-based: React Native Yoga implements the Flexbox layout model, which is a popular layout system used in web development. Flexbox allows you to create complex layouts with ease by providing a set of rules for distributing and aligning elements within a container. 3. Efficient and Performant: React Native Yoga is optimized for performance. It uses a highly efficient algorithm to calculate the layout of components, ensuring smooth rendering and responsiveness even in complex UIs. 4. Responsive Design: With Flexbox, React Native Yoga enables responsive design, allowing components to adapt their layout based on factors such as screen size, orientation, and device type. This makes it easier to create apps that look good on a wide range of devices. 5. Integration with React Native: React Native Yoga seamlessly integrates with the React Native framework, allowing developers to define layout rules using React Native\u2019s declarative syntax. This makes it easy to create and manage layouts within React Native apps using familiar tools and techniques.",
      },
      {
        type: "paragraph",
        content:
          "In summary, React Native Yoga is a powerful layout engine for React Native applications, providing a flexible and efficient way to create responsive and consistent layouts across different platforms. By leveraging the Flexbox layout model, it simplifies the process of designing and implementing complex UIs in React Native apps.",
      },
      {
        type: "diagram",
        title: "From Flexbox rules to native layout",
        nodes: [
          {
            label: "Flexbox styles",
            detail: "Direction, alignment, size, and spacing",
          },
          {
            label: "Yoga",
            detail: "Cross-platform layout calculations",
          },
          {
            label: "Shadow tree",
            detail: "Calculated positions and dimensions",
          },
          {
            label: "Native views",
            detail: "Layout applied on each platform",
          },
        ],
      },
    ],
    topic: "Architecture",
  },
  {
    id: "what-is-the-react-native-threading-model",
    question: "What is the React Native threading model?",
    answer: [
      {
        type: "paragraph",
        content:
          "The React Native Threading Model refers to how React Native manages threads for executing JavaScript code and handling native UI operations. Here\u2019s a brief explanation:",
      },
      {
        type: "paragraph",
        content:
          "1.Main/UI Thread (UI Thread): Responsible for handling the native UI rendering, user interactions, and UI updates. All UI-related operations, such as rendering components, responding to touch events, and updating the layout, occur on this thread. It\u2019s crucial to keep this thread responsive to ensure smooth user experience. Long-running tasks should be avoided on this thread to prevent UI freezes. 2. JavaScript Thread (JS Thread): The JavaScript thread, sometimes referred to as the \u201cJS thread\u201d or \u201cBridge thread\u201d executes your JavaScript code. Responsible for running your React Native application\u2019s JavaScript logic, including handling state changes, executing business logic, and managing application flow. Communicates with the native UI thread via the bridge. Since JavaScript execution can be computationally intensive, performing heavy computations or blocking operations on this thread can degrade performance and lead to UI unresponsiveness. 3. Shadow Thread: React Native introduced a concept called the \u201cShadow Thread\u201d in later versions. This thread is responsible for preparing UI updates based on the changes in the JavaScript state. It works in tandem(Together/In sync) with the JavaScript thread to calculate the layout changes and prepare UI updates to be sent over the bridge. By offloading some work from the main JavaScript thread, the shadow thread helps improve performance and UI responsiveness.",
      },
      {
        type: "paragraph",
        content:
          "In summary, the React Native Threading Model involves coordinating the execution of JavaScript code on a single thread with the native UI operations running on a separate thread. By leveraging(taking advantages) asynchronous operations and the bridge communication mechanism, React Native ensures smooth performance and responsiveness while maintaining a seamless integration between JavaScript and native code.",
      },
      {
        type: "diagram",
        title: "How JavaScript and UI work together",
        nodes: [
          {
            label: "JavaScript thread",
            detail: "React render work, app logic, state, and events",
          },
          {
            label: "Renderer",
            detail: "Schedules and prepares UI changes",
          },
          {
            label: "UI thread",
            detail: "The only thread that manipulates native host views",
          },
        ],
        note: "In the New Architecture, render and layout work can move across JS and UI threads depending on event priority; keep heavy work off the critical path.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "React Native threading model",
        href: "https://reactnative.dev/architecture/threading-model",
      },
    ],
  },
  {
    id: "why-javascript-code-communicates-with-native-components-through-a-bridge",
    question:
      "Why JavaScript code communicates with native components through a bridge, which can become a bottleneck for performance-critical operations?",
    answer: [
      {
        type: "callout",
        tone: "caution",
        title: "Legacy architecture context",
        content:
          "The asynchronous Bridge described here belongs to React Native\u2019s legacy architecture. The New Architecture removes React Native\u2019s dependency on that Bridge and uses JSI for JavaScript-to-native communication.",
      },
      {
        type: "paragraph",
        content:
          "In React Native, JavaScript and native code (Java/Swift/Objective-C) live in separate realms. JavaScript runs in its own thread using the JavaScript engine, while native UI components run in the main thread of the device. To make them work together, React Native uses a \u201cbridge\u201d \u2013 an asynchronous communication layer that allows data to pass between the JavaScript and native worlds. Whenever JavaScript wants to interact with something native\u2014like triggering a camera, updating a view, or responding to a gesture\u2014it sends a message across this bridge. The same happens when native code needs to notify JavaScript, such as after a button is pressed or a device sensor changes. The bridge works fine for many use cases, but it becomes a problem when there's a lot of back-and-forth communication or time-sensitive data transfer. Since it's asynchronous and serializes the data (turns it into strings), large or frequent data exchanges can introduce delays. This makes things like high-frame-rate animations, real-time audio processing, or rapid gesture interactions harder to implement smoothly. That\u2019s why in performance-critical areas, developers either move logic to the native side, reduce the frequency of communication, or use newer solutions like JSI (JavaScript Interface) and Fabric architecture, which aim to eliminate the old bridge altogether by allowing synchronous, direct access between JavaScript and native code.",
      },
      {
        type: "paragraph",
        content:
          'How It Works Your app logic (e.g., "when the user taps a button, play a sound") runs in the JavaScript thread. UI rendering and native API access (e.g., camera, sensors, animations) happen in the native layer. The bridge translates and sends messages between them asynchronously.',
      },
      {
        type: "paragraph",
        content:
          "Why It Can Be a Bottleneck The bridge: Is not synchronous \u2014 it works like a message queue. Has a limited bandwidth \u2014 only a certain amount of data can be passed per frame. Adds latency because every interaction between JS and native layers needs a round-trip. So when there's a lot of communication \u2014 like in smooth animations, real-time updates, or heavy user interactions \u2014 the bridge can get overwhelmed, causing: UI lag Dropped frame Slow responses \ud83d\udd79 Example Suppose you're building a real-time drawing app: Every finger movement generates dozens of touch events per second. Each touch event needs to go from native \u2192 bridge \u2192 JS \u2192 bridge \u2192 native to update the drawing on screen. This constant back-and-forth slows things down, making the drawing appear laggy.",
      },
      {
        type: "paragraph",
        content:
          "\u2705 Native Apps Don't Have This Problem In pure native apps, everything runs on the native side, so there's no bridge \u2014 operations are faster and more seamless.",
      },
      {
        type: "diagram",
        title: "Legacy Bridge and the New Architecture",
        nodes: [
          {
            label: "JavaScript",
            detail: "React app and business logic",
          },
          {
            label: "Legacy Bridge",
            detail: "Async messages and serialization",
          },
          {
            label: "Native platform",
            detail: "Native modules and host views",
          },
        ],
        note: "Modern React Native uses JSI for direct JavaScript/native interop; this is not a claim that every operation should be synchronous.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "About the New Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "explain-to-me-which-should-be-handled-in-ui-thread-and-which-is-js-threa",
    question:
      "Explain to me which should be handled in ui thread and which is js thread?",
    answer: [
      {
        type: "ordered-list",
        items: [
          {
            heading: "UI Thread (Main Thread)",
            content:
              "This is the native platform thread. It handles: Drawing and rendering the UI (views, layouts) User interactions like touches, gestures Animations (if handled natively) Native module execution Push notifications",
          },
          {
            heading: "JavaScript Thread",
            content:
              "Run your app\u2019s JavaScript logic (written by you). It handles: Business logic (e.g., fetching data, calculations) State management Calling React lifecycle methods Handling timers, events, and network calls Sending commands to native modules via the bridge",
          },
        ],
      },
      {
        type: "diagram",
        title: "How JavaScript and UI work together",
        nodes: [
          {
            label: "JavaScript thread",
            detail: "React render work, app logic, state, and events",
          },
          {
            label: "Renderer",
            detail: "Schedules and prepares UI changes",
          },
          {
            label: "UI thread",
            detail: "The only thread that manipulates native host views",
          },
        ],
        note: "In the New Architecture, render and layout work can move across JS and UI threads depending on event priority; keep heavy work off the critical path.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "React Native threading model",
        href: "https://reactnative.dev/architecture/threading-model",
      },
    ],
  },
  {
    id: "what-should-be-handled-in-ui-thread",
    question: "What Should Be Handled in UI Thread?",
    answer: [
      {
        type: "paragraph",
        content:
          "Rendering views Needs to update screen quickly and smoothly Animations (native) To ensure 60 FPS and fluid experience Responding to touch events Fast response to user interactions Layout changes (e.g., resize) Happens on native view hierarchy",
      },
      {
        type: "paragraph",
        content:
          "Rule: Anything that directly affects what the user sees or interacts with should stay on the UI thread.",
      },
      {
        type: "diagram",
        title: "How JavaScript and UI work together",
        nodes: [
          {
            label: "JavaScript thread",
            detail: "React render work, app logic, state, and events",
          },
          {
            label: "Renderer",
            detail: "Schedules and prepares UI changes",
          },
          {
            label: "UI thread",
            detail: "The only thread that manipulates native host views",
          },
        ],
        note: "In the New Architecture, render and layout work can move across JS and UI threads depending on event priority; keep heavy work off the critical path.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "React Native threading model",
        href: "https://reactnative.dev/architecture/threading-model",
      },
    ],
  },
  {
    id: "what-should-be-handled-in-javascript-thread",
    question: "What Should Be Handled in JavaScript Thread?",
    answer: [
      {
        type: "paragraph",
        content:
          "Business logic Doesn\u2019t need direct access to native views API calls / network requests Can run in background and update state later State updates and logic Managed by React on JS side Redux, context, local storage Non-UI logic that shouldn\u2019t block rendering",
      },
      {
        type: "paragraph",
        content:
          "Rule: Anything related to logic, decisions, or data should be handled in the JS thread Problems If Not Used Properly Mistake Consequence Heavy JS work (e.g., looping over 1000 items) Freezes the UI since JS thread is blocked Too many UI updates from JS Bridge gets overloaded, causing jank Animating via JS (instead of native driver) Lower frame rate, laggy UI",
      },
      {
        type: "paragraph",
        content:
          "So, in short: the UI thread is best for visuals and interactivity, while the JS thread is for logic and decision-making. The two work together\u2014but if either one is overworked, your app will suffer.",
      },
      {
        type: "diagram",
        title: "How JavaScript and UI work together",
        nodes: [
          {
            label: "JavaScript thread",
            detail: "React render work, app logic, state, and events",
          },
          {
            label: "Renderer",
            detail: "Schedules and prepares UI changes",
          },
          {
            label: "UI thread",
            detail: "The only thread that manipulates native host views",
          },
        ],
        note: "In the New Architecture, render and layout work can move across JS and UI threads depending on event priority; keep heavy work off the critical path.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "React Native threading model",
        href: "https://reactnative.dev/architecture/threading-model",
      },
    ],
  },
  {
    id: "memory-leaks-in-react-native",
    question: "Memory leaks in react native?",
    answer: [
      {
        type: "ordered-list",
        items: [
          {
            heading: "Uncleared Timers and Intervals",
            content:
              "When you use functions like setInterval, setTimeout, or setImmediate, and don\u2019t clear them using clearInterval() or clearTimeout() during component unmount, they continue to run in the background. This keeps the component in memory, even though it\u2019s no longer on screen.",
          },
          {
            heading: "Retaining References in Closures",
            content:
              "Sometimes closures (functions defined inside components) retain references to variables or component state. If these closures are used in timers, listeners, or background tasks, they can accidentally keep the whole component in memory. Example: An async function capturing this or state and still running after the component unmounts will prevent garbage collection.",
          },
        ],
      },
    ],
    topic: "Performance",
  },
  {
    id: "how-to-monitor-memory-leaks-issues-in-react-native",
    question: "How to monitor memory leaks issues in react native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Monitoring memory leaks in a React Native app involves using tools to track memory usage over time, identify unreleased objects, and trace back to the code causing the leak. Here's how you can do it: 1. Use Flipper with React Native Debugger 2. Enable and Use Hermes Engine 3. Watch for Warnings in Console React Native sometimes shows warnings like: \"Can't perform a React state update on an unmounted component.\" This is often a sign of memory leaks, especially due to: Uncleaned timers Async tasks SetState after unmount",
      },
      {
        type: "paragraph",
        content:
          "Best Practices to Prevent Memory Leaks 1. Clear Timeouts, Intervals, and Subscriptions When you set up timers (setTimeout, setInterval) or listeners (like addEventListener or event subscriptions), you must clear them when the component unmounts. Otherwise, they keep running in memory even when the component is gone.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Use FlatList and ScrollView Carefully",
            content:
              "Avoid rendering large lists all at once. Prefer FlatList or SectionList over ScrollView for performance and memory efficiency, especially when dealing with many items. Always use keyExtractor and enable proper item recycling (initialNumToRender, maxToRenderPerBatch, etc.).",
          },
          {
            heading: "Avoid Global Variables for Mutable Data",
            content:
              "Storing large or changing data globally (like in global, top-level objects, or singletons) can prevent garbage collection and cause leaks. Keep data scoped and clean it up properly.",
          },
          {
            heading: "Avoid Memory-Heavy Operations in Renders",
            content:
              "Avoid placing expensive calculations, large object creations, or complex operations directly inside the render function or JSX. Use useMemo, useCallback, or memoized components. React runs on a single-threaded JavaScript environment. If you perform a memory-intensive operation (e.g., complex calculations, large array manipulations) in the render method, it blocks the thread \u2014 meaning: UI becomes unresponsive Animations or gestures may lag Users may perceive the app as slow or broken",
          },
          {
            heading: "Monitor with Tools",
            content:
              "Use profiling tools like Flipper, React DevTools, and Xcode Instruments or Android Studio. Profiler to detect memory usage and find components not being garbage collected.",
          },
        ],
      },
    ],
    topic: "Performance",
  },
  {
    id: "explain-to-me-the-architecture-of-react-native",
    question: "Explain to me the architecture of React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "A react native app is made up of two separate pieces the native code and the javascript code the problem is since it's two different languages they can't speak to each other they are isolated in their own little lonely worlds but luckily we have the react native bridge which is how the native code and the javascript code talk to each other. Without the bridge there is no way for the native code to send any information to the javascript code or vice versa. But how does it work to figure that out let's look at what happens when an app starts up you tap the app icon and the operating system creates a main thread also called a ui thread and assigns it to our app the main thread spawns(creates and starts) a javascript thread and then the shadow thread sometimes called the shadow tree. Now the shadow tree's job is to calculate the layouts that we define on the javascript side and send that information to the native side what if we want to disable a button we've created well to disable a button we set a property on the javascript side which will be sent over the bridge as a serialized json object updates to native views are batched together and sent over to the native side at the end of each iteration of the javascript event loop in addition to passing properties across the bridge. We can also pass a function across the page to use as a callback. Say if a button is pressed then the native event is sent to the javascript site and the callback is executed now the majority of the time everything runs smoothly. But like a real-life fridge you can occasionally get traffic jams when you have a big list of items and start scrolling really fast you might see a blank screen before the rest of the items are shown this is because the on scroll native event is being sent to the javascript thread the javascript thread sends the new layout information to the shadow tree the shadow tree calculates the layout and sends it back to the native side.",
      },
      {
        type: "paragraph",
        content:
          "When scrolling fast you get a bunch of these events which causes a traffic jam across the bridge and you also get performance problems when running complex animations .",
      },
      {
        type: "paragraph",
        content:
          "For example say we have an ios device running at 60 frames per second which gives it that nice smooth lifelike feel after one frame is shown you have roughly 16 milliseconds to run code and display the next frame if you take too long then the frame is dropped and your app appears unresponsive or just laggy so with complex animations it's best to say on the ui thread as much as possible now facebook is well aware of some of the performance hits when using the bridge and they've been working on a whole new architecture for react native. That will address these performance issues. They're implementing something called the javascript interface or jsi which will sit between the javascript code and the javascript engine. Currently react native runs on javascript core which is already part of ios because it runs a safari browser but javascript core has to be shipped with your android react native app and it has some performance issues on low end or older androids not to mention making the bundle larger. But now we have hermes which is a lightweight javascript engine optimized for running react native on android so this new JSI will sit in between the javascript code and either javascript core or hermes or any other javascript engine we want to swap to as a side. Note when you run react native and debug mode it actually runs in chrome which uses the v8 engine in rare cases that can lead to some inconsistencies between how javascript runs in debug versus production swapping out javascript engines is nice and all but the real benefit to using JSI is the javascript side and the native side can finally talk to each other you will not have to serialize a json message and send it over the bridge to talk to the other side holy the new shadow tree will be written in c plus and shared across both sides currently all interactions over the bridge are asynchronous.",
      },
      {
        type: "paragraph",
        content:
          "But in the future we will be able to synchronously execute actions over the bridge solving the performance issues around scrolling large lists that we just talked about this works because javascript will be able to have a reference to the c plus object and invoke methods on it at the time of this video jsi is mostly stable but still needs improvements before being production ready.",
      },
      {
        type: "paragraph",
        content:
          "Earlier I mentioned all native modules used by the javascript code have to be initialized on startup which can impact performance as a part of the new react native architecture that will change the javascript code will load only the module when it's actually needed no more using the old bridge because a javascript code can hold a direct reference to what is now called a turbo module this is going to improve startup times for apps that use a lot of native modules at the time of this video turbo modules seem to be mostly working but they haven't been officially released facebook is using turbo modules internally and react native reanimated recently released version 2 using turbo modules the new react native architecture is going to bring some awesome improvements to the platform.",
      },
      {
        type: "diagram",
        title: "A simplified React Native render path",
        nodes: [
          {
            label: "React components",
            detail: "JSX, state, and props",
          },
          {
            label: "Fabric renderer",
            detail: "Create and commit UI updates",
          },
          {
            label: "Yoga",
            detail: "Calculate layout",
          },
          {
            label: "Native views",
            detail: "iOS and Android host views",
          },
          {
            label: "OS and GPU",
            detail: "Draw pixels on screen",
          },
        ],
        note: "JSI connects JavaScript and native code in the New Architecture. The old Bridge path is legacy architecture context.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "Architecture overview",
        href: "https://reactnative.dev/architecture/overview",
      },
      {
        label: "New Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "from-which-version-of-react-native-there-was-a-major-change-in-performan",
    question:
      "Which React Native release made the New Architecture the default?",
    answer: [
      {
        type: "paragraph",
        content:
          "The New Architecture was introduced as an opt-in in React Native 0.68 and became enabled by default in React Native 0.76. That release made Fabric and TurboModules available by default for new projects; earlier releases introduced the pieces incrementally.",
      },
      {
        type: "paragraph",
        content:
          "As of November 10, 2026, React Native 0.88 is the latest stable release. Check the official release schedule when you need the current version.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "React Native release schedule",
        href: "https://reactnative.dev/releases/overview",
      },
      {
        label: "React Native 0.88 release notes",
        href: "https://reactnative.dev/blog/2026/10/19/react-native-0.88",
      },
    ],
  },
  {
    id: "what-is-asyncstorage",
    question: "What is AsyncStorage?",
    answer: [
      {
        type: "paragraph",
        content:
          "AsyncStorage is a simple, unencrypted, persistent, key-value storage system that is global to the app. Four key features React Native provides a simple and efficient way to persist data locally using the AsyncStorage module. This is particularly useful for storing user preferences, authentication tokens, or any other data that needs to persist across app restarts. 1. Simple: Core Functionality Involves Set And Get Methods.                                                       2. Unencrypted: Access is controlled by location access. 3. Persistent: Data Is Saved Until It Is Explicitly Deleted. 4. Global: Saved data is global to the app All AsyncStorage operations are asynchronous and therefore return a Promise.",
      },
      {
        type: "paragraph",
        content: "App Lifecycle Using AppState",
      },
      {
        type: "paragraph",
        content:
          "Everything we have been doing so far assumes that our app is loaded on the screen and is running as a foreground process. We need to be able to perform background processes or safely save the user's data in case the OS suspends it or the user quits it. AppState provides information on the current state of the app: active indicates that the app is running in the foreground background indicates that the app is running in the background inactive indicates that the app is transitioning between foreground and background",
      },
      {
        type: "paragraph",
        content:
          "Reconciliation: The Dynamic Dance of Components In React, when you change something in your app (like updating some data), React wants to update what the user sees on the screen accordingly. But rather than re- rendering everything from scratch every time there\u2019s a change, React is smart about it. Here\u2019s how it works: 1. Virtual DOM: React keeps a virtual representation of what your UI looks like. It\u2019s like a blueprint of your actual UI, but it\u2019s not directly visible to the user. 2. Diffing Algorithm: When there\u2019s a change, React compares this new blueprint (virtual DOM) with the previous one to see what\u2019s different. It\u2019s like comparing two versions of a drawing to see what lines were added, removed, or changed. 3. Minimal Changes: React figures out the smallest possible number of changes needed to update the actual UI based on the differences it found. It\u2019s like finding the most efficient way to tweak your drawing to reflect the changes. 4. Updating the DOM: Finally, React applies these minimal changes to the real DOM (what the user sees on the screen) so that it accurately reflects the updated virtual DOM. It does this in the most efficient way possible, so it\u2019s fast and doesn\u2019t cause unnecessary work. In simple terms, React\u2019s reconciliation with a diffing algorithm is like a clever artist who only makes the necessary adjustments to a drawing instead of redrawing everything from scratch every time there\u2019s a change. This approach makes React apps are fast and efficient, providing a smooth user experience.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "explain-the-concept-of-jsx-in-react-native",
    question: "Explain the concept of JSX in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "JSX (JavaScript XML) is a syntax extension in React Native that allows embedding HTML-like elements within JavaScript code. It simplifies UI rendering by letting developers write components using a familiar HTML structure. JSX gets transpiled into JavaScript, enabling React Native components to be expressed in a more readable and intuitive format.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "what-is-the-significance-of-the-render-method-in-react-native-components",
    question:
      "What is the significance of the 'render' method in React Native components?",
    answer: [
      {
        type: "paragraph",
        content:
          "The 'render' method in a React Native component is responsible for returning the JSX representation of the component's UI. It defines what the component should render on the screen based on its current state and props. React Native automatically updates the UI when the state or props change, re-invoking the 'render' method to reflect those changes visually.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "how-would-you-style-a-react-native-component",
    question: "How would you style a React Native component?",
    answer: [
      {
        type: "paragraph",
        content:
          "React Native components can be styled using the 'StyleSheet' component. It provides an interface similar to CSS for defining styles. You can use properties like 'flex', 'margin', 'padding', 'color', and more.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "describe-the-purpose-of-props-in-react-native",
    question: "Describe the purpose of 'props' in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "'Props' (short for properties) are a way to pass data from a parent component to a child component in React Native. They allow components to be dynamic and reusable by providing different data and behavior based on where they are used. Props are read-only and help maintain a unidirectional data flow.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "what-is-state-in-react-native-and-how-is-it-different-from-props",
    question:
      "What is 'state' in React Native and how is it different from 'props'?",
    answer: [
      {
        type: "paragraph",
        content:
          "'State' is a mechanism in React Native for managing dynamic data within a component. Unlike 'props', which are passed down from parent to child, 'state' is managed internally by the component itself. While 'props' are immutable and provided by a parent component, 'state' can be changed using the 'setState' method and triggers the re-rendering of the component.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "explain-the-react-native-component-lifecycle",
    question: "Explain the React Native component lifecycle.",
    answer: [
      {
        type: "paragraph",
        content:
          "The React Native component lifecycle consists of several phases: mounting, updating, and unmounting. During mounting, the component is created and inserted into the DOM. During updating, it receives new props or states and updates accordingly. During unmounting, the component is removed from the DOM.",
      },
      {
        type: "heading",
        content: "Additional notes",
      },
      {
        type: "paragraph",
        content:
          "The React Native component lifecycle consists of the following phases. Mounting Phase Creation: When a component is first created, it enters the mounting phase. Constructor: The component\u2019s constructor is called, where you can initialize state and bind methods. Render: The render( ) method is invoked, returning the initial UI representation. ComponentDidMount: After rendering, componentDidMount( ) is called. It\u2019s a good place for side effects (e.g., data fetching) and setting up subscriptions. Updating Phase Props or State Change: When a component\u2019s props or state changes, it re-enters the updating phase. ShouldComponentUpdate: React checks if the component should update by calling shouldComponentUpdate( ). You can optimize performance here. Render: If the component should update, it re-renders using the updated props and state. ComponentDidUpdate: After rendering, componentDidUpdate( ) is called. Useful for handling side effects after an update. Unmounting Phase Removal: When a component is removed from the DOM, it enters the unmounting phase. ComponentWillUnmount: Before unmounting, componentWillUnmount( ) is called. Clean up resources (e.g., cancel subscriptions). Error Handling If an error occurs during rendering or in lifecycle methods, the error handling phase is triggered. Use componentDidCatch( ) to handle errors gracefully.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "how-would-you-debug-a-react-native-application",
    question: "How would you debug a React Native application?",
    answer: [
      {
        type: "paragraph",
        content:
          "React Native provides tools like the in-app developer menu, logging using 'console.log', and integration with debugging tools like React DevTools or Flipper. You can also use Chrome Developer Tools for debugging by running your app in debug mode and accessing it from a web browser.",
      },
    ],
    topic: "Testing & debugging",
  },
  {
    id: "what-is-the-stylesheet-component-in-react-native-and-why-is-it-used",
    question:
      "What is the 'StyleSheet' component in React Native and why is it used?",
    answer: [
      {
        type: "paragraph",
        content:
          "'StyleSheet' is a module in React Native used to create styles efficiently. It optimizes the styling process by allowing the app to bundle and apply styles more effectively, resulting in better performance. It's especially important in mobile development where performance is crucial.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "why-is-stylesheet-create-better-than-inline-styles",
    question: "Why Is StyleSheet.create Better than Inline Styles?",
    answer: [
      {
        type: "heading",
        content: "Every time you pass an inline style like this",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<Text style={{ fontSize: 20, color: 'red' }} />\nYou're creating a new object during every render. React Native then needs to do more work to compare styles and check if updates are needed.\nBut when you use StyleSheet.create, it:\nCaches the object.\nAssigns IDs to avoid creating new objects each time.\nAllows React Native to send optimized messages to the native thread.\nThis leads to better performance, especially in larger apps.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "when-should-you-use-stylesheet",
    question: "When Should You Use StyleSheet?",
    answer: [
      {
        type: "paragraph",
        content:
          "Use StyleSheet.create when: The styles are static (not changing dynamically). You want better performance and structure. You are building large components or apps.",
      },
      {
        type: "paragraph",
        content:
          "Use inline styles if: You're conditionally styling very specific things on the fly. The style is simple and only used once.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "how-do-you-handle-navigation-between-screens-in-react-native",
    question: "How do you handle navigation between screens in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Navigation between screens in React Native is managed using libraries like React Navigation. You define a navigator component and configure the screens you want to navigate to. Then, you use navigation methods like 'navigate', 'push', 'goBack', etc., to move between screens.",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "explain-the-concept-of-flexbox-and-its-role-in-react-native-layout",
    question:
      "Explain the concept of 'flexbox' and its role in React Native layout.",
    answer: [
      {
        type: "paragraph",
        content:
          "'Flexbox' is a layout model that allows you to distribute space and align-items within a container. It simplifies complex layouts and ensures that components adjust dynamically to different screen sizes. In React Native, 'flexbox' is the primary layout system and is used to position and organize UI components.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "what-are-keys-in-react-native-and-why-are-they-important-in-lists",
    question:
      "What are 'keys' in React Native and why are they important in lists?",
    answer: [
      {
        type: "paragraph",
        content:
          "'Keys' are special attributes used by React Native to uniquely identify elements in a list. They help React Native optimize re-rendering when the list changes, improving performance and preventing rendering glitches.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-can-you-make-a-network-request-in-react-native",
    question: "How can you make a network request in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Network requests in React Native are typically made using the 'fetch' API or third-party libraries like Axios. You make asynchronous requests to APIs and handle responses using promises or async/await syntax.",
      },
    ],
    topic: "App development",
  },
  {
    id: "describe-the-purpose-of-asyncstorage-in-react-native",
    question: "Describe the purpose of 'AsyncStorage' in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "'AsyncStorage' is an API in React Native for asynchronous, unencrypted, and persistent storage of small amounts of data. It's often used to store settings, preferences, or authentication tokens locally on the user's device.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-can-you-integrate-redux-with-a-react-native-app",
    question: "How can you integrate Redux with a React Native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, Redux can be integrated by creating a store to hold the global state and using components like 'Provider' to make the state available to the app. Actions, reducers, and middleware are used to update and manage the state.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-do-you-optimize-performance-in-a-react-native-application",
    question: "How do you optimize performance in a React Native application?",
    answer: [
      {
        type: "paragraph",
        content:
          "Performance optimization in React Native involves using PureComponent and memoization techniques, optimizing render methods, avoiding unnecessary re-renders, and implementing code splitting. Profiling tools like React DevTools can help identify performance bottlenecks.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "explain-the-concept-of-hoc-higher-order-component-in-react-native",
    question:
      "Explain the concept of 'HOC' (higher-order component) in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "A HOC is a design pattern in React Native that allows you to wrap a component with additional functionality. It is used for cross-cutting concerns like authentication, data fetching, and logging, making code more modular and reusable.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "how-can-you-integrate-third-party-libraries-in-a-react-native-app",
    question:
      "How can you integrate third-party libraries in a React Native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "Third-party libraries can be integrated using package managers like npm or yarn. You install the library, import it into your code, and use its components or APIs. Native modules can also be linked using the 'react-native link' command.",
      },
    ],
    topic: "App development",
  },
  {
    id: "what-are-touchable-components-in-react-native-and-how-do-they-work",
    question:
      "What are 'Touchable' components in React Native and how do they work?",
    answer: [
      {
        type: "paragraph",
        content:
          "'Touchable' components in React Native, such as 'TouchableOpacity' and 'TouchableHighlight', provide touch interactions for UI elements. They respond to touch events like 'onPress' and 'onLongPress' and provide visual feedback, making apps feel more interactive.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "explain-the-architecture-of-a-react-native-app",
    question: "Explain the architecture of a React Native app.",
    answer: [
      {
        type: "paragraph",
        content:
          "A React Native app follows a component-based architecture. It consists of reusable UI components, data management using state and props, navigation using libraries like React Navigation, and potentially global state management using libraries like Redux.",
      },
      {
        type: "diagram",
        title: "A simplified React Native render path",
        nodes: [
          {
            label: "React components",
            detail: "JSX, state, and props",
          },
          {
            label: "Fabric renderer",
            detail: "Create and commit UI updates",
          },
          {
            label: "Yoga",
            detail: "Calculate layout",
          },
          {
            label: "Native views",
            detail: "iOS and Android host views",
          },
          {
            label: "OS and GPU",
            detail: "Draw pixels on screen",
          },
        ],
        note: "JSI connects JavaScript and native code in the New Architecture. The old Bridge path is legacy architecture context.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "Architecture overview",
        href: "https://reactnative.dev/architecture/overview",
      },
      {
        label: "New Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "what-is-the-role-of-navigator-in-react-navigation",
    question: "What is the role of 'navigator' in React Navigation?",
    answer: [
      {
        type: "paragraph",
        content:
          "'Navigator' is a core component in React Navigation that manages the navigation flow between screens in a React Native app. It defines the app's navigation structure, handles transitions, and maintains the navigation stack.",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "how-do-you-handle-platform-specific-code-in-react-native",
    question: "How do you handle platform-specific code in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "React Native provides the 'platform' module to handle platform-specific code. You can use it to conditionally render components or apply styles based on the platform (iOS/Android). Alternatively, you can create separate platform-specific files using naming conventions (e.g., 'MyComponent.ios.js' and 'MyComponent.android.js').",
      },
      {
        type: "paragraph",
        content:
          "Discuss the benefits and drawbacks of using Expo for React Native development. Expo offers a streamlined way to start React Native development, providing a set of pre-built components, tools, and services. This accelerates the development process and reduces the need for native module configuration. However, there are benefits and drawbacks to using Expo: Benefits: Expo simplifies setup: It abstracts the complexity of native modules, making it easier for developers to start building quickly without dealing with platform-specific configuration. Over-the-air updates: Expo enables seamless updates to apps without requiring users to download new versions from the app store. Access to native functionality: Expo provides a wide range of APIs to access device features like camera, location, and more. Unified codebase: With Expo, you can develop for both iOS and Android using a single codebase, saving time and effort. Drawbacks: Limited native module support: Expo restricts access to certain native modules which might limit your app's capability if you require deep native integration. Bigger app size: Expo includes its runtime in the app package, potentially leading to larger app sizes compared to bare React Native projects. Dependency on Expo services: If Expo services are discontinued or changed, it could impact your app's functionality and maintenance. Customization constraints: Expo's tooling might not provide the flexibility needed for complex customization, especially in cases where you need to integrate third-party native libraries. In summary, Expo is an excellent choice for rapid prototyping, smaller apps, or when you want to get started quickly. However, for more complex applications that require deep native integrations and greater customization, a bare React Native setup might be more suitable.",
      },
      {
        type: "paragraph",
        content:
          "Discuss the benefits and drawbacks of using React native cli for React Native development Benefits Full control over native code (Android/iOS) and project configuration. Ideal for integrating custom native modules or third-party SDKs not supported by Expo. No dependency on a managed ecosystem like Expo \u2013 fewer abstractions. More lightweight project setup \u2013 only includes what you add. Better suited for complex or enterprise-level applications with custom requirements. Easier to optimize performance through native-level tweaks. Drawbacks Steeper learning curve, especially for developers without native mobile development experience. More complex setup and configuration (e.g., Xcode, Android Studio, SDK paths). Manual linking and native dependency management can be time-consuming. Harder to debug issues that originate from native code or build configurations. No out-of-the-box features like Expo provides (e.g., over-the-air updates, device preview tools). Updating React Native and related dependencies requires more effort and care.",
      },
    ],
    topic: "App development",
  },
  {
    id: "explain-the-concept-of-props-drilling-and-how-to-avoid-it",
    question: "Explain the concept of 'props drilling' and how to avoid it.",
    answer: [
      {
        type: "paragraph",
        content:
          "Props drilling occurs when props are passed from a top-level component to multiple nested components, even though some intermediate components do not use those props. This can lead to cluttered code and reduced maintainability. To avoid props drilling, you can use techniques like Context API or Redux. Context API: React's Context API allows you to share the state between components without directly passing props. You can create a context at the top level and provide it to any component that needs the shared data. Redux: Redux is a state management library that centralizes the state of your app. It eliminates the need to pass props down through many layers of components by allowing any component to access the state from the store. These approaches can help you ensure that components only receive the data they need, reducing unnecessary prop passing and making your codebase cleaner and more maintainable.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "explain-the-role-of-managed-and-bare-workflows-in-expo",
    question: "Explain the role of managed and bare workflows in Expo.",
    answer: [
      {
        type: "paragraph",
        content:
          "Expo's managed workflow offers simplicity and speed but limited access to native modules. The bare workflow provides full control but requires more setup and native code management.",
      },
    ],
    topic: "App development",
  },
  {
    id: "what-is-the-importance-of-gesture-handling-for-creating-rich-and-respons",
    question:
      "What is the importance of gesture handling for creating rich and responsive user interfaces in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Gesture handling is vital for natural and responsive user interfaces. It's needed for swipe navigation, pinch-zoom, drag-and-drop, animations, carousels, pull-to-refresh, long-press actions, and rotations.",
      },
    ],
    topic: "Animation",
  },
  {
    id: "how-can-you-handle-offline-storage-in-a-react-native-app",
    question: "How can you handle offline storage in a React Native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "Handling offline storage is crucial for providing a seamless user experience in React Native apps. One common approach is to use AsyncStorage, a simple key-value storage system. It's asynchronous and built into React Native. Here's a basic example of using AsyncStorage to handle offline storage:",
      },
      {
        type: "paragraph",
        content:
          "AsyncStorage is suitable for smaller amounts of data. For larger or more complex data, you might consider using libraries like react-native-sqlite-storage for an SQLite database or realm for a NoSQL database. Remember to handle errors appropriately and provide user feedback when dealing with offline storage.",
      },
      {
        type: "paragraph",
        content:
          "Discuss the role of 'shouldComponentUpdate' in React Native. shouldComponentUpdate is a lifecycle method that allows you to control whether a component should update and re-render when its props or state change. By default, React components re-render whenever there's a change in props or state. However, in some cases, you might want to optimize performance by preventing unnecessary renders. Use **shouldComponentUpdate **when you have expensive operations in your render method or when you want to avoid re-renders that wouldn't change the component's output. However, don\u2019t overuse it as it can make your code more complex and harder to maintain. Note: In modern React, you might prefer using React.memo higher-order component (HOC) or the useMemo hook for similar optimization purposes.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "explain-the-virtual-dom-and-its-relevance-in-react-native",
    question: "Explain the Virtual DOM and its relevance in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "The Virtual DOM is a concept in React (and React Native) that represents the UI as an in-memory tree structure of components. When there are changes to a component's props or state, React generates a new Virtual DOM tree, compares it with the previous one using a process called \"reconciliation\", and then updates the actual DOM with the minimal necessary changes. In React Native, the Virtual DOM operates similarly to how it does in the web version of React. However, instead of directly manipulating the browser's DOM, React Native's Virtual DOM communicates with the native platform's UI elements. The relevance of the Virtual DOM in React Native includes: Performance optimization: The Virtual DOM allows React Native to minimize actual DOM manipulations, resulting in improved performance by batching updates and reducing the number of reflows and repaints. Cross-platform consistency: React Native's Virtual DOM enables a consistent development experience across different platforms (iOS, Android). Developers write code targeting the Virtual DOM which is then translated to platform-specific UI components. Developer productivity: Developers can focus on writing declarative UI code while letting React Native handle the efficient rendering updates. This makes the development process more productive and less error-prone. Reconciliation control: The Virtual DOM's reconciliation process ensures that only necessary updates are applied to the UI. This avoids unnecessary re-renders and enhances the app's responsiveness. In summary, the Virtual DOM is a key component of React Native's architecture that contributes to its performance, cross-platform capabilities, and developer-friendly approach.",
      },
      {
        type: "diagram",
        title: "A simplified React Native render path",
        nodes: [
          {
            label: "React components",
            detail: "JSX, state, and props",
          },
          {
            label: "Fabric renderer",
            detail: "Create and commit UI updates",
          },
          {
            label: "Yoga",
            detail: "Calculate layout",
          },
          {
            label: "Native views",
            detail: "iOS and Android host views",
          },
          {
            label: "OS and GPU",
            detail: "Draw pixels on screen",
          },
        ],
        note: "JSI connects JavaScript and native code in the New Architecture. The old Bridge path is legacy architecture context.",
      },
    ],
    topic: "App development",
    references: [
      {
        label: "Architecture overview",
        href: "https://reactnative.dev/architecture/overview",
      },
      {
        label: "New Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-can-you-achieve-a-responsive-design-in-react-native",
    question: "How can you achieve a responsive design in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Achieving a responsive design in React Native involves creating layouts that adapt effectively to different screen sizes and orientations. Here are some techniques: Flexbox: React Native uses Flexbox for layout which allows components to dynamically adjust their size and position based on available space. It's crucial for creating responsive designs. Dimensions API: You can use the Dimensions module to get the screen dimensions and adjust your layout accordingly. Platform-specific code: React Native provides platform-specific extensions (e.g., Platform.OS) to write code that's specific to iOS or Android. This allows you to fine-tune your design for each platform. Orientation changes: Listen for orientation change events and update your UI accordingly. You can use the Dimensions module or the react-native-orientation-locker library. Responsive fonts: Use the PixelRatio module to adjust font sizes based on screen density. Layout components: Libraries like react-native-responsive-screen provide components that adapt their size based on the screen dimensions. Media queries: You can use the react-native-responsive library to implement CSS-like media queries for responsive styling. By combining these techniques, you can create UIs that look and feel great on a variety of devices and screen sizes.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "how-do-you-handle-push-notifications-in-a-react-native-app",
    question: "How do you handle push notifications in a React Native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "Push notifications are essential for keeping users engaged with an app. To handle push notifications in a React Native app, these steps can be followed: Set up push notification services Integrate a push notification service like Firebase Cloud Messaging (FCM) or Apple Push Notification Service (APNs) for iOS. Request permissions Use the react-native-push-notification or @react-native-community/push-notification-ios library to request notification permissions from users. Handle registration Register the device token with the push notification service. The token is necessary for sending notifications to the device. Handle notifications Configure the app to handle incoming notifications, whether the app is foregrounded, backgrounded, or closed. You can define custom behaviors based on notification data. Display notifications Use the notification library to display local or remote notifications to users. Here's a basic example of handling push notifications using react-native-push-notification:",
      },
      {
        type: "paragraph",
        content:
          "Make sure to consult the documentation of the specific push notification service you're using and follow the guidelines for your target platforms (iOS and Android).",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-can-you-implement-bi-directional-communication-in-react-native",
    question:
      "How can you implement bi-directional communication in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Bi-directional communication involves the exchange of data and events between parent and child components. React Native provides ways to achieve this: Props: Pass data from parent to child components using props. Child components receive data as props and can trigger events by using callbacks passed from the parent. Context API: Use the Context API to share data between components that are not directly connected in the component tree. This avoids the need to pass props through intermediate components. State management libraries: Libraries like Redux and MobX enable global state management, allowing any component to access and modify shared state. Events and callbacks: Child components can emit events or call callbacks provided by the parent components to communicate changes or trigger actions. React hooks: Use custom hooks to encapsulate stateful logic and share it across components, enabling reusable behavior. Native modules (for native communication): For complex scenarios, you can create native modules that expose native functionality to JavaScript and vice versa. The choice of communication method depends on the complexity of your app and the level of decoupling you need between components.",
      },
      {
        type: "paragraph",
        content:
          "Discuss the role of 'SafeAreaView' in React Native and why it's important. SafeAreaView is a component provided by React Native that ensures content is displayed within safe insets, avoiding overlaps with notches, status bars, and navigation bars on various devices. It's particularly important for creating a consistent and user-friendly UI across different screen sizes and device types. Key points: Safe insets: Notches, status bars, and navigation bars can vary in size and shape across devices. SafeAreaView automatically calculates and applies insets to your content to prevent it from being obstructed. Consistent UI: By using SafeAreaView, you ensure that critical UI elements and content are always visible and accessible, enhancing the user experience. Platform specifics: SafeAreaView accounts for platform-specific guidelines and automatically adjusts the layout based on the device's platform (iOS or Android). Ease of use: Wrapping your top-level components or screens with SafeAreaView will enable it to handle insets for you. Here's a basic example of how to use SafeAreaView:",
      },
      {
        type: "paragraph",
        content:
          "Using SafeAreaView helps you design your app in a way that accommodates the unique characteristics of different devices, providing a polished and visually pleasing experience for users.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-can-you-implement-a-custom-font-in-a-react-native-app",
    question: "How can you implement a custom font in a React Native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "To implement a custom font in a React Native app, these steps can be followed: Add the font files Place your font files (usually in .ttf or .otf format) in a folder within your project directory. Link fonts For iOS, add the font files to your Xcode project and ensure they're included in the target. For Android, create an XML font resource file and link the font files. Install dependencies Install the react-native-vector-icons package, which provides a convenient way to manage and use custom fonts. Import and use fonts Import and use the custom font in your components using the Text component. You can set the fontFamily style property to the font's name. Here's an example of implementing a custom font:",
      },
      {
        type: "paragraph",
        content:
          "Make sure to replace 'CustomFont' with the actual font family name defined in your font files. With these steps, you can easily integrate custom fonts into your React Native app's design.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "explain-the-purpose-of-the-appstate-module-in-react-native",
    question: "Explain the purpose of the 'AppState' module in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "The AppState module in React Native allows you to monitor the current state of your app, whether it's in the foreground or background. It provides a way to respond to app state changes such as when the app is minimized or brought back to focus. Common use cases: Background tasks: You can use AppState to trigger background tasks or pause ongoing tasks when the app is sent to the background. User engagement: You might want to pause or adjust notifications when the app is active to avoid interrupting the user, or to update the UI when the app returns to the foreground. Data fetching: You can control when to refresh data based on the app's state to optimize network requests.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "describe-the-bridge-communication-in-react-native",
    question: "Describe the bridge communication in React Native.",
    answer: [
      {
        type: "callout",
        tone: "caution",
        title: "Legacy architecture context",
        content:
          "The asynchronous Bridge described here belongs to React Native\u2019s legacy architecture. The New Architecture removes React Native\u2019s dependency on that Bridge and uses JSI for JavaScript-to-native communication.",
      },
      {
        type: "paragraph",
        content:
          "Bridge communication in React Native refers to the mechanism that enables JavaScript code to communicate with native code on the device. Since React Native apps run JavaScript code on a separate thread from the native UI, this bridge facilitates the exchange of data and events between the two environments. Key points: Asynchronous communication: The bridge handles asynchronous communication between JavaScript and native modules. JavaScript sends requests to native modules, which are executed on the native thread, and the results are then sent back to JavaScript. Native modules: Native modules are JavaScript modules that expose methods to be called from JavaScript. These modules are implemented in the native code (Java/Objective-C) and provide access to native functionality. Performance: The bridge allows React Native to achieve native performance by delegating heavy computations and UI rendering to the native side. Serialization and deserialization: Data sent between JavaScript and native code is serialized and deserialized as JSON, ensuring compatibility between the two environments.",
      },
      {
        type: "paragraph",
        content:
          "Communication overhead: Frequent communication between JavaScript and native code can introduce communication overhead. It's important to optimize communication patterns for performance. The bridge communication is a fundamental part of React Native's architecture, enabling seamless integration of native functionality into the JavaScript-based UI layer. Explain the use of 'native modules' in React Native. Native modules in React Native are JavaScript modules that provide a bridge between the JavaScript code and the native code of the underlying platforms (iOS and Android). They enable you to access native functionality and APIs that are not available out-of-the-box in React Native. Key points: Accessing native APIs: Native modules allow you to tap into the platform-specific APIs and capabilities of iOS and Android. This is crucial when you need to perform tasks like accessing device sensors, interacting with device hardware, and using platform-specific UI components. Custom functionality: You can create native modules to expose custom native functionality to your React Native app. Method exports: Native modules export methods that can be called from JavaScript. These methods can accept parameters and return values. Asynchronous communication: Methods in native modules often involve asynchronous communication with the native side, which is common for tasks like fetching data from a network. Platform-specific implementation: Each platform (iOS and Android) requires separate implementation of native modules using platform-specific code (Objective-C/Swift for iOS and Java/Kotlin for Android).",
      },
      {
        type: "heading",
        content: "Example (iOS)",
      },
      {
        type: "heading",
        content: "Usage (JavaScript)",
      },
      {
        type: "paragraph",
        content:
          "Native modules are essential for extending the capabilities of a React Native app and accessing native features that aren't available through standard JavaScript APIs.",
      },
      {
        type: "diagram",
        title: "Legacy Bridge and the New Architecture",
        nodes: [
          {
            label: "JavaScript",
            detail: "React app and business logic",
          },
          {
            label: "Legacy Bridge",
            detail: "Async messages and serialization",
          },
          {
            label: "Native platform",
            detail: "Native modules and host views",
          },
        ],
        note: "Modern React Native uses JSI for direct JavaScript/native interop; this is not a claim that every operation should be synchronous.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "About the New Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "what-are-the-limitations-of-react-native",
    question: "What are the limitations of React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "While React Native offers many advantages, it also has some limitations: Performance: React Native achieves native performance for most use cases but certain complex and graphics-intensive tasks may still require native code for optimal performance. Limited access to native APIs: While React Native provides access to many native APIs, there might be cases where you need to write custom native modules to access specific platform features. Third-party libraries: Not all native libraries are readily available for React Native. Some might need to be wrapped or rewritten to work with React Native. UI flexibility: Although React Native provides a rich set of UI components, intricate UI designs might require custom native code or third-party libraries. Debugging: Debugging React Native apps can sometimes be more challenging compared to debugging web applications, particularly when dealing with interactions between JavaScript and native code. Version compatibility: Keeping up with React Native updates and ensuring compatibility with third-party libraries can sometimes be time-consuming. Platform-specific design: Some platform-specific design guidelines might be challenging to implement consistently across iOS and Android. Learning curve: React Native has a learning curve, especially for developers new to JavaScript or those transitioning from native app development. Despite these limitations, React Native remains a powerful framework for cross-platform app development, offering a productive and efficient way to build mobile applications.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-would-you-handle-state-synchronization-between-react-components",
    question:
      "How would you handle state synchronization between React components?",
    answer: [
      {
        type: "paragraph",
        content:
          "State synchronization involves ensuring that different React components share and display the same state accurately. You can achieve this using the following approaches: Lifting state: If multiple components need to share the same state, lift that state to their common ancestor. Pass the state down as props to child components, ensuring they stay in sync. Context API: Use the Context API to share the state between components that are not directly connected in the component tree. This avoids prop drilling and simplifies state management. State management libraries: Use state management libraries like Redux or MobX to centralize and manage the state of your application, ensuring that all components access the same source of truth. React hooks: Use React hooks like useState, useEffect, and useContext to manage and share states within functional components. Event emitter/observer pattern: Implement a custom event emitter or observer pattern to notify components of state changes and keep them synchronized. Local storage/AsyncStorage: For persisting data across components or sessions, you can store the state in local storage or AsyncStorage. The approach you choose depends on the complexity of your app and the scale of state synchronization needed.",
      },
      {
        type: "paragraph",
        content:
          "Discuss the role of 'LayoutAnimation' for creating smooth transitions in React Native. LayoutAnimation is a module in React Native that allows you to create smooth animations and transitions for layout changes. It simplifies the process of animating changes in component sizes, positions, and appearances. Key points: Ease of use: LayoutAnimation provides a simple way to create animations without needing to explicitly manage animation frames. Implicit animations: With LayoutAnimation, you define animation properties (such as duration and easing) and the framework automatically animates the changes for you. Integration with state changes: You can use LayoutAnimation alongside state changes to create animations that respond to changes in your app's data. Performance: LayoutAnimation is designed to be performant and efficient, ensuring smooth animations even on lower-end devices. Supported animations: LayoutAnimation supports various types of animations including scaling, fading, and sliding. Example:",
      },
      {
        type: "paragraph",
        content:
          'In this example, when the "Toggle Expansion" button is pressed, the height of the blue View element smoothly transitions between two values.',
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-can-you-implement-background-tasks-in-a-react-native-app",
    question: "How can you implement background tasks in a React Native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "Background tasks are important for performing operations that don't require user interaction when the app is not in the foreground. React Native provides mechanisms to achieve background tasks: Headless JS: Use Headless JS to run JavaScript code in the background, even when the app is closed. This is useful for tasks like data synchronization, sending analytics, and processing notifications. Background fetch: Use the react-native-background-fetch library to schedule background fetches that can periodically update data or trigger actions. Push notifications: While not true background tasks, push notifications can be used to prompt the app to perform certain actions or updates when they arrive. Native nodules: For tasks that require native capabilities, you can create custom native modules that handle background tasks on the native side. Background geolocation: Use the react-native-background-geolocation library to track device location and perform tasks based on location changes, even when the app is in the background. Example (Headless JS):",
      },
      {
        type: "paragraph",
        content:
          "Background tasks help keep your app's data and functionality up-to-date, even when the user isn't actively using the app.",
      },
      {
        type: "paragraph",
        content:
          "Headless JS Headless JS in React Native is a way to run JavaScript code in the background, even when your app\u2019s UI isn\u2019t active. This is particularly useful for tasks that should continue running even if the app is minimized or closed, such as background data syncing, processing a downloaded file, or handling background location updates.",
      },
      {
        type: "paragraph",
        content:
          "Let\u2019s say you have a delivery app. When the delivery driver closes the app, you might still want to track their location in the background to update the server. You can\u2019t use normal React components because they depend on the UI thread \u2014 that\u2019s where Headless JS comes in. Headless JS lets you write a JavaScript function that runs entirely independent of the UI. It\u2019s invoked by the native side \u2014 Android only, for now \u2014 and runs in a separate JS context. This function doesn\u2019t return a UI element. Instead, it does a job and exits. Think of it like a background worker.",
      },
      {
        type: "paragraph",
        content:
          "To make this work, on the Android side, you define a BroadcastReceiver or a Service that knows how to wake up your app when a certain event happens \u2014 for example, a background fetch, battery event, or boot complete. Once the event is received, the native code wakes up the JS runtime and calls the registered Headless JS task. In your JS code, you register a function with AppRegistry.registerHeadlessTask. This function can then execute whatever logic you want \u2014 like making a network request or storing data \u2014 and finish once it\u2019s done. You usually wrap this logic in a Promise to ensure React Native knows when the job has completed. Keep in mind that on Android, you must handle things like acquiring a wake lock if your task takes time, or respecting battery optimizations (like Doze Mode). And since this feature only works on Android, you need to handle fallbacks or alternatives for iOS \u2014 where you might use react-native-background-fetch, TaskManager, or PushKit depending on the use case. Headless JS is powerful, but you need to use it wisely. It's not for long-running tasks like music playback or real-time GPS streaming \u2014 it\u2019s for short, discrete jobs that should be done without user interaction, even when the app is inactive.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-perform-navigation-using-the-react-navigation-library",
    question:
      "How do you perform navigation using the 'react-navigation' library?",
    answer: [
      {
        type: "paragraph",
        content:
          "The react-navigation library is a popular choice for handling navigation in React Native apps. It provides a flexible and customizable way to manage navigation between different screens and components. Basic usage: Installation: Install the required packages using npm or yarn. npm install @react-navigation/native @react-navigation/stack Create navigator: Set up a navigation stack by creating a navigator using createStackNavigator.",
      },
      {
        type: "paragraph",
        content:
          "Navigate: Use the navigation prop to navigate between screens.",
      },
      {
        type: "paragraph",
        content:
          "Customization: react-navigation provides various navigators (stack, tab, drawer, etc.) and allows you to customize navigation options, headers, animations, and more. It simplifies the process of creating a navigation flow in your React Native app, providing a consistent and intuitive user experience when moving between different parts of the application.",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "how-can-you-handle-the-dynamic-linking-of-libraries-in-a-react-native-pr",
    question:
      "How can you handle the dynamic linking of libraries in a React Native project?",
    answer: [
      {
        type: "paragraph",
        content:
          "To handle the dynamic linking of libraries in a React Native project, you can use the react-native link command. It automates the process of linking native modules by modifying the necessary native files. However, manual linking might be required for some complex libraries or custom native modules. Manual linking involves modifying native files yourself to integrate the library properly. Remember to rebuild the project after linking to ensure the changes take effect.",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "how-does-linking-of-libraries-react-native-means",
    question: "How does linking of libraries react native means?",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, linking a library means connecting a native module (written in Java/Kotlin for Android or Objective-C/Swift for iOS) with the JavaScript side of your application so you can use it from your React Native code.",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "what-happens-when-you-link-a-library",
    question: "What Happens When You Link a Library?",
    answer: [
      {
        type: "paragraph",
        content:
          "React Native supports both JavaScript-only libraries and native modules. When a library contains native code (i.e., it interacts with platform-specific APIs), it must be linked so that: Native code is included in the iOS/Android build process. React Native knows how to bridge calls from JavaScript to native methods.",
      },
      {
        type: "paragraph",
        content:
          "Summary Linking = Making a native module accessible to React Native JS code. Pre-0.60: Required manual linking. Post-0.60: Uses auto linking (CocoaPods for iOS, Gradle for Android). Still need to run pod install for iOS after installing native modules.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "explain-the-concept-of-babel-and-its-role-in-react-native-development",
    question:
      "Explain the concept of 'Babel' and its role in React Native development.",
    answer: [
      {
        type: "paragraph",
        content:
          "Babel is a JavaScript compiler that converts modern JavaScript code (ES6/ES7) into an older version (ES5) that is compatible with most browsers and environments. In React Native development, Babel allows developers to write modern JavaScript syntax in their codebase, which is then transformed into code that the React Native runtime can understand. This enables the use of features like arrow functions, classes, and destructuring. Babel is crucial for ensuring cross-platform compatibility and leveraging the latest language features while maintaining broader device support.",
      },
      {
        type: "paragraph",
        content:
          "Discuss the use of 'ErrorUtils' in error handling within a React Native app. 'ErrorUtils' is a utility provided by React Native to enhance error handling. It allows you to catch JavaScript errors that occur outside of the normal execution flow such as those in asynchronous code or event handlers. By wrapping your code with ErrorUtils.setGlobalHandler, you can specify a custom function to handle these errors. This is especially useful in production environments to gracefully handle unexpected errors and prevent crashes, enabling you to provide a better user experience.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "explain-the-concept-of-code-signing-and-its-importance-in-react-native-a",
    question:
      "Explain the concept of 'code signing' and its importance in React Native app deployment.",
    answer: [
      {
        type: "paragraph",
        content:
          "Code signing is a security practice used in app deployment to ensure the authenticity and integrity of the app. In React Native, when you build an app for distribution (iOS or Android), the app is digitally signed using cryptographic signatures. This process involves generating a unique signature for your app and linking it to your developer account. Code signing is crucial as it prevents unauthorized modifications to your app's code and ensures that the app comes from a trusted source. It is a key step in in-app security and app store approval processes.",
      },
      {
        type: "paragraph",
        content:
          "Discuss the role of 'PureComponent' in React Native and when to use it. 'PureComponent' is a base class in React Native (and React) that optimizes the rendering performance of a component by automatically implementing a shallow comparison of the component's props and state. It helps to prevent unnecessary re-renders when there are no changes in the data. Use 'PureComponent' when a component's output is solely determined by its props and state without any additional complex logic or side effects. This can lead to performance improvements, especially in components that render frequently.",
      },
      {
        type: "paragraph",
        content:
          "Discuss the use of 'react-native-webview' for embedding web content in a React Native app. 'react-native-webview' is a component that allows you to embed web content (HTML, JavaScript, etc.) within a React Native app. It provides a bridge between native code and web code, enabling you to display web-based features seamlessly. This can be useful for showing external websites, web-based authentication, and integrating third-party web services. However, it\u2019s important to be cautious with security and performance considerations as web views can impact app performance and introduce potential vulnerabilities if not used carefully.",
      },
      {
        type: "paragraph",
        content:
          "'WebViews' in React Native allows you to embed web content (HTML, JavaScript, etc.) within your app as a separate view. It's useful when you need to display external web pages, render interactive web-based components, or integrate third-party web services. While 'WebViews' provide flexibility, keep in mind that they introduce additional memory and performance overhead. Use them judiciously and consider factors like security, loading times, and responsiveness when integrating them in an app.",
      },
    ],
    topic: "Build & release",
  },
  {
    id: "how-do-you-handle-orientation-changes-in-a-react-native-app",
    question: "How do you handle orientation changes in a React Native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "To handle orientation changes in a React Native app, you can utilize the 'react-native-orientation' library or the built-in 'Dimensions' API. 'Dimensions' provides information about the screen dimensions including orientation. You can subscribe to orientation change events and update your UI accordingly. Additionally, you might need to use responsive design techniques, such as Flexbox or percentage-based dimensions, to ensure your UI elements adapt correctly to different orientations and screen sizes.",
      },
    ],
    topic: "App development",
  },
  {
    id: "explain-the-purpose-of-the-imagebackground-component-and-its-benefits",
    question:
      "Explain the purpose of the 'ImageBackground' component and its benefits.",
    answer: [
      {
        type: "paragraph",
        content:
          "The 'ImageBackground' component in React Native allows you to display an image as the background of a container. It simplifies the process of creating visually appealing UIs with background images. 'ImageBackground' provides props for controlling aspects like image source, image style, and content alignment. It's particularly useful when you want to add images behind other UI elements while maintaining proper sizing and positioning. This component streamlines the design process and contributes to a more polished app interface.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "how-do-you-handle-version-updates-and-migrations-in-a-react-native-proje",
    question:
      "How do you handle version updates and migrations in a React Native project?",
    answer: [
      {
        type: "paragraph",
        content:
          "Handling version updates and migrations in a React Native project involves a systematic approach: Maintain a version control system (e.g., Git) to track changes. Document your codebase and dependencies, and keep your project's dependencies up-to-date. Use tools like 'react-native-git-upgrade' to update the React Native version while managing compatibility issues. Additionally, follow platform-specific guidelines for handling version updates, especially for native modules. Thorough testing and continuous integration help ensure a smooth transition during updates.",
      },
      {
        type: "paragraph",
        content:
          "Discuss the role of 'Geolocation' in obtaining the user's current location in a React Native app. 'Geolocation' is a React Native API that provides access to the device's GPS capabilities to determine the user's current geographic location. By using the 'navigator.geolocation' object, you can request the user's permission to access location services and retrieve latitude and longitude coordinates. This is useful for building location-based apps, mapping features, and providing location-specific content. Keep in mind that handling location permissions and accuracy considerations are crucial aspects of using 'Geolocation'.",
      },
      {
        type: "paragraph",
        content:
          "Discuss the concept of 'Bridgeless' architecture in React Native (Hermes engine). The 'Bridgeless' architecture is a concept introduced in the Hermes JavaScript engine. It is an alternative runtime for React Native apps. It aims to reduce the communication overhead between JavaScript and native code (the \"bridge\") by optimizing the execution of JavaScript code on the native side. This leads to improved app startup performance and reduced memory consumption. By minimizing the need for frequent data serialization and deserialization across the bridge, 'Bridgeless' architecture enhances the overall React Native app experience.",
      },
      {
        type: "heading",
        content: "Additional notes",
      },
      {
        type: "paragraph",
        content:
          "Handling version updates and migrations in a React Native project involves several steps: Version control: Use a version control system (e.g., Git) to track changes and maintain different app versions. Dependency management: Keep track of your app's dependencies and ensure they are up-to-date. Use tools like 'yarn' or 'npm' for managing packages. React Native upgrade: Regularly update your React Native version to benefit from performance improvements, bug fixes, and new features. Test updates: Thoroughly test your app after each update to ensure compatibility and identify any issues. Continuous integration: Implement a CI/CD pipeline to automate testing and deployment for smoother updates. Backward compatibility: Ensure backward compatibility with older app versions and handle data migration if needed.",
      },
      {
        type: "paragraph",
        content:
          "\u202d Difference between navigation.push and navigation.navigate ?\u202c",
      },
      {
        type: "paragraph",
        content:
          '\u202d Navigation.push()\u202c - Always pushes a new instance of the route onto the navigation stack.\u202c \u202d- Even if you\'re already on that screen, it will duplicate it.\u202c \u202d Use case: When you want to visit the same screen multiple times with different data (e.g.,\u202c \u202d pushing a new "Profile" screen for a different user).\u202c',
      },
      {
        type: "paragraph",
        content:
          "navigation.push('Profile', { userId: 123 }); navigation.push('Profile', { userId: 456 }); // another Profile screen added on top",
      },
      {
        type: "paragraph",
        content:
          "\u202d Navigation.navigate(routeName, params?)\u202c \u202c\u202d If the screen is already in the stack, it navigates back to it instead of adding a new one.\u202c \u202d If it\u2019s not in the stack, it behaves like push and adds it.\u202c \u202d Use case: General navigation where you don\u2019t want duplicate screens on the stack.\u202c \u202d navigation.navigate('Home');",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "describe-the-use-of-the-animated-library-for-creating-complex-animations",
    question:
      "Describe the use of the 'Animated' library for creating complex animations.",
    answer: [
      {
        type: "paragraph",
        content:
          "The 'Animated' library in React Native provides a powerful framework for creating complex animations using a declarative API. It allows you to animate various properties of UI elements, such as opacity, scale, and position, over time. You can chain and combine animations, create physics-based animations, and handle gesture-based interactions. The 'Animated' library seamlessly integrates with React Native's rendering pipeline, ensuring smooth and performant animations that enhance the visual appeal and user experience of an app.",
      },
    ],
    topic: "Animation",
  },
  {
    id: "what-is-the-difference-between-animated-api-provided-by-react-native-vs-",
    question:
      "What is the difference between Animated api provided by react-native vs react-native-reanimated",
    answer: [
      {
        type: "paragraph",
        content:
          "The Animated API in React Native runs on the JavaScript thread. This means any animation is processed through the JS runtime, which can lead to performance issues if the JS thread is busy\u2014for example, when handling network calls or heavy computations. Animations may stutter or lag in such scenarios. It\u2019s suitable for simple animations like fading, scaling, or basic transitions, and is often used for lightweight UI work. On the other hand, react-native-reanimated runs animations on the UI thread using a system of \u201cworklets.\u201d This allows animations to stay smooth even when the JS thread is blocked. It\u2019s highly optimized and designed for complex, gesture-driven interfaces. It integrates deeply with react-native-gesture-handler, supports native gesture coordination, and allows writing declarative animation logic that executes independently from the JS thread. In short, use Animated for simple animations when performance isn't a critical concern. Use react-native-reanimated for smoother, more complex, and gesture-aware animations that need native-level responsiveness.",
      },
    ],
    topic: "Animation",
  },
  {
    id: "how-can-you-implement-real-time-synchronization-in-a-react-native-app",
    question:
      "How can you implement real-time synchronization in a React Native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "To implement real-time synchronization in a React Native app, you can use technologies like WebSocket, Firebase Realtime Database, or GraphQL subscriptions. They enable real-time communication between clients and servers, allowing instant updates when data changes on either side. You can use this approach for features like chat applications, live notifications, and collaborative editing. Ensure that you handle network disconnections and gracefully manage state changes to provide a seamless and reliable real-time experience.",
      },
    ],
    topic: "App development",
  },
  {
    id: "explain-the-purpose-of-backhandler-in-handling-android-back-button-event",
    question:
      "Explain the purpose of 'BackHandler' in handling Android back button events.",
    answer: [
      {
        type: "paragraph",
        content:
          "'BackHandler' is a module in React Native used to handle the Android hardware back button. It provides methods to register event listeners for back button presses and allows you to define custom behavior when the back button is pressed. This is particularly useful for managing navigation, modals, and dialog boxes. With 'BackHandler', you can ensure consistent and intuitive navigation in your React Native app, enhancing user experience and preventing unexpected app behavior.",
      },
    ],
    topic: "App development",
  },
  {
    id: "describe-the-role-of-error-boundaries-in-react-native",
    question: "Describe the role of 'Error Boundaries' in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "'Error Boundaries' are components in React (and React Native) that catch and handle errors occurring within their child components. They prevent crashes from propagating up the component tree and crashing the entire app. When an error occurs, the 'Error Boundary' displays a fallback UI such as an error message or a predefined component. This enhances app stability by isolating errors and allows users to continue using the app even when certain components encounter issues.",
      },
      {
        type: "paragraph",
        content:
          "'Error Boundaries' are components in React Native that catch and handle JavaScript errors that occur during rendering. They prevent these errors from crashing the entire app and allow you to display a fallback UI instead. 'Error Boundaries' help maintain a stable user experience by isolating errors to specific components, enabling users to continue using the app even when parts of it encounter issues. They improve app robustness, debugging, and user satisfaction by preventing unexpected crashes.",
      },
    ],
    topic: "App development",
  },
  {
    id: "explain-the-use-of-deviceeventemitter-and-nativeeventemitter-in-event-ha",
    question:
      "Explain the use of 'DeviceEventEmitter' and 'NativeEventEmitter' in event handling.",
    answer: [
      {
        type: "paragraph",
        content:
          "'DeviceEventEmitter' and 'NativeEventEmitter' are mechanisms for handling events between JavaScript and native code in React Native. 'DeviceEventEmitter' is a part of the core 'react-native' package and is used for emitting and listening to events from the native side in JavaScript. 'NativeEventEmitter' is a wrapper around the native platform's event emitter and provides a more consistent API. These mechanisms allow you to communicate changes, actions, or events between different parts of your app's codebase, enabling seamless coordination and interaction.",
      },
      {
        type: "paragraph",
        content:
          "Discuss the role of 'NavigationContainer' and its significance. 'NavigationContainer' is a core component in the 'react-navigation' library that manages the navigation tree for an app. It acts as a container for all your navigation components, such as 'StackNavigator', 'DrawerNavigator', and 'TabNavigator'. 'NavigationContainer' provides a common context for navigation state, enabling navigation components to communicate and coordinate seamlessly. It simplifies the setup of navigation and ensures a consistent navigation experience throughout your React Native app.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-can-you-optimize-a-react-native-application",
    question: "How can you optimize a React Native application?",
    answer: [
      {
        type: "paragraph",
        content:
          "This question reveals applicants' ability to optimize React Native applications for speed and usability. A strong answer should mention at least three of the following points: Optimize native libraries Compress graphic elements and images Reduce image size using file types such as APNG instead of PNG Compress raw JSON data or convert them into static object IDs Optimize the number of state operations and use React components when necessary Use SectionList, FlatList, and VirtualizedList for large data sets Clear active timers, which can lead to heavy memory leakage problems",
      },
    ],
    topic: "Performance",
  },
  {
    id: "what-causes-performance-issues-in-react-native",
    question: "What causes performance issues in React Native",
    answer: [
      {
        type: "paragraph",
        content:
          "Performance issues can appear when Native components and JS threads pass more often than required. You can solve most performance issues by minimizing passes over the bridge. The bridge is the intermediate communication point for the JS and Native threads.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "what-are-touchable-components-in-react-native-what-are-the-types-of-touc",
    question:
      "What are Touchable components in React Native? What are the types of Touchable components?",
    answer: [
      {
        type: "paragraph",
        content:
          "Touchable components capture tapping gestures. They can display feedback when a hand gesture is recognized. However, because they don't provide a default styling, It requires work to make them look nice. For instance, they can be implemented as user-friendly buttons. They should also explain the four types of touchable components: TouchableHighlight is used when creating a link or button on the web; the background of this component becomes dark when the user presses it. TouchableNativeFeedback creates a view to respond properly to touch. It only works for Android systems. TouchableOpacity is used to lower the opacity of a button. TouchableWithoutFeedback is used to tap functionality without displaying any feedback. What Is a flexbox? Name three important flexbox properties. A flexbox in React Native is a CSS display type design that helps developers create CSS layouts. Developers can use flexboxes to control elements' size, position, and spacing relative to each other and their parent elements. Flexboxes are great for responsive designs. Three important flexbox properties include: flexDirection(column:default): which allows developers to style React Native components in the primary axis. justifyContent: which states the distribution of the children's components toward the primary axis. Developers can use it to distribute the children's components at the center, start, end, and in space. alignItems: which is mostly for the secondary axis. It states the alignments of any children component inside another component toward the secondary axis.",
      },
      {
        type: "paragraph",
        content:
          "Publishing to Google Play Store . APK (Android Package)[Android Application Package] Definition: APK is the standard format for packaging Android applications for distribution and installation. Purpose: It's the file that gets installed on Android devices directly. AAB (Android App Bundle) Definition: AAB is a publishing format introduced by Google Play. It contains all the app's code and resources but is not installable directly. Purpose: It allows Google Play to generate optimized APKs for each user's device. IOS:IPA stands for iOS App Store Package",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "give-me-ways-to-increase-the-performance-of-react-native-apps",
    question: "Give me ways to increase the performance of react native apps?",
    answer: [
      {
        type: "paragraph",
        content:
          "Improving the performance of a React Native app involves a multi-pronged approach that addresses architecture, rendering efficiency, memory management, network usage, and build optimizations. Below are key performance optimization strategies along with detailed explanations and concrete recommendations:",
      },
      {
        type: "paragraph",
        content:
          "Discuss the use of 'CodePush' for over-the-air updates in React Native. CodePush is a cloud service by Microsoft (via App Center) that enables over-the-air (OTA) updates for React Native apps. It allows you to push JavaScript, images, and other assets to users' devices without going through the App Store or Play Store review process.",
      },
      {
        type: "paragraph",
        content:
          "How It Works When you use CodePush, only the JavaScript bundle and assets are updated \u2014 not native code. It wraps your React Native app and checks for updates on app launch or resume. If an update is available, it downloads and applies it\u2014either immediately, on the next app start, or manually, depending on how you configure it. Why It\u2019s Useful You can deploy bug fixes, features, or design tweaks instantly without waiting for app store approval. It helps in A/B testing or quickly rolling back a bad release. It's cross-platform and works for both Android and iOS with a unified deployment process.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "import codePush from 'react-native-code-push';\nlet codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };\n\nfunction App() {\n  // your main component\n}\nexport default codePush(codePushOptions)(App);",
      },
      {
        type: "paragraph",
        content:
          "You then push updates using the CodePush CLI: appcenter codepush release-react -a <owner>/<app-name> -d Production Limitations You can\u2019t update native code (e.g., new native modules, SDK upgrades). You must ensure your updates are compatible with the version of the app installed on users' devices. For iOS, Apple allows OTA updates, but you must avoid using it to add new features that require review. In Summary CodePush is ideal for delivering fast fixes and UI updates in React Native apps. It improves iteration speed, reduces dependency on app store timelines, and enhances user experience by keeping apps up to date automatically. Headless JS Headless JS is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music. Profiling Profiling is the process of analyzing an app's performance, resource usage, and behavior to identify potential bottlenecks or inefficiencies. It's worth making use of profiling tools to ensure your app works smoothly across different devices and conditions. Profiling is essential to understanding the runtime performance of the app through analysis that measures the memory or time complexity, frequency, and duration of function calls, etc. Getting all this information helps you to track down and provide proper solutions to keep your app healthy and your users engaged. 70% of the users will leave your app if the response to a given action takes too long. And once they do, they aren\u2019t likely to return ever again, which can seriously harm your business. For that reason alone, profiling your React Native application with native tools for iOS and Android may turn out a game changer \u2014 for both your organization and your user base.",
      },
      {
        type: "paragraph",
        content:
          "For iOS, Instruments is an invaluable tool, and on Android you should learn to use systrace. But first, make sure that Development Mode is OFF! You should see __DEV__ === false, development-level warnings are OFF, performance optimizations are ON in your application logs. Optimizing JavaScript loading Parsing and running JavaScript code requires memory and time. Because of this, as your app grows, it's often useful to delay loading code until it's needed for the first time. React Native comes with some standard optimizations that are on by default, and there are techniques you can adopt in your own code to help React load your app more efficiently. There are also some advanced automatic optimizations (with their own tradeoffs) that are suitable for very large apps. Recommended: Use Hermes\u200b Hermes is the default engine for new React Native apps, and is highly optimized for efficient code loading. In release builds, JavaScript code is fully compiled to bytecode ahead of time. Bytecode is loaded to memory on-demand and does not need to be parsed like plain JavaScript does. Recommended: Lazy-load large components\u200b If a component with a lot of code/dependencies is not likely to be used when initially rendering your app, you can use React's lazy API to defer loading its code until it's rendered for the first time. Typically, you should consider lazy-loading screen-level components in your app, so that adding new screens to your app does not increase its startup time.",
      },
      {
        type: "paragraph",
        content:
          "FlatList: FlatList also uses the principle of virtualization to optimize performance. It only loads the currently visible items on the screen, automatically removing items from memory when they are out of the user\u2019s view. As a result, this approach improves performance and reduces memory consumption.",
      },
      {
        type: "paragraph",
        content:
          "By passing extraData={selectedId} to FlatList we make sure FlatList itself will re-render when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any changes. keyExtractor tells the list to use the ids for the react keys instead of the default key property. getItemLayout is an optional optimization that allows skipping the measurement of dynamic content if you know the size (height or width) of items ahead of time. getItemLayout is efficient if you have fixed size items, for example:",
      },
      {
        type: "paragraph",
        content:
          "Ultimate Guide on Performance Optimization To keep your app running smoothly and responsively, you need to display a frame within 16.67 milliseconds \u2014 that\u2019s how long a modern mobile device takes to show 60 frames in one second. If you fail to do this, your app will perform poorly and the UI may seem to freeze. Use FlatList or SectionList to display large lists in React Native: If you have a large list, rendering all the items at once can cause a performance issue, but lazy loading with FlatList can improve performance.The FlatList component renders only the items that will be displayed on the screen and removes them when they are no longer displayed. This saves a lot of memory, making the app much faster: Delete all console statements Console statements are necessary for debugging JavaScript codes, but they are only meant for development purposes. These statements could cause serious performance issues in your React Native application if they are not removed before bundling. While you could install plugins such as babel-plugin-transform-remove-console to remove these statements from production, it is better to manually remove them if you don\u2019t want to add additional dependencies to your app. Cache expensive computations React introduced the memo HOC (Higher Order Component) in React v16.6 for preventing unnecessary re-rendering and the useMemo hook in React v16.8 for optimizing expensive computations. However, it is also possible to use the useCallback hook to do that. The major difference between useMemo and useCallback is that useMemo returns a memoized value, but useCallback returns a memoized callback. React.memo was introduced to functional components to serve the same purpose that React PureComponents serve in class components. memo prevents unnecessary re-rendering of a component and can help to optimize an application. However, like other optimization techniques, memo should only be used when it is necessary. In some cases, unnecessary re-rendering will not impact performance much. Adjust (resize and scale down) image sizes",
      },
      {
        type: "paragraph",
        content:
          "Images can contribute significantly to performance issues in React Native applications. They can also pose issues in web apps, but the browser has the capability of downloading and even scaling the images. In some cases, it may even cache them. But this is different with mobile apps. React Native ships with an Image component that can handle a single image very well, but it performs poorly with many large-sized images. The best way to solve this problem is by loading the exact size of the image you need. In other words, you should resize and scale down the image size before loading them to your app. Cache images locally Caching is another solution to image problems in a React Native app. It saves the images locally the first time they are loaded and uses the local cache in the subsequent requests. This could improve the app performance remarkably.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading:
              "Use Native Modules Wisely and Avoid the JS Bridge Bottleneck",
            content:
              "Problem: React Native communicates between JavaScript and native threads via a bridge. This communication is asynchronous and can become a bottleneck if overused. Solution: Use native modules for CPU-intensive tasks (e.g. image/video processing, heavy animations, complex calculations).",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Use libraries that utilize TurboModules and Fabric (new architecture in RN) for faster and more efficient native-bridge communication.",
      },
      {
        type: "paragraph",
        content:
          "Avoid excessive use of setTimeout, setInterval, and frequent state updates that lead to bridge overload.",
      },
      {
        type: "paragraph",
        content:
          "Example: If you\u2019re using libraries like react-native-video or react-native-image-picker, make sure they support TurboModules or are optimized natively.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Optimize Rendering via Memoization and Pure Components",
            content:
              "Problem: Unnecessary re-renders due to parent component updates. Solution: Use React.memo, useMemo, and useCallback to avoid recalculating values or recreating functions on every render. Break down large components and use PureComponent or functional equivalents. Avoid anonymous functions and inline styles inside render functions. const MemoizedComponent = React.memo(({ data }) => { return <Text>{data.name}</Text>; });",
          },
          {
            heading: "Avoid Anonymous Inline Functions and Styles",
            content:
              "Problem: Recreating new function or object instances on each render causes unnecessary reconciliation. Solution: Declare styles outside render methods.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Memoize functions with useCallback. // BAD <Button onPress={() => doSomething(item)} />",
      },
      {
        type: "code",
        language: "Gradle",
        content:
          "// GOOD\nconst handlePress = useCallback(() => doSomething(item), [item]);\n<Button onPress={handlePress} />\n5. Enable Hermes Engine\nProblem: The default JS engine (JavaScriptCore) has a higher memory and CPU overhead.\nSolution:\nUse Hermes, a lightweight JS engine optimized for React Native, which improves startup time, memory usage, and overall app performance.\nMake sure you're using React Native 0.64+ and enable Hermes in android/app/build.gradle and Podfile.",
      },
      {
        type: "paragraph",
        content:
          "Benefit: Significantly reduces TTI (Time to Interactive) and memory footprint. 6. Image Optimization Problem: Large or poorly managed images can cause memory spikes and frame drops. Solution: Use react-native-fast-image which uses native caching and performance optimizations.",
      },
      {
        type: "paragraph",
        content:
          "Compress images before bundling or at runtime using services like Cloudinary or TinyPNG.",
      },
      {
        type: "paragraph",
        content:
          "Avoid resizing images with inline styles; instead, serve appropriately sized images from the backend. 7. Reduce App Size with Proguard and Resource Shrinking Problem: Larger APKs/APKs affect download and startup time. Solution: Enable Proguard for Android to strip unused code.",
      },
      {
        type: "paragraph",
        content:
          "Use resConfigs, shrinkResources, and minifyEnabled in build.gradle.",
      },
      {
        type: "paragraph",
        content: "gradle",
      },
      {
        type: "paragraph",
        content:
          "release { minifyEnabled true shrinkResources true proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro' } 8. Code Splitting and Lazy Loading Problem: Loading too much JavaScript on app startup. Solution: Dynamically load non-essential screens or features using React.lazy or similar patterns.",
      },
      {
        type: "paragraph",
        content:
          "Use chunking to split JS bundles logically (this is more advanced and generally done via Metro configuration or native code splitting).",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Minimize Reconciliation by Controlling State Scope",
            content:
              "Problem: Global or shared state updates re-render large parts of the UI. Solution: Localize the state as much as possible.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Use Recoil, Zustand, or Jotai instead of Redux if only simple state management is needed.",
      },
      {
        type: "paragraph",
        content:
          "Use selectors and memoized state slices to avoid re-rendering unrelated components.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Performance Monitoring and Profiling",
            content:
              "Problem: Lack of visibility into performance bottlenecks. Solution: Use Flipper, React DevTools, and Perf Monitor to track re-renders and memory leaks.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Use why-did-you-render for identifying unnecessary re-renders during development.",
      },
      {
        type: "paragraph",
        content:
          "Profile using Xcode Instruments and Android Systrace for native performance issues.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "how-to-reduce-the-app-size-in-react-native",
    question: "How to reduce the app size in react native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Reducing the app size in a React Native project is critical, especially for production releases targeting emerging markets or users with low-end devices. As a senior developer, the focus should be on trimming the APK/IPA size without sacrificing app features or user experience. Here's a detailed breakdown of effective strategies, categorized by platform and scope.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Remove Unused Dependencies and Assets",
            content:
              "Problem: Many npm packages include native binaries or assets that significantly inflate build size. Solution: Audit package.json regularly using tools like depcheck or npm prune.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Check android/app/src/main/assets/ and ios bundles for large, unused assets.",
      },
      {
        type: "paragraph",
        content:
          "Remove unused fonts, icons, and images from the project. npx depcheck",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Use Code Splitting and Dynamic Imports (Where Possible)",
            content:
              "React Native doesn't have built-in code splitting like Webpack, but you can simulate it: Solution: Dynamically import screens or large components using React.lazy() or by splitting logic into native modules.",
          },
        ],
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const SettingsScreen = React.lazy(() => import('./screens/SettingsScreen'));",
      },
      {
        type: "paragraph",
        content:
          "Note: Full tree-shaking and lazy loading benefits require Metro bundler config tweaks or native-side optimizations. 3. Hermes Engine (JavaScript Engine Optimization) Problem: JavaScriptCore increases APK size (~6\u20138MB extra). Solution: Enable Hermes, which compiles JavaScript to bytecode ahead of time, reducing runtime and bundle size. 4. Image Optimization Problem: Large uncompressed images increase bundle size. Solution: Compress all images using TinyPNG, ImageOptim, or Squoosh.",
      },
      {
        type: "paragraph",
        content: "Use WebP format where supported (react-native-webp-support).",
      },
      {
        type: "paragraph",
        content:
          "Host large assets on a CDN and download them as needed. For Android: 5. Enable Proguard & Resource Shrinking Problem: Android builds often include unused Java classes and resources. Solution: Enable Proguard to shrink, obfuscate, and optimize the bytecode.",
      },
      {
        type: "paragraph",
        content:
          "Enable shrinkResources to remove unused resources (drawables, strings, layouts). Use App Bundles (AAB) Problem: APKs deliver all resources and code, even if unused on a specific device. Solution: Use Android App Bundles (AAB) to let Google Play generate optimized APKs per device. Fast Refresh Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. Fast Refresh is enabled by default, and you can toggle \u201cEnable Fast Refresh\u201d in the React Native Dev Menu. With Fast Refresh enabled, most edits should be visible within a second or two.",
      },
    ],
    topic: "Build & release",
  },
  {
    id: "how-fast-refresh-works",
    question: "How Fast Refresh works?",
    answer: [
      {
        type: "paragraph",
        content:
          "If you edit a module that only exports React component(s), Fast Refresh will update the code only for that module, and re-render your component. You can edit anything in that file, including styles, rendering logic, event handlers, or effects. If you edit a module with exports that aren\u2019t React components, Fast Refresh will re-run both that module, and the other modules importing it. So if both Button.js and Modal.js import Theme.js, editing Theme.js will update both components. Finally, if you edit a file that\u2019s imported by modules outside of the React tree, Fast Refresh will fall back to doing a full reload. You might have a file which renders a React component but also exports a value that is imported by a non-React component. Error Resilience of Fast Refresh If you make a syntax error during a Fast Refresh session, you can fix it and save the file again. The redbox will disappear. Modules with syntax errors are prevented from running, so you won\u2019t need to reload the app. If you make a runtime error during the module initialization (for example, typing Style.create instead of StyleSheet.create), the Fast Refresh session will continue once you fix the error. The redbox will disappear, and the module will be updated. If you make a mistake that leads to a runtime error inside your component, the Fast Refresh session will also continue after you fix the error. In that case, React will remount your application using the updated code. Limitations of Fast Refresh Fast Refresh tries to preserve local React state in the component you\u2019re editing, but only if it\u2019s safe to do so. Here\u2019s a few reasons why you might see local state being reset on every edit to a file: Local state is not preserved for class components (only function components and Hooks preserve state). The module you\u2019re editing might have other exports in addition to a React component. Sometimes, a module would export the result of calling a higher-order component like createNavigationContainer(MyScreen). If the returned component is a class, the state will be reset. Pro Tips about Fast Refresh Sometimes you might want to force the state to be reset, and a component to be remounted. For example, this can be handy if you\u2019re tweaking an animation that only happens on mount. To do this, you can add // @refresh reset anywhere in the file you're editing. This directive is local to the file, and instructs Fast Refresh to remount components defined in that file on every edit. Fast Refresh and Hooks\u200b When possible, Fast Refresh attempts to preserve the state of your component between edits. In particular, useState and useRef preserve their previous values as long as you don't change their arguments or the order of the Hook calls. Hooks with dependencies \u2014 such as useEffect, useMemo, and useCallback\u2014will always update during Fast Refresh. Their list of dependencies will be ignored while Fast Refresh is happening.",
      },
      {
        type: "paragraph",
        content:
          "Native Modules \u201cNative modules\u201d are pieces of Native code that are written in a native platform language, such as Java for Android or Objective-C for iOS, and can be called from JavaScript.",
      },
      {
        type: "paragraph",
        content:
          "Native Module System Native module system is a system by which JavaScript and \u201cNative modules\u201d communicate with each other. The Native module system allows your JavaScript code to use native features and libraries that are not available in JavaScript, such as camera, sensors, or encryption. There are 2 types of Native Module System in React Native OLD native module system (aka: \u201cBridge based Native Module system\u201d or \u201cLegacy native module system\u201d that uses JSON data Serialization). New native module system (aka: Turbo Module system that uses JSI. JSI (JavaScript Interface) is written in C++). Typed JavaScript code Typed JavaScript code is code that is written in JavaScript (using Flow or Typescript), but with some extra information about the types of the variables and functions. Types are labels that tell you what kind of data a variable or a function can hold or return. For example, a type can be a number, a string, a Boolean, an array, an object, or a function. Typed JavaScript code can help you avoid errors and bugs caused by incorrect or missing types. For example, if you try to add a number and a string together, typed JavaScript code will warn you that this is not possible. Interface elements Interface elements are components or modules that can be used in a React Native app. A component is a part of the user interface (UI), such as a button, a text, or an image. A module is a piece of code that can perform some logic or functionality, such as accessing the camera, the sensors, or the encryption libraries. An interface element has an \u201cinterface\u201d and \u201can implementation\u201d. The \u201cinterface\u201d is a set of properties and methods that define how it can be used and interacted with. The \u201cimplementation\u201d is the code that actually performs the logic and functionality of the element.",
      },
      {
        type: "paragraph",
        content:
          "\u2014--------------------------------------Old Architecture\u2014----------------------------------------",
      },
      {
        type: "paragraph",
        content:
          "In a nutshell, each react native app is composed of two main parts The JavaScript code and The native code. The code is executed over three threads: The JavaScript thread: to run JS Bundle with specific JavaScript engine The Native/UI thread: it runs the native code and handles any user interface operation like rendering or gesture events. The Shadow thread: which calculates the position of native elements in the layout.",
      },
      {
        type: "paragraph",
        content:
          "The relationship between the JavaScript and Native threads is mediated by a component called the Bridge.",
      },
      {
        type: "paragraph",
        content:
          "OLD Architecture drawbacks Although React Native apps are fast enough, they still lag behind native solutions in terms of performance. The reason lies with the architecture used. The bridge in the old architecture works by serializing all data that must be passed from JavaScript to native. The Bridge have some limitations: It is asynchronous: one layer submits data to a bridge and waits for the data to be processed by the other layer, even when it\u2019s unnecessary. Instead, when JavaScript wants to talk to native code (e.g., to access the camera or GPS), it sends a message across the bridge, and then continues executing without waiting. The native side processes the request and eventually sends a response back to JavaScript \u2014 also through the bridge. This process introduces a delay and can\u2019t be used for real-time or blocking operations, because the two sides operate on separate threads and queues. So, \u201casynchronous bridge\u201d simply means the JS and native sides send messages back and forth, but they don\u2019t wait for each other, which is good for performance but can be tricky for timing-sensitive operations. It is single threaded: JavaScript used to be single-threaded, so computation that takes place has to be performed on that single thread. Overhead costs: each time one layer communicates with another, it must serialize the data. The other layer must deserialize it. JSON was chosen for its simplicity and human readability, despite being a lightweight format it has a cost associated with it.",
      },
      {
        type: "heading",
        content: "Synchronous and Asynchronous",
      },
      {
        type: "paragraph",
        content:
          "Synchronous Definition: Tasks are executed one at a time, in sequence. Each task waits for the previous one to finish before starting. Blocking: If one task takes time (like fetching data), it blocks the next one.",
      },
      {
        type: "paragraph",
        content:
          "Asynchronous Definition: Tasks are executed independently, not necessarily in order. Non-blocking: Allows other tasks to run while waiting for something (e.g., API response). Often uses callbacks, Promises, or async/await.",
      },
      {
        type: "paragraph",
        content:
          "Old Architecture The old React Native architecture refers to the framework's original design, which was the foundation for app development until the introduction of the New React Native Architecture (Fabric and TurboModules). The old architecture served well for several years but had certain limitations that the newer architecture sought to address. Key Features of the Old Architecture: Bridge-Based Communication:",
      },
      {
        type: "paragraph",
        content:
          "The old architecture relied on a bridge to facilitate communication between JavaScript (JS) and native platforms (Android and iOS). Data passed over the bridge was serialized as JSON and sent asynchronously between the JavaScript thread and native threads. While effective, the asynchronous nature introduced performance bottlenecks for certain use cases like animations or complex interactions.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-does-the-asynchronous-bridge-affect-the-performance",
    question: "How does the asynchronous bridge affect the performance?",
    answer: [
      {
        type: "callout",
        tone: "caution",
        title: "Legacy architecture context",
        content:
          "The asynchronous Bridge described here belongs to React Native\u2019s legacy architecture. The New Architecture removes React Native\u2019s dependency on that Bridge and uses JSI for JavaScript-to-native communication.",
      },
      {
        type: "paragraph",
        content:
          "In React Native, asynchronous operations over the bridge can significantly affect performance, especially when they involve large data transfers or frequent back-and-forth communication between the JavaScript thread and the native side. The bridge in React Native is an abstraction layer that lets JavaScript communicate with native modules (written in Java/Kotlin or Objective-C/Swift). While it's powerful, it\u2019s not without limitations\u2014particularly when it's overloaded. When you make an asynchronous call from JS to native (or vice versa), the data must be serialized (converted to a transportable format), sent over the bridge, then deserialized on the other side. This process introduces latency. If too many async operations are queued up over the bridge (e.g., during image processing, animations, or continuous sensor readings), it creates bottlenecks. The JS thread can also become congested if it\u2019s spending time handling bridge responses instead of UI updates, leading to UI jank, missed frames, or delayed interactions. This becomes more noticeable on lower-end devices. In essence, frequent or heavy asynchronous bridge communication can degrade performance by choking the communication pipeline and slowing down the UI thread. This is why libraries like Reanimated 2 and MMKV bypass the bridge for critical operations, executing logic directly on the native side. Native Modules:",
      },
      {
        type: "paragraph",
        content:
          "Native functionalities were exposed to JavaScript via Native Modules. Developers could write native code in Java/Objective-C (or Kotlin/Swift) to extend functionality, which the bridge then connected to JavaScript. The manual nature of integration sometimes added development overhead and complexity. Rendering Pipeline:",
      },
      {
        type: "paragraph",
        content:
          "UI components were managed via React components, which communicated with the native view hierarchy through the bridge. Updates to UI components went through a batch process, which could lead to visible lag during heavy UI updates. Threading Model:",
      },
      {
        type: "paragraph",
        content:
          "JavaScript operated on its own thread (JavaScript thread). Native operations happened on separate threads (e.g., UI thread, native modules thread). Synchronization between these threads relied heavily on the bridge, adding latency in scenarios requiring rapid updates. Limitations of the Old Architecture: Performance Bottlenecks:",
      },
      {
        type: "paragraph",
        content:
          "The asynchronous bridge could slow down interactions requiring real-time feedback, like gestures and animations. Serialization and deserialization of data across the bridge added overhead. Complex Debugging:",
      },
      {
        type: "paragraph",
        content:
          "Errors related to the bridge or native modules were often hard to trace, making debugging complex. Limited Scalability:",
      },
      {
        type: "paragraph",
        content:
          "Applications with heavy reliance on native features or intensive UI interactions sometimes faced challenges scaling due to the communication model. Outdated Paradigms:",
      },
      {
        type: "paragraph",
        content:
          "As React Native matured, certain design decisions of the old architecture became less aligned with modern mobile app requirements. Transition to the New Architecture: React Native introduced a New Architecture to address these challenges: Fabric: A new rendering engine to handle UI updates more synchronously and efficiently. TurboModules: A replacement for Native Modules to enable lazy loading and improved performance. JSI (JavaScript Interface): Eliminates the bridge in favor of direct calls between JavaScript and native code, significantly reducing overhead. Why the Old Architecture Still Matters: Although React Native is transitioning, many existing apps and libraries still use the old architecture. Developers need to understand its mechanics for maintaining legacy codebases or gradually migrating to the new architecture. Hybrid Apps vs. Native Apps (Brief) Development: Native: Built for a specific platform using platform-specific languages (e.g., Swift for iOS, Kotlin for Android). Hybrid: Built using web technologies (HTML, CSS, JavaScript) and run inside a native container. Performance: Native: High performance, optimized for the platform. Hybrid: Slower, as it relies on WebView for rendering.",
      },
      {
        type: "paragraph",
        content:
          "\u2014--------------------------------------New Architecture\u2014---------------------------------------- The New Architecture dropped the concept of The Bridge in favour of the JavaScript Interface (JSI), with new components, which increased performance (the new architecture is available starting from RN 0.68). All components of New Architecture Let\u2019s know all the name of the components of New Architecture Codegen (Native code generator) JSI (JavaScript Interface) Hermes Engine (A JS engine that runs JS code in devices) Turbo Module (It Implements Native Module by using JSI & Native Code) Fabric (Native UI renderer/ New render engine) Fabric renderer (The new render pipeline creator) Yoga (Cross platform layout engine. It was also in OLD architecture)",
      },
      {
        type: "diagram",
        title: "Legacy Bridge and the New Architecture",
        nodes: [
          {
            label: "JavaScript",
            detail: "React app and business logic",
          },
          {
            label: "Legacy Bridge",
            detail: "Async messages and serialization",
          },
          {
            label: "Native platform",
            detail: "Native modules and host views",
          },
        ],
        note: "Modern React Native uses JSI for direct JavaScript/native interop; this is not a claim that every operation should be synchronous.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "About the New Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "when-do-we-have-to-enable-codegen-turbo-modules-and-hermes-engine-in-rea",
    question:
      "When do we have to enable codegen,turbo modules and hermes engine in react native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Enabling Codegen, TurboModules, and the Hermes engine is essential when you want to opt into React Native\u2019s New Architecture, which unlocks better performance and a modern infrastructure. Hermes Engine When to enable: Hermes is already the default JavaScript engine starting from React Native 0.70. You only need to manually enable it if: You're on a version before 0.70, or You want to ensure it's turned on for performance or size benefits. Why: Faster app startup Lower memory usage Smaller APK/IPA sizes AOT (Ahead-of-Time) compilation TurboModules When to enable: Enable TurboModules if you are adopting the New Architecture. They are part of that system. You should enable TurboModules: When you're writing or using modern native modules that benefit from lazy loading and better native bridge performance. When you want reduced memory usage and faster JS-native communication. TurboModules can only be used with: Hermes enabled Codegen set up correctly A compatible RN version (recommended: RN 0.70+) Codegen When to enable: Codegen is required if you are building custom native modules with TurboModules or Fabric components. You must enable Codegen if: You are defining new native modules/components using Flow or TypeScript types. You\u2019re working in the New Architecture and want to avoid manual native binding boilerplate. Why: Automatically generates native code based on JS/TS type definitions Prevents runtime bridge bugs Speeds up development of native modules",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "so-when-should-you-enable-all-three",
    question: "So, when should you enable all three?",
    answer: [
      {
        type: "paragraph",
        content:
          "You enable Hermes, TurboModules, and Codegen together when: You're on React Native 0.70+ You want to adopt the New Architecture You\u2019re looking to maximize performance and take advantage of features like Fabric and Concurrent React How to Enable (High-Level) Hermes: In android/app/build.gradle: gradle project.ext.react = [ enableHermes: true, ]",
      },
      {
        type: "paragraph",
        content:
          'TurboModules & Codegen: Enable new architecture flags in gradle.properties: newArchEnabled=true Setup your module with codegenConfig in package.json, like: "codegenConfig": { "name": "YourModuleName", "type": "modules", "jsSrcsDir": "src" } Implement TurboModules or Fabric Components with correct JS/Flow/TS types.',
      },
      {
        type: "paragraph",
        content:
          "New Architecture two Phases The new Architecture of React Native completes its full cycle in 2 phases. Phase 1: App Build time Phase 2: App Run time Phase 1: App Build time When a developer turns on both Codegen and Turbo Module in their app and then gives a build command just before production deployment to create an APK for Android or an IPA for iOS device, the following steps are done from the new architecture flow: The Build command compiles the JavaScript code into bytecode. It also creates native code during the build time by using Codegen. The bytecode and native code are then included in the app package, which can be installed on the device. Remember, Codegen only works in App Build time. Not in App Run time.",
      },
      {
        type: "paragraph",
        content:
          "Phase 2: App Run time When a user launches the app, the rest of the work happens from the new architecture flow of the React Native app. Mainly two big components run when the app has been launched by any user on their device: Turbo Module component Fabric component All the other sub components of React Native\u2019s new architecture also come inside this \u201cPhase 2: App Run time\u201d. These are \ud83d\udc47 Hermes engine JSI (JavaScript Interface) Native Module Yoga Fabric Renderer Remember once again: Codegen already ran in \u201cPhase 1: App Build time\u201d. At the end of the Article, we will see the full flow of how the New Architecture works. Also, we will see the relation between each component of new architecture. For now, let\u2019s understand each component of New Architecture closely \ud83d\udc47\ud83d\udc47",
      },
      {
        type: "paragraph",
        content:
          "\u2014--------------------------------------------------->>>>>>>------------------------------------------- Codegen (Native Code Generator) Codegen specially do these 2 jobs in new architecture of React Native Static type checking Generate \u201cNative code\u201d Let\u2019s understand these 2 more clearly below. Static type checking JavaScript is a dynamically typed (you don\u2019t need to define the type of a variable) language, and JSI is written in C++, which is a statically typed (you must have to define variable type) language. Consequently, there are some communication issues between the two (JS and C++). That\u2019s why the new architecture includes a static type checker called CodeGen. It solves the type related communication issue between JavaScript & C++. Remember that Codegen makes ready Native Code for JSI. Codegen doesn't use JSI. Generate \u201cNative code\u201d Codegen is responsible for generating Native Code for 2 big components of New Architecture. These are: The Turbo Module component and The Fabric component Both of these 2 big components of New Architecture need Native Code that should be generated by Codegen. Let\u2019s understand how Codegen generate Native Code \ud83d\udc47 You write \u201ctyped JavaScript code\u201d to define the Native components or Native modules that you want to use in your app. Codegen creates \u201cnative code\u201d for each platform as output from your written \u201ctyped JavaScript code\u201d. These generated \u201cnative code\u201d can communicate with \u201ctyped JavaScript code\u201d directly, without using the bridge. As a result Codegen makes the communication between JavaScript and native code faster and more reliable, since it avoids using the bridge. CodeGen generates native code at build time instead of run time. By using Codegen, you don\u2019t have to write the \u201cnative code\u201d yourself. You just have to write the \u201ctyped JavaScript code\u201d that defines the interface of your component or module. Codegen will do the rest for you. The advantage of using Codegen is that it reduces the amount of work required for creating and maintaining native modules and components.",
      },
      {
        type: "paragraph",
        content: "JSI (JavaScript Interface)",
      },
      {
        type: "paragraph",
        content:
          "JavaScript Interface (JSI) is the deepest part of the New Architecture of React Native and it is being used by all of these components of New Architecture\ud83d\udc47 Hermes Engine (A JS engine that runs JS code in devices) Turbo Module (It Implements Native Module by using JSI & Native Code) Fabric (Native UI renderer/ New render engine) We will see about these in next sections. But for now let\u2019s understand JSI first clearly. Then we will move to other parts of the New Architecture. JSI (JavaScript Interface) was written in C++. It replaced the bridge from the OLD architecture and provided a direct, native interface to JavaScript objects and functions. This idea unlocks several benefits \ud83d\udc47 Concurrency: JavaScript can invoke functions that are executed on different threads. Synchronous execution: the capability to execute synchronously those functions that should not have been asynchronous in the first place. Lower overhead: The New Architecture does not need to serialize or deserialize data anymore, which eliminates the need for serialization taxes. Code sharing: The introduction of C++ has enabled the development of platform-independent code, which can be shared easily between platforms. Type safety: To ensure that JavaScript can properly invoke methods on C++ objects, a layer of code has been added to the language. This code is generated starting from some JavaScript specifications that must be typed through Flow or TypeScript. Lightweight: JSI is a lightweight general-purpose JavaScript interface, written in C++, that can be used by the JavaScript engine to directly invoke methods in the native realm. Decouple the interface from the JS Engine: The OLD architecture uses the JSC (JavaScriptCore) Engine. The Bridge was only compatible with this particular JSC engine, however the new architecture will decouple the interface from the Engine, enabling the use of other JavaScript Engines like Chakra, v8 and Hermes, etc.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-can-javascript-call-native-methods-with-jsi",
    question: "How can JavaScript call native methods with JSI?",
    answer: [
      {
        type: "paragraph",
        content:
          "Through the JSI, Native methods will be exposed to JavaScript via C++ objects. These objects can be referenced by JavaScript code, thus can be invoked directly. This is similar to the web, where JavaScript code can reference any DOM element, and call methods on that element. For Example: when you write: const container = document.createElement(\u2018div\u2019);",
      },
      {
        type: "paragraph",
        content:
          "Here, the container is a JavaScript variable that holds a reference to a DOM element. When we call any method on the \u201ccontainer\u201d variable, it will in turn call the method on the DOM element. Similarly, JSI works in the same way. The JSI will allow JavaScript code to hold a reference to Native Modules, so JavaScript can call methods on this reference directly. To Sum it up, JSI will allow using other JavaScript engines and will allow for complete interoperability between the threads. One of the main advantages of the JSI is that it\u2019s written in C++. This means that React Native can target a wide range of devices, including smart TVs, watches and other devices. \u275d JSI (JavaScript Interface) opens the door of Single Interface for All Platforms by C++ \u275e",
      },
    ],
    topic: "Architecture",
  },
  {
    id: "how-did-jsi-synchronously-make-it-great",
    question: "How did JSI synchronously make it great?",
    answer: [
      {
        type: "paragraph",
        content:
          "You might be wondering how JSI synchronous made it great, since asynchronous is the best like JS behaviour. In asynchronous, we don\u2019t need to wait for a task to complete. It means that asynchronous is more performant than synchronous. But how synchronous made it great JSI? Well, the answer is that JSI does not make everything synchronous, it just gives the option to do so when needed. Asynchronous calls are still preferred for most cases, because they don\u2019t block the UI thread or the JS thread. However, there are some situations where synchronous calls are necessary or beneficial, such as: Initializing native modules: some native modules need to be initialized before they can be used, and this can cause delays or crashes if done asynchronously. With JSI, native modules can be initialized synchronously when the app starts, avoiding these issues. Accessing constants: some native modules expose constants that are used by the JS code, such as device information or platform-specific values. With JSI, these constants can be accessed synchronously from JS, without having to wait for a bridge message. Calling synchronous native methods: some native methods need to return a value immediately to the JS code, such as accessing the clipboard or getting the current location. With JSI, these methods can be called synchronously from JS, without having to use callbacks or promises. As you can see, JSI synchronous made it great by allowing more flexibility and performance for React Native apps.",
      },
      {
        type: "paragraph",
        content:
          "Hermes Engine Hermes, a JavaScript engine that runs on devices when a user launches an App on his device. Hermes has these benefits in short: It improves the app size It improves the memory usage, and It improves the start-up time of the app. Here is the flow of Hermes. How Hermes works at the time of when a user launches the app on his device. A developer builds \u201cbytecode\u201d of the React Native project before production deployment. Then , when any user launches the app in his device then Hermes loads that \u201cbytecode\u201d file which contains the JavaScript code & \u201cNative code\u201d of the app (\u201cNative code\u201d was generated by Codegen). The bytecode file is a simpler and more efficient form of code that can be executed directly by Hermes, without needing to be interpreted or compiled again. Hermes handles the logic, the data, and the events of the app, such as fetching data from an API, updating the state, or responding to user input. Hermes communicates with the \u201cNative code\u201d of the app using a feature called JavaScript Interface (JSI). JSI allows Hermes to access native functions and objects directly, without using the bridge. Hermes updates the user interface of the app using Fabric, a new rendering system for React Native.",
      },
    ],
    topic: "Architecture",
  },
  {
    id: "is-hermes-a-good-choice",
    question: "Is Hermes a good choice?",
    answer: [
      {
        type: "paragraph",
        content:
          "Since the introduction of Hermes as an option in JavaScript compiling engine in React Native 0.64, the JavaScript engine has seen tremendous support from the React Native developer community, especially since it is more performant. Hermes is not just good for React Native applications, but also reduces bundle size and load time along with a GUI to visualize the performance metrics of your app during development. This feature helps developers learn how their applications will perform after release.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "does-hermes-make-react-native-faster",
    question: "Does Hermes make React Native faster?",
    answer: [
      {
        type: "paragraph",
        content:
          "According to research conducted by maintainers of React Native, Hermes is the most performant JavaScript engine for building React Native applications. The study evaluated three metrics (Time to Interactive TTI, binary size, and Memory consumption) to determine which engine performs best. TTI is the duration between when an app is launched and when users can interact with it. Binary size is the size of the bundled React Native application in APK (Android) or IPA (iOS) Memory consumption is the size of memory used when running the app.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "how-does-hermes-improve-react-native-performance",
    question: "How does Hermes improve React Native performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "Let\u2019s discuss the benefits of using Hermes as your JavaScript engine for React Native applications. Pre-compilation: Hermes pre compiled app source code to bytecode before starting up. Faster TTI: Hermes reduces the TTI, resulting in a smooth user experience Smaller app bundle size: The size of applications compiled with Hermes is smaller than those built with other JavaScript engines.",
      },
      {
        type: "paragraph",
        content:
          "Turbo Modules Turbo Modules is just a Native Module system which replaced the OLD Native Module system. The OLD Native Module system is also known as Bridge-based native module system or Legacy native module system. The OLD native module system used the technique of JSON data serialization which was slow in performance. The New Native module system is also known as \u201cTurbo Module\u201d which uses JSI technology instead of JSON data serialization. JSI (JavaScript Interface) was written in C++. Turbo Module is a new way of implementing \u201cNative modules\u201d in React Native. It implements Native Module by using JSI & \u201cNative Code\u201d that was generated by Codegen. In New Architecture, Turbo Module introduced Lazy Loading for Native Modules (e.g. Bluetooth, Geo Location and File Storage) to load when a user launches an app. In OLD architecture all Native Modules used in the app must be initialized in the start-up, even if the user does not require one of these modules \ud83e\udd74. Turbo Modules allow your JavaScript code to hold references of these Native modules. As a result a particular Native Module will be loaded only when the Module is required. This improved app start-up time \ud83d\udcaf. For the above reasons, Turbo Modules are called a new version of Native Modules in New Architecture. As in the new architecture, JavaScript uses JSI to communicate with Native Modules, so it will help you by reducing the amount of work required for porting your app to multiple platforms. This is because JSI was written in C++. C++ is a language that can run on multiple platforms, such as Android, iOS, Windows, or macOS. It is also a language that can interact with other native languages, such as Java or Objective-C, through bindings. This means that you can write your \u201cNative module\u201d logic in C++, and then use bindings to expose it to the other native languages. This way, you can share the same implementation across different platforms, and only write the bindings for each platform.",
      },
      {
        type: "paragraph",
        content:
          "Fabric (New Rendering Engine) Fabric is the UIManager that will be responsible for rendering the UI in devices. The difference now is that instead of communicating with JavaScript through a bridge, Fabric exposes its functions via JavaScript so the JS side and Native side (vice-versa) can communicate directly through ref functions. passing data between sides will be performant. Fabric uses JSI to communicate with Hermes and native code, without using the bridge. Fabric is a new rendering system for React Native, seeking to improve the interoperability of the framework with host platforms (the platform of Native Side. Ex: Android or iOS), Improving communication between JavaScript and the native threads. Improved interoperability between React Native and host views A host view is a tree representation of the UI elements in the host platform (the device from which the app was launched by the user. Ex: Android or iOS). The C++ core shared by different host platforms (Ex: Android, iOS, MacOS, TvOS, etc) improves interoperability between React Native and the host and enables React Native to render surfaces synchronously. In the OLD (legacy) architecture, the layout was asynchronous, causing a layout \u201cjump\u201d issue when embedding a React Native rendered view. Improvements in data fetching Data fetching in applications has become easier with the integration of React Suspense. Other new features available in React 18 are now enabled in the Fabric renderer, such as Concurrent Features, which keeps the UI of our applications responsive during expensive state transitions.",
      },
      {
        type: "paragraph",
        content:
          "The Fabric render pipeline (three phases) The Fabric Renderer is React Native\u2019s new rendering system. It is a conceptual evolution of the legacy (old) render system and is designed to unify more render logic in C++, improve interoperability with host platforms (Ex: Android or iOS), and unlock new capabilities for React Native. The Fabric render pipeline occurs in three phases: The Render phase The Commit phase The Mount phaseI have created a Flow chart of how the Fabric Render Pipeline works. Look a bit into it \ud83d\udc47. Don\u2019t be too much into it now as we are going to discuss in details about these 3 phase below \ud83d\ude80 Flow of New Architecture The app starts by loading the bytecode file that contains the JavaScript code of the app. The bytecode file is a simpler and more efficient form of code that can be executed directly by Hermes, a JavaScript engine that runs on Android devices & iOS devices. Hermes improves the app size, the memory usage, and the start-up time of the app.",
      },
      {
        type: "paragraph",
        content:
          "Then, the JavaScript code of the app communicates with the native code of the app using a feature called JavaScript Interface (JSI), which allows direct communication between JavaScript and native code, without using the bridge. The bridge is a mechanism that sends messages and data between JavaScript and native code, which can be slow and inefficient. JSI improves the performance and interoperability of the app, as well as enables new features that are not possible with the bridge.",
      },
      {
        type: "paragraph",
        content:
          "Then, the native code of the app implements native modules using a feature called Turbo Module, which is a new way of creating native modules that can be accessed from JavaScript. Turbo Module also uses JSI to communicate with JavaScript code, without using the bridge. Turbo Module improves the performance and reliability of native modules, as well as simplifies their development and maintenance.",
      },
      {
        type: "paragraph",
        content:
          "Then, the JavaScript code of the app defines user interface elements using React components, which are pieces of code that describe how a part of the app should look and behave. React components are translated into native code using a feature called Fabric, which is a new rendering system for React Native. Fabric also uses JSI to communicate with JavaScript and native code, without using the bridge. Fabric improves the speed and responsiveness of user interface updates, as well as integrates better with native features. Then, Fabric uses a library called Yoga to calculate the layout of user interface elements, such as their position, size, alignment, etc. Yoga is a cross-platform layout engine that implements Flex box, a CSS standard for web development. Yoga ensures that user interface elements are consistent across different devices and platforms.",
      },
      {
        type: "paragraph",
        content:
          "Finally, Fabric uses a component called Fabric Renderer to draw user interface elements on the screen, using native graphics APIs such as Core Animation on iOS or SurfaceView on Android. Fabric Renderer handles animations, gestures, accessibility, and other features that make user interface elements interactive and engaging. Conclusion The new architecture in React Native is an upgrade that aims to improve the performance and development of React Native apps. It replaces the old communication mechanism between JavaScript and native code, called The Bridge, with a new one called JavaScript Interface (JSI). This allows direct access to native objects from JavaScript and vice versa, without serialization or queues. The new architecture also introduces a new way of managing components called minimal persistence, which reduces the memory usage and simplifies the code. Additionally, it adopts a new JavaScript engine called Hermes, which is optimized for React Native and offers faster startup time, lower memory footprint and smaller app size. The new architecture is composed of two main parts: the new native module system (Turbo Modules) and the new renderer (Fabric). Turbo Modules are a more efficient way to create native modules that leverage platform-specific APIs, while Fabric is a re-implementation of the React Native UI layer that supports concurrent rendering, asynchronous layout and smooth animations.",
      },
      {
        type: "paragraph",
        content:
          "The new architecture of React Native improves the performance of React Native apps by reducing the overhead of communication between JavaScript and native code, and by enabling concurrent rendering of multiple screens. It enhances the stability of React Native apps by avoiding crashes and memory leaks caused by the old bridge-based architecture, and by providing better error handling and debugging tools. It improves the developer experience of React Native apps by simplifying the creation and integration of native modules, and by supporting modern JavaScript features and libraries.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "what-is-native-modules",
    question: "What is Native Modules?",
    answer: [
      {
        type: "paragraph",
        content:
          "Native Modules in React Native are a way to bridge the gap between JavaScript and native platform APIs (Android/Java or iOS/Objective-C/Swift). React Native code runs in a JavaScript thread, but sometimes, the functionality you need isn't available in JavaScript and can only be achieved through native platform APIs\u2014for example, accessing Bluetooth, sensors, file system, or background services.This is where Native Modules come in. They allow you to write platform-specific code (Java for Android, Swift/Obj-C for iOS) and expose that code as a module that can be called from JavaScript as if it were a regular function. Behind the scenes, React Native handles the communication between the JavaScript thread and the native thread through a bridge. Let\u2019s take an example: If you want to access the device's battery level but React Native doesn't provide that feature out of the box, you could write a native module for Android in Java that uses Android\u2019s BatteryManager API, then expose that to React Native so you can call something like BatteryModule.getBatteryLevel() in your JavaScript code. Native Modules Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Google Pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing. The NativeModule system exposes instances of Java/Objective-C/C++ (native) classes to JavaScript (JS) as JS objects, thereby allowing you to execute arbitrary native code from within JS. While we don't expect this feature to be part of the usual development process, it is essential that it exists.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "explain-to-me-how-to-implement-native-modules-and-how-to-get-access-to-j",
    question:
      "Explain to me how to implement native modules and how to get access to javaScript?",
    answer: [
      {
        type: "paragraph",
        content:
          "To implement a native module in React Native, you start by writing some native code in the platform-specific language\u2014Java or Kotlin for Android, Objective-C or Swift for iOS. This native code performs tasks that the JavaScript side cannot do directly, like interacting with low-level device features or using third-party SDKs that aren't available in the JavaScript ecosystem. Once you have your native functionality, you expose it to the JavaScript side using a bridge provided by React Native. This bridge is the layer that allows communication between the native side and the JavaScript thread. On Android, you do this by creating a class that extends a specific base class and annotating it so React Native can recognize and register it as a module. On iOS, you register the module using macros or Swift annotations. After this setup, you create a JavaScript wrapper that imports and uses the native module. From JavaScript's point of view, it's just a regular function call, but behind the scenes, it's sending a message through the bridge to invoke your native code. The response can be sent back as a callback, a Promise, or through event emitters. As for whether the native module gets access to JavaScript\u2014no, it doesn't directly access the JavaScript code or variables. Instead, it listens for commands or method calls from JavaScript, executes native logic, and then sends results back. The communication is always initiated from JavaScript unless the native module is emitting events that JavaScript has subscribed to. There\u2019s no direct way for native code to read JavaScript state or invoke arbitrary JS functions unless it does so through the defined interfaces like callbacks or event emitters. So the native code acts more like a server that responds to requests and occasionally emits events\u2014it doesn\u2019t \"see\" the JS runtime directly. Example of creating one Native Modules There are different ways to write a native module for your React Native application: Creating a local library that can be imported in your React Native application. Directly within your React Native application's iOS/Android projects As an NPM package that can be installed as a dependency by your/other React Native applications. [Imagine that you want to access the iOS/Android native calendar APIs from JavaScript within a React Native application in order to create calendar events. React Native does not expose a JavaScript API to communicate with the native calendar libraries. However, through native modules, you can write native code that communicates with native calendar APIs. Then you can invoke that native code through JavaScript in your React Native application.] Create a Calendar Native Module In the following guide you will create a native module, CalendarModule, that will allow you to access Android\u2019s calendar APIs from JavaScript. By the end, you will be able to call CalendarModule.createCalendarEvent('Dinner Party', 'My House'); from JavaScript, invoking a Java/Kotlin method that creates a calendar event. The first step is to create the (CalendarModule.java or CalendarModule.kt) Java/Kotlin file inside android/app/src/main/java/com/your-app-name/ folder (the folder is the same for both Kotlin and Java). This Java/Kotlin file will contain your native module Java/Kotlin class. Module Name: All Java/Kotlin native modules in Android need to implement the getName() method. This method returns a string, which represents the name of the native module. The native module can then be accessed in JavaScript using its name. For example, in the below code snippet, getName() returns \"CalendarModule\". Export a Native Method to JavaScript Next you will need to add a method to your native module that will create calendar events and can be invoked in JavaScript. All native module methods meant to be invoked from JavaScript must be annotated with @ReactMethod Register the Module Once a native module is written, it needs to be registered with React Native. In order to do so, you need to add your native module to a ReactPackage and register the ReactPackage with React Native. During initialization, React Native will loop over all packages, and for each ReactPackage, register each native module within. React Native invokes the method createNativeModules() on a ReactPackage in order to get the list of native modules to register. For Android, if a module is not instantiated and returned in createNativeModules it will not be available from JavaScript. To add your Native Module to ReactPackage, first create a new Java/Kotlin Class named (MyAppPackage.java or MyAppPackage.kt) that implements ReactPackage inside the android/app/src/main/java/com/your-app-name/ folder: To register the CalendarModule package, you must add MyAppPackage to the list of packages returned in ReactNativeHost's getPackages() method. Open up your MainApplication.java or MainApplication.kt file, which can be found in the following path: android/app/src/main/java/com/your-app-name/. Locate ReactNativeHost\u2019s getPackages() method and add your package to the packages list getPackages() returns.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "how-can-we-pass-data-from-java-kotlin-to-javascript",
    question: "How can we pass data from Java/Kotlin to JavaScript?",
    answer: [
      {
        type: "paragraph",
        content:
          "Native modules also support a unique kind of argument: a callback. Callbacks are used to pass data from Java/Kotlin to JavaScript for asynchronous methods. They can also be used to asynchronously execute JavaScript from the native side. You can invoke the callback in your Java/Kotlin method, providing whatever data you want to pass to JavaScript. Please note that you can only pass serializable data from native code to JavaScript. If you need to pass back a native object you can use WriteableMaps, if you need to use a collection use WritableArrays. It is also important to highlight that the callback is not invoked immediately after the native function completes. Below the ID of an event created in an earlier call is passed to the callback. Promises Native modules can also fulfill a Promise, which can simplify your JavaScript, especially when using ES2016's async/await syntax. When the last parameter of a native module Java/Kotlin method is a Promise, its corresponding JS method will return a JS Promise object.",
      },
    ],
    topic: "App development",
  },
  {
    id: "what-is-a-metro-bundler",
    question: "What is a metro bundler?",
    answer: [
      {
        type: "paragraph",
        content:
          "Metro Bundler is the JavaScript bundler used by React Native to build and serve your JavaScript code. It's a tool that takes all your app's JavaScript files, including modules and assets, and compiles them into a single optimized bundle that can run on a mobile device. When you run a React Native app with npx react-native start, Metro starts up in the background. It watches your project files, compiles any JSX or modern JavaScript syntax using Babel, resolves all your imports (including node modules), and bundles everything together. It also provides live reloading and fast refresh so that changes you make during development show up immediately in your app. Metro is optimized for React Native. Unlike Webpack, which is used for web apps, Metro is designed to handle the specific needs of mobile apps\u2014like fast startup times, support for the React Native module system, and asset loading for images and fonts. It runs a local development server that your app connects to while running in development mode, but in production, it generates a static JS bundle that\u2019s shipped with your app.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "what-are-some-of-the-security-related-issues-one-needs-to-consider-while",
    question:
      "What are some of the security related issues one needs to consider while developing react native apps?",
    answer: [
      {
        type: "ordered-list",
        items: [
          {
            heading: "Data Storage Security",
            content:
              "Problem: Storing sensitive data (tokens, passwords, PII) insecurely on the device. Avoid: Storing sensitive data in AsyncStorage (it's not encrypted). Best Practice: Use Secure Storage libraries: iOS: Keychain Android: EncryptedSharedPreferences or Keystore Use libraries like: react-native-keychain react-native-encrypted-storage",
          },
          {
            heading: "Insecure Communication",
            content:
              "Problem: Sending data over non-HTTPS (HyperText Transfer Protocol Secure) connections exposes it to MITM attacks. Avoid: HTTP(HyperText Transfer Protocol ) requests or weak SSL configurations. Best Practice: Use HTTPS only Implement SSL Pinning to prevent MITM (e.g., with react-native-ssl-pinning) Validate certificates manually if needed",
          },
          {
            heading: "Code Exposure & Reverse Engineering",
            content:
              "Problem: JavaScript bundle can be decompiled easily. Avoid: Shipping apps without obfuscation or minification. Best Practice: Use hermes engine with minification and obfuscation Use tools like babel-plugin-transform-remove-console to remove logs in production Obfuscate JS using javascript-obfuscator or similar",
          },
          {
            heading: "Authentication & Token Security",
            content:
              "Problem: Poor handling of tokens can lead to hijacking. Avoid: Storing JWT/access tokens in AsyncStorage or global variables. Best Practice: Store tokens in SecureStore or Keychain Implement proper token lifecycle: Refresh tokens securely Invalidate tokens on logout",
          },
          {
            heading: "Improper Use of WebViews",
            content:
              "Problem: Loading arbitrary web content in WebView can lead to XSS or phishing. Avoid: Enabling JavaScript unnecessarily Loading untrusted content Best Practice: Disable JS unless needed Prevent navigation to untrusted domains Use originWhitelist and handle onNavigationStateChange",
          },
          {
            heading: "Third-party Libraries Vulnerabilities",
            content:
              "Problem: Relying on vulnerable npm packages. Avoid: Blindly installing packages without vetting Best Practice: Regularly audit dependencies: npm audit, yarn audit Use tools like Snyk or Dependabot Keep dependencies up to date",
          },
          {
            heading: "Hardcoded Secrets & API Keys",
            content:
              "Problem: Secrets in source code can be extracted. Avoid: Hardcoding API keys or secrets in the JS code Best Practice: Use environment variables with tools like react-native-config Store secrets securely on the server and retrieve via secure APIs",
          },
          {
            heading: "Inadequate Error Handling & Logging",
            content:
              "Problem: Leaking sensitive info in logs or errors. Avoid: Logging sensitive data Exposing stack traces in production Best Practice: Remove all console logs in production Catch and handle errors gracefully",
          },
          {
            heading: "Session Management & Logout",
            content:
              "Problem: Sessions that never expire or logout that doesn\u2019t clear tokens. Avoid: Not clearing secure storage or cached data on logout Best Practice: Clear all sensitive data on logout Set token expiry and enforce it on both client and server",
          },
        ],
      },
    ],
    topic: "Security",
  },
  {
    id: "explain-hot-reloading-and-live-reloading-in-react-native",
    question: "Explain Hot reloading and Live reloading in react native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Hot reloading Hot reloading updates only the files that were changed without reloading the entire app, and tries to retain the app\u2019s state. Preserves component state. Only reruns the code that was changed. Faster than live reload for large apps. Ideal for UI tweaks and small logic changes. If you're editing a button's color or tweaking layout styles, hot reload updates the app immediately without losing the current screen or form data.",
      },
      {
        type: "paragraph",
        content:
          "Live reloading Live reloading reloads the entire app when a file is saved. It behaves like a manual refresh. Clears the app\u2019s state. Restarts the JavaScript bundle. More stable but slower than hot reload. Useful when deeper changes require a fresh load. When you've made low-level changes like altering configuration files or initializing global states, live reload ensures a clean restart. **Since React Native 0.61+, Hot Reloading was replaced by Fast Refresh, which is a combination of hot and live reloading with improved reliability. Fast Refresh: Preserves state where possible. Falls back to full reload when needed. Is now the default behavior in modern React Native versions.",
      },
    ],
    topic: "App development",
  },
  {
    id: "what-is-flatlist",
    question: "What is FlatList?",
    answer: [
      {
        type: "paragraph",
        content:
          "FlatList is a performant component in React Native used for rendering large lists of scrollable data. It\u2019s preferred over ScrollView when you have lots of items because it renders only the items visible on the screen, plus a small buffer, which improves memory and performance. You provide it with a data array and a renderItem function that tells it how to render each item. It also uses a keyExtractor to uniquely identify items. Under the hood, FlatList uses lazy loading and recycling of item components, making it efficient even for thousands of rows. It supports features like pull-to-refresh, infinite scrolling with onEndReached, horizontal or vertical layouts, and custom separators between items. It's the go-to component for anything involving a list of structured, scrollable content in React Native. <FlatList data={DATA} renderItem={({ item }) => { return <View></View>; }} keyExtractor={(item) => item.id} />;",
      },
    ],
    topic: "Performance",
  },
  {
    id: "how-to-re-render-flatlist",
    question: "How to re-render Flatlist?",
    answer: [
      {
        type: "paragraph",
        content:
          "To re-render a FlatList, you typically need to update the data prop, because FlatList is a pure component and only re-renders when its props change. If you want to re-render the list based on something other than the data, pass that state to the extraData prop. This tells FlatList to watch that value for changes. If selectedId changes, FlatList will re-render even if data didn\u2019t.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "how-to-improve-flatlist-performance",
    question: "How to improve Flatlist performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "To improve FlatList performance in React Native, start by keeping your list items as lightweight as possible\u2014avoid heavy computations or unnecessary re-renders in the item components. Use React.memo or PureComponent to memoize item components if they're not supposed to re-render often. Make sure each item has a stable and unique keyExtractor. This helps React identify which items have changed, been added, or removed. If you're rendering images or complex UI, consider enabling removeClippedSubviews so off-screen items get removed from the native view hierarchy. Also, explicitly set the initialNumToRender, maxToRenderPerBatch, and windowSize props to control how many items are rendered initially and in each batch. This helps manage memory and render times. If your list has fixed item height, implement getItemLayout to skip layout calculations\u2014this significantly improves scroll performance. Lastly, keep the data array stable. Avoid regenerating it unnecessarily, as that causes the list to re-render. Use extraData only when needed to track external state changes.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "how-to-increase-the-react-native-performance",
    question: "How to increase the react native performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "Improving performance in a React Native app involves understanding how React Native bridges the gap between JavaScript and native code, and then optimizing what goes across that bridge, how components re-render, and how memory and layout are managed. At the core, React Native runs your JavaScript code in a separate thread (the JS thread) and communicates with native modules (UI, networking, etc.) over a bridge. This bridge can become a bottleneck if too much data is sent across it or if it's blocked by heavy JS execution. So, performance tuning is often about minimizing bridge traffic and ensuring smooth execution in the JS thread and the UI thread.",
      },
      {
        type: "paragraph",
        content:
          "One of the first things to address is reducing unnecessary re-renders. Every re-render requires recalculating layouts and sending updates to the native UI. Use React.memo for functional components and PureComponent for class components to avoid re-rendering unless props actually change. When using hooks like useEffect or useCallback, make sure their dependencies are correctly set so effects and memoized values don\u2019t trigger more than necessary.",
      },
      {
        type: "paragraph",
        content:
          "Avoid inline functions and styles when not needed, because they create new objects on each render, causing unnecessary work for React.",
      },
      {
        type: "paragraph",
        content:
          "Image handling is another major factor. Use the correct image sizes and formats. Prefer caching images with libraries like react-native-fast-image, which uses native caching and is more efficient than the default Image component.",
      },
      {
        type: "paragraph",
        content:
          "Navigation performance is often overlooked. Libraries like React Navigation are flexible but need tuning. Use native stack navigators where possible and enable screen detachment or freezing for screens not in focus. This reduces memory usage and avoids unnecessary updates.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          '<Stack.Screen\n name="Details"\n component={DetailsScreen}\n options={{ freezeOnBlur: true }}\n/>',
      },
      {
        type: "paragraph",
        content:
          "Animations can either be very smooth or cause serious frame drops. For high-performance animations, use the Reanimated library or LayoutAnimation where possible, as they run animations on the native thread. Avoid using JS thread-bound animations (like using setTimeout to trigger layout changes). Avoid large bundles of JavaScript by using dynamic imports (code splitting) for screens or features that aren\u2019t needed at startup. Metro bundler supports this and it helps with startup time. For lists and scrollable content, always use FlatList or SectionList instead of ScrollView for long lists. Customize FlatList with props like getItemLayout, initialNumToRender, and windowSize to suit your content. Avoid nesting scroll views and make sure touch events aren't blocked by oversized invisible elements. How to reduce the react native app size explain Reducing the size of a React Native app requires effort on both the JavaScript (JS) bundle and the native side (Android/iOS binaries). App size matters because smaller apps download faster, consume less storage, and improve user retention. Here's how to handle size reduction in depth: JavaScript Bundle Size The JS bundle includes all the code you write plus third-party libraries and assets processed by Metro bundler. To reduce it: 1. Remove unused packages Audit your package.json. Many apps include libraries that aren't actually used anymore. Each library adds to the JS bundle, even if it's small. Use tools like depcheck or Webpack Bundle Analyzer (via haul or custom setups) to find unused or large packages. 2. Use dynamic imports Instead of loading everything upfront, split the bundle and load screens or features when needed: const ProfileScreen = React.lazy(() => import('./ProfileScreen'));",
      },
      {
        type: "paragraph",
        content:
          "This keeps the initial bundle small and loads code only when it's actually required. 3. Avoid large JS utility libraries Some popular libraries (like lodash, moment.js) are very large. Consider using smaller alternatives (date-fns instead of moment, or importing only what you need from lodash like lodash.debounce instead of lodash). Native Side \u2013 Android APK and AAB (Android App Bundle) files include native code, assets, and resources. 1. Use App Bundles (AAB) Google recommends and requires AAB for Play Store submissions. AAB splits the APK into multiple smaller APKs optimized for each device architecture (ARM, x86, etc.), sending only what\u2019s necessary to each device. APK stands for Android Package Kit, while AAB stands for Android App Bundle iOS package App Store (IPA)",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Enable Proguard and R8",
            content:
              "Proguard and R8 shrink, obfuscate, and optimize Java bytecode. This can greatly reduce app size by removing unused code:",
          },
          {
            heading: "Compress images",
            content:
              "Avoid high-res assets unless necessary. Use scalable vector graphics (.svg) when possible for icons. General Recommendations",
          },
          {
            heading: "Fonts",
            content:
              "Avoid bundling entire font families if you're only using a few weights/styles. Also, use system fonts when possible to avoid bundling any.",
          },
          {
            heading: "Strip console logs",
            content:
              "In production builds, remove all console.log, console.warn, etc. They add to the bundle and can slow down the app.",
          },
        ],
      },
    ],
    topic: "Performance",
  },
  {
    id: "how-to-optimize-the-react-native-app",
    question: "How to optimize the react native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "Optimizing a React Native app involves improving performance, reducing load times, and ensuring a smooth user experience. Here's a checklist of strategies to optimize your app effectively: App Size Optimization A smaller app loads faster, installs quicker, and consumes less device storage. - Enable Hermes: faster JS load. - Use Proguard (Android): Shrinks and obfuscates code:",
      },
      {
        type: "paragraph",
        content:
          "Optimizing Animations -  JS-thread animations are choppy. Native animations are smoother. - Use useNativeDriver: true Image Optimization Large or too many images can crash the JS thread or slow UI. - Use react-native-fast-image \u2014 better caching and loading:",
      },
      {
        type: "paragraph",
        content:
          "Best Practices to Prevent Memory Leaks Always clear intervals, timeouts, and listeners in useEffect cleanups. Use FlatList instead of ScrollView for large lists. Avoid heavy logic in JS thread or in render. Cancel fetch/async operations on unmount using AbortController.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "how-to-access-native-events-from-javascript-in-react-native",
    question: "How to Access Native Events from JavaScript in React Native",
    answer: [
      {
        type: "paragraph",
        content:
          "Native Event: A native event is an event triggered from platform-specific code (like Android/iOS), such as location updates, hardware buttons, or native sensors. Bridge Concept: React Native uses a bridge to connect native code (Java/Swift) with JavaScript. Emit Event from Native: Native code emits an event using platform-specific APIs, sending data through the bridge. Use NativeEventEmitter in JS: On the JS side, use NativeEventEmitter to listen to those events. Subscribe to Event: Register a listener in JS that will react when the native side emits an event. Event Flow: Native Code \u279c Emits Event \u279c React Native Bridge \u279c JS Listener Receives Data. Unsubscribe When Done: Remove event listeners when not needed to avoid memory leaks.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-to-integrate-navigation-in-react-native-explain-types-of-navigation-",
    question:
      "How to integrate navigation in react native, explain types of navigation and how it works?",
    answer: [
      {
        type: "paragraph",
        content:
          "To integrate navigation in a React Native app, you typically use a library like react-navigation, which provides a declarative API for managing navigation and screen transitions. To get started, you first install the core library and the specific navigators you plan to use, like stack, tab, or drawer. Here's how navigation integration generally works: You set up a NavigationContainer at the root of your app. This container manages the navigation state of your app and must wrap your navigators. A navigator is a component that defines how screens are organized and transitioned between. There are several types of navigation in React Native, each serving different use cases: Stack Navigation mimics the call stack of functions. Screens are pushed on top of the stack when you navigate, and popped off when you go back. It\u2019s commonly used for navigating between screens in a linear, hierarchical flow, such as moving from a home screen to a details screen. Tab Navigation displays a row of tabs, usually at the bottom, allowing the user to switch between top-level views. Each tab can have its own stack of screens. It\u2019s ideal for apps with multiple distinct sections like Home, Profile, and Settings. Drawer Navigation slides in from the side and reveals a menu that lets users navigate to different parts of the app. It\u2019s used when you want to provide a less prominent but still accessible navigation option. Each of these navigators can be nested inside one another. For example, you might use a tab navigator for the main sections and within each tab use a stack navigator to handle deeper screen transitions. Navigation works through screen components and navigation props like navigation.navigate('ScreenName') or navigation.goBack() which push or pop screens based on user actions or app logic. The navigation system maintains a navigation state, which is a tree structure representing the navigator hierarchy and the current active screens. React Navigation uses this state to render the correct screen components and manage transitions smoothly. To sum up, navigation in React Native is structured around navigator components that manage screen hierarchies and transitions, all coordinated through a central container that tracks the navigation state.",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "what-is-the-difference-between-snapshot-and-functional-unit-test-cases",
    question:
      "What is the difference between snapshot and functional unit test cases?",
    answer: [
      {
        type: "paragraph",
        content:
          "Snapshot Test Purpose: To ensure that the rendered output (UI) of a component has not unexpectedly changed. How it works: It renders a component. Serializes the output (e.g. HTML or JSX tree) into a snapshot file. On future runs, compares the new output against the stored snapshot.",
      },
      {
        type: "paragraph",
        content:
          "Functional Unit Test Purpose: To test a specific function or logic in isolation for correctness. How it works: You call a function or render a component. You assert specific behavior/output based on input.",
      },
      {
        type: "paragraph",
        content:
          "Performance optimization techniques commonly applied in React Native apps, categorized by area, with brief explanations:",
      },
      {
        type: "paragraph",
        content:
          "\ud83d\ude80 1. Rendering Optimizations \u2705 React.memo() / PureComponent Prevents unnecessary re-renders of functional or class components when props haven't changed. \u2705 useCallback() and useMemo() Memoizes functions and values to avoid re-creation on every render. \u2705 FlatList / SectionList over ScrollView FlatList renders lazily (only visible items), unlike ScrollView which renders everything at once. \u2705 Key Extractor in FlatList Providing a stable keyExtractor improves list performance and prevents unnecessary re-renders.",
      },
      {
        type: "paragraph",
        content:
          "\ud83e\udde0 2. State Management \u2705 Global State via Context API or Zustand/Recoil/Jotai Avoids prop drilling and keeps components decoupled. \u2705 Redux with Reselect Use selectors and memoization to prevent re-renders of connected components.",
      },
      {
        type: "paragraph",
        content:
          "\ud83d\udcf1 3. UI & Animation Optimization \u2705 Use Native Driver in Animations useNativeDriver: true for smoother animations by offloading to native thread.",
      },
      {
        type: "paragraph",
        content:
          "\u2705 react-native-reanimated or react-native-gesture-handler These libraries offer performant gesture handling and animations compared to Animated.",
      },
      {
        type: "paragraph",
        content:
          "\ud83d\udce6 4. Bundle & Memory Optimization \u2705 Code Splitting & Lazy Loading Dynamically load screens or modules with libraries like react-native-dynamic-bundle or react-native-screens.",
      },
      {
        type: "paragraph",
        content:
          "\u2705 Avoid Large Inline Images Use Image with resizeMode and react-native-fast-image for caching and performance.",
      },
      {
        type: "paragraph",
        content:
          "\u2705 Reduce JS Bundle Size Remove unused libraries, optimize assets, enable Proguard (Android) and Bitcode (iOS).",
      },
      {
        type: "paragraph",
        content:
          "\ud83d\udce1 5. Network & Storage Optimization \u2705 Axios/Fastify + Caching Use caching layers (e.g. react-query, swr, AsyncStorage) for efficient data fetching.",
      },
      {
        type: "paragraph",
        content:
          "\u2705 Debouncing API calls Use debounce or throttle in search bars, autocomplete, etc.",
      },
      {
        type: "paragraph",
        content:
          "\u2699\ufe0f 6. App Lifecycle & Threads \u2705 Avoid Blocking the JS Thread No heavy computation on the main thread. Offload to native modules or use JSThread.",
      },
      {
        type: "paragraph",
        content:
          "\u2705 Background Processing with react-native-background-fetch, react-native-threads Use separate threads for background tasks.",
      },
      {
        type: "paragraph",
        content:
          "\ud83d\udd0d 7. Profiling & Debugging Tools \u2705 Flipper with React DevTools Inspect component renders, memory usage, and network requests.",
      },
      {
        type: "paragraph",
        content:
          "\u2705 Hermes Engine (Android) Improves app startup and memory usage by using a lightweight JS engine.",
      },
      {
        type: "paragraph",
        content:
          "\u2705 Performance Monitors Tools like why-did-you-render, React Profiler, and Perf Monitor help spot bottlenecks.",
      },
      {
        type: "paragraph",
        content:
          "\u2705 Bonus: General Best Practices Avoid anonymous functions in render Minimize inline styles & rerenders Minimize use of unnecessary console.logs in production Use InteractionManager to defer heavy work until after animations Paginate or virtualize long lists",
      },
      {
        type: "paragraph",
        content:
          "Creating a Native Module in React Native to control Bluetooth (turn on/off) involves: Steps for creating a Native module for access the bluetooth: Create a Java file inside Java Directory:BluetoothModule.java Register the Module: Create BluetoothPackage.java in the same directory Register Package in MainApplication.java: Inside getPackage() Add Necessary Permission in AndroidManifest.xml. Create a JS Bridge(Expose to JS).",
      },
    ],
    topic: "Testing & debugging",
  },
  {
    id: "why-do-we-need-the-following-packages",
    question: "Why do we need the following packages?",
    answer: [
      {
        type: "paragraph",
        content:
          "@react-navigation/native: This is the core package of React Navigation. It provides the base navigation functionality, such as: NavigationContainer (the navigation context provider) Navigation state management Navigating between screens Back button handling (Android) Think of it as the brain of your navigation system. react-native-screens This package improves navigation performance by using native navigation primitives (iOS UIViewController, Android Fragment) instead of just pure JS views. Benefits: Better memory management Smoother animations Faster screen rendering Think of it as an engine booster for your navigation system. react-native-safe-area-context: Helps in properly handling safe areas (like notches, status bars, home indicators) in devices such as iPhones or modern Android phones. Ensures UI doesn't get hidden behind notches or system bars. Used internally by React Navigation and other libraries for layout padding. Think of it as a seatbelt ensuring your UI stays safe in visible areas. @react-navigation/native-stack Provides the native stack navigator (createNativeStackNavigator) built on top of react-native-screens. It gives you: Native-like transitions (push/pop animations) Better performance than JS-based stack Header customization Think of it as the visual interface or gear of your navigation experience.",
      },
      {
        type: "paragraph",
        content: "Senior Interview questions",
      },
      {
        type: "paragraph",
        content: "\ud83d\udd39 Core React Native Architecture (Senior Level)",
      },
    ],
    topic: "App development",
  },
  {
    id: "explain-the-react-native-rendering-pipeline-end-to-end",
    question: "Explain the React Native rendering pipeline end to end.",
    answer: [
      {
        type: "paragraph",
        content:
          "\u201cWhen a React Native app runs, all rendering starts on the JavaScript thread. My components execute inside the JS engine, hooks run, and JSX is converted into React elements, which are just JavaScript objects describing the UI. React then performs reconciliation, where it compares the new tree with the previous one to figure out exactly what changed. This phase is purely computational and doesn\u2019t touch native views. Once React knows what changed, it enters the commit phase and converts those changes into UI instructions like creating views or updating props. These instructions are then sent to the native side. In the old architecture this went through the Bridge using JSON, which was asynchronous and slower. In the new architecture, React Native uses JSI and Fabric, so JavaScript can talk directly to native code through C++, avoiding serialization and improving performance. On the native side, React Native builds a shadow tree and runs layout calculation using the Yoga engine, which applies Flexbox rules to compute exact sizes and positions. After layout is resolved, real native views like UIViews on iOS or Views on Android are created or updated on the UI thread. These views are added to the native view hierarchy. Finally, the operating system renders this hierarchy using the GPU and displays pixels on the screen. On every state update, the same pipeline repeats, but only the minimal set of changes is applied. That\u2019s why blocking the JS thread or excessive JS-to-native communication directly impacts performance, and why modern React Native focuses on JSI, Fabric, and moving work off the JS thread.\u201d",
      },
      {
        type: "diagram",
        title: "A simplified React Native render path",
        nodes: [
          {
            label: "React components",
            detail: "JSX, state, and props",
          },
          {
            label: "Fabric renderer",
            detail: "Create and commit UI updates",
          },
          {
            label: "Yoga",
            detail: "Calculate layout",
          },
          {
            label: "Native views",
            detail: "iOS and Android host views",
          },
          {
            label: "OS and GPU",
            detail: "Draw pixels on screen",
          },
        ],
        note: "JSI connects JavaScript and native code in the New Architecture. The old Bridge path is legacy architecture context.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "Architecture overview",
        href: "https://reactnative.dev/architecture/overview",
      },
      {
        label: "New Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "difference-between-virtual-dom-and-shadow-tree-in-react-native",
    question: "Difference between Virtual DOM and Shadow Tree in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, the Virtual DOM and the Shadow Tree exist for completely different reasons and at different stages of rendering. The Virtual DOM lives entirely on the JavaScript side and belongs to React itself. When your component runs, React converts JSX into React elements and builds a Virtual DOM tree. This tree is just plain JavaScript objects that describe what the UI should look like. Whenever state or props change, React compares the new Virtual DOM with the previous one during reconciliation to figure out what has changed. The Virtual DOM is never rendered on the screen and never talks directly to native views. Its only job is to efficiently calculate UI updates. The Shadow Tree, on the other hand, lives on the native side of React Native and belongs to the React Native renderer, not React. Once React finishes reconciliation and commits updates, those updates are sent to native. React Native then builds a Shadow Tree that mirrors the component hierarchy but contains only layout-related information such as width, height, margins, padding, and flex properties. This tree is used by the Yoga layout engine to calculate exact positions and sizes for each component. A key difference is that the Virtual DOM is about what changed, while the Shadow Tree is about where and how things should be laid out. The Virtual DOM operates during the render and commit phases on the JS thread, while the Shadow Tree is used during layout calculation on the native side, often before any actual views are mounted. Another important distinction is that the Virtual DOM is framework-agnostic; the same Virtual DOM logic is used for React on the web, React Native, and other renderers. The Shadow Tree is React Native\u2013specific and exists only to bridge React\u2019s abstract UI description with platform-specific layout systems. In short, React\u2019s Virtual DOM decides what needs to update, and React Native\u2019s Shadow Tree decides how that UI should be sized and positioned before native views are finally created.",
      },
      {
        type: "diagram",
        title: "A simplified React Native render path",
        nodes: [
          {
            label: "React components",
            detail: "JSX, state, and props",
          },
          {
            label: "Fabric renderer",
            detail: "Create and commit UI updates",
          },
          {
            label: "Yoga",
            detail: "Calculate layout",
          },
          {
            label: "Native views",
            detail: "iOS and Android host views",
          },
          {
            label: "OS and GPU",
            detail: "Draw pixels on screen",
          },
        ],
        note: "JSI connects JavaScript and native code in the New Architecture. The old Bridge path is legacy architecture context.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "Architecture overview",
        href: "https://reactnative.dev/architecture/overview",
      },
      {
        label: "New Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "what-problems-did-fabric-solve-compared-to-the-old-architecture",
    question:
      "What problems did Fabric solve compared to the old architecture?",
    answer: [
      {
        type: "paragraph",
        content:
          "Before Fabric, React Native\u2019s old architecture had a fundamental mismatch between how React works and how native UI systems work. React expects rendering to be synchronous and priority-based, but the old React Native renderer, called Paper, relied on the Bridge. Every UI update had to be serialized into JSON, sent asynchronously to native, and then applied later. This made updates slower, memory-heavy, and impossible to coordinate precisely with user interactions. Because everything was async, React couldn\u2019t pause, resume, or prioritize rendering, which limited responsiveness under heavy load. Fabric solved this by replacing the Bridge-based renderer with a JSI-based one. Instead of sending large JSON payloads across threads, Fabric allows JavaScript and native code to communicate directly through C++. This removed serialization overhead, reduced memory pressure, and made updates significantly faster and more predictable. More importantly, it enabled synchronous rendering when needed, which aligns much better with how React\u2019s concurrent rendering model works. Another major issue with the old architecture was layout and mounting being loosely coordinated. In Paper, layout calculation, view creation, and prop updates were spread across different phases and threads, making it harder to guarantee consistency. This sometimes resulted in visual glitches, layout jumps, or frames being dropped during complex updates. Fabric introduced a unified rendering pipeline where layout calculation, view creation, and mounting are coordinated more tightly, producing more consistent and deterministic UI updates. Fabric also addressed long-standing performance problems around large or frequently updating trees. In the old system, even small updates could result in large batches of bridge traffic, which hurt scrolling and animation performance. Fabric applies updates more granularly and efficiently, ensuring that only the minimal necessary changes reach the UI thread. This is especially noticeable in complex lists and heavily interactive screens. Another limitation Fabric solved was thread blocking during animations and gestures. In the old architecture, many interactions depended heavily on the JS thread, so if JS was busy, animations would stutter. Fabric, together with the new animation and gesture systems, enables more work to happen on the UI thread, making interactions smoother even when JavaScript is under load. Finally, Fabric laid the foundation for future improvements. The old architecture was difficult to evolve because of tight coupling between JavaScript and native modules. Fabric\u2019s C++ core and type-safe interfaces made it easier to introduce features like TurboModules, code-generated native bindings, and better tooling, without breaking apps or sacrificing performance. In essence, Fabric fixed the Bridge bottleneck, aligned React Native with modern React\u2019s rendering model, improved UI consistency and performance, and made the framework scalable for complex, production-grade applications.",
      },
    ],
    topic: "Architecture",
  },
  {
    id: "how-does-js-thread-ui-thread-and-native-modules-thread-interact",
    question:
      "How does JS thread, UI thread, and Native modules thread interact?",
    answer: [
      {
        type: "paragraph",
        content:
          "Think of React Native as three specialists working on the same app, each with a very strict job boundary, and the app stays smooth only when they coordinate without blocking each other. The JavaScript thread is where your application logic lives. This is where React runs, components render, state updates happen, hooks execute, timers fire, and most business logic is processed. When you tap a button and call setState, that work happens on the JS thread. React calculates what changed and produces instructions describing how the UI should update. If the JS thread is busy doing heavy computation or large synchronous loops, it cannot respond to user interactions or produce UI updates, which is why the app feels frozen even though native views still exist. The UI thread is owned by the platform itself. On iOS it\u2019s the main thread, and on Android it\u2019s the main Looper thread. Its only responsibility is to handle user input, run layout and drawing, mount and update native views, and render frames at around sixty frames per second. The UI thread does not run your React logic. It simply applies the updates it receives from React Native and draws the result. If this thread is blocked, the OS cannot draw new frames, leading to dropped frames, jank, or the \u201cApp Not Responding\u201d feeling. The native modules thread sits between these two worlds. This thread (or thread pool) is used for work that must run in native code but should not block the UI thread. Things like network requests, file system access, database operations, camera access, and sensors run here. When JavaScript needs native functionality, it schedules a call to a native module. That work executes on the native modules thread, and once it\u2019s done, the result is sent back to the JS thread so React can update state if needed. The interaction between these threads is carefully controlled. The JS thread never touches native views directly. Instead, it sends UI update instructions to the UI thread through the React Native renderer. Likewise, the UI thread never executes JavaScript; it only applies updates and handles gestures. Native modules act as a bridge for non-UI native work, passing messages back and forth without blocking rendering. This separation is what makes React Native possible, but it\u2019s also where performance problems appear. If the JS thread is blocked, state updates and event handlers are delayed, so taps feel unresponsive. If the UI thread is blocked, frames drop and animations stutter. If native modules perform heavy work on the wrong thread, they can starve both sides. Modern React Native reduces these issues by using JSI, Fabric, TurboModules, and UI-thread\u2013driven animations, which allow more direct communication and less dependence on the JS thread. A good mental model is this: the JS thread decides what should happen, the UI thread decides how it looks and when it\u2019s drawn, and the native modules thread does heavy native work in the background. Keeping each thread focused and unblocked is the key to a smooth React Native app.",
      },
      {
        type: "diagram",
        title: "How JavaScript and UI work together",
        nodes: [
          {
            label: "JavaScript thread",
            detail: "React render work, app logic, state, and events",
          },
          {
            label: "Renderer",
            detail: "Schedules and prepares UI changes",
          },
          {
            label: "UI thread",
            detail: "The only thread that manipulates native host views",
          },
        ],
        note: "In the New Architecture, render and layout work can move across JS and UI threads depending on event priority; keep heavy work off the critical path.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "React Native threading model",
        href: "https://reactnative.dev/architecture/threading-model",
      },
    ],
  },
  {
    id: "what-does-off-the-main-ui-thread-mean-in-react-native",
    question:
      "What does \u201coff the main UI thread\u201d mean in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, \u201coff the main UI thread\u201d simply means that some work is being done somewhere other than the platform\u2019s UI thread, so that the UI thread is free to keep drawing frames and responding to user input. The main UI thread is owned by iOS or Android and is responsible for handling touches, laying out views, and rendering frames at around sixty frames per second. If anything heavy runs on this thread, even for a short time, the OS can\u2019t draw the next frame, which results in jank, dropped frames, or an unresponsive app. That\u2019s why React Native is very strict about keeping the UI thread lightweight. When people say work is happening \u201coff the main UI thread,\u201d they usually mean one of three things. It can be happening on the JavaScript thread, where React rendering, state updates, and business logic run. Even though this thread is not the UI thread, blocking it still hurts responsiveness because user events and state updates are processed there. It can also be happening on native background threads, often called the native modules thread or thread pool, where tasks like network calls, file I/O, database access, and sensors run. These tasks are intentionally kept away from the UI thread so they don\u2019t interfere with rendering. Finally, in modern React Native, some work can run directly on the UI thread but without depending on JavaScript, such as native-driven animations and gestures, which removes the JS thread from the critical path. In practice, \u201coff the main UI thread\u201d is most often used when talking about performance optimizations. For example, when animations are offloaded to the UI thread using libraries like Reanimated, the animation continues smoothly even if the JS thread is busy. When expensive calculations are moved to background native threads or scheduled asynchronously, the UI thread remains free to draw frames. So the phrase doesn\u2019t mean \u201cJavaScript is slow\u201d or \u201cnative is faster\u201d by default. It means that the work has been structured so the UI thread is not blocked. A smooth React Native app is one where the UI thread focuses only on rendering and input, while logic, computation, and I/O are pushed off the main UI thread whenever possible.",
      },
      {
        type: "diagram",
        title: "How JavaScript and UI work together",
        nodes: [
          {
            label: "JavaScript thread",
            detail: "React render work, app logic, state, and events",
          },
          {
            label: "Renderer",
            detail: "Schedules and prepares UI changes",
          },
          {
            label: "UI thread",
            detail: "The only thread that manipulates native host views",
          },
        ],
        note: "In the New Architecture, render and layout work can move across JS and UI threads depending on event priority; keep heavy work off the critical path.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "React Native threading model",
        href: "https://reactnative.dev/architecture/threading-model",
      },
    ],
  },
  {
    id: "how-does-yoga-calculate-layout-and-when-does-it-run",
    question: "How does Yoga calculate layout and when does it run?",
    answer: [
      {
        type: "paragraph",
        content:
          "Yoga is the layout engine React Native uses to turn your Flexbox styles into exact pixel positions, and it runs at a very specific moment in the rendering pipeline\u2014after React has decided what should be rendered but before native views are actually drawn. When React finishes reconciliation on the JavaScript thread and commits updates, those updates reach the native side. React Native then builds or updates a shadow tree. This shadow tree mirrors your component hierarchy but contains only layout-related data: flex direction, margins, padding, width, height, min/max constraints, and so on. There are no real views here yet, just layout nodes. Yoga takes this shadow tree and performs layout calculation. It works top-down, starting from the root node, which usually has constraints coming from the device screen size. Using the Flexbox algorithm, Yoga measures each node based on its styles and available space. For nodes with fixed dimensions, the size is known immediately. For flexible nodes, Yoga distributes remaining space according to flexGrow, flexShrink, and flexBasis. For text and images, Yoga asks the platform for intrinsic measurements so it knows how much space the content actually needs. As Yoga walks the tree, it calculates the final width, height, and absolute position of every node relative to its parent. By the time Yoga finishes, the layout is fully resolved: every component has an exact size and x\u2013y position in pixels. This result is stored back on the shadow tree nodes. Yoga runs whenever layout-affecting changes occur. On the initial render, it runs after the shadow tree is first created. On updates, it runs again only if something that impacts layout changes, such as flex styles, dimensions, text content that affects size, or parent constraints like orientation changes. If you update something that doesn\u2019t affect layout, like a color or opacity, Yoga does not run again. Once Yoga has finished calculating layout, React Native moves to the mounting phase. Using the computed layout values, real native views are created or updated on the UI thread and positioned correctly in the native view hierarchy. Only after this step does the operating system actually draw the UI. So in essence, Yoga runs on the native side during the layout phase, after React\u2019s reconciliation but before native view mounting. Its job is to answer one question precisely: given Flexbox rules and constraints, how big is every component and where exactly should it be placed on the screen.",
      },
      {
        type: "diagram",
        title: "From Flexbox rules to native layout",
        nodes: [
          {
            label: "Flexbox styles",
            detail: "Direction, alignment, size, and spacing",
          },
          {
            label: "Yoga",
            detail: "Cross-platform layout calculations",
          },
          {
            label: "Shadow tree",
            detail: "Calculated positions and dimensions",
          },
          {
            label: "Native views",
            detail: "Layout applied on each platform",
          },
        ],
      },
    ],
    topic: "Architecture",
  },
  {
    id: "what-happens-when-the-js-thread-is-blocked",
    question: "What happens when the JS thread is blocked?",
    answer: [
      {
        type: "paragraph",
        content:
          "When the JS thread is blocked, React Native can\u2019t process state updates, run event handlers, or execute React rendering. Taps, scroll events, and timers get delayed, so the app feels unresponsive even though the UI might still be visible. The UI thread may continue drawing existing views, but it won\u2019t receive new updates, which can cause frozen screens or delayed animations. That\u2019s why heavy computation on the JS thread directly leads to lag and poor user experience.",
      },
      {
        type: "diagram",
        title: "How JavaScript and UI work together",
        nodes: [
          {
            label: "JavaScript thread",
            detail: "React render work, app logic, state, and events",
          },
          {
            label: "Renderer",
            detail: "Schedules and prepares UI changes",
          },
          {
            label: "UI thread",
            detail: "The only thread that manipulates native host views",
          },
        ],
        note: "In the New Architecture, render and layout work can move across JS and UI threads depending on event priority; keep heavy work off the critical path.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "React Native threading model",
        href: "https://reactnative.dev/architecture/threading-model",
      },
    ],
  },
  {
    id: "difference-between-bridge-vs-jsi",
    question: "Difference between Bridge vs JSI.",
    answer: [
      {
        type: "callout",
        tone: "caution",
        title: "Legacy architecture context",
        content:
          "The asynchronous Bridge described here belongs to React Native\u2019s legacy architecture. The New Architecture removes React Native\u2019s dependency on that Bridge and uses JSI for JavaScript-to-native communication.",
      },
      {
        type: "paragraph",
        content:
          "The Bridge and JSI solve the same problem\u2014communication between JavaScript and native code\u2014but in very different ways. The Bridge is the old communication layer in React Native. JavaScript and native code live in separate worlds, so every call had to be serialized into JSON, sent asynchronously across the Bridge, and then deserialized on the other side. This meant communication was always async, relatively slow, and memory-heavy. Because of this, JavaScript could never synchronously ask native code for something, and a large number of updates could easily overwhelm the Bridge, leading to performance bottlenecks. JSI, or JavaScript Interface, removes that boundary. Instead of sending JSON messages, JavaScript talks directly to native code through C++ bindings. There is no serialization step, which makes communication faster and more efficient. JSI also allows both synchronous and asynchronous calls, so React Native can coordinate rendering more precisely and support modern features like Fabric and TurboModules. In short, the Bridge is message-based and asynchronous with high overhead, while JSI is direct, faster, and more flexible, enabling the new React Native architecture and better performance.",
      },
      {
        type: "diagram",
        title: "Legacy Bridge and the New Architecture",
        nodes: [
          {
            label: "JavaScript",
            detail: "React app and business logic",
          },
          {
            label: "Legacy Bridge",
            detail: "Async messages and serialization",
          },
          {
            label: "Native platform",
            detail: "Native modules and host views",
          },
        ],
        note: "Modern React Native uses JSI for direct JavaScript/native interop; this is not a claim that every operation should be synchronous.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "About the New Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-does-turbomodules-improve-performance",
    question: "How does TurboModules improve performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "TurboModules improve performance by changing how native modules are loaded and accessed in React Native. In the old system, all native modules were eagerly initialized at app startup, even if many of them weren\u2019t used immediately. This caused longer startup times and unnecessary memory usage, and every call from JavaScript still had to go through the Bridge, which added latency. TurboModules fix this in two ways. First, they are lazy-loaded, meaning a native module is only initialized when JavaScript actually calls it. This reduces app startup time and memory overhead. Second, they are built on top of JSI, so calls from JavaScript go directly to the native module without JSON serialization and asynchronous Bridge delays. This makes calls faster, allows synchronous access when safe, and reduces the overhead for frequently called modules like filesystem, sensors, or device APIs. In short, TurboModules make native modules faster, lighter, and more responsive by combining lazy initialization with direct, low-overhead communication through JSI.",
      },
    ],
    topic: "Architecture",
  },
  {
    id: "explain-synchronous-vs-asynchronous-rendering-in-react-native",
    question: "Explain synchronous vs asynchronous rendering in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, rendering can be thought of as synchronous or asynchronous depending on how React updates the UI in response to state or prop changes. Synchronous rendering means that when a state update occurs, React immediately recalculates the component tree, reconciles changes, and sends updates to native views in a single, blocking flow. The JavaScript thread executes the render, reconciliation, and commit phases without yielding control, so the UI updates happen immediately\u2014but this can block the JS thread if the tree is large or computations are heavy, causing lag or dropped frames. Asynchronous rendering, introduced with React\u2019s concurrent mode and fully leveraged in the new React Native architecture with Fabric, allows rendering to be split into small chunks and scheduled over time. When a state update occurs, React can pause, interrupt, or prioritize updates based on urgency. For example, updates triggered by typing or scrolling can be prioritized, while less critical updates like off-screen components can be deferred. This scheduling ensures the JS thread remains responsive, prevents blocking the UI, and allows animations and gestures to remain smooth, even if other updates are happening simultaneously. The difference also shows up on the native side. In the old Bridge-based architecture, all updates were asynchronous in nature because messages had to cross the Bridge, making every native update inherently delayed. Fabric, combined with JSI, allows React Native to perform synchronous updates when needed, letting critical changes be applied immediately on the UI thread without waiting for asynchronous serialization. In summary, synchronous rendering in React Native is immediate but can block the JS thread, while asynchronous rendering spreads work over time, improving responsiveness and user experience. Modern React Native combines both approaches: synchronous rendering for critical updates and asynchronous, interruptible rendering for non-critical updates, enabling smooth, interactive applications at scale.",
      },
      {
        type: "paragraph",
        content:
          "\ud83d\udd39 Performance Optimization (Very Important \ud83d\udd25)",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-debug-and-fix-ui-jank-in-a-react-native-app",
    question: "How do you debug and fix UI jank in a React Native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "Debugging and fixing UI jank in React Native is all about finding which thread is being blocked and optimizing the rendering pipeline. UI jank usually shows up as stuttered animations, delayed scrolling, or frozen screens, and it happens when either the JS thread, the UI thread, or the native modules thread is overloaded. The first step is to identify the bottleneck. You can use the built-in React Native Performance Monitor or tools like Flipper, Systrace, or React DevTools. Look at the frame rate, JS thread activity, and memory usage. If the JS thread is constantly hitting high utilization, the app is likely blocked by heavy computation, expensive state updates, or unnecessary re-renders. If the UI thread is overloaded, native layout or view updates may be the cause. Once you locate the bottleneck, you can fix it in several ways. If the JS thread is the problem, reduce the work happening during renders: use React.memo or PureComponent to prevent unnecessary re-renders, move expensive computations off the JS thread using Web Workers or native modules, and optimize lists with FlatList or SectionList by providing keyExtractor and getItemLayout. For animations, use Reanimated or native-driven animations so the work happens directly on the UI thread instead of waiting for JS. If the UI thread is blocked, check if too many views are being updated at once. Simplify layouts, avoid deeply nested views, and reduce heavy image processing on the main thread. For native modules, make sure asynchronous calls run off the UI thread, especially for tasks like database queries, network requests, or image decoding. Finally, test under realistic conditions\u2014large lists, simultaneous animations, and slower devices. Debugging tools like Flipper\u2019s React DevTools, Systrace, or the FPS monitor help you see exactly which operations are causing frame drops. The key principle is: keep the JS thread and UI thread unblocked, move work off the critical path, and use lazy or native-driven updates wherever possible.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "difference-between-usememo-usecallback-and-react-memo-in-rn",
    question: "Difference between useMemo, useCallback, and React.memo in RN.",
    answer: [
      {
        type: "paragraph",
        content:
          "Here\u2019s a clear way to understand the differences in React Native (and React in general), because they often confuse developers: useMemo is a hook that memoizes a computed value. You use it when you have an expensive calculation inside a component and you don\u2019t want to recompute it on every render unless its dependencies change. For example, filtering a large list or calculating derived data. It returns the result of a computation. useCallback is a hook that memoizes a function. In React Native, functions are recreated on every render, and passing them to child components can trigger unnecessary re-renders if those children rely on reference equality. useCallback ensures the same function reference is reused as long as its dependencies don\u2019t change. Essentially, it returns a stable function. React.memo is a higher-order component (HOC) that memoizes an entire component. It prevents re-rendering of a child component if its props haven\u2019t changed, using a shallow comparison by default. This is useful for functional components that receive props from a parent and don\u2019t need to re-render on every parent update. In short: useMemo \u2192 memoizes values.",
      },
      {
        type: "paragraph",
        content: "useCallback \u2192 memoizes functions.",
      },
      {
        type: "paragraph",
        content: "React.memo \u2192 memoizes components based on props.",
      },
      {
        type: "paragraph",
        content:
          "A practical combination in React Native: if you have a child component wrapped with React.memo and you\u2019re passing it a function prop, you often also wrap that function in useCallback to avoid breaking the memoization. Similarly, if you have heavy derived data passed as props, use useMemo so the props don\u2019t get recreated on every render.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "how-do-you-optimize-flatlist-for-large-datasets",
    question: "How do you optimize FlatList for large datasets?",
    answer: [
      {
        type: "paragraph",
        content:
          "Optimizing a FlatList in React Native for large datasets is all about reducing the work on both the JS thread and the UI thread, while making sure only the items visible on screen are rendered at any time. By default, FlatList only renders the visible items plus a small buffer, but for very large lists, additional strategies are needed. First, always provide a keyExtractor so React can efficiently track items and avoid unnecessary re-renders. Use getItemLayout whenever possible, especially if your rows have a fixed height, because it lets FlatList calculate positions without measuring every item. Wrapping row components in React.memo prevents them from re-rendering when unrelated parts of the list update. If you\u2019re passing functions as props to these rows, use useCallback to maintain stable references. Avoid inline styles or creating objects inside renderItem, because that creates new references on every render and breaks memoization. Adjust initialNumToRender and maxToRenderPerBatch to balance memory usage and rendering speed. For extremely long lists, consider windowSize to control how many items are kept in memory. removeClippedSubviews can help on Android by unmounting items that are off-screen, reducing memory overhead. If your rows contain images, make sure to use react-native-fast-image or properly sized images to prevent expensive layout recalculations. You can also implement lazy loading of heavy content or nested components. For dynamic-height rows, consider caching measurements to avoid re-layouts during scrolling. Finally, consider VirtualizedList (which FlatList wraps) for maximum control when you need custom behavior, or libraries like RecyclerListView for extremely large or complex lists. The key principle is: render only what\u2019s visible, memoize components, avoid recreating objects or functions, and tune FlatList props to balance performance and memory.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "give-me-an-example-of-a-flatlist-and-every-optimized-props-of-it",
    question:
      "Give me an example of a flatlist and every optimized props of it?",
    answer: [
      {
        type: "code",
        language: "TSX",
        content:
          "import React, { useCallback, useMemo } from 'react';\nimport { View, Text, FlatList, StyleSheet } from 'react-native';",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "// Sample large dataset\nconst DATA = Array.from({ length: 10000 }, (_, i) => ({\nid: i.toString(),\ntitle: `Item ${i + 1}`,\n}));\n\n// Memoized row component\nconst Row = React.memo(({ title }: { title: string }) => {\nreturn (\n    <View style={styles.row}>\n    <Text>{title}</Text>\n    </View>\n);\n});\n\nexport default function OptimizedFlatList() {\n// keyExtractor: uniquely identifies each item\nconst keyExtractor = useCallback((item: typeof DATA[0]) => item.id, []);\n\n// renderItem: memoized function to avoid recreating each render\nconst renderItem = useCallback(({ item }: { item: typeof DATA[0] }) => {\n    return <Row title={item.title} />;\n}, []);\n\n// getItemLayout: fixed height rows to skip measurement\nconst getItemLayout = useCallback(\n    (_data: typeof DATA, index: number) => ({\n    length: 50, // row height\n    offset: 50 * index,\n    index,\n    }),\n    []\n);\n\n// memoized list header\nconst ListHeader = useMemo(() => (\n    <View style={styles.header}>\n    <Text style={{ fontWeight: 'bold' }}>Optimized FlatList</Text>\n    </View>\n), []);",
      },
      {
        type: "code",
        language: "TSX",
        content:
          "return (\n    <FlatList\n    data={DATA}\n    renderItem={renderItem}\n    keyExtractor={keyExtractor}\n    initialNumToRender={20}      // render first 20 items initially\n    maxToRenderPerBatch={10}     // render 10 items per batch\n    windowSize={21}              // number of items rendered outside viewport (10 above + 10 below + 1 viewport)\n    removeClippedSubviews={true} // unmount items outside viewport (Android optimization)\n    updateCellsBatchingPeriod={50} // ms between batch renders\n    getItemLayout={getItemLayout} // fixed height layout optimization\n    ListHeaderComponent={ListHeader}\n    // extraData can be used to re-render list when non-item props change\n    extraData={null}\n    />\n);\n}",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const styles = StyleSheet.create({\nrow: {\n    height: 50,\n    justifyContent: 'center',\n    paddingHorizontal: 16,\n    borderBottomWidth: 0.5,\n    borderBottomColor: '#ccc',\n},\nheader: {\n    padding: 16,\n    backgroundColor: '#f5f5f5',\n},\n});",
      },
      {
        type: "paragraph",
        content:
          "Explanation of Optimization Props Used keyExtractor \u2192 ensures stable identity for each item; prevents unnecessary re-renders.",
      },
      {
        type: "paragraph",
        content:
          "React.memo (Row) \u2192 prevents re-rendering rows whose props haven\u2019t changed.",
      },
      {
        type: "paragraph",
        content:
          "useCallback for renderItem \u2192 keeps function reference stable across renders.",
      },
      {
        type: "paragraph",
        content:
          "getItemLayout \u2192 allows FlatList to skip measuring items if they have fixed height; improves scroll performance.",
      },
      {
        type: "paragraph",
        content:
          "initialNumToRender \u2192 how many items to render initially; lower for faster startup.",
      },
      {
        type: "paragraph",
        content:
          "maxToRenderPerBatch \u2192 number of items rendered per batch; prevents JS/UI thread from overloading.",
      },
      {
        type: "paragraph",
        content:
          "windowSize \u2192 controls off-screen rendering; more items = smoother scroll but higher memory.",
      },
      {
        type: "paragraph",
        content:
          "removeClippedSubviews \u2192 unmounts views off-screen to save memory, especially on Android.",
      },
      {
        type: "paragraph",
        content:
          "updateCellsBatchingPeriod \u2192 controls batch interval for rendering; smoother scrolling on large lists.",
      },
      {
        type: "paragraph",
        content:
          "extraData \u2192 triggers re-render when props outside data change (like selection state).",
      },
    ],
    topic: "Performance",
  },
  {
    id: "when-would-you-avoid-using-usememo",
    question: "When would you avoid using useMemo?",
    answer: [
      {
        type: "paragraph",
        content:
          "You would avoid using useMemo when the cost of creating the memoized value is cheaper than the cost of using useMemo itself, or when the value is simple and cheap to compute. useMemo adds some overhead because React has to keep track of dependencies, compare them on every render, and decide whether to recompute the value. If your computation is trivial, like adding two numbers or concatenating a string, wrapping it in useMemo actually slows down the app instead of speeding it up. You also shouldn\u2019t use useMemo as a general \u201cprevent re-renders\u201d tool\u2014useMemo only memoizes values, not components. If your goal is to prevent a child component from re-rendering, React.memo or useCallback for functions is the right tool. Finally, if the dependencies of useMemo change frequently, the memoization is rarely reused, making it effectively useless. In those cases, it\u2019s better to recompute the value each render rather than add unnecessary complexity. In short, avoid useMemo for cheap calculations, values that rarely stay the same, or when you\u2019re using it incorrectly to try to stop component re-renders. Its real power is for expensive computations or stable derived objects that would otherwise be recreated on every render.",
      },
      {
        type: "code",
        language: "TSX",
        content:
          "// Imagine you have a simple FlatList with rows that just display text:\nimport React, { useMemo } from 'react';\nimport { FlatList, Text, View } from 'react-native';",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i.toString(), value: `Item ${i}` }));",
      },
      {
        type: "code",
        language: "TSX",
        content:
          "export default function App() {\nreturn (\n    <FlatList\n    data={DATA}\n    keyExtractor={(item) => item.id}\n    renderItem={({ item }) => {\n        // Expensive and unnecessary useMemo\n        const text = useMemo(() => item.value.toUpperCase(), [item.value]);\n        return (\n        <View style={{ padding: 8 }}>\n            <Text>{text}</Text>\n        </View>\n        );\n    }}\n    />\n);\n}",
      },
      {
        type: "paragraph",
        content:
          "Here\u2019s why this is bad: item.value.toUpperCase() is extremely cheap.",
      },
      {
        type: "paragraph",
        content:
          "useMemo adds extra work: React has to track dependencies and decide whether to recompute.",
      },
      {
        type: "paragraph",
        content:
          "Because renderItem is called for many items, the overhead multiplies.",
      },
      {
        type: "paragraph",
        content:
          "On scrolling, the JS thread gets blocked unnecessarily, which can cause jank. renderItem={({ item }) => ( <View style={{ padding: 8 }}> <Text>{item.value.toUpperCase()}</Text> </View> )}",
      },
      {
        type: "paragraph",
        content:
          "Use useMemo only for expensive computations that are reused across renders. Avoid it for trivial calculations, frequently changing dependencies, or inline props that don\u2019t cost much. Misusing it can increase JS thread work, not reduce it.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "how-do-you-reduce-app-startup-time",
    question: "How do you reduce app startup time?",
    answer: [
      {
        type: "paragraph",
        content:
          "Reducing app startup time in React Native is about making the JS bundle smaller, deferring non-critical work, and optimizing native initialization so the app shows the first screen as quickly as possible. First, you can split your JavaScript bundle using code-splitting or dynamic imports so that only the code required for the initial screen loads immediately. Libraries like react-native-bundle-splitter or expo-router\u2019s lazy-loading can help. Avoid importing large libraries globally if they aren\u2019t needed at startup. Second, enable Hermes, the JavaScript engine optimized for React Native. Hermes precompiles bytecode, which reduces parsing and execution time compared to JSC. Smaller bundle size and faster JS execution directly reduce startup latency. Third, defer work that isn\u2019t needed for the first render. For example, load images lazily, postpone network calls or analytics initialization, and avoid running heavy computations on the JS thread during startup. You can use InteractionManager.runAfterInteractions to schedule these non-critical tasks. Fourth, optimize native side initialization. Reduce unnecessary native modules loaded at startup, and use TurboModules to lazy-load modules only when needed. For screens with large layouts, use getItemLayout for lists or avoid deeply nested view hierarchies to reduce UI thread work. You can also preload assets like fonts, images, or icons asynchronously before rendering critical screens, rather than blocking the first render waiting for them. Finally, profile startup using tools like Flipper\u2019s React DevTools, Systrace, or Xcode/Android Studio profiler to see whether the bottleneck is JS parsing, native initialization, or bridging, and optimize accordingly. In short: reduce bundle size, lazy-load code and assets, defer non-essential work off the JS thread, optimize native initialization, and use Hermes. These steps collectively shrink the time from app launch to first meaningful render.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "how-do-you-optimize-re-renders-in-react-native",
    question: "How do you optimize re-renders in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Optimizing re-renders in React Native is all about making sure components only update when they really need to and minimizing expensive work on the JS thread. First, at the component level, use React.memo to wrap functional components so they don\u2019t re-render when props haven\u2019t changed. By default, it does a shallow comparison, but you can pass a custom comparison function for complex props. For class components, PureComponent achieves the same effect. Next, pay attention to functions and objects passed as props. Inline functions or objects create new references on every render, which breaks memoization. Use useCallback for functions and useMemo for objects or computed values to maintain stable references. For example, passing a function like onPress={() => doSomething(item.id)} directly will recreate it each render; wrapping it in useCallback fixes that. Another key strategy is to avoid unnecessary state updates. Only store what\u2019s needed in state; derived values should be computed during render or memoized with useMemo. Also, when using lists, make sure to provide keyExtractor and implement getItemLayout if possible, so React Native can avoid re-rendering off-screen rows. For complex trees, consider splitting the UI into smaller components. If only one part changes, only that part re-renders instead of the entire screen. Avoid heavy calculations in render; move them off the JS thread or memoize results. Finally, leverage profiling tools like React DevTools, Flipper, or the built-in performance monitor to detect which components re-render frequently and why. Often, optimizing just a few \u201chot\u201d components drastically improves performance. In short: memoize components and props, minimize unnecessary state, avoid inline objects/functions, split complex trees, and profile. These steps ensure smooth rendering and prevent wasted JS thread cycles.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "what-causes-yellow-red-performance-warnings",
    question: "What causes yellow/red performance warnings?",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, yellow and red performance warnings appear when the app detects potential problems that can affect smoothness, responsiveness, or stability. They are essentially the framework\u2019s way of telling you, \u201cSomething here may cause lag, freezes, or crashes if not fixed.\u201d Yellow warnings are typically non-critical performance issues or best-practice violations. For example: \u201cVirtualizedLists should never be nested inside ScrollViews\u201d \u2014 nesting a FlatList inside a ScrollView can force all items to render at once, blocking the JS and UI threads.",
      },
      {
        type: "paragraph",
        content:
          "\u201cEach child in a list should have a unique key\u201d \u2014 missing keys force unnecessary re-renders.",
      },
      {
        type: "paragraph",
        content:
          "Slow frame warnings (\u201cJS thread is blocked for XX ms\u201d) \u2014 the JS thread was busy, so UI updates were delayed. These don\u2019t crash the app but indicate jank.",
      },
      {
        type: "paragraph",
        content:
          "Red warnings are critical errors or crashes that prevent the app from running properly. Examples include: Uncaught exceptions in JS \u2014 syntax errors, null references, or calling undefined functions.",
      },
      {
        type: "paragraph",
        content:
          "Failed native module calls \u2014 for example, passing wrong types to a native module.",
      },
      {
        type: "paragraph",
        content:
          "Fatal UI thread errors \u2014 like a bad layout that crashes the native renderer.",
      },
      {
        type: "paragraph",
        content:
          "In both cases, the root causes usually boil down to: JS thread blocking \u2014 heavy computation, large synchronous loops, or expensive renders.",
      },
      {
        type: "paragraph",
        content:
          "UI thread blocking \u2014 complex layouts, deeply nested views, or unoptimized native views.",
      },
      {
        type: "paragraph",
        content:
          "Incorrect usage patterns \u2014 missing keys, improper list nesting, passing functions or objects inline that break memoization.",
      },
      {
        type: "paragraph",
        content:
          "Misconfigured native modules or bridge calls \u2014 causing async failures or type mismatches.",
      },
      {
        type: "paragraph",
        content:
          "Fixing these warnings usually involves: Memoizing components and functions (React.memo, useCallback)",
      },
      {
        type: "paragraph",
        content: "Optimizing lists (FlatList with getItemLayout, keyExtractor)",
      },
      {
        type: "paragraph",
        content: "Moving heavy work off the JS/UI thread",
      },
      {
        type: "paragraph",
        content: "Correctly using native modules",
      },
      {
        type: "paragraph",
        content:
          "In short, yellow warnings indicate potential performance issues, red warnings indicate runtime-critical problems, and both are key indicators that something in your JS-to-native pipeline or rendering is suboptimal.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "explain-interactionmanager-and-its-use-cases",
    question: "Explain InteractionManager and its use cases.",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, InteractionManager is a utility that lets you defer expensive work until after animations, gestures, or other interactions have finished, so the app stays smooth and responsive. Essentially, it schedules tasks \u201coff the critical UI path\u201d to avoid blocking the main thread during user interactions. Here\u2019s how it works: when a user interacts with the app\u2014like scrolling a list, pressing a button, or running an animation\u2014React Native prioritizes rendering updates and animations. If you schedule heavy computations or synchronous tasks at the same time, the JS thread can get blocked, causing jank or dropped frames. InteractionManager allows you to wrap those tasks so they run after the current interactions complete, ensuring smooth animations and gestures. import { InteractionManager } from 'react-native'; import React, { useEffect } from 'react'; import { View, Text } from 'react-native';",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "export default function App() {\nuseEffect(() => {\n    // Heavy work that shouldn't block initial animations\n    const task = InteractionManager.runAfterInteractions(() => {\n    console.log('Task runs after interactions');\n    // e.g., fetching data, processing large lists, or initializing heavy computations\n    });\n\nreturn () => task.cancel(); // cancel if component unmounts\n}, []);\n\nreturn (\n    <View>\n    <Text>Hello, InteractionManager!</Text>\n    </View>\n);\n}",
      },
      {
        type: "paragraph",
        content:
          "Use cases in React Native: Fetching or processing data after the initial render or animations.",
      },
      {
        type: "paragraph",
        content:
          "Running expensive computations without blocking the JS thread while a screen transition is occurring.",
      },
      {
        type: "paragraph",
        content:
          "Preloading images or heavy assets after the main UI is ready.",
      },
      {
        type: "paragraph",
        content:
          "Deferring state updates or navigation logic until after animations complete.",
      },
      {
        type: "paragraph",
        content:
          "In short, InteractionManager helps you prioritize user interactions over background work, keeping your app feeling smooth and responsive.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-profile-rn-apps-using-flipper",
    question: "How do you profile RN apps using Flipper?",
    answer: [
      {
        type: "paragraph",
        content:
          "Profiling React Native apps using Flipper is one of the most effective ways to identify performance bottlenecks, debug re-renders, and track JS/UI thread usage. Here\u2019s how it works and what you can do: 1. Setup Flipper Flipper is a desktop app that connects to your iOS or Android simulator/device. Modern React Native versions have Flipper integration built-in, especially if you\u2019re using React Native 0.70+. Install Flipper from https://fbflipper.com. Run your app in debug mode; Flipper automatically detects React Native apps. 2. React DevTools Plugin Once connected: Open the React DevTools tab in Flipper.",
      },
      {
        type: "paragraph",
        content:
          "You can inspect the component hierarchy, view props and state, and see which components are re-rendering.",
      },
      {
        type: "paragraph",
        content:
          "React DevTools highlights components that re-render frequently, helping you optimize React.memo, useMemo, or useCallback. 3. Performance Monitor Flipper provides a Performance Monitor plugin: Shows FPS, JS thread usage, UI thread usage, and memory consumption in real-time.",
      },
      {
        type: "paragraph",
        content:
          "Reduces guesswork: if FPS drops during scrolling or animations, you can see whether the JS thread or UI thread is the bottleneck. 4. Tracking Bridge / JSI Calls Flipper lets you inspect bridge calls (JS \u2192 native) in the \u201cReact Native\u201d plugin. You can see how many times functions are called, and the size of messages passed.",
      },
      {
        type: "paragraph",
        content:
          "Excessive or large bridge calls often cause jank, so this helps pinpoint the issue. 5. Network and Layout Debugging Flipper\u2019s Network plugin shows API requests, responses, and timing.",
      },
      {
        type: "paragraph",
        content:
          "Layout inspector lets you inspect native view hierarchies, detect overdraw, and check component positions. 6. Using Flipper for Profiling Typical workflow: Open Flipper and connect your device/simulator.",
      },
      {
        type: "paragraph",
        content: "Run the app in debug mode.",
      },
      {
        type: "paragraph",
        content:
          "Reproduce the performance issue (e.g., scrolling, animations, list updates).",
      },
      {
        type: "paragraph",
        content: "Watch FPS drops, JS thread spikes, or bridge traffic.",
      },
      {
        type: "paragraph",
        content: "Inspect re-rendering components using React DevTools.",
      },
      {
        type: "paragraph",
        content:
          "Apply optimizations (React.memo, useCallback, getItemLayout, lazy-loading) and verify improvements in Flipper. Key takeaway: Flipper provides a real-time window into JS and native performance, helping you debug UI jank, memory issues, and inefficient renders in React Native.",
      },
    ],
    topic: "Testing & debugging",
  },
  {
    id: "how-would-you-handle-animations-when-js-thread-is-busy",
    question: "How would you handle animations when JS thread is busy?",
    answer: [
      {
        type: "paragraph",
        content: "\ud83d\udd39 State Management & Data Flow",
      },
      {
        type: "diagram",
        title: "How JavaScript and UI work together",
        nodes: [
          {
            label: "JavaScript thread",
            detail: "React render work, app logic, state, and events",
          },
          {
            label: "Renderer",
            detail: "Schedules and prepares UI changes",
          },
          {
            label: "UI thread",
            detail: "The only thread that manipulates native host views",
          },
        ],
        note: "In the New Architecture, render and layout work can move across JS and UI threads depending on event priority; keep heavy work off the critical path.",
      },
    ],
    topic: "Architecture",
    references: [
      {
        label: "React Native threading model",
        href: "https://reactnative.dev/architecture/threading-model",
      },
    ],
  },
  {
    id: "redux-vs-redux-toolkit-vs-zustand-when-do-you-choose-what",
    question:
      "Redux vs Redux Toolkit vs Zustand \u2014 when do you choose what?",
    answer: [
      {
        type: "paragraph",
        content:
          "Redux is the classic state management library. It\u2019s predictable, has a single source of truth, and is great for large, complex apps where multiple components across the tree need to share state. However, vanilla Redux requires a lot of boilerplate: action types, action creators, reducers, and immutably updating state. This can slow development and increase cognitive load, especially for smaller apps. Redux Toolkit (RTK) is essentially Redux, but modernized. It reduces boilerplate by providing createSlice, createAsyncThunk, and built-in support for immutability via Immer. RTK is the recommended approach if you want Redux\u2019s predictability and ecosystem but with faster development and cleaner code. It\u2019s ideal for medium-to-large apps where async logic, middleware, and debugging with Redux DevTools are important. Zustand is a lightweight, hook-based state management library. It\u2019s simpler, faster, and more flexible than Redux. Zustand doesn\u2019t need actions or reducers\u2014you just define a store and access state via hooks. It\u2019s great for small-to-medium apps, performance-critical parts (like animations), or when you want minimal boilerplate. Zustand also updates components selectively, reducing unnecessary re-renders. When to choose what: Vanilla Redux \u2192 rarely used today; mostly for legacy apps or if you want full control over middleware and store setup.",
      },
      {
        type: "paragraph",
        content:
          "Redux Toolkit \u2192 best for medium to large apps with complex state, async flows, or a team that needs predictable state management and debugging tools.",
      },
      {
        type: "paragraph",
        content:
          "Zustand \u2192 best for small apps, isolated feature state, or performance-sensitive components where minimal boilerplate is preferred.",
      },
      {
        type: "paragraph",
        content:
          "Rule of thumb: If you need full app-wide predictable state with DevTools, go RTK. If you just need lightweight, local, or feature-specific state, go Zustand. Vanilla Redux is mostly for historical knowledge now. MobX How it works: Observable state; components automatically re-render when the observed state they use changes. Uses decorators or makeAutoObservable.",
      },
      {
        type: "paragraph",
        content:
          "Pros: Very reactive, minimal boilerplate, easy to learn, fine-grained updates avoid unnecessary renders.",
      },
      {
        type: "paragraph",
        content:
          "Cons: Magic behavior can be opaque; harder to debug large apps; less standardization than Redux.",
      },
      {
        type: "paragraph",
        content:
          "Use case: Medium apps where you want reactive state with minimal boilerplate, or dynamic apps with frequent UI updates.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-does-immutability-help-redux-performance",
    question: "How does immutability help Redux performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "Immutability is core to Redux\u2019s performance and predictability. Here\u2019s why, explained in a React Native context: In Redux, your state is treated as read-only. Instead of mutating objects or arrays, every state change creates a new object. This might sound inefficient, but it actually improves performance in several ways: Fast change detection: Since state is immutable, Redux can compare the previous and next state using shallow equality checks (===). For example, if a slice of state hasn\u2019t changed, the reference remains the same. This allows React (or React-Redux) to quickly determine which components need to re-render, avoiding expensive deep comparisons.",
      },
      {
        type: "paragraph",
        content:
          "Predictable updates: Because state never changes in place, you can rely on pure functions (reducers) to always return the next state. This eliminates subtle bugs from accidental mutations, which can cause unnecessary re-renders or inconsistent UI.",
      },
      {
        type: "paragraph",
        content:
          "Enables time-travel debugging and undo/redo: Tools like Redux DevTools can snapshot previous states, because each update produces a new object, not a mutated one. This helps in profiling and debugging without affecting app performance.",
      },
      {
        type: "paragraph",
        content:
          "Optimized memoization: Components wrapped with React.memo or selectors from reselect can efficiently detect changes because immutable updates produce new references only when necessary. For example, a list component won\u2019t re-render if its array slice hasn\u2019t changed, because the reference stays the same.",
      },
      {
        type: "paragraph",
        content:
          "In short, immutability makes change detection cheap and predictable. Instead of traversing the entire state tree to see what changed, Redux can rely on simple reference comparisons, which is extremely fast even for large state trees. \ud83d\udca1 Interview tip: You can summarize it as: \u201cImmutability lets Redux detect changes via reference equality, which reduces unnecessary re-renders, ensures predictable state updates, and enables tools like time-travel debugging\u2014all without scanning the entire state tree.\u201d",
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-does-redux-toolkit-enforce-immutability",
    question: "How does Redux Toolkit enforce immutability?",
    answer: [
      {
        type: "paragraph",
        content:
          "Redux Toolkit enforces immutability automatically via Immer, letting you write clean, \u201cmutable-looking\u201d code that produces fully immutable state behind the scenes, preserving Redux\u2019s performance and predictability.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "what-are-common-redux-performance-mistakes",
    question: "What are common Redux performance mistakes?",
    answer: [
      {
        type: "paragraph",
        content:
          "The main Redux performance mistakes are storing too much state, mutating state, frequent dispatches, unoptimized selectors, and passing unstable props. The fix is to keep global state minimal, use immutable updates, memoize selectors, and use local state where appropriate. 1. Storing large or unnecessary data in the Redux store Mistake: Keeping huge lists, images, or temporary UI state in the global store.",
      },
      {
        type: "paragraph",
        content:
          "Why it hurts: Every state update triggers change detection. Large objects or arrays increase memory usage and slow down re-renders.",
      },
      {
        type: "paragraph",
        content:
          "Fix: Keep only essential, shared state in Redux; local component state (useState) is better for ephemeral UI state.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Mutating state directly",
            content:
              "Mistake: Changing state in reducers without returning a new object.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Why it hurts: Breaks Redux\u2019s immutability guarantees, making React-Redux\u2019s connect or useSelector unable to detect changes properly, leading to stale UI or unnecessary re-renders.",
      },
      {
        type: "paragraph",
        content: "Fix: Always use immutable updates or Redux Toolkit/Immer.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Passing inline objects or functions as props",
            content:
              "Mistake: Passing {} or () => {} directly in props to components connected to Redux.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Why it hurts: React.memo or useSelector sees a new reference each render, causing unnecessary re-renders of child components.",
      },
      {
        type: "paragraph",
        content:
          "Fix: Use useCallback for functions, useMemo for objects or arrays.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Overusing selectors without memoization",
            content:
              "Mistake: Calculating derived state in mapStateToProps or useSelector without memoization.",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Why it hurts: Expensive computations run on every render.",
      },
      {
        type: "paragraph",
        content:
          "Fix: Use reselect or createSelector to memoize derived values.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Updating deeply nested state frequently",
            content:
              "Mistake: Directly updating deeply nested objects in Redux state manually.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Why it hurts: Forces copying large objects repeatedly; slows down JS thread.",
      },
      {
        type: "paragraph",
        content:
          "Fix: Use Redux Toolkit or flatten state structure for easier immutable updates.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Storing UI state that changes often",
            content:
              "Mistake: Putting scroll positions, temporary inputs, or hover states in Redux.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Why it hurts: Frequent updates cause the entire connected component tree to re-render.",
      },
      {
        type: "paragraph",
        content: "Fix: Use local state for UI-only data.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Dispatching too frequently",
            content:
              "Mistake: Dispatching actions multiple times in rapid succession (e.g., in loops, scrolling events, or animations).",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Why it hurts: Blocks JS thread, slows down rendering, and increases bridge traffic.",
      },
      {
        type: "paragraph",
        content: "Fix: Debounce, throttle, or batch updates.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-do-you-handle-global-vs-local-state",
    question: "How do you handle global vs local state?",
    answer: [
      {
        type: "paragraph",
        content:
          "Keep local state local for ephemeral UI, use global state for shared or persistent data, and never store everything in Redux\u2014it increases re-renders and memory usage unnecessarily. In React Native (and React in general), handling global vs local state is about deciding where the state should live so your app stays efficient, maintainable, and responsive. The rule of thumb is:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Local state",
            content:
              "Definition: State that is used only within a single component or a small subtree.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Examples: Form inputs, toggles, modal visibility, temporary UI state, scroll positions.",
      },
      {
        type: "paragraph",
        content:
          "Where to store: Use useState, useReducer, or component state.",
      },
      {
        type: "paragraph",
        content:
          "Why local: Keeping state local avoids unnecessary re-renders in unrelated parts of the app. For instance, a text input state shouldn\u2019t force your entire app to re-render.",
      },
      {
        type: "code",
        language: "JavaScript",
        content: "const [isModalVisible, setModalVisible] = useState(false);",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Global state",
            content:
              "Definition: State that is shared across multiple components or screens.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Examples: User authentication, theme settings, language preferences, shopping cart, notifications.",
      },
      {
        type: "paragraph",
        content:
          "Where to store: Use Redux / Redux Toolkit, Zustand, MobX, or React Context (for small apps).",
      },
      {
        type: "paragraph",
        content:
          "Why global: It allows multiple components to react to changes without prop-drilling or manually syncing state.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "// Redux example\nconst cart = useSelector((state) => state.cart.items);\nconst dispatch = useDispatch();\ndispatch(addItemToCart(product));",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Decision guidelines",
            content:
              "Scope: If only one component cares about it \u2192 local.",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Sharing: If multiple components/screens care \u2192 global.",
      },
      {
        type: "paragraph",
        content:
          "Frequency of change: If state changes often and is ephemeral (e.g., input field) \u2192 local.",
      },
      {
        type: "paragraph",
        content:
          "Persistence/async requirements: If you need to persist state across sessions or handle async updates (API responses, caching) \u2192 global.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Hybrid approach",
            content:
              "Often apps use both: local state for UI-specific, ephemeral data; global state for shared, persistent, or cross-screen data.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Example: In a shopping app, the product list filter UI can be local state, while the cart and user auth are global state.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-do-you-avoid-unnecessary-re-renders-with-redux",
    question: "How do you avoid unnecessary re-renders with Redux?",
    answer: [
      {
        type: "paragraph",
        content:
          "To avoid unnecessary Redux re-renders: select only what you need, memoize components and props, keep ephemeral state local, normalize state, and throttle frequent updates. Avoiding unnecessary re-renders in a React Native app using Redux is all about ensuring components only re-render when the part of state they care about changes. Many performance issues in Redux come from over-rendering connected components or passing unstable props. Here\u2019s how to handle it effectively:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Use selectors carefully",
            content:
              "Instead of reading the entire state in useSelector or mapStateToProps, select only the slice of state you need.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Use memoized selectors with reselect or RTK\u2019s createSelector for derived data. This ensures expensive calculations aren\u2019t repeated and prevents re-renders if the input state hasn\u2019t changed.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "import { createSelector } from '@reduxjs/toolkit';\n\nconst selectCartItems = (state) => state.cart.items;\nconst selectTotalPrice = createSelector(\n  [selectCartItems],\n  (items) => items.reduce((sum, item) => sum + item.price, 0)\n);",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Memoize components",
            content:
              "Wrap child components with React.memo to prevent them from re-rendering unless props change.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "If you pass functions or objects as props, use useCallback or useMemo to keep references stable.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const Item = React.memo(({ onPress, title }) => (\n  <TouchableOpacity onPress={onPress}><Text>{title}</Text></TouchableOpacity>\n));",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Avoid unnecessary state in Redux",
            content:
              "Don\u2019t store ephemeral UI state (like input text, modal visibility, or scroll position) in Redux. Keep these in local state with useState or useReducer.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Frequent changes in global state cause connected components to re-render, even if other parts of the app don\u2019t need it.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Normalize state",
            content:
              "For large lists, normalize the state to avoid nested objects. Updating a nested object can create new references for the parent, causing many components to re-render.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Use flat structures and store items by ID for easier updates.",
      },
      {
        type: "paragraph",
        content:
          "state = { itemsById: { 1: {...}, 2: {...} }, itemIds: [1, 2] };",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Batch or throttle updates",
            content:
              "Don\u2019t dispatch actions in tight loops or on every minor event. Use throttling or debouncing for high-frequency updates (e.g., text inputs, scroll events).",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "RTK Query or InteractionManager.runAfterInteractions can help schedule heavy updates off the main render path.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-do-you-design-scalable-state-architecture",
    question: "How do you design scalable state architecture?",
    answer: [
      {
        type: "paragraph",
        content:
          "Scalable state architecture separates local and global state, splits the store into feature-based slices, normalizes data, memoizes derived state, handles async cleanly, keeps ephemeral UI local, and organizes folders by domain. This approach keeps React Native apps maintainable, performant, and easy to extend. Designing a scalable state architecture in React Native is about organizing state so your app stays maintainable, performant, and easy to extend as it grows. Here\u2019s an in-depth explanation:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Separate local vs global state",
            content:
              "Local state: Keep ephemeral, component-specific data (input values, modal visibility, scroll positions) in useState or useReducer.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Global state: Keep shared or persistent data (user info, theme, cart, language settings, notifications) in a global store like Redux Toolkit, Zustand, or MobX.",
      },
      {
        type: "paragraph",
        content:
          "Why: Avoids overloading the global store with data that doesn\u2019t need to trigger app-wide re-renders.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Use modular stores / slices",
            content:
              "For global state, split the store into domain-specific slices instead of one monolithic store.",
          },
        ],
      },
      {
        type: "heading",
        content: "Example using Redux Toolkit",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const userSlice = createSlice({ name: 'user', initialState: {}, reducers: {} });\nconst cartSlice = createSlice({ name: 'cart', initialState: [], reducers: {} });",
      },
      {
        type: "paragraph",
        content:
          "Each slice manages only its own state and actions, making the app easy to reason about and maintain.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Normalize state",
            content:
              "Flatten deeply nested data structures to avoid cascading re-renders.",
          },
        ],
      },
      {
        type: "heading",
        content: "Store entities by ID mapping instead of nesting objects",
      },
      {
        type: "paragraph",
        content:
          "state = { itemsById: { 1: {...}, 2: {...} }, itemIds: [1, 2] };",
      },
      {
        type: "paragraph",
        content:
          "This makes updates efficient and reduces unnecessary re-renders for unrelated components.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Use selectors and memoization",
            content:
              "For derived data, use memoized selectors (reselect or createSelector) to compute only when relevant slices of state change.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Prevents expensive calculations from running on every render.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Handle async operations cleanly",
            content:
              "Use Redux Toolkit Query, react-query, or async thunks for API calls.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Keep loading, error, and data states together to avoid scattered state management and race conditions.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Organize folder structure",
            content: "Keep state logic close to features:",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "src/ features/ cart/ cartSlice.ts CartScreen.tsx user/ userSlice.ts ProfileScreen.tsx",
      },
      {
        type: "paragraph",
        content:
          "Makes the codebase scalable and easy for multiple developers.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Plan for performance",
            content: "Use React.memo, useCallback, useMemo where needed.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Avoid unnecessary updates by structuring the store and selectors carefully.",
      },
      {
        type: "paragraph",
        content:
          "Use lazy-loaded slices or stores if the app grows very large.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-do-you-persist-state-securely-on-mobile",
    question: "How do you persist state securely on mobile?",
    answer: [
      {
        type: "paragraph",
        content:
          "Persisting state securely on a mobile device in React Native is a balance between data persistence and security, especially when storing sensitive information like authentication tokens, user credentials, or personal data. Here\u2019s a detailed explanation:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Avoid storing sensitive data in plain AsyncStorage",
            content:
              "AsyncStorage (or MMKV) is easy for persisting small amounts of data, but it doesn\u2019t encrypt data by default, so storing passwords, tokens, or PII directly is insecure.",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Use encrypted storage solutions for sensitive data.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Use secure storage solutions",
            content:
              "react-native-keychain: Stores sensitive credentials in the platform\u2019s secure storage (Keychain on iOS, Keystore on Android). Ideal for authentication tokens or passwords.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "react-native-encrypted-storage: Provides secure, encrypted AsyncStorage-like API. Great for storing user settings, session data, or tokens.",
      },
      {
        type: "paragraph",
        content:
          "MMKV (with encryption): Fast, persistent key-value store with optional encryption.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          'import EncryptedStorage from \'react-native-encrypted-storage\';\n\n// Save token securely\nawait EncryptedStorage.setItem("user_token", JSON.stringify(token));\n\n// Retrieve token\nconst token = await EncryptedStorage.getItem("user_token");',
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Minimize sensitive data in global state",
            content:
              "Don\u2019t store raw passwords or secrets in Redux/Zustand/MobX state\u2014they are in memory and can be accessed by JS inspection tools.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Instead, store tokens or session references, and read from secure storage when the app initializes.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Combine persistence with state management",
            content:
              "Use libraries like Redux Persist with encrypted storage adapters:",
          },
        ],
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "import { persistStore, persistReducer } from 'redux-persist';\nimport EncryptedStorage from 'react-native-encrypted-storage';\n\nconst persistConfig = {\n  key: 'root',\n  storage: EncryptedStorage,\n  whitelist: ['auth'], // only persist sensitive slices\n};\n\nconst persistedReducer = persistReducer(persistConfig, rootReducer);",
      },
      {
        type: "paragraph",
        content:
          "Only persist the parts of the state that are needed across sessions (e.g., auth token, settings).",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Handle sensitive data lifecycle",
            content:
              "Expiration: Tokens or session data should have a TTL and be cleared when expired.",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Logout: On logout, securely delete all persisted data.",
      },
      {
        type: "paragraph",
        content:
          "Encryption: Always use platform-provided secure storage or encryption libraries.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Avoid common pitfalls",
            content:
              "Don\u2019t store unencrypted PII in AsyncStorage or global state.",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Don\u2019t keep raw passwords in memory or state.",
      },
      {
        type: "paragraph",
        content:
          "Always read sensitive state lazily at app startup and write back securely when needed.",
      },
      {
        type: "paragraph",
        content:
          "Summary: \u201cPersist state securely by using platform-backed secure storage (Keychain/Keystore), encrypted storage libraries, and only storing non-sensitive data in Redux/Zustand. Avoid plaintext storage, enforce expiration, and clear sensitive data on logout.\u201d",
      },
    ],
    topic: "Security",
  },
  {
    id: "how-do-you-handle-offline-first-apps",
    question: "How do you handle offline-first apps?",
    answer: [
      {
        type: "paragraph",
        content:
          "Handling offline-first apps in React Native is about making your app usable even when the network is unavailable while ensuring data consistency once connectivity returns. Here\u2019s an in-depth explanation:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Local storage for offline data",
            content:
              "Use persistent local storage to store data that the user creates or interacts with while offline:",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "SQLite (react-native-sqlite-storage) \u2013 great for structured relational data.",
      },
      {
        type: "paragraph",
        content:
          "MMKV or AsyncStorage \u2013 for key-value data or small caches.",
      },
      {
        type: "paragraph",
        content:
          "Realm \u2013 reactive, offline-first database with sync support.",
      },
      {
        type: "paragraph",
        content:
          "Example: saving a new chat message locally before sending it to the server.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Queuing and syncing actions",
            content:
              "Keep a queue of actions the user performed offline (e.g., add to cart, post message).",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "When the network is back, replay these actions to the backend.",
      },
      {
        type: "paragraph",
        content:
          "Libraries like redux-offline or react-query help manage this automatically.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "// Pseudo-example with redux-offline\ndispatch(addMessageOffline({ id: localId, text }));\n// When online, redux-offline automatically syncs",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Network status detection",
            content:
              "Use @react-native-community/netinfo to detect connectivity changes.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Update UI to indicate offline/online status and trigger automatic sync when the connection is restored.",
      },
      {
        type: "code",
        language: "JavaScript",
        content: "import NetInfo from '@react-native-community/netinfo';",
      },
      {
        type: "paragraph",
        content:
          "NetInfo.addEventListener(state => { if (state.isConnected) syncOfflineData(); });",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Conflict resolution",
            content:
              "Offline changes can conflict with server data. You need a strategy:",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Last write wins: simplest but may overwrite server changes.",
      },
      {
        type: "paragraph",
        content:
          "Merge updates: combine offline and online changes intelligently.",
      },
      {
        type: "paragraph",
        content:
          "Prompt user: for critical conflicts (e.g., editing the same record).",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Caching and optimistic UI",
            content:
              "Show cached data immediately, even offline, so the app feels fast.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Use optimistic updates: assume the server will accept the change and update UI immediately, rolling back only if it fails.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Background sync and persistence",
            content:
              "For large datasets, use background sync mechanisms (react-native-background-fetch or server push notifications) to update offline data when online.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Persist caches in a format that survives app restarts (SQLite, MMKV, or Realm).",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Choose the right state management",
            content:
              "Redux Toolkit + redux-persist with offline middleware is popular.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Zustand or MobX also works for offline-first stores when combined with persistent storage.",
      },
      {
        type: "paragraph",
        content:
          "Key takeaway: \u201cOffline-first apps store data locally, queue actions for later sync, detect network status, resolve conflicts, use caching and optimistic updates, and persist data across restarts to ensure seamless offline experiences.\u201d",
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-would-you-structure-state-for-a-large-rn-app",
    question: "How would you structure state for a large RN app?",
    answer: [
      {
        type: "paragraph",
        content:
          "Structuring state for a large React Native app is about balancing performance, maintainability, and scalability. In big apps, poorly structured state leads to unnecessary re-renders, tangled dependencies, and difficult debugging. Here\u2019s a comprehensive approach:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Separate Local vs Global State",
            content:
              "Local state: For ephemeral UI data used by a single component or small subtree:",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Inputs, toggles, modals, scroll positions, animations.",
      },
      {
        type: "paragraph",
        content: "Use useState or useReducer.",
      },
      {
        type: "heading",
        content: "Global state: For shared or persistent data across screens",
      },
      {
        type: "paragraph",
        content:
          "Auth info, user profile, theme, language, notifications, cart.",
      },
      {
        type: "paragraph",
        content:
          "Use Redux Toolkit, Zustand, MobX, or React Context (small apps).",
      },
      {
        type: "paragraph",
        content:
          "Rule: Only put data in global state if multiple components/screens need it. Otherwise, keep it local to avoid unnecessary re-renders.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Modular / Feature-based State Slices",
            content:
              "Split global state into feature-specific slices rather than one monolithic store.",
          },
        ],
      },
      {
        type: "heading",
        content: "Example folder structure",
      },
      {
        type: "paragraph",
        content:
          "src/ features/ auth/ authSlice.ts AuthScreen.tsx cart/ cartSlice.ts CartScreen.tsx products/ productsSlice.ts ProductListScreen.tsx",
      },
      {
        type: "paragraph",
        content:
          "Each slice handles its own actions, reducers, selectors, and async logic.",
      },
      {
        type: "paragraph",
        content:
          "Makes the app easier to scale and maintain for multiple developers.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Normalize State",
            content:
              "Flatten deeply nested data structures to avoid cascading updates and unnecessary re-renders.",
          },
        ],
      },
      {
        type: "heading",
        content:
          "Example: store entities by ID and maintain an array of IDs instead of nesting objects",
      },
      {
        type: "paragraph",
        content:
          "state = { usersById: { '1': {...}, '2': {...} }, allUserIds: ['1', '2'] };",
      },
      {
        type: "paragraph",
        content:
          "Normalization helps with efficient updates, memoization, and selectors.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Use Selectors and Memoization",
            content:
              "Compute derived data with memoized selectors (reselect or RTK createSelector).",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Avoid doing expensive calculations inside mapStateToProps or useSelector without memoization.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const selectActiveProducts = createSelector(\n  (state) => state.products.byId,\n  (products) => Object.values(products).filter(p => p.active)\n);",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Handle Async State Cleanly",
            content: "Keep loading, error, and data together in slices.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Use Redux Toolkit Query, react-query, or async thunks for API calls.",
      },
      {
        type: "paragraph",
        content: "Example: productsSlice has data, loading, error.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Keep UI State Local",
            content:
              "Things like scroll positions, tabs, input fields, or hover states should not live in Redux/global state.",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Reduces global store churn and improves performance.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Organize by Domains",
            content: "Each domain/feature should contain:",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Slice or store",
      },
      {
        type: "paragraph",
        content: "Async thunks or queries",
      },
      {
        type: "paragraph",
        content: "Selectors",
      },
      {
        type: "paragraph",
        content: "Components or screens that use the slice",
      },
      {
        type: "paragraph",
        content:
          "Keeps code modular, testable, and easy to onboard new developers.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Performance Considerations",
            content: "Use React.memo, useMemo, and useCallback where needed.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Avoid large objects in global state; keep them in local state if ephemeral.",
      },
      {
        type: "paragraph",
        content: "Consider lazy-loading slices for rarely used features.",
      },
      {
        type: "paragraph",
        content:
          "Key takeaway: \u201cIn large React Native apps, state should be split into local vs global, modular slices per feature, normalized, memoized, and only include essential global data. Async and UI state should be handled cleanly, and folder structure should mirror features to make the app maintainable, performant, and scalable.\u201d",
      },
      {
        type: "paragraph",
        content: "\ud83d\udd39 Navigation & Deep Linking",
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-does-react-navigation-work-internally",
    question: "How does React Navigation work internally?",
    answer: [
      {
        type: "paragraph",
        content:
          "React Navigation works internally as a state-driven system that orchestrates screens, transitions, and gestures in React Native. At its core, it maintains a tree of navigation state objects, where each navigator\u2014whether a Stack, Tab, or Drawer\u2014manages its own slice of state. This state describes the currently active routes, the order of screens, the active tab index, and drawer positions. For example, a StackNavigator\u2019s state is a simple JavaScript object containing an array of routes and an index pointing to the currently visible screen. Each navigator functions like a controller: it receives the navigation state and actions such as navigate, push, or pop, then updates the state accordingly. When you call something like navigation.navigate('Profile'), React Navigation generates a navigation action object. The navigator\u2019s internal reducer-like logic interprets this action, updates the state tree, and triggers a re-render. This re-render determines which screens are mounted, which are kept alive, and which are unmounted, ensuring the UI reflects the current state. Screens themselves are just React components that are conditionally rendered based on the navigation state. StackNavigator, for instance, uses a StackView that manages the mounting of screens and handles animated transitions between them. Gesture handling, such as swiping back, is integrated via react-native-gesture-handler and interacts directly with the navigation state, so gestures and transitions are fully in sync with the current route hierarchy. React Navigation can also handle deep linking by parsing URLs into navigation actions that update the state tree. While the library manages its own state by default, it can optionally be hooked into Redux or any external state container, giving developers centralized control if needed. Optimizations like react-native-screens allow screens to be managed natively, reducing JS thread load and improving performance. In essence, React Navigation is a declarative, state-driven system where the JS state tree represents the entire navigation structure, and navigators act as controllers that interpret actions, update the state, and ensure the UI and gestures reflect the current route configuration seamlessly.",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "difference-between-stack-tab-and-drawer-navigators",
    question: "Difference between stack, tab, and drawer navigators.",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, Stack, Tab, and Drawer navigators are just different ways of organizing your app\u2019s screens, each optimized for a specific type of user flow, and internally they handle navigation state differently. A Stack Navigator is like a stack of cards: each screen is pushed on top of the previous one, and you can pop back to the previous screen. It\u2019s ideal for flows where users drill down into details, like moving from a home screen to a product screen to a checkout screen. Internally, it keeps an array of route objects with an index pointing to the active screen, and handles transitions and gestures to navigate forward or back. A Tab Navigator organizes screens as tabs, usually at the bottom or top of the screen, allowing users to switch between them freely without a hierarchical order. Each tab manages its own stack internally if needed, but the main navigation state tracks the active tab index. It\u2019s commonly used for top-level sections like Home, Search, and Profile, giving quick access without losing context in each tab. A Drawer Navigator slides in from the side and is often used for secondary navigation or menus. The drawer can open or close independently of the main screen stack, and the navigation state tracks whether the drawer is open along with the current active screen. It\u2019s great for apps with multiple top-level destinations that don\u2019t fit as tabs or for hidden menus. While all three navigators ultimately update the same navigation state tree internally and respond to actions like navigate or goBack, they differ in presentation, user interaction, and how they structure and manage the navigation state. Stacks maintain a strict hierarchy, tabs maintain parallel branches with an active index, and drawers overlay the main content with open/close state.",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "how-do-you-handle-deep-linking",
    question: "How do you handle deep linking?",
    answer: [
      {
        type: "paragraph",
        content:
          "Handling deep linking in a React Native app means allowing your app to open specific screens via URLs or custom schemes, even when the app is closed. It\u2019s essential for user experience, sharing links, notifications, and integrating with web content. Internally, deep linking works by mapping a URL to a navigation action that updates the navigation state tree. React Navigation has built-in support for this via a linking configuration, where you define patterns that correspond to screens. For example, a URL like myapp://profile/42 can be mapped to the Profile screen with id=42 as a route parameter. When the app is opened via a deep link, the URL is parsed, and React Navigation dispatches a navigation action to reconstruct the appropriate stack or tab state so that the correct screen is active. If the app is already running in the background, it still listens for new links via an event listener, updating the navigation state without restarting the app. On iOS, deep links can come from custom URL schemes or universal links, while on Android, they can come from intent filters or app links. React Native provides the Linking API to detect these URLs at startup (Linking.getInitialURL()) or while the app is running (Linking.addEventListener('url', callback)). Deep linking can also be combined with parameter parsing, query strings, and nested navigators. For example, a URL can open a tab navigator at a certain index and push a specific screen in a stack inside that tab. React Navigation\u2019s linking config handles this by converting URL segments into nested navigation actions automatically. For security and reliability, you usually validate the parsed URL, sanitize parameters, and handle cases where the link doesn\u2019t match any route by redirecting to a fallback screen. In short: Deep linking lets your app respond to external URLs by translating them into navigation actions that update the navigation state tree, opening the correct screens with the right parameters, whether the app is closed, backgrounded, or foregrounded.",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "how-do-you-manage-navigation-state-globally",
    question: "How do you manage navigation state globally?",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, managing navigation state globally means treating your app\u2019s navigation tree as part of a centralized state so that it can be accessed, controlled, or persisted from anywhere in the app. By default, React Navigation manages state internally in its own context, but for large apps or complex workflows, you might want to lift it to a global store like Redux, Zustand, or MobX. Internally, React Navigation represents navigation as a plain JavaScript object: a tree of routes with active indices for stacks, tabs, or drawers. Each navigator updates its slice of state in response to navigation actions (navigate, goBack, reset). To manage this globally, you essentially replace the internal state container with a custom one that lives in your global store. For example, with Redux, you can create a slice for navigation state and feed it into React Navigation: const navReducer = (state = initialState, action) => { const newState = rootNavigator.getStateForAction(state, action); return newState || state; };",
      },
      {
        type: "paragraph",
        content:
          "Then in your app, you pass a custom state and dispatch to the <NavigationContainer>: <NavigationContainer state={navState} onStateChange={dispatchNavAction}> <AppStack /> </NavigationContainer>",
      },
      {
        type: "paragraph",
        content:
          "This way, the navigation state lives in Redux, letting any component read the current route, dispatch navigation actions globally, or even persist the state across sessions using redux-persist. The same pattern works with Zustand or MobX: you store the navigation state in a global store, update it through actions, and feed it to <NavigationContainer>. You can then implement advanced features like time-travel debugging, deep linking, analytics, or state resets more easily, because navigation is just another slice of your app state. The key is that React Navigation\u2019s state is plain JS, so it can be lifted into any global state container. From there, it\u2019s just a matter of feeding the global state and dispatch handlers into <NavigationContainer> instead of letting React Navigation manage its own internal state.",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "how-do-you-prevent-memory-leaks-during-navigation",
    question: "How do you prevent memory leaks during navigation?",
    answer: [
      {
        type: "paragraph",
        content:
          "Preventing memory leaks during navigation in React Native is crucial, especially in large apps with complex screens, long-lived timers, listeners, or heavy asynchronous operations. Memory leaks usually happen when a screen is unmounted but resources or callbacks tied to it are not cleaned up, causing references to persist in memory. In React Navigation, every screen mount/unmount is controlled by the navigator, so the first step is to clean up anything attached to the component during unmount or when it loses focus. You can use useEffect with a cleanup function for this: useEffect(() => { const subscription = someEventEmitter.addListener('event', handleEvent);",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "return () => {\n    // Cleanup on unmount\n    subscription.remove();\n  };\n}, []);",
      },
      {
        type: "paragraph",
        content:
          "For navigation-specific scenarios, React Navigation provides focus and blur events via useFocusEffect or useIsFocused. This allows you to stop expensive operations when a screen is not visible: import { useFocusEffect } from '@react-navigation/native';",
      },
      {
        type: "paragraph",
        content:
          "useFocusEffect( React.useCallback(() => { const interval = setInterval(() => fetchData(), 5000); return () => clearInterval(interval); // stops timer when screen blurs }, []) );",
      },
      {
        type: "paragraph",
        content:
          "Other common sources of leaks during navigation include: Timers and intervals \u2013 setTimeout, setInterval must be cleared on unmount.",
      },
      {
        type: "paragraph",
        content:
          "Subscriptions and listeners \u2013 remove listeners from EventEmitters, Firebase, or websockets.",
      },
      {
        type: "paragraph",
        content:
          "Async operations \u2013 cancel pending API calls or promises when the screen unmounts, using abort controllers or flags.",
      },
      {
        type: "paragraph",
        content:
          "Refs to heavy objects \u2013 avoid keeping large objects in global refs unless necessary, and nullify them on cleanup.",
      },
      {
        type: "paragraph",
        content:
          "Using React.memo or useCallback can reduce unnecessary re-renders, but they don\u2019t prevent memory leaks. Memory leaks are about dangling references that persist after a screen is gone. In summary, memory leaks during navigation occur when resources tied to a screen aren\u2019t cleaned up. The strategy is to always unsubscribe, cancel, or clear resources in cleanup functions (useEffect return or useFocusEffect) when a screen is unmounted or blurred. This ensures screens don\u2019t leave behind listeners, timers, or async operations, keeping memory usage stable as users navigate through the app.",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "how-do-you-handle-conditional-navigation-auth-flow",
    question: "How do you handle conditional navigation (auth flow)?",
    answer: [
      {
        type: "paragraph",
        content:
          "Handling conditional navigation in React Native, such as an auth flow, is about dynamically choosing which screens or stacks to show based on the user\u2019s authentication state. React Navigation is designed to make this declarative and state-driven. The typical approach is to maintain an auth state (like isLoggedIn) in global state (Redux, Zustand, or React Context) or local state during app startup. Instead of imperatively navigating after login, you conditionally render different navigator trees based on this state. For example, you might have an AuthStack for login/signup screens and an AppStack for the main app: function RootNavigator() { const { isLoggedIn } = useAuthStore(); // global state or context",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "return (\n    <NavigationContainer>\n      {isLoggedIn ? <AppStack /> : <AuthStack />}\n    </NavigationContainer>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "Here, React Navigation will automatically mount the appropriate stack, unmount the other, and handle transitions cleanly. For flows where the auth state is loaded asynchronously (like checking a persisted token from secure storage), you can render a loading screen while the check is in progress: if (loading) return <SplashScreen />;",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "return <NavigationContainer>{isLoggedIn ? <AppStack /> : <AuthStack />}</NavigationContainer>;",
      },
      {
        type: "paragraph",
        content:
          "Inside the app, actions like login, logout, or token refresh update the auth state, which triggers React to re-render the root navigator and switch between stacks automatically. This declarative approach is much cleaner than manually calling navigate() for every login/logout action. Optionally, you can also use conditional navigation guards inside screens using useFocusEffect or useEffect to redirect users if they somehow reach a protected screen without being logged in. In short: Conditional navigation for auth flows is handled by maintaining an auth state and conditionally rendering different navigator stacks. React Navigation will handle mounting/unmounting screens and stacks, and updating the UI as the state changes ensures a clean, declarative auth flow.",
      },
      {
        type: "paragraph",
        content: "\ud83d\udd39 Native Modules & Platform Knowledge",
      },
    ],
    topic: "Navigation",
  },
  {
    id: "when-do-you-write-a-native-module",
    question: "When do you write a native module?",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, you write a native module whenever your JavaScript code needs functionality that isn\u2019t available through the React Native APIs or existing third-party libraries. Native modules are bridges between the JavaScript thread and the underlying platform (iOS or Android), allowing you to call platform-specific APIs directly from JS. Typical scenarios include: Platform-specific functionality: When a feature exists only on Android or iOS. For example, accessing Bluetooth Low Energy APIs, biometric sensors, or background services.",
      },
      {
        type: "paragraph",
        content:
          "Performance-critical operations: When a computation or operation is too slow on the JS thread, like image or video processing, cryptography, or heavy data parsing, you can move it to native code.",
      },
      {
        type: "paragraph",
        content:
          "Device hardware access not exposed by React Native: If you need sensors, NFC, advanced camera controls, or custom notifications that aren\u2019t in the RN core or libraries.",
      },
      {
        type: "paragraph",
        content:
          "Integrating third-party SDKs: When you want to use native SDKs (e.g., analytics, payment gateways, social login) that don\u2019t have React Native bindings.",
      },
      {
        type: "paragraph",
        content:
          "Bridging custom UI components: Sometimes you need a native UI component with performance or platform-specific features that JS can\u2019t handle efficiently.",
      },
      {
        type: "paragraph",
        content:
          "When you write a native module, the JS side calls the module methods asynchronously (or synchronously in rare cases) via the Bridge or JSI. Modern RN architectures like TurboModules make this faster by reducing serialization overhead and allowing some synchronous calls on the JS thread without blocking the UI. In short: You write a native module whenever your app requires functionality that JS cannot access efficiently or at all, including platform-specific APIs, performance-intensive operations, custom SDK integrations, or advanced hardware features.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "explain-how-to-create-a-native-module-high-level",
    question: "Explain how to create a native module (high level).",
    answer: [
      {
        type: "paragraph",
        content:
          "Creating a native module in React Native at a high level involves three main steps: writing native code, exposing it to JavaScript, and using it from JS. Here\u2019s an overview without getting lost in boilerplate:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Implement the native functionality",
            content:
              "On Android, you create a Java/Kotlin class that implements the functionality you want. This class typically extends ReactContextBaseJavaModule and exposes methods using @ReactMethod.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "On iOS, you create an Objective-C or Swift class that implements your methods and conforms to RCTBridgeModule.",
      },
      {
        type: "paragraph",
        content:
          "The native code does the actual work, whether it\u2019s accessing hardware, calling an SDK, or performing a heavy computation.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Expose the module to JavaScript",
            content:
              "On Android, you create a Package class that registers your module with React Native.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "On iOS, the module is automatically discovered when it conforms to RCTBridgeModule.",
      },
      {
        type: "paragraph",
        content:
          "React Native then makes your module available in JS as an object, and each annotated method becomes callable from the JS thread.",
      },
      {
        type: "paragraph",
        content:
          "Example pseudo-flow: Android (Java): @ReactMethod public void multiply(int a, int b, Promise promise) { promise.resolve(a * b); }",
      },
      {
        type: "paragraph",
        content:
          "JS: import { NativeModules } from 'react-native'; const { MathModule } = NativeModules;",
      },
      {
        type: "paragraph",
        content:
          "MathModule.multiply(2, 3).then(result => console.log(result)); // 6",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Call the native module from JavaScript",
            content: "Use NativeModules to access your module.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Methods are usually asynchronous (returning Promises), but with modern TurboModules you can also call some methods synchronously without blocking the UI.",
      },
      {
        type: "paragraph",
        content:
          "You can now integrate your native functionality seamlessly with React components or state.",
      },
      {
        type: "paragraph",
        content: "High-level flow Identify functionality not available in JS.",
      },
      {
        type: "paragraph",
        content: "Write native code that implements it.",
      },
      {
        type: "paragraph",
        content: "Register and expose the module to JS.",
      },
      {
        type: "paragraph",
        content:
          "Call it via NativeModules (or TurboModule) in your React Native app.",
      },
      {
        type: "paragraph",
        content:
          "This approach ensures that heavy or platform-specific logic is handled natively, while JS handles UI and state updates efficiently.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "how-do-you-pass-data-between-js-and-native",
    question: "How do you pass data between JS and Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Passing data between JavaScript and native code in React Native happens via the Bridge (or JSI in the new architecture), which serializes and deserializes data so that JS and native threads can communicate safely. Here\u2019s a clear explanation:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "From JS to Native",
            content:
              "When you call a native module method from JS, the arguments are serialized into a format the native code can understand. React Native supports common data types like: Strings, numbers, booleans",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Arrays and objects (plain JSON)",
      },
      {
        type: "paragraph",
        content: "Promises or callbacks",
      },
      {
        type: "paragraph",
        content:
          "Example: JS: import { NativeModules } from 'react-native'; const { MathModule } = NativeModules;",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "// Pass numbers\nMathModule.multiply(5, 3).then(result => console.log(result));\n\n// Pass objects\nMathModule.saveUser({ id: 1, name: 'Alice' });",
      },
      {
        type: "paragraph",
        content:
          'Native (Android - Java): @ReactMethod public void saveUser(ReadableMap user) { String name = user.getString("name"); int id = user.getInt("id"); // process user }',
      },
      {
        type: "paragraph",
        content:
          'Native (iOS - Objective-C): RCT_EXPORT_METHOD(saveUser:(NSDictionary *)user) { NSString *name = user[@"name"]; NSInteger userId = [user[@"id"] integerValue]; }',
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "From Native to JS",
            content:
              "Native modules can send data back to JS in two ways: Callbacks \u2013 older style, where you pass a JS function to the native module:",
          },
        ],
      },
      {
        type: "paragraph",
        content: "MathModule.multiply(5, 3, (result) => console.log(result));",
      },
      {
        type: "heading",
        content:
          "Promises \u2013 modern and preferred way for async operations",
      },
      {
        type: "code",
        language: "Java",
        content:
          "@ReactMethod\npublic void multiply(int a, int b, Promise promise) {\n    promise.resolve(a * b);\n}",
      },
      {
        type: "paragraph",
        content:
          "Events \u2013 for continuous or broadcast data, native code can emit events to JS using DeviceEventEmitter (Android) or RCTDeviceEventEmitter (iOS):",
      },
      {
        type: "code",
        language: "TSX",
        content:
          "import { NativeEventEmitter, NativeModules } from 'react-native';\nconst { SensorModule } = NativeModules;\nconst sensorEvents = new NativeEventEmitter(SensorModule);",
      },
      {
        type: "paragraph",
        content:
          "sensorEvents.addListener('onData', data => console.log(data));",
      },
      {
        type: "paragraph",
        content:
          'Native emits: reactContext .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class) .emit("onData", dataMap);',
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Data constraints",
            content:
              "Only serializable data can pass over the bridge: JSON-compatible types (strings, numbers, booleans, arrays, objects).",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Functions can\u2019t be sent directly\u2014use callbacks or events.",
      },
      {
        type: "paragraph",
        content:
          "Heavy data (images, large arrays) should use native storage or files to avoid blocking the bridge.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Modern JSI / TurboModules",
            content:
              "With TurboModules, JS can call native functions directly and synchronously for certain operations, bypassing the bridge serialization overhead. But the concept is the same: JS arguments go to native, and native returns data in supported types.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "In short: Data passes between JS and native by serializing JSON-compatible objects. JS calls native methods with arguments, and native sends data back via callbacks, promises, or events. For high-frequency or large data, consider using TurboModules or shared memory to avoid bridge overhead.",
      },
    ],
    topic: "App development",
  },
  {
    id: "what-are-common-pitfalls-in-native-modules",
    question: "What are common pitfalls in native modules?",
    answer: [
      {
        type: "paragraph",
        content:
          "When working with native modules in React Native, there are several common pitfalls that can hurt performance, stability, or maintainability. Understanding these helps you write efficient, safe, and maintainable modules.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Blocking the JS thread",
            content:
              "Native modules that perform heavy computations synchronously on the JS thread can freeze the UI.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Example: reading large files or doing image processing synchronously.",
      },
      {
        type: "paragraph",
        content:
          "Solution: Offload work to background threads or use asynchronous APIs with Promises or callbacks.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Memory leaks",
            content:
              "Keeping references to components, contexts, or large objects in native modules can prevent them from being garbage collected.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Common sources: unremoved listeners, timers, or event subscriptions.",
      },
      {
        type: "paragraph",
        content:
          "Solution: Always remove listeners and cancel timers when the module is destroyed or when the component using it unmounts.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Not handling asynchronous lifecycle",
            content:
              "Many native APIs are async (e.g., network requests, sensors, or storage). If a module doesn\u2019t handle app backgrounding, component unmounting, or errors properly, it can crash or leave dangling operations.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Solution: Use Promises, async/await, or event emitters carefully and cancel operations if the caller no longer needs results.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Poor error handling",
            content:
              "Native code can throw exceptions that bubble up to JS in unexpected ways.",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Without proper error handling, your app can crash.",
      },
      {
        type: "paragraph",
        content:
          "Solution: Always catch errors in native code and return them to JS via rejected Promises or structured callbacks.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Not following type/data constraints",
            content:
              "Only JSON-serializable data can cross the bridge (strings, numbers, booleans, arrays, objects).",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Trying to pass functions, DOM nodes, or large binary data directly causes errors or freezes.",
      },
      {
        type: "paragraph",
        content:
          "Solution: Use callbacks/events for functions and store large files in native storage rather than passing them directly.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Platform-specific inconsistencies",
            content:
              "Native modules often behave differently on iOS and Android, causing subtle bugs if not tested on both.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Example: sensor data formats, permission handling, or threading models.",
      },
      {
        type: "paragraph",
        content:
          "Solution: Always write platform-specific implementations or conditional checks to standardize behavior.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Overusing native modules",
            content:
              "Using native modules for simple tasks that can be done in JS adds unnecessary complexity and overhead.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Solution: Only write native modules for features that JS cannot handle efficiently, like hardware access, performance-critical code, or SDK integration.",
      },
      {
        type: "paragraph",
        content:
          "In short: Common pitfalls are blocking the JS thread, leaking memory via listeners/timers, mishandling async operations, poor error handling, passing unsupported data, platform inconsistencies, and overusing native modules. Avoiding these ensures your native modules are performant, safe, and maintainable.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "explain-your-experience-with-custom-native-ui-components",
    question: "Explain your experience with custom native UI components.",
    answer: [
      {
        type: "paragraph",
        content:
          "In one project, I needed a highly performant, animated calendar component that wasn\u2019t available as a ready-made React Native library. The challenge was that React Native\u2019s JS-based animations were not smooth enough for the complex interactions and large datasets we required. To solve this, I created a custom native UI component for both iOS and Android: On iOS, I used UIKit and implemented a UICollectionView-based calendar. I wrapped it in a Swift class conforming to RCTViewManager, exposing properties like selectedDate, events, and callbacks like onDateSelect to JS.",
      },
      {
        type: "paragraph",
        content:
          "On Android, I built a RecyclerView-based calendar in Kotlin, also wrapped in a ViewManager, with similar props and event callbacks.",
      },
      {
        type: "paragraph",
        content:
          "On the JS side, I exposed it as a reusable React component: <NativeCalendar events={events} selectedDate={selectedDate} onDateSelect={(date) => setSelectedDate(date)} />",
      },
      {
        type: "paragraph",
        content:
          "The key benefits were: Performance: The component handled hundreds of events smoothly without blocking the JS thread.",
      },
      {
        type: "paragraph",
        content:
          "Native gestures and animations: By leveraging native views, we got smooth scrolling, selection animations, and swipe gestures.",
      },
      {
        type: "paragraph",
        content:
          "Unified JS interface: Despite being implemented natively on each platform, JS components could use the same props and callbacks, so the app code remained clean and cross-platform.",
      },
      {
        type: "paragraph",
        content:
          "I also ensured proper memory management by cleaning up listeners when the component unmounted and made the component configurable, so it could be reused across multiple screens with different layouts or event types. This experience taught me how to bridge native UI components to React Native, balance performance vs flexibility, and maintain a consistent JS interface for complex, high-performance UI elements.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "what-is-the-role-of-gradle-in-rn",
    question: "What is the role of Gradle in RN?",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, Gradle plays a central role on the Android side of the app. Essentially, it\u2019s the build system that orchestrates how your Java/Kotlin code, resources, native dependencies, and JavaScript bundle are compiled, packaged, and turned into an APK or AAB that can run on Android devices. When you run commands like npx react-native run-android or ./gradlew assembleRelease, Gradle does a lot of work behind the scenes. It first resolves all your dependencies, including third-party libraries and native modules, making sure the correct versions of Android SDKs and support libraries are used. Then it compiles the native code\u2014Java/Kotlin files, resources, and XML layouts\u2014into bytecode. Gradle also bundles the JavaScript code using Metro into an asset that the app can load at runtime. Gradle handles different build variants and flavors, which is useful for React Native apps that need multiple configurations, like free vs premium versions or staging vs production builds. It also manages signing, so you can produce release APKs or AABs with the proper keystore. Another important aspect is that Gradle ensures all native modules are correctly linked. When you add a new library with native code, Gradle compiles and packages it along with your app automatically. Without Gradle, you\u2019d have to manually compile, link, and package all native code, which would be error-prone and tedious. In short, Gradle is like the orchestrator of the Android build pipeline in React Native. It resolves dependencies, compiles native code, packages assets, handles flavors and signing, and produces the final installable app. Without it, building a React Native Android app would be almost impossible.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "what-is-podfile-and-cocoapods",
    question: "What is Podfile and CocoaPods?",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, CocoaPods and the Podfile are part of the dependency management system for iOS projects. CocoaPods is essentially a package manager for iOS, similar to npm for JavaScript. It allows you to easily integrate third-party native libraries into your Xcode project. React Native uses it to manage native iOS dependencies\u2014for example, when you install a library that has Swift or Objective-C code, CocoaPods ensures it\u2019s compiled and linked correctly with your app. The Podfile is a plain Ruby file that lives in the ios/ folder of your React Native project. It declares which CocoaPods dependencies your project requires, specifies platform versions, and allows you to configure build settings. When you run pod install, CocoaPods reads the Podfile, resolves dependency versions, downloads the libraries, and integrates them into an Xcode workspace. In a React Native project, the Podfile typically includes references to the React Native pods themselves, plus any additional native modules you install: platform :ios, '13.0'",
      },
      {
        type: "paragraph",
        content:
          "require_relative '../node_modules/react-native/scripts/react_native_pods'",
      },
      {
        type: "paragraph",
        content: "target 'MyApp' do config = use_native_modules!",
      },
      {
        type: "paragraph",
        content: 'use_react_native!(:path => config["reactNativePath"]) end',
      },
      {
        type: "paragraph",
        content:
          "After running pod install, CocoaPods generates a Pods.xcodeproj that Xcode uses to build your app with all the native dependencies correctly linked. Without CocoaPods, you would have to manually add and configure native libraries, which is error-prone and difficult to maintain, especially as projects grow or libraries update. So in short, CocoaPods is the tool that manages iOS native dependencies, and the Podfile is the configuration file that declares which dependencies your project needs and how they should be integrated.",
      },
      {
        type: "paragraph",
        content:
          "\ud83d\udd39 Animations (Senior Favorite \ud83d\udd25) Difference between Animated API and Reanimated. In React Native, the Animated API and Reanimated both handle animations, but they differ significantly in performance, architecture, and flexibility. The built-in Animated API runs most of its work on the JavaScript thread. When you start an animation, JS calculates each frame, updates values, and sends them to the UI thread. For simple animations like fading, translating, or scaling small elements, this works fine. However, for complex or continuous animations, especially when the JS thread is busy (network calls, heavy renders, Redux updates), it can cause frame drops and jank because the UI thread has to wait for JS to finish calculations. Animated supports basic interpolation, timing, spring, and sequence animations, but it\u2019s limited when you want gesture-driven, native-smooth interactions. Reanimated, on the other hand, was built to run animations directly on the native thread. Its architecture allows you to define animation logic in JS, but the actual updates are executed off the JS thread, meaning the animations remain smooth even if the JS thread is blocked. Reanimated also introduces a declarative API, \u201cworklets\u201d (JS code that runs on the native thread), and hooks like useSharedValue and useAnimatedStyle, which make it easier to build gesture-driven, high-performance animations that can respond in real-time to gestures or state changes. For example, with a simple pan gesture: Using Animated, you have to listen to gesture events in JS, update the animated value, and render. If JS is busy, the UI lags.",
      },
      {
        type: "paragraph",
        content:
          "Using Reanimated, the gesture updates and animations can happen entirely on the native thread, resulting in smooth 60fps movement without worrying about JS bottlenecks.",
      },
      {
        type: "paragraph",
        content:
          "In short, Animated API is simpler and JS-driven, good for small or basic animations, while Reanimated is native-driven, highly performant, and gesture-friendly, ideal for complex, continuous, or interactive animations in production apps.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "what-does-worklet-mean-in-reanimated",
    question: "What does worklet mean in Reanimated?",
    answer: [
      {
        type: "paragraph",
        content:
          "In Reanimated, a worklet is essentially a small piece of JavaScript code that runs directly on the native UI thread, instead of the main JS thread. Normally, in React Native, animations and gesture updates go through the JS thread, which can get blocked by other computations and cause jank. Worklets solve this by moving the animation logic off the JS thread, so updates happen smoothly at 60fps, even if the JS thread is busy. Technically, when you mark a function as a worklet using the \"worklet\" directive or by using Reanimated hooks like useAnimatedStyle, Reanimated serializes the function and sends it to the native thread, where it executes independently. This allows it to read shared values, compute animations, and update styles without round-trips to JS. For example: import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          'const progress = useSharedValue(0);\n\nconst animatedStyle = useAnimatedStyle(() => {\n  // This function is a worklet\n  "worklet";\n  return {\n    transform: [{ translateX: progress.value * 100 }],\n  };\n});\n\n// Trigger animation\nprogress.value = withSpring(1);',
      },
      {
        type: "paragraph",
        content:
          "Here, the function passed to useAnimatedStyle runs as a worklet on the native thread, so translateX updates continuously and smoothly without depending on the JS thread. Key idea: A worklet allows Reanimated to execute animations and gesture computations natively and asynchronously, making them ultra-smooth, interactive, and frame-perfect, which is something the standard Animated API can\u2019t do reliably for complex animations.",
      },
    ],
    topic: "Animation",
  },
  {
    id: "why-is-reanimated-better-for-complex-animations",
    question: "Why is Reanimated better for complex animations?",
    answer: [
      {
        type: "paragraph",
        content:
          "Reanimated is better for complex animations in React Native because it runs the animation logic on the native UI thread instead of the JavaScript thread, which solves the biggest bottleneck of the default Animated API. In the standard Animated API, every frame of an animation is calculated on the JS thread. If the JS thread is busy with heavy computation, state updates, or network responses, the animation can stutter or drop frames, especially for gestures or continuous animations. Reanimated avoids this by allowing \u201cworklets\u201d, small pieces of JS code that are serialized and executed directly on the native thread, so the UI updates independently of the JS thread. This makes Reanimated particularly suitable for: Gesture-driven animations: You can link gestures directly to animated values without waiting for JS to process the event.",
      },
      {
        type: "paragraph",
        content:
          "Continuous and high-frequency updates: Things like scrolling, dragging, or parallax effects stay smooth even if the app is doing heavy processing.",
      },
      {
        type: "paragraph",
        content:
          "Complex chaining and interpolation: You can run multiple dependent animations simultaneously on the native thread without blocking or waiting for JS.",
      },
      {
        type: "paragraph",
        content:
          "Performance-critical screens: Components with many animated elements, like a calendar with dozens of moving cards or a carousel with gestures, remain smooth.",
      },
      {
        type: "paragraph",
        content:
          "Additionally, Reanimated provides a declarative API (useSharedValue, useAnimatedStyle, withSpring, etc.) that makes it easy to describe animation relationships, while keeping them efficient under the hood. Unlike the default Animated API, where JS calculations are serialized to the UI thread, Reanimated ensures that even highly interactive, complex, or nested animations run consistently at 60fps. In short: Reanimated is better for complex animations because it bypasses the JS thread, executes directly on the native thread via worklets, handles gestures natively, and supports high-frequency, interactive, and chained animations without dropping frames.",
      },
    ],
    topic: "Animation",
  },
  {
    id: "what-causes-animation-frame-drops",
    question: "What causes animation frame drops?",
    answer: [
      {
        type: "paragraph",
        content:
          "Animation frame drops in React Native happen when the UI cannot update at the target frame rate (usually 60 frames per second), causing visible stutter or jank. At a high level, this occurs whenever rendering, computation, or data updates block the thread responsible for updating the screen, whether that\u2019s the JS thread or the UI thread. In the standard Animated API, the JS thread drives most animation calculations. If it\u2019s busy doing heavy tasks\u2014like processing large arrays, fetching network data, running complex logic, or updating a large Redux state\u2014the animation frames can\u2019t be calculated in time. This leads to dropped frames because the UI thread waits for the next value from JS. Other common causes include: Expensive re-renders: If a component tree re-renders too often or unnecessarily (e.g., unoptimized FlatList updates or lack of memoization), the JS thread is overloaded, delaying animation updates.",
      },
      {
        type: "paragraph",
        content:
          "Heavy gesture handling: Listening to gestures on JS and updating animations on each event can overwhelm the JS thread.",
      },
      {
        type: "paragraph",
        content:
          "Layout recalculations: Frequent or complex layout changes, especially with many nested views, can stall the UI thread.",
      },
      {
        type: "paragraph",
        content:
          "Large image or asset processing: Loading or decoding large images synchronously can freeze the JS or native thread.",
      },
      {
        type: "paragraph",
        content:
          "Blocking timers or synchronous operations: Long-running synchronous code, like loops or computations on the JS thread, prevents the next animation frame from being calculated.",
      },
      {
        type: "paragraph",
        content:
          "Reanimated solves many of these issues because its worklets run directly on the native UI thread, bypassing the JS thread entirely for the animation updates. This allows gestures, springs, and interpolations to remain smooth even if the JS thread is busy. In short: Animation frame drops are caused when the thread responsible for computing or updating frames is blocked or overloaded, usually the JS thread in React Native. Optimizing re-renders, offloading heavy computations, and using native-driven animations (like Reanimated) are the main ways to prevent dropped frames.",
      },
    ],
    topic: "Performance",
  },
  {
    id: "how-do-you-handle-gesture-driven-animations",
    question: "How do you handle gesture-driven animations?",
    answer: [
      {
        type: "paragraph",
        content:
          "Handling gesture-driven animations in React Native is about making animations respond smoothly and in real-time to user gestures like swipes, drags, pinches, or taps. The challenge is that gestures generate high-frequency events, and if you handle them purely on the JS thread, you can quickly hit frame drops or stutter. The modern and recommended way is to combine react-native-gesture-handler for gesture recognition with Reanimated for smooth, native-driven animations. Here\u2019s how it works: Capture gestures on the native side: react-native-gesture-handler runs gesture recognition partly on the native thread, so it doesn\u2019t rely on the JS thread for each touch event. This reduces latency and allows the app to respond immediately to touch input.",
      },
      {
        type: "paragraph",
        content:
          "Update animation values natively: Using Reanimated\u2019s worklets and useSharedValue, you tie the gesture state directly to animated values. For example, when a user drags a card, the translation values update on the native UI thread, so the card moves smoothly, even if the JS thread is busy.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "import { PanGestureHandler } from 'react-native-gesture-handler';\nimport { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';\n\nconst translateX = useSharedValue(0);\n\nconst animatedStyle = useAnimatedStyle(() => ({\n  transform: [{ translateX: translateX.value }],\n}));\n\n<PanGestureHandler\n  onGestureEvent={(event) => {\n    translateX.value = event.translationX; // worklet updates native thread directly\n  }}\n>\n  <Animated.View style={animatedStyle} />\n</PanGestureHandler>",
      },
      {
        type: "paragraph",
        content:
          "Handle gesture states declaratively: With Reanimated, you can also handle gesture events like start, active, end, or cancel to trigger springs, decay, or snap animations using withSpring, withDecay, or withTiming. All of this executes on the native thread, keeping animations smooth.",
      },
      {
        type: "paragraph",
        content:
          "Optimize interaction with JS state: Only send essential data back to the JS thread if needed, e.g., when a gesture completes or an action needs to trigger a state update. This minimizes JS thread overhead and prevents frame drops.",
      },
      {
        type: "paragraph",
        content:
          "Key takeaway: Gesture-driven animations should run on the native UI thread as much as possible, capturing touch input natively and updating animated values via Reanimated worklets. The JS thread should only handle high-level logic or state changes, not per-frame calculations.",
      },
      {
        type: "paragraph",
        content: "\ud83d\udd39 Networking, Security & Storage",
      },
    ],
    topic: "Animation",
  },
  {
    id: "how-do-you-secure-api-keys-in-react-native",
    question: "How do you secure API keys in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Securing API keys in React Native is tricky because anything bundled in your JS code can be extracted from the app binary. Unlike backend environments, mobile apps are distributed to users, so you cannot fully trust the client. The goal is to minimize exposure and make keys harder to extract, while ideally keeping sensitive operations on a backend. Here\u2019s how it\u2019s commonly handled:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Move sensitive keys to a backend",
            content:
              "The safest approach is to never put secrets directly in the app. Instead, create a backend service that holds the API key and acts as a proxy: The app calls your backend endpoint.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "The backend adds the API key to the request to the third-party API.",
      },
      {
        type: "paragraph",
        content: "The backend returns only the necessary data to the app.",
      },
      {
        type: "paragraph",
        content:
          "This way, the key is never exposed in the client app, and you can rotate or revoke it easily.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Use environment variables and build-time injection",
            content:
              "For less critical keys, you can use .env files with packages like react-native-dotenv or react-native-config. Example: API_KEY=abcd1234",
          },
        ],
      },
      {
        type: "paragraph",
        content: "In JS: import { API_KEY } from '@env';",
      },
      {
        type: "paragraph",
        content:
          "This keeps the key out of your source code, but note that it still ends up in the bundled JS. It only prevents hardcoding in the repo; it does not prevent extraction from the final app.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Use native secret storage",
            content:
              "For platform-specific security, you can store keys in: iOS Keychain (via react-native-keychain)",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Android Keystore",
      },
      {
        type: "paragraph",
        content:
          "This allows you to store and retrieve secrets securely, often used for tokens rather than static API keys. You can also fetch the key from a secure remote source on first launch and cache it securely.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Obfuscation",
            content:
              "Minify and obfuscate JS using Metro or ProGuard/R8 for Android.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "This makes it slightly harder to extract keys, but it\u2019s not foolproof. Obfuscation is more of a deterrent than a solution.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Token-based or ephemeral keys",
            content:
              "For APIs that support it (like Firebase, AWS), generate short-lived tokens on a backend, rather than embedding permanent API keys in the app.",
          },
        ],
      },
      {
        type: "paragraph",
        content: "This way, even if a token is leaked, it expires quickly.",
      },
      {
        type: "paragraph",
        content:
          "In short: You never fully trust the client. The most secure approach is to keep API keys on a backend or use short-lived tokens. Environment variables and native secure storage can reduce exposure, and obfuscation adds minor protection.",
      },
    ],
    topic: "Security",
  },
  {
    id: "how-do-you-handle-token-refresh",
    question: "How do you handle token refresh?",
    answer: [
      {
        type: "paragraph",
        content:
          "Handling token refresh in a React Native app is about keeping the user authenticated seamlessly without requiring them to log in again when an access token expires. Most APIs (like OAuth2 or JWT-based backends) provide short-lived access tokens and long-lived refresh tokens for this purpose. Here\u2019s the typical flow:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Login and store tokens",
            content:
              "When a user logs in, the backend returns: Access token (short-lived, e.g., 15\u201360 minutes)",
          },
        ],
      },
      {
        type: "paragraph",
        content: "Refresh token (long-lived, e.g., 1 week or more)",
      },
      {
        type: "paragraph",
        content:
          "You store these securely: Use Secure Storage (react-native-keychain, react-native-sensitive-info) rather than AsyncStorage for sensitive tokens.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Best practices",
            content: "Always store tokens securely.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Use short-lived access tokens and long-lived refresh tokens to minimize risk if a token leaks.",
      },
      {
        type: "paragraph",
        content:
          "Refresh tokens on-demand, not constantly, to reduce unnecessary network calls.",
      },
      {
        type: "paragraph",
        content:
          "Handle concurrent API calls gracefully to avoid multiple simultaneous refresh requests.",
      },
      {
        type: "paragraph",
        content:
          "In short: Token refresh involves storing tokens securely, detecting expired access tokens, calling a refresh endpoint with the refresh token, updating stored tokens, and retrying failed requests\u2014all while keeping the user logged in seamlessly.",
      },
      {
        type: "paragraph",
        content:
          "Axios vs Fetch in React Native. In React Native, both Axios and the native Fetch API are used for making HTTP requests, but they differ in features, usability, and behavior. Here\u2019s a detailed comparison:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "API and Ease of Use",
            content:
              "Fetch is built into React Native, so no installation is needed. Its API is promise-based:",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "fetch('https://api.example.com/data') .then(res => res.json()) .then(data => console.log(data)) .catch(err => console.error(err));",
      },
      {
        type: "paragraph",
        content:
          "Axios is a third-party library with a simpler and cleaner syntax, automatically transforming JSON responses and supporting more convenient configuration:",
      },
      {
        type: "code",
        language: "JavaScript",
        content: "import axios from 'axios';",
      },
      {
        type: "paragraph",
        content:
          "axios.get('https://api.example.com/data') .then(response => console.log(response.data)) .catch(error => console.error(error));",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Request and Response Handling",
            content:
              "Fetch requires you to manually call .json() to parse JSON responses, and it only rejects on network errors, not on HTTP errors (like 404 or 500). You must manually check res.ok.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Axios automatically parses JSON and rejects the promise for HTTP errors, making error handling cleaner.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Interceptors",
            content:
              "Axios supports request and response interceptors, which are great for adding headers, tokens, or logging globally.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Fetch doesn\u2019t have built-in interceptors; you need to wrap it in functions or use custom helpers.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Cancellation",
            content:
              "Axios supports cancellation using CancelToken or the new AbortController.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Fetch can only be canceled using the AbortController API, which is slightly more verbose and manual.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Timeout",
            content:
              "Axios has a simple timeout property to abort requests after a given time.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Fetch does not support timeouts natively; you must implement it manually with Promise.race() and AbortController.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Multipart/FormData",
            content:
              "Axios handles multipart/form-data automatically and sets the correct headers when you pass FormData.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Fetch requires you to manage headers manually and can be trickier for file uploads.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Browser/React Native Differences",
            content:
              "In React Native, Fetch uses whatwg-fetch under the hood and behaves slightly differently from browsers (no cookie management by default, some headers limited).",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Axios abstracts away these differences and provides a consistent API across platforms.",
      },
      {
        type: "paragraph",
        content:
          "When to Choose Use Fetch if you want a lightweight, built-in solution and your requests are simple.",
      },
      {
        type: "paragraph",
        content:
          "Use Axios if you need interceptors, automatic JSON parsing, request cancellation, timeouts, or simpler error handling, especially in production apps with auth flows.",
      },
      {
        type: "paragraph",
        content:
          "In short: Fetch is built-in and minimal but requires more boilerplate, while Axios is feature-rich, easier to manage for complex requests, and better for production-grade apps in React Native.",
      },
    ],
    topic: "Security",
  },
  {
    id: "how-do-you-implement-retry-logic",
    question: "How do you implement retry logic?",
    answer: [
      {
        type: "paragraph",
        content:
          "Implementing retry logic in a React Native app is about automatically reattempting failed network requests due to transient errors (like network timeouts or temporary server issues), while avoiding unnecessary retries that could overload the server. You can implement it with either Fetch or Axios, but Axios makes it cleaner with interceptors or helper libraries. Here\u2019s the high-level approach:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Basic retry logic with Fetch",
            content:
              "You can wrap your fetch request in a function that retries a set number of times with optional delays: async function fetchWithRetry(url, options, retries = 3, delay = 1000) { for (let attempt = 1; attempt <= retries; attempt++) { try { const response = await fetch(url, options); if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`); return await response.json(); } catch (error) { if (attempt === retries) throw error; await new Promise(res => setTimeout(res, delay)); // wait before retry } } }",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Here, the request is retried up to 3 times, waiting 1 second between attempts. Only transient errors (like network failures or 5xx responses) should trigger retries.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Retry logic with Axios",
            content:
              "Axios is more convenient because you can use interceptors or libraries like axios-retry: import axios from 'axios'; import axiosRetry from 'axios-retry';",
          },
        ],
      },
      {
        type: "code",
        language: "JavaScript",
        content: "const client = axios.create();",
      },
      {
        type: "paragraph",
        content:
          "axiosRetry(client, { retries: 3, retryDelay: (retryCount) => retryCount * 1000, // exponential backoff retryCondition: (error) => { return error.response?.status >= 500 || error.code === 'ECONNABORTED'; }, });",
      },
      {
        type: "paragraph",
        content:
          "client.get('https://api.example.com/data') .then(res => console.log(res.data)) .catch(err => console.error(err));",
      },
      {
        type: "paragraph",
        content:
          "Here, failed requests with 5xx errors or network issues are automatically retried with increasing delays.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Best practices",
            content:
              "Only retry idempotent requests (GET, HEAD, PUT) to avoid repeating unsafe operations like POST.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "Use exponential backoff (delay = base * 2^attempt) to reduce server load.",
      },
      {
        type: "paragraph",
        content: "Set a max retry count to prevent infinite loops.",
      },
      {
        type: "paragraph",
        content:
          "Optionally, add jitter/randomness to avoid many clients retrying simultaneously.",
      },
      {
        type: "paragraph",
        content:
          "Always handle failure gracefully after retries (e.g., show an error toast).",
      },
      {
        type: "paragraph",
        content:
          "In short: Retry logic is implemented by catching failed requests and reattempting them with a limit and delay, ideally with exponential backoff. Axios simplifies this with interceptors or libraries, while Fetch requires a small helper function.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-store-sensitive-data-securely",
    question: "How do you store sensitive data securely?",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, storing sensitive data securely is all about leveraging platform-native secure storage rather than relying on plain JavaScript solutions like AsyncStorage. The problem with AsyncStorage or embedding secrets directly in JS code is that anyone can extract them from the app bundle or from the device\u2019s file system, making them unsafe for tokens, passwords, or API keys. The usual approach is to use libraries like react-native-keychain or react-native-sensitive-info, which interface with the iOS Keychain and Android Keystore. When you store a value through these libraries, it is encrypted and saved in the OS-provided secure storage, often with hardware-backed encryption if the device supports it. For example, when you save a user token with Keychain, you can later retrieve it safely from the native storage without exposing it in your JS memory. This means even if the JS bundle is decompiled, the sensitive information remains protected by the OS-level encryption. It\u2019s also important to minimize exposure on the JS side. Sensitive data should only reside in memory temporarily when it\u2019s being used, and any tokens or credentials should be deleted upon logout or session expiration. In addition, all communication with the backend should happen over HTTPS to prevent interception. For highly sensitive scenarios, you can combine secure storage with additional encryption and even require biometric verification for retrieval. The guiding principle is that the app should never fully \u201ctrust\u201d the client. By combining native secure storage, encrypted communication, temporary in-memory handling, and proper lifecycle management, you can safely manage sensitive data in a React Native app without exposing it to attackers or leaving it vulnerable to extraction.",
      },
    ],
    topic: "Security",
  },
  {
    id: "what-are-common-mobile-security-risks",
    question: "What are common mobile security risks?",
    answer: [
      {
        type: "paragraph",
        content:
          "In mobile apps, including React Native apps, there are several common security risks that developers need to be aware of because mobile devices are distributed to users and often operate in untrusted environments. These risks arise from both the app itself and the way it interacts with the network, storage, and device APIs. One major risk is insecure data storage. Storing sensitive data like API keys, access tokens, or passwords in plain storage (AsyncStorage, unencrypted files, or local databases) can be easily extracted if the device is rooted, jailbroken, or if someone decompiles the app. Closely related is improper data caching, where sensitive responses are stored in caches or logs without encryption. Weak or exposed authentication is another common issue. If your app uses predictable tokens, doesn\u2019t implement proper session management, or stores credentials insecurely, attackers can impersonate users or hijack sessions. Similarly, insufficient backend validation can lead to exploits even if your app seems secure, because mobile clients can always be reverse-engineered to send malicious requests. Network-related risks are also significant. Transmitting sensitive data over HTTP instead of HTTPS, or failing to validate SSL/TLS certificates, makes apps vulnerable to man-in-the-middle attacks, where an attacker intercepts and reads or modifies traffic. Reverse engineering and code tampering are additional threats. Since mobile apps are shipped to users, attackers can decompile the JavaScript bundle, inspect the native binaries, or modify code to bypass security controls, steal secrets, or inject malicious behavior. Obfuscation and code signing help, but they don\u2019t fully prevent this. Other risks include insecure third-party libraries, which may introduce vulnerabilities, and improper handling of device permissions, where apps request more access than necessary, exposing sensitive device features. Finally, lack of runtime protections like detecting jailbroken/rooted devices or preventing screenshots for sensitive screens can also lead to data leaks. In short, mobile apps face risks from insecure storage, weak authentication, unsafe network communication, reverse engineering, and misuse of device APIs. Mitigating these requires a combination of secure storage, encryption, proper session management, safe network practices, code obfuscation, and careful use of permissions.",
      },
    ],
    topic: "Security",
  },
  {
    id: "why-we-should-not-store-in-async-storage",
    question: "why we should not store in async storage",
    answer: [
      {
        type: "paragraph",
        content:
          "We shouldn\u2019t store sensitive data in AsyncStorage in React Native because it\u2019s essentially just a key-value store saved as plain text on the device. Unlike secure storage, it has no encryption or hardware-backed protection, so anyone with physical access to the device or who can extract the app data can read it easily. For example, if you store an access token or password in AsyncStorage, a user could use tools to browse the app\u2019s storage folder and retrieve that value. Similarly, if the device is rooted or jailbroken, all AsyncStorage data becomes fully accessible. Because of this, any critical information like authentication tokens, API keys, or personal user data should never live there. AsyncStorage is fine for non-sensitive app data like UI preferences, theme settings, or caching non-critical information, but for anything that could compromise security or privacy, you should use native secure storage like Keychain on iOS or Keystore on Android, which encrypts data and often leverages hardware-backed security. In short, AsyncStorage is convenient but insecure, and using it for sensitive information exposes your users to data theft and potential account compromise.",
      },
      {
        type: "paragraph",
        content:
          "Unit testing Unit testing in React Native is all about testing small, isolated pieces of your app\u2014like functions, components, or hooks\u2014independently of the rest of the app to ensure they behave correctly. The goal is not to test the entire app or the UI in integration, but to verify that each unit works as intended in isolation. In practice, React Native unit tests are written in JavaScript/TypeScript, and they don\u2019t run the full app on a simulator. Instead, they run in a Node.js environment using test runners like Jest, which is the default for React Native projects. Jest provides features like mocking modules, snapshot testing, and assertions to make testing predictable and fast. For components, unit testing typically focuses on render logic and output rather than actual device behavior. You can render a component using @testing-library/react-native or react-test-renderer and check whether it displays the correct text, responds to props, or calls functions as expected. For example, you might render a button component and assert that pressing it calls the right handler. For functions or hooks, you test their pure behavior: given certain inputs, do they return the expected outputs? For example, a function that calculates a discounted price or a custom hook that manages state can be unit tested without touching the UI. Mocks are important because React Native has native modules that don\u2019t run in Node.js. You can mock modules like AsyncStorage, react-native-fs, or react-navigation so your unit tests don\u2019t fail due to missing native behavior. Unit tests are usually fast, run entirely in memory, and are ideal for continuous integration. They catch regressions early and give confidence when refactoring, because they verify specific units independently rather than relying on manual testing. In short, unit testing in React Native means isolating small pieces of code\u2014functions, components, hooks\u2014running them in a Node environment with Jest, using mocks for native modules, and asserting that their behavior is correct, which keeps your app maintainable, predictable, and bug-resistant.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "import React from 'react';\nimport { render, fireEvent } from '@testing-library/react-native';\nimport MyButton from './MyButton';\n\ndescribe('MyButton', () => {\nit('renders correctly with the given title', () => {\n    const { getByText } = render(<MyButton title=\"Click Me\" onPress={() => {}} />);\n    expect(getByText('Click Me')).toBeTruthy();\n});\n\nit('calls onPress when pressed', () => {\n    const onPressMock = jest.fn();\n    const { getByTestId } = render(<MyButton title=\"Click Me\" onPress={onPressMock} />);",
      },
      {
        type: "paragraph",
        content: "fireEvent.press(getByTestId('my-button'));",
      },
      {
        type: "paragraph",
        content: "expect(onPressMock).toHaveBeenCalledTimes(1); }); });",
      },
      {
        type: "paragraph",
        content:
          "Explanation Render the component We use render() from @testing-library/react-native to render the component in a virtual DOM in Node.js. Nothing is displayed on a real device; it\u2019s all in memory.",
      },
      {
        type: "paragraph",
        content:
          "Test text rendering In the first test, getByText('Click Me') searches for the Text element. If it exists, the test passes. This verifies that the component renders the title correctly.",
      },
      {
        type: "paragraph",
        content:
          "Test button press We create a mock function using jest.fn() and pass it as onPress. fireEvent.press(getByTestId('my-button')) simulates a button press. Finally, expect(onPressMock).toHaveBeenCalledTimes(1) checks that the handler was called exactly once. This ensures that the button behaves correctly when interacted with.",
      },
      {
        type: "paragraph",
        content: "Isolation",
      },
      {
        type: "paragraph",
        content: "We don\u2019t need a real device or simulator.",
      },
      {
        type: "paragraph",
        content: "Native modules are not involved here.",
      },
      {
        type: "paragraph",
        content: "The test is fast and deterministic.",
      },
      {
        type: "paragraph",
        content:
          "Key Takeaways Unit tests in React Native verify small units of code in isolation.",
      },
      {
        type: "paragraph",
        content:
          "Using @testing-library/react-native, you can simulate interactions and check rendering.",
      },
      {
        type: "paragraph",
        content:
          "Jest\u2019s mock functions let you test callbacks without depending on actual implementation.",
      },
      {
        type: "paragraph",
        content:
          "These tests are fast, repeatable, and ideal for catching regressions. In Jest (the testing framework used in React Native), describe and it (or test) serve different but complementary purposes in structuring tests.",
      },
      {
        type: "paragraph",
        content:
          "describe is used to group related tests together. Think of it as a container or a section for a set of tests that share a common context. It doesn\u2019t execute a test by itself; it just helps organize your tests and can also apply setup/teardown logic to all tests in the group using hooks like beforeEach or afterEach. Example: describe('MyButton component', () => { // All tests related to MyButton go here });",
      },
      {
        type: "paragraph",
        content:
          "Here, we\u2019re saying: \u201cThis group contains tests for the MyButton component.\u201d You can nest describe blocks if needed.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "it (or test) defines a single test case\u2014an actual executable check of behavior. Each it block should test one specific expectation or behavior.\nExample:\nit('renders the correct title', () => {\n  // render the component\n  // assert that the title is displayed\n});\n\nit('calls onPress when pressed', () => {\n  // simulate a button press\n  // assert that the handler is called\n});",
      },
      {
        type: "paragraph",
        content:
          "Each it block is independent and runs separately. If one fails, it doesn\u2019t affect the others.",
      },
      {
        type: "paragraph",
        content:
          "Analogy describe \u2192 A chapter in a book (groups related content)",
      },
      {
        type: "paragraph",
        content: "it \u2192 A paragraph in that chapter (tests a single idea)",
      },
      {
        type: "paragraph",
        content:
          "Key Points You can have multiple it blocks inside a describe.",
      },
      {
        type: "paragraph",
        content:
          "describe can be nested, e.g., grouping tests by component, feature, or scenario.",
      },
      {
        type: "paragraph",
        content:
          "it always contains the actual expectations/assertions that Jest runs.",
      },
      {
        type: "paragraph",
        content:
          "describe is optional; you can write it blocks directly, but describe helps readability and organization, especially for large test suites.",
      },
      {
        type: "paragraph",
        content:
          "\ud83d\udd39 CI/CD, Build & Release (Senior Level) Explain your CI/CD pipeline for RN In a React Native project, a CI/CD pipeline is a structured workflow that automatically builds, tests, and deploys your app to testers or stores, ensuring consistent quality and faster delivery. The pipeline is split into Continuous Integration (CI) and Continuous Deployment/Delivery (CD) stages. In my typical setup, it starts with source code management. Whenever a developer pushes code to a branch, say main or develop, the CI system\u2014like GitHub Actions, CircleCI, or Bitrise\u2014is triggered. The first step in CI is installing dependencies, usually npm install or yarn install, and sometimes caching node_modules to speed up builds. Then, the pipeline runs linting and static analysis to enforce code quality and unit tests with Jest or integration tests using Detox or React Native Testing Library. This ensures that new code doesn\u2019t break existing functionality. Once tests pass, the pipeline moves to building the app for both platforms. For iOS, it uses Xcode command-line tools (xcodebuild) to generate .ipa files, and for Android, it uses Gradle to produce .apk or .aab bundles. If signing credentials are needed, these are securely stored in the CI environment. The next stage is artifact distribution and deployment. For development or QA, builds can be uploaded to TestFlight, Firebase App Distribution, or HockeyApp, giving testers immediate access. For production, the CD step might automatically submit builds to the Apple App Store or Google Play Store, sometimes after a manual approval gate. Additional steps in my pipeline include versioning and release notes generation, automated changelog updates, and optional static code analysis or security checks. I also monitor build times and failures, and configure notifications via Slack or email for immediate feedback. The key in React Native pipelines is handling cross-platform builds, native dependencies, and environment-specific configurations (like API keys or feature flags) securely and reliably, while ensuring tests run fast and consistently. This setup guarantees that every commit goes through a repeatable process, reducing human error and maintaining app quality.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "how-do-you-automate-builds-using-github-actions",
    question: "How do you automate builds using GitHub Actions?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "Build & release",
  },
  {
    id: "how-do-you-handle-environment-based-builds",
    question: "How do you handle environment-based builds?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "Build & release",
  },
  {
    id: "how-do-you-manage-app-versioning",
    question: "How do you manage app versioning?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "Native & tooling",
  },
  {
    id: "how-do-you-reduce-apk-ipa-size",
    question: "How do you reduce APK/IPA size?",
    answer: [
      {
        type: "paragraph",
        content:
          "Reducing APK (Android) or IPA (iOS) size in React Native is important for faster downloads, lower storage usage, and better performance. React Native apps tend to be larger because they include the JS bundle, native libraries, images, fonts, and third-party dependencies. To optimize size, you focus on removing unnecessary assets, optimizing libraries, and configuring the build correctly.",
      },
      {
        type: "paragraph",
        content:
          "In React Native, the first step is enabling code minification and stripping debug symbols. For Android, you enable ProGuard/R8 in build.gradle, which removes unused Java/Kotlin code and shrinks libraries. For iOS, you enable Dead Code Stripping in Xcode, which removes unused classes and methods from compiled binaries. Next is bundle optimization. The JS bundle can be minified and compressed using Metro\u2019s production mode: react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/",
      },
      {
        type: "paragraph",
        content:
          "This produces a smaller minified JS bundle without development metadata. Another major factor is removing unused assets. Images, fonts, and other resources add significantly to size. Using react-native-asset to manage assets and only including what you need, plus compressing images (WebP for Android, PNG compression for iOS), reduces binary size. Third-party dependencies can bloat apps. Always audit your dependencies, remove unused libraries, and prefer modular imports rather than importing entire libraries. For example, instead of import _ from 'lodash', import only the functions you need. For Android, splitting APKs per ABI (arm64-v8a, armeabi-v7a, x86) ensures users download only the code for their device, not all architectures. In build.gradle: splits { abi { enable true reset() include 'armeabi-v7a', 'arm64-v8a' universalApk false } }",
      },
      {
        type: "paragraph",
        content:
          "For iOS, enabling bitcode and app thinning ensures users only download resources and binaries required for their device. Other optimizations include removing console logs, disabling dev-only packages in production, and using ProGuard/R8 rules to strip unused native code.",
      },
      {
        type: "paragraph",
        content:
          "In short: Reducing APK/IPA size in React Native is achieved by minifying JS, stripping unused native code, compressing and limiting assets, auditing dependencies, splitting builds by architecture, and enabling platform-specific optimizations. These steps make the app faster, smaller, and production-ready.",
      },
    ],
    topic: "Build & release",
  },
  {
    id: "how-do-you-handle-ota-updates",
    question: "How do you handle OTA updates?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "Build & release",
  },
  {
    id: "what-are-your-app-release-strategies",
    question: "What are your app release strategies?",
    answer: [
      {
        type: "paragraph",
        content: "\ud83d\udd39 System Design (RN-specific)",
      },
    ],
    topic: "Build & release",
  },
  {
    id: "how-would-you-design-a-scalable-rn-app-from-scratch",
    question: "How would you design a scalable RN app from scratch?",
    answer: [
      {
        type: "paragraph",
        content:
          "Designing a scalable React Native app from scratch requires thinking beyond just building screens\u2014it\u2019s about structuring the architecture, state management, navigation, APIs, and assets so the app remains maintainable, performant, and easy to extend as it grows. I would start by defining a modular folder structure that separates concerns. Typically, the app would have directories like components for reusable UI pieces, screens for full-page views, services or api for network requests, state for global or feature-level state, and utils for helper functions. This separation makes it easy to locate and change code without affecting unrelated areas. Next, state management is critical. For small, isolated state, I\u2019d use useState or useReducer within components. For global, cross-cutting state, I prefer Redux Toolkit or Zustand, depending on complexity. Redux Toolkit is ideal for larger apps with multiple developers and predictable state flows, while Zustand is lightweight and works well for medium-sized apps. I\u2019d enforce immutability and structure state by feature domain to prevent tangled updates. Navigation should be planned upfront. Using React Navigation, I\u2019d design a combination of stack, tab, and drawer navigators, and manage navigation state centrally if needed. Deep linking, authentication flows, and role-based access should be considered early to avoid messy hacks later. API layer design is another pillar. I would create a service layer that handles network requests, retries, caching, and error handling. Libraries like Axios with interceptors, or React Query for caching and server state management, make this layer maintainable. For large apps, handling pagination, offline mode, and data persistence is essential. Performance and scalability come from using memoization (React.memo, useMemo, useCallback), lazy loading components, and optimizing lists with FlatList or FlashList. Native modules should be abstracted so the JS layer doesn\u2019t depend on platform-specific details unnecessarily. Finally, I\u2019d integrate CI/CD pipelines for automated testing, builds, and deployment, and enforce coding standards, testing (unit and integration), and code reviews to keep the codebase maintainable. Asset management\u2014fonts, images, icons\u2014would use a centralized approach to reduce duplication. In short, a scalable RN app is built with a modular structure, clean state and API management, thoughtful navigation, performance optimization, and automated pipelines, ensuring that as the app grows, new features can be added with minimal friction and technical debt.",
      },
      {
        type: "paragraph",
        content: "Folder structure for large apps.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-handle-feature-based-architecture",
    question: "How do you handle feature-based architecture?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "Architecture",
  },
  {
    id: "how-do-you-handle-multiple-themes",
    question: "How do you handle multiple themes?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-handle-localization",
    question: "How do you handle localization?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-handle-real-time-updates",
    question: "How do you handle real-time updates?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-design-reusable-components",
    question: "How do you design reusable components?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "how-do-you-prevent-tight-coupling",
    question: "How do you prevent tight coupling?",
    answer: [
      {
        type: "paragraph",
        content:
          "\ud83d\udd39 Behavioral + Real Experience (Very Important) Describe a production performance issue you fixed. One production performance issue I faced in a React Native app was related to UI jank and slow screen transitions when loading a property listing screen with hundreds of items and images. Users were experiencing frame drops and occasional freezes, especially on mid-range devices. After profiling the app with Flipper and React DevTools, I discovered that the problem was caused by three main factors: first, the FlatList was rendering too many items at once without proper optimization; second, heavy image loading was happening synchronously on the JS thread; and third, some components were re-rendering unnecessarily due to passing non-memoized functions and objects as props. To fix it, I implemented several optimizations: I switched the listing to use FlatList with initialNumToRender, windowSize, removeClippedSubviews, and getItemLayout for efficient virtualization, which reduced the number of items rendered off-screen. I also used react-native-fast-image to asynchronously load images with caching, offloading decoding from the JS thread. Then, I wrapped expensive components in React.memo and memoized callback functions with useCallback to prevent unnecessary re-renders. Finally, I offloaded some heavy calculations to InteractionManager so that they would run after animations completed, preventing UI blocking. After these changes, the screen became smooth, animations and scrolling were consistent at 60 FPS, and app responsiveness improved significantly across all devices. Monitoring via Flipper showed that the JS thread was no longer blocked, and CPU usage dropped during list rendering. This experience reinforced the importance of profiling, understanding the JS and native thread interaction, optimizing FlatLists, memoizing components, and offloading heavy work in React Native production apps to solve real-world performance issues.",
      },
    ],
    topic: "App development",
  },
  {
    id: "explain-a-scaling-challenge-you-faced",
    question: "Explain a scaling challenge you faced.",
    answer: [
      {
        type: "paragraph",
        content:
          "One scaling challenge I faced in a React Native app was when our team was building a property listing platform with thousands of listings, multiple filters, and live updates. Initially, the app worked fine with a small dataset, but as the backend data grew and more users started interacting, we began seeing slow screen transitions, delayed state updates, and excessive memory usage. The problem became particularly noticeable when users applied filters or scrolled through large lists\u2014the app would lag or even crash on mid-range devices. After investigating, we identified a few bottlenecks. First, the FlatList was rendering too many items at once without proper virtualization, causing the JS thread to stay busy while layout and rendering operations accumulated. Second, our global Redux state held all listings in memory, and every filter change triggered full re-renders of the screen, leading to unnecessary computations. Third, image loading was blocking the JS thread because we were decoding large images synchronously. To solve this, we took a multi-layered approach. We optimized the FlatList by using initialNumToRender, windowSize, and removeClippedSubviews, which limited how many items were rendered off-screen. We refactored our state management: instead of keeping all listings in Redux, we paged the data and stored only what was currently visible in state, using React Query for server caching and background updates. We memoized components and callbacks with React.memo and useCallback to prevent unnecessary re-renders. Images were switched to react-native-fast-image, which handled caching and asynchronous decoding. Finally, we offloaded heavy layout calculations to the native thread using InteractionManager and avoided synchronous computations on the JS thread. After these changes, the app handled thousands of listings smoothly, scrolls and animations were fluid, and memory usage dropped significantly. This experience taught me that scaling a React Native app isn\u2019t just about backend optimization; you have to carefully manage rendering, state, and threads on the client side to ensure smooth performance at scale.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-mentor-junior-developers",
    question: "How do you mentor junior developers?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-handle-pr-reviews",
    question: "How do you handle PR reviews?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "how-do-you-make-technical-decisions",
    question: "How do you make technical decisions?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "App development",
  },
  {
    id: "describe-a-feature-you-implemented-end-to-end",
    question: "Describe a feature you implemented end-to-end.",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-handle-disagreements-with-product-design",
    question: "How do you handle disagreements with product/design?",
    answer: [
      {
        type: "callout",
        tone: "info",
        title: "Answer content needed",
        content:
          "This prompt is in the supplied notes, but no answer text followed it. Add the answer here when ready.",
      },
    ],
    topic: "App development",
  },
  {
    id: "how-do-you-balance-speed-vs-quality",
    question: "How do you balance speed vs quality?",
    answer: [
      {
        type: "paragraph",
        content: "\ud83c\udfaf Ultra-short interview answers (practice)",
      },
    ],
    topic: "App development",
  },
  {
    id: "biggest-rn-bottleneck",
    question: "Biggest RN bottleneck?",
    answer: [
      {
        type: "paragraph",
        content: "\u2192 JS thread blocking",
      },
    ],
    topic: "App development",
  },
  {
    id: "best-optimization-tool",
    question: "Best optimization tool?",
    answer: [
      {
        type: "paragraph",
        content: "\u2192 Profiling before optimizing",
      },
    ],
    topic: "Performance",
  },
  {
    id: "the-most-common-mistake",
    question: "The most common mistake?",
    answer: [
      {
        type: "paragraph",
        content: "\u2192 Overusing memoization",
      },
      {
        type: "paragraph",
        content:
          "However, in the New Architecture, the bridge is going to be replaced with a module called JavaScript Interface, which is a lightweight, general-purpose layer, written in C++ that can be used by the JavaScript engine to directly invoke/call methods in the native realm. Another big advantage of the JSI is that it is written in C++. With the power of C++ React Native can target a large number of Systems like Smart TVs, Watches etc.",
      },
    ],
    topic: "App development",
  },
];
