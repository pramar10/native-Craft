import type { InterviewQuestion } from "./interview-types";
import { code, diagram, list, namedPoints, paragraph, points } from "./utils";

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
          "The React Native bridge is a communication mechanism that allows JavaScript code to interact with native code in a React Native application. Since React Native apps run JavaScript code, but need to interface with the native components and APIs of the platform (iOS or Android), the bridge serves as a connection between these two worlds. In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components Native Components. React Native comes with a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's {color:#2b8a3e}Core Components.{/color}",
      },
      {
        type: "paragraph",
        content:
          "Here\u2019s how it works: \n**JavaScript Side**: On the JavaScript side, when you write React Native code, you\u2019re essentially writing JavaScript that describes how your app should look and behave. This code interacts with React Native components and APIs just like you would in a web environment.\n**Native Side**: On the native side (iOS or Android), React Native provides a set of native modules and components that correspond to the functionality you use in your JavaScript code. These native modules and components are written in the respective platform\u2019s native languages (Objective-C/Swift for iOS, Java/Kotlin for Android).\n**Bridge**: The React Native bridge serves as a communication channel between the JavaScript runtime and the native runtime. When you use a React Native component or call a native module from your JavaScript code, React Native translates these calls into messages that are passed over the bridge to the native side.\n**Execution**: On the native side, these messages are received by the bridge and interpreted. If it\u2019s a request to create or update a native UI component, the native code handles the creation or update. If it\u2019s a request to execute a native function, the corresponding native code is invoked.\n**Return Values**: Similarly, if the native code needs to communicate back to the JavaScript side (for example, when an event occurs in the native UI), it sends messages back over the bridge to the JavaScript runtime.",
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
          "React Native Yoga is a cross-platform layout engine developed by Facebook for React Native applications. It\u2019s responsible for calculating and applying the layout of components within a React Native app. Here\u2019s a brief explanation: \n**1.Cross-Platform**: React Native Yoga is designed to work consistently across different platforms (iOS, Android, and others). This ensures that your app\u2019s layout behaves consistently regardless of the underlying platform. \n**2.Flexbox-based**: React Native Yoga implements the Flexbox layout model, which is a popular layout system used in web development. Flexbox allows you to create complex layouts with ease by providing a set of rules for distributing and aligning elements within a container. \n**3. Efficient and Performant**: React Native Yoga is optimized for performance. It uses a highly efficient algorithm to calculate the layout of components, ensuring smooth rendering and responsiveness even in complex UIs. \n**4. Responsive Design**: With Flexbox, React Native Yoga enables responsive design, allowing components to adapt their layout based on factors such as screen size, orientation, and device type. This makes it easier to create apps that look good on a wide range of devices. \n**5. Integration with React Native**: React Native Yoga seamlessly integrates with the React Native framework, allowing developers to define layout rules using React Native\u2019s declarative syntax. This makes it easy to create and manage layouts within React Native apps using familiar tools and techniques.",
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
          "**1.Main/UI Thread**: Responsible for handling the native UI rendering, user interactions, and UI updates. All UI-related operations, such as rendering components, responding to touch events, and updating the layout, occur on this thread. It\u2019s crucial to keep this thread responsive to ensure smooth user experience. Long-running tasks should be avoided on this thread to prevent UI freezes. \n**2.JavaScript Thread (JS Thread)**: The JavaScript thread, sometimes referred to as the \u201cJS thread\u201d or \u201cBridge thread\u201d executes your JavaScript code. Responsible for running your React Native application\u2019s JavaScript logic, including handling state changes, executing business logic, and managing application flow. Communicates with the native UI thread via the bridge. Since JavaScript execution can be computationally intensive, performing heavy computations or blocking operations on this thread can degrade performance and lead to UI unresponsiveness. \n**3.Shadow Thread**: React Native introduced a concept called the \u201cShadow Thread\u201d in later versions. This thread is responsible for preparing UI updates based on the changes in the JavaScript state. It works in tandem(Together/In sync) with the JavaScript thread to calculate the layout changes and prepare UI updates to be sent over the bridge. By offloading some work from the main JavaScript thread, the shadow thread helps improve performance and UI responsiveness.",
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
          "In React Native, JavaScript and native code (Java/Swift/Objective-C) live in separate realms. JavaScript runs in its own thread using the JavaScript engine, while native UI components run in the main thread of the device. To make them work together, React Native uses a \u201cbridge\u201d \u2013 an asynchronous communication layer that allows data to pass between the JavaScript and native worlds. Whenever JavaScript wants to interact with something native\u2014like triggering a camera, updating a view, or responding to a gesture\u2014it sends a message across this bridge. The same happens when native code needs to notify JavaScript, such as after a button is pressed or a device sensor changes. The bridge works fine for many use cases, but it becomes a problem when there's a lot of back-and-forth communication or time-sensitive data transfer. Since it's asynchronous and serializes the data (bundled into JSON strings), large or frequent data exchanges can introduce delays(serializing and deserializing). This makes things like high-frame-rate animations, real-time audio processing, or rapid gesture interactions harder to implement smoothly. That\u2019s why in performance-critical areas, developers either move logic to the native side, reduce the frequency of communication, or use newer solutions like JSI (JavaScript Interface) and Fabric architecture, which aim to eliminate the old bridge altogether by allowing synchronous, direct access between JavaScript and native code.",
      },
      {
        type: "paragraph",
        content:
          'How It Works Your app logic (e.g., "when the user taps a button, play a sound") runs in the JavaScript thread. UI rendering and native API access (e.g., camera, sensors, animations) happen in the native layer. The bridge translates and sends messages between them asynchronously.',
      },
      {
        type: "paragraph",
        content:
          "Why It Can Be a Bottleneck The bridge: Is not synchronous it works like a message queue. Has a limited bandwidth only a certain amount of data can be passed per frame. Adds latency because every interaction between JS and native layers needs a round-trip. So when there's a lot of communication \u2014 like in smooth animations, real-time updates, or heavy user interactions the bridge can get overwhelmed, causing: UI lag Dropped frame Slow responses Example Suppose you're building a real-time drawing app: Every finger movement generates dozens of touch events per second. Each touch event needs to go from native \u2192 bridge \u2192 JS \u2192 bridge \u2192 native to update the drawing on screen. This constant back-and-forth slows things down, making the drawing appear laggy.",
      },
      {
        type: "paragraph",
        content:
          "Native Apps don't have this problem. In pure native apps, everything runs on the native side, so there's no bridge \u2014 operations are faster and more seamless.",
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
    id: "what-should-be-handled-in-ui-thread",
    question: "What Should be handled in UI Thread?",
    answer: [
      {
        type: "paragraph",
        content:
          "Rendering views needs to update screen quickly and smoothly Animations (native). To ensure 60 FPS and fluid experience responding to touch events fast response to user interactions layout changes (e.g., resize) happens on native view hierarchy",
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
    question: "What Should be handled in JavaScript Thread?",
    answer: [
      {
        type: "paragraph",
        content:
          "Business logic Doesn\u2019t need direct access to native views API calls / network requests can run in background and update state later State updates and logic Managed by React on JS side Redux, context, local storage Non-UI logic that shouldn\u2019t block rendering",
      },
      {
        type: "paragraph",
        content:
          "Rule: Anything related to logic, decisions, or data should be handled in the JS thread Problems. If not used properly mistake consequence heavy JS work (e.g., looping over 1000 items) freezes the UI since JS thread is blocked. Too many UI updates from JS Bridge gets overloaded, causing jank Animating via JS (instead of native driver) lower frame rate, laggy UI.",
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
    id: "memory-leaks-in-react-native",
    question: "Memory leaks in react native?",
    answer: [
      {
        type: "paragraph",
        content: `A memory leak in React Native occurs when an application continues holding references to objects, components, event listeners, timers, subscriptions, or other resources that are no longer needed.As a result, memory usage keeps increasing even when the user navigates between screens or performs repeated actions.\nEventually, this can cause:\n- App performance degradation.\n- Slow screen navigation.\n- UI freezing or unexpected crashes.\n- Increased battery consumption.\n- Android OutOfMemoryError.\n- iOS memory warnings or app termination.`,
      },
      {
        type: "paragraph",
        content: "How memory leaks happen(with solution)?",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Uncleared Timers and Intervals",
            content:
              "When you use functions like setInterval, setTimeout, or setImmediate, and don\u2019t clear them using clearInterval() or clearTimeout() during component unmount, they continue to run in the background. This keeps the component in memory, even though it\u2019s no longer on screen.",
          },
          {
            heading: "Event listeners and Subscriptions",
            content:
              "If you don't remove the listener, it can remain registered after the component unmounts. For example, if you add a listener to the device orientation or network status and forget to remove it, the callback function will still hold a reference to the component.",
          },
          {
            heading: "Retaining References in Closures",
            content:
              "Sometimes closures (functions defined inside components) retain references to variables or component state. If these closures are used in timers, listeners, or background tasks, they can accidentally keep the whole component in memory. Example: An async function capturing this or state and still running after the component unmounts will prevent garbage collection.",
          },
          {
            heading: "API calls after component unmounts",
            content:
              "Imagine a screen that calls an API. Before the response arrives, the user navigates away.The request may still complete, and its callback may attempt to update state unnecessarily.Solution using AbortController:",
            language: "javascript",
            code: `useEffect(() => {
  const controller = new AbortController();

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { signal: controller.signal }
      );

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error);
      }
    }
  };

  fetchUsers();

  return () => controller.abort();
}, []);`,
            bottomContent:
              "This cancels the request when the component unmounts, provided the underlying request supports cancellation.",
          },
          {
            heading: "WebSocket subscriptions",
            content:
              "WebSockets can remain connected even after the screen is closed.",
            code: `useEffect(() => {
  const socket = new WebSocket("wss://example.com");

  socket.onmessage = event => {
    console.log(event.data);
  };

  return () => {
    socket.close();
  };
}, []);`,
          },
          {
            heading: "Navigation event listeners",
            content:
              "When using React Navigation, screen components may remain mounted even when they are not visible.For example, you might subscribe to a location update or socket event every time a screen gains focus. Use useFocusEffect with cleanup:",
            code: `import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";

function HomeScreen() {
  useFocusEffect(
    useCallback(() => {
      const subscription = someEventEmitter.addListener(
        "update",
        data => {
          console.log(data);
        }
      );

      return () => {
        subscription.remove();
      };
    }, [])
  );

  return null;
}`,
          },
          {
            heading: "AppState listeners",
            content:
              "React Native provides AppState to monitor whether the application is active, inactive or in the background.",
            code: `import { AppState } from "react-native";

useEffect(() => {
  const subscription = AppState.addEventListener(
    "change",
    nextState => {
      console.log(nextState);
    }
  );

  return () => {
    subscription.remove();
  };
}, []);`,
          },
          {
            heading: "Large images and FlatList",
            content:
              "Loading too many large images or rendering thousands of components can cause excessive memory consumption. For large datasets, prefer FlatList.",
            code: `<FlatList
  data={users}
  keyExtractor={item => item.id.toString()}
  renderItem={({ item }) => <UserCard user={item} />}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={5}
  removeClippedSubviews
/>`,
            bottomContent:
              "FlatList virtualizes the list, reducing the number of items rendered at once. This helps manage memory, although it does not guarantee that every image or resource is released immediately.",
          },
        ],
      },
    ],
    topic: "Performance",
  },
  {
    id: "How to identify memory leaks in React Native",
    question: "How to identify memory leaks in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Identifying memory leaks in React Native involves monitoring the app's memory usage and looking for signs that certain objects or components are not being released from memory as expected. Here are some methods to identify memory leaks:",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Android Studio Profiler",
            content: `Monitor memory consumption. Identify increasing Java/Kotlin heap usage. Inspect allocations and garbage collection.`,
          },
          {
            heading: "Xcode Instruments",
            content: `Use Allocations.
Use Leaks instrument.
Inspect memory allocations and retained objects.`,
          },
          {
            heading: "React Native DevTools",
            content: `Inspect JavaScript heap.
Take heap snapshots.
Identify retained objects and memory growth.
Investigate component-related issues.`,
          },
          {
            heading: "Use Flipper with React Native Debugger",
            content:
              "Flipper is a platform for debugging mobile apps. It provides a Memory plugin that allows you to monitor memory usage, take snapshots, and analyze retained objects.",
          },
          {
            heading: "Enable and Use Hermes Engine",
            content:
              "Hermes is an open-source JavaScript engine optimized for React Native. It provides tools to profile memory usage and detect leaks.",
          },
          {
            heading: "Watch for Warnings in Console",
            content:
              'React Native sometimes shows warnings like: "Can\'t perform a React state update on an unmounted component." This is often a sign of memory leaks, especially due to uncleaned timers, async tasks, or setState after unmount.',
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
          "Monitoring memory leaks in a React Native app involves using tools to track memory usage over time, identify unreleased objects, and trace back to the code causing the leak. Here's how you can do it: \n1. Use Flipper with React Native Debugger \n2. Enable and Use Hermes Engine \n3. Watch for Warnings in Console React Native sometimes shows warnings like: \"Can't perform a React state update on an unmounted component.\" This is often a sign of memory leaks, especially due to: Uncleaned timers Async tasks SetState after unmount",
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
          "A react native app is made up of two separate pieces: **native code** and  **javascript code**. The problem is since it's two different languages they can't speak to each other, they are isolated in their own little lonely worlds. But luckily we have the react native bridge which is how the native code and the javascript code talk to each other. Without the bridge there is no way for the native code to send any information to the javascript code or vice versa. But how does it work to figure that out let's look at what happens when an app starts up: you tap the app icon and the operating system creates a main thread also called a ui thread and assigns it to our app the main thread spawns(creates and starts) a javascript thread and then the shadow thread sometimes called the shadow tree. Now the shadow tree's job is to calculate the layouts that we define on the javascript side and send that information to the native side what if we want to disable a button we've created well to disable a button we set a property on the javascript side which will be sent over the bridge as a {color:#339af0}serialized json object{/color} updates to native views are batched together and sent over to the native side at the end of each iteration of the javascript event loop in addition to passing properties across the bridge. We can also pass a function across the page to use as a callback. Say if a button is pressed then the native event is sent to the javascript site and the callback is executed now the majority of the time everything runs smoothly. But like a real-life fridge you can occasionally get traffic jams when you have a big list of items and start scrolling really fast you might see a blank screen before the rest of the items are shown this is because the on scroll native event is being sent to the javascript thread the javascript thread sends the new layout information to the shadow tree the shadow tree calculates the layout and sends it back to the native side.",
      },
      {
        type: "paragraph",
        content:
          "When scrolling fast you get a bunch of these events which causes a traffic jam across the bridge and you also get performance problems when running complex animations .",
      },
      {
        type: "paragraph",
        content:
          "For example say we have an ios device running at 60 frames per second which gives it that nice smooth lifelike feel after one frame is shown you have roughly 16 milliseconds to run code and display the next frame if you take too long then the frame is dropped and your app appears unresponsive or just laggy so with complex animations it's best to say on the ui thread as much as possible. Now facebook is well aware of some of the performance hits when using the bridge and they've been working on a whole new architecture for react native. That will address these performance issues. They have implemented called the javascript interface or jsi which will sit between the javascript code and the javascript engine. Currently react native runs on javascript core which is already part of ios because it runs a safari browser but javascript core has to be shipped with your android react native app and it has some performance issues on low end or older androids not to mention making the bundle larger. But now we have hermes which is a lightweight javascript engine optimized for running react native on android so this new JSI will sit in between the javascript code and either javascript core or hermes or any other javascript engine we want to swap to as a side. Note when you run react native and debug mode it actually runs in chrome which uses the v8 engine in rare cases that can lead to some inconsistencies between how javascript runs in debug versus production swapping out javascript engines is nice and all but the real benefit to using JSI is the javascript side and the native side can finally talk to each other you will not have to serialize a json message and send it over the bridge to talk to the other side holy the new shadow tree will be written in C++ and shared across both sides currently all interactions over the bridge are asynchronous.",
      },
      {
        type: "paragraph",
        content:
          "But in the future we will be able to synchronously execute actions over the bridge solving the performance issues around scrolling large lists that we just talked about this works because javascript will be able to have a reference to the C++ object and invoke methods on it.",
      },
      {
        type: "paragraph",
        content:
          "Earlier I mentioned all native modules used by the javascript code have to be initialized on startup which can impact performance as a part of the new react native architecture that will change the javascript code will load only the module when it's actually needed no more using the old bridge because a javascript code can hold a direct reference to what is now called a turbo module this is going to improve startup times for apps that use a lot of native modules.",
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
          "The New Architecture was introduced in React Native{color:#1c7ed6} 0.68{/color} and became enabled by default in React Native {color:#1c7ed6}0.76{/color}. That release made Fabric and TurboModules available by default for new projects; earlier releases introduced the pieces incrementally.",
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
          "AsyncStorage is a simple, unencrypted, persistent, key-value storage system that is global to the app. Four key features React Native provides a simple and efficient way to persist data locally using the AsyncStorage module. This is particularly useful for storing user preferences, authentication tokens, or any other data that needs to persist across app restarts. \n1. Simple: Core Functionality Involves Set And Get Methods.\n2. Unencrypted: Access is controlled by location access. \n3. Persistent: Data Is Saved Until It Is Explicitly Deleted. \n4. Global: Saved data is global to the app All AsyncStorage operations are asynchronous and therefore return a Promise.",
      },
      // {
      //   type: "paragraph",
      //   content: "App Lifecycle Using AppState",
      // },
      // {
      //   type: "paragraph",
      //   content:
      //     "Everything we have been doing so far assumes that our app is loaded on the screen and is running as a foreground process. We need to be able to perform background processes or safely save the user's data in case the OS suspends it or the user quits it. AppState provides information on the current state of the app: active indicates that the app is running in the foreground background indicates that the app is running in the background inactive indicates that the app is transitioning between foreground and background",
      // },
      // {
      //   type: "paragraph",
      //   content:
      //     "Reconciliation: The Dynamic Dance of Components In React, when you change something in your app (like updating some data), React wants to update what the user sees on the screen accordingly. But rather than re- rendering everything from scratch every time there\u2019s a change, React is smart about it. Here\u2019s how it works: 1. Virtual DOM: React keeps a virtual representation of what your UI looks like. It\u2019s like a blueprint of your actual UI, but it\u2019s not directly visible to the user. 2. Diffing Algorithm: When there\u2019s a change, React compares this new blueprint (virtual DOM) with the previous one to see what\u2019s different. It\u2019s like comparing two versions of a drawing to see what lines were added, removed, or changed. 3. Minimal Changes: React figures out the smallest possible number of changes needed to update the actual UI based on the differences it found. It\u2019s like finding the most efficient way to tweak your drawing to reflect the changes. 4. Updating the DOM: Finally, React applies these minimal changes to the real DOM (what the user sees on the screen) so that it accurately reflects the updated virtual DOM. It does this in the most efficient way possible, so it\u2019s fast and doesn\u2019t cause unnecessary work. In simple terms, React\u2019s reconciliation with a diffing algorithm is like a clever artist who only makes the necessary adjustments to a drawing instead of redrawing everything from scratch every time there\u2019s a change. This approach makes React apps are fast and efficient, providing a smooth user experience.",
      // },
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
          "The React Native component lifecycle consists of the following phases. Mounting Phase Creation: When a component is first created, it enters the mounting phase. Constructor: The component\u2019s constructor is called, where you can initialize state and bind methods. Render: The render( ) method is invoked, returning the initial UI representation. \nComponentDidMount: After rendering, componentDidMount( ) is called. It\u2019s a good place for side effects (e.g., data fetching) and setting up subscriptions. Updating Phase Props or State Change: When a component\u2019s props or state changes, it re-enters the updating phase. ShouldComponentUpdate: React checks if the component should update by calling shouldComponentUpdate( ). You can optimize performance here. Render: If the component should update, it re-renders using the updated props and state. ComponentDidUpdate: After rendering, componentDidUpdate( ) is called. Useful for handling side effects after an update. Unmounting Phase Removal: When a component is removed from the DOM, it enters the unmounting phase. \nComponentWillUnmount: Before unmounting, componentWillUnmount( ) is called. Clean up resources (e.g., cancel subscriptions). Error Handling If an error occurs during rendering or in lifecycle methods, the error handling phase is triggered. Use componentDidCatch( ) to handle errors gracefully.",
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
    ],
    topic: "App development",
  },
  {
    id: "Discuss-the-benefits-and-drawbacks-of-using-Expo-for-React-Native-development",
    question:
      "Discuss the benefits and drawbacks of using Expo for React Native development",
    answer: [
      {
        type: "paragraph",
        content:
          "Expo offers a streamlined way to start React Native development, providing a set of pre-built components, tools, and services. This accelerates the development process and reduces the need for native module configuration. However, there are benefits and drawbacks to using Expo: \nBenefits: \nExpo simplifies setup: It abstracts the complexity of native modules, making it easier for developers to start building quickly without dealing with platform-specific configuration. \nOver-the-air updates: Expo enables seamless updates to apps without requiring users to download new versions from the app store. \nAccess to native functionality: Expo provides a wide range of APIs to access device features like camera, location, and more. \nUnified codebase: With Expo, you can develop for both iOS and Android using a single codebase, saving time and effort. \nDrawbacks: \nLimited native module support: Expo restricts access to certain native modules which might limit your app's capability if you require deep native integration. \nBigger app size: Expo includes its runtime in the app package, potentially leading to larger app sizes compared to bare React Native projects. \nDependency on Expo services: If Expo services are discontinued or changed, it could impact your app's functionality and maintenance. \nCustomization constraints: Expo's tooling might not provide the flexibility needed for complex customization, especially in cases where you need to integrate third-party native libraries. \nIn summary, Expo is an excellent choice for rapid prototyping, smaller apps, or when you want to get started quickly. However, for more complex applications that require deep native integrations and greater customization, a bare React Native setup might be more suitable.",
      },
    ],
    topic: "App development",
  },
  {
    id: "benefits-and-drawbacks-of-using-React-Native-for-cross-platform-mobile-development",
    question:
      "Discuss the benefits and drawbacks of using React native cli for React Native development.",
    answer: [
      {
        type: "paragraph",
        content:
          "Full control over native code (Android/iOS) and project configuration. \nIdeal for integrating custom native modules or third-party SDKs not supported by Expo. \nNo dependency on a managed ecosystem like Expo \u2013 fewer abstractions. \nMore lightweight project setup \u2013 only includes what you add. \nBetter suited for complex or enterprise-level applications with custom requirements. \nEasier to optimize performance through native-level tweaks. \nDrawbacks: \nSteeper learning curve, especially for developers without native mobile development experience. \nMore complex setup and configuration (e.g., Xcode, Android Studio, SDK paths). \nManual linking and native dependency management can be time-consuming. \nHarder to debug issues that originate from native code or build configurations. \nNo out-of-the-box features like Expo provides (e.g., over-the-air updates, device preview tools). \nUpdating React Native and related dependencies requires more effort and care",
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
          "Props drilling occurs when props are passed from a top-level component to multiple nested components, even though some intermediate components do not use those props. This can lead to cluttered code and reduced maintainability. To avoid props drilling, you can use techniques like Context API or Redux. \nContext API: React's Context API allows you to share the state between components without directly passing props. You can create a context at the top level and provide it to any component that needs the shared data. \nRedux: Redux is a state management library that centralizes the state of your app. It eliminates the need to pass props down through many layers of components by allowing any component to access the state from the store. These approaches can help you ensure that components only receive the data they need, reducing unnecessary prop passing and making your codebase cleaner and more maintainable.",
      },
    ],
    topic: "Core concepts",
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
    ],
    topic: "State & data",
  },
  {
    id: "shouldcomponentupdate-in-react-native",
    question: "What is the purpose of shouldComponentUpdate in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "ShouldComponentUpdate is a lifecycle method that allows you to control whether a component should update and re-render when its props or state change. By default, React components re-render whenever there's a change in props or state. However, in some cases, you might want to optimize performance by preventing unnecessary renders. Use **shouldComponentUpdate **when you have expensive operations in your render method or when you want to avoid re-renders that wouldn't change the component's output. However, don\u2019t overuse it as it can make your code more complex and harder to maintain. \n\nNote: In modern React, you might prefer using React.memo higher-order component (HOC) or the useMemo hook for similar optimization purposes.",
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
          "The Virtual DOM is a concept in React (and React Native) that represents the UI as an in-memory tree structure of components. When there are changes to a component's props or state, React generates a new Virtual DOM tree, compares it with the previous one using a process called \"reconciliation\", and then updates the actual DOM with the minimal necessary changes. In React Native, the Virtual DOM operates similarly to how it does in the web version of React. However, instead of directly manipulating the browser's DOM, React Native's Virtual DOM communicates with the native platform's UI elements. \nThe relevance of the Virtual DOM in React Native includes: \nPerformance optimization: The Virtual DOM allows React Native to minimize actual DOM manipulations, resulting in improved performance by batching updates and reducing the number of reflows and repaints. \nCross-platform consistency: React Native's Virtual DOM enables a consistent development experience across different platforms (iOS, Android). Developers write code targeting the Virtual DOM which is then translated to platform-specific UI components. \nDeveloper productivity: Developers can focus on writing declarative UI code while letting React Native handle the efficient rendering updates. This makes the development process more productive and less error-prone. \nReconciliation control: The Virtual DOM's reconciliation process ensures that only necessary updates are applied to the UI. This avoids unnecessary re-renders and enhances the app's responsiveness. \nIn summary, the Virtual DOM is a key component of React Native's architecture that contributes to its performance, cross-platform capabilities, and developer-friendly approach.",
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
          "Achieving a responsive design in React Native involves creating layouts that adapt effectively to different screen sizes and orientations. Here are some techniques: \nFlexbox: React Native uses Flexbox for layout which allows components to dynamically adjust their size and position based on available space. It's crucial for creating responsive designs. \nDimensions API: You can use the Dimensions module to get the screen dimensions and adjust your layout accordingly. \nPlatform-specific code: React Native provides platform-specific extensions (e.g., Platform.OS) to write code that's specific to iOS or Android. This allows you to fine-tune your design for each platform. \nOrientation changes: Listen for orientation change events and update your UI accordingly. You can use the Dimensions module or the react-native-orientation-locker library. \nResponsive fonts: Use the PixelRatio module to adjust font sizes based on screen density. \nLayout components: Libraries like react-native-responsive-screen provide components that adapt their size based on the screen dimensions. \nMedia queries: You can use the react-native-responsive library to implement CSS-like media queries for responsive styling. By combining these techniques, you can create UIs that look and feel great on a variety of devices and screen sizes.",
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
          "Push notifications are essential for keeping users engaged with an app. To handle push notifications in a React Native app, these steps can be followed: \nSet up push notification services Integrate a push notification service like Firebase Cloud Messaging (FCM) or Apple Push Notification Service (APNs) for iOS. \nRequest permissions Use the react-native-push-notification or @react-native-community/push-notification-ios library to request notification permissions from users. \nHandle registration Register the device token with the push notification service. The token is necessary for sending notifications to the device. \nHandle notifications Configure the app to handle incoming notifications, whether the app is foregrounded, backgrounded, or closed. You can define custom behaviors based on notification data. \nDisplay notifications Use the notification library to display local or remote notifications to users. Here's a basic example of handling push notifications using react-native-push-notification:",
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
          "Bi-directional communication involves the exchange of data and events between parent and child components. React Native provides ways to achieve this: \nProps: Pass data from parent to child components using props. Child components receive data as props and can trigger events by using callbacks passed from the parent. \nContext API: Use the Context API to share data between components that are not directly connected in the component tree. This avoids the need to pass props through intermediate components. State management libraries: Libraries like Redux and MobX enable global state management, allowing any component to access and modify shared state. \nEvents and callbacks: Child components can emit events or call callbacks provided by the parent components to communicate changes or trigger actions. \nReact hooks: Use custom hooks to encapsulate stateful logic and share it across components, enabling reusable behavior. Native modules (for native communication): For complex scenarios, you can create native modules that expose native functionality to JavaScript and vice versa. The choice of communication method depends on the complexity of your app and the level of decoupling you need between components.",
      },
    ],
    topic: "App development",
  },
  {
    id: "role-safeareaview-react-native",
    question:
      "Discuss the role of 'SafeAreaView' in React Native and why it's important. ",
    answer: [
      {
        type: "paragraph",
        content:
          "SafeAreaView is a component provided by React Native that ensures content is displayed within safe insets, avoiding overlaps with notches, status bars, and navigation bars on various devices. It's particularly important for creating a consistent and user-friendly UI across different screen sizes and device types. \nKey points: \nSafe insets: Notches, status bars, and navigation bars can vary in size and shape across devices. SafeAreaView automatically calculates and applies insets to your content to prevent it from being obstructed. \nConsistent UI: By using SafeAreaView, you ensure that critical UI elements and content are always visible and accessible, enhancing the user experience. \nPlatform specifics: SafeAreaView accounts for platform-specific guidelines and automatically adjusts the layout based on the device's platform (iOS or Android). \nEase of use: Wrapping your top-level components or screens with SafeAreaView will enable it to handle insets for you. Here's a basic example of how to use SafeAreaView:",
      },
      {
        type: "paragraph",
        content:
          "Using SafeAreaView helps you design your app in a way that accommodates the unique characteristics of different devices, providing a polished and visually pleasing experience for users.",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "how-can-you-implement-a-custom-font-in-a-react-native-app",
    question: "How can you implement a custom font in a React Native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "To implement a custom font in a React Native app, these steps can be followed: \nPlace your font files (usually in .ttf or .otf format) in a folder within your project directory. \nLink fonts For iOS, add the font files to your Xcode project and ensure they're included in the target. \nFor Android, create an XML font resource file and link the font files. \nInstall dependencies Install the react-native-vector-icons package, which provides a convenient way to manage and use custom fonts. \nImport and use fonts Import and use the custom font in your components using the Text component. You can set the fontFamily style property to the font's name. Here's an example of implementing a custom font:",
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
          "Bridge communication in React Native refers to the mechanism that enables JavaScript code to communicate with native code on the device. Since React Native apps run JavaScript code on a separate thread from the native UI, this bridge facilitates the exchange of data and events between the two environments. Key points: \nAsynchronous communication: The bridge handles asynchronous communication between JavaScript and native modules. JavaScript sends requests to native modules, which are executed on the native thread, and the results are then sent back to JavaScript. Native modules: Native modules are JavaScript modules that expose methods to be called from JavaScript. These modules are implemented in the native code (Java/Objective-C) and provide access to native functionality.\nPerformance: The bridge allows React Native to achieve native performance by delegating heavy computations and UI rendering to the native side. \nSerialization and deserialization: Data sent between JavaScript and native code is serialized and deserialized as JSON, ensuring compatibility between the two environments.\nCommunication overhead: Frequent communication between JavaScript and native code can introduce communication overhead. It's important to optimize communication patterns for performance. The bridge communication is a fundamental part of React Native's architecture, enabling seamless integration of native functionality into the JavaScript-based UI layer. ",
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
    id: "native-modules-in-react-native",
    question: "Explain the use of 'native modules' in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "Native modules in React Native are JavaScript modules that provide a bridge between the JavaScript code and the native code of the underlying platforms (iOS and Android). They enable you to access native functionality and APIs that are not available out-of-the-box in React Native. \nKey points: \nAccessing native APIs: Native modules allow you to tap into the platform-specific APIs and capabilities of iOS and Android. This is crucial when you need to perform tasks like accessing device sensors, interacting with device hardware, and using platform-specific UI components. \nCustom functionality: You can create native modules to expose custom native functionality to your React Native app. \nMethod exports: Native modules export methods that can be called from JavaScript. These methods can accept parameters and return values. \nAsynchronous communication: Methods in native modules often involve asynchronous communication with the native side, which is common for tasks like fetching data from a network. \nPlatform-specific implementation: Each platform (iOS and Android) requires separate implementation of native modules using platform-specific code (Objective-C/Swift for iOS and Java/Kotlin for Android).",
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
  },
  // {
  //   id: "what-are-the-limitations-of-react-native",
  //   question: "What are the limitations of React Native?",
  //   answer: [
  //     {
  //       type: "paragraph",
  //       content:
  //         "While React Native offers many advantages, it also has some limitations: Performance: React Native achieves native performance for most use cases but certain complex and graphics-intensive tasks may still require native code for optimal performance. Limited access to native APIs: While React Native provides access to many native APIs, there might be cases where you need to write custom native modules to access specific platform features. Third-party libraries: Not all native libraries are readily available for React Native. Some might need to be wrapped or rewritten to work with React Native. UI flexibility: Although React Native provides a rich set of UI components, intricate UI designs might require custom native code or third-party libraries. Debugging: Debugging React Native apps can sometimes be more challenging compared to debugging web applications, particularly when dealing with interactions between JavaScript and native code. Version compatibility: Keeping up with React Native updates and ensuring compatibility with third-party libraries can sometimes be time-consuming. Platform-specific design: Some platform-specific design guidelines might be challenging to implement consistently across iOS and Android. Learning curve: React Native has a learning curve, especially for developers new to JavaScript or those transitioning from native app development. Despite these limitations, React Native remains a powerful framework for cross-platform app development, offering a productive and efficient way to build mobile applications.",
  //     },
  //   ],
  //   topic: "App development",
  // },
  {
    id: "how-would-you-handle-state-synchronization-between-react-components",
    question:
      "How would you handle state synchronization between React components?",
    answer: [
      {
        type: "paragraph",
        content:
          "State synchronization involves ensuring that different React components share and display the same state accurately. You can achieve this using the following approaches: \nLifting state: If multiple components need to share the same state, lift that state to their common ancestor. Pass the state down as props to child components, ensuring they stay in sync. \nContext API: Use the Context API to share the state between components that are not directly connected in the component tree. This avoids prop drilling and simplifies state management. State management libraries: Use state management libraries like Redux or MobX to centralize and manage the state of your application, ensuring that all components access the same source of truth. \nReact hooks: Use React hooks like useState, useEffect, and useContext to manage and share states within functional components. Event emitter/observer pattern: Implement a custom event emitter or observer pattern to notify components of state changes and keep them synchronized. Local storage/AsyncStorage: For persisting data across components or sessions, you can store the state in local storage or AsyncStorage. The approach you choose depends on the complexity of your app and the scale of state synchronization needed.",
      },
    ],
    topic: "State & data",
  },
  {
    id: "role-layoutanimation-react-native",
    question:
      "Discuss the role of 'LayoutAnimation' for creating smooth transitions in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "LayoutAnimation is a module in React Native that allows you to create smooth animations and transitions for layout changes. It simplifies the process of animating changes in component sizes, positions, and appearances. \nKey points: \nEase of use: LayoutAnimation provides a simple way to create animations without needing to explicitly manage animation frames. \nImplicit animations: With LayoutAnimation, you define animation properties (such as duration and easing) and the framework automatically animates the changes for you. \nIntegration with state changes: You can use LayoutAnimation alongside state changes to create animations that respond to changes in your app's data. \nPerformance: LayoutAnimation is designed to be performant and efficient, ensuring smooth animations even on lower-end devices. \nSupported animations: LayoutAnimation supports various types of animations including scaling, fading, and sliding. Example:",
      },
      {
        type: "paragraph",
        content:
          'In this example, when the "Toggle Expansion" button is pressed, the height of the blue View element smoothly transitions between two values.',
      },
    ],
    topic: "Animation",
  },
  {
    id: "how-can-you-implement-background-tasks-in-a-react-native-app",
    question: "How can you implement background tasks in a React Native app?",
    answer: [
      {
        type: "paragraph",
        content:
          "Background tasks are important for performing operations that don't require user interaction when the app is not in the foreground. React Native provides mechanisms to achieve background tasks: \nHeadless JS: Use Headless JS to run JavaScript code in the background, even when the app is closed. This is useful for tasks like data synchronization, sending analytics, and processing notifications. \nBackground fetch: Use the react-native-background-fetch library to schedule background fetches that can periodically update data or trigger actions. \nPush notifications: While not true background tasks, push notifications can be used to prompt the app to perform certain actions or updates when they arrive. Native nodules: For tasks that require native capabilities, you can create custom native modules that handle background tasks on the native side. \nBackground geolocation: Use the react-native-background-geolocation library to track device location and perform tasks based on location changes, even when the app is in the background. Example (Headless JS):",
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
          "The react-navigation library is a popular choice for handling navigation in React Native apps. It provides a flexible and customizable way to manage navigation between different screens and components. Basic usage: \nInstallation: Install the required packages using npm or yarn. npm install @react-navigation/native @react-navigation/stack \nCreate navigator: Set up a navigation stack by creating a navigator using createStackNavigator.",
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
    ],
    topic: "Native & tooling",
  },
  {
    id: "error-handling-in-react-native",
    question:
      "Discuss the use of 'ErrorUtils' in error handling within a React Native app.",
    answer: [
      {
        type: "paragraph",
        content:
          "ErrorUtils' is a utility provided by React Native to enhance error handling. It allows you to catch JavaScript errors that occur outside of the normal execution flow such as those in asynchronous code or event handlers. By wrapping your code with ErrorUtils.setGlobalHandler, you can specify a custom function to handle these errors. This is especially useful in production environments to gracefully handle unexpected errors and prevent crashes, enabling you to provide a better user experience.",
      },
    ],
    topic: "Error handling",
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
    ],
    topic: "Build & release",
  },
  {
    id: "pure-component-in-react-native",
    question:
      "Discuss the role of 'PureComponent' in React Native and when to use it.",
    answer: [
      {
        type: "paragraph",
        content:
          "'PureComponent' is a base class in React Native (and React) that optimizes the rendering performance of a component by automatically implementing a shallow comparison of the component's props and state. It helps to prevent unnecessary re-renders when there are no changes in the data.",
      },
      {
        type: "paragraph",
        content:
          "Use 'PureComponent' when a component's output is solely determined by its props and state without any additional complex logic or side effects. This can lead to performance improvements, especially in components that render frequently.",
      },
    ],
    topic: "Performance optimization",
  },
  {
    id: "react-native-webview",
    question:
      "Discuss the use of 'react-native-webview' for embedding web content in a React Native app.",
    answer: [
      {
        type: "paragraph",
        content:
          "'react-native-webview' is a component that allows you to embed web content (HTML, JavaScript, etc.) within a React Native app. It provides a bridge between native code and web code, enabling you to display web-based features seamlessly.",
      },
      {
        type: "paragraph",
        content:
          "This can be useful for showing external websites, web-based authentication, and integrating third-party web services. However, it's important to be cautious with security and performance considerations as web views can impact app performance and introduce potential vulnerabilities if not used carefully.",
      },
    ],
    topic: "WebView",
  },
  {
    id: "webviews-in-react-native",
    question:
      "What are WebViews in React Native, and when should you use them?",
    answer: [
      {
        type: "paragraph",
        content:
          "'WebViews' in React Native allows you to embed web content (HTML, JavaScript, etc.) within your app as a separate view. It's useful when you need to display external web pages, render interactive web-based components, or integrate third-party web services.",
      },
      {
        type: "paragraph",
        content:
          "While 'WebViews' provide flexibility, keep in mind that they introduce additional memory and performance overhead. Use them judiciously and consider factors like security, loading times, and responsiveness when integrating them in an app.",
      },
    ],
    topic: "WebView",
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
    ],
    topic: "Native & tooling",
  },
  {
    id: "geolocation-in-react-native",
    question:
      "Discuss the role of Geolocation in obtaining the user's current location in a React Native app.",
    answer: [
      {
        type: "paragraph",
        content:
          "Geolocation provides access to the device's GPS capabilities to determine the user's current geographic location. By using the navigator.geolocation object, you can request the user's permission to access location services and retrieve latitude and longitude coordinates. This is useful for building location-based apps, mapping features, and providing location-specific content. Handling location permissions and accuracy considerations are crucial aspects of using Geolocation.",
      },
    ],
    topic: "Geolocation",
  },
  {
    id: "bridgeless-architecture-react-native",
    question:
      "Explain the concept of Bridgeless architecture in React Native and its relationship with the Hermes engine.",
    answer: [
      {
        type: "paragraph",
        content:
          "Bridgeless architecture is an approach in React Native that aims to reduce communication overhead between JavaScript and native code by minimizing reliance on the traditional bridge. It optimizes communication between JavaScript and native components, reducing frequent data serialization and deserialization. This can improve app startup performance and reduce memory consumption.",
      },
    ],
    topic: "React Native architecture",
  },
  {
    id: "react-native-version-updates-migrations",
    question:
      "How do you handle version updates and migrations in a React Native project?",
    answer: [
      {
        type: "paragraph",
        content:
          "Handling version updates and migrations in a React Native project involves several steps: \nVersion control: Use a version control system (e.g., Git) to track changes and maintain different app versions. \nDependency management: Keep track of your app's dependencies and ensure they are up-to-date. Use tools like yarn or npm for managing packages. \nReact Native upgrade: Regularly update your React Native version to benefit from performance improvements, bug fixes, and new features. \nTest updates: Thoroughly test your app after each update to ensure compatibility and identify any issues. \nContinuous integration: Implement a CI/CD pipeline to automate testing and deployment for smoother updates. \nBackward compatibility: Ensure backward compatibility with older app versions and handle data migration if needed.",
      },
    ],
    topic: "Version updates and migrations",
  },
  {
    id: "navigation-push-vs-navigate",
    question:
      "What is the difference between navigation.push() and navigation.navigate() in React Navigation?",
    answer: [
      {
        type: "paragraph",
        content:
          "Navigation.push() always pushes a new instance of the route onto the navigation stack. Even if you're already on that screen, it creates another instance. Use it when you want to visit the same screen multiple times with different data, such as opening a Profile screen for different users.",
      },
      {
        type: "paragraph",
        content:
          "Example: navigation.push('Profile', { userId: 123 }); navigation.push('Profile', { userId: 456 }); // Another Profile screen is added on top.",
      },
      {
        type: "paragraph",
        content:
          "navigation.navigate(routeName, params?) generally navigates to an existing route when possible rather than always adding a duplicate screen. If the route is not already in the stack, it adds it. Use it for general navigation where you don't want unnecessary duplicate screens.",
      },
      {
        type: "paragraph",
        content: "Example: navigation.navigate('Home');",
      },
    ],
    topic: "React Navigation",
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
          "The Animated API in React Native runs on the JavaScript thread. This means any animation is processed through the JS runtime, which can lead to performance issues if the JS thread is busy\u2014for example, when handling network calls or heavy computations. Animations may stutter or lag in such scenarios. It\u2019s suitable for simple animations like fading, scaling, or basic transitions, and is often used for lightweight UI work. \nOn the other hand, react-native-reanimated runs animations on the UI thread using a system of \u201cworklets.\u201d This allows animations to stay smooth even when the JS thread is blocked. It\u2019s highly optimized and designed for complex, gesture-driven interfaces. It integrates deeply with react-native-gesture-handler, supports native gesture coordination, and allows writing declarative animation logic that executes independently from the JS thread. In short, use Animated for simple animations when performance isn't a critical concern. Use react-native-reanimated for smoother, more complex, and gesture-aware animations that need native-level responsiveness.",
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
          "'DeviceEventEmitter' and 'NativeEventEmitter' are mechanisms for handling events between JavaScript and native code in React Native. 'DeviceEventEmitter' is a part of the core 'react-native' package and is used for emitting and listening to events from the native side in JavaScript. \n'NativeEventEmitter' is a wrapper around the native platform's event emitter and provides a more consistent API. These mechanisms allow you to communicate changes, actions, or events between different parts of your app's codebase, enabling seamless coordination and interaction.",
      },
    ],
    topic: "App development",
  },
  {
    id: "navigation-container-react-native",
    question:
      "Discuss the role of NavigationContainer and its significance in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "NavigationContainer is a core component of the React Navigation library that manages the navigation tree for an app. It acts as a container for navigation components such as StackNavigator, DrawerNavigator, and TabNavigator.",
      },
      {
        type: "paragraph",
        content:
          "NavigationContainer provides a common context for navigation state, enabling navigation components to communicate and coordinate seamlessly. It simplifies navigation setup and ensures a consistent navigation experience throughout your React Native app.",
      },
    ],
    topic: "React Navigation",
  },
  {
    id: "how-can-you-optimize-a-react-native-application",
    question: "How can you optimize a React Native application?",
    answer: [
      {
        type: "paragraph",
        content:
          "Optimize native libraries, Compress graphic elements and images Reduce image size using file types such as APNG instead of PNG Compress raw JSON data or convert them into static object IDs. Optimize the number of state operations and use React components when necessary Use SectionList, FlatList, and VirtualizedList for large data sets,clear active timers which can lead to heavy memory leakage problems",
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
          "Touchable components capture tapping gestures. They can display feedback when a hand gesture is recognized. However, because they don't provide a default styling. It requires work to make them look nice. For instance, they can be implemented as user-friendly buttons. They should also explain the four types of touchable components: \nTouchableHighlight is used when creating a link or button on the web; the background of this component becomes dark when the user presses it. \nTouchableNativeFeedback creates a view to respond properly to touch. It only works for Android systems. \nTouchableOpacity is used to lower the opacity of a button. \nTouchableWithoutFeedback is used to tap functionality without displaying any feedback. ",
      },
    ],
    topic: "Core concepts",
  },
  {
    id: "flexbox-react-native",
    question: "What is Flexbox? Name three important Flexbox properties.",
    answer: [
      {
        type: "paragraph",
        content:
          "Flexbox in React Native is a layout system that helps developers create flexible and responsive UI layouts. It allows developers to control the size, position, and spacing of elements relative to their parent and sibling components.",
      },
      {
        type: "paragraph",
        content: "Three important Flexbox properties include:",
      },
      {
        type: "heading",
        content: "1. flexDirection",
      },
      {
        type: "paragraph",
        content:
          "The flexDirection property defines the primary axis along which child components are arranged. React Native uses column as the default value. Other values include row, row-reverse, and column-reverse.",
      },
      {
        type: "heading",
        content: "2. justifyContent",
      },
      {
        type: "paragraph",
        content:
          "The justifyContent property defines how child components are distributed along the primary axis. Common values include flex-start, center, flex-end, space-between, space-around, and space-evenly.",
      },
      {
        type: "heading",
        content: "3. alignItems",
      },
      {
        type: "paragraph",
        content:
          "The alignItems property defines how child components are aligned along the secondary (cross) axis. Common values include flex-start, center, flex-end, stretch, and baseline.",
      },
    ],
    topic: "Flexbox and Layout",
  },
  {
    id: "apk-aab-ipa-react-native",
    question:
      "Explain the difference between APK, AAB, and IPA formats when publishing mobile applications.",
    answer: [
      {
        type: "heading",
        content: "1. APK (Android Package)",
      },
      {
        type: "paragraph",
        content:
          "APK is the standard format for packaging Android applications for distribution and installation. It is the file that gets installed directly on Android devices.",
      },
      {
        type: "heading",
        content: "2. AAB (Android App Bundle)",
      },
      {
        type: "paragraph",
        content:
          "AAB is a publishing format introduced by Google Play. It contains the app's code and resources but is not directly installable on Android devices. Instead, Google Play uses it to generate optimized APKs tailored to each user's device configuration.",
      },
      {
        type: "heading",
        content: "3. IPA (iOS App Store Package)",
      },
      {
        type: "paragraph",
        content:
          "IPA is the application package format used for iOS apps. It contains the app's executable and resources and is used for distribution through Apple's App Store and other supported distribution methods.",
      },
    ],
    topic: "App build and deployment",
  },
  {
    id: "react-native-performance-optimization",
    question:
      "How do you improve the performance of a React Native application?",
    answer: [
      {
        type: "paragraph",
        content:
          "Improving the performance of a React Native app involves a multi-pronged approach that addresses architecture, rendering efficiency, memory management, network usage, and build optimizations.",
      },
      {
        type: "paragraph",
        content:
          "Key strategies include optimizing FlatList, reducing unnecessary re-renders, using Hermes, optimizing images, lazy-loading components, managing application state efficiently, and profiling the application to identify bottlenecks.",
      },
    ],
    topic: "Performance optimization",
  },
  {
    id: "codepush-react-native",
    question:
      "Discuss the use of CodePush for over-the-air (OTA) updates in React Native.",
    answer: [
      {
        type: "paragraph",
        content:
          "CodePush is an over-the-air update service originally provided by Microsoft through App Center. It enables React Native developers to deliver JavaScript code, images, and other assets to users without requiring a new app store release for every update.",
      },
      {
        type: "paragraph",
        content:
          "It is useful for delivering bug fixes, feature updates, and UI changes quickly. It also supports deployment strategies such as staged rollouts and rolling back problematic updates.",
      },
      {
        type: "paragraph",
        content:
          "CodePush updates only JavaScript bundles and assets. It cannot update native code, such as native modules or SDK upgrades. Updates must remain compatible with the native application version installed on the user's device.",
      },
      {
        type: "paragraph",
        content:
          "Note: Microsoft App Center retired its CodePush service in 2025. For new projects, developers should evaluate maintained alternatives such as Expo Updates.",
      },
    ],
    topic: "OTA updates",
  },
  {
    id: "codepush-implementation",
    question: "How do you integrate CodePush into a React Native application?",
    answer: [
      {
        type: "code",
        language: "JavaScript",
        content:
          "import codePush from 'react-native-code-push';\n\nconst codePushOptions = {\n  checkFrequency: codePush.CheckFrequency.ON_APP_START,\n};\n\nfunction App() {\n  // Your main component\n}\n\nexport default codePush(codePushOptions)(App);",
      },
      {
        type: "paragraph",
        content:
          "Updates can be released using the CodePush CLI. For example: appcenter codepush release-react -a <owner>/<app-name> -d Production.",
      },
    ],
    topic: "OTA updates",
  },
  {
    id: "headless-js-react-native",
    question: "What is Headless JS in React Native, and where is it used?",
    answer: [
      {
        type: "paragraph",
        content:
          "Headless JS is a React Native feature that allows JavaScript tasks to run in the background without displaying a user interface.",
      },
      {
        type: "paragraph",
        content:
          "It can be used for background tasks such as synchronizing fresh data, handling certain push notification workflows, and performing background processing.",
      },
    ],
    topic: "Background processing",
  },
  {
    id: "profiling-react-native",
    question: "What is profiling in React Native, and why is it important?",
    answer: [
      {
        type: "paragraph",
        content:
          "Profiling is the process of analyzing an application's performance, resource usage, and runtime behavior to identify bottlenecks and inefficiencies.",
      },
      {
        type: "paragraph",
        content:
          "Profiling helps developers measure memory consumption, execution time, function call frequency, and rendering performance. This information helps identify performance issues and implement appropriate solutions.",
      },
      {
        type: "paragraph",
        content:
          "Profiling is essential for maintaining a responsive application and delivering a smooth user experience across different devices and operating conditions.",
      },
    ],
    topic: "Performance profiling",
  },
  {
    id: "native-profiling-tools",
    question:
      "Which tools can be used to profile React Native applications on Android and iOS?",
    answer: [
      {
        type: "paragraph",
        content:
          "For iOS, Xcode Instruments is an important profiling tool that helps analyze CPU usage, memory consumption, leaks, and application performance.",
      },
      {
        type: "paragraph",
        content:
          "For Android, Android Studio Profiler and system tracing tools can be used to analyze CPU usage, memory, network activity, and rendering performance.",
      },
      {
        type: "paragraph",
        content:
          "Performance should be evaluated using release builds with development mode disabled. Development mode introduces additional overhead and can produce misleading performance results.",
      },
    ],
    topic: "Performance profiling",
  },
  {
    id: "hermes-engine-performance",
    question:
      "What is Hermes in React Native, and how does it improve performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "Hermes is an open-source JavaScript engine optimized for running React Native applications. It improves application startup time, memory usage, and JavaScript execution efficiency.",
      },
      {
        type: "paragraph",
        content:
          "In release builds, Hermes compiles JavaScript into bytecode ahead of time. This reduces the need to parse JavaScript source code during application startup.",
      },
      {
        type: "paragraph",
        content:
          "Hermes also supports features such as bytecode precompilation and optimized garbage collection, helping improve application performance.",
      },
    ],
    topic: "Hermes engine",
  },
  {
    id: "lazy-loading-react-native",
    question:
      "What is lazy loading in React Native, and how does it improve application performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "Lazy loading is a technique that delays loading components or modules until they are actually required. It helps reduce the amount of JavaScript code that needs to be loaded during the initial application startup.",
      },
      {
        type: "paragraph",
        content:
          "React provides the lazy API, which can be used with Suspense to load components when they are first rendered.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "import React, { lazy, Suspense } from 'react';\n\nconst ProfileScreen = lazy(() => import('./ProfileScreen'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<LoadingScreen />}>\n      <ProfileScreen />\n    </Suspense>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "Lazy loading is particularly useful for screen-level components that are not required immediately when the application starts.",
      },
    ],
    topic: "Lazy loading",
  },
  {
    id: "flatlist-react-native-fundamentals",
    question:
      "What is FlatList in React Native, how does it work internally, and why is it preferred over ScrollView for large lists?",
    answer: [
      {
        type: "heading",
        content: "1. What is FlatList?",
      },
      {
        type: "paragraph",
        content:
          "FlatList is a React Native component used to render a scrollable list of data efficiently. It is designed for lists where the number of items can be large or can change dynamically, such as product listings, transaction histories, chat messages, user lists, and order histories.",
      },
      {
        type: "paragraph",
        content:
          "FlatList is built on top of VirtualizedList. It uses virtualization, which means it does not need to mount every item in a large dataset at the same time. Instead, it maintains a render window around the visible area and renders additional items as the user scrolls.",
      },
      {
        type: "heading",
        content: "2. FlatList vs ScrollView",
      },
      {
        type: "paragraph",
        content:
          "ScrollView renders all of its children at once. If an API returns 1,000 records and we map all 1,000 records inside ScrollView, React Native creates and maintains all those item views, even though most are outside the screen.",
      },
      {
        type: "paragraph",
        content:
          "FlatList virtualizes the list. It renders an initial batch and additional items around the viewport as needed. This generally reduces the number of mounted item views and helps control memory consumption.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "// ScrollView: renders all mapped items\n<ScrollView>\n  {users.map(user => (\n    <UserCard key={user.id} user={user} />\n  ))}\n</ScrollView>\n\n// FlatList: virtualized list rendering\n<FlatList\n  data={users}\n  keyExtractor={item => item.id.toString()}\n  renderItem={({ item }) => <UserCard user={item} />}\n/>",
      },
      {
        type: "heading",
        content: "3. How virtualization works",
      },
      {
        type: "paragraph",
        content:
          "FlatList maintains a render window around the visible viewport. It initially renders a batch of items, keeps a configurable number of viewports around the visible area, and schedules more cells as the user scrolls. Items outside the active render window can be unmounted, while their data remains available in the data source.",
      },
      {
        type: "paragraph",
        content:
          "Rendering outside the viewport can happen asynchronously. If a user scrolls faster than the list can render new cells, blank areas may briefly appear. This is why windowSize, maxToRenderPerBatch, updateCellsBatchingPeriod, and item complexity need to be tuned together.",
      },
      {
        type: "heading",
        content: "4. Important internal behavior",
      },
      {
        type: "paragraph",
        content:
          "FlatList behaves as a PureComponent. It performs shallow comparisons of props. If data or another dependency remains the same reference, FlatList may not know that the UI needs to update. This is why immutable data updates and extraData are important.",
      },
      {
        type: "paragraph",
        content:
          "Virtualized items may be unmounted when they leave the render window. Do not rely on local component state inside a row to preserve important information such as form values, selected state, or draft content. Store that information in the data model or an appropriate external state store.",
      },
      {
        type: "heading",
        content: "5. Experienced developer answer",
      },
      {
        type: "paragraph",
        content:
          "In a production application, I use FlatList for large or dynamic datasets because it provides virtualization and better control over rendering and memory usage than rendering every row inside ScrollView. I first measure the item height, complexity, dataset size, and expected scroll behavior. Then I tune the initial render count, window size, batch rendering, and getItemLayout where dimensions are predictable. I also optimize the row component using React.memo where beneficial, use stable keys, avoid unnecessary state updates, and profile scrolling in release builds.",
      },
    ],
    topic: "FlatList fundamentals",
  },
  {
    id: "flatlist-performance-props-deep-dive",
    question: "Explain FlatList performance optimization props in detail.",
    answer: [
      {
        type: "heading",
        content: "1. initialNumToRender",
      },
      {
        type: "paragraph",
        content:
          "initialNumToRender controls how many items FlatList renders in its initial batch. Its documented default is 10. The goal is to render enough items to fill the initial viewport without mounting too many unnecessary rows.",
      },
      {
        type: "paragraph",
        content:
          "For example, if approximately six rows fit on the screen, rendering around six to eight rows may be a reasonable starting point. The exact number depends on row height, device dimensions, headers, and spacing.",
      },
      {
        type: "paragraph",
        content:
          "If the value is too low, the user may see blank areas during the initial display. If it is unnecessarily high, initial rendering takes more time and mounts more components than needed. The initial items are also retained as part of FlatList's scroll-to-top optimization.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={products}\n  initialNumToRender={8}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "2. maxToRenderPerBatch",
      },
      {
        type: "paragraph",
        content:
          "maxToRenderPerBatch controls the maximum number of new items rendered in one batch. The documented default is 10.",
      },
      {
        type: "paragraph",
        content:
          "Increasing this value can reduce blank areas during fast scrolling because more rows are rendered in each batch. However, rendering too many rows at once can occupy the JavaScript thread for longer and delay interactions such as button presses.",
      },
      {
        type: "paragraph",
        content:
          "As an experienced developer, I would not simply increase this value to the maximum. I would check whether blank cells are actually occurring and balance the fill rate against responsiveness.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={products}\n  maxToRenderPerBatch={8}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "3. updateCellsBatchingPeriod",
      },
      {
        type: "paragraph",
        content:
          "updateCellsBatchingPeriod controls the delay in milliseconds between scheduled cell-rendering batches. Its documented default is 50 milliseconds.",
      },
      {
        type: "paragraph",
        content:
          "It works together with maxToRenderPerBatch. A shorter interval schedules batches more frequently, while a longer interval reduces how often new batches are scheduled.",
      },
      {
        type: "paragraph",
        content:
          "If the interval is too long, the list may not fill quickly enough during fast scrolling. If batches are scheduled too frequently, JavaScript execution can compete with other work.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={products}\n  maxToRenderPerBatch={8}\n  updateCellsBatchingPeriod={50}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "4. windowSize",
      },
      {
        type: "paragraph",
        content:
          "windowSize controls how many viewport lengths are included in the render window. The documented default is 21: approximately 10 viewports above, one visible viewport, and 10 below.",
      },
      {
        type: "paragraph",
        content:
          "A larger windowSize keeps more rows mounted around the visible area. This can reduce the chance of seeing blank spaces during fast scrolling, but it increases the number of mounted components and memory usage.",
      },
      {
        type: "paragraph",
        content:
          "A smaller windowSize reduces the number of mounted rows and can help memory-constrained devices. However, the user may scroll beyond the rendered area before the next batch is ready.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={products}\n  windowSize={15}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "5. getItemLayout",
      },
      {
        type: "paragraph",
        content:
          "getItemLayout allows developers to provide the length and offset of an item when its dimensions are known in advance. It avoids the need for FlatList to dynamically measure item layouts in situations where fixed dimensions are available.",
      },
      {
        type: "paragraph",
        content:
          "It is especially useful for fixed-height rows, simple transaction lists, menu rows, and other predictable layouts. It can improve scrollToIndex behavior and reduce layout measurement work.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const ITEM_HEIGHT = 70;\nconst SEPARATOR_HEIGHT = 1;\n\n<FlatList\n  data={transactions}\n  getItemLayout={(data, index) => ({\n    length: ITEM_HEIGHT,\n    offset: (ITEM_HEIGHT + SEPARATOR_HEIGHT) * index,\n    index,\n  })}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "paragraph",
        content:
          "Important: The length and offset must reflect the actual layout. Include separator size in the offset calculation where applicable. Do not use a fixed getItemLayout if rows have variable heights caused by text wrapping, expanded content, or dynamic images.",
      },
      {
        type: "heading",
        content: "6. removeClippedSubviews",
      },
      {
        type: "paragraph",
        content:
          "removeClippedSubviews allows offscreen child views to be detached from their native backing view hierarchy. It can reduce work during native view traversal and drawing. The documented default is true on Android and false on iOS.",
      },
      {
        type: "paragraph",
        content:
          "This is not the same as freeing all memory occupied by those views. Detached views are not necessarily deallocated. Also, this prop can cause missing-content or layout issues in some cases, especially with transforms and absolute positioning.",
      },
      {
        type: "paragraph",
        content:
          "As an experienced developer, I would test it on both platforms with the actual row design instead of assuming that enabling it always improves performance.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={products}\n  removeClippedSubviews={true}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "7. How these props work together",
      },
      {
        type: "paragraph",
        content:
          "initialNumToRender affects the first batch, maxToRenderPerBatch controls how many cells are added in a batch, updateCellsBatchingPeriod controls the interval between batches, and windowSize controls the overall render window. getItemLayout reduces measurement work for predictable rows. removeClippedSubviews can reduce native drawing and traversal work in suitable layouts.",
      },
      {
        type: "paragraph",
        content:
          "There is no universally best combination. For a list with complex cards and images, I would usually start conservatively, profile on a lower-end Android device, and adjust one variable at a time.",
      },
      {
        type: "heading",
        content: "8. Experienced developer interview answer",
      },
      {
        type: "paragraph",
        content:
          "When optimizing FlatList, I focus on three areas: initial rendering, scrolling fill rate, and memory usage. I use initialNumToRender to cover the first viewport, maxToRenderPerBatch and updateCellsBatchingPeriod to balance rendering throughput with interaction responsiveness, and windowSize to control how many viewports stay mounted. If row dimensions are fixed, I use getItemLayout to avoid unnecessary measurement. I evaluate removeClippedSubviews carefully because it can help native rendering work but may introduce visual issues. I validate the result using release builds and real devices.",
      },
    ],
    topic: "FlatList performance optimization",
  },
  {
    id: "flatlist-core-props-explained",
    question:
      "Explain the important FlatList props such as data, renderItem, keyExtractor, extraData, ListHeaderComponent, ListFooterComponent, ItemSeparatorComponent, and ListEmptyComponent.",
    answer: [
      {
        type: "heading",
        content: "1. data",
      },
      {
        type: "paragraph",
        content:
          "data is the array or array-like collection containing the items that FlatList should display. Each element is passed to renderItem.",
      },
      {
        type: "paragraph",
        content:
          "For predictable updates, treat the data immutably. Do not mutate the existing array using methods such as push or splice and then pass the same array reference. Create a new array when adding, removing, or updating records.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const [users, setUsers] = useState([]);\n\n// Add an item immutably\nsetUsers(previous => [...previous, newUser]);\n\n// Update an item immutably\nsetUsers(previous =>\n  previous.map(user =>\n    user.id === updatedUser.id ? updatedUser : user\n  )\n);",
      },
      {
        type: "heading",
        content: "2. renderItem",
      },
      {
        type: "paragraph",
        content:
          "renderItem is the function responsible for rendering each item. It receives an object containing item, index, and separators. It should return the React element for that row.",
      },
      {
        type: "paragraph",
        content:
          "For performance, avoid putting expensive calculations, filtering, sorting, or complex data transformations inside renderItem. Prepare the data before rendering, and extract complex row UI into a separate component.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const renderItem = useCallback(({ item, index }) => {\n  return <UserCard user={item} index={index} />;\n}, []);\n\n<FlatList data={users} renderItem={renderItem} />",
      },
      {
        type: "heading",
        content: "3. keyExtractor",
      },
      {
        type: "paragraph",
        content:
          "keyExtractor returns a unique string key for each item. React uses keys to identify items during reconciliation, including when records are inserted, removed, or reordered.",
      },
      {
        type: "paragraph",
        content:
          "Prefer a stable backend ID or another persistent unique identifier. Avoid using the array index as the key when list items can be inserted, deleted, or reordered, because component identity can become associated with the wrong record.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={users}\n  keyExtractor={(item) => item.id.toString()}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "4. extraData",
      },
      {
        type: "paragraph",
        content:
          "extraData tells FlatList that its output depends on something outside the data prop. This matters because FlatList performs shallow prop comparisons. If an external value changes but the list's relevant props remain shallow-equal, the list may not update.",
      },
      {
        type: "paragraph",
        content:
          "For example, if a row displays whether it is selected, selectedId is an external dependency. Passing it through extraData makes that dependency explicit.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const [selectedId, setSelectedId] = useState(null);\n\nconst renderItem = useCallback(({ item }) => (\n  <Pressable onPress={() => setSelectedId(item.id)}>\n    <Text>\n      {selectedId === item.id ? 'Selected' : item.name}\n    </Text>\n  </Pressable>\n), [selectedId]);\n\n<FlatList\n  data={users}\n  extraData={selectedId}\n  keyExtractor={item => item.id.toString()}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "paragraph",
        content:
          "If renderItem is recreated when selectedId changes, FlatList may already receive a changed function reference. extraData is particularly important when renderItem or other list callbacks are stable and depend on external values. It is not a replacement for immutable state updates.",
      },
      {
        type: "heading",
        content: "5. ItemSeparatorComponent",
      },
      {
        type: "paragraph",
        content:
          "ItemSeparatorComponent renders a component between list items, but not before the first item or after the last item. It is useful for dividers, spacing, and visual separation.",
      },
      {
        type: "paragraph",
        content:
          "Using this prop keeps separator rendering separate from the row component. If the separator has a fixed size and getItemLayout is used, include its size in the item offset calculation.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const Separator = () => <View style={{ height: 1, backgroundColor: '#ddd' }} />;\n\n<FlatList\n  data={users}\n  ItemSeparatorComponent={Separator}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "6. ListHeaderComponent",
      },
      {
        type: "paragraph",
        content:
          "ListHeaderComponent renders content before the list items. It can be used for search fields, filters, summary cards, banners, or category information.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={products}\n  ListHeaderComponent={<ProductHeader />}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "7. ListHeaderComponentStyle",
      },
      {
        type: "paragraph",
        content:
          "ListHeaderComponentStyle applies styling to the internal container that wraps the header component. It is useful for header container layout, padding, and alignment.",
      },
      {
        type: "heading",
        content: "8. ListFooterComponent",
      },
      {
        type: "paragraph",
        content:
          "ListFooterComponent renders after the list items. It is commonly used for a load-more indicator, pagination status, or footer information.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={products}\n  ListFooterComponent={isLoadingMore ? <ActivityIndicator /> : null}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "9. ListFooterComponentStyle",
      },
      {
        type: "paragraph",
        content:
          "ListFooterComponentStyle styles the internal container around the footer. For example, it can add vertical padding or center a loading indicator.",
      },
      {
        type: "heading",
        content: "10. ListEmptyComponent",
      },
      {
        type: "paragraph",
        content:
          "ListEmptyComponent renders when the list has no items. It is useful for empty states such as No transactions found, No products available, or No search results.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          '<FlatList\n  data={products}\n  ListEmptyComponent={<EmptyState message="No products found" />}\n  renderItem={renderItem}\n/>',
      },
      {
        type: "heading",
        content: "11. ListItemComponent",
      },
      {
        type: "paragraph",
        content:
          "ListItemComponent is an alternative component for rendering each data item. It receives the same item-related props as renderItem and takes precedence over renderItem when both are supplied. In most application code, renderItem is the more commonly used and recognizable API.",
      },
      {
        type: "heading",
        content: "12. Experienced developer considerations",
      },
      {
        type: "paragraph",
        content:
          "I keep the row component independent from the screen, pass only the data it needs, use stable identifiers, and avoid changing the entire dataset for a small row update. I also keep empty, loading, error, and pagination states separate so the list behavior remains predictable.",
      },
    ],
    topic: "FlatList core props",
  },
  {
    id: "flatlist-scrolling-pagination-viewability",
    question:
      "Explain FlatList scrolling, pagination, pull-to-refresh, and viewability props with practical examples.",
    answer: [
      {
        type: "heading",
        content: "1. horizontal",
      },
      {
        type: "paragraph",
        content:
          "horizontal changes the list direction from vertical to horizontal. It is useful for carousels, category chips, recommended products, and horizontally scrolling cards.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  horizontal\n  data={categories}\n  keyExtractor={item => item.id.toString()}\n  renderItem={renderCategory}\n  showsHorizontalScrollIndicator={false}\n/>",
      },
      {
        type: "heading",
        content: "2. inverted",
      },
      {
        type: "paragraph",
        content:
          "inverted reverses the scroll direction using scale transforms. It is useful for chat interfaces where new messages appear at the bottom and the conversation is commonly presented in reverse scroll order.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={messages}\n  inverted\n  keyExtractor={item => item.id.toString()}\n  renderItem={renderMessage}\n/>",
      },
      {
        type: "paragraph",
        content:
          "Be careful with inverted lists: visual ordering, keyboard behavior, separators, and scroll-to-index calculations need to be tested against the desired message ordering.",
      },
      {
        type: "heading",
        content: "3. numColumns",
      },
      {
        type: "paragraph",
        content:
          "numColumns allows FlatList to render multiple items in each row. It is useful for product grids, photo galleries, and category grids. Multiple columns require horizontal to be false, and the items should have consistent heights. FlatList does not provide a masonry layout through numColumns.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={products}\n  numColumns={2}\n  columnWrapperStyle={{ justifyContent: 'space-between' }}\n  keyExtractor={item => item.id.toString()}\n  renderItem={renderProduct}\n/>",
      },
      {
        type: "heading",
        content: "4. columnWrapperStyle",
      },
      {
        type: "paragraph",
        content:
          "columnWrapperStyle styles the row wrapper created when numColumns is greater than one. It can be used for horizontal spacing, alignment, and row-level layout.",
      },
      {
        type: "heading",
        content: "5. onEndReached",
      },
      {
        type: "paragraph",
        content:
          "onEndReached is called when the scroll position approaches the end of the content, according to onEndReachedThreshold. It is commonly used to implement infinite scrolling or API pagination.",
      },
      {
        type: "paragraph",
        content:
          "A production implementation must guard against duplicate requests. Keep track of whether a request is already in progress, whether another page exists, and which page or cursor is being requested. Do not assume onEndReached will fire exactly once.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const loadMore = useCallback(() => {\n  if (isLoadingMore || !hasNextPage) return;\n  fetchNextPage();\n}, [isLoadingMore, hasNextPage, fetchNextPage]);\n\n<FlatList\n  data={products}\n  onEndReached={loadMore}\n  onEndReachedThreshold={0.5}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "6. onEndReachedThreshold",
      },
      {
        type: "paragraph",
        content:
          "onEndReachedThreshold controls how close the scroll position must be to the end before onEndReached is triggered. It is measured in units of visible list length. For example, 0.5 means the callback can be triggered when the end is within approximately half a viewport.",
      },
      {
        type: "paragraph",
        content:
          "A larger threshold starts loading earlier, which can reduce the chance that the user reaches the bottom before the next page arrives. A smaller threshold delays the request. Choose it based on API latency, row height, and scroll speed.",
      },
      {
        type: "heading",
        content: "7. onRefresh",
      },
      {
        type: "paragraph",
        content:
          "onRefresh is called when the user performs a pull-to-refresh gesture. When supplied, FlatList displays a standard RefreshControl. It is normally paired with the refreshing prop.",
      },
      {
        type: "heading",
        content: "8. refreshing",
      },
      {
        type: "paragraph",
        content:
          "refreshing is a boolean that indicates whether the refresh operation is currently running. It must be set to true while refreshing; otherwise, the refresh indicator may not remain visible.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const [refreshing, setRefreshing] = useState(false);\n\nconst onRefresh = async () => {\n  setRefreshing(true);\n  try {\n    await fetchLatestProducts();\n  } finally {\n    setRefreshing(false);\n  }\n};\n\n<FlatList\n  data={products}\n  refreshing={refreshing}\n  onRefresh={onRefresh}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "9. progressViewOffset",
      },
      {
        type: "paragraph",
        content:
          "progressViewOffset adjusts the vertical position of the refresh loading indicator. It is useful when the list has a custom header or when the refresh indicator needs to appear below an overlapping toolbar.",
      },
      {
        type: "heading",
        content: "10. onViewableItemsChanged",
      },
      {
        type: "paragraph",
        content:
          "onViewableItemsChanged is called when items enter or leave the viewability criteria. It receives changed and viewableItems arrays. It is useful for tracking visible content, autoplaying videos only when visible, marking messages as seen, and analytics.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const onViewableItemsChanged = useCallback(({ viewableItems }) => {\n  // Process currently viewable items\n  console.log(viewableItems.map(token => token.item.id));\n}, []);\n\n<FlatList\n  data={videos}\n  onViewableItemsChanged={onViewableItemsChanged}\n  renderItem={renderVideo}\n/>",
      },
      {
        type: "paragraph",
        content:
          "Keep the callback reference stable. Avoid doing expensive work or updating large amounts of state every time viewability changes, because that can itself create performance problems.",
      },
      {
        type: "heading",
        content: "11. viewabilityConfig",
      },
      {
        type: "paragraph",
        content:
          "viewabilityConfig determines when an item counts as viewable. It supports minimumViewTime, itemVisiblePercentThreshold, viewAreaCoveragePercentThreshold, and waitForInteraction.",
      },
      {
        type: "paragraph",
        content:
          "minimumViewTime specifies how long an item must remain visible before it is counted. itemVisiblePercentThreshold defines the percentage of the item's own area that must be visible. viewAreaCoveragePercentThreshold defines the percentage of the viewport covered by an item. waitForInteraction delays viewability reporting until the user interacts or the list records an interaction.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const viewabilityConfig = {\n  itemVisiblePercentThreshold: 70,\n  minimumViewTime: 500,\n};\n\n<FlatList\n  data={videos}\n  viewabilityConfig={viewabilityConfig}\n  onViewableItemsChanged={onViewableItemsChanged}\n  renderItem={renderVideo}\n/>",
      },
      {
        type: "paragraph",
        content:
          "Define viewabilityConfig outside the component or memoize it. React Native does not support changing the viewability configuration dynamically after the list has been initialized.",
      },
      {
        type: "heading",
        content: "12. viewabilityConfigCallbackPairs",
      },
      {
        type: "paragraph",
        content:
          "viewabilityConfigCallbackPairs allows multiple viewability configurations to be paired with separate callbacks. It is useful when the same list needs different visibility rules for different purposes, such as analytics and video playback.",
      },
      {
        type: "heading",
        content: "13. Experienced developer pagination approach",
      },
      {
        type: "paragraph",
        content:
          "For a real API-driven list, I separate initial loading, pull-to-refresh, load-more, empty state, and error handling. I use a page number or cursor from the backend, prevent concurrent pagination requests, append new records immutably, and avoid requesting beyond the last page. I also test slow networks and repeated onEndReached events.",
      },
    ],
    topic: "FlatList scrolling and pagination",
  },
  {
    id: "flatlist-advanced-and-inherited-props",
    question:
      "What are the additional FlatList props and inherited ScrollView props that an experienced React Native developer should know?",
    answer: [
      {
        type: "heading",
        content: "1. initialScrollIndex",
      },
      {
        type: "paragraph",
        content:
          "initialScrollIndex tells FlatList to start at a particular item instead of the first item. It is useful for opening a chat at a particular message or navigating directly to a selected record. It requires getItemLayout to be implemented.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={messages}\n  initialScrollIndex={20}\n  getItemLayout={(data, index) => ({\n    length: 60,\n    offset: 60 * index,\n    index,\n  })}\n  renderItem={renderItem}\n/>",
      },
      {
        type: "heading",
        content: "2. onScroll",
      },
      {
        type: "paragraph",
        content:
          "onScroll is a ScrollView prop inherited by FlatList. It is called while the list scrolls and provides information such as contentOffset, contentSize, and layoutMeasurement. It is useful for tracking scroll position, implementing custom headers, and showing a back-to-top button.",
      },
      {
        type: "paragraph",
        content:
          "Avoid performing expensive calculations or frequent React state updates on every scroll event. For high-frequency animation, consider using React Native's native-driven animation capabilities or an appropriate animation library.",
      },
      {
        type: "heading",
        content: "3. scrollEventThrottle",
      },
      {
        type: "paragraph",
        content:
          "scrollEventThrottle controls the minimum time interval between scroll events, in milliseconds. It is useful when you need to control how frequently JavaScript receives scroll events. A very frequent callback can add JavaScript workload.",
      },
      {
        type: "heading",
        content: "4. contentContainerStyle",
      },
      {
        type: "paragraph",
        content:
          "contentContainerStyle applies styles to the container wrapping the list content. It is useful for content padding, alignment, and spacing. For example, paddingBottom can prevent the last item from being hidden behind a bottom tab bar.",
      },
      {
        type: "heading",
        content: "5. style",
      },
      {
        type: "paragraph",
        content:
          "style applies styles to the FlatList's outer scroll container. Use it to control dimensions, flex behavior, and positioning.",
      },
      {
        type: "heading",
        content:
          "6. showsVerticalScrollIndicator and showsHorizontalScrollIndicator",
      },
      {
        type: "paragraph",
        content:
          "These inherited ScrollView props control whether the vertical or horizontal scroll indicator is visible. They are primarily presentation properties and are not major virtualization optimizations.",
      },
      {
        type: "heading",
        content: "7. keyboardShouldPersistTaps",
      },
      {
        type: "paragraph",
        content:
          "keyboardShouldPersistTaps controls whether taps on children are handled while the keyboard is open. It is important for searchable lists and forms containing text inputs. For example, using handled allows child controls to receive taps without requiring the keyboard to be dismissed first.",
      },
      {
        type: "heading",
        content: "8. nestedScrollEnabled",
      },
      {
        type: "paragraph",
        content:
          "nestedScrollEnabled enables nested scrolling behavior on supported platforms, particularly Android. It can be useful when a FlatList is placed inside another scrollable container. However, nesting virtualized lists inside ScrollViews can undermine virtualization and cause layout or scrolling problems. Prefer a single virtualized list with headers and footers where possible.",
      },
      {
        type: "heading",
        content: "9. maintainVisibleContentPosition",
      },
      {
        type: "paragraph",
        content:
          "This inherited scroll-view capability helps maintain the visible content position when items are inserted or removed before the current visible position. It can be useful for chat timelines and live feeds where new records are added. Test it carefully with inverted lists and complex layouts.",
      },
      {
        type: "heading",
        content: "10. extra VirtualizedList debugging props",
      },
      {
        type: "paragraph",
        content:
          "VirtualizedList exposes additional props such as debug and disableVirtualization in some React Native versions. Debugging options can help investigate rendering behavior, but debug mode has a performance cost. Do not use development-only debugging settings as production optimizations.",
      },
      {
        type: "heading",
        content: "11. Experienced developer rule",
      },
      {
        type: "paragraph",
        content:
          "I distinguish between props that control virtualization, props that control scrolling behavior, and props that control presentation. I don't change every prop for every list. I select only the options required by the user experience and validate them on the target Android and iOS devices.",
      },
    ],
    topic: "FlatList advanced props",
  },
  {
    id: "flatlist-optimized-product-list-implementation",
    question:
      "How would you implement and optimize a product listing screen in React Native using FlatList, including memoization, pull-to-refresh, infinite scrolling, and virtualization?",
    answer: [
      {
        type: "paragraph",
        content:
          "This implementation demonstrates a production-oriented product list using FlatList. It combines React.memo, useCallback, useState, stable keys, virtualization properties, pull-to-refresh, and pagination to improve rendering efficiency and user experience.",
      },
      {
        type: "heading",
        content: "1. Import required components and hooks",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "import React, { memo, useCallback, useState } from 'react';\nimport {\n  ActivityIndicator,\n  FlatList,\n  Image,\n  Pressable,\n  StyleSheet,\n  Text,\n  View,\n} from 'react-native';",
      },
      {
        type: "paragraph",
        content:
          "memo prevents ProductCard from re-rendering when its props remain shallow-equal. useCallback memoizes function references when their dependencies have not changed. useState manages the local refreshing state.",
      },
      {
        type: "heading",
        content: "2. ProductCard component using React.memo",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const ProductCard = memo(({ item, onPress }) => {\n  return (\n    <Pressable\n      style={styles.card}\n      onPress={() => onPress(item)}\n    >\n      <Image\n        source={{ uri: item.image }}\n        style={styles.image}\n      />\n\n      <Text numberOfLines={1} style={styles.name}>\n        {item.name}\n      </Text>\n\n      <Text style={styles.price}>\n        ₹{item.price}\n      </Text>\n    </Pressable>\n  );\n});",
      },
      {
        type: "paragraph",
        content:
          "ProductCard is a separate reusable component wrapped with React.memo. React compares its props using shallow comparison. If item and onPress references have not changed, React can skip rendering that card when its parent renders again.",
      },
      {
        type: "paragraph",
        content:
          "The inline onPress function inside Pressable is created when ProductCard renders. This does not automatically cause a problem because it is internal to the memoized component. The important point is that the parent passes a stable onPress reference.",
      },
      {
        type: "heading",
        content: "3. ProductList component and props",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const ProductList = ({\n  products,\n  fetchNextPage,\n  refreshProducts,\n  hasNextPage,\n  isLoadingMore,\n}) => {\n  const [refreshing, setRefreshing] = useState(false);\n\n  // Remaining implementation follows below\n};",
      },
      {
        type: "paragraph",
        content:
          "products contains the product records received from the API. fetchNextPage loads the next page. refreshProducts fetches the latest products. hasNextPage indicates whether another page is available. isLoadingMore prevents concurrent pagination requests.",
      },
      {
        type: "heading",
        content: "4. handleProductPress using useCallback",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const handleProductPress = useCallback((product) => {\n  console.log('Selected product:', product.id);\n}, []);",
      },
      {
        type: "paragraph",
        content:
          "useCallback preserves the function reference between renders because the dependency array is empty. This is useful when passing the callback to memoized child components. Here, ProductCard receives the same onPress function reference unless the parent component is remounted.",
      },
      {
        type: "heading",
        content: "5. renderItem using useCallback",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const renderItem = useCallback(({ item }) => (\n  <ProductCard\n    item={item}\n    onPress={handleProductPress}\n  />\n), [handleProductPress]);",
      },
      {
        type: "paragraph",
        content:
          "renderItem is the function FlatList calls to render each item. useCallback keeps its reference stable while handleProductPress remains unchanged. This can avoid unnecessary list updates caused by a newly created renderItem reference.",
      },
      {
        type: "heading",
        content: "6. keyExtractor",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const keyExtractor = useCallback(\n  item => item.id.toString(),\n  []\n);",
      },
      {
        type: "paragraph",
        content:
          "keyExtractor provides a unique and stable key for each product. React uses keys to identify list elements during reconciliation. A backend ID is preferred over an array index, especially when records can be inserted, removed, or reordered.",
      },
      {
        type: "heading",
        content: "7. Pull-to-refresh implementation",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const handleRefresh = useCallback(async () => {\n  setRefreshing(true);\n\n  try {\n    await refreshProducts();\n  } finally {\n    setRefreshing(false);\n  }\n}, [refreshProducts]);",
      },
      {
        type: "paragraph",
        content:
          "When the user pulls the list downward, handleRefresh executes. refreshing becomes true to display the refresh indicator. After the API request finishes, the finally block resets refreshing to false, including when the request fails.",
      },
      {
        type: "heading",
        content: "8. Infinite scrolling and pagination",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const handleLoadMore = useCallback(() => {\n  if (isLoadingMore || !hasNextPage) {\n    return;\n  }\n\n  fetchNextPage();\n}, [isLoadingMore, hasNextPage, fetchNextPage]);",
      },
      {
        type: "paragraph",
        content:
          "onEndReached invokes handleLoadMore when the user approaches the end of the list. The function checks isLoadingMore to avoid starting another request while the current request is running. It also checks hasNextPage to avoid unnecessary API calls when there are no more records.",
      },
      {
        type: "paragraph",
        content:
          "In a production application, the pagination logic should also handle duplicate triggers, API failures, page or cursor tracking, and request cancellation where appropriate. A request-level guard is useful because onEndReached is not guaranteed to execute exactly once.",
      },
      {
        type: "heading",
        content: "9. ListFooterComponent",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const ListFooter = useCallback(() => {\n  if (!isLoadingMore) return null;\n\n  return (\n    <ActivityIndicator style={styles.loader} />\n  );\n}, [isLoadingMore]);",
      },
      {
        type: "paragraph",
        content:
          "ListFooterComponent displays a loading indicator when the next page is being fetched. It returns null when pagination is not active. This provides visual feedback to users during infinite scrolling.",
      },
      {
        type: "heading",
        content: "10. FlatList implementation and performance props",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={products}\n  renderItem={renderItem}\n  keyExtractor={keyExtractor}\n\n  // Initial rendering\n  initialNumToRender={8}\n\n  // Virtualization tuning\n  windowSize={15}\n  maxToRenderPerBatch={8}\n  updateCellsBatchingPeriod={50}\n\n  // Fixed row dimensions\n  getItemLayout={(data, index) => ({\n    length: 130,\n    offset: 130 * index,\n    index,\n  })}\n\n  // Refresh\n  refreshing={refreshing}\n  onRefresh={handleRefresh}\n\n  // Pagination\n  onEndReached={handleLoadMore}\n  onEndReachedThreshold={0.5}\n\n  // List UI\n  ListFooterComponent={ListFooter}\n  ListEmptyComponent={\n    <Text>No products available</Text>\n  }\n\n  // Layout\n  contentContainerStyle={styles.container}\n  showsVerticalScrollIndicator={false}\n/>",
      },
      {
        type: "paragraph",
        content:
          "initialNumToRender={8} renders an initial batch of eight items. windowSize={15} controls the render window in viewport units. maxToRenderPerBatch={8} controls the maximum number of new cells rendered in one batch. updateCellsBatchingPeriod={50} controls the interval between scheduled batches in milliseconds.",
      },
      {
        type: "paragraph",
        content:
          "getItemLayout provides fixed item dimensions and offsets so FlatList does not need to measure every row dynamically. In this example, the card height is 118 and its bottom margin is 12, giving a total item stride of 130 points.",
      },
      {
        type: "paragraph",
        content:
          "onEndReachedThreshold={0.5} starts the pagination callback when the end is approximately half a viewport away. refreshing and onRefresh implement pull-to-refresh. ListEmptyComponent displays a message when the list has no records.",
      },
      {
        type: "heading",
        content: "11. Stylesheet",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "const styles = StyleSheet.create({\n  container: {\n    padding: 12,\n  },\n  card: {\n    height: 118,\n    marginBottom: 12,\n    padding: 10,\n    backgroundColor: '#fff',\n    borderRadius: 8,\n  },\n  image: {\n    width: 60,\n    height: 60,\n  },\n  name: {\n    fontSize: 14,\n    fontWeight: '600',\n  },\n  price: {\n    fontSize: 13,\n  },\n  loader: {\n    marginVertical: 16,\n  },\n});",
      },
      {
        type: "paragraph",
        content:
          "StyleSheet.create defines reusable styles outside the component. The product card has a fixed height of 118 points and a bottom margin of 12 points. Together, they produce the 130-point item stride used by getItemLayout.",
      },
      {
        type: "heading",
        content: "12. Export component",
      },
      {
        type: "code",
        language: "JavaScript",
        content: "export default ProductList;",
      },
      {
        type: "heading",
        content: "13. Complete execution flow",
      },
      {
        type: "list",
        content: [
          "The parent component fetches product data and passes it to ProductList.",
          "FlatList receives the products array and initially renders a limited number of rows.",
          "renderItem creates a ProductCard for each rendered product.",
          "React.memo helps skip unnecessary ProductCard renders when its props remain shallow-equal.",
          "keyExtractor provides stable product identities.",
          "getItemLayout provides predictable row measurements and offsets.",
          "When the user pulls down, handleRefresh fetches the latest products.",
          "When the user scrolls near the bottom, handleLoadMore requests another page.",
          "ListFooterComponent displays a loading indicator during pagination.",
          "FlatList manages its render window as the user scrolls.",
        ],
      },
      {
        type: "heading",
        content: "14. Experienced developer performance considerations",
      },
      {
        type: "paragraph",
        content:
          "React.memo and useCallback are not automatic performance improvements in every situation. I use them when profiling or component structure shows that stable references can prevent meaningful unnecessary work.",
      },
      {
        type: "paragraph",
        content:
          "For a production implementation, I would also verify image caching and image dimensions, use immutable product updates, handle API errors, prevent duplicate pagination requests with a request-level guard, and test on lower-end Android devices.",
      },
      {
        type: "paragraph",
        content:
          "I would validate getItemLayout against the actual rendered row dimensions. I would also profile the release build to determine whether the bottleneck is JavaScript execution, native rendering, image loading, or network latency.",
      },
      {
        type: "heading",
        content: "15. Important interview follow-up",
      },
      {
        type: "paragraph",
        content:
          "Question: If a parent component re-renders, will all ProductCard components re-render? Answer: Not necessarily. ProductCard is wrapped with React.memo, and if its item and onPress props retain the same references, React can skip rendering that card. However, if the product object changes, the callback reference changes, or the component's own state or consumed context changes, it may render again.",
      },
    ],
    topic: "FlatList practical implementation and performance",
  },
  {
    id: "flatlist-virtualization",
    question: "How does FlatList improve performance in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "FlatList uses virtualization to efficiently render large lists. Instead of rendering every item at once, it renders items around the visible area and manages additional items as the user scrolls.",
      },
      {
        type: "paragraph",
        content:
          "This reduces unnecessary rendering work and helps control memory consumption, making FlatList suitable for displaying large datasets.",
      },
      {
        type: "paragraph",
        content:
          "FlatList also provides optimization properties such as initialNumToRender, maxToRenderPerBatch, windowSize, removeClippedSubviews, and getItemLayout.",
      },
    ],
    topic: "List optimization",
  },

  {
    id: "flatlist-extradata",
    question: "What is the purpose of extraData in FlatList?",
    answer: [
      {
        type: "paragraph",
        content:
          "FlatList is a PureComponent, so it performs shallow comparisons of its props to determine whether it needs to re-render. If the data used by a list item changes without the relevant FlatList props changing, the list might not update as expected.",
      },
      {
        type: "paragraph",
        content:
          "The extraData property tells FlatList that it depends on additional external data. When that data changes, FlatList can re-render accordingly.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={items}\n  extraData={selectedId}\n  keyExtractor={(item) => item.id.toString()}\n  renderItem={renderItem}\n/>",
      },
    ],
    topic: "List optimization",
  },
  {
    id: "flatlist-keyextractor",
    question: "What is keyExtractor in FlatList, and why is it important?",
    answer: [
      {
        type: "paragraph",
        content:
          "keyExtractor is a FlatList property that extracts a unique key for each item in the list. React uses these keys to identify items efficiently during reconciliation.",
      },
      {
        type: "paragraph",
        content:
          "Using stable and unique IDs helps React identify added, removed, or updated items correctly and avoids unnecessary rendering issues.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={users}\n  keyExtractor={(item) => item.id.toString()}\n  renderItem={({ item }) => <Text>{item.name}</Text>}\n/>",
      },
    ],
    topic: "List optimization",
  },
  {
    id: "flatlist-getitemlayout",
    question:
      "What is getItemLayout in FlatList, and how does it improve performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "getItemLayout is an optional FlatList optimization property that allows developers to provide the dimensions and offsets of list items in advance.",
      },
      {
        type: "paragraph",
        content:
          "When item dimensions are fixed, FlatList does not need to measure each item dynamically. This can improve scrolling performance and make operations such as scrollToIndex more efficient.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "<FlatList\n  data={items}\n  getItemLayout={(data, index) => ({\n    length: 60,\n    offset: 60 * index,\n    index,\n  })}\n  renderItem={renderItem}\n/>",
      },
    ],
    topic: "List optimization",
  },
  {
    id: "react-native-60fps",
    question:
      "Why is the 16.67-millisecond frame duration important in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "At a refresh rate of 60 frames per second, the application has approximately 16.67 milliseconds to produce each frame.",
      },
      {
        type: "paragraph",
        content:
          "If the application takes longer than the available frame time to process and render a frame, users may experience dropped frames, stuttering, or an unresponsive interface.",
      },
      {
        type: "paragraph",
        content:
          "Developers should optimize JavaScript execution, rendering, animations, and expensive operations to maintain smooth UI performance.",
      },
    ],
    topic: "Rendering performance",
  },
  {
    id: "remove-console-statements",
    question:
      "Why should console statements be removed from production React Native applications?",
    answer: [
      {
        type: "paragraph",
        content:
          "Console statements are useful during development for debugging JavaScript code. However, excessive logging in production can introduce unnecessary processing overhead and expose sensitive debugging information.",
      },
      {
        type: "paragraph",
        content:
          "Developers should remove unnecessary console statements before creating production builds. Tools such as babel-plugin-transform-remove-console can help automate this process.",
      },
    ],
    topic: "Performance optimization",
  },
  {
    id: "react-memo-usememo-usecallback-differences",
    question:
      "What is the difference between React.memo, useMemo, and useCallback? Explain with practical examples.",
    answer: [
      {
        type: "paragraph",
        content:
          "React.memo, useMemo, and useCallback are React performance optimization techniques. They help prevent unnecessary component renders or expensive recalculations. However, each one solves a different problem.",
      },
      {
        type: "heading",
        content: "1. React.memo",
      },
      {
        type: "paragraph",
        content:
          "React.memo is a higher-order component (HOC) that memoizes a functional component. It prevents the component from re-rendering when its props have not changed according to a shallow comparison using Object.is.",
      },
      {
        type: "paragraph",
        content:
          "It is useful when a child component receives the same props repeatedly, but its parent re-renders because of unrelated state changes.",
      },
      {
        type: "heading",
        content: "Example: Without React.memo",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React, { useState } from 'react';\n\nfunction Child({ name }) {\n  console.log('Child rendered');\n  return <h2>Hello {name}</h2>;\n}\n\nexport default function Parent() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h1>Count: {count}</h1>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n      <Child name=\"Prashant\" />\n    </div>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "Execution: Every time the parent state changes, Parent re-renders. Since Child is not memoized, Child also re-renders even though its name prop remains unchanged.",
      },
      {
        type: "heading",
        content: "Example: With React.memo",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React, { memo, useState } from 'react';\n\nconst Child = memo(function Child({ name }) {\n  console.log('Child rendered');\n  return <h2>Hello {name}</h2>;\n});\n\nexport default function Parent() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h1>Count: {count}</h1>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n      <Child name=\"Prashant\" />\n    </div>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "Execution: When count changes, Parent re-renders. React.memo compares the previous and new props of Child. Since name is unchanged, React can skip rendering Child.",
      },
      {
        type: "paragraph",
        content:
          "Important: React.memo does not prevent re-rendering when the component's own state or consumed context changes. It is also not a guarantee that React will never render the component.",
      },
      {
        type: "heading",
        content: "2. useMemo",
      },
      {
        type: "paragraph",
        content:
          "useMemo is a React Hook that memoizes the result of a calculation. It caches a computed value between renders and recalculates it only when one of its dependencies changes.",
      },
      {
        type: "paragraph",
        content:
          "It is useful for expensive calculations, filtering large datasets, sorting records, or creating derived values that should remain stable between renders.",
      },
      {
        type: "heading",
        content: "Syntax",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "const memoizedValue = useMemo(() => {\n  return expensiveCalculation(data);\n}, [data]);",
      },
      {
        type: "heading",
        content: "Example: Without useMemo",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React, { useState } from 'react';\n\nexport default function ProductList({ products }) {\n  const [count, setCount] = useState(0);\n\n  const filteredProducts = products.filter(product => {\n    console.log('Filtering products');\n    return product.price > 1000;\n  });\n\n  return (\n    <div>\n      <h2>Count: {count}</h2>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n\n      {filteredProducts.map(product => (\n        <p key={product.id}>{product.name}</p>\n      ))}\n    </div>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "Problem: Every time count changes, the component re-renders and the filter operation runs again, even though products have not changed.",
      },
      {
        type: "heading",
        content: "Example: With useMemo",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React, { useMemo, useState } from 'react';\n\nexport default function ProductList({ products }) {\n  const [count, setCount] = useState(0);\n\n  const filteredProducts = useMemo(() => {\n    console.log('Filtering products');\n\n    return products.filter(product => product.price > 1000);\n  }, [products]);\n\n  return (\n    <div>\n      <h2>Count: {count}</h2>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n\n      {filteredProducts.map(product => (\n        <p key={product.id}>{product.name}</p>\n      ))}\n    </div>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "Execution: When count changes, the component re-renders, but useMemo returns the previously cached filteredProducts value because products has not changed. The filtering calculation runs again only when the products dependency changes.",
      },
      {
        type: "paragraph",
        content:
          "Important: useMemo memoizes a value, not a function. It should be used for expensive calculations or when stable object/array references are useful to memoized children.",
      },
      {
        type: "heading",
        content: "3. useCallback",
      },
      {
        type: "paragraph",
        content:
          "useCallback is a React Hook that memoizes a function reference between renders. It returns the same function reference until one of its dependencies changes.",
      },
      {
        type: "paragraph",
        content:
          "It is useful when passing callbacks to memoized child components or when a function is a dependency of another Hook, such as useEffect.",
      },
      {
        type: "heading",
        content: "Syntax",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "const memoizedFunction = useCallback(() => {\n  // Function logic\n}, [dependencies]);",
      },
      {
        type: "heading",
        content: "Example: Without useCallback",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React, { memo, useState } from 'react';\n\nconst Child = memo(function Child({ onClick }) {\n  console.log('Child rendered');\n  return <button onClick={onClick}>Click Child</button>;\n});\n\nexport default function Parent() {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    console.log('Child button clicked');\n  };\n\n  return (\n    <div>\n      <h2>Count: {count}</h2>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n      <Child onClick={handleClick} />\n    </div>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "Problem: Every parent render creates a new handleClick function reference. React.memo compares the previous and new onClick props, finds that the references are different, and renders Child again.",
      },
      {
        type: "heading",
        content: "Example: With useCallback",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React, { memo, useCallback, useState } from 'react';\n\nconst Child = memo(function Child({ onClick }) {\n  console.log('Child rendered');\n  return <button onClick={onClick}>Click Child</button>;\n});\n\nexport default function Parent() {\n  const [count, setCount] = useState(0);\n\n  const handleClick = useCallback(() => {\n    console.log('Child button clicked');\n  }, []);\n\n  return (\n    <div>\n      <h2>Count: {count}</h2>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n      <Child onClick={handleClick} />\n    </div>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "Execution: useCallback returns the same handleClick reference while its dependencies remain unchanged. React.memo sees that the onClick prop has not changed and can skip rendering Child.",
      },
      {
        type: "paragraph",
        content:
          "Important: useCallback memoizes the function reference; it does not execute the function or memoize its return value. Be careful with dependencies because a missing dependency can cause stale closures.",
      },
      {
        type: "heading",
        content: "4. Main Differences",
      },
      {
        type: "list",
        content: [
          "React.memo: Memoizes a component and can skip re-rendering when props are unchanged.",
          "useMemo: Memoizes the result of a calculation or a value.",
          "useCallback: Memoizes a function reference.",
        ],
      },
      {
        type: "heading",
        content: "5. Comparison Table",
      },
      {
        type: "table",
        content: [
          ["Feature", "React.memo", "useMemo", "useCallback"],
          ["Type", "Higher-order component", "React Hook", "React Hook"],
          [
            "Memoizes",
            "Component rendering",
            "Computed value",
            "Function reference",
          ],
          [
            "Used for",
            "Child component optimization",
            "Expensive calculations",
            "Stable callbacks",
          ],
          ["Returns", "Memoized component", "Cached value", "Cached function"],
          [
            "Prevents",
            "Some unnecessary child renders",
            "Repeated calculations",
            "New function references",
          ],
          ["Dependency array", "No", "Yes", "Yes"],
        ],
      },
      {
        type: "heading",
        content: "6. Real-World Example: Product List",
      },
      {
        type: "paragraph",
        content:
          "Consider an e-commerce application with thousands of products, a search field, category filters, and a product card component. We can combine all three techniques where they provide measurable value.",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React, { memo, useCallback, useMemo, useState } from 'react';\n\nconst ProductCard = memo(function ProductCard({ product, onSelect }) {\n  console.log('Rendering:', product.name);\n\n  return (\n    <div>\n      <h3>{product.name}</h3>\n      <p>Price: ₹{product.price}</p>\n      <button onClick={() => onSelect(product.id)}>\n        View Product\n      </button>\n    </div>\n  );\n});\n\nexport default function ProductList({ products }) {\n  const [search, setSearch] = useState('');\n  const [count, setCount] = useState(0);\n\n  const filteredProducts = useMemo(() => {\n    return products.filter(product =>\n      product.name.toLowerCase().includes(search.toLowerCase())\n    );\n  }, [products, search]);\n\n  const handleSelect = useCallback((productId) => {\n    console.log('Selected product:', productId);\n  }, []);\n\n  return (\n    <div>\n      <input\n        value={search}\n        onChange={e => setSearch(e.target.value)}\n        placeholder=\"Search products\"\n      />\n\n      <button onClick={() => setCount(count + 1)}>\n        Counter: {count}\n      </button>\n\n      {filteredProducts.map(product => (\n        <ProductCard\n          key={product.id}\n          product={product}\n          onSelect={handleSelect}\n        />\n      ))}\n    </div>\n  );\n}",
      },
      {
        type: "heading",
        content: "7. How All Three Work Together",
      },
      {
        type: "list",
        content: [
          "useMemo filters the products and caches the filtered array until products or search changes.",
          "useCallback keeps the handleSelect function reference stable.",
          "React.memo prevents a ProductCard from re-rendering when its product and onSelect props remain unchanged.",
          "When search changes, the filtered list is recalculated and the list updates to show matching products.",
          "When count changes, the parent re-renders, but unchanged ProductCard props allow React.memo to skip those child renders.",
        ],
      },
      {
        type: "heading",
        content: "8. Important Points for Experienced Developers",
      },
      {
        type: "list",
        content: [
          "Do not use memoization everywhere. It adds complexity and has its own overhead.",
          "Use React.memo when a component renders frequently with unchanged props and rendering is costly enough to justify it.",
          "Use useMemo for expensive calculations or to preserve a value reference when that stability matters.",
          "Use useCallback when function identity matters, especially when passing callbacks to memoized children.",
          "React.memo performs a shallow prop comparison by default. New object, array, or function references can defeat it.",
          "Avoid mutating objects and arrays. Use immutable updates so React can detect reference changes.",
          "Always provide correct dependencies to useMemo and useCallback to avoid stale values and stale closures.",
          "Measure performance using React DevTools Profiler rather than assuming memoization improves it.",
          "React Compiler can automatically memoize many values and functions in supported projects when enabled; follow the project's configuration and compiler guidance.",
        ],
      },
      {
        type: "heading",
        content: "9. Common Interview Questions",
      },
      {
        type: "list",
        content: [
          "Can React.memo prevent re-rendering when the component's state changes? No. Its own state updates can still trigger a render.",
          "Does useMemo prevent a component from rendering? No. It only caches a value.",
          "Does useCallback execute a function? No. It returns a memoized function reference.",
          "What happens if we pass an object as a prop to a React.memo component? A newly created object has a different reference and can trigger a render.",
          "Can we use useMemo instead of useCallback? Yes. useCallback(fn, deps) is conceptually equivalent to useMemo(() => fn, deps), but useCallback is clearer for functions.",
          "Should we use React.memo for every component? No. Use it when profiling or component behavior shows a worthwhile benefit.",
        ],
      },
      {
        type: "heading",
        content: "10. Interview-Ready Answer",
      },
      {
        type: "paragraph",
        content:
          "React.memo, useMemo, and useCallback are used for performance optimization, but they work at different levels. React.memo memoizes a component and can skip rendering when its props remain unchanged. useMemo caches the result of a calculation so expensive operations do not run unnecessarily. useCallback caches a function reference so passing callbacks to memoized child components does not cause avoidable renders due to new function identities. In real projects, I use them selectively in large lists, complex forms, filtered datasets, and frequently rendered child components, and I validate the improvement with profiling.",
      },
    ],
    topic: "React Performance Optimization",
  },
  {
    id: "inline-functions-and-styles",
    question:
      "Why should you avoid unnecessary inline functions and styles in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Creating new function and object references during every render can cause unnecessary reconciliation and re-rendering, particularly when those references are passed to memoized child components.",
      },
      {
        type: "paragraph",
        content:
          "Developers can define styles outside the component or use StyleSheet.create. They can also use useCallback to memoize callbacks when stable references are beneficial.",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "// Avoid unnecessary inline callbacks\n<Button onPress={() => doSomething(item)} />\n\n// Memoized callback\nconst handlePress = useCallback(() => {\n  doSomething(item);\n}, [item]);\n\n<Button onPress={handlePress} />",
      },
    ],
    topic: "Rendering optimization",
  },
  {
    id: "image-optimization-react-native",
    question: "How do you optimize images in a React Native application?",
    answer: [
      {
        type: "paragraph",
        content:
          "Large images can increase memory consumption, cause rendering delays, and affect application performance.",
      },
      {
        type: "paragraph",
        content:
          "Developers should resize and compress images before loading them into the application. Images should be served at dimensions appropriate for the screen instead of downloading unnecessarily large files.",
      },
      {
        type: "paragraph",
        content:
          "Image caching can also improve performance by storing previously downloaded images locally and reusing them instead of downloading them repeatedly.",
      },
      {
        type: "paragraph",
        content:
          "Libraries such as react-native-fast-image have traditionally provided native image caching and performance optimizations. Check library maintenance and React Native compatibility before selecting an image library.",
      },
    ],
    topic: "Image optimization",
  },
  {
    id: "native-modules-performance",
    question:
      "When should you use Native Modules in React Native to improve performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "Native Modules allow JavaScript code to interact with platform-specific native functionality. They can be useful for CPU-intensive or platform-specific tasks such as image processing, video processing, complex calculations, and device hardware integration.",
      },
      {
        type: "paragraph",
        content:
          "Moving suitable workloads to native code can reduce JavaScript-side processing overhead. However, native modules should be used when there is a clear performance or platform integration requirement rather than for every operation.",
      },
    ],
    topic: "Native modules",
  },

  {
    id: "react-native-old-architecture-complete-guide",
    question:
      "Explain React Native Old Architecture (Legacy Architecture) in detail.",
    answer: [
      {
        type: "heading",
        content: "1. What is React Native Old Architecture?",
      },
      {
        type: "paragraph",
        content:
          "React Native Old Architecture, also known as Legacy Architecture, is the original architecture used by React Native to connect JavaScript code with native Android and iOS functionality.",
      },
      {
        type: "paragraph",
        content:
          "It uses an asynchronous Bridge to communicate between JavaScript and native code. JavaScript and native code execute in separate environments, and messages are serialized and transferred through the Bridge.",
      },
      {
        type: "paragraph",
        content:
          "The Legacy Architecture mainly consists of the JavaScript Thread, Bridge, Native Modules, Shadow Thread, UIManager, UI Thread, and Paper Renderer.",
      },
      {
        type: "heading",
        content: "2. Main components of Old Architecture",
      },
      {
        type: "list",
        content: [
          "JavaScript Thread: Executes JavaScript code, React components, event handlers, and application logic.",
          "Bridge: Transfers serialized messages between JavaScript and native code asynchronously.",
          "Native Modules: Expose Android and iOS platform functionality to JavaScript.",
          "Native Modules Thread: Executes native module operations using the module's assigned execution queue.",
          "Shadow Thread: Calculates layout and maintains the native shadow representation of the UI.",
          "UIManager: Coordinates creation, updating, and deletion of native views.",
          "UI Thread: Handles actual native view operations and screen rendering.",
          "Paper Renderer: The legacy renderer responsible for translating React components into native platform views.",
        ],
      },
      {
        type: "heading",
        content: "3. Architecture diagram",
      },
      {
        type: "code",
        language: "text",
        content:
          "           JavaScript Application\n                    |\n                    v\n             React Components\n                    |\n                    v\n              JavaScript Thread\n                    |\n                    v\n              Bridge (Batched)\n                    |\n          ----------------------\n          |                    |\n          v                    v\n    Native Modules        UIManager\n          |                    |\n          v                    v\n   Native Module          Shadow Thread\n   Execution Queue             |\n          |                    v\n          v                 Yoga Layout\n   Android / iOS               |\n   Native APIs                 v\n                         Native UI Operations\n                                |\n                                v\n                             UI Thread\n                                |\n                                v\n                          Native Views\n                                |\n                                v\n                             Screen",
      },
      {
        type: "paragraph",
        content:
          "This is a conceptual diagram. Native module execution and UI rendering use different execution paths. UIManager coordinates native view updates, while native modules can execute on their configured queues.",
      },
      {
        type: "heading",
        content: "4. What is the Bridge?",
      },
      {
        type: "paragraph",
        content:
          "The Bridge is the communication layer between JavaScript and native Android/iOS code in the Legacy Architecture.",
      },
      {
        type: "paragraph",
        content:
          "JavaScript and native code cannot directly exchange ordinary JavaScript and native objects. The Bridge transfers messages using a serialized representation, traditionally JSON-compatible data, and processes them asynchronously.",
      },
      {
        type: "paragraph",
        content:
          "The Bridge uses batched communication. Instead of sending every operation individually, multiple messages can be grouped and transferred between the JavaScript and native environments.",
      },
      {
        type: "heading",
        content: "How the Bridge works",
      },
      {
        type: "code",
        language: "text",
        content:
          "JavaScript Code\n      |\n      v\nJavaScript Thread\n      |\n      v\nSerialize Data\n      |\n      v\nJavaScript-to-Native Queue\n      |\n      v\nNative Bridge Processing\n      |\n      v\nNative Module / UIManager\n      |\n      v\nNative Operation\n      |\n      v\nNative-to-JavaScript Queue\n      |\n      v\nJavaScript Callback / Promise",
      },
      {
        type: "paragraph",
        content:
          "Example: JavaScript requests the device name from an Android native module. The request crosses the Bridge, the native module executes the operation, and the result is sent back through the Bridge to JavaScript.",
      },
      {
        type: "heading",
        content: "5. What is serialization?",
      },
      {
        type: "paragraph",
        content:
          "Serialization is the process of converting data into a representation that can be transferred between different execution environments.",
      },
      {
        type: "paragraph",
        content:
          "In the Legacy Architecture, Bridge messages were traditionally serialized into JSON-compatible data. Native objects, functions, and complex platform-specific objects could not simply be passed as ordinary JavaScript objects.",
      },
      {
        type: "code",
        language: "javascript",
        content:
          'const user = {\n  id: 101,\n  name: \'Prashant\',\n  active: true\n};\n\nconst serializedData = JSON.stringify(user);\n\nconsole.log(serializedData);\n\n// {"id":101,"name":"Prashant","active":true}\n\nconst originalData = JSON.parse(serializedData);\n\nconsole.log(originalData.name);',
      },
      {
        type: "paragraph",
        content:
          "This example demonstrates serialization using JSON. It is not a literal implementation of every internal Bridge message format.",
      },
      {
        type: "heading",
        content: "6. Why was the Bridge a performance bottleneck?",
      },
      {
        type: "paragraph",
        content:
          "The Bridge was asynchronous, but that did not mean communication was free. Serialization, queue scheduling, data conversion, and frequent cross-boundary messages could introduce overhead.",
      },
      {
        type: "list",
        content: [
          "Serialization overhead: Data needed to be converted into a transferable format.",
          "Queue overhead: Messages were scheduled and processed across different execution queues.",
          "Large payloads: Frequently transferring large amounts of data could increase memory and processing overhead.",
          "Frequent communication: High-frequency events such as sensor updates, animations, and camera frames could generate many messages.",
          "Asynchronous limitations: JavaScript could not always synchronously access native functionality when required.",
          "Rendering coordination: JavaScript and native rendering operations had to coordinate through the legacy communication mechanism.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Example: If a native sensor produces hundreds of updates per second and every update is sent to JavaScript, Bridge message processing can become expensive. The solution may involve throttling, batching, or processing more data on the native side.",
      },
      {
        type: "heading",
        content: "7. What is the JavaScript Thread?",
      },
      {
        type: "paragraph",
        content:
          "The JavaScript Thread is responsible for executing the application's JavaScript code.",
      },
      {
        type: "list",
        content: [
          "Executes React component logic.",
          "Processes JavaScript event handlers.",
          "Handles application state updates.",
          "Runs JavaScript business logic.",
          "Processes callbacks and Promise continuations.",
          "Schedules JavaScript-to-native Bridge messages.",
        ],
      },
      {
        type: "paragraph",
        content:
          "If expensive synchronous JavaScript operations block this thread, JavaScript-driven interactions and rendering updates may become delayed.",
      },
      {
        type: "heading",
        content: "Example: Blocking JavaScript Thread",
      },
      {
        type: "code",
        language: "javascript",
        content:
          "function heavyCalculation() {\n  const start = Date.now();\n\n  while (Date.now() - start < 5000) {\n    // Blocking JavaScript execution\n  }\n\n  console.log('Calculation completed');\n}\n\nheavyCalculation();",
      },
      {
        type: "paragraph",
        content:
          "The JavaScript thread is blocked for approximately five seconds. JavaScript event handling and JS-driven UI updates cannot proceed normally during that time.",
      },
      {
        type: "heading",
        content: "8. What is the Native Modules Thread?",
      },
      {
        type: "paragraph",
        content:
          "Native Modules expose platform-specific functionality to JavaScript. Their methods execute on the native module's configured execution queue or thread.",
      },
      {
        type: "paragraph",
        content:
          "There is not necessarily one dedicated thread for all native modules. In the Legacy Architecture, modules could use different execution queues depending on their implementation.",
      },
      {
        type: "paragraph",
        content:
          "Examples of native functionality include Bluetooth, camera, GPS, device information, file system, notifications, and secure storage.",
      },
      {
        type: "heading",
        content: "9. What are Native Modules?",
      },
      {
        type: "paragraph",
        content:
          "Native Modules are native Android or iOS classes that expose functionality to JavaScript through React Native's native module system.",
      },
      {
        type: "paragraph",
        content:
          "For example, JavaScript cannot directly call Android's Build.MODEL API. A native Android module can expose a method that returns the device model to JavaScript.",
      },
      {
        type: "heading",
        content: "JavaScript usage",
      },
      {
        type: "code",
        language: "javascript",
        content:
          "import { NativeModules } from 'react-native';\n\nconst { DeviceInfo } = NativeModules;\n\nDeviceInfo.getDeviceName()\n  .then(name => {\n    console.log('Device name:', name);\n  })\n  .catch(error => {\n    console.log('Error:', error);\n  });",
      },
      {
        type: "heading",
        content: "Android implementation (Java)",
      },
      {
        type: "code",
        language: "java",
        content:
          'package com.myapp;\n\nimport com.facebook.react.bridge.Promise;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.bridge.ReactContextBaseJavaModule;\nimport com.facebook.react.bridge.ReactMethod;\n\npublic class DeviceInfoModule extends ReactContextBaseJavaModule {\n\n  DeviceInfoModule(ReactApplicationContext context) {\n    super(context);\n  }\n\n  @Override\n  public String getName() {\n    return "DeviceInfo";\n  }\n\n  @ReactMethod\n  public void getDeviceName(Promise promise) {\n    try {\n      String deviceName = android.os.Build.MODEL;\n      promise.resolve(deviceName);\n    } catch (Exception error) {\n      promise.reject("DEVICE_ERROR", error);\n    }\n  }\n}',
      },
      {
        type: "paragraph",
        content:
          "The method is exposed using @ReactMethod. A Promise is used to return the result asynchronously to JavaScript.",
      },
      {
        type: "heading",
        content: "Registering the module",
      },
      {
        type: "paragraph",
        content:
          "A legacy Android native module also needs to be registered through a ReactPackage and included in the application's package registration.",
      },
      {
        type: "code",
        language: "java",
        content:
          "public class DeviceInfoPackage implements ReactPackage {\n\n  @Override\n  public List<NativeModule> createNativeModules(\n      ReactApplicationContext context) {\n    return Arrays.<NativeModule>asList(\n      new DeviceInfoModule(context)\n    );\n  }\n\n  @Override\n  public List<ViewManager> createViewManagers(\n      ReactApplicationContext context) {\n    return Collections.emptyList();\n  }\n}",
      },
      {
        type: "paragraph",
        content:
          "This is a simplified legacy package registration example. Exact registration in an application depends on its React Native version and project setup.",
      },
      {
        type: "heading",
        content: "10. What is the Shadow Thread?",
      },
      {
        type: "paragraph",
        content:
          "The Shadow Thread is associated with the legacy renderer's layout calculation and shadow representation of the UI hierarchy.",
      },
      {
        type: "paragraph",
        content:
          "When React Native components are rendered, the renderer maintains a shadow representation of the component hierarchy. The layout engine Yoga calculates positions and dimensions based on styles and layout constraints.",
      },
      {
        type: "list",
        content: [
          "Maintains the shadow representation of UI elements.",
          "Calculates layout positions and dimensions.",
          "Uses Yoga for Flexbox-based layout calculation.",
          "Coordinates layout updates with UIManager.",
          "Helps avoid performing all layout calculations directly on the UI Thread.",
        ],
      },
      {
        type: "heading",
        content: "Example",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React from 'react';\nimport { View, Text } from 'react-native';\n\nexport default function Profile() {\n  return (\n    <View style={{\n      flex: 1,\n      justifyContent: 'center',\n      alignItems: 'center'\n    }}>\n      <Text>Welcome to React Native</Text>\n    </View>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "Yoga calculates the layout dimensions and positions of these components. The resulting native view updates are coordinated through the renderer and UIManager.",
      },
      {
        type: "heading",
        content: "11. What is Yoga?",
      },
      {
        type: "paragraph",
        content:
          "Yoga is a cross-platform layout engine used by React Native. It implements Flexbox-style layout calculations and helps determine the size and position of UI components.",
      },
      {
        type: "paragraph",
        content:
          "For example, when we use flexDirection, justifyContent, alignItems, flex, width, and height, Yoga calculates the resulting layout.",
      },
      {
        type: "code",
        language: "javascript",
        content:
          "const styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: 'row',\n    justifyContent: 'space-between',\n    alignItems: 'center'\n  }\n});",
      },
      {
        type: "paragraph",
        content:
          "Yoga is a layout engine, not a UI renderer. It calculates layout; the renderer and native platform are responsible for applying that layout to actual views.",
      },
      {
        type: "heading",
        content: "12. What is UIManager?",
      },
      {
        type: "paragraph",
        content:
          "UIManager is part of the Legacy Architecture's native UI management system. It coordinates native view creation, updates, and deletion based on operations produced by the React Native renderer.",
      },
      {
        type: "list",
        content: [
          "Creates native views.",
          "Updates view properties such as dimensions, colors, and text.",
          "Removes native views.",
          "Coordinates native view hierarchy updates.",
          "Works with the renderer's layout information.",
        ],
      },
      {
        type: "paragraph",
        content:
          "UIManager receives view-management operations through the legacy communication system and coordinates their execution on the appropriate native UI context.",
      },
      {
        type: "heading",
        content: "13. What is the UI Thread?",
      },
      {
        type: "paragraph",
        content:
          "The UI Thread, also known as the Main Thread on Android and iOS, is responsible for native user interface operations.",
      },
      {
        type: "list",
        content: [
          "Processes native UI interactions.",
          "Creates and updates native views.",
          "Handles view hierarchy changes.",
          "Coordinates drawing and layout with the platform.",
          "Displays the final UI on the screen.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Heavy operations on the UI Thread can cause dropped frames and a frozen interface. Native UI updates must be coordinated with the platform's main UI execution context.",
      },
      {
        type: "heading",
        content: "14. What is Paper Renderer?",
      },
      {
        type: "paragraph",
        content:
          "Paper is the legacy React Native rendering system. It translates React Native components into native Android and iOS views.",
      },
      {
        type: "paragraph",
        content:
          "It uses a shadow representation of the UI hierarchy, Yoga for layout calculations, and UIManager to coordinate native view operations.",
      },
      {
        type: "heading",
        content: "Paper rendering flow",
      },
      {
        type: "code",
        language: "text",
        content:
          "React Components (JSX)\n          |\n          v\n      React Renderer\n          |\n          v\n       Shadow Tree\n          |\n          v\n      Yoga Layout\n          |\n          v\n        UIManager\n          |\n          v\n       UI Thread\n          |\n          v\n   Native Android / iOS Views",
      },
      {
        type: "paragraph",
        content:
          "Example: When a React Native component changes its backgroundColor, React calculates the updated component output, the legacy renderer determines the required view updates, and UIManager coordinates the native property update.",
      },
      {
        type: "heading",
        content: "15. How does a UI update happen?",
      },
      {
        type: "paragraph",
        content:
          "Consider a button that changes its text when the user taps it.",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React, { useState } from 'react';\nimport { View, Text, Button } from 'react-native';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <View>\n      <Text>Count: {count}</Text>\n      <Button\n        title=\"Increment\"\n        onPress={() => setCount(count + 1)}\n      />\n    </View>\n  );\n}",
      },
      {
        type: "heading",
        content: "Execution flow",
      },
      {
        type: "code",
        language: "text",
        content:
          "1. User taps the native button.\n             |\n             v\n2. Native event is dispatched.\n             |\n             v\n3. Event crosses the Bridge.\n             |\n             v\n4. JavaScript onPress handler executes.\n             |\n             v\n5. setCount updates React state.\n             |\n             v\n6. React calculates the updated UI.\n             |\n             v\n7. Legacy renderer calculates required changes.\n             |\n             v\n8. Shadow Thread / Yoga processes layout.\n             |\n             v\n9. UIManager coordinates native view updates.\n             |\n             v\n10. UI Thread applies native changes.\n             |\n             v\n11. Updated screen is displayed.",
      },
      {
        type: "paragraph",
        content:
          "This is a simplified logical sequence. In practice, event dispatch, rendering, layout, and native updates are scheduled and batched, and not every state update requires a complete layout recalculation.",
      },
      {
        type: "heading",
        content: "16. How does communication work in both directions?",
      },
      {
        type: "paragraph",
        content:
          "There are two major communication paths in the Legacy Architecture: JavaScript-to-native and native-to-JavaScript.",
      },
      {
        type: "heading",
        content: "JavaScript to Native",
      },
      {
        type: "code",
        language: "text",
        content:
          "JavaScript\n    |\n    v\nNativeModules.DeviceInfo.getDeviceName()\n    |\n    v\nBridge Queue\n    |\n    v\nAndroid / iOS Native Module\n    |\n    v\nExecute Native Operation",
      },
      {
        type: "heading",
        content: "Native to JavaScript",
      },
      {
        type: "code",
        language: "text",
        content:
          "Native Event / Result\n       |\n       v\nNative-to-JS Bridge Queue\n       |\n       v\nJavaScript Thread\n       |\n       v\nCallback / Promise / Event Listener\n       |\n       v\nReact State Update",
      },
      {
        type: "heading",
        content: "17. What are Native Events?",
      },
      {
        type: "paragraph",
        content:
          "Native Events allow native platform code to notify JavaScript when something happens. They are useful for Bluetooth updates, device events, connectivity changes, location updates, and native UI interactions.",
      },
      {
        type: "paragraph",
        content:
          "In the legacy module system, native modules can use RCTEventEmitter on iOS or DeviceEventManagerModule.RCTDeviceEventEmitter on Android to send events to JavaScript.",
      },
      {
        type: "heading",
        content: "JavaScript example",
      },
      {
        type: "code",
        language: "javascript",
        content:
          "import { NativeEventEmitter, NativeModules } from 'react-native';\n\nconst { DeviceEvents } = NativeModules;\nconst eventEmitter = new NativeEventEmitter(DeviceEvents);\n\nconst subscription = eventEmitter.addListener(\n  'DeviceStatusChanged',\n  data => {\n    console.log('Device status:', data);\n  }\n);\n\n// When the screen or component is no longer interested:\nsubscription.remove();",
      },
      {
        type: "paragraph",
        content:
          "The native module must implement and emit the corresponding event. On Android, the module also needs the appropriate event-emission implementation and listener lifecycle handling.",
      },
      {
        type: "heading",
        content: "18. Legacy Architecture threading model",
      },
      {
        type: "paragraph",
        content:
          "An experienced React Native developer should understand that the JavaScript Thread, Shadow Thread, UI Thread, and native module execution queues have different responsibilities.",
      },
      {
        type: "table",
        content: [
          ["Thread / Queue", "Responsibility"],
          ["JavaScript Thread", "Executes JavaScript and React logic"],
          [
            "Native Modules Queue",
            "Executes native module methods on configured queues",
          ],
          ["Shadow Thread", "Processes legacy shadow UI and layout work"],
          ["UI Thread", "Performs native UI operations"],
          [
            "Bridge Queues",
            "Transfer serialized messages between JS and native",
          ],
        ],
      },
      {
        type: "paragraph",
        content:
          "Important: Do not assume that all native module methods run on one fixed background thread. Their execution queue is determined by the native module implementation and React Native's legacy module infrastructure.",
      },
      {
        type: "heading",
        content: "19. What are the limitations of Old Architecture?",
      },
      {
        type: "list",
        content: [
          "Bridge serialization introduces overhead for cross-boundary communication.",
          "High-frequency events can create large queues of messages.",
          "Large data payloads can increase processing and memory costs.",
          "JavaScript and native code cannot freely share arbitrary objects.",
          "Synchronous native access is not naturally supported by the asynchronous Bridge model.",
          "Legacy native module initialization can introduce startup overhead.",
          "The old renderer has limitations around modern concurrent rendering and scheduling.",
          "Complex native integrations can require substantial manual interface and registration code.",
        ],
      },
      {
        type: "heading",
        content:
          "20. Real-world example: BLE integration with an electric bike",
      },
      {
        type: "paragraph",
        content:
          "Consider an application that connects to an electric-bike dashboard through Bluetooth Low Energy. The application displays speed, battery percentage, and temperature.",
      },
      {
        type: "list",
        content: [
          "React Native screen displays the bike telemetry.",
          "JavaScript calls a legacy BLE Native Module.",
          "The BLE request is serialized and passed through the Bridge.",
          "Android Bluetooth APIs or iOS Core Bluetooth perform scanning and connection operations.",
          "The native module receives notifications from the bike dashboard.",
          "Telemetry data is sent back through the Bridge.",
          "JavaScript receives the event and updates application state.",
          "React renders the updated UI through Paper.",
        ],
      },
      {
        type: "code",
        language: "text",
        content:
          "React Native Dashboard\n          |\n          v\n     NativeModules.BLE\n          |\n          v\n      Bridge Queue\n          |\n          v\n   Native BLE Module\n          |\n          v\n Android Bluetooth / iOS Core Bluetooth\n          |\n          v\n       Bike Dashboard\n          |\n          v\n    BLE Notifications\n          |\n          v\n       Native Module\n          |\n          v\n      Bridge Queue\n          |\n          v\n     JavaScript Event\n          |\n          v\n       React State\n          |\n          v\n      Paper Renderer",
      },
      {
        type: "paragraph",
        content:
          "For a high-frequency telemetry use case, sending every individual update through the Bridge can create unnecessary overhead. Native-side filtering, batching, and event throttling can reduce the communication load.",
      },
      {
        type: "heading",
        content:
          "21. How did developers optimize performance in Old Architecture?",
      },
      {
        type: "list",
        content: [
          "Avoid unnecessary Bridge communication.",
          "Batch native events instead of sending too many individual messages.",
          "Throttle high-frequency sensor and location updates.",
          "Move expensive calculations to native code or suitable background execution.",
          "Optimize React component rendering using React.memo, useMemo, and useCallback where appropriate.",
          "Use FlatList instead of rendering thousands of items through ScrollView.",
          "Optimize images and avoid unnecessarily large payloads.",
          "Avoid blocking the JavaScript Thread with expensive synchronous operations.",
          "Avoid performing heavy work on the native UI Thread.",
          "Use profiling tools to identify actual bottlenecks.",
        ],
      },
      {
        type: "heading",
        content: "22. Legacy Architecture vs New Architecture",
      },
      {
        type: "table",
        content: [
          ["Feature", "Old Architecture", "New Architecture"],
          ["Communication", "Bridge", "JSI-based interoperability"],
          [
            "Data transfer",
            "Serialized Bridge messages",
            "Direct native/C++ interoperability where supported",
          ],
          ["Native modules", "Legacy Native Modules", "TurboModules"],
          ["Rendering", "Paper", "Fabric"],
          ["UI representation", "Legacy Shadow Tree", "Fabric Shadow Tree"],
          [
            "Native component integration",
            "Legacy Native Components",
            "Fabric Native Components",
          ],
          ["Interface generation", "Mostly manual contracts", "Codegen"],
          [
            "Module initialization",
            "Legacy initialization model",
            "Lazy loading supported",
          ],
          [
            "React concurrent features",
            "Limited support",
            "Supported by the New Architecture",
          ],
          ["Bridge dependency", "Required", "Removed in Bridgeless Mode"],
        ],
      },
      {
        type: "heading",
        content: "23. Example: Same functionality in both architectures",
      },
      {
        type: "paragraph",
        content:
          "Suppose we want to get the device name from native Android code.",
      },
      {
        type: "paragraph",
        content:
          "Old Architecture: Create a legacy Native Module, expose a method using @ReactMethod, register it through ReactPackage, and access it through NativeModules in JavaScript.",
      },
      {
        type: "paragraph",
        content:
          "New Architecture: Define a typed TurboModule specification, configure Codegen, implement the generated native interface, and access the module through TurboModuleRegistry.",
      },
      {
        type: "heading",
        content: "24. How to identify an old architecture project?",
      },
      {
        type: "paragraph",
        content:
          "In older React Native projects, inspect the React Native version, Android Gradle configuration, iOS Podfile, native module implementations, and dependencies.",
      },
      {
        type: "code",
        language: "properties",
        content: "# android/gradle.properties\nnewArchEnabled=false",
      },
      {
        type: "paragraph",
        content:
          "In React Native versions where the legacy opt-out was supported, newArchEnabled=false selected the Legacy Architecture. The exact supported versions matter.",
      },
      {
        type: "paragraph",
        content:
          "React Native 0.76 introduced the New Architecture as the default while retaining an opt-out. React Native 0.82 removed the opt-out, so this flag cannot be used to switch current versions back to the Legacy Architecture.",
      },
      {
        type: "heading",
        content: "25. Common problems in Old Architecture",
      },
      {
        type: "list",
        content: [
          "Bridge queue congestion caused by frequent native events.",
          "Large serialized payloads causing performance overhead.",
          "JavaScript Thread blocked by heavy business logic.",
          "UI Thread blocked by expensive native view operations.",
          "Native module registration issues.",
          "Incorrect native event listener cleanup.",
          "Memory leaks due to subscriptions not being removed.",
          "Native dependency compatibility issues after React Native upgrades.",
          "Unexpected rendering delays due to coordination between JavaScript and native UI operations.",
        ],
      },
      {
        type: "heading",
        content: "26. Senior-level interview questions",
      },
      {
        type: "list",
        content: [
          "Explain the complete React Native Legacy Architecture.",
          "What is the Bridge and how does it work internally?",
          "Why is the Bridge asynchronous?",
          "What is serialization and why is it required?",
          "What is Bridge batching?",
          "What are JavaScript-to-native and native-to-JavaScript queues?",
          "What is the difference between JavaScript Thread and UI Thread?",
          "What is the Shadow Thread?",
          "What is Yoga and what does it do?",
          "What is UIManager?",
          "What is Paper Renderer?",
          "What is the difference between a Native Module and a Native Component?",
          "How do you create a custom Android Native Module?",
          "What is @ReactMethod?",
          "What is ReactPackage?",
          "How do you send events from native code to JavaScript?",
          "What happens when the Bridge is overloaded?",
          "How do you optimize high-frequency BLE notifications?",
          "Can native modules block the JavaScript Thread?",
          "How would you troubleshoot a frozen React Native application?",
          "What are the major limitations of the Legacy Architecture?",
        ],
      },
      {
        type: "heading",
        content: "27. Interview-ready answer",
      },
      {
        type: "paragraph",
        content:
          "React Native Old Architecture, also called Legacy Architecture, uses an asynchronous Bridge to communicate between JavaScript and native Android/iOS code. JavaScript sends serialized messages through the Bridge, and native code processes those messages using Native Modules or UIManager. The main execution areas include the JavaScript Thread, native module execution queues, Shadow Thread, and UI Thread. For rendering, it uses Paper Renderer, which maintains a shadow representation of the UI hierarchy, uses Yoga for layout calculations, and coordinates native view updates through UIManager. The main limitation is the overhead associated with serialization, asynchronous queue communication, and frequent cross-boundary data transfers. The New Architecture addresses these limitations through JSI, TurboModules, Fabric, and Codegen.",
      },
      {
        type: "heading",
        content: "28. One-line revision",
      },
      {
        type: "list",
        content: [
          "Bridge = Communication between JavaScript and native code.",
          "Serialization = Converting data into a transferable format.",
          "JavaScript Thread = Executes JavaScript application logic.",
          "Native Modules = Expose native functionality to JavaScript.",
          "Native Modules Queue = Executes native module methods.",
          "Shadow Thread = Handles legacy shadow UI and layout work.",
          "Yoga = Calculates Flexbox-based layout.",
          "UIManager = Coordinates native view operations.",
          "UI Thread = Handles native UI operations.",
          "Paper = Legacy rendering system.",
        ],
      },
    ],
    topic: "React Native Architecture",
  },

  {
    id: "react-native-new-architecture-complete-guide",
    question: "Explain React Native New Architecture in detail.",
    answer: [
      {
        type: "heading",
        content: "1. What is React Native New Architecture?",
      },
      {
        type: "paragraph",
        content:
          "React Native New Architecture is a major redesign of React Native's internal architecture. It changes how JavaScript communicates with native Android/iOS code, how UI components are rendered, how native modules are loaded, and how rendering work is scheduled.",
      },
      {
        type: "paragraph",
        content:
          "The Legacy Architecture used the asynchronous Bridge to communicate between JavaScript and native code. The New Architecture uses JSI (JavaScript Interface), Fabric, TurboModules, and Codegen to provide more direct communication, improved rendering capabilities, and type-safe native interfaces.",
      },
      {
        type: "paragraph",
        content:
          "The New Architecture was introduced incrementally and became enabled by default in React Native 0.76. Starting with React Native 0.82, it is the only supported architecture; the legacy architecture opt-out was removed.",
      },
      {
        type: "heading",
        content: "2. Why was the New Architecture introduced?",
      },
      {
        type: "paragraph",
        content:
          "The Legacy Architecture worked well for many applications, but its design introduced limitations when handling high-frequency native communication, complex UI rendering, synchronous layout operations, and modern React concurrent features.",
      },
      {
        type: "list",
        content: [
          "Bridge communication required data serialization and asynchronous message passing.",
          "Large amounts of data transferred between JavaScript and native code could create overhead.",
          "Native modules were traditionally initialized through the legacy module system.",
          "The old renderer had limitations around synchronous layout measurement and prioritizing UI updates.",
          "The architecture did not provide full support for modern React concurrent rendering features.",
          "Maintaining separate platform implementations could increase development and maintenance complexity.",
        ],
      },
      {
        type: "heading",
        content: "3. Legacy Architecture vs New Architecture",
      },
      {
        type: "paragraph",
        content:
          "In the Legacy Architecture, JavaScript and native code communicated through the Bridge. In the New Architecture, JSI provides the JavaScript-to-native interface, TurboModules provide the native module system, and Fabric handles UI rendering.",
      },
      {
        type: "table",
        content: [
          ["Feature", "Legacy Architecture", "New Architecture"],
          ["Communication", "Asynchronous Bridge", "JSI"],
          ["Native modules", "Legacy Native Modules", "TurboModules"],
          ["UI rendering", "Legacy Renderer", "Fabric"],
          [
            "Native component integration",
            "Legacy Native Components",
            "Fabric Native Components",
          ],
          [
            "Type safety",
            "Mostly manually maintained contracts",
            "Codegen-generated interfaces",
          ],
          [
            "Module loading",
            "Legacy initialization model",
            "Lazy loading supported by default",
          ],
          [
            "Layout measurement",
            "Primarily asynchronous workflow",
            "Synchronous layout access supported in appropriate phases",
          ],
          [
            "React concurrent features",
            "Limited support",
            "Concurrent rendering support",
          ],
          ["Architecture mode", "Legacy", "Bridgeless New Architecture"],
        ],
      },
      {
        type: "heading",
        content: "4. How Legacy Architecture works",
      },
      {
        type: "paragraph",
        content:
          "The Legacy Architecture contains three important execution areas: JavaScript Thread, Native/UI Thread, and the Bridge.",
      },
      {
        type: "list",
        content: [
          "JavaScript Thread: Executes JavaScript code, React component logic, state updates, and event handling.",
          "Native/UI Thread: Handles native Android/iOS UI operations and native platform interactions.",
          "Bridge: Transfers messages between JavaScript and native code. Data is serialized into a transportable representation and processed asynchronously.",
        ],
      },
      {
        type: "heading",
        content: "Legacy Architecture communication flow",
      },
      {
        type: "code",
        language: "text",
        content:
          "JavaScript / React Components\n          |\n          v\n     JavaScript Thread\n          |\n          v\n     Serialize Data\n          |\n          v\n      Bridge Queue\n          |\n          v\n   Native Android / iOS\n          |\n          v\n     Native Operation\n          |\n          v\n     Bridge Queue\n          |\n          v\n    JavaScript Callback",
      },
      {
        type: "paragraph",
        content:
          "Example: JavaScript requests device information from a native module. The request is serialized and passed through the Bridge. Native code executes the operation and sends the response back through the Bridge, usually using a callback or Promise.",
      },
      {
        type: "code",
        language: "javascript",
        content:
          "import { NativeModules } from 'react-native';\n\nconst { DeviceInfo } = NativeModules;\n\nDeviceInfo.getDeviceName()\n  .then(name => {\n    console.log('Device name:', name);\n  })\n  .catch(error => {\n    console.log(error);\n  });",
      },
      {
        type: "paragraph",
        content:
          "Important: The Bridge did not mean that every native operation was slow. The overhead depended on communication frequency, serialization, payload size, and scheduling. Native operations could still execute efficiently once they reached native code.",
      },
      {
        type: "heading",
        content: "5. Main components of New Architecture",
      },
      {
        type: "list",
        content: [
          "JSI - JavaScript Interface: Provides direct interoperability between JavaScript and C++ native objects.",
          "TurboModules: New architecture for native modules, with lazy loading and typed specifications.",
          "Fabric: New C++-based rendering system for creating and updating native UI components.",
          "Codegen: Generates native interface and glue code from typed JavaScript/TypeScript specifications.",
          "Bridgeless Mode: Removes dependence on the legacy Bridge and uses the New Architecture infrastructure.",
          "Concurrent Renderer: Enables React to schedule rendering work with different priorities and support concurrent features.",
        ],
      },
      {
        type: "heading",
        content: "6. What is JSI (JavaScript Interface)?",
      },
      {
        type: "paragraph",
        content:
          "JSI stands for JavaScript Interface. It is a C++ interface that allows the JavaScript runtime to interact with C++ objects and functions. JavaScript can hold references to native C++ HostObjects and invoke their methods without requiring every interaction to pass through the old serialized Bridge.",
      },
      {
        type: "paragraph",
        content:
          "JSI is the foundation that enables the New Architecture's direct JavaScript and native interoperability. It is not itself a native module, renderer, or replacement JavaScript engine.",
      },
      {
        type: "heading",
        content: "How JSI works",
      },
      {
        type: "code",
        language: "text",
        content:
          "JavaScript Code\n      |\n      v\nJavaScript Engine (Hermes / JSC)\n      |\n      v\n      JSI\n      |\n      v\nC++ Host Object / Native Function\n      |\n      v\nAndroid / iOS Native Implementation",
      },
      {
        type: "paragraph",
        content:
          "The JavaScript runtime can access native functionality through references exposed using JSI. This avoids the traditional requirement to serialize every cross-boundary interaction into Bridge messages.",
      },
      {
        type: "heading",
        content: "Example: Conceptual JSI interaction",
      },
      {
        type: "code",
        language: "cpp",
        content:
          '// Simplified conceptual C++ example\n// This illustrates the idea, not a complete React Native module.\n\nclass MyHostObject : public jsi::HostObject {\npublic:\n  jsi::Value get(jsi::Runtime& runtime,\n                 const jsi::PropNameID& name) override {\n    auto propertyName = name.utf8(runtime);\n\n    if (propertyName == "getValue") {\n      return jsi::Function::createFromHostFunction(\n        runtime,\n        name,\n        0,\n        [](jsi::Runtime& runtime,\n           const jsi::Value& thisValue,\n           const jsi::Value* args,\n           size_t count) -> jsi::Value {\n          return jsi::String::createFromUtf8(\n            runtime, "Hello from C++"\n          );\n        }\n      );\n    }\n\n    return jsi::Value::undefined();\n  }\n};',
      },
      {
        type: "paragraph",
        content:
          "The above code is a conceptual example of a C++ HostObject exposing a function. In a production implementation, the HostObject must be registered with the JavaScript runtime and managed with the correct runtime and thread lifecycle.",
      },
      {
        type: "heading",
        content: "Benefits of JSI",
      },
      {
        type: "list",
        content: [
          "Avoids traditional Bridge serialization for JSI-based interactions.",
          "Supports direct access to C++ objects and functions.",
          "Can handle complex native objects and large data more efficiently.",
          "Enables synchronous native interactions when the API and execution context permit them.",
          "Provides the foundation for high-performance libraries involving camera frames, databases, animations, and image processing.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Example: A camera library can expose native frame-processing functionality through JSI rather than repeatedly serializing large image buffers across the old Bridge.",
      },
      {
        type: "heading",
        content: "7. What are TurboModules?",
      },
      {
        type: "paragraph",
        content:
          "TurboModules are the New Architecture's native module system. They allow JavaScript or TypeScript code to communicate with native Android, iOS, or C++ implementations through typed interfaces.",
      },
      {
        type: "paragraph",
        content:
          "TurboModules use JSI for JavaScript/native interoperability and Codegen to generate the required native interface code. They support lazy loading, meaning a module can be initialized when it is first accessed instead of requiring every module to be initialized at application startup.",
      },
      {
        type: "paragraph",
        content:
          "Examples include device information, Bluetooth, camera, file system, secure storage, and custom native functionality.",
      },
      {
        type: "heading",
        content: "Legacy Native Module vs TurboModule",
      },
      {
        type: "table",
        content: [
          ["Feature", "Legacy Native Module", "TurboModule"],
          ["Communication", "Bridge-based", "JSI-based"],
          ["Specification", "Traditionally manual", "Typed specification"],
          [
            "Code generation",
            "Not required by the legacy module system",
            "Codegen",
          ],
          ["Loading", "Legacy initialization model", "Lazy loading supported"],
          [
            "C++ integration",
            "Limited in the legacy model",
            "First-class C++ integration",
          ],
          ["Type safety", "More manual work", "Generated typed interfaces"],
        ],
      },
      {
        type: "heading",
        content: "8. TurboModule implementation example",
      },
      {
        type: "paragraph",
        content:
          "Let's create a custom native module named DeviceInfoModule that returns a device name. First, define the TypeScript specification. The Native prefix in the specification name is important for the standard TurboModule Codegen convention.",
      },
      {
        type: "heading",
        content: "Step 1: Create TypeScript specification",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// specs/NativeDeviceInfo.ts\n\nimport type { TurboModule } from 'react-native';\nimport { TurboModuleRegistry } from 'react-native';\n\nexport interface Spec extends TurboModule {\n  getDeviceName(): string;\n}\n\nexport default TurboModuleRegistry.getEnforcing<Spec>(\n  'NativeDeviceInfo'\n);",
      },
      {
        type: "paragraph",
        content:
          "This specification defines the contract between JavaScript and native code. It declares that the native module exposes a getDeviceName method that returns a string.",
      },
      {
        type: "heading",
        content: "Step 2: Configure Codegen",
      },
      {
        type: "code",
        language: "json",
        content:
          '"codegenConfig": {\n  "name": "DeviceInfoSpec",\n  "type": "modules",\n  "jsSrcsDir": "specs",\n  "android": {\n    "javaPackageName": "com.deviceinfo"\n  }\n}',
      },
      {
        type: "paragraph",
        content:
          "Add the Codegen configuration to package.json. Exact native project setup and generated paths depend on the React Native version and project template.",
      },
      {
        type: "heading",
        content: "Step 3: Implement native Android module",
      },
      {
        type: "code",
        language: "java",
        content:
          "package com.deviceinfo;\n\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.module.annotations.ReactModule;\nimport com.facebook.react.bridge.NativeModule;\n\n@ReactModule(name = NativeDeviceInfoSpec.NAME)\npublic class NativeDeviceInfoModule extends NativeDeviceInfoSpec {\n\n  public NativeDeviceInfoModule(ReactApplicationContext context) {\n    super(context);\n  }\n\n  @Override\n  public String getName() {\n    return NativeDeviceInfoSpec.NAME;\n  }\n\n  @Override\n  public String getDeviceName() {\n    return android.os.Build.MODEL;\n  }\n}",
      },
      {
        type: "paragraph",
        content:
          "The generated NativeDeviceInfoSpec base class is supplied by Codegen. The module extends that generated specification and implements its native method. A complete Android integration also requires registering the module through the appropriate generated package/provider mechanism for the React Native version.",
      },
      {
        type: "heading",
        content: "Step 4: Use it in JavaScript",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "import DeviceInfo from './specs/NativeDeviceInfo';\n\nconst deviceName = DeviceInfo.getDeviceName();\n\nconsole.log('Device name:', deviceName);",
      },
      {
        type: "paragraph",
        content:
          "This example uses a synchronous string-returning method to demonstrate the TurboModule API. Real operations such as network requests, Bluetooth discovery, or database queries should use suitable asynchronous APIs rather than blocking the JavaScript runtime.",
      },
      {
        type: "heading",
        content: "9. What is Fabric?",
      },
      {
        type: "paragraph",
        content:
          "Fabric is the New Architecture's rendering system. It is implemented around a shared C++ renderer and is responsible for translating React's component tree into native platform UI.",
      },
      {
        type: "paragraph",
        content:
          "Fabric manages the creation and updating of UI through concepts such as Shadow Nodes, Shadow Trees, layout calculation, mounting, and native view updates.",
      },
      {
        type: "paragraph",
        content:
          "In simple terms, when you write View, Text, Image, or custom native components in React Native, Fabric is responsible for coordinating how those React elements become actual native views on Android and iOS.",
      },
      {
        type: "heading",
        content: "How Fabric works",
      },
      {
        type: "code",
        language: "text",
        content:
          "React Components (JSX)\n          |\n          v\n     React Renderer\n          |\n          v\n      Shadow Tree\n          |\n          v\n     Layout Calculation\n          |\n          v\n       Commit Phase\n          |\n          v\n        Mounting\n          |\n          v\n Native Android / iOS Views",
      },
      {
        type: "heading",
        content: "Important Fabric concepts",
      },
      {
        type: "list",
        content: [
          "Shadow Node: Represents a UI element in the renderer's internal representation.",
          "Shadow Tree: A tree containing the Shadow Nodes representing the UI hierarchy.",
          "Render: React calculates the next UI tree based on components, props, and state.",
          "Commit: The renderer finalizes the next tree and associated layout information.",
          "Mount: The renderer applies the required changes to the native view hierarchy.",
        ],
      },
      {
        type: "paragraph",
        content:
          "The Shadow Tree is managed using immutable tree updates and can have multiple in-progress versions. Fabric uses the layout engine to calculate positions and dimensions before applying updates to the native UI.",
      },
      {
        type: "heading",
        content: "Example: React Native component",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\nexport default function Profile() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.title}>React Native</Text>\n      <Text>New Architecture</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    padding: 20,\n    backgroundColor: '#ffffff'\n  },\n  title: {\n    fontSize: 20,\n    fontWeight: 'bold'\n  }\n});",
      },
      {
        type: "paragraph",
        content:
          "You do not need to manually create Shadow Nodes for standard React Native components. Fabric handles the rendering pipeline internally.",
      },
      {
        type: "heading",
        content: "Benefits of Fabric",
      },
      {
        type: "list",
        content: [
          "Improved integration between React Native views and native platform views.",
          "Better support for synchronous layout measurement in supported rendering phases.",
          "Supports concurrent rendering and prioritized UI updates.",
          "Provides a shared C++ rendering foundation.",
          "Supports the new Native Component system.",
          "Enables better interoperability between native screens and React Native surfaces.",
        ],
      },
      {
        type: "heading",
        content: "10. What are Native Components in Fabric?",
      },
      {
        type: "paragraph",
        content:
          "Fabric Native Components are the New Architecture's way of exposing native UI components to React Native. A native component is different from a native module: a native module exposes functionality, while a native component exposes a UI element.",
      },
      {
        type: "paragraph",
        content:
          "For example, a custom Android map view or a native camera preview can be exposed to React Native as a Fabric Native Component.",
      },
      {
        type: "heading",
        content: "Native Module vs Native Component",
      },
      {
        type: "table",
        content: [
          ["Feature", "TurboModule", "Fabric Native Component"],
          ["Purpose", "Native functionality", "Native UI"],
          ["Example", "Bluetooth connection API", "Native camera preview"],
          [
            "Main responsibility",
            "Execute native operations",
            "Render native views",
          ],
          ["Codegen type", "modules", "components"],
          [
            "JSI usage",
            "Native method interoperability",
            "Renderer/native component integration",
          ],
        ],
      },
      {
        type: "heading",
        content: "11. What is Codegen?",
      },
      {
        type: "paragraph",
        content:
          "Codegen is React Native's code-generation system. It reads typed JavaScript or TypeScript specifications and generates the native interface code needed to connect JavaScript with TurboModules and Fabric Native Components.",
      },
      {
        type: "paragraph",
        content:
          "Without Codegen, developers would have to maintain more of the cross-language interface manually. Codegen helps keep JavaScript and native contracts aligned and catches certain interface mismatches during build time.",
      },
      {
        type: "heading",
        content: "How Codegen works",
      },
      {
        type: "code",
        language: "text",
        content:
          "TypeScript / Flow Specification\n             |\n             v\n         Codegen\n             |\n             v\n   Generated C++ / Java / Objective-C++\n             |\n             v\n    TurboModule / Fabric Integration\n             |\n             v\n       JavaScript Application",
      },
      {
        type: "paragraph",
        content:
          "Example: If a TurboModule specification declares getDeviceName(): string, Codegen generates the native interface contract. The Android or iOS implementation must conform to the generated interface.",
      },
      {
        type: "heading",
        content: "Benefits of Codegen",
      },
      {
        type: "list",
        content: [
          "Generates native interface code automatically.",
          "Provides stronger type checking across JavaScript and native boundaries.",
          "Reduces manual boilerplate.",
          "Helps detect unsupported or mismatched API definitions during build time.",
          "Supports TurboModules and Fabric Native Components.",
        ],
      },
      {
        type: "heading",
        content: "12. What is Bridgeless Mode?",
      },
      {
        type: "paragraph",
        content:
          "Bridgeless Mode is the operating mode of the New Architecture that removes the dependency on the legacy Bridge. Instead of relying on the old Bridge infrastructure, React Native uses JSI, TurboModules, Fabric, and the new runtime integration.",
      },
      {
        type: "paragraph",
        content:
          "Bridgeless does not mean that all communication becomes synchronous or that JavaScript directly executes every native operation on the UI thread. Threading and asynchronous APIs still matter.",
      },
      {
        type: "paragraph",
        content:
          "In current React Native versions, Bridgeless Mode is integrated into the New Architecture rather than being a separate feature that developers independently enable.",
      },
      {
        type: "heading",
        content: "Legacy vs Bridgeless",
      },
      {
        type: "code",
        language: "text",
        content:
          "LEGACY:\nJavaScript <----> Bridge <----> Native Code\n\nNEW ARCHITECTURE:\nJavaScript Runtime <----> JSI <----> C++ / Native Code\n                         |\n                         +---- TurboModules\n                         |\n                         +---- Fabric Renderer",
      },
      {
        type: "heading",
        content: "13. Threading model in React Native New Architecture",
      },
      {
        type: "paragraph",
        content:
          "Threading is an important senior-level interview topic. React Native does not execute the entire application on a single thread. Different responsibilities are distributed across JavaScript, UI, and background/rendering execution contexts.",
      },
      {
        type: "list",
        content: [
          "JavaScript Thread: Executes JavaScript application code, React logic, event handlers, and much of the React rendering work.",
          "UI/Main Thread: Responsible for native view operations, drawing coordination, and native user interaction.",
          "Background threads: Can be used for work such as layout calculations and other renderer or native tasks, depending on the operation and scheduling.",
          "Native module execution: Depends on the module's implementation and the method's required execution context. Do not assume every TurboModule method runs on the UI thread.",
        ],
      },
      {
        type: "paragraph",
        content:
          "The New Architecture allows the renderer to support multiple in-progress UI trees and schedule updates at different priorities. Some rendering and layout work can happen away from the UI thread, while mounting changes to native views must be coordinated with the UI thread.",
      },
      {
        type: "heading",
        content: "Example: User interaction",
      },
      {
        type: "code",
        language: "text",
        content:
          "User taps a button\n        |\n        v\nNative event is dispatched\n        |\n        v\nJavaScript event handler executes\n        |\n        v\nReact state update is scheduled\n        |\n        v\nReact renders the next UI tree\n        |\n        v\nLayout / Commit\n        |\n        v\nMount native UI changes\n        |\n        v\nUpdated screen appears",
      },
      {
        type: "paragraph",
        content:
          "The exact scheduling can vary. Urgent user interactions can receive higher priority than non-urgent updates, and rendering work can be interrupted or restarted where React's concurrent rendering model permits.",
      },
      {
        type: "heading",
        content: "14. Concurrent Rendering in New Architecture",
      },
      {
        type: "paragraph",
        content:
          "Concurrent rendering allows React to prepare UI updates with different priorities. React can pause, resume, or abandon rendering work when a more urgent update needs attention. It does not mean that JavaScript application code runs simultaneously on multiple JavaScript threads.",
      },
      {
        type: "paragraph",
        content:
          "This improves responsiveness for applications with large UI updates, expensive rendering, and frequent user interactions.",
      },
      {
        type: "heading",
        content: "Example: startTransition",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React, { useState, useTransition } from 'react';\nimport { View, TextInput, Text, FlatList } from 'react-native';\n\nexport default function SearchScreen({ products }) {\n  const [search, setSearch] = useState('');\n  const [filteredSearch, setFilteredSearch] = useState('');\n  const [isPending, startTransition] = useTransition();\n\n  const handleSearch = (value) => {\n    // Urgent update: keep the input responsive.\n    setSearch(value);\n\n    // Non-urgent update: prepare the filtered result UI.\n    startTransition(() => {\n      setFilteredSearch(value);\n    });\n  };\n\n  const filteredProducts = products.filter(item =>\n    item.name.toLowerCase().includes(filteredSearch.toLowerCase())\n  );\n\n  return (\n    <View>\n      <TextInput\n        value={search}\n        onChangeText={handleSearch}\n        placeholder=\"Search products\"\n      />\n\n      {isPending && <Text>Updating results...</Text>}\n\n      <FlatList\n        data={filteredProducts}\n        keyExtractor={item => item.id.toString()}\n        renderItem={({ item }) => <Text>{item.name}</Text>}\n      />\n    </View>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "Here the input state updates urgently, while the result update is marked as a transition. The example demonstrates prioritization; for very large datasets, useMemo, optimized list rendering, and suitable data-processing strategies may also be required.",
      },
      {
        type: "heading",
        content: "15. Automatic Batching",
      },
      {
        type: "paragraph",
        content:
          "With the React 18 renderer used by the New Architecture, React can automatically batch multiple state updates from supported sources into fewer renders. This reduces unnecessary intermediate UI updates.",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState('Prashant');\n\n  const handleClick = () => {\n    setCount(previous => previous + 1);\n    setName('React Native');\n  };\n\n  return (\n    <>\n      <button onClick={handleClick}>Update</button>\n      <p>{count}</p>\n      <p>{name}</p>\n    </>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "The updates can be batched into one render rather than causing a separate render for each state update. Exact behavior depends on the update context and React scheduling.",
      },
      {
        type: "heading",
        content: "16. Synchronous Layout Measurement and useLayoutEffect",
      },
      {
        type: "paragraph",
        content:
          "The New Architecture improves the ability to read layout synchronously during the appropriate rendering phase. This is useful when a component needs to measure its position or dimensions and update another component before the user sees an intermediate layout.",
      },
      {
        type: "paragraph",
        content:
          "For example, a tooltip needs to measure its target element and calculate where it should appear. With the New Architecture, useLayoutEffect can be used with supported measurement APIs to measure and update layout in the same commit, avoiding a visible positioning jump.",
      },
      {
        type: "code",
        language: "jsx",
        content:
          "import React, { useLayoutEffect, useRef, useState } from 'react';\nimport { View, Text } from 'react-native';\n\nexport default function TooltipExample() {\n  const targetRef = useRef(null);\n  const [position, setPosition] = useState(null);\n\n  useLayoutEffect(() => {\n    targetRef.current?.measureInWindow((x, y, width, height) => {\n      setPosition({ x, y, width, height });\n    });\n  }, []);\n\n  return (\n    <View>\n      <View ref={targetRef}>\n        <Text>Target element</Text>\n      </View>\n\n      {position && (\n        <Text>\n          Target position: {position.x}, {position.y}\n        </Text>\n      )}\n    </View>\n  );\n}",
      },
      {
        type: "paragraph",
        content:
          "The key benefit is the ability to measure and apply layout-related updates within the same rendering cycle in supported scenarios. Do not assume that every native measurement or arbitrary state update is universally synchronous.",
      },
      {
        type: "heading",
        content: "17. Complete New Architecture execution flow",
      },
      {
        type: "paragraph",
        content:
          "Let's understand the flow when a React Native application starts and renders a screen.",
      },
      {
        type: "code",
        language: "text",
        content:
          "1. Application starts\n          |\n          v\n2. JavaScript runtime starts (Hermes / JSC)\n          |\n          v\n3. JavaScript bundle executes\n          |\n          v\n4. React creates component tree\n          |\n          v\n5. Fabric creates / updates Shadow Tree\n          |\n          v\n6. Layout calculation happens\n          |\n          v\n7. Renderer commits the next tree\n          |\n          v\n8. Mounting applies changes to native views\n          |\n          v\n9. Android / iOS displays the UI\n\nNative functionality request:\n\nJavaScript API\n      |\n      v\nTurboModule / Native Component API\n      |\n      v\nJSI interoperability\n      |\n      v\nNative Android / iOS / C++ implementation\n      |\n      v\nResult returned to JavaScript",
      },
      {
        type: "paragraph",
        content:
          "This is a conceptual overview. Actual startup, module initialization, rendering, and native operation scheduling can overlap or happen in different orders depending on the application and implementation.",
      },
      {
        type: "heading",
        content:
          "18. Real-world example: BLE integration with a bike dashboard",
      },
      {
        type: "paragraph",
        content:
          "Consider an electric-bike application that connects to a bike dashboard through Bluetooth Low Energy and displays real-time speed, battery percentage, and temperature.",
      },
      {
        type: "list",
        content: [
          "React Native screen: Displays speed, battery, temperature, and connection status.",
          "TurboModule or compatible native library: Provides the JavaScript API for Bluetooth operations.",
          "JSI: Provides the native interoperability mechanism used by New Architecture modules.",
          "Android Bluetooth APIs / iOS Core Bluetooth: Handle the platform BLE functionality.",
          "Native BLE implementation: Scans, connects, discovers services, and subscribes to characteristic notifications.",
          "JavaScript state management: Receives telemetry updates and updates the required UI.",
        ],
      },
      {
        type: "code",
        language: "text",
        content:
          "React Native Dashboard Screen\n             |\n             v\n       BLE JavaScript API\n             |\n             v\n  TurboModule / Compatible BLE Library\n             |\n             v\n            JSI\n             |\n             v\n  Android Bluetooth / iOS Core Bluetooth\n             |\n             v\n         Bike Dashboard\n             |\n             v\n       BLE Notifications\n             |\n             v\n      JavaScript State\n             |\n             v\n        Fabric UI Update",
      },
      {
        type: "paragraph",
        content:
          "Important: JSI does not itself implement Bluetooth. The BLE library provides the Bluetooth functionality using native platform APIs. The library must also support the React Native version and architecture being used.",
      },
      {
        type: "heading",
        content: "19. Real-world example: Camera and image processing",
      },
      {
        type: "paragraph",
        content:
          "Suppose an application uses a camera to capture frames and perform real-time image processing. Passing large frame buffers repeatedly through a serialized Bridge can create significant overhead.",
      },
      {
        type: "list",
        content: [
          "Camera native implementation captures frames.",
          "A high-performance library can expose frame access through JSI or another optimized native interface.",
          "Native or C++ processing handles the image data.",
          "Only the necessary result or metadata is sent to JavaScript.",
          "React Native updates the UI through the renderer.",
        ],
      },
      {
        type: "paragraph",
        content:
          "This is one reason JSI-based integrations are useful for camera processing, image manipulation, and other high-throughput native use cases.",
      },
      {
        type: "heading",
        content: "20. How to enable New Architecture?",
      },
      {
        type: "paragraph",
        content:
          "For React Native 0.76 and later, the New Architecture is enabled by default. In versions 0.76 through 0.81, the legacy architecture opt-out was available. Starting with React Native 0.82, the opt-out was removed and the New Architecture is always enabled.",
      },
      {
        type: "heading",
        content: "Older supported version configuration",
      },
      {
        type: "code",
        language: "properties",
        content: "# android/gradle.properties\nnewArchEnabled=true",
      },
      {
        type: "paragraph",
        content:
          "For older iOS project templates, the New Architecture could be enabled through the Podfile environment configuration and CocoaPods installation. Follow the exact instructions for the React Native version being upgraded.",
      },
      {
        type: "paragraph",
        content:
          "For React Native 0.82 and later, do not attempt to switch back to the legacy architecture using these flags.",
      },
      {
        type: "heading",
        content:
          "21. How to check whether a library supports New Architecture?",
      },
      {
        type: "paragraph",
        content:
          "When upgrading an existing React Native project, verify compatibility of all native dependencies. A library that supports the old Native Modules or Native Components system may require an updated version or an interoperability layer.",
      },
      {
        type: "list",
        content: [
          "Check the library's official documentation and release notes.",
          "Check React Native Directory for architecture compatibility information.",
          "Upgrade libraries to compatible versions.",
          "Run the Android and iOS native builds.",
          "Test native functionality such as camera, maps, BLE, notifications, storage, and payments.",
          "Check logs for Codegen, C++, Gradle, CocoaPods, and native registration errors.",
          "Use Expo Doctor when working with an Expo project.",
        ],
      },
      {
        type: "heading",
        content: "22. Migration from Legacy Architecture to New Architecture",
      },
      {
        type: "paragraph",
        content:
          "Migration means upgrading React Native and ensuring the application and native dependencies work correctly with the New Architecture. For most applications, the migration is primarily dependency compatibility, native build configuration, and testing rather than rewriting all JavaScript components.",
      },
      {
        type: "list",
        content: [
          "Step 1: Identify the current React Native version and native dependencies.",
          "Step 2: Check which libraries support TurboModules and Fabric or have a working interoperability path.",
          "Step 3: Upgrade React Native and compatible native dependencies.",
          "Step 4: Update Android Gradle, Kotlin, iOS Podfile, and native build configuration as required by the target version.",
          "Step 5: Regenerate native Codegen artifacts through the supported build workflow.",
          "Step 6: Resolve incompatible native module or component implementations.",
          "Step 7: Test native features on real Android and iOS devices.",
          "Step 8: Profile performance and compare behavior before and after migration.",
        ],
      },
      {
        type: "heading",
        content: "23. Common problems during migration",
      },
      {
        type: "list",
        content: [
          "Third-party library does not support the New Architecture.",
          "Codegen specification contains unsupported types or incorrect declarations.",
          "Android generated code or native module registration is incorrect.",
          "iOS CocoaPods dependencies or native component registration fail.",
          "C++ compilation or NDK configuration errors occur.",
          "Native components render differently due to Fabric behavior.",
          "A library depends on assumptions about the old Bridge or module lifecycle.",
          "A custom native module uses incorrect thread assumptions or runtime lifecycle management.",
        ],
      },
      {
        type: "heading",
        content: "24. Does New Architecture automatically improve performance?",
      },
      {
        type: "paragraph",
        content:
          "No. The New Architecture provides better foundations and capabilities, but enabling it does not automatically make every application faster.",
      },
      {
        type: "list",
        content: [
          "It reduces the overhead associated with traditional Bridge-based communication.",
          "It enables better native interoperability through JSI.",
          "It supports modern concurrent rendering features.",
          "It supports more efficient native module initialization through lazy loading.",
          "It provides a modern rendering pipeline through Fabric.",
          "Application performance still depends on JavaScript execution, React rendering, list optimization, image processing, network requests, native code, and memory management.",
        ],
      },
      {
        type: "heading",
        content:
          "25. New Architecture vs React Native performance optimization",
      },
      {
        type: "paragraph",
        content:
          "The New Architecture and React-level optimization solve different problems. New Architecture improves the framework internals, while React-level techniques improve how application components and data are handled.",
      },
      {
        type: "table",
        content: [
          ["Optimization", "Responsibility"],
          ["React.memo", "Avoids some unnecessary component renders"],
          ["useMemo", "Caches expensive calculated values"],
          ["useCallback", "Maintains function references when useful"],
          ["FlatList optimization", "Controls rendering of large lists"],
          ["Hermes", "JavaScript engine and runtime optimization"],
          ["JSI", "Efficient JavaScript/native interoperability"],
          ["TurboModules", "Modern native module system"],
          ["Fabric", "Modern native UI rendering"],
          ["Codegen", "Generated typed native interfaces"],
        ],
      },
      {
        type: "heading",
        content: "26. Important senior-level interview questions",
      },
      {
        type: "list",
        content: [
          "What is the difference between Legacy Architecture and New Architecture?",
          "Why was the Bridge removed?",
          "What is JSI and how does it work internally?",
          "Is JSI a replacement for Hermes?",
          "What is the difference between JSI and TurboModules?",
          "What is the difference between TurboModules and Fabric Native Components?",
          "What is Codegen and why is it required?",
          "What is Bridgeless Mode?",
          "Does Bridgeless Mode mean all native calls are synchronous?",
          "What is a Shadow Tree and Shadow Node?",
          "Explain the Fabric rendering pipeline.",
          "What are render, commit, and mount phases?",
          "How does React Native support concurrent rendering?",
          "What is the difference between JavaScript Thread and UI Thread?",
          "Can a TurboModule method block the JavaScript Thread?",
          "How does useLayoutEffect benefit from the New Architecture?",
          "What happens when a third-party library does not support the New Architecture?",
          "How would you migrate a large production application?",
          "How would you debug a Codegen or C++ compilation error?",
          "Does enabling New Architecture automatically improve FlatList performance?",
        ],
      },
      {
        type: "heading",
        content: "27. Interview-ready answer",
      },
      {
        type: "paragraph",
        content:
          "React Native New Architecture is a complete redesign of the internal framework. Earlier, JavaScript communicated with native Android and iOS code through an asynchronous Bridge, which involved serialization and message passing. The New Architecture introduces JSI for direct JavaScript and native interoperability, TurboModules for the new native module system, Fabric as the new rendering engine, and Codegen for generating type-safe native interfaces. It also supports Bridgeless Mode and modern React features such as concurrent rendering, automatic batching, Transitions, and improved synchronous layout measurement. In real-world applications, this architecture is especially useful for native integrations such as Bluetooth, camera, maps, and other performance-sensitive functionality. However, performance still needs to be measured and optimized at the application level.",
      },
      {
        type: "heading",
        content: "28. One-line revision",
      },
      {
        type: "list",
        content: [
          "JSI = JavaScript and native interoperability.",
          "TurboModules = New native module system.",
          "Fabric = New UI rendering engine.",
          "Codegen = Generates typed native interface code.",
          "Bridgeless = Removes dependency on the legacy Bridge.",
          "Concurrent Rendering = Supports prioritized and interruptible rendering work.",
          "Shadow Tree = Internal representation of the UI hierarchy.",
          "Mounting = Applies committed UI changes to native views.",
        ],
      },
    ],
    topic: "React Native Architecture",
  },
  {
    id: "react-native-old-vs-new-architecture-comparison",
    question:
      "Compare React Native Old Architecture (Legacy Architecture) and New Architecture.",

    answer: [
      {
        type: "image",
        src: "/react-native-new-architecture.png",
        alt: "Diagram comparing the legacy and new React Native architectures.",
        caption: "React Native legacy and new architecture",
        width: 1536,
        height: 1024,
      },
      {
        type: "paragraph",
        content:
          "React Native Old Architecture uses the asynchronous Bridge to communicate between JavaScript and native platforms. It relies on the Paper renderer, Native Modules, and UIManager. The New Architecture replaces the legacy Bridge-based communication model with JSI-based interoperability, introduces TurboModules and Fabric, and uses Codegen to generate native interfaces from typed specifications.",
      },

      {
        type: "heading",
        content: "1. High-Level Architecture Comparison",
      },
      {
        type: "table",
        content: [
          ["Feature", "Old Architecture", "New Architecture"],
          [
            "Communication",
            "Asynchronous Bridge",
            "JSI-based interoperability",
          ],
          [
            "JavaScript-to-Native",
            "Bridge messages",
            "Direct interaction through JSI-based interfaces",
          ],
          ["Native Modules", "Legacy Native Modules", "TurboModules"],
          ["Rendering Engine", "Paper", "Fabric"],
          ["UI Management", "UIManager", "Fabric Renderer"],
          [
            "Layout System",
            "Yoga with legacy Shadow Nodes",
            "Yoga with Fabric Shadow Trees",
          ],
          ["Native Interface Generation", "Mostly manual setup", "Codegen"],
          [
            "Module Loading",
            "Generally eager module initialization",
            "TurboModules support lazy loading",
          ],
          [
            "Communication Model",
            "Serialized and batched messages",
            "JSI-based interoperability",
          ],
          [
            "Architecture Mode",
            "Bridge-dependent",
            "Bridgeless mode supported",
          ],
          [
            "Type Safety",
            "More manual integration",
            "Typed specifications with Codegen",
          ],
          [
            "Concurrent Rendering",
            "Limited by legacy integration",
            "Better integration with modern React features",
          ],
          ["Renderer Implementation", "Legacy renderer", "C++-based renderer"],
          [
            "Migration",
            "Legacy libraries supported",
            "Libraries must support New Architecture",
          ],
        ],
      },

      {
        type: "heading",
        content: "2. Old Architecture – Communication Flow",
      },
      {
        type: "paragraph",
        content:
          "In the Old Architecture, JavaScript communicates with native Android or iOS functionality through the Bridge. Messages are serialized, queued, and processed asynchronously.",
      },
      {
        type: "code",
        language: "text",
        content:
          "React Components (JSX)\n        |\n        v\nJavaScript Thread\n        |\n        v\nBridge (Serialized Messages)\n        |\n        +--------------------------+\n        |                          |\n        v                          v\nNative Modules              Paper Renderer\n        |                          |\n        v                          v\nNative Module Queue         Shadow Thread\n        |                    (Yoga Layout)\n        v                          |\nAndroid / iOS APIs                 v\n                             UI Thread\n                                  |\n                                  v\n                            Native UI Screen",
      },
      {
        type: "list",
        content: [
          "JavaScript Thread: Executes React components, application logic, event handlers, and JavaScript code.",
          "Bridge: Transfers messages between JavaScript and native code using asynchronous, serialized communication.",
          "Native Modules: Provide access to native capabilities such as camera, Bluetooth, location, and device information.",
          "Native Module Queue: Native module methods execute on configured native queues.",
          "Paper Renderer: Legacy UI rendering system responsible for coordinating native view updates.",
          "Shadow Thread: Calculates layout using Yoga.",
          "UI Thread: Performs native UI operations and updates native views.",
        ],
      },

      {
        type: "heading",
        content: "3. New Architecture – Communication Flow",
      },
      {
        type: "paragraph",
        content:
          "The New Architecture introduces JSI, TurboModules, and Fabric. JSI provides a C++ interface for interoperability between the JavaScript runtime and native C++ objects. TurboModules handle native functionality, while Fabric handles UI rendering.",
      },
      {
        type: "code",
        language: "text",
        content:
          "React Components (JSX)\n        |\n        v\nJavaScript Runtime\n        |\n        v\nJSI (JavaScript Interface)\n        |\n        +---------------------------+\n        |              |            |\n        v              v            v\nTurboModules       Fabric        Codegen\n        |              |            |\n        v              v            v\nNative APIs      Fabric Shadow   Generated Native\n(Android/iOS)       Trees          Interfaces\n        |              |\n        +--------------+\n                |\n                v\n        Bridgeless Communication\n                |\n                v\n        Android / iOS Native Layer\n                |\n                v\n          Native UI Screen",
      },
      {
        type: "list",
        content: [
          "JSI: Provides interoperability between JavaScript and C++ without depending on the legacy Bridge.",
          "TurboModules: Modern native module system supporting typed specifications and lazy loading.",
          "Fabric: New rendering system built around C++ and Fabric Shadow Trees.",
          "Codegen: Generates native interface and binding code from typed JavaScript or TypeScript specifications.",
          "Bridgeless Mode: Allows React Native to run without depending on the legacy Bridge.",
        ],
      },

      {
        type: "heading",
        content: "4. Bridge vs JSI",
      },
      {
        type: "paragraph",
        content:
          "The Bridge and JSI are two different approaches to JavaScript-native interoperability.",
      },
      {
        type: "table",
        content: [
          ["Feature", "Bridge", "JSI"],
          ["Full Form", "Communication Bridge", "JavaScript Interface"],
          [
            "Communication",
            "Asynchronous message passing",
            "C++ interoperability",
          ],
          [
            "Serialization",
            "Messages require serialization",
            "Can expose C++ objects and functions to JavaScript",
          ],
          [
            "Data Transfer",
            "Messages are queued and batched",
            "Direct interaction through JSI interfaces",
          ],
          [
            "Overhead",
            "Serialization and queue scheduling overhead",
            "Avoids legacy Bridge serialization for JSI interactions",
          ],
          [
            "Synchronous Access",
            "Traditional Bridge calls are asynchronous",
            "Can support synchronous interaction where the API and threading model permit",
          ],
          [
            "Implementation",
            "Legacy React Native architecture",
            "New React Native architecture",
          ],
        ],
      },
      {
        type: "heading",
        content: "Example: Bridge vs JSI",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "// OLD ARCHITECTURE - Conceptual legacy Native Module usage\nimport { NativeModules } from 'react-native';\n\nconst { DeviceInfo } = NativeModules;\n\nDeviceInfo.getBatteryLevel()\n  .then(level => {\n    console.log('Battery:', level);\n  });\n\n// NEW ARCHITECTURE - Conceptual JSI Host Function usage\n// A native C++ function is exposed to the JavaScript runtime.\n// Exact implementation and registration are native-side and version-dependent.\n\nconst batteryLevel = global.getBatteryLevel?.();\nconsole.log('Battery:', batteryLevel);",
      },
      {
        type: "paragraph",
        content:
          "Important: The second example is conceptual pseudocode, not a standard React Native API. JSI does not automatically create global functions. Native code must explicitly expose the required functionality.",
      },

      {
        type: "heading",
        content: "5. Native Modules vs TurboModules",
      },
      {
        type: "table",
        content: [
          ["Feature", "Legacy Native Modules", "TurboModules"],
          ["Architecture", "Bridge-based", "JSI-based interoperability"],
          ["Initialization", "Generally eager", "Supports lazy loading"],
          [
            "Specification",
            "Often manually defined",
            "Typed TypeScript or Flow specification",
          ],
          [
            "Code Generation",
            "Mostly manual integration",
            "Codegen generates interfaces",
          ],
          [
            "Communication",
            "Serialized Bridge messages",
            "JSI-based interaction",
          ],
          [
            "Performance",
            "Bridge serialization overhead",
            "Can reduce communication overhead",
          ],
          ["Compatibility", "Legacy Architecture", "New Architecture"],
        ],
      },
      {
        type: "paragraph",
        content:
          "Example: A Bluetooth module can expose connect(), disconnect(), and getDeviceData() methods. Under the legacy architecture, these methods are exposed through NativeModules. Under the New Architecture, a TurboModule can expose a typed specification and use generated native interfaces.",
      },
      {
        type: "heading",
        content: "6. Paper vs Fabric",
      },
      {
        type: "table",
        content: [
          ["Feature", "Paper", "Fabric"],
          ["Architecture", "Legacy renderer", "New renderer"],
          [
            "Implementation",
            "Legacy UI rendering system",
            "C++-based renderer",
          ],
          [
            "Shadow Tree",
            "Legacy Shadow Nodes",
            "Fabric Shadow Nodes and Trees",
          ],
          ["Layout", "Yoga", "Yoga"],
          ["UI Management", "UIManager", "Fabric Renderer"],
          [
            "React Integration",
            "Legacy rendering integration",
            "Improved integration with modern React features",
          ],
          [
            "Synchronous Layout",
            "More limited legacy integration",
            "Supports synchronous layout measurement in supported scenarios",
          ],
          ["Architecture", "Old Architecture", "New Architecture"],
        ],
      },
      {
        type: "paragraph",
        content:
          "Paper is the old rendering system. Fabric is the new rendering system. Fabric improves the integration between React's rendering process and native UI operations. Both architectures use Yoga for layout calculations.",
      },

      {
        type: "heading",
        content: "7. Codegen – Why Is It Needed?",
      },
      {
        type: "paragraph",
        content:
          "Codegen generates native interface and binding code from typed JavaScript or TypeScript specifications. It reduces repetitive manual native integration and helps maintain consistency between JavaScript and native implementations.",
      },
      {
        type: "code",
        language: "TypeScript",
        content:
          "// Conceptual TurboModule specification\nimport type { TurboModule } from 'react-native';\nimport { TurboModuleRegistry } from 'react-native';\n\nexport interface Spec extends TurboModule {\n  getBatteryLevel(): Promise<number>;\n  getDeviceName(): string;\n}\n\nexport default TurboModuleRegistry.getEnforcing<Spec>(\n  'DeviceInfo'\n);",
      },
      {
        type: "list",
        content: [
          "Developer defines a typed specification.",
          "Codegen reads the specification.",
          "Codegen generates the required native interfaces and bindings.",
          "Native developers implement the generated interface.",
          "React Native connects JavaScript and native implementations.",
        ],
      },

      {
        type: "heading",
        content: "8. Threading Model Comparison",
      },
      {
        type: "table",
        content: [
          ["Thread / Area", "Old Architecture", "New Architecture"],
          [
            "JavaScript Thread",
            "Executes JS and React logic",
            "Executes JS and React logic",
          ],
          [
            "Bridge",
            "Dedicated asynchronous communication mechanism",
            "Legacy Bridge is no longer required in Bridgeless mode",
          ],
          [
            "Native Module Execution",
            "Configured native module queues",
            "TurboModule execution depends on module and API threading requirements",
          ],
          [
            "Shadow Thread",
            "Legacy Paper layout processing",
            "Fabric uses its own rendering and scheduling model",
          ],
          [
            "UI Thread",
            "Native view operations",
            "Native view mounting and UI operations",
          ],
          [
            "Concurrent Rendering",
            "Limited legacy integration",
            "Better integration with concurrent React rendering",
          ],
        ],
      },
      {
        type: "paragraph",
        content:
          "The New Architecture does not mean JavaScript executes on multiple threads automatically. Concurrent rendering allows React to prioritize, pause, and resume rendering work. It does not mean arbitrary JavaScript code runs in parallel on multiple JavaScript threads.",
      },

      {
        type: "heading",
        content: "9. Performance Comparison",
      },
      {
        type: "table",
        content: [
          ["Scenario", "Old Architecture", "New Architecture"],
          [
            "Frequent Native Calls",
            "Bridge message and serialization overhead",
            "Can reduce overhead through JSI-based interfaces",
          ],
          [
            "Large Data Transfer",
            "Serialization can become expensive",
            "Can use more efficient native interoperability patterns",
          ],
          [
            "Native Module Loading",
            "Generally eager initialization",
            "TurboModules support lazy loading",
          ],
          ["UI Rendering", "Paper renderer", "Fabric renderer"],
          [
            "Layout Measurement",
            "Legacy asynchronous integration patterns",
            "Synchronous measurement supported in appropriate scenarios",
          ],
          [
            "React Rendering",
            "Legacy integration",
            "Better integration with concurrent rendering",
          ],
          [
            "Overall Performance",
            "Can experience Bridge-related bottlenecks",
            "Provides opportunities for improved performance",
          ],
        ],
      },
      {
        type: "paragraph",
        content:
          "The New Architecture does not automatically make every application faster. Actual performance depends on JavaScript workload, native implementation, rendering complexity, memory usage, third-party libraries, and application architecture. Always profile the application before and after migration.",
      },

      {
        type: "heading",
        content: "10. Real-World Example – BLE Bike Dashboard",
      },
      {
        type: "paragraph",
        content:
          "Consider a React Native application connected to an electric bike dashboard through Bluetooth Low Energy (BLE). The application receives real-time speed, temperature, battery percentage, and other telemetry information.",
      },
      {
        type: "list",
        content: [
          "Old Architecture: React Native JavaScript communicates with the BLE native module through the Bridge. Frequent telemetry events may create serialization and queue overhead.",
          "New Architecture: A TurboModule can expose typed BLE functionality using JSI-based interoperability. Fabric handles the UI rendering of the telemetry dashboard.",
          "Native BLE APIs: Android Bluetooth APIs and iOS Core Bluetooth still perform the actual Bluetooth operations.",
          "Important: JSI does not implement Bluetooth functionality. It provides the interoperability mechanism used by native integrations.",
        ],
      },
      {
        type: "heading",
        content: "11. Advantages and Disadvantages",
      },
      {
        type: "table",
        content: [
          ["Architecture", "Advantages", "Disadvantages"],
          [
            "Old Architecture",
            "Mature ecosystem, broad legacy library support, familiar integration model",
            "Bridge serialization overhead, less efficient frequent communication, legacy rendering limitations",
          ],
          [
            "New Architecture",
            "JSI interoperability, TurboModules, Fabric, Codegen, better modern React integration",
            "Migration effort, library compatibility requirements, native implementation complexity",
          ],
        ],
      },

      {
        type: "heading",
        content: "12. Version Compatibility",
      },
      {
        type: "list",
        content: [
          "React Native 0.76: New Architecture became enabled by default, with the ability to opt out.",
          "React Native 0.76–0.81: Legacy Architecture opt-out remained available.",
          "React Native 0.82: New Architecture became the only supported architecture; the Legacy Architecture opt-out was removed.",
          "When upgrading, verify React Native version, native dependencies, and third-party library compatibility.",
        ],
      },

      {
        type: "heading",
        content: "13. When Should You Use Each Architecture?",
      },
      {
        type: "list",
        content: [
          "Old Architecture: Relevant when maintaining an older React Native application that depends on legacy native integrations.",
          "New Architecture: Recommended for modern React Native applications and projects using current React Native releases.",
          "Migration: Check native module compatibility, update libraries, validate Android and iOS builds, and test critical native features.",
          "Performance: Benchmark real user flows rather than assuming that migration alone guarantees improvement.",
        ],
      },

      {
        type: "heading",
        content: "14. Frequently Asked Senior-Level Interview Questions",
      },
      {
        type: "list",
        content: [
          "What is the main difference between the Bridge and JSI?",
          "Why was the Bridge a performance bottleneck?",
          "Does JSI mean JavaScript directly executes native Android or iOS code?",
          "What is the difference between Native Modules and TurboModules?",
          "What is the difference between Paper and Fabric?",
          "What is Codegen, and why is it required?",
          "What is Bridgeless Mode?",
          "Does the New Architecture eliminate all asynchronous communication?",
          "Does Fabric replace Yoga?",
          "Does Concurrent Rendering mean JavaScript executes on multiple threads?",
          "How would you migrate an existing application to the New Architecture?",
          "How would you debug a third-party native library that is incompatible with the New Architecture?",
          "How would you optimize frequent BLE events in a React Native application?",
        ],
      },

      {
        type: "heading",
        content: "15. Interview-Ready Answer",
      },
      {
        type: "paragraph",
        content:
          "React Native Old Architecture uses an asynchronous Bridge to communicate between JavaScript and native platforms. It uses Native Modules for native functionality and Paper as its rendering engine. The Bridge serializes and transfers messages between JavaScript and native code, which can introduce overhead when applications make frequent native calls or transfer large amounts of data.",
      },
      {
        type: "paragraph",
        content:
          "React Native New Architecture introduces JSI, TurboModules, Fabric, and Codegen. JSI provides interoperability between JavaScript and C++. TurboModules modernize native module integration, Fabric replaces the Paper renderer, and Codegen generates native interfaces from typed specifications. The New Architecture also supports Bridgeless Mode and improves integration with modern React rendering features.",
      },
      {
        type: "paragraph",
        content:
          "The biggest difference is that the New Architecture removes the dependency on the legacy Bridge and provides a more efficient and flexible foundation for communication, native modules, and UI rendering. However, actual performance improvements depend on how the application and native modules are implemented.",
      },

      {
        type: "heading",
        content: "16. Quick Revision – Remember These Differences",
      },
      {
        type: "table",
        content: [
          ["Old Architecture", "New Architecture"],
          ["Bridge", "JSI"],
          ["Native Modules", "TurboModules"],
          ["Paper", "Fabric"],
          ["Legacy UIManager", "Fabric Renderer"],
          ["Manual Native Integration", "Codegen-generated interfaces"],
          ["Bridge-dependent", "Bridgeless Mode supported"],
          ["Legacy React Integration", "Improved Concurrent React integration"],
        ],
      },
    ],

    topic: "React Native Architecture",
  },
  {
    id: "fabric-turbomodules-performance",
    question:
      "How do Fabric and TurboModules improve React Native performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "Fabric and TurboModules are important components of React Native's New Architecture.",
      },
      {
        type: "paragraph",
        content:
          "TurboModules provide a more efficient native module system with support for lazy loading and typed interfaces through Codegen.",
      },
      {
        type: "paragraph",
        content:
          "Fabric is the new rendering system that improves communication between JavaScript and native rendering components and supports modern React features.",
      },
      {
        type: "paragraph",
        content:
          "Together, these technologies reduce limitations associated with the old architecture and improve integration between JavaScript and native code.",
      },
    ],
    topic: "React Native New Architecture",
  },
  {
    id: "timers-and-state-updates",
    question:
      "How can excessive use of timers and frequent state updates affect React Native performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "Excessive use of setTimeout, setInterval, and frequent state updates can create unnecessary JavaScript execution and repeated rendering work. This can overload the JavaScript thread, increase CPU and battery consumption, and cause UI lag, dropped frames, and delayed user interactions.",
      },
      {
        type: "paragraph",
        content:
          "Whenever state changes, React schedules a re-render of the affected component. Frequent updates can increase reconciliation work, especially when components contain complex UI, large lists, or expensive calculations.",
      },
      {
        type: "paragraph",
        content:
          "Excessive timers can also create unnecessary callback execution. If intervals or timeouts are not properly cleaned up, they may continue running after components unmount, causing memory leaks and unexpected behavior.",
      },
      {
        type: "heading",
        content: "Best practices to optimize performance:",
      },
      {
        type: "list",
        content: [
          "Avoid unnecessary setTimeout and setInterval calls.",
          "Always clear intervals and timeouts during component cleanup.",
          "Use functional state updates to avoid stale state and unnecessary dependencies.",
          "Batch related state updates where appropriate.",
          "Use React.memo, useMemo, and useCallback when they provide measurable benefits.",
          "Use debounce and throttle to control frequent events and state updates.",
          "Avoid updating the entire component tree when only a small part of the UI needs to change.",
          "Use React Native Reanimated for suitable animations to reduce dependence on the JavaScript thread.",
        ],
      },
      {
        type: "heading",
        content: "Example:",
      },
      {
        type: "code",
        language: "javascript",
        content: `useEffect(() => {
  const interval = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);`,
      },
      {
        type: "paragraph",
        content:
          "In this example, the functional state updater avoids stale state, the empty dependency array prevents unnecessary interval recreation, and clearInterval ensures proper cleanup when the component unmounts.",
      },
      {
        type: "paragraph",
        content:
          "In short, control the frequency of state updates, minimize unnecessary JavaScript execution, and update only the UI components that actually need to change.",
      },
    ],
    topic: "Performance optimization",
  },
  {
    id: "enable-hermes-react-native",
    question: "How do you enable Hermes in a React Native application?",
    answer: [
      {
        type: "paragraph",
        content:
          "Hermes is the JavaScript engine used by default in new React Native projects. It can improve startup time and memory efficiency through optimized JavaScript execution and bytecode compilation.",
      },
      {
        type: "paragraph",
        content:
          "Hermes configuration depends on the React Native version and project setup. Developers should follow the official React Native installation and upgrade documentation rather than applying older Gradle or Podfile instructions blindly.",
      },
    ],
    topic: "Hermes engine",
  },
  {
    id: "proguard-code-shrinking-resource-shrinking",
    question:
      "How do ProGuard, code shrinking, and resource shrinking help reduce Android application size?",
    answer: [
      {
        type: "paragraph",
        content:
          "ProGuard, code shrinking, and resource shrinking help reduce the final Android application size by removing unused code, optimizing bytecode, obfuscating class and method names, and eliminating unused resources such as images, layouts, strings, and XML files.",
      },
      {
        type: "heading",
        content: "1. ProGuard",
      },
      {
        type: "paragraph",
        content:
          "ProGuard is an Android code optimization tool that performs code shrinking, optimization, and obfuscation. It removes unused classes, methods, and fields, optimizes bytecode, and renames classes and methods to shorter names to make reverse engineering more difficult.",
      },
      {
        type: "paragraph",
        content:
          "In modern Android projects, R8 is the default code shrinker and optimizer. It incorporates ProGuard-compatible configuration rules and performs shrinking, optimization, and obfuscation during the release build.",
      },
      {
        type: "heading",
        content: "2. Code Shrinking",
      },
      {
        type: "paragraph",
        content:
          "Code shrinking removes unused Java, Kotlin, and library code that is not required by the application. For example, if an imported library contains 100 classes but the application uses only 20, the shrinker can remove the unused classes when it can safely determine that they are not needed.",
      },
      {
        type: "paragraph",
        content:
          "This reduces the DEX bytecode size and helps decrease the overall application package size.",
      },
      {
        type: "heading",
        content: "3. Resource Shrinking",
      },
      {
        type: "paragraph",
        content:
          "Resource shrinking removes unused Android resources, including drawable images, layouts, strings, colors, XML files, and other resources that are not referenced by the application.",
      },
      {
        type: "paragraph",
        content:
          "For example, if the project contains 50 images but only 30 are used, resource shrinking can remove the unused images from the release build, reducing the APK or App Bundle size.",
      },
      {
        type: "heading",
        content: "4. Android Gradle Configuration",
      },
      {
        type: "paragraph",
        content:
          "These optimizations are generally enabled for release builds through the Android Gradle configuration.",
      },
      {
        type: "code",
        language: "groovy",
        content: `android {
    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true

            proguardFiles(
                getDefaultProguardFile(
                    'proguard-android-optimize.txt'
                ),
                'proguard-rules.pro'
            )
        }
    }
}`,
      },
      {
        type: "paragraph",
        content:
          "minifyEnabled true enables R8 code shrinking, optimization, and obfuscation. shrinkResources true enables removal of unused Android resources and works alongside code shrinking.",
      },
      {
        type: "heading",
        content: "5. ProGuard Rules",
      },
      {
        type: "paragraph",
        content:
          "Sometimes libraries use reflection, JNI, serialization, or dynamically accessed classes. R8 may not detect these usages automatically. In such cases, keep rules are required to prevent essential classes or methods from being removed or renamed.",
      },
      {
        type: "code",
        language: "pro",
        content: `# Keep a specific class
-keep class com.example.MyClass {
    *;
}

# Keep all model classes
-keep class com.example.models.** {
    *;
}

# Preserve annotations
-keepattributes *Annotation*`,
      },
      {
        type: "heading",
        content: "6. Benefits",
      },
      {
        type: "list",
        content: [
          "Reduces APK and Android App Bundle size.",
          "Removes unused Java and Kotlin code.",
          "Removes unused Android resources.",
          "Optimizes bytecode and can improve startup or runtime performance in some cases.",
          "Obfuscates class and method names, making reverse engineering more difficult.",
          "Reduces download size and storage requirements.",
        ],
      },
      {
        type: "heading",
        content: "7. Important Considerations",
      },
      {
        type: "list",
        content: [
          "Test release builds thoroughly because incorrect keep rules can break reflection-based libraries.",
          "Maintain mapping.txt files to de-obfuscate production crash stack traces.",
          "Validate third-party SDK compatibility with R8.",
          "Measure APK or AAB size before and after enabling shrinking.",
          "Use Android App Bundle (AAB) to deliver device-specific resources and native libraries where applicable.",
        ],
      },
      {
        type: "paragraph",
        content:
          "In short, R8 reduces unnecessary application code, resource shrinking removes unused assets, and obfuscation makes code harder to understand through reverse engineering. Together, these techniques help produce smaller and more optimized Android release builds.",
      },
    ],
    topic: "Android optimization",
  },
  {
    id: "code-splitting-lazy-loading",
    question:
      "What is code splitting and how does lazy loading help reduce application startup time?",
    answer: [
      {
        type: "paragraph",
        content:
          "Code splitting is a performance optimization technique that divides application code into smaller independent modules or bundles instead of loading the entire application code at once. Lazy loading loads specific modules, components, or screens only when they are required.",
      },
      {
        type: "paragraph",
        content:
          "In React Native, code splitting and lazy loading help reduce the initial JavaScript execution and initialization work by avoiding unnecessary loading and evaluation of features that the user does not immediately need.",
      },
      {
        type: "paragraph",
        content:
          "For example, an application may contain Home, Profile, Settings, Payment, and Reports screens. Instead of initializing every screen immediately, lazy loading can defer the initialization of screens until the user navigates to them.",
      },
      {
        type: "paragraph",
        content: "Benefits of code splitting and lazy loading:",
      },
      {
        type: "paragraph",
        content:
          "1. Faster startup: Reduces the amount of JavaScript code that needs to be initialized during application startup.",
      },
      {
        type: "paragraph",
        content:
          "2. Reduced memory usage: Avoids creating and retaining unnecessary component instances before they are needed.",
      },
      {
        type: "paragraph",
        content:
          "3. Better performance: Reduces unnecessary initialization and processing work.",
      },
      {
        type: "paragraph",
        content:
          "4. Improved user experience: Displays important screens first while loading less frequently used features when required.",
      },
      {
        type: "paragraph",
        content: "Example using React.lazy and Suspense in React:",
      },
      {
        type: "paragraph",
        content:
          "React.lazy dynamically imports a component, and Suspense displays fallback UI while that component is loading.",
      },
      {
        type: "paragraph",
        content:
          "Note: React.lazy with dynamic import is commonly used for web bundlers. Standard React Native Metro bundling does not automatically provide production web-style code splitting. React Native applications can use techniques such as React Navigation's lazy screen rendering and platform-supported bundle strategies to defer screen initialization.",
      },
      {
        type: "paragraph",
        content:
          "In short, code splitting divides application code into smaller parts, while lazy loading ensures that features are initialized or loaded only when needed. Together, these techniques can reduce startup work and improve perceived application performance.",
      },
    ],
    topic: "Performance optimization",
  },
  {
    id: "controlling-state-scope",
    question:
      "How does controlling state scope improve React Native performance?",
    answer: [
      {
        type: "paragraph",
        content:
          "Controlling state scope means keeping state as close as possible to the components that actually need it instead of maintaining all application state in a common parent or global store. This reduces unnecessary component re-renders and improves rendering performance.",
      },
      {
        type: "paragraph",
        content:
          "When state is maintained in a parent component, updating that state can cause the parent and its child components to re-render. If multiple unrelated components share the same state, they may perform unnecessary rendering work even when their UI does not depend on the updated value.",
      },
      {
        type: "paragraph",
        content:
          "For example, consider a screen containing a search input, user profile, product list, and notification counter. If all these states are maintained in one parent component, updating the search input may cause the parent and its children to re-render.",
      },
      {
        type: "paragraph",
        content:
          "Instead, keep search state inside the search component, profile state inside the profile component, and notification state in the component or store that actually needs it.",
      },
      {
        type: "paragraph",
        content: "Benefits of controlling state scope:",
      },
      {
        type: "paragraph",
        content:
          "1. Reduced unnecessary re-renders: Only components that depend on the updated state need to update.",
      },
      {
        type: "paragraph",
        content:
          "2. Better rendering performance: Smaller component trees perform less rendering and reconciliation work.",
      },
      {
        type: "paragraph",
        content:
          "3. Improved maintainability: Components become more independent and easier to debug.",
      },
      {
        type: "paragraph",
        content:
          "4. Better scalability: Large applications become easier to manage when state ownership is clearly separated.",
      },
      {
        type: "paragraph",
        content:
          "5. Reduced unnecessary global updates: Avoids triggering unrelated components through frequently changing global state or Context values.",
      },
      {
        type: "paragraph",
        content: "Example:",
      },
      {
        type: "code",
        language: "tsx",
        content: `// Avoid: Keeping unrelated state in a common parent

const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />
      <Notification count={count} />
    </>
  );
};

// Better: Keep state close to where it is used

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <TextInput
      value={search}
      onChangeText={setSearch}
      placeholder="Search..."
    />
  );
};

const Notification = () => {
  const [count, setCount] = useState(0);

  return <Text>{count}</Text>;
};`,
      },
      {
        type: "paragraph",
        content:
          "In the improved approach, updating the search input does not trigger a state-driven re-render of the Notification component because both components manage their own independent state.",
      },
      {
        type: "paragraph",
        content:
          "Important: State should not always be local. Use Context API, Redux, Zustand, or another global state solution when multiple unrelated components genuinely need shared data. Use selectors or subscriptions to prevent unnecessary updates.",
      },
      {
        type: "paragraph",
        content:
          "In short, controlling state scope reduces unnecessary rendering, improves component isolation, minimizes rendering overhead, and makes React Native applications more efficient and maintainable.",
      },
    ],
    topic: "Performance optimization",
  },
  {
    id: "react-native-performance-monitoring",
    question:
      "Which tools and techniques can be used to monitor and identify performance issues in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "React Native provides several tools and techniques to monitor application performance, identify bottlenecks, detect memory leaks, analyze rendering behavior, and optimize JavaScript and native UI execution.",
      },
      {
        type: "paragraph",
        content:
          "1. React Native DevTools: Used to inspect components, debug JavaScript code, analyze React component rendering, and identify performance bottlenecks. It includes React Components and Profiler capabilities.",
      },
      {
        type: "paragraph",
        content:
          "2. React DevTools Profiler: Helps identify components that re-render frequently, measure rendering duration, and understand which state or prop changes trigger unnecessary renders.",
      },
      {
        type: "paragraph",
        content:
          "3. Flipper: A desktop debugging platform that has historically been used with React Native for inspecting logs, network requests, and application behavior. Its availability depends on the React Native version and integration.",
      },
      {
        type: "paragraph",
        content:
          "4. Android Studio Profiler: Helps monitor CPU usage, memory consumption, network activity, and energy usage in Android applications. It is useful for identifying memory leaks, excessive CPU consumption, and native performance issues.",
      },
      {
        type: "paragraph",
        content:
          "5. Xcode Instruments: Used for iOS performance analysis. Instruments such as Time Profiler, Allocations, and Leaks help identify CPU bottlenecks, memory allocation issues, and memory leaks.",
      },
      {
        type: "paragraph",
        content:
          "6. Firebase Performance Monitoring: Helps track application startup time, screen rendering performance, network request duration, and custom performance traces in production.",
      },
      {
        type: "paragraph",
        content:
          "7. Sentry: Helps monitor application crashes, JavaScript errors, performance transactions, slow operations, and production issues.",
      },
      {
        type: "paragraph",
        content:
          "8. React Native Performance Monitor: Provides development-time FPS information and JS/UI performance indicators, depending on the React Native version and tooling available.",
      },
      {
        type: "paragraph",
        content: "Important performance monitoring techniques:",
      },
      {
        type: "paragraph",
        content:
          "1. Monitor FPS: Check whether animations and scrolling maintain approximately 60 FPS or the device's supported refresh rate.",
      },
      {
        type: "paragraph",
        content:
          "2. Monitor JS thread: Identify long-running JavaScript tasks, excessive timers, expensive calculations, and frequent state updates.",
      },
      {
        type: "paragraph",
        content:
          "3. Monitor UI thread: Identify slow layout operations, excessive native view creation, and animation bottlenecks.",
      },
      {
        type: "paragraph",
        content:
          "4. Analyze component rendering: Use React Profiler to identify unnecessary re-renders and expensive component trees.",
      },
      {
        type: "paragraph",
        content:
          "5. Monitor memory usage: Identify memory leaks caused by uncleared timers, event listeners, subscriptions, and retained objects.",
      },
      {
        type: "paragraph",
        content:
          "6. Analyze network requests: Monitor API response times, payload sizes, repeated requests, and slow endpoints.",
      },
      {
        type: "paragraph",
        content:
          "7. Test release builds: Always validate performance in release builds on real devices because development mode introduces additional overhead.",
      },
      {
        type: "paragraph",
        content:
          "Example: If a FlatList screen becomes laggy while scrolling, I would use React DevTools Profiler to identify unnecessary component re-renders, inspect FlatList configuration, and use Android Studio Profiler to check CPU and memory consumption.",
      },
      {
        type: "paragraph",
        content:
          "In short, React Native DevTools and React Profiler help identify JavaScript and rendering issues, Android Studio Profiler and Xcode Instruments help analyze native performance, and Firebase Performance Monitoring or Sentry helps monitor real-world production performance.",
      },
    ],
    topic: "Performance optimization",
  },
  {
    id: "reduce-react-native-app-size",
    question: "How can you reduce the application size in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Reducing React Native application size involves optimizing JavaScript bundles, removing unused dependencies and assets, enabling Android code shrinking, optimizing images, and reducing unnecessary native libraries.",
      },
      {
        type: "paragraph",
        content:
          "1. Enable ProGuard / R8: Use R8 code shrinking, optimization, and obfuscation to remove unused Java and Kotlin code and optimize the Android release build.",
      },
      {
        type: "paragraph",
        content:
          "2. Enable Resource Shrinking: Remove unused Android resources such as images, layouts, strings, colors, and XML files from the release build.",
      },
      {
        type: "paragraph",
        content:
          "3. Optimize Images: Compress images, use WebP where appropriate, resize large images, and avoid unnecessarily high-resolution assets.",
      },
      {
        type: "paragraph",
        content:
          "4. Remove Unused Dependencies: Analyze package dependencies and remove unnecessary third-party libraries that increase JavaScript bundle size or native binary size.",
      },
      {
        type: "paragraph",
        content:
          "5. Enable Hermes: Hermes is an optimized JavaScript engine for React Native that can improve startup performance and memory usage. It uses bytecode compilation and may affect application size depending on the build configuration.",
      },
      {
        type: "paragraph",
        content:
          "6. Optimize Native Libraries: Include only the required Android ABIs and native modules. Avoid bundling unnecessary architecture-specific native libraries.",
      },
      {
        type: "paragraph",
        content:
          "7. Use Android App Bundle (AAB): Generate an AAB instead of distributing a universal APK. Google Play can deliver device-specific APKs containing only the required resources and native libraries.",
      },
      {
        type: "paragraph",
        content:
          "8. Remove Unnecessary Assets: Delete unused fonts, icons, animations, JSON files, and other bundled resources.",
      },
      {
        type: "paragraph",
        content:
          "9. Optimize JavaScript Bundle: Avoid importing entire libraries when only a small portion is required. Prefer lightweight alternatives and remove unused code.",
      },
      {
        type: "paragraph",
        content:
          "10. Use Release Builds: Ensure that production builds do not include development tools, debugging configurations, unnecessary logs, or development-only dependencies.",
      },
      {
        type: "heading",
        content: "Android Gradle Configuration:",
      },
      {
        type: "code",
        language: "groovy",
        content: `android {
    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true

            proguardFiles(
                getDefaultProguardFile(
                    "proguard-android-optimize.txt"
                ),
                "proguard-rules.pro"
            )
        }
    }
}`,
      },
      {
        type: "paragraph",
        content:
          "Here, minifyEnabled true enables R8 code shrinking, optimization, and obfuscation. shrinkResources true removes unused Android resources. Both are configured for the release build.",
      },
      {
        type: "heading",
        content: "Useful Commands:",
      },
      {
        type: "code",
        language: "bash",
        content: `# Generate Android release APK
cd android
./gradlew assembleRelease

# Generate Android App Bundle
./gradlew bundleRelease`,
      },
      {
        type: "paragraph",
        content:
          "In short, the best approach is to enable R8 and resource shrinking, optimize images and assets, remove unused dependencies, use Hermes where beneficial, and distribute Android App Bundles to reduce download size.",
      },
    ],
    topic: "Performance optimization",
  },
  {
    id: "fast-refresh-react-native",
    question: "How does Fast Refresh work in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Fast Refresh is a React Native development feature that automatically updates the application when developers modify JavaScript or TypeScript code, without requiring a complete application rebuild or manual reload.",
      },
      {
        type: "paragraph",
        content:
          "It improves development productivity by applying code changes quickly while preserving component state whenever possible.",
      },
      {
        type: "paragraph",
        content: "How Fast Refresh works:",
      },
      {
        type: "paragraph",
        content:
          "1. Code Modification: A developer changes a component, function, style, or other JavaScript/TypeScript code.",
      },
      {
        type: "paragraph",
        content:
          "2. Metro Bundler Detection: Metro detects the file modification and rebuilds the affected JavaScript modules.",
      },
      {
        type: "paragraph",
        content:
          "3. Module Update: Metro sends the updated modules to the running React Native application through the development connection.",
      },
      {
        type: "paragraph",
        content:
          "4. Component Refresh: React applies the updated module and re-renders the affected components.",
      },
      {
        type: "paragraph",
        content:
          "5. State Preservation: React attempts to preserve component state when the updated component is compatible with Fast Refresh.",
      },
      {
        type: "paragraph",
        content: "Example:",
      },
      {
        type: "code",
        language: "javascript",
        content: `const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>

      <Button
        title="Increment"
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
};`,
      },
      {
        type: "paragraph",
        content:
          "Suppose the counter value is 5 and you modify the Text component's styling or update its displayed label. Fast Refresh applies the changes and generally preserves the counter value instead of resetting the entire application.",
      },
      {
        type: "heading",
        content: "Fast Refresh vs Reload:",
      },
      {
        type: "paragraph",
        content:
          "Fast Refresh updates modified modules and attempts to preserve component state. A full reload re-executes the application entry point and generally resets the in-memory component state.",
      },
      {
        type: "heading",
        content: "Important Points:",
      },
      {
        type: "paragraph",
        content:
          "1. Fast Refresh works during development, not as a production feature.",
      },
      {
        type: "paragraph",
        content:
          "2. Component state is preserved when React can safely apply the update.",
      },
      {
        type: "paragraph",
        content:
          "3. Some changes, such as modifying module initialization or incompatible exports, may require a full reload.",
      },
      {
        type: "paragraph",
        content:
          "4. Syntax errors and runtime errors are displayed during development and can be corrected without manually restarting the application in many cases.",
      },
      {
        type: "paragraph",
        content:
          "5. Fast Refresh does not replace a native rebuild. Changes to native Android or iOS code, native dependencies, or native configuration may require rebuilding the application.",
      },
      {
        type: "paragraph",
        content:
          "In short, Fast Refresh works through Metro's module update mechanism and React's component refresh capabilities. It updates JavaScript changes quickly and preserves component state whenever possible, making React Native development faster and more efficient.",
      },
    ],
    topic: "React Native fundamentals",
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
    id: "codegen-turbomodules-hermes",
    question:
      "When do we have to enable Codegen, TurboModules, and Hermes Engine in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Codegen, TurboModules, and Hermes are important technologies associated with React Native's New Architecture and JavaScript execution. They serve different purposes: Codegen generates native interfaces, TurboModules connect JavaScript with native functionality, and Hermes executes JavaScript code.",
      },
      {
        type: "heading",
        content: "1. Codegen (Code Generation)",
      },
      {
        type: "paragraph",
        content:
          "Codegen is a tool that automatically generates native code from TypeScript or Flow specifications. It reduces manual native interface implementation and provides type-safe communication between JavaScript and native Android/iOS code.",
      },
      {
        type: "paragraph",
        content: "When do we need Codegen?",
      },
      {
        type: "list",
        content: [
          "When developing custom native modules using TurboModules.",
          "When developing custom native UI components using Fabric.",
          "When integrating libraries that support the New Architecture.",
          "When defining type-safe communication between JavaScript and native functionality.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Example: If we are developing a custom Bluetooth module, we define a TypeScript specification containing methods such as connect(), disconnect(), and getDeviceInfo(). Codegen generates the required native interfaces and glue code. We still need to implement the actual Bluetooth functionality in Kotlin/Java or Swift/Objective-C.",
      },
      {
        type: "heading",
        content: "2. TurboModules",
      },
      {
        type: "paragraph",
        content:
          "TurboModules are part of React Native's New Architecture. They provide a modern mechanism for connecting JavaScript with native Android and iOS functionality. They support lazy loading, typed interfaces, and more efficient communication between JavaScript and native code.",
      },
      {
        type: "paragraph",
        content: "When do we need TurboModules?",
      },
      {
        type: "list",
        content: [
          "When integrating Bluetooth and BLE functionality.",
          "When accessing native Wi-Fi and device APIs.",
          "When implementing background services.",
          "When developing custom Android or iOS functionality.",
          "When building native integrations that require efficient JavaScript-to-native communication.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Example: In a smart bike application, JavaScript can communicate with native Android/iOS Bluetooth implementations through a TurboModule to receive real-time speed, temperature, and device information.",
      },
      {
        type: "heading",
        content: "3. Hermes JavaScript Engine",
      },
      {
        type: "paragraph",
        content:
          "Hermes is an open-source JavaScript engine optimized for React Native applications. It executes JavaScript code and can improve application startup time and memory usage.",
      },
      {
        type: "paragraph",
        content: "When should we use Hermes?",
      },
      {
        type: "list",
        content: [
          "For applications with complex JavaScript logic.",
          "When improving application startup time.",
          "When optimizing JavaScript memory consumption.",
          "When working with large React Native applications.",
          "For most production React Native applications where library compatibility has been verified.",
        ],
      },
      {
        type: "paragraph",
        content:
          "How Hermes works: Metro bundles JavaScript code, the Hermes compiler generates Hermes bytecode (HBC), and the Hermes engine executes that bytecode at runtime. This reduces the need for JavaScript compilation work during application startup.",
      },
      {
        type: "heading",
        content: "4. How to Enable Them in React Native",
      },
      {
        type: "paragraph",
        content:
          "For Android, New Architecture and Hermes can be configured in android/gradle.properties:",
      },
      {
        type: "code",
        language: "properties",
        content: `# Enable New Architecture
newArchEnabled=true

# Enable Hermes
hermesEnabled=true`,
      },
      {
        type: "paragraph",
        content:
          "Codegen is configured through codegenConfig in package.json when developing a custom native module or component. It is invoked as part of the native build process.",
      },
      {
        type: "code",
        language: "json",
        content: `{
  "codegenConfig": {
    "name": "NativeBluetoothSpec",
    "type": "modules",
    "jsSrcsDir": "specs",
    "android": {
      "javaPackageName": "com.example.bluetooth"
    }
  }
}`,
      },
      {
        type: "paragraph",
        content:
          "Note: Standard React Native projects use Hermes by default in modern versions, and the New Architecture is also enabled by default in current React Native releases. Always check the configuration and defaults for your specific React Native version.",
      },
      {
        type: "paragraph",
        content:
          "In short, Hermes is the JavaScript engine, TurboModules provide JavaScript-to-native integration, and Codegen generates the native interfaces required by the New Architecture. For new React Native applications, Hermes and the New Architecture are generally recommended, provided native dependencies are compatible.",
      },
    ],
    topic: "React Native New Architecture",
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
          "Phase 2: App Run time When a user launches the app, the rest of the work happens from the new architecture flow of the React Native app. Mainly two big components run when the app has been launched by any user on their device: Turbo Module component Fabric component All the other sub components of React Native\u2019s new architecture also come inside this \u201cPhase 2: App Run time\u201d. These are  Hermes engine JSI (JavaScript Interface) Native Module Yoga Fabric Renderer Remember once again: Codegen already ran in \u201cPhase 1: App Build time\u201d. At the end of the Article, we will see the full flow of how the New Architecture works. Also, we will see the relation between each component of new architecture. For now, let\u2019s understand each component of New Architecture closely ",
      },
      {
        type: "paragraph",
        content:
          "Codegen (Native Code Generator) Codegen specially do these 2 jobs in new architecture of React Native Static type checking Generate \u201cNative code\u201d Let\u2019s understand these 2 more clearly below. Static type checking JavaScript is a dynamically typed (you don\u2019t need to define the type of a variable) language, and JSI is written in C++, which is a statically typed (you must have to define variable type) language. Consequently, there are some communication issues between the two (JS and C++). That\u2019s why the new architecture includes a static type checker called CodeGen. It solves the type related communication issue between JavaScript & C++. Remember that Codegen makes ready Native Code for JSI. Codegen doesn't use JSI. Generate \u201cNative code\u201d Codegen is responsible for generating Native Code for 2 big components of New Architecture. These are: The Turbo Module component and The Fabric component Both of these 2 big components of New Architecture need Native Code that should be generated by Codegen. Let\u2019s understand how Codegen generate Native Code  You write \u201ctyped JavaScript code\u201d to define the Native components or Native modules that you want to use in your app. Codegen creates \u201cnative code\u201d for each platform as output from your written \u201ctyped JavaScript code\u201d. These generated \u201cnative code\u201d can communicate with \u201ctyped JavaScript code\u201d directly, without using the bridge. As a result Codegen makes the communication between JavaScript and native code faster and more reliable, since it avoids using the bridge. CodeGen generates native code at build time instead of run time. By using Codegen, you don\u2019t have to write the \u201cnative code\u201d yourself. You just have to write the \u201ctyped JavaScript code\u201d that defines the interface of your component or module. Codegen will do the rest for you. The advantage of using Codegen is that it reduces the amount of work required for creating and maintaining native modules and components.",
      },
      {
        type: "paragraph",
        content: "JSI (JavaScript Interface)",
      },
      {
        type: "paragraph",
        content:
          "JavaScript Interface (JSI) is the deepest part of the New Architecture of React Native and it is being used by all of these components of New Architecture Hermes Engine (A JS engine that runs JS code in devices) Turbo Module (It Implements Native Module by using JSI & Native Code) Fabric (Native UI renderer/ New render engine) We will see about these in next sections. But for now let\u2019s understand JSI first clearly. Then we will move to other parts of the New Architecture. JSI (JavaScript Interface) was written in C++. It replaced the bridge from the OLD architecture and provided a direct, native interface to JavaScript objects and functions. This idea unlocks several benefits  Concurrency: JavaScript can invoke functions that are executed on different threads. Synchronous execution: the capability to execute synchronously those functions that should not have been asynchronous in the first place. Lower overhead: The New Architecture does not need to serialize or deserialize data anymore, which eliminates the need for serialization taxes. Code sharing: The introduction of C++ has enabled the development of platform-independent code, which can be shared easily between platforms. Type safety: To ensure that JavaScript can properly invoke methods on C++ objects, a layer of code has been added to the language. This code is generated starting from some JavaScript specifications that must be typed through Flow or TypeScript. Lightweight: JSI is a lightweight general-purpose JavaScript interface, written in C++, that can be used by the JavaScript engine to directly invoke methods in the native realm. Decouple the interface from the JS Engine: The OLD architecture uses the JSC (JavaScriptCore) Engine. The Bridge was only compatible with this particular JSC engine, however the new architecture will decouple the interface from the Engine, enabling the use of other JavaScript Engines like Chakra, v8 and Hermes, etc.",
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
          "Turbo Modules Turbo Modules is just a Native Module system which replaced the OLD Native Module system. The OLD Native Module system is also known as Bridge-based native module system or Legacy native module system. The OLD native module system used the technique of JSON data serialization which was slow in performance. The New Native module system is also known as \u201cTurbo Module\u201d which uses JSI technology instead of JSON data serialization. JSI (JavaScript Interface) was written in C++. Turbo Module is a new way of implementing \u201cNative modules\u201d in React Native. It implements Native Module by using JSI & \u201cNative Code\u201d that was generated by Codegen. In New Architecture, Turbo Module introduced Lazy Loading for Native Modules (e.g. Bluetooth, Geo Location and File Storage) to load when a user launches an app. In OLD architecture all Native Modules used in the app must be initialized in the start-up, even if the user does not require one of these modules. Turbo Modules allow your JavaScript code to hold references of these Native modules. As a result a particular Native Module will be loaded only when the Module is required. This improved app start-up time. For the above reasons, Turbo Modules are called a new version of Native Modules in New Architecture. As in the new architecture, JavaScript uses JSI to communicate with Native Modules, so it will help you by reducing the amount of work required for porting your app to multiple platforms. This is because JSI was written in C++. C++ is a language that can run on multiple platforms, such as Android, iOS, Windows, or macOS. It is also a language that can interact with other native languages, such as Java or Objective-C, through bindings. This means that you can write your \u201cNative module\u201d logic in C++, and then use bindings to expose it to the other native languages. This way, you can share the same implementation across different platforms, and only write the bindings for each platform.",
      },
      {
        type: "paragraph",
        content:
          "Fabric (New Rendering Engine) Fabric is the UIManager that will be responsible for rendering the UI in devices. The difference now is that instead of communicating with JavaScript through a bridge, Fabric exposes its functions via JavaScript so the JS side and Native side (vice-versa) can communicate directly through ref functions. passing data between sides will be performant. Fabric uses JSI to communicate with Hermes and native code, without using the bridge. Fabric is a new rendering system for React Native, seeking to improve the interoperability of the framework with host platforms (the platform of Native Side. Ex: Android or iOS), Improving communication between JavaScript and the native threads. Improved interoperability between React Native and host views A host view is a tree representation of the UI elements in the host platform (the device from which the app was launched by the user. Ex: Android or iOS). The C++ core shared by different host platforms (Ex: Android, iOS, MacOS, TvOS, etc) improves interoperability between React Native and the host and enables React Native to render surfaces synchronously. In the OLD (legacy) architecture, the layout was asynchronous, causing a layout \u201cjump\u201d issue when embedding a React Native rendered view. Improvements in data fetching Data fetching in applications has become easier with the integration of React Suspense. Other new features available in React 18 are now enabled in the Fabric renderer, such as Concurrent Features, which keeps the UI of our applications responsive during expensive state transitions.",
      },
      {
        type: "paragraph",
        content:
          "The Fabric render pipeline (three phases) The Fabric Renderer is React Native\u2019s new rendering system. It is a conceptual evolution of the legacy (old) render system and is designed to unify more render logic in C++, improve interoperability with host platforms (Ex: Android or iOS), and unlock new capabilities for React Native. The Fabric render pipeline occurs in three phases: The Render phase The Commit phase The Mount phaseI have created a Flow chart of how the Fabric Render Pipeline works. Look a bit into it . Don\u2019t be too much into it now as we are going to discuss in details about these 3 phase below Flow of New Architecture The app starts by loading the bytecode file that contains the JavaScript code of the app. The bytecode file is a simpler and more efficient form of code that can be executed directly by Hermes, a JavaScript engine that runs on Android devices & iOS devices. Hermes improves the app size, the memory usage, and the start-up time of the app.",
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
          "1. Rendering Optimizations \ React.memo() / PureComponent Prevents unnecessary re-renders of functional or class components when props haven't changed. \ useCallback() and useMemo() Memoizes functions and values to avoid re-creation on every render. \ FlatList / SectionList over ScrollView FlatList renders lazily (only visible items), unlike ScrollView which renders everything at once. \ Key Extractor in FlatList Providing a stable keyExtractor improves list performance and prevents unnecessary re-renders.",
      },
      {
        type: "paragraph",
        content:
          "2. State Management \ Global State via Context API or Zustand/Recoil/Jotai Avoids prop drilling and keeps components decoupled. \ Redux with Reselect Use selectors and memoization to prevent re-renders of connected components.",
      },
      {
        type: "paragraph",
        content:
          "3. UI & Animation Optimization \ Use Native Driver in Animations useNativeDriver: true for smoother animations by offloading to native thread.",
      },
      {
        type: "paragraph",
        content:
          "\ react-native-reanimated or react-native-gesture-handler These libraries offer performant gesture handling and animations compared to Animated.",
      },
      {
        type: "paragraph",
        content:
          "4. Bundle & Memory Optimization \ Code Splitting & Lazy Loading Dynamically load screens or modules with libraries like react-native-dynamic-bundle or react-native-screens.",
      },
      {
        type: "paragraph",
        content:
          "Avoid Large Inline Images Use Image with resizeMode and react-native-fast-image for caching and performance.",
      },
      {
        type: "paragraph",
        content:
          "Reduce JS Bundle Size Remove unused libraries, optimize assets, enable Proguard (Android) and Bitcode (iOS).",
      },
      {
        type: "paragraph",
        content:
          "5. Network & Storage Optimization \ Axios/Fastify + Caching Use caching layers (e.g. react-query, swr, AsyncStorage) for efficient data fetching.",
      },
      {
        type: "paragraph",
        content:
          "Debouncing API calls Use debounce or throttle in search bars, autocomplete, etc.",
      },
      {
        type: "paragraph",
        content:
          "6. App Lifecycle & Threads \ Avoid Blocking the JS Thread No heavy computation on the main thread. Offload to native modules or use JSThread.",
      },
      {
        type: "paragraph",
        content:
          "Background Processing with react-native-background-fetch, react-native-threads Use separate threads for background tasks.",
      },
      {
        type: "paragraph",
        content:
          "Profiling & Debugging Tools \ Flipper with React DevTools Inspect component renders, memory usage, and network requests.",
      },
      {
        type: "paragraph",
        content:
          "Hermes Engine (Android) Improves app startup and memory usage by using a lightweight JS engine.",
      },
      {
        type: "paragraph",
        content:
          "Performance Monitors Tools like why-did-you-render, React Profiler, and Perf Monitor help spot bottlenecks.",
      },
      {
        type: "paragraph",
        content:
          "Bonus: General Best Practices Avoid anonymous functions in render Minimize inline styles & rerenders Minimize use of unnecessary console.logs in production Use InteractionManager to defer heavy work until after animations Paginate or virtualize long lists",
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
          "\n**@react-navigation/native**: This is the core package of React Navigation. It provides the base navigation functionality, such as: NavigationContainer (the navigation context provider) Navigation state management Navigating between screens Back button handling (Android) Think of it as the brain of your navigation system. \n**react-native-screens**: This package improves navigation performance by using native navigation primitives (iOS UIViewController, Android Fragment) instead of just pure JS views. Benefits: Better memory management Smoother animations Faster screen rendering Think of it as an engine booster for your navigation system. \n**react-native-safe-area-context**: Helps in properly handling safe areas (like notches, status bars, home indicators) in devices such as iPhones or modern Android phones. Ensures UI doesn't get hidden behind notches or system bars. Used internally by React Navigation and other libraries for layout padding. Think of it as a seatbelt ensuring your UI stays safe in visible areas. \n**@react-navigation/native-stack**: Provides the native stack navigator (createNativeStackNavigator) built on top of react-native-screens. It gives you: Native-like transitions (push/pop animations) Better performance than JS-based stack Header customization Think of it as the visual interface or gear of your navigation experience.",
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
        content: "State Management & Data Flow",
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
        content: " Navigation & Deep Linking",
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
    id: "react-native-deep-linking",
    question: "How do you handle deep linking in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Deep linking is a technique that allows users to navigate directly to a specific screen or feature inside a mobile application using a URL. It helps connect external sources such as websites, emails, notifications, and other applications to specific screens in a React Native application.",
      },
      {
        type: "paragraph",
        content:
          "For example, when a user clicks a link like myapp://profile/123, the application opens directly on the profile screen of user 123 instead of opening the home screen.",
      },
      {
        type: "heading",
        content: "1. Types of Deep Linking",
      },
      {
        type: "list",
        content: [
          "Custom URL Schemes: Use application-specific URLs such as myapp://profile/123 to open a particular screen.",
          "Android App Links: Use verified HTTPS URLs to open the Android application directly when the domain is associated with the app.",
          "iOS Universal Links: Use verified HTTPS URLs to open the iOS application when the domain is associated with the app.",
        ],
      },
      {
        type: "heading",
        content: "2. How Deep Linking Works",
      },
      {
        type: "list",
        content: [
          "A user clicks a deep link from a website, email, SMS, or notification.",
          "The operating system checks whether an installed application can handle the URL.",
          "The application receives the URL through its linking configuration.",
          "React Native parses the URL and extracts the route and parameters.",
          "React Navigation navigates the user to the corresponding screen.",
        ],
      },
      {
        type: "heading",
        content: "3. React Native Implementation Using React Navigation",
      },
      {
        type: "paragraph",
        content:
          "React Native provides the Linking API to handle incoming URLs. React Navigation also provides built-in linking configuration to map URLs to application screens.",
      },
      {
        type: "code",
        language: "javascript",
        content: `import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['myapp://', 'https://example.com'],
  config: {
    screens: {
      Home: '',
      Profile: 'profile/:userId',
      Product: 'product/:productId',
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`,
      },
      {
        type: "paragraph",
        content:
          "Here, prefixes define the supported URL schemes and domains, while the config object maps incoming URL paths to navigation screens and extracts route parameters.",
      },
      {
        type: "heading",
        content: "4. Handling URLs Using React Native Linking API",
      },
      {
        type: "paragraph",
        content:
          "React Native Linking API provides two important methods: getInitialURL() handles links that opened the application from a closed state, and addEventListener() handles links received while the application is already running or in the background.",
      },
      {
        type: "code",
        language: "javascript",
        content: `import { Linking } from 'react-native';
import { useEffect } from 'react';

useEffect(() => {
  // Handle initial URL
  Linking.getInitialURL().then(url => {
    if (url) {
      console.log('Initial URL:', url);
    }
  });

  // Handle incoming URLs
  const subscription = Linking.addEventListener(
    'url',
    ({ url }) => {
      console.log('Received URL:', url);
    }
  );

  return () => subscription.remove();
}, []);`,
      },
      {
        type: "paragraph",
        content:
          "When using React Navigation's linking configuration, it generally handles initial URLs and incoming URL events automatically. Avoid implementing duplicate navigation handling for the same links.",
      },
      {
        type: "heading",
        content: "5. Android and iOS Configuration",
      },
      {
        type: "paragraph",
        content:
          "For Android, custom URL schemes are configured using intent filters in AndroidManifest.xml. HTTPS App Links additionally require domain verification through assetlinks.json.",
      },
      {
        type: "code",
        language: "xml",
        content: `<activity
    android:name=".MainActivity"
    android:exported="true">

    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <data android:scheme="myapp" />
    </intent-filter>

</activity>`,
      },
      {
        type: "paragraph",
        content:
          "For iOS, custom URL schemes are configured through URL Types in the application's Info.plist. Universal Links require Associated Domains configuration and an apple-app-site-association file hosted on the associated domain.",
      },
      {
        type: "heading",
        content: "6. Important Considerations",
      },
      {
        type: "list",
        content: [
          "Handle both initial links and incoming links while the app is running.",
          "Validate URL parameters before navigating to a screen.",
          "Handle invalid URLs and unknown routes gracefully.",
          "Support authentication flows when a deep link requires a logged-in user.",
          "Handle cases where the application is not installed.",
          "Test links when the application is closed, in the background, and in the foreground.",
          "Use HTTPS Universal Links and Android App Links for verified web-to-app linking.",
          "Never trust sensitive information or authorization tokens passed directly through URLs.",
        ],
      },
      {
        type: "paragraph",
        content:
          "In short, I handle deep linking using React Native Linking API and React Navigation's linking configuration. I configure custom URL schemes or verified HTTPS links on Android and iOS, map URLs to navigation routes, extract parameters, and handle both initial and runtime incoming links.",
      },
    ],
    topic: "Navigation and deep linking",
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
        content: "Native Modules & Platform Knowledge",
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
          "Animations Difference between Animated API and Reanimated. In React Native, the Animated API and Reanimated both handle animations, but they differ significantly in performance, architecture, and flexibility. The built-in Animated API runs most of its work on the JavaScript thread. When you start an animation, JS calculates each frame, updates values, and sends them to the UI thread. For simple animations like fading, translating, or scaling small elements, this works fine. However, for complex or continuous animations, especially when the JS thread is busy (network calls, heavy renders, Redux updates), it can cause frame drops and jank because the UI thread has to wait for JS to finish calculations. Animated supports basic interpolation, timing, spring, and sequence animations, but it\u2019s limited when you want gesture-driven, native-smooth interactions. Reanimated, on the other hand, was built to run animations directly on the native thread. Its architecture allows you to define animation logic in JS, but the actual updates are executed off the JS thread, meaning the animations remain smooth even if the JS thread is blocked. Reanimated also introduces a declarative API, \u201cworklets\u201d (JS code that runs on the native thread), and hooks like useSharedValue and useAnimatedStyle, which make it easier to build gesture-driven, high-performance animations that can respond in real-time to gestures or state changes. For example, with a simple pan gesture: Using Animated, you have to listen to gesture events in JS, update the animated value, and render. If JS is busy, the UI lags.",
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
    id: "react-native-deep-linking-types",
    question: "What are the different types of deep linking in React Native?",
    answer: [
      {
        type: "paragraph",
        content:
          "Deep linking allows users to navigate directly to a specific screen or feature inside a mobile application using a URL. React Native supports different approaches to deep linking depending on the platform and application requirements.",
      },
      {
        type: "heading",
        content: "1. Custom URL Schemes",
      },
      {
        type: "paragraph",
        content:
          "Custom URL schemes use application-specific URL protocols to open a mobile application and navigate to a particular screen.",
      },
      {
        type: "paragraph",
        content: "Example: myapp://profile/123",
      },
      {
        type: "paragraph",
        content:
          "When a user clicks this URL, the operating system identifies the application registered with the myapp scheme and opens it. React Native can then extract the route and parameters using the Linking API.",
      },
      {
        type: "paragraph",
        content: "Configuration:",
      },
      {
        type: "code",
        language: "xml",
        content: `<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="myapp" />
</intent-filter>`,
      },
      {
        type: "paragraph",
        content:
          "Use cases: Opening specific screens from notifications, emails, or other applications. Limitation: Custom schemes are not domain-verified and can potentially be claimed by another application.",
      },
      {
        type: "heading",
        content: "2. Android App Links",
      },
      {
        type: "paragraph",
        content:
          "Android App Links are verified HTTPS URLs that allow users to open an Android application directly from a website link when the domain is associated with the application.",
      },
      {
        type: "paragraph",
        content: "Example: https://example.com/profile/123",
      },
      {
        type: "paragraph",
        content:
          "Android verifies the association between the website domain and the application using a digital asset links file named assetlinks.json hosted on the website.",
      },
      {
        type: "paragraph",
        content: "Configuration:",
      },
      {
        type: "code",
        language: "xml",
        content: `<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <data
        android:scheme="https"
        android:host="example.com"
    />
</intent-filter>`,
      },
      {
        type: "paragraph",
        content:
          "Use cases: Opening product pages, user profiles, payment pages, and other application screens through verified website links. If the application is not installed, the link can open the website in a browser.",
      },
      {
        type: "heading",
        content: "3. iOS Universal Links",
      },
      {
        type: "paragraph",
        content:
          "Universal Links are Apple's HTTPS-based deep linking mechanism. They allow users to open specific screens in an iOS application through verified website URLs.",
      },
      {
        type: "paragraph",
        content: "Example: https://example.com/product/456",
      },
      {
        type: "paragraph",
        content:
          "iOS verifies the relationship between the application and the website using Associated Domains and an apple-app-site-association file hosted on the website.",
      },
      {
        type: "paragraph",
        content: "Configuration:",
      },
      {
        type: "code",
        language: "plaintext",
        content: `// Entitlements
applinks:example.com`,
      },
      {
        type: "paragraph",
        content:
          "Use cases: Opening product details, shared content, user profiles, and specific application features directly from Safari, Messages, emails, or other applications. If the application is not installed, the URL generally opens the website.",
      },
      {
        type: "heading",
        content: "4. Comparison Between Different Types",
      },
      {
        type: "paragraph",
        content:
          "| Feature | Custom URL Scheme | Android App Links | iOS Universal Links |\n|---|---|---|---|\n| Platform | Android and iOS | Android | iOS |\n| URL format | myapp:// | HTTPS | HTTPS |\n| Domain verification | No | Yes | Yes |\n| App installed | Opens app | Opens app | Opens app |\n| App not installed | No automatic website fallback | Opens website | Opens website |\n| Security | Less secure | Domain verified | Domain verified |",
      },
      {
        type: "heading",
        content: "5. Handling Deep Links in React Native",
      },
      {
        type: "paragraph",
        content:
          "React Native provides the Linking API to receive incoming URLs. React Navigation provides a linking configuration to map URLs to specific screens.",
      },
      {
        type: "code",
        language: "JavaScript",
        content: `const linking = {
  prefixes: [
    'myapp://',
    'https://example.com',
  ],
  config: {
    screens: {
      Home: '',
      Profile: 'profile/:userId',
      Product: 'product/:productId',
    },
  },
};`,
      },
      {
        type: "paragraph",
        content:
          "In this configuration, prefixes define the supported URL formats, while config maps URL paths to navigation screens and extracts route parameters.",
      },
      {
        type: "paragraph",
        content:
          "In short, Custom URL Schemes use application-specific protocols, Android App Links provide verified HTTPS deep linking for Android, and iOS Universal Links provide verified HTTPS deep linking for iOS. For production applications, verified HTTPS links are generally preferred.",
      },
    ],
    topic: "Navigation and deep linking",
  },

  {
    id: "github-actions-build-automation",
    question: "How do you automate builds using GitHub Actions?",
    answer: [
      {
        type: "paragraph",
        content:
          "GitHub Actions is a CI/CD automation platform that allows us to automatically build, test, and deploy applications whenever code is pushed to a repository or a pull request is created. In React Native, I use GitHub Actions to automate Android and iOS builds, run tests, and generate APK, AAB, or IPA artifacts.",
      },
      {
        type: "heading",
        content: "1. Create a GitHub Actions workflow",
      },
      {
        type: "paragraph",
        content:
          "Create a .github/workflows directory in the project root and add a YAML workflow file, for example, build.yml.",
      },
      {
        type: "code",
        language: "text",
        content: ".github/\n  workflows/\n    build.yml",
      },
      {
        type: "heading",
        content: "2. Configure workflow triggers",
      },
      {
        type: "paragraph",
        content:
          "Define when the workflow should execute. Common triggers include pushing code to a branch, creating a pull request, or manually triggering a workflow.",
      },
      {
        type: "code",
        language: "yaml",
        content:
          "name: React Native CI\n\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n  workflow_dispatch:",
      },
      {
        type: "heading",
        content: "3. Configure the build job",
      },
      {
        type: "paragraph",
        content:
          "GitHub Actions provides hosted runners such as Ubuntu, macOS, and Windows. For Android builds, I generally use Ubuntu. For iOS builds, I use macOS because Xcode is required.",
      },
      {
        type: "code",
        language: "yaml",
        content:
          "jobs:\n  android-build:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: npm\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Setup Java\n        uses: actions/setup-java@v4\n        with:\n          distribution: temurin\n          java-version: 17\n\n      - name: Build Android APK\n        run: cd android && chmod +x gradlew && ./gradlew assembleRelease\n\n      - name: Upload APK\n        uses: actions/upload-artifact@v4\n        with:\n          name: android-release-apk\n          path: android/app/build/outputs/apk/release/*.apk",
      },
      {
        type: "heading",
        content: "4. Run tests before building",
      },
      {
        type: "paragraph",
        content:
          "I add linting and unit tests before the build step. If any test fails, the workflow stops and the build is marked as failed.",
      },
      {
        type: "code",
        language: "yaml",
        content:
          "- name: Run ESLint\n  run: npm run lint\n\n- name: Run unit tests\n  run: npm test -- --runInBand",
      },
      {
        type: "heading",
        content: "5. Manage environment variables and secrets",
      },
      {
        type: "paragraph",
        content:
          "Sensitive information such as signing passwords, API keys, and keystore credentials should be stored in GitHub repository or environment secrets. I access them through the secrets context instead of hardcoding them in the workflow.",
      },
      {
        type: "code",
        language: "yaml",
        content:
          "- name: Build signed Android APK\n  env:\n    KEYSTORE_PASSWORD: ${{ secrets.KEYSTORE_PASSWORD }}\n    KEY_PASSWORD: ${{ secrets.KEY_PASSWORD }}\n  run: cd android && ./gradlew assembleRelease",
      },
      {
        type: "heading",
        content: "6. Complete CI/CD pipeline",
      },
      {
        type: "list",
        content: [
          "Developer pushes code to GitHub.",
          "GitHub Actions detects the push or pull request.",
          "The workflow checks out the source code.",
          "Node.js and Java environments are configured.",
          "Dependencies are installed.",
          "ESLint and unit tests are executed.",
          "The Android release build is generated.",
          "The APK or AAB is uploaded as a workflow artifact.",
          "The team can download the generated build from the workflow run.",
        ],
      },
      {
        type: "heading",
        content: "7. CI vs CD",
      },
      {
        type: "paragraph",
        content:
          "| CI (Continuous Integration) | CD (Continuous Delivery/Deployment) |\n|---|---|\n| Automatically checks code changes. | Automates release and deployment steps. |\n| Runs linting and unit tests. | Publishes builds to distribution platforms. |\n| Builds APK/AAB artifacts. | Can upload builds to Play Console or testing services. |\n| Detects issues early. | Reduces manual release effort. |",
      },
      {
        type: "heading",
        content: "8. Interview-ready answer",
      },
      {
        type: "paragraph",
        content:
          "In my React Native projects, I use GitHub Actions to automate the CI/CD pipeline. Whenever a developer pushes code or creates a pull request, the workflow gets triggered. It checks out the code, installs dependencies, runs linting and unit tests, and generates the Android release build using Gradle. I also configure GitHub Secrets for sensitive credentials and upload the generated APK or AAB as an artifact. This reduces manual effort, catches issues early, and ensures consistent builds.",
      },
    ],
    topic: "React Native CI/CD",
  },
  {
    id: "how-do-you-handle-environment-based-builds",
    question: "How do you handle environment-based builds?",
    answer: [
      {
        type: "paragraph",
        content:
          "Environment-based builds allow us to maintain different configurations for Development, Staging, and Production without changing the application source code. Each environment can have its own API URLs, API keys, Firebase configuration, app name, bundle ID, and other environment-specific settings.",
      },
      {
        type: "heading",
        content: "1. Different Environments",
      },
      {
        type: "list",
        content: [
          "Development: Used by developers for local development, debugging, testing, and integration with development APIs.",
          "Staging / QA: Used by QA teams and testers to validate application functionality against staging or pre-production APIs.",
          "Production: The live application released to end users through Google Play Store or Apple App Store. It uses production APIs and production configurations.",
        ],
      },
      {
        type: "heading",
        content: "2. Environment Configuration in React Native",
      },
      {
        type: "paragraph",
        content:
          "In React Native, we can manage environment-specific variables using libraries such as react-native-config or build-time configuration through native Android and iOS build settings.",
      },
      {
        type: "code",
        language: "bash",
        content: "npm install react-native-config",
      },
      {
        type: "paragraph",
        content: "Create separate environment files in the project root:",
      },
      {
        type: "code",
        language: "text",
        content: ".env.development\n.env.staging\n.env.production",
      },
      {
        type: "paragraph",
        content: "Example configuration:",
      },
      {
        type: "code",
        language: "bash",
        content:
          "# .env.development\nBASE_URL=https://dev-api.example.com\nENVIRONMENT=development\n\n# .env.staging\nBASE_URL=https://staging-api.example.com\nENVIRONMENT=staging\n\n# .env.production\nBASE_URL=https://api.example.com\nENVIRONMENT=production",
      },
      {
        type: "heading",
        content: "3. Access Environment Variables in Application",
      },
      {
        type: "paragraph",
        content:
          "We can import Config from react-native-config and access the environment-specific values wherever required.",
      },
      {
        type: "code",
        language: "javascript",
        content:
          "import Config from 'react-native-config';\n\nconst BASE_URL = Config.BASE_URL;\n\nconst getUsers = async () => {\n  const response = await fetch(`${BASE_URL}/users`);\n  return response.json();\n};",
      },
      {
        type: "heading",
        content: "4. Environment-Based Android Builds",
      },
      {
        type: "paragraph",
        content:
          "For Android, we use productFlavors in android/app/build.gradle to generate different APK or AAB files for each environment.",
      },
      {
        type: "code",
        language: "groovy",
        content:
          'android {\n    flavorDimensions "environment"\n\n    productFlavors {\n        development {\n            dimension "environment"\n            applicationIdSuffix ".dev"\n            versionNameSuffix "-dev"\n        }\n\n        staging {\n            dimension "environment"\n            applicationIdSuffix ".staging"\n            versionNameSuffix "-staging"\n        }\n\n        production {\n            dimension "environment"\n        }\n    }\n}',
      },
      {
        type: "paragraph",
        content:
          "We can generate environment-specific builds using Gradle commands:",
      },
      {
        type: "code",
        language: "bash",
        content:
          "# Development\ncd android && ./gradlew assembleDevelopmentDebug\n\n# Staging\n./gradlew assembleStagingRelease\n\n# Production APK\n./gradlew assembleProductionRelease\n\n# Production AAB\n./gradlew bundleProductionRelease",
      },
      {
        type: "heading",
        content: "5. Environment-Based iOS Builds",
      },
      {
        type: "paragraph",
        content:
          "For iOS, we configure separate Build Configurations and Schemes in Xcode, such as Development, Staging, and Production. Each scheme can have its own bundle identifier, environment variables, signing settings, and Firebase configuration.",
      },
      {
        type: "code",
        language: "bash",
        content:
          "# Development\nnpx react-native run-ios --scheme MyApp-Development\n\n# Staging\nnpx react-native run-ios --scheme MyApp-Staging\n\n# Production\nnpx react-native run-ios --scheme MyApp-Production",
      },
      {
        type: "heading",
        content: "6. Automating Environment-Based Builds Using CI/CD",
      },
      {
        type: "paragraph",
        content:
          "We can configure GitHub Actions to automatically generate environment-specific builds based on the branch, Git tag, or workflow input.",
      },
      {
        type: "list",
        content: [
          "Development branch → Development build.",
          "Staging branch → Staging build.",
          "Main branch or release tag → Production build.",
        ],
      },
      {
        type: "paragraph",
        content:
          "We also store sensitive configuration values in GitHub Actions Secrets or environment-level secrets instead of committing them directly to the repository.",
      },
      {
        type: "heading",
        content: "7. Best Practices",
      },
      {
        type: "list",
        content: [
          "Never hardcode API URLs or environment-specific values in application code.",
          "Keep separate API configurations for Development, Staging, and Production.",
          "Use different application IDs and app names when installing multiple environment builds on the same device.",
          "Keep API keys and sensitive configuration out of Git repositories.",
          "Use separate Firebase projects or configurations for different environments where appropriate.",
          "Validate environment variables before generating release builds.",
          "Test the production build separately before publishing it to the app stores.",
          "Ensure debugging tools and development logs are disabled in production.",
        ],
      },
      {
        type: "heading",
        content: "8. Interview Answer",
      },
      {
        type: "callout",
        title: "How I handle it in real projects",
        content:
          "In my React Native projects, I manage environment-based builds using separate configurations for Development, Staging, and Production. I use react-native-config to manage environment variables such as API base URLs and other configuration values. For Android, I configure productFlavors in Gradle, and for iOS, I maintain separate Xcode schemes and build configurations. I also integrate these configurations with GitHub Actions to automate environment-specific builds. This approach helps us maintain consistent configurations, avoid manual changes during releases, and reduce the risk of deploying a build with incorrect API endpoints.",
      },
    ],
    topic: "Build & release",
  },
  {
    id: "how-do-you-manage-app-versioning",
    question: "How do you manage app versioning?",
    answer: [
      {
        type: "paragraph",
        content:
          "App versioning is the process of maintaining and tracking application releases. In React Native, we manage versioning separately for Android and iOS while keeping the application version consistent across both platforms. It helps identify releases, track updates, manage compatibility, and publish new versions to Google Play Store and Apple App Store.",
      },
      {
        type: "heading",
        content: "1. Understanding App Versioning",
      },
      {
        type: "paragraph",
        content:
          "We generally follow Semantic Versioning (MAJOR.MINOR.PATCH), where each number represents a different type of application update.",
      },
      {
        type: "code",
        language: "text",
        content:
          "1.2.3\n\n1 → MAJOR version (Breaking changes)\n2 → MINOR version (New features)\n3 → PATCH version (Bug fixes)",
      },
      {
        type: "unordered-list",
        items: [
          {
            heading: "MAJOR version",
            content:
              "Incremented when introducing major changes or breaking changes that may affect existing functionality. Example: 1.0.0 → 2.0.0.",
          },
          {
            heading: "MINOR version",
            content:
              "Incremented when adding new features or functionality without breaking existing functionality. Example: 1.2.0 → 1.3.0.",
          },
          {
            heading: "PATCH version",
            content:
              "Incremented when fixing bugs, security issues, or making small improvements. Example: 1.2.3 → 1.2.4.",
          },
        ],
      },
      {
        type: "heading",
        content: "2. Android App Versioning",
      },
      {
        type: "paragraph",
        content:
          "In Android, we manage application versions inside android/app/build.gradle using versionCode and versionName.",
      },
      {
        type: "code",
        language: "groovy",
        content:
          'android {\n    defaultConfig {\n        applicationId "com.myapp"\n        versionCode 12\n        versionName "1.2.3"\n    }\n}',
      },
      {
        type: "unordered-list",
        items: [
          {
            heading: "versionCode",
            content:
              "An internal integer used by Google Play Store to identify and compare releases. It must increase with every new Play Store release.",
          },
          {
            heading: "versionName",
            content:
              "A user-visible version string displayed in application settings or app information. Example: 1.2.3.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "For example, when releasing a bug-fix update, we increment versionCode from 12 to 13 and versionName from 1.2.3 to 1.2.4.",
      },
      {
        type: "heading",
        content: "3. iOS App Versioning",
      },
      {
        type: "paragraph",
        content:
          "In iOS, we manage application versioning through Xcode project settings or the Info.plist build settings.",
      },
      {
        type: "code",
        language: "xml",
        content:
          "<key>CFBundleShortVersionString</key>\n<string>1.2.3</string>\n\n<key>CFBundleVersion</key>\n<string>12</string>",
      },
      {
        type: "unordered-list",
        items: [
          {
            heading: "CFBundleShortVersionString",
            content:
              "Represents the user-visible application version, such as 1.2.3.",
          },
          {
            heading: "CFBundleVersion",
            content:
              "Represents the build number used to identify individual builds. It should be incremented for each new App Store Connect build.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "For example, we can release version 1.2.3 with build number 12 and upload another build with the same application version but build number 13.",
      },
      {
        type: "heading",
        content: "4. Versioning in React Native",
      },
      {
        type: "paragraph",
        content:
          "In React Native, we maintain the application version in package.json and synchronize it with native Android and iOS configurations. However, package.json version does not automatically update the native application versions unless we configure a versioning script or automation.",
      },
      {
        type: "code",
        language: "json",
        content: '{\n  "name": "myapp",\n  "version": "1.2.3"\n}',
      },
      {
        type: "paragraph",
        content:
          "We can maintain a consistent version across platforms and automate version updates using CI/CD pipelines.",
      },
      {
        type: "heading",
        content: "5. Managing Versioning Through CI/CD",
      },
      {
        type: "paragraph",
        content:
          "We can automate version increments and build numbering through GitHub Actions. Whenever a release is triggered, the pipeline can update version information, generate Android APK/AAB and iOS IPA builds, and publish the artifacts.",
      },
      {
        type: "code",
        language: "yaml",
        content:
          "name: React Native Release\n\non:\n  push:\n    tags:\n      - 'v*'\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Build Android Release\n        run: |\n          cd android\n          ./gradlew bundleRelease",
      },
      {
        type: "paragraph",
        content:
          "We can also use Git tags to identify releases and maintain a clear release history.",
      },
      {
        type: "code",
        language: "bash",
        content: "git tag v1.2.3\ngit push origin v1.2.3",
      },
      {
        type: "heading",
        content: "6. Example of Version Management",
      },
      {
        type: "paragraph",
        content:
          "Consider an application that starts with version 1.0.0. As we introduce new features and bug fixes, the version and build numbers are updated.",
      },
      {
        type: "table",
        content: [
          [
            "Release",
            "Version",
            "Android versionCode",
            "iOS build number",
            "Changes",
          ],
          ["Initial release", "1.0.0", "1", "1", "Initial application"],
          ["Feature update", "1.1.0", "2", "2", "New features"],
          ["Bug fixes", "1.1.1", "3", "3", "Bug fixes"],
          ["Major update", "2.0.0", "4", "4", "Breaking changes"],
        ],
      },
      {
        type: "heading",
        content: "7. Best Practices",
      },
      {
        type: "list",
        content: [
          "Follow Semantic Versioning (MAJOR.MINOR.PATCH).",
          "Always increment Android versionCode for every Play Store release.",
          "Increment the iOS build number for every uploaded build.",
          "Keep Android and iOS application versions synchronized.",
          "Maintain release notes and changelogs for every release.",
          "Use Git tags to identify production releases.",
          "Automate version updates and build numbering through CI/CD.",
          "Test release builds before publishing them to app stores.",
          "Never reuse an already published Android versionCode or an iOS build number within the same app version.",
        ],
      },
      {
        type: "heading",
        content: "8. Interview Answer",
      },
      {
        type: "callout",
        title: "How I manage it in real projects",
        content:
          "In my React Native projects, I follow Semantic Versioning using MAJOR.MINOR.PATCH. For Android, I maintain versionCode and versionName in Gradle, where versionCode is an incremental integer used by Google Play Store and versionName is the user-visible application version. For iOS, I maintain CFBundleShortVersionString and CFBundleVersion, which represent the app version and build number respectively. I also maintain consistent versions across both platforms and use Git tags and CI/CD pipelines to automate release builds. This helps us track releases, identify bugs in specific versions, and maintain a reliable app release process.",
      },
    ],
    topic: "Build & release",
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
        type: "paragraph",
        content:
          "OTA (Over-The-Air) updates allow us to deliver JavaScript and asset updates to users without requiring them to download a new application version from Google Play Store or Apple App Store. In React Native, OTA updates are commonly implemented using services such as Microsoft CodePush (legacy) or Expo EAS Update. They help deliver bug fixes, UI changes, and JavaScript logic updates quickly.",
      },
      {
        type: "heading",
        content: "1. Understanding OTA Updates",
      },
      {
        type: "paragraph",
        content:
          "Normally, when we make changes to an application, we generate a new APK/AAB or IPA and publish it to the app stores. With OTA updates, we can push compatible JavaScript bundle and asset changes directly to users.",
      },
      {
        type: "list",
        content: [
          "JavaScript code changes can be delivered without publishing a new store release.",
          "Images, fonts, and other bundled assets can be updated.",
          "Bug fixes and minor UI improvements can be delivered quickly.",
          "Users receive updates when the application checks for and downloads a new compatible update.",
        ],
      },
      {
        type: "heading",
        content: "2. What Can and Cannot Be Updated Through OTA?",
      },
      {
        type: "table",
        content: [
          ["Update Type", "OTA Supported?", "Explanation"],
          ["JavaScript logic", "Yes", "Updated JS bundle can be downloaded."],
          [
            "React Native UI changes",
            "Yes",
            "Compatible component and styling changes can be delivered.",
          ],
          ["Images and assets", "Yes", "Bundled assets can be updated."],
          [
            "Native Android code",
            "No",
            "Requires a new native application build.",
          ],
          ["Native iOS code", "No", "Requires a new native application build."],
          [
            "Native modules",
            "No",
            "New or modified native functionality requires a store release.",
          ],
          [
            "Android permissions",
            "No",
            "Changes to native manifest configuration require a new build.",
          ],
          [
            "SDK or React Native version",
            "No",
            "Requires a new application binary.",
          ],
        ],
      },
      {
        type: "callout",
        title: "Important interview point",
        tone: "caution",
        content:
          "OTA updates cannot replace native application releases. If we add a new native module, modify Android or iOS permissions, or change native dependencies, we must generate and publish a new application build.",
      },
      {
        type: "heading",
        content: "3. OTA Updates Using Expo EAS Update",
      },
      {
        type: "paragraph",
        content:
          "For Expo-based React Native applications, we can use EAS Update to deliver over-the-air JavaScript and asset updates. It supports update channels and runtime version compatibility to ensure users receive updates intended for their application binary.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Step 1: Install EAS CLI",
            content:
              "Install the Expo Application Services CLI and configure the project.",
            code: "npm install -g eas-cli\n\neas login\n\neas build:configure",
            language: "bash",
          },
          {
            heading: "Step 2: Configure Updates",
            content:
              "Configure the project ID, update URL, runtime version, and update settings in app.json.",
            code: '{\n  "expo": {\n    "name": "MyApp",\n    "slug": "myapp",\n    "runtimeVersion": {\n      "policy": "appVersion"\n    },\n    "updates": {\n      "url": "https://u.expo.dev/YOUR_PROJECT_ID"\n    },\n    "extra": {\n      "eas": {\n        "projectId": "YOUR_PROJECT_ID"\n      }\n    }\n  }\n}',
            language: "json",
          },
          {
            heading: "Step 3: Configure Update Channels",
            content:
              "We can maintain separate channels for development, staging, and production to control which users receive each update.",
            code: "eas channel:create development\neas channel:create staging\neas channel:create production",
            language: "bash",
          },
          {
            heading: "Step 4: Publish an OTA Update",
            content:
              "After making JavaScript or asset changes, publish an update to the appropriate channel.",
            code: '# Development\neas update --channel development --message "Development update"\n\n# Staging\neas update --channel staging --message "Staging release"\n\n# Production\neas update --channel production --message "Production bug fix"',
            language: "bash",
          },
          {
            heading: "Step 5: Application Downloads the Update",
            content:
              "The application checks for compatible updates, downloads the update bundle, and applies it according to the configured update strategy. Depending on the configuration, the update can be applied on the next application launch or after a reload.",
          },
        ],
      },
      {
        type: "heading",
        content: "4. Checking and Applying Updates Programmatically",
      },
      {
        type: "paragraph",
        content:
          "We can use expo-updates APIs to check whether a new update is available, download it, and reload the application to apply it.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "import * as Updates from 'expo-updates';\n\nconst checkForUpdates = async () => {\n  try {\n    if (__DEV__) return;\n\n    const update = await Updates.checkForUpdateAsync();\n\n    if (update.isAvailable) {\n      await Updates.fetchUpdateAsync();\n      await Updates.reloadAsync();\n    }\n  } catch (error) {\n    console.log('OTA update failed:', error);\n  }\n};",
      },
      {
        type: "paragraph",
        content:
          "We can call this function during application startup or from an update settings screen. In production, we should also consider user experience, network availability, and whether an immediate reload is appropriate.",
      },
      {
        type: "heading",
        content: "5. OTA Updates Using CodePush",
      },
      {
        type: "paragraph",
        content:
          "CodePush was a popular OTA update solution for React Native applications. It allowed developers to publish JavaScript bundles and assets directly to installed applications without requiring a new store release.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "import codePush from 'react-native-code-push';\n\nconst App = () => {\n  return (\n    // Application components\n  );\n};\n\nexport default codePush({\n  checkFrequency: codePush.CheckFrequency.ON_APP_START,\n  installMode: codePush.InstallMode.ON_NEXT_RESTART\n})(App);",
      },
      {
        type: "callout",
        title: "CodePush status",
        tone: "caution",
        content:
          "Microsoft retired App Center on March 31, 2025, including its hosted CodePush service. For new projects, prefer actively supported alternatives such as Expo EAS Update or another maintained OTA solution. Existing self-hosted CodePush-compatible setups should be evaluated separately.",
      },
      {
        type: "heading",
        content: "6. OTA Update Workflow",
      },
      {
        type: "diagram",
        title: "How OTA updates work",
        nodes: [
          {
            label: "Developer",
            detail: "Makes JavaScript or asset changes.",
          },
          {
            label: "OTA Service",
            detail: "Publishes the new update bundle.",
          },
          {
            label: "Mobile Application",
            detail: "Checks for a compatible update.",
          },
          {
            label: "Download Update",
            detail: "Downloads the bundle and assets.",
          },
          {
            label: "Apply Update",
            detail: "Applies the update on reload or next launch.",
          },
        ],
        note: "Native code changes still require a new Android or iOS application build.",
      },
      {
        type: "heading",
        content: "7. Best Practices",
      },
      {
        type: "list",
        content: [
          "Use runtime version compatibility to prevent incompatible updates from being installed.",
          "Maintain separate development, staging, and production update channels.",
          "Test OTA updates in staging before publishing to production.",
          "Never use OTA updates to bypass app store review requirements.",
          "Avoid publishing updates containing incomplete or untested functionality.",
          "Use gradual rollouts when supported by the OTA provider.",
          "Monitor update download failures and application crashes.",
          "Maintain a rollback strategy for faulty updates.",
          "Do not force an immediate application restart while users are performing critical operations.",
          "Ensure updates comply with Google Play and Apple App Store policies.",
        ],
      },
      {
        type: "heading",
        content: "8. Interview Answer",
      },
      {
        type: "callout",
        title: "How I handle OTA updates in real projects",
        tone: "info",
        content:
          "In React Native, I use OTA updates to deliver JavaScript and asset changes without requiring users to download a new application version from the app stores. For Expo-based applications, I can use EAS Update with separate development, staging, and production channels. I configure runtime version compatibility so that updates are delivered only to compatible application builds. The application checks for updates, downloads the bundle, and applies it on the next launch or through a controlled reload. However, if we introduce native modules, change native dependencies, or modify Android or iOS configurations, I generate a new application build and publish it through the respective app stores. I also test updates in staging, monitor failures, and maintain a rollback strategy.",
      },
    ],
    topic: "Build & release",
    references: [
      {
        label: "Expo EAS Update Documentation",
        href: "https://docs.expo.dev/eas-update/introduction/",
      },
      {
        label: "Expo Updates API",
        href: "https://docs.expo.dev/versions/latest/sdk/updates/",
      },
      {
        label: "React Native Documentation",
        href: "https://reactnative.dev/docs/getting-started",
      },
    ],
  },
  {
    id: "what-are-your-app-release-strategies",
    question: "What are your app release strategies?",
    answer: [
      {
        type: "paragraph",
        content:
          "App release strategy is the process of planning, building, testing, and deploying application updates to end users. In React Native, I follow a structured release process to ensure application stability, minimize production issues, and deliver new features smoothly through Google Play Store and Apple App Store.",
      },
      {
        type: "heading",
        content: "1. Different App Release Strategies",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Development Release",
            content:
              "Development builds are generated for developers to test new features, integrate APIs, debug issues, and validate native functionality.",
            bottomContent:
              "Example: Internal APK or development IPA shared with the development team.",
          },
          {
            heading: "Internal Testing Release",
            content:
              "The application is shared with a limited group of developers, testers, or internal stakeholders to validate functionality before wider testing.",
            bottomContent:
              "Example: Google Play Internal Testing and TestFlight internal testing.",
          },
          {
            heading: "Beta / Staging Release",
            content:
              "A release candidate is distributed to QA teams or selected users to validate new features, performance, compatibility, and real-world scenarios.",
            bottomContent:
              "Example: Google Play Closed Testing and TestFlight external testing.",
          },
          {
            heading: "Production Release",
            content:
              "After successful testing and approval, the application is published to end users through Google Play Store and Apple App Store.",
          },
        ],
      },
      {
        type: "heading",
        content: "2. Production Release Strategies",
      },
      {
        type: "unordered-list",
        items: [
          {
            heading: "A. Big Bang Release",
            content: "All changes are deployed to all users at once.",
            bottomContent:
              "Suitable for smaller applications or releases where deployment risk is low.",
          },
          {
            heading: "B. Phased / Staged Rollout",
            content:
              "The new version is gradually distributed to a percentage of users instead of releasing it to everyone immediately.",
            bottomContent:
              "Example: Release to 10% → 25% → 50% → 100% of users, monitoring crashes and performance at each stage.",
          },
          {
            heading: "C. Canary Release",
            content:
              "The new version is initially released to a small group of users to identify production issues before expanding the release.",
            bottomContent:
              "Example: Deploy the new version to employees or selected users before making it available to the general audience.",
          },
          {
            heading: "D. Feature Flag Release",
            content:
              "New features are deployed in the application but remain disabled until they are enabled through remote configuration or a feature flag system.",
            bottomContent:
              "Example: Release a payment feature with a feature flag and enable it gradually after validation.",
          },
          {
            heading: "E. Hotfix Release",
            content:
              "A quick production release is generated to resolve critical bugs, crashes, or security issues without waiting for the next regular release cycle.",
            bottomContent:
              "Example: Fixing a payment failure or application crash affecting production users.",
          },
          {
            heading: "F. Rollback Strategy",
            content:
              "If a production release introduces critical issues, we stop further rollout and restore the previous stable experience using a supported recovery mechanism.",
            bottomContent:
              "Example: Reverting a backend deployment, disabling a problematic feature flag, or publishing a corrected mobile application release.",
          },
        ],
      },
      {
        type: "heading",
        content: "3. React Native App Release Workflow",
      },
      {
        type: "diagram",
        title: "End-to-End Mobile App Release Process",
        nodes: [
          {
            label: "Development",
            detail: "Implement features and bug fixes.",
          },
          {
            label: "Code Review",
            detail: "PR reviews, static analysis, and quality checks.",
          },
          {
            label: "Build Generation",
            detail: "Generate Android AAB/APK and iOS IPA.",
          },
          {
            label: "QA / Staging",
            detail: "Functional, regression, and device testing.",
          },
          {
            label: "Release Approval",
            detail: "Product, QA, and stakeholder sign-off.",
          },
          {
            label: "Production",
            detail: "Publish through the app stores.",
          },
          {
            label: "Monitoring",
            detail: "Monitor crashes, analytics, and user feedback.",
          },
        ],
        note: "If production issues occur, stop the rollout, disable problematic features, or prepare a hotfix release.",
      },
      {
        type: "heading",
        content: "4. Android Release Process",
      },
      {
        type: "paragraph",
        content:
          "For Android, I generate a signed APK or Android App Bundle (AAB) using Gradle. The AAB is generally preferred for Google Play Store distribution.",
      },
      {
        type: "code",
        language: "bash",
        content:
          "# Generate release APK\ncd android\n./gradlew assembleRelease\n\n# Generate release AAB\n./gradlew bundleRelease",
      },
      {
        type: "paragraph",
        content:
          "After generating the release build, we validate the application, upload the AAB to Google Play Console, and select an appropriate testing or production rollout track.",
      },
      {
        type: "heading",
        content: "5. iOS Release Process",
      },
      {
        type: "paragraph",
        content:
          "For iOS, I configure the Release scheme in Xcode, verify signing certificates and provisioning profiles, generate an archive, and upload the IPA build to App Store Connect using Xcode or an automated CI/CD pipeline.",
      },
      {
        type: "list",
        content: [
          "Configure the correct bundle identifier and version.",
          "Verify signing certificates and provisioning profiles.",
          "Generate the Release archive.",
          "Upload the build to App Store Connect.",
          "Distribute through TestFlight for testing.",
          "Submit the application for App Store review and release.",
        ],
      },
      {
        type: "heading",
        content: "6. Automating Releases Using CI/CD",
      },
      {
        type: "paragraph",
        content:
          "I use GitHub Actions to automate application builds, testing, and release workflows. This reduces manual effort and ensures consistent builds across environments.",
      },
      {
        type: "code",
        language: "yaml",
        content:
          "name: React Native Release\n\non:\n  push:\n    tags:\n      - 'v*'\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Run tests\n        run: npm test -- --watchAll=false\n\n      - name: Build Android AAB\n        run: cd android && ./gradlew bundleRelease",
      },
      {
        type: "paragraph",
        content:
          "We can extend the pipeline with signing credentials, artifact storage, Fastlane, and Google Play or App Store Connect deployment steps.",
      },
      {
        type: "heading",
        content: "7. Post-Release Monitoring",
      },
      {
        type: "paragraph",
        content:
          "After releasing the application, I continuously monitor production stability to identify issues early and decide whether to continue, pause, or roll back the rollout.",
      },
      {
        type: "list",
        content: [
          "Crash reports using Firebase Crashlytics.",
          "Application performance and API response times.",
          "ANR (Application Not Responding) issues on Android.",
          "User feedback and application ratings.",
          "Login, payment, and critical business-flow success rates.",
          "Adoption rate of the latest application version.",
        ],
      },
      {
        type: "heading",
        content: "8. Best Practices",
      },
      {
        type: "list",
        content: [
          "Always maintain separate Development, Staging, and Production environments.",
          "Perform regression testing before production releases.",
          "Use semantic versioning and increment native build numbers correctly.",
          "Keep production signing credentials secure.",
          "Use phased rollouts to reduce deployment risks.",
          "Use feature flags to enable or disable functionality without releasing another build.",
          "Maintain release notes and deployment documentation.",
          "Monitor application crashes and performance after deployment.",
          "Maintain backward compatibility between mobile application versions and backend APIs.",
          "Have a hotfix and rollback plan ready before every major release.",
        ],
      },
      {
        type: "heading",
        content: "9. Interview Answer",
      },
      {
        type: "callout",
        title: "How I handle app releases in real projects",
        tone: "info",
        content:
          "In my React Native projects, I follow a structured release strategy. First, we generate development builds and validate new features. Then we distribute staging builds to the QA team through internal testing or TestFlight. After functional and regression testing, we generate signed production builds for Android and iOS. I use GitHub Actions to automate builds and testing, maintain proper versioning, and manage environment-specific configurations. For production deployments, I prefer phased rollouts so that we can monitor crashes, ANRs, and application performance before making the release available to everyone. If a critical issue occurs, we stop the rollout, disable the affected feature if possible, or prepare a hotfix release. This approach helps us minimize production risks and maintain application stability.",
      },
    ],
    topic: "Build & release",
    references: [
      {
        label: "Google Play Console – Release",
        href: "https://support.google.com/googleplay/android-developer/answer/9859348",
      },
      {
        label: "Apple – App Store Connect",
        href: "https://developer.apple.com/help/app-store-connect/",
      },
      {
        label: "React Native Documentation",
        href: "https://reactnative.dev/docs/publishing-to-app-store",
      },
      {
        label: "GitHub Actions Documentation",
        href: "https://docs.github.com/en/actions",
      },
    ],
  },
  {
    id: "how-would-you-design-a-scalable-react-native-app-from-scratch",
    question: "How would you design a scalable RN app from scratch?",
    answer: [
      {
        type: "paragraph",
        content:
          "When designing a scalable React Native application from scratch, I focus on building a modular, maintainable, reusable, and performance-oriented architecture. The goal is to ensure that the application can grow from a few features to 100+ features without creating tightly coupled components or making future development difficult.",
      },
      {
        type: "heading",
        content: "1. Requirement Analysis and Technology Selection",
      },
      {
        type: "paragraph",
        content:
          "Before starting development, I understand the business requirements, application complexity, expected user traffic, supported platforms, offline requirements, third-party integrations, and future scalability.",
      },
      {
        type: "table",
        content: [
          ["Requirement", "Technology / Approach"],
          ["Mobile framework", "React Native with TypeScript"],
          ["Navigation", "React Navigation"],
          ["State management", "Redux Toolkit / Zustand"],
          ["API integration", "Axios / Fetch"],
          ["Server state", "TanStack Query"],
          ["Local storage", "MMKV / AsyncStorage"],
          ["Secure storage", "Keychain / Android Keystore"],
          ["Forms and validation", "React Hook Form + Yup / Zod"],
          ["Unit testing", "Jest + React Native Testing Library"],
          ["E2E testing", "Detox / Maestro"],
          ["Crash monitoring", "Firebase Crashlytics"],
          ["CI/CD", "GitHub Actions / Fastlane"],
        ],
      },
      {
        type: "heading",
        content: "2. Choose a Scalable Architecture",
      },
      {
        type: "paragraph",
        content:
          "I prefer a feature-based modular architecture with separation of concerns. Instead of keeping all screens, components, API calls, and business logic in separate global folders, I organize most feature-specific code together.",
      },
      {
        type: "diagram",
        title: "Scalable React Native Architecture",
        nodes: [
          {
            label: "Presentation Layer",
            detail: "Screens, components, navigation, UI",
          },
          {
            label: "Business Logic Layer",
            detail: "Hooks, use cases, validation, business rules",
          },
          {
            label: "Data Layer",
            detail: "API services, repositories, local database",
          },
          {
            label: "Infrastructure Layer",
            detail: "Storage, authentication, analytics, native modules",
          },
        ],
        note: "Each layer has a clear responsibility. Dependencies should flow through well-defined interfaces rather than tightly coupling screens to infrastructure.",
      },
      {
        type: "heading",
        content: "3. Design a Feature-Based Folder Structure",
      },
      {
        type: "paragraph",
        content:
          "I organize the project around business features so that developers can work independently on modules such as Authentication, Profile, Payments, Orders, and Notifications.",
      },
      {
        type: "code",
        language: "text",
        content:
          "src/\n│\n├── app/\n│   ├── navigation/\n│   ├── providers/\n│   └── store/\n│\n├── features/\n│   ├── auth/\n│   │   ├── components/\n│   │   ├── screens/\n│   │   ├── hooks/\n│   │   ├── services/\n│   │   ├── store/\n│   │   ├── types/\n│   │   └── utils/\n│   │\n│   ├── profile/\n│   ├── payments/\n│   ├── orders/\n│   └── notifications/\n│\n├── shared/\n│   ├── components/\n│   ├── hooks/\n│   ├── constants/\n│   ├── utils/\n│   └── types/\n│\n├── services/\n│   ├── api/\n│   ├── analytics/\n│   └── storage/\n│\n├── theme/\n│   ├── colors.ts\n│   ├── typography.ts\n│   └── spacing.ts\n│\n└── assets/\n    ├── images/\n    ├── fonts/\n    └── icons/",
      },
      {
        type: "paragraph",
        content:
          "For example, all authentication-related screens, hooks, API services, types, and state management stay inside the auth feature. Shared components such as buttons, inputs, and modals are maintained separately.",
      },
      {
        type: "heading",
        content: "4. Implement TypeScript and Reusable Components",
      },
      {
        type: "paragraph",
        content:
          "I use TypeScript throughout the application to ensure type safety, reduce runtime errors, and maintain consistent contracts between components, APIs, and navigation.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "interface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\ntype UserCardProps = {\n  user: User;\n  onPress: (userId: string) => void;\n};\n\nconst UserCard: React.FC<UserCardProps> = ({\n  user,\n  onPress,\n}) => {\n  return (\n    <Pressable onPress={() => onPress(user.id)}>\n      <Text>{user.name}</Text>\n      <Text>{user.email}</Text>\n    </Pressable>\n  );\n};",
      },
      {
        type: "paragraph",
        content:
          "I also build a reusable design system containing buttons, text fields, cards, typography, colors, spacing, and common UI patterns to maintain consistency across multiple features.",
      },
      {
        type: "heading",
        content: "5. State Management Strategy",
      },
      {
        type: "paragraph",
        content:
          "I avoid putting every application state into a single global store. Instead, I select state management based on the type and scope of data.",
      },
      {
        type: "table",
        content: [
          ["State Type", "Recommended Approach"],
          ["Component-specific state", "useState / useReducer"],
          ["Shared UI state", "Context API / Zustand"],
          ["Complex global state", "Redux Toolkit"],
          ["Server/API state", "TanStack Query"],
          ["Persistent preferences", "MMKV / AsyncStorage"],
          ["Sensitive information", "Keychain / Keystore"],
        ],
      },
      {
        type: "paragraph",
        content:
          "For example, authentication details can be managed through a global authentication store, while API responses and caching are handled through TanStack Query. This avoids unnecessary global state updates and improves maintainability.",
      },
      {
        type: "heading",
        content: "6. API Integration and Data Layer",
      },
      {
        type: "paragraph",
        content:
          "I create a centralized API client using Axios with common configurations such as base URL, request interceptors, response interceptors, authentication tokens, timeout handling, and error handling.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "import axios from 'axios';\n\nexport const apiClient = axios.create({\n  baseURL: 'https://api.example.com',\n  timeout: 15000,\n  headers: {\n    'Content-Type': 'application/json',\n  },\n});\n\napiClient.interceptors.request.use(async config => {\n  const token = await getAccessToken();\n\n  if (token) {\n    config.headers.Authorization = `Bearer ${token}`;\n  }\n\n  return config;\n});\n\napiClient.interceptors.response.use(\n  response => response,\n  error => {\n    return Promise.reject(error);\n  }\n);",
      },
      {
        type: "paragraph",
        content:
          "I keep API methods separate from UI components and use repository or service layers when the application has complex data sources or business logic.",
      },
      {
        type: "heading",
        content: "7. Navigation and Deep Linking",
      },
      {
        type: "paragraph",
        content:
          "I use React Navigation with a structured navigation hierarchy. I separate authentication navigation from the main application navigation and use typed route parameters.",
      },
      {
        type: "list",
        content: [
          "Authentication Stack: Login, Registration, Forgot Password.",
          "Main Stack: Dashboard, Profile, Settings.",
          "Feature Stack: Payments, Orders, Notifications.",
          "Bottom Tab Navigation: Main application sections.",
          "Deep Linking: Support navigation from external URLs and push notifications.",
        ],
      },
      {
        type: "heading",
        content: "8. Performance Optimization",
      },
      {
        type: "paragraph",
        content:
          "I consider performance from the beginning rather than waiting until the application becomes slow. I focus on minimizing unnecessary renders, optimizing large lists, reducing bundle size, and improving communication between JavaScript and native layers.",
      },
      {
        type: "list",
        content: [
          "Use FlatList or FlashList for large datasets instead of rendering everything inside ScrollView.",
          "Use React.memo, useMemo, and useCallback when they provide measurable benefits.",
          "Keep state close to the components that need it.",
          "Use lazy loading and code splitting where supported by the application setup.",
          "Optimize images and use appropriate image formats.",
          "Avoid expensive calculations during rendering.",
          "Use Hermes for improved JavaScript execution and memory characteristics.",
          "Use the React Native New Architecture when supported and beneficial.",
          "Profile JavaScript and native performance using React Native DevTools and platform-specific profilers.",
        ],
      },
      {
        type: "heading",
        content: "9. Native Module and Third-Party Integration",
      },
      {
        type: "paragraph",
        content:
          "When application requirements involve native functionality such as Bluetooth, NFC, background processing, custom Android overlays, or platform-specific APIs, I evaluate existing libraries first. If a suitable library is unavailable, I create a native module using Kotlin for Android or Swift for iOS.",
      },
      {
        type: "list",
        content: [
          "Use TurboModules for appropriate native module integrations.",
          "Use Codegen for type-safe native interfaces in the New Architecture.",
          "Handle platform-specific functionality separately.",
          "Avoid unnecessary native-to-JavaScript communication.",
          "Document native dependencies and integration requirements.",
        ],
      },
      {
        type: "heading",
        content: "10. Offline Support and Data Persistence",
      },
      {
        type: "paragraph",
        content:
          "For applications that need to work with unstable internet connectivity, I implement offline support using local storage or a local database. I also design synchronization and conflict-resolution strategies.",
      },
      {
        type: "list",
        content: [
          "Use MMKV or AsyncStorage for suitable local key-value data.",
          "Use SQLite or another database for structured offline data.",
          "Cache API responses where appropriate.",
          "Queue operations when the device is offline.",
          "Synchronize pending operations when connectivity returns.",
          "Handle duplicate requests and data conflicts safely.",
        ],
      },
      {
        type: "heading",
        content: "11. Security Implementation",
      },
      {
        type: "paragraph",
        content:
          "Security is an important part of scalable application architecture. I implement authentication, secure data storage, API communication protection, and input validation.",
      },
      {
        type: "list",
        content: [
          "Use HTTPS for API communication.",
          "Store authentication tokens using Keychain or Android Keystore-backed secure storage.",
          "Avoid storing sensitive information in plain AsyncStorage.",
          "Implement token expiration and refresh handling.",
          "Validate API responses and user inputs.",
          "Avoid hardcoding secrets in the application bundle.",
          "Use appropriate certificate validation and security controls.",
        ],
      },
      {
        type: "heading",
        content: "12. Testing Strategy",
      },
      {
        type: "paragraph",
        content:
          "I follow a layered testing strategy to catch issues early and maintain application quality as the codebase grows.",
      },
      {
        type: "table",
        content: [
          ["Testing Type", "Tools", "Purpose"],
          [
            "Unit Testing",
            "Jest",
            "Test functions, hooks, and business logic.",
          ],
          [
            "Component Testing",
            "React Native Testing Library",
            "Validate UI behavior and interactions.",
          ],
          [
            "Integration Testing",
            "Jest / RNTL",
            "Test API and component integration.",
          ],
          [
            "E2E Testing",
            "Detox / Maestro",
            "Validate complete user journeys.",
          ],
          [
            "Performance Testing",
            "React Native DevTools / Native profilers",
            "Identify performance bottlenecks.",
          ],
        ],
      },
      {
        type: "heading",
        content: "13. CI/CD and Release Management",
      },
      {
        type: "paragraph",
        content:
          "I establish automated pipelines using GitHub Actions to run linting, type checking, tests, and platform-specific builds. I maintain separate Development, Staging, and Production environments.",
      },
      {
        type: "list",
        content: [
          "Use Git feature branches and pull requests.",
          "Run ESLint, Prettier, and TypeScript checks.",
          "Execute automated unit and component tests.",
          "Generate Android APK/AAB and iOS IPA builds.",
          "Manage signing certificates and secrets securely.",
          "Use environment-specific configurations.",
          "Distribute staging builds through internal testing and TestFlight.",
          "Use phased production releases and monitor crashes through Crashlytics.",
        ],
      },
      {
        type: "heading",
        content: "14. Monitoring and Maintenance",
      },
      {
        type: "paragraph",
        content:
          "After deployment, I monitor application health and continuously improve performance and stability.",
      },
      {
        type: "list",
        content: [
          "Firebase Crashlytics for crash reporting.",
          "Analytics for user behavior and feature adoption.",
          "API monitoring for response times and failures.",
          "ANR monitoring for Android.",
          "Application startup time and memory usage.",
          "User feedback and production issue tracking.",
        ],
      },
      {
        type: "heading",
        content: "15. Best Practices for Scalable Architecture",
      },
      {
        type: "list",
        content: [
          "Use feature-based modular architecture.",
          "Follow SOLID principles where appropriate.",
          "Use TypeScript across the application.",
          "Maintain reusable components and a centralized design system.",
          "Separate UI, business logic, and data access.",
          "Avoid unnecessary global state.",
          "Use consistent naming conventions and coding standards.",
          "Maintain proper API error handling and logging.",
          "Write unit, integration, and E2E tests.",
          "Automate builds, testing, and releases.",
          "Document architecture decisions and module responsibilities.",
          "Design modules so that new features can be added without modifying unrelated features.",
        ],
      },
      {
        type: "heading",
        content: "16. Interview Answer",
      },
      {
        type: "callout",
        title: "How I would design it in a real project",
        tone: "info",
        content:
          "If I were designing a React Native application from scratch, I would start by understanding the business requirements and selecting the right technology stack. I would use React Native with TypeScript and follow a feature-based modular architecture so that features such as Authentication, Profile, Payments, and Notifications remain independent and maintainable. I would use Redux Toolkit or Zustand for global client state and TanStack Query for server state and API caching. I would create reusable UI components, centralized API services, typed navigation, and separate environment configurations. I would also plan for offline support, secure storage, native integrations, and performance optimization from the beginning. For quality, I would implement Jest, React Native Testing Library, and E2E testing. Finally, I would configure GitHub Actions for automated testing and builds, integrate Crashlytics for production monitoring, and follow phased releases. My main focus would be to build an architecture that supports new features, multiple developers, and future business requirements without making the application tightly coupled or difficult to maintain.",
      },
    ],
    topic: "Architecture & system design",
    references: [
      {
        label: "React Native Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
      {
        label: "React Native Performance",
        href: "https://reactnative.dev/docs/performance",
      },
      {
        label: "React Navigation",
        href: "https://reactnavigation.org/docs/getting-started",
      },
      {
        label: "TanStack Query",
        href: "https://tanstack.com/query/latest/docs/framework/react/overview",
      },
      {
        label: "React Native Testing Library",
        href: "https://callstack.github.io/react-native-testing-library/",
      },
    ],
  },
  {
    id: "how-do-you-handle-feature-based-architecture",
    question: "How do you handle feature-based architecture?",
    answer: [
      {
        type: "paragraph",
        content:
          "Feature-based architecture is a software design approach where we organize the application based on business features rather than grouping all files by technical types such as screens, components, hooks, and services. Each feature maintains its own screens, components, hooks, API services, state management, types, and business logic. This makes the application modular, maintainable, reusable, and easier to scale as the number of features increases.",
      },
      {
        type: "heading",
        content: "1. Understanding Feature-Based Architecture",
      },
      {
        type: "paragraph",
        content:
          "For example, consider an e-commerce application containing Authentication, Products, Cart, Orders, Payments, and Profile modules. Instead of maintaining all screens in one folder and all API services in another, I organize related files inside their respective feature folders.",
      },
      {
        type: "diagram",
        title: "Feature-Based Architecture",
        nodes: [
          {
            label: "Application Layer",
            detail: "Navigation, providers, global configuration",
          },
          {
            label: "Feature Modules",
            detail: "Auth, Products, Cart, Orders, Payments, Profile",
          },
          {
            label: "Shared Layer",
            detail: "Reusable UI, hooks, utilities, themes",
          },
          {
            label: "Infrastructure Layer",
            detail: "API client, storage, analytics, native integrations",
          },
        ],
        note: "Each feature owns its business logic while shared infrastructure provides common functionality.",
      },
      {
        type: "heading",
        content: "2. Recommended Folder Structure",
      },
      {
        type: "paragraph",
        content:
          "I maintain a feature-oriented folder structure where each module contains everything related to that business functionality.",
      },
      {
        type: "code",
        language: "text",
        content:
          "src/\n│\n├── app/\n│   ├── navigation/\n│   ├── providers/\n│   ├── store/\n│   └── App.tsx\n│\n├── features/\n│   ├── auth/\n│   │   ├── components/\n│   │   ├── screens/\n│   │   ├── hooks/\n│   │   ├── services/\n│   │   ├── store/\n│   │   ├── types/\n│   │   ├── utils/\n│   │   └── index.ts\n│   │\n│   ├── products/\n│   │   ├── components/\n│   │   ├── screens/\n│   │   ├── hooks/\n│   │   ├── services/\n│   │   ├── store/\n│   │   └── types/\n│   │\n│   ├── cart/\n│   ├── orders/\n│   ├── payments/\n│   └── profile/\n│\n├── shared/\n│   ├── components/\n│   ├── hooks/\n│   ├── constants/\n│   ├── utils/\n│   ├── types/\n│   └── theme/\n│\n├── infrastructure/\n│   ├── api/\n│   ├── storage/\n│   ├── analytics/\n│   └── notifications/\n│\n└── assets/\n    ├── images/\n    ├── fonts/\n    └── icons/",
      },
      {
        type: "paragraph",
        content:
          "For example, all login-related components, screens, API calls, hooks, and state management stay inside the auth module. Other features do not need to know about the internal implementation of authentication.",
      },
      {
        type: "heading",
        content: "3. Responsibilities of Each Feature",
      },
      {
        type: "table",
        content: [
          ["Folder", "Responsibility"],
          ["components/", "Feature-specific reusable UI components."],
          ["screens/", "Complete application screens."],
          ["hooks/", "Custom hooks and feature-specific logic."],
          ["services/", "API calls and data access."],
          ["store/", "Feature-specific state management."],
          ["types/", "TypeScript interfaces and types."],
          ["utils/", "Feature-specific helper functions."],
          ["index.ts", "Public exports of the feature."],
        ],
      },
      {
        type: "heading",
        content: "4. Example: Authentication Feature Implementation",
      },
      {
        type: "paragraph",
        content:
          "Consider implementing a login feature. I separate the UI, API integration, and state management instead of writing everything inside a single LoginScreen component.",
      },
      {
        type: "paragraph",
        content: "Step 1: Define authentication types.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// features/auth/types/auth.types.ts\n\nexport interface LoginRequest {\n  email: string;\n  password: string;\n}\n\nexport interface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\nexport interface LoginResponse {\n  token: string;\n  user: User;\n}",
      },
      {
        type: "paragraph",
        content: "Step 2: Create the authentication API service.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// features/auth/services/auth.service.ts\n\nimport { apiClient } from '../../../infrastructure/api/apiClient';\nimport { LoginRequest, LoginResponse } from '../types/auth.types';\n\nexport const loginUser = async (\n  payload: LoginRequest\n): Promise<LoginResponse> => {\n  const response = await apiClient.post<LoginResponse>(\n    '/login',\n    payload\n  );\n\n  return response.data;\n};",
      },
      {
        type: "paragraph",
        content: "Step 3: Create a custom hook to manage login functionality.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// features/auth/hooks/useLogin.ts\n\nimport { useMutation } from '@tanstack/react-query';\nimport { loginUser } from '../services/auth.service';\n\nexport const useLogin = () => {\n  return useMutation({\n    mutationFn: loginUser,\n  });\n};",
      },
      {
        type: "paragraph",
        content: "Step 4: Consume the hook inside the LoginScreen.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          "// features/auth/screens/LoginScreen.tsx\n\nimport React from 'react';\nimport { View, Button, Text } from 'react-native';\nimport { useLogin } from '../hooks/useLogin';\n\nconst LoginScreen = () => {\n  const { mutate, isPending, error } = useLogin();\n\n  const handleLogin = () => {\n    mutate({\n      email: 'test@example.com',\n      password: 'password123',\n    });\n  };\n\n  return (\n    <View>\n      <Button\n        title={isPending ? 'Logging in...' : 'Login'}\n        onPress={handleLogin}\n        disabled={isPending}\n      />\n      {error && <Text>Login failed</Text>}\n    </View>\n  );\n};\n\nexport default LoginScreen;",
      },
      {
        type: "paragraph",
        content:
          "This separation ensures that the screen handles UI interactions, the custom hook handles mutation state, and the service handles API communication.",
      },
      {
        type: "heading",
        content: "5. Shared Components and Code Reusability",
      },
      {
        type: "paragraph",
        content:
          "I keep components that are used across multiple features inside the shared/components folder. Feature-specific components remain inside their respective feature folders.",
      },
      {
        type: "code",
        language: "text",
        content:
          "shared/\n  components/\n    AppButton.tsx\n    AppInput.tsx\n    AppLoader.tsx\n    AppModal.tsx\n    AppHeader.tsx\n  hooks/\n    useDebounce.ts\n    useNetworkStatus.ts\n  utils/\n    dateUtils.ts\n    validationUtils.ts",
      },
      {
        type: "list",
        content: [
          "Shared components should contain generic reusable functionality.",
          "Feature-specific components should not be moved into shared folders unnecessarily.",
          "Avoid duplicating common UI logic across different features.",
          "Keep shared components independent of specific business modules.",
        ],
      },
      {
        type: "heading",
        content: "6. State Management in Feature-Based Architecture",
      },
      {
        type: "paragraph",
        content:
          "I manage state based on its ownership and usage. Each feature can maintain its own state, while genuinely shared application state is managed centrally.",
      },
      {
        type: "table",
        content: [
          ["State", "Management"],
          ["Login form state", "useState / React Hook Form"],
          ["Authentication state", "Redux Toolkit / Zustand"],
          ["Product API data", "TanStack Query"],
          ["Cart state", "Cart feature store"],
          ["Theme and language", "Shared application store"],
          ["User preferences", "Persistent local storage"],
        ],
      },
      {
        type: "paragraph",
        content:
          "This approach prevents unrelated components from subscribing to unnecessary state updates and reduces coupling between features.",
      },
      {
        type: "heading",
        content: "7. Feature Communication and Dependencies",
      },
      {
        type: "paragraph",
        content:
          "In a scalable application, features sometimes need to communicate with each other. I avoid directly accessing another feature's internal components, services, or store implementation. Instead, I expose a controlled public interface through index.ts or use shared application-level services and state.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// features/auth/index.ts\n\nexport { default as LoginScreen } from './screens/LoginScreen';\nexport { useLogin } from './hooks/useLogin';\nexport type { User, LoginRequest } from './types/auth.types';",
      },
      {
        type: "paragraph",
        content:
          "Other modules can import only the functionality that the auth feature intentionally exposes. This reduces tight coupling and makes internal implementation changes easier.",
      },
      {
        type: "heading",
        content: "8. Navigation Management",
      },
      {
        type: "paragraph",
        content:
          "I maintain application-level navigation inside the app/navigation folder and keep feature screens inside their respective modules. This separates navigation configuration from business logic.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// app/navigation/AppNavigator.tsx\n\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { LoginScreen } from '../../features/auth';\nimport HomeScreen from '../../features/home/screens/HomeScreen';\n\nconst Stack = createNativeStackNavigator();\n\nexport const AppNavigator = () => {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name=\"Login\" component={LoginScreen} />\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n    </Stack.Navigator>\n  );\n};",
      },
      {
        type: "heading",
        content: "9. Benefits of Feature-Based Architecture",
      },
      {
        type: "list",
        content: [
          "Scalability: New features can be added without restructuring the entire application.",
          "Maintainability: Related files stay together, making code easier to understand and modify.",
          "Reusability: Common components and utilities can be shared across features.",
          "Team collaboration: Multiple developers can work on different modules independently.",
          "Testability: Each feature can have its own unit and integration tests.",
          "Reduced coupling: Features communicate through controlled interfaces.",
          "Code ownership: Teams can take responsibility for specific business modules.",
          "Easier debugging: Issues can be isolated within individual features.",
        ],
      },
      {
        type: "heading",
        content: "10. Best Practices",
      },
      {
        type: "list",
        content: [
          "Organize code around business features rather than only technical file types.",
          "Keep each feature responsible for its own business logic.",
          "Use TypeScript for strong contracts between modules.",
          "Maintain clear public exports for each feature.",
          "Avoid circular dependencies between features.",
          "Keep shared components generic and reusable.",
          "Avoid creating unnecessary global state.",
          "Separate API services from presentation components.",
          "Write feature-specific unit and integration tests.",
          "Use consistent naming conventions and folder structures.",
          "Establish dependency rules to prevent features from accessing each other's internal implementation.",
        ],
      },
      {
        type: "heading",
        content: "11. Interview Answer",
      },
      {
        type: "callout",
        title: "How I handle it in real projects",
        tone: "info",
        content:
          "In my React Native projects, I prefer feature-based architecture because it makes the application easier to scale and maintain. I organize the code based on business modules such as Authentication, Profile, Orders, Payments, and Notifications. Each feature maintains its own screens, components, hooks, API services, types, and state management. I keep common reusable components, utilities, themes, and API infrastructure in shared folders. For state management, I use Redux Toolkit or Zustand for global client state and TanStack Query for server-side data. I also maintain clear module boundaries and public exports to avoid tight coupling between features. This architecture allows multiple developers to work on different modules independently and makes it easier to add new functionality without affecting existing features.",
      },
    ],
    topic: "Architecture & system design",
    references: [
      {
        label: "React Native Architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
      {
        label: "React Native Documentation",
        href: "https://reactnative.dev/docs/getting-started",
      },
      {
        label: "Redux Toolkit Documentation",
        href: "https://redux-toolkit.js.org/",
      },
      {
        label: "TanStack Query Documentation",
        href: "https://tanstack.com/query/latest/docs/framework/react/overview",
      },
    ],
  },
  {
    id: "how-do-you-handle-multiple-themes",
    question: "How do you handle multiple themes?",
    answer: [
      {
        type: "paragraph",
        content:
          "In React Native, I manage multiple themes using a centralized theme system. Instead of hardcoding colors, font sizes, backgrounds, and other styling properties inside individual components, I define reusable design tokens for each theme. This allows users to switch between Light Mode, Dark Mode, or custom themes dynamically without modifying the component structure.",
      },
      {
        type: "heading",
        content: "1. Understanding Multiple Themes",
      },
      {
        type: "paragraph",
        content:
          "A theme defines the visual appearance of an application, including colors, typography, backgrounds, borders, spacing, and other UI properties.",
      },
      {
        type: "list",
        content: [
          "Light Theme: Uses light backgrounds, dark text, and lighter UI elements.",
          "Dark Theme: Uses dark backgrounds, light text, and darker UI elements.",
          "System Theme: Automatically follows the device's Light or Dark Mode preference.",
          "Custom Theme: Allows different branding or user-selected color schemes.",
        ],
      },
      {
        type: "heading",
        content: "2. Create a Centralized Theme Structure",
      },
      {
        type: "paragraph",
        content:
          "I create a centralized theme folder to maintain colors, typography, spacing, and theme definitions separately.",
      },
      {
        type: "code",
        language: "text",
        content:
          "src/\n├── theme/\n│   ├── colors.ts\n│   ├── lightTheme.ts\n│   ├── darkTheme.ts\n│   ├── theme.types.ts\n│   ├── ThemeProvider.tsx\n│   └── useTheme.ts\n│\n├── components/\n│   └── AppButton.tsx\n│\n└── screens/\n    └── HomeScreen.tsx",
      },
      {
        type: "heading",
        content: "3. Define Theme Types",
      },
      {
        type: "paragraph",
        content:
          "I use TypeScript interfaces to maintain a consistent structure across different themes.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// theme/theme.types.ts\n\nexport interface AppTheme {\n  colors: {\n    primary: string;\n    background: string;\n    surface: string;\n    text: string;\n    secondaryText: string;\n    border: string;\n    error: string;\n  };\n}",
      },
      {
        type: "heading",
        content: "4. Create Light and Dark Themes",
      },
      {
        type: "paragraph",
        content:
          "I define separate theme objects containing the same properties but different color values.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// theme/lightTheme.ts\nimport { AppTheme } from './theme.types';\n\nexport const lightTheme: AppTheme = {\n  colors: {\n    primary: '#2563EB',\n    background: '#FFFFFF',\n    surface: '#F3F4F6',\n    text: '#111827',\n    secondaryText: '#6B7280',\n    border: '#E5E7EB',\n    error: '#DC2626',\n  },\n};\n\n// theme/darkTheme.ts\nimport { AppTheme } from './theme.types';\n\nexport const darkTheme: AppTheme = {\n  colors: {\n    primary: '#60A5FA',\n    background: '#111827',\n    surface: '#1F2937',\n    text: '#FFFFFF',\n    secondaryText: '#9CA3AF',\n    border: '#374151',\n    error: '#F87171',\n  },\n};",
      },
      {
        type: "heading",
        content: "5. Implement Theme Context and Provider",
      },
      {
        type: "paragraph",
        content:
          "I use React Context API to provide the selected theme throughout the application. This avoids passing theme properties manually through multiple component levels.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          "// theme/ThemeProvider.tsx\n\nimport React, { createContext, useState } from 'react';\nimport { lightTheme } from './lightTheme';\nimport { darkTheme } from './darkTheme';\nimport { AppTheme } from './theme.types';\n\ninterface ThemeContextType {\n  theme: AppTheme;\n  isDark: boolean;\n  toggleTheme: () => void;\n}\n\nexport const ThemeContext = createContext<ThemeContextType | undefined>(undefined);\n\nexport const ThemeProvider = ({ children }: { children: React.ReactNode }) => {\n  const [isDark, setIsDark] = useState(false);\n\n  const theme = isDark ? darkTheme : lightTheme;\n\n  const toggleTheme = () => {\n    setIsDark(previous => !previous);\n  };\n\n  return (\n    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n};",
      },
      {
        type: "heading",
        content: "6. Create a Custom useTheme Hook",
      },
      {
        type: "paragraph",
        content:
          "I create a custom hook to access the current theme and theme-switching functionality from any component.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// theme/useTheme.ts\n\nimport { useContext } from 'react';\nimport { ThemeContext } from './ThemeProvider';\n\nexport const useTheme = () => {\n  const context = useContext(ThemeContext);\n\n  if (!context) {\n    throw new Error('useTheme must be used inside ThemeProvider');\n  }\n\n  return context;\n};",
      },
      {
        type: "heading",
        content: "7. Apply Theme to Reusable Components",
      },
      {
        type: "paragraph",
        content:
          "Instead of hardcoding colors, I consume theme values through the useTheme hook. This ensures that reusable components automatically adapt when the theme changes.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          "// components/AppButton.tsx\n\nimport React from 'react';\nimport { Pressable, Text, StyleSheet } from 'react-native';\nimport { useTheme } from '../theme/useTheme';\n\nexport const AppButton = () => {\n  const { theme } = useTheme();\n\n  return (\n    <Pressable\n      style={{\n        backgroundColor: theme.colors.primary,\n        padding: 12,\n        borderRadius: 8,\n      }}\n    >\n      <Text style={{ color: '#FFFFFF' }}>Continue</Text>\n    </Pressable>\n  );\n};",
      },
      {
        type: "paragraph",
        content:
          "The same approach can be used for screens, cards, headers, input fields, modals, and navigation components.",
      },
      {
        type: "heading",
        content: "8. Support System-Based Theme Detection",
      },
      {
        type: "paragraph",
        content:
          "React Native provides the useColorScheme hook to detect whether the device is currently using Light Mode or Dark Mode.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          "import { useColorScheme } from 'react-native';\nimport { lightTheme } from './lightTheme';\nimport { darkTheme } from './darkTheme';\n\nexport const useSystemTheme = () => {\n  const colorScheme = useColorScheme();\n\n  return colorScheme === 'dark'\n    ? darkTheme\n    : lightTheme;\n};",
      },
      {
        type: "paragraph",
        content:
          "The useColorScheme hook subscribes to system appearance changes, allowing the application to respond when users change their device theme.",
      },
      {
        type: "heading",
        content: "9. Persist User Theme Preference",
      },
      {
        type: "paragraph",
        content:
          "If users manually select Light, Dark, or System mode, I persist their preference using AsyncStorage or MMKV so that the selected theme remains consistent after restarting the application.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "import AsyncStorage from '@react-native-async-storage/async-storage';\n\nexport type ThemeMode = 'light' | 'dark' | 'system';\n\nexport const saveThemePreference = async (mode: ThemeMode) => {\n  await AsyncStorage.setItem('APP_THEME', mode);\n};\n\nexport const getThemePreference = async (): Promise<ThemeMode> => {\n  const mode = await AsyncStorage.getItem('APP_THEME');\n\n  return (mode as ThemeMode) || 'system';\n};",
      },
      {
        type: "paragraph",
        content:
          "In a complete implementation, I load the saved preference when the ThemeProvider initializes, resolve system mode using useColorScheme, and update the theme whenever either the preference or device appearance changes.",
      },
      {
        type: "heading",
        content: "10. Handle Multiple Brand Themes",
      },
      {
        type: "paragraph",
        content:
          "For applications that support multiple brands or white-label products, I extend the theme configuration to include different branding, primary colors, logos, typography, and component styles.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "export const themes = {\n  default: {\n    primary: '#2563EB',\n    background: '#FFFFFF',\n  },\n  corporate: {\n    primary: '#16A34A',\n    background: '#F0FDF4',\n  },\n  premium: {\n    primary: '#9333EA',\n    background: '#FAF5FF',\n  },\n};",
      },
      {
        type: "paragraph",
        content:
          "We can select the appropriate brand theme based on the application configuration, user preference, or organization.",
      },
      {
        type: "heading",
        content: "11. Best Practices",
      },
      {
        type: "list",
        content: [
          "Maintain a centralized theme configuration.",
          "Use design tokens instead of hardcoded colors.",
          "Keep the same theme interface across all themes.",
          "Use Context API or a suitable state management solution to share theme preferences.",
          "Support Light, Dark, and System modes.",
          "Persist user-selected theme preferences.",
          "Avoid unnecessary component re-renders when theme values change.",
          "Ensure sufficient color contrast and accessibility.",
          "Apply themes consistently to navigation, status bars, modals, and native UI components.",
          "Test every screen in all supported themes.",
        ],
      },
      {
        type: "heading",
        content: "12. Interview Answer",
      },
      {
        type: "callout",
        title: "How I handle multiple themes in real projects",
        tone: "info",
        content:
          "In my React Native projects, I manage multiple themes using a centralized theme configuration and reusable design tokens. I maintain separate theme objects for Light Mode, Dark Mode, and any custom branding requirements. I use the Context API with a custom useTheme hook to make theme values accessible throughout the application. For automatic theme detection, I use React Native's useColorScheme hook, and for manually selected preferences, I persist the user's choice using AsyncStorage or MMKV. I also ensure that reusable components, navigation, status bars, and other UI elements follow the selected theme. This approach allows us to introduce new themes without modifying individual screens and keeps the application consistent and maintainable.",
      },
    ],
    topic: "Architecture & system design",
    references: [
      {
        label: "React Native Appearance",
        href: "https://reactnative.dev/docs/appearance",
      },
      {
        label: "React Native useColorScheme",
        href: "https://reactnative.dev/docs/usecolorscheme",
      },
      {
        label: "React Context API",
        href: "https://react.dev/reference/react/useContext",
      },
    ],
  },
  {
    id: "rn-localization-001",
    question: "How do you handle localization in React Native?",
    topic: "Architecture & system design",
    answer: [
      {
        type: "paragraph",
        content:
          "Localization (L10n) is the process of adapting an application to different languages, regions, date formats, number formats, currencies, and cultural preferences. Internationalization (i18n) is the process of designing the application so it can support multiple locales without major code changes.",
      },
      {
        type: "heading",
        content: "1. Choose a localization library",
      },
      {
        type: "paragraph",
        content:
          "For React Native applications, I commonly use i18next with react-i18next for translation management. I use react-native-localize to detect the device's preferred language and locale information.",
      },
      {
        type: "code",
        language: "bash",
        content:
          "npm install i18next react-i18next\nnpm install react-native-localize",
      },
      {
        type: "heading",
        content: "2. Organize translation files",
      },
      {
        type: "paragraph",
        content:
          "I maintain separate JSON translation files for each supported language. This keeps translations independent from UI components and makes it easier to add new languages.",
      },
      {
        type: "code",
        language: "text",
        content:
          "src/\n  localization/\n    index.ts\n    locales/\n      en.json\n      hi.json\n      fr.json\n  components/\n  features/\n  navigation/\n  App.tsx",
      },
      {
        type: "heading",
        content: "3. Define translation files",
      },
      {
        type: "code",
        language: "json",
        content:
          '// locales/en.json\n{\n  "welcome": "Welcome",\n  "login": "Login",\n  "logout": "Logout",\n  "greeting": "Hello, {{name}}"\n}\n\n// locales/hi.json\n{\n  "welcome": "स्वागत है",\n  "login": "लॉग इन करें",\n  "logout": "लॉग आउट करें",\n  "greeting": "नमस्ते, {{name}}"\n}',
      },
      {
        type: "heading",
        content: "4. Configure i18next",
      },
      {
        type: "paragraph",
        content:
          "I configure i18next with the supported languages, fallback language, and device locale detection. If the device language is not supported, the application falls back to English.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "import i18n from 'i18next';\nimport { initReactI18next } from 'react-i18next';\nimport * as RNLocalize from 'react-native-localize';\n\nimport en from './locales/en.json';\nimport hi from './locales/hi.json';\nimport fr from './locales/fr.json';\n\nconst resources = {\n  en: { translation: en },\n  hi: { translation: hi },\n  fr: { translation: fr },\n};\n\nconst supportedLanguages = Object.keys(resources);\n\nconst deviceLanguage =\n  RNLocalize.getLocales()[0]?.languageCode ?? 'en';\n\nconst initialLanguage = supportedLanguages.includes(deviceLanguage)\n  ? deviceLanguage\n  : 'en';\n\ni18n\n  .use(initReactI18next)\n  .init({\n    resources,\n    lng: initialLanguage,\n    fallbackLng: 'en',\n    compatibilityJSON: 'v4',\n    interpolation: {\n      escapeValue: false,\n    },\n  });\n\nexport default i18n;",
      },
      {
        type: "callout",
        title: "Important",
        content:
          "Import the localization configuration once, before rendering the application. For production apps, I also consider region-specific locales such as en-US and en-GB rather than relying only on language codes.",
        tone: "info",
      },
      {
        type: "heading",
        content: "5. Use translations inside components",
      },
      {
        type: "paragraph",
        content:
          "I use the useTranslation hook instead of hardcoding text inside components. This makes the UI automatically respond when the selected language changes.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          "import React from 'react';\nimport { View, Text, Button } from 'react-native';\nimport { useTranslation } from 'react-i18next';\n\nconst HomeScreen = () => {\n  const { t } = useTranslation();\n\n  return (\n    <View>\n      <Text>{t('welcome')}</Text>\n      <Button title={t('login')} onPress={() => {}} />\n    </View>\n  );\n};\n\nexport default HomeScreen;",
      },
      {
        type: "heading",
        content: "6. Handle language switching dynamically",
      },
      {
        type: "paragraph",
        content:
          "If users want to change the language manually, I provide a language-selection screen. I call i18n.changeLanguage() and persist the selected language so the preference is retained after restarting the application.",
      },
      {
        type: "code",
        language: "bash",
        content: "npm install @react-native-async-storage/async-storage",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "import AsyncStorage from '@react-native-async-storage/async-storage';\nimport i18n from './index';\n\nconst LANGUAGE_KEY = 'app_language';\n\nexport const changeLanguage = async (language: string) => {\n  await i18n.changeLanguage(language);\n  await AsyncStorage.setItem(LANGUAGE_KEY, language);\n};\n\nexport const loadSavedLanguage = async () => {\n  const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);\n\n  if (savedLanguage) {\n    await i18n.changeLanguage(savedLanguage);\n  }\n};",
      },
      {
        type: "paragraph",
        content:
          "I call loadSavedLanguage() during application startup and wait for it to complete before rendering the main UI. In a production implementation, I validate the saved language against the supported-language list before applying it.",
      },
      {
        type: "heading",
        content: "7. Handle pluralization and dynamic values",
      },
      {
        type: "paragraph",
        content:
          "Different languages have different pluralization rules. I use i18next's pluralization support instead of manually checking whether a count is one or greater than one.",
      },
      {
        type: "code",
        language: "json",
        content:
          '{\n  "items_one": "{{count}} item",\n  "items_other": "{{count}} items"\n}',
      },
      {
        type: "code",
        language: "tsx",
        content:
          "const { t } = useTranslation();\n\n<Text>{t('items', { count: 1 })}</Text>\n<Text>{t('items', { count: 5 })}</Text>",
      },
      {
        type: "heading",
        content: "8. Handle date, time, number, and currency formats",
      },
      {
        type: "paragraph",
        content:
          "Translations alone are not sufficient. I use the JavaScript Intl APIs to format dates, numbers, and currencies according to the selected locale.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "const locale = 'en-IN';\n\nconst date = new Intl.DateTimeFormat(locale, {\n  day: '2-digit',\n  month: 'long',\n  year: 'numeric',\n}).format(new Date());\n\nconst amount = new Intl.NumberFormat(locale, {\n  style: 'currency',\n  currency: 'INR',\n}).format(25000);\n\nconst number = new Intl.NumberFormat(locale).format(150000);\n\nconsole.log(date);\nconsole.log(amount);\nconsole.log(number);",
      },
      {
        type: "heading",
        content: "9. Handle right-to-left (RTL) languages",
      },
      {
        type: "paragraph",
        content:
          "Languages such as Arabic and Hebrew require right-to-left layouts. I use I18nManager to detect and configure RTL support, and I avoid hardcoding left and right positioning in styles.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "import { I18nManager } from 'react-native';\n\n// Run when applying a language that changes layout direction.\nI18nManager.allowRTL(true);\nI18nManager.forceRTL(isRTL);\n\n// A reload may be required for the layout direction to take effect.",
      },
      {
        type: "paragraph",
        content:
          "I prefer logical layout properties such as start and end instead of left and right wherever supported. RTL changes should be tested carefully because forcing RTL may require an application restart and can affect navigation, icons, and animations.",
      },
      {
        type: "heading",
        content: "10. Localization best practices",
      },
      {
        type: "list",
        content: [
          "Never hardcode user-facing text inside components.",
          "Keep translations in separate locale files.",
          "Use a fallback language for missing translations.",
          "Persist the user's language preference.",
          "Support pluralization and interpolation for dynamic content.",
          "Format dates, numbers, and currencies using locale-aware APIs.",
          "Avoid concatenating translated strings because word order differs between languages.",
          "Use flexible layouts to accommodate longer translated text.",
          "Test RTL languages and different screen sizes.",
          "Use translation validation tools and native-speaker reviews before production releases.",
        ],
      },
      {
        type: "heading",
        content: "11. Localization execution flow",
      },
      {
        type: "diagram",
        title: "React Native localization flow",
        nodes: [
          {
            label: "Application Startup",
            detail: "Initialize i18next and load saved preferences.",
          },
          {
            label: "Detect Language",
            detail: "Read device locale or user's saved language.",
          },
          {
            label: "Select Translation",
            detail: "Load the matching JSON resource or fallback language.",
          },
          {
            label: "Render UI",
            detail: "Components display translated text using t().",
          },
          {
            label: "Change Language",
            detail: "Update i18next and persist the user's selection.",
          },
        ],
        note: "The translation hook subscribes to language changes, allowing components using translations to re-render when the language changes.",
      },
      {
        type: "heading",
        content: "12. Interview Answer",
      },
      {
        type: "callout",
        title: "How I handle localization in React Native",
        content:
          "I handle localization using i18next and react-i18next, along with react-native-localize to detect the device language. I maintain separate JSON translation files for supported languages and use the useTranslation hook to display translated content instead of hardcoding strings. I support fallback languages, dynamic language switching, and persist the user's preference using AsyncStorage. I also handle pluralization, date and currency formatting using Intl APIs, and RTL layouts for languages such as Arabic. Finally, I test translations across different screen sizes and validate missing keys before releasing the application.",
      },
    ],
    references: [
      {
        label: "i18next Documentation",
        href: "https://www.i18next.com/",
      },
      {
        label: "react-i18next Documentation",
        href: "https://react.i18next.com/",
      },
      {
        label: "React Native I18nManager",
        href: "https://reactnative.dev/docs/i18nmanager",
      },
      {
        label: "React Native Localize",
        href: "https://github.com/zoontek/react-native-localize",
      },
    ],
  },
  {
    id: "rn-realtime-updates-001",
    question: "How do you handle real-time updates in React Native?",
    topic: "Architecture & system design",
    answer: [
      {
        type: "paragraph",
        content:
          "I handle real-time updates in React Native using technologies such as WebSockets, Socket.IO, Firebase Realtime Database, or Firestore, depending on the application requirements. Real-time communication allows the application to receive server-side changes immediately without continuously polling the backend.",
      },
      {
        type: "heading",
        content: "1. Choose the appropriate real-time technology",
      },
      {
        type: "table",
        content: [
          ["Technology", "How it works", "Use cases"],
          [
            "WebSocket",
            "Provides persistent, two-way communication between client and server.",
            "Live tracking, chat, dashboards.",
          ],
          [
            "Socket.IO",
            "Provides event-based communication with reconnection and fallback mechanisms.",
            "Chat applications, notifications, live status.",
          ],
          [
            "Firebase Realtime Database",
            "Synchronizes data between connected clients in real time.",
            "Live status, collaborative data.",
          ],
          [
            "Cloud Firestore",
            "Uses snapshot listeners to deliver document and query changes.",
            "Live feeds, order updates.",
          ],
          [
            "Server-Sent Events (SSE)",
            "Provides a server-to-client event stream over HTTP.",
            "Live feeds, monitoring dashboards.",
          ],
          [
            "Polling",
            "Periodically requests updated data from the backend.",
            "Simple status updates when real-time infrastructure is unavailable.",
          ],
        ],
      },
      {
        type: "heading",
        content: "2. WebSocket implementation using Socket.IO",
      },
      {
        type: "paragraph",
        content:
          "For applications requiring two-way communication, I can use Socket.IO. The client establishes a connection with the backend and listens for events such as new messages, order status changes, or live tracking updates.",
      },
      {
        type: "code",
        language: "bash",
        content: "npm install socket.io-client",
      },
      {
        type: "heading",
        content: "3. Create a reusable socket service",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "import { io, Socket } from 'socket.io-client';\n\nlet socket: Socket | null = null;\n\nexport const connectSocket = (token: string) => {\n  if (socket?.connected) return socket;\n\n  socket = io('https://api.example.com', {\n    transports: ['websocket'],\n    auth: { token },\n    reconnection: true,\n    reconnectionAttempts: Infinity,\n    reconnectionDelay: 1000,\n    reconnectionDelayMax: 5000,\n  });\n\n  socket.on('connect', () => {\n    console.log('Socket connected:', socket?.id);\n  });\n\n  socket.on('disconnect', (reason) => {\n    console.log('Socket disconnected:', reason);\n  });\n\n  socket.on('connect_error', (error) => {\n    console.log('Socket connection error:', error.message);\n  });\n\n  return socket;\n};\n\nexport const getSocket = () => socket;\n\nexport const disconnectSocket = () => {\n  socket?.disconnect();\n  socket = null;\n};",
      },
      {
        type: "paragraph",
        content:
          "I keep the socket connection in a centralized service rather than creating a new connection inside every screen. In production, I also handle authentication expiry, token refresh, and connection cleanup.",
      },
      {
        type: "heading",
        content: "4. Listen to real-time events in a component",
      },
      {
        type: "paragraph",
        content:
          "I subscribe to the required events inside useEffect and remove the event listener during cleanup. This prevents duplicate listeners and memory leaks when users navigate between screens.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          "import React, { useEffect, useState } from 'react';\nimport { View, Text } from 'react-native';\nimport { getSocket } from './socketService';\n\ntype Order = {\n  id: string;\n  status: string;\n};\n\nconst OrderScreen = () => {\n  const [order, setOrder] = useState<Order | null>(null);\n\n  useEffect(() => {\n    const socket = getSocket();\n    if (!socket) return;\n\n    const handleOrderUpdate = (updatedOrder: Order) => {\n      setOrder(updatedOrder);\n    };\n\n    socket.on('order:update', handleOrderUpdate);\n\n    return () => {\n      socket.off('order:update', handleOrderUpdate);\n    };\n  }, []);\n\n  return (\n    <View>\n      <Text>Order Status: {order?.status ?? 'Loading'}</Text>\n    </View>\n  );\n};\n\nexport default OrderScreen;",
      },
      {
        type: "heading",
        content: "5. Emit events from React Native",
      },
      {
        type: "paragraph",
        content:
          "The client can also send events to the backend. For example, when a user sends a chat message or changes an order-related action, the application emits an event to the server.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "import { getSocket } from './socketService';\n\nexport const sendMessage = (message: string) => {\n  const socket = getSocket();\n\n  if (!socket?.connected) {\n    throw new Error('Socket is not connected');\n  }\n\n  socket.emit('chat:send', {\n    message,\n    sentAt: new Date().toISOString(),\n  });\n};",
      },
      {
        type: "paragraph",
        content:
          "For important operations, I prefer server acknowledgements, message IDs, and retry-safe APIs instead of assuming that emitting an event means the server successfully processed it.",
      },
      {
        type: "heading",
        content: "6. Handle connection lifecycle and reconnection",
      },
      {
        type: "paragraph",
        content:
          "Mobile networks are unstable. A user may switch between Wi-Fi and mobile data, lose connectivity, or move the application into the background. I monitor the connection state and make sure the application can recover gracefully.",
      },
      {
        type: "list",
        content: [
          "Use automatic reconnection with exponential backoff and jitter.",
          "Listen for connect, disconnect, and connection-error events.",
          "Refresh expired authentication tokens before reconnecting.",
          "Rejoin required rooms or channels after reconnection.",
          "Fetch missed updates using a last-event ID, sequence number, or timestamp.",
          "Avoid opening multiple socket connections for the same user session.",
          "Clean up listeners and connections when they are no longer required.",
        ],
      },
      {
        type: "callout",
        title: "Important mobile limitation",
        content:
          "A WebSocket connection is not guaranteed to remain active when an application is backgrounded or terminated. For background notifications, I use push notifications such as Firebase Cloud Messaging (FCM), and synchronize the latest data when the application becomes active again.",
        tone: "caution",
      },
      {
        type: "heading",
        content: "7. Handle real-time updates using Firebase",
      },
      {
        type: "paragraph",
        content:
          "If the application already uses Firebase, I can use Firestore snapshot listeners or Firebase Realtime Database listeners instead of maintaining a custom WebSocket backend.",
      },
      {
        type: "code",
        language: "bash",
        content:
          "npm install @react-native-firebase/app @react-native-firebase/firestore",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "import firestore from '@react-native-firebase/firestore';\n\nexport const subscribeToOrder = (\n  orderId: string,\n  onUpdate: (data: any) => void\n) => {\n  return firestore()\n    .collection('orders')\n    .doc(orderId)\n    .onSnapshot((document) => {\n      if (document.exists) {\n        onUpdate({\n          id: document.id,\n          ...document.data(),\n        });\n      }\n    });\n};\n\n// Usage inside a component:\nuseEffect(() => {\n  const unsubscribe = subscribeToOrder(orderId, setOrder);\n\n  return unsubscribe;\n}, [orderId]);",
      },
      {
        type: "paragraph",
        content:
          "The onSnapshot listener immediately provides the current document state and then notifies the application when that document changes. I unsubscribe when the screen or subscription is no longer needed.",
      },
      {
        type: "heading",
        content: "8. Manage real-time data with global state",
      },
      {
        type: "paragraph",
        content:
          "For larger applications, I avoid updating multiple screens independently. I maintain a centralized data flow using Redux Toolkit, Zustand, or another suitable state-management solution. The socket event updates the store, and subscribed components render the latest state.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// Example with Zustand\nimport { create } from 'zustand';\n\ntype OrderState = {\n  status: string;\n  updateStatus: (status: string) => void;\n};\n\nexport const useOrderStore = create<OrderState>((set) => ({\n  status: 'pending',\n  updateStatus: (status) => set({ status }),\n}));\n\n// Register this listener once in the socket lifecycle manager.\nsocket.on('order:update', (data) => {\n  useOrderStore.getState().updateStatus(data.status);\n});\n\n// Any subscribed component can read the latest value.\nconst status = useOrderStore((state) => state.status);",
      },
      {
        type: "paragraph",
        content:
          "I keep server-owned data separate from temporary UI state. For high-frequency updates, I also avoid unnecessary updates to unrelated components by selecting only the required state.",
      },
      {
        type: "heading",
        content: "9. Handle application foreground and background states",
      },
      {
        type: "paragraph",
        content:
          "I use AppState from React Native to detect when the application moves between active, background, and inactive states. On returning to the foreground, I verify the connection and synchronize any missed data.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          "import { AppState } from 'react-native';\nimport { useEffect } from 'react';\nimport { connectSocket, getSocket } from './socketService';\n\nuseEffect(() => {\n  const subscription = AppState.addEventListener(\n    'change',\n    (nextState) => {\n      if (nextState === 'active') {\n        if (!getSocket()?.connected) {\n          connectSocket(authToken);\n        }\n\n        // Fetch latest data to recover missed updates.\n        refreshOrders();\n      }\n    }\n  );\n\n  return () => subscription.remove();\n}, [authToken]);",
      },
      {
        type: "paragraph",
        content:
          "I do not rely only on socket events for data consistency. When the app resumes, I fetch the latest server state because events may have been missed while the application was suspended or disconnected.",
      },
      {
        type: "heading",
        content: "10. Optimize real-time performance",
      },
      {
        type: "list",
        content: [
          "Subscribe only to events required by the current feature.",
          "Use rooms or channels to receive relevant updates instead of broadcasting everything.",
          "Batch or throttle high-frequency updates such as GPS coordinates.",
          "Use FlatList virtualization for large live lists.",
          "Keep event payloads small and send only changed fields when appropriate.",
          "Avoid unnecessary React state updates and broad global-store subscriptions.",
          "Use timestamps or sequence numbers to prevent stale events from overwriting newer data.",
          "Implement pagination and unsubscribe from inactive data streams.",
        ],
      },
      {
        type: "heading",
        content: "11. Real-world example: Live logistics tracking",
      },
      {
        type: "paragraph",
        content:
          "For a logistics application, real-time updates can be used to track a truck's location, delivery status, and payment status. The driver application sends location updates to the backend, and the server distributes relevant updates to authorized customer applications.",
      },
      {
        type: "diagram",
        title: "Real-time tracking architecture",
        nodes: [
          {
            label: "Driver App",
            detail: "Sends GPS coordinates and trip status.",
          },
          {
            label: "Backend Server",
            detail: "Validates events and processes business logic.",
          },
          {
            label: "WebSocket / Socket.IO",
            detail: "Distributes updates to authorized users or rooms.",
          },
          {
            label: "Customer App",
            detail: "Receives updates and refreshes map and trip status.",
          },
          {
            label: "Push Notifications",
            detail: "Notifies users when the app is backgrounded or offline.",
          },
        ],
        note: "The backend remains the source of truth. On reconnect or app resume, the client synchronizes the latest trip state.",
      },
      {
        type: "heading",
        content: "12. Security and reliability considerations",
      },
      {
        type: "list",
        content: [
          "Authenticate socket connections using secure tokens.",
          "Authorize room subscriptions on the backend; never trust client-provided user or room IDs.",
          "Use HTTPS/WSS and avoid sending sensitive information in event payloads.",
          "Validate event payloads on both client and server.",
          "Use event IDs and idempotency to prevent duplicate processing.",
          "Handle token expiry, reconnect failures, and server-side disconnects.",
          "Apply rate limits and validate high-frequency events such as location updates.",
        ],
      },
      {
        type: "heading",
        content: "13. Interview Answer",
      },
      {
        type: "callout",
        title: "How I handle real-time updates in React Native",
        content:
          "I handle real-time updates using WebSockets or Socket.IO when the application requires two-way communication. I create a centralized socket service to manage connections, authentication, event listeners, and reconnection. I listen to server events and update the required application state using Zustand or Redux Toolkit so that subscribed components receive the latest data. If the application uses Firebase, I can also use Firestore snapshot listeners. Since mobile applications can lose connectivity or enter the background, I handle reconnection, AppState changes, and data synchronization when the app becomes active. For background notifications, I use FCM. I also focus on security, listener cleanup, performance, and preventing duplicate or stale updates.",
      },
    ],
    references: [
      {
        label: "React Native AppState",
        href: "https://reactnative.dev/docs/appstate",
      },
      {
        label: "Socket.IO Client Documentation",
        href: "https://socket.io/docs/v4/client-api/",
      },
      {
        label: "Firebase Firestore Real-time Updates",
        href: "https://firebase.google.com/docs/firestore/query-data/listen",
      },
      {
        label: "Firebase Cloud Messaging",
        href: "https://firebase.google.com/docs/cloud-messaging",
      },
    ],
  },
  {
    id: "rn-reusable-components-001",
    question: "How do you design reusable components in React Native?",
    topic: "Architecture & system design",
    answer: [
      {
        type: "paragraph",
        content:
          "I design reusable components by following the principles of component-based architecture, separation of concerns, consistency, and single responsibility. Instead of writing the same UI logic repeatedly across screens, I create common components that can be configured through props and reused across multiple features.",
      },
      {
        type: "heading",
        content: "1. Identify common UI elements",
      },
      {
        type: "paragraph",
        content:
          "First, I identify UI elements that are repeated across multiple screens. I move these elements into a shared components directory and make them configurable through props.",
      },
      {
        type: "list",
        content: [
          "Buttons: Primary, secondary, outlined, disabled, and loading states.",
          "Input fields: Text input, password input, validation, and error messages.",
          "Cards: Product cards, order cards, and profile cards.",
          "Headers: Common navigation headers and screen titles.",
          "Modals: Confirmation dialogs, alerts, and bottom sheets.",
          "Loaders: Full-screen loaders and inline loading indicators.",
          "Lists: Reusable FlatList components with empty and loading states.",
        ],
      },
      {
        type: "heading",
        content: "2. Follow a scalable folder structure",
      },
      {
        type: "code",
        language: "text",
        content:
          "src/\n  components/\n    common/\n      Button/\n        Button.tsx\n        Button.styles.ts\n        Button.types.ts\n        index.ts\n      Input/\n        Input.tsx\n        Input.styles.ts\n        Input.types.ts\n        index.ts\n      Loader/\n        Loader.tsx\n      Card/\n        Card.tsx\n  features/\n    auth/\n      components/\n      screens/\n    products/\n      components/\n      screens/\n  theme/\n    colors.ts\n    spacing.ts\n    typography.ts\n  hooks/\n  utils/",
      },
      {
        type: "paragraph",
        content:
          "I separate globally reusable components from feature-specific components. For example, a common Button belongs in the shared components directory, while a ProductPriceCard used only in the products feature should remain inside that feature.",
      },
      {
        type: "heading",
        content: "3. Design components using props",
      },
      {
        type: "paragraph",
        content:
          "I use TypeScript interfaces to define clear component contracts. Props allow the same component to support different labels, variants, sizes, states, and callbacks without duplicating implementation.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          "import React from 'react';\nimport {\n  ActivityIndicator,\n  Pressable,\n  Text,\n  StyleSheet,\n} from 'react-native';\n\ntype ButtonProps = {\n  title: string;\n  variant?: 'primary' | 'secondary' | 'outline';\n  disabled?: boolean;\n  loading?: boolean;\n  onPress: () => void;\n};\n\nconst Button = ({\n  title,\n  variant = 'primary',\n  disabled = false,\n  loading = false,\n  onPress,\n}: ButtonProps) => {\n  const isDisabled = disabled || loading;\n\n  return (\n    <Pressable\n      onPress={onPress}\n      disabled={isDisabled}\n      style={[\n        styles.button,\n        variant === 'primary' && styles.primary,\n        variant === 'secondary' && styles.secondary,\n        variant === 'outline' && styles.outline,\n        isDisabled && styles.disabled,\n      ]}\n    >\n      {loading ? (\n        <ActivityIndicator color=\"#FFFFFF\" />\n      ) : (\n        <Text style={styles.text}>{title}</Text>\n      )}\n    </Pressable>\n  );\n};\n\nconst styles = StyleSheet.create({\n  button: {\n    padding: 14,\n    borderRadius: 8,\n    alignItems: 'center',\n  },\n  primary: { backgroundColor: '#2563EB' },\n  secondary: { backgroundColor: '#64748B' },\n  outline: {\n    backgroundColor: 'transparent',\n    borderWidth: 1,\n    borderColor: '#2563EB',\n  },\n  disabled: { opacity: 0.5 },\n  text: { color: '#FFFFFF', fontWeight: '600' },\n});\n\nexport default Button;",
      },
      {
        type: "heading",
        content: "4. Reuse the component across screens",
      },
      {
        type: "paragraph",
        content:
          "Once the component is created, I use it across different screens by passing different props. The component implementation remains the same while its behavior and appearance can be customized.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          '// Login screen\n<Button\n  title="Login"\n  variant="primary"\n  onPress={handleLogin}\n/>\n\n// Signup screen\n<Button\n  title="Create Account"\n  variant="secondary"\n  onPress={handleSignup}\n/>\n\n// Save action\n<Button\n  title="Save Changes"\n  variant="outline"\n  loading={isSaving}\n  onPress={handleSave}\n/>',
      },
      {
        type: "heading",
        content: "5. Use theme-based styling",
      },
      {
        type: "paragraph",
        content:
          "I avoid hardcoding colors, spacing, font sizes, and border radii inside reusable components. Instead, I use centralized design tokens or a theme provider. This makes it easier to support light mode, dark mode, and multiple branding requirements.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "export const lightTheme = {\n  colors: {\n    primary: '#2563EB',\n    background: '#FFFFFF',\n    text: '#111827',\n    border: '#D1D5DB',\n  },\n  spacing: {\n    small: 8,\n    medium: 16,\n    large: 24,\n  },\n};",
      },
      {
        type: "paragraph",
        content:
          "A reusable component can consume these values through a useTheme hook, ensuring consistent styling throughout the application.",
      },
      {
        type: "heading",
        content: "6. Keep components focused on a single responsibility",
      },
      {
        type: "paragraph",
        content:
          "I follow the single responsibility principle. A reusable Button should handle button presentation and interaction, not API calls, authentication logic, or navigation decisions. Business logic stays in feature hooks, services, or screen-level containers.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          '// Good: UI component only handles presentation\nconst UserCard = ({\n  name,\n  email,\n  onPress,\n}: {\n  name: string;\n  email: string;\n  onPress: () => void;\n}) => (\n  <Pressable onPress={onPress}>\n    <Text>{name}</Text>\n    <Text>{email}</Text>\n  </Pressable>\n);\n\n// Screen owns business behavior\nconst ProfileScreen = () => {\n  const handleUserPress = () => {\n    // Navigate or perform feature-specific action\n  };\n\n  return (\n    <UserCard\n      name="Prashant"\n      email="user@example.com"\n      onPress={handleUserPress}\n    />\n  );\n};',
      },
      {
        type: "heading",
        content: "7. Use composition instead of too many props",
      },
      {
        type: "paragraph",
        content:
          "When a component needs highly variable content, I prefer composition using children or clearly defined slots instead of adding many boolean props. This keeps the API flexible and prevents a component from becoming difficult to maintain.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          "import React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\n\ntype CardProps = {\n  title: string;\n  children: React.ReactNode;\n  footer?: React.ReactNode;\n};\n\nconst Card = ({ title, children, footer }: CardProps) => (\n  <View style={styles.card}>\n    <Text style={styles.title}>{title}</Text>\n    <View>{children}</View>\n    {footer && <View>{footer}</View>}\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  card: {\n    padding: 16,\n    borderRadius: 10,\n    backgroundColor: '#FFFFFF',\n  },\n  title: {\n    fontSize: 18,\n    fontWeight: '600',\n  },\n});\n\nexport default Card;",
      },
      {
        type: "heading",
        content: "8. Optimize reusable components",
      },
      {
        type: "paragraph",
        content:
          "Reusable components should also be performance-friendly. I avoid unnecessary state, expensive calculations, and broad subscriptions inside shared components.",
      },
      {
        type: "list",
        content: [
          "Use React.memo when a component frequently re-renders with unchanged props and profiling shows a benefit.",
          "Use useCallback when stable function references help memoized children avoid unnecessary renders.",
          "Use useMemo for expensive calculations when there is a measurable benefit.",
          "Avoid creating unnecessary objects and functions during rendering when their identity matters to memoized children.",
          "Use FlatList for large collections instead of rendering every item inside a ScrollView.",
          "Keep state close to the component that owns it.",
          "Avoid deeply nested component hierarchies when a simpler composition is possible.",
        ],
      },
      {
        type: "heading",
        content: "9. Handle accessibility and different screen sizes",
      },
      {
        type: "paragraph",
        content:
          "I make reusable components accessible and responsive by default. For interactive elements, I provide accessibility labels, roles, and appropriate states. I also support dynamic text sizes, flexible layouts, and different screen dimensions.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          '<Pressable\n  accessibilityRole="button"\n  accessibilityLabel="Submit form"\n  accessibilityState={{ disabled: false }}\n  onPress={handleSubmit}\n  style={{ minHeight: 48, paddingHorizontal: 16 }}\n>\n  <Text>Submit</Text>\n</Pressable>',
      },
      {
        type: "heading",
        content: "10. Test reusable components",
      },
      {
        type: "paragraph",
        content:
          "Since shared components are used across multiple features, a defect can affect several screens. I write unit and component tests using Jest and React Native Testing Library.",
      },
      {
        type: "code",
        language: "tsx",
        content:
          "import React from 'react';\nimport { render, fireEvent } from '@testing-library/react-native';\nimport Button from './Button';\n\ntest('renders title and handles press', () => {\n  const onPress = jest.fn();\n\n  const { getByText } = render(\n    <Button title=\"Login\" onPress={onPress} />\n  );\n\n  fireEvent.press(getByText('Login'));\n\n  expect(onPress).toHaveBeenCalledTimes(1);\n});",
      },
      {
        type: "heading",
        content: "11. Reusable component design principles",
      },
      {
        type: "table",
        content: [
          ["Principle", "How I apply it"],
          [
            "Single responsibility",
            "Each component handles one clear UI responsibility.",
          ],
          [
            "Configurability",
            "Use typed props for variants, sizes, and states.",
          ],
          ["Composition", "Use children and slots for flexible content."],
          ["Consistency", "Use shared design tokens and theme values."],
          [
            "Maintainability",
            "Keep business logic outside shared UI components.",
          ],
          ["Performance", "Avoid unnecessary renders and expensive work."],
          [
            "Accessibility",
            "Support labels, roles, states, and scalable text.",
          ],
          ["Testability", "Test behavior, variants, and edge cases."],
        ],
      },
      {
        type: "heading",
        content: "12. Interview Answer",
      },
      {
        type: "callout",
        title: "How I design reusable components in React Native",
        content:
          "I design reusable components by identifying common UI patterns across the application and moving them into a shared component library. I use TypeScript to define clear props and support different variants, sizes, loading states, and callbacks. I follow the single responsibility principle, keeping UI components independent from API calls and business logic. For flexible layouts, I use composition with children, and I maintain consistent styling through centralized theme tokens. I also consider accessibility, responsiveness, performance, and unit testing. This approach reduces code duplication, improves consistency, and makes the application easier to maintain as the number of features grows.",
      },
    ],
    references: [
      {
        label: "React Native Components and APIs",
        href: "https://reactnative.dev/docs/components-and-apis",
      },
      {
        label: "React Documentation - Passing Props",
        href: "https://react.dev/learn/passing-props-to-a-component",
      },
      {
        label: "React Documentation - Passing JSX as Children",
        href: "https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children",
      },
      {
        label: "React Native Testing Library",
        href: "https://callstack.github.io/react-native-testing-library/",
      },
    ],
  },
  {
    id: "how-do-you-prevent-tight-coupling",
    question: "How do you prevent tight coupling?",
    answer: [
      {
        type: "paragraph",
        content:
          "Behavioral + Real Experience (Very Important) Describe a production performance issue you fixed. One production performance issue I faced in a React Native app was related to UI jank and slow screen transitions when loading a property listing screen with hundreds of items and images. Users were experiencing frame drops and occasional freezes, especially on mid-range devices. After profiling the app with Flipper and React DevTools, I discovered that the problem was caused by three main factors: first, the FlatList was rendering too many items at once without proper optimization; second, heavy image loading was happening synchronously on the JS thread; and third, some components were re-rendering unnecessarily due to passing non-memoized functions and objects as props. To fix it, I implemented several optimizations: I switched the listing to use FlatList with initialNumToRender, windowSize, removeClippedSubviews, and getItemLayout for efficient virtualization, which reduced the number of items rendered off-screen. I also used react-native-fast-image to asynchronously load images with caching, offloading decoding from the JS thread. Then, I wrapped expensive components in React.memo and memoized callback functions with useCallback to prevent unnecessary re-renders. Finally, I offloaded some heavy calculations to InteractionManager so that they would run after animations completed, preventing UI blocking. After these changes, the screen became smooth, animations and scrolling were consistent at 60 FPS, and app responsiveness improved significantly across all devices. Monitoring via Flipper showed that the JS thread was no longer blocked, and CPU usage dropped during list rendering. This experience reinforced the importance of profiling, understanding the JS and native thread interaction, optimizing FlatLists, memoizing components, and offloading heavy work in React Native production apps to solve real-world performance issues.",
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
        type: "paragraph",
        content:
          "I mentor junior developers by focusing on knowledge sharing, practical guidance, code quality, problem-solving skills, and gradually increasing their ownership of tasks. My goal is not just to help them complete assigned tasks but to make them independent developers who can understand requirements, design solutions, debug issues, and deliver features confidently.",
      },
      {
        type: "heading",
        content: "1. Understand their skill level",
      },
      {
        type: "paragraph",
        content:
          "Before mentoring, I understand each developer's strengths, weaknesses, experience, and familiarity with the project. Based on that, I create a learning path and assign tasks according to their current capabilities.",
      },
      {
        type: "list",
        content: [
          "Evaluate knowledge of JavaScript, TypeScript, React, and React Native.",
          "Understand their knowledge of components, hooks, state management, and navigation.",
          "Check their understanding of REST APIs, asynchronous operations, and debugging.",
          "Identify gaps in architecture, performance optimization, and testing.",
          "Set achievable short-term learning goals.",
        ],
      },
      {
        type: "heading",
        content: "2. Follow a structured onboarding process",
      },
      {
        type: "paragraph",
        content:
          "I introduce junior developers to the project architecture, coding standards, development environment, Git workflow, API integration, and release process before assigning complex development tasks.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Project understanding",
            content:
              "Explain the application flow, business requirements, features, and overall architecture.",
          },
          {
            heading: "Development environment",
            content:
              "Help them configure React Native, Android Studio, Xcode where applicable, dependencies, and environment variables.",
          },
          {
            heading: "Codebase walkthrough",
            content:
              "Explain folder structure, reusable components, navigation, state management, API services, and native integrations.",
          },
          {
            heading: "Coding standards",
            content:
              "Explain naming conventions, TypeScript practices, error handling, Git branching, and pull request guidelines.",
          },
          {
            heading: "First development task",
            content:
              "Assign a small feature or bug fix so they can understand the complete development workflow.",
          },
        ],
      },
      {
        type: "heading",
        content: "3. Assign tasks progressively",
      },
      {
        type: "paragraph",
        content:
          "I follow a gradual responsibility model. Initially, I assign smaller tasks and then move toward complete feature ownership as their confidence and technical understanding improve.",
      },
      {
        type: "table",
        content: [
          ["Level", "Task examples", "Expected outcome"],
          [
            "Beginner",
            "UI changes, reusable components, simple bug fixes",
            "Understand project structure and coding standards",
          ],
          [
            "Intermediate",
            "REST API integration, forms, navigation, state management",
            "Implement features independently",
          ],
          [
            "Advanced",
            "Complete feature development, unit testing, performance improvements",
            "Take ownership of features",
          ],
          [
            "Independent",
            "Architecture decisions, code reviews, technical discussions",
            "Contribute to technical decisions and support others",
          ],
        ],
      },
      {
        type: "heading",
        content: "4. Use code reviews as a learning opportunity",
      },
      {
        type: "paragraph",
        content:
          "I review their pull requests carefully and explain why a particular implementation should be improved instead of simply asking them to change the code. I focus on maintainability, readability, performance, reusability, and best practices.",
      },
      {
        type: "list",
        content: [
          "Check code readability and naming conventions.",
          "Identify duplicated logic and opportunities for reusable components.",
          "Review TypeScript types and avoid unnecessary use of any.",
          "Check API error handling and loading states.",
          "Identify unnecessary React re-renders and performance issues.",
          "Verify edge cases and test coverage.",
          "Explain alternative approaches and their trade-offs.",
        ],
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// Instead of accepting an untyped API response\nconst getUser = async (id: string): Promise<any> => {\n  const response = await api.get(`/users/${id}`);\n  return response.data;\n};\n\n// Prefer defining a clear response type\ntype User = {\n  id: string;\n  name: string;\n  email: string;\n};\n\nconst getUser = async (id: string): Promise<User> => {\n  const response = await api.get<User>(`/users/${id}`);\n  return response.data;\n};",
      },
      {
        type: "paragraph",
        content:
          "For example, if a junior developer uses any for API responses, I explain how TypeScript interfaces or types improve compile-time safety, code completion, and maintainability.",
      },
      {
        type: "heading",
        content:
          "5. Encourage problem-solving instead of giving direct answers",
      },
      {
        type: "paragraph",
        content:
          "When a junior developer faces an issue, I first ask them to explain what they have tried, what they expected, and what actually happened. Instead of immediately providing the solution, I guide them through debugging and help them identify the root cause.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "Understand the problem",
            content:
              "Ask them to explain the requirement, expected behavior, and actual behavior.",
          },
          {
            heading: "Investigate the issue",
            content:
              "Guide them to check logs, network requests, component state, and error messages.",
          },
          {
            heading: "Identify the root cause",
            content:
              "Help them isolate whether the issue is related to UI rendering, API responses, state management, or native functionality.",
          },
          {
            heading: "Evaluate solutions",
            content:
              "Discuss possible approaches, their advantages, disadvantages, and impact on existing features.",
          },
          {
            heading: "Review the implementation",
            content:
              "Ask them to implement the fix, test edge cases, and explain why their solution works.",
          },
        ],
      },
      {
        type: "heading",
        content: "6. Conduct regular knowledge-sharing sessions",
      },
      {
        type: "paragraph",
        content:
          "I organize short technical discussions to share project knowledge, explain difficult concepts, and discuss common development challenges. I prefer practical examples from our actual codebase rather than only theoretical explanations.",
      },
      {
        type: "list",
        content: [
          "React Native architecture and component lifecycle.",
          "JavaScript event loop, promises, async/await, and closures.",
          "React hooks, state management, and rendering optimization.",
          "REST API integration and error handling.",
          "Android native modules and platform-specific functionality.",
          "Unit testing, debugging, and Git workflows.",
          "Build automation and application release processes.",
        ],
      },
      {
        type: "heading",
        content: "7. Encourage ownership and accountability",
      },
      {
        type: "paragraph",
        content:
          "As developers improve, I encourage them to take ownership of complete features rather than only implementing individual UI components. They should understand the requirement, estimate development effort, implement the feature, test it, and communicate progress.",
      },
      {
        type: "list",
        content: [
          "Encourage developers to participate in requirement discussions.",
          "Ask them to provide realistic development estimates.",
          "Let them take responsibility for assigned features.",
          "Encourage them to identify risks and communicate blockers early.",
          "Involve them in testing and production issue investigation.",
          "Recognize improvements and provide constructive feedback.",
        ],
      },
      {
        type: "heading",
        content: "8. Track progress and provide feedback",
      },
      {
        type: "paragraph",
        content:
          "I conduct regular one-to-one discussions to understand their progress, challenges, and learning goals. I provide specific feedback on technical skills, communication, problem-solving, and task ownership.",
      },
      {
        type: "table",
        content: [
          ["Area", "What I evaluate"],
          [
            "Technical skills",
            "React Native, JavaScript, TypeScript, APIs, and architecture",
          ],
          [
            "Code quality",
            "Readability, reusability, maintainability, and testing",
          ],
          ["Problem-solving", "Debugging approach and root-cause analysis"],
          ["Delivery", "Estimation, task completion, and ownership"],
          [
            "Communication",
            "Progress updates, collaboration, and blocker reporting",
          ],
        ],
      },
      {
        type: "heading",
        content: "9. Real-world example from React Native development",
      },
      {
        type: "paragraph",
        content:
          "Suppose a junior developer is assigned a user profile feature. Initially, I explain the requirement and expected UI behavior. Then I guide them through creating reusable input components, integrating the profile API, managing form state, handling validation, and writing tests. During code review, I explain improvements in TypeScript types, error handling, and component reusability. Once they complete the feature successfully, I assign a more complex feature involving navigation, state management, and API integration.",
      },
      {
        type: "diagram",
        title: "Junior developer mentoring workflow",
        nodes: [
          {
            label: "Assess Skills",
            detail: "Understand technical strengths and knowledge gaps.",
          },
          {
            label: "Explain Architecture",
            detail: "Introduce project structure and coding standards.",
          },
          {
            label: "Assign Tasks",
            detail: "Start with small tasks and gradually increase complexity.",
          },
          {
            label: "Review Code",
            detail: "Provide technical feedback and explain improvements.",
          },
          {
            label: "Track Progress",
            detail: "Conduct discussions and evaluate development.",
          },
          {
            label: "Build Ownership",
            detail:
              "Enable independent feature development and decision-making.",
          },
        ],
        note: "Mentoring is a continuous process. I repeat this cycle with progressively more challenging responsibilities.",
      },
      {
        type: "heading",
        content: "10. Common mistakes to avoid while mentoring",
      },
      {
        type: "list",
        content: [
          "Do not micromanage every implementation detail.",
          "Do not provide solutions without explaining the reasoning.",
          "Do not assign tasks that are significantly beyond their current skill level without support.",
          "Do not discourage developers for making mistakes; use mistakes as learning opportunities.",
          "Do not focus only on coding speed; prioritize code quality and understanding.",
          "Do not delay feedback until performance reviews.",
          "Do not create dependency on one senior developer for every technical decision.",
        ],
      },
      {
        type: "heading",
        content: "11. Interview Answer",
      },
      {
        type: "callout",
        title: "How I mentor junior developers",
        content:
          "I mentor junior developers by first understanding their technical strengths and knowledge gaps. I help them understand the project architecture, coding standards, development workflow, and business requirements. Initially, I assign smaller tasks and gradually increase their responsibilities as they become more confident. I regularly review their pull requests and explain improvements related to code quality, performance, reusability, and TypeScript best practices. When they face technical challenges, I guide them through debugging and root-cause analysis instead of directly giving them solutions. I also conduct knowledge-sharing sessions and regular one-to-one discussions. My ultimate goal is to make them independent developers who can take ownership of features and contribute confidently to the team.",
      },
    ],
    references: [
      {
        label: "Google Engineering Practices - Code Review",
        href: "https://google.github.io/eng-practices/review/",
      },
      {
        label: "Atlassian - Code Review Best Practices",
        href: "https://www.atlassian.com/agile/software-development/code-reviews",
      },
      {
        label: "GitHub - About Pull Requests",
        href: "https://docs.github.com/en/pull-requests",
      },
    ],
    topic: "Team Management & Leadership",
  },
  {
    id: "how-would-you-architect-a-react-native-application-that-needs-to-scale-f",
    question:
      "How would you architect a React Native application that needs to scale from 10 features to 100+ features?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "I would scale the React Native application using feature-based modular architecture rather than organizing everything by file type. 1. Feature-based structure src/ ├── features/ │   ├── auth/ │   ├── payments/ │   ├── orders/ │   └── profile/ ├── core/ │   ├── api/ │   ├── navigation/ │   ├── storage/ │   ├── analytics/ │   └── security/ ├── components/ ├── design-system/ ├── hooks/ ├── utils/ └── config/ 2. Define clear boundaries Each feature owns its screens, hooks, API logic, state and tests. Shared functionality goes into core or design-system. Avoid direct dependencies between unrelated features. 3. State management Local UI state → useState/useReducer Feature state → Zustand/Redux Server state → TanStack Query Persist only data that actually needs persistence. 4. API layer Create a centralized API client with: Authentication/interceptors Error handling Request cancellation Retry policies Response normalization 5. Design system Build reusable: Buttons Inputs Modals Typography Colors Spacing Accessibility primitives This prevents 100+ features from creating inconsistent UI. 6. Navigation Use modular navigation with feature-level navigators instead of maintaining one huge navigation file. 7. Performance Plan for: Lazy loading FlatList optimization Memoization where justified Image caching Avoiding unnecessary global state updates Profiling JS/UI thread performance 8. Testing Each feature should have: Unit tests Component tests Integration tests Critical E2E flows 9. CI/CD and quality gates Automate: lint → type-check → tests → build → security checks → deployment 10. Scalability principle The key is to make features independently developable, testable, and removable without affecting the rest of the application. For 100+ features, I would also consider monorepo/package-level modularization if the team and codebase become large enough.",
      },
      {
        type: "diagram",
        title: "Scalable feature architecture",
        nodes: [
          {
            label: "App shell",
            detail: "Navigation, startup, environment config",
          },
          {
            label: "Feature modules",
            detail: "Each owns UI, state, API calls, and domain rules",
          },
          {
            label: "Shared contracts",
            detail: "Design system, platform adapters, common services",
          },
          {
            label: "Data layer",
            detail: "API clients, local repository, cache and sync",
          },
          {
            label: "Delivery pipeline",
            detail: "Checks, builds, release controls and telemetry",
          },
        ],
        note: "Keep feature dependencies flowing through small public interfaces.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-do-you-decide-when-a-react-native-application-needs-modularization",
    question:
      "How do you decide when a React Native application needs modularization?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "I look for complexity and team scalability, not just project size. I would modularize when: Features become tightly coupled and changes in one feature affect others. The codebase develops large shared files/components that are difficult to maintain. Multiple developers/teams frequently create merge conflicts. Feature ownership becomes unclear. Build/test times start increasing significantly. Business domains can be clearly separated, such as auth, payments, orders, profile. Features need to be developed, tested, or released independently. Reusable functionality is duplicated across multiple features. Interview line: “I don't modularize based on the number of screens. I modularize when the codebase has clear domain boundaries, ownership problems, coupling, or team-scaling issues. The goal is to create independent, maintainable modules without introducing unnecessary complexity.”",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-structure-a-large-react-native-codebase-used-by-multiple-d",
    question:
      "How would you structure a large React Native codebase used by multiple development teams?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "I would use a domain/feature-based architecture with clear ownership boundaries. src/ ├── features/ │   ├── auth/ │   ├── payments/ │   ├── orders/ │   └── profile/ │ ├── shared/ │   ├── components/ │   ├── hooks/ │   ├── utils/ │   └── types/ │ ├── core/ │   ├── api/ │   ├── navigation/ │   ├── storage/ │   ├── analytics/ │   └── security/ │ └── design-system/ Each team owns specific features/domains. Features should have minimal dependency on each other. core contains infrastructure; shared contains genuinely reusable code. Establish dependency rules so one feature cannot directly access another feature's internals. Use TypeScript with strict typing and shared contracts. For a very large organization, move independent domains into workspace packages/monorepo modules. Enforce standards through ESLint, TypeScript, tests, CI/CD and code ownership. Interview line: “My primary goal is to make team boundaries match code boundaries, so teams can develop and test their features independently without creating coupling or merge conflicts.”",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-design-communication-between-independent-feature-modules",
    question:
      "How would you design communication between independent feature modules?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Use well-defined interfaces/contracts rather than direct internal imports. Shared services/interfaces for common operations. Navigation for user-flow communication. Event bus only for loosely coupled cross-cutting events. Shared state only when truly necessary. Prevent direct access to another feature's internals. Rule: Feature A should depend on Feature B's public contract, not its implementation.",
      },
    ],
  },
  {
    id: "how-would-you-handle-shared-utilities-components-hooks-and-services-acro",
    question:
      "How would you handle shared utilities, components, hooks, and services across multiple modules?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Create a shared layer for genuinely reusable code. shared/ ├── components/ ├── hooks/ ├── utils/ ├── services/ └── types/ components → reusable UI hooks → reusable behavior utils → pure utilities services → common infrastructure Avoid putting feature-specific logic into shared. If something is shared by only one feature, keep it inside that feature.",
      },
    ],
  },
  {
    id: "how-would-you-design-a-react-native-app-where-android-and-ios-have-signi",
    question:
      "How would you design a React Native app where Android and iOS have significantly different business requirements?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Keep common business logic shared, while isolating platform-specific behavior. features/payment/ ├── Payment.ts ├── Payment.android.ts └── Payment.ios.ts Use: Platform-specific files Platform.select Native modules when required Shared domain models and interfaces Don't force identical implementations when the platform requirements are genuinely different.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-migrate-a-large-existing-react-native-application-without-",
    question:
      "How would you migrate a large existing React Native application without stopping feature development?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Use incremental migration, not a big-bang rewrite. Identify boundaries and technical debt. Introduce the target architecture alongside the existing one. Migrate one feature at a time. Keep old and new modules interoperable. Add tests around migrated areas. Remove legacy code after migration. Use feature flags for risky changes. Strangler pattern: gradually replace the old architecture while development continues.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-identify-architectural-bottlenecks-in-a-react-native-appli",
    question:
      "How would you identify architectural bottlenecks in a React Native application?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "I would measure before changing architecture. Check: JS/UI thread performance Rendering and re-render frequency Startup time Memory usage Network/API latency Navigation performance Bundle size Native bridge/JS communication Build time Crash and ANR rates Use profiling, production monitoring and performance traces to identify the actual bottleneck.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "when-would-you-choose-native-modules-over-implementing-functionality-ent",
    question:
      "When would you choose native modules over implementing functionality entirely in JavaScript?",
    topic: "Native & tooling",
    answer: [
      {
        type: "paragraph",
        content:
          "When functionality requires: Platform APIs unavailable in RN High-performance native processing Background execution Bluetooth/NFC/call handling Deep OS integration Existing native SDKs Real-time processing Use JavaScript for business logic and UI when possible; use native code when platform capabilities or performance require it.",
      },
    ],
  },
  {
    id: "how-would-you-design-a-react-native-application-that-needs-extensive-nat",
    question:
      "How would you design a React Native application that needs extensive native Android and iOS integrations?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Create a native integration layer behind stable TypeScript interfaces. React Native ↓ TypeScript Interface ↓ Native Module ↙     ↘ Android   iOS Kotlin    Swift Keep: Native code responsible for OS integration. JS responsible for UI/business orchestration. Platform differences hidden behind common interfaces.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-decide-whether-a-feature-should-be-implemented-in-react-na",
    question:
      "How would you decide whether a feature should be implemented in React Native, Kotlin/Java, or Swift/Objective-C?",
    topic: "Native & tooling",
    answer: [
      {
        type: "paragraph",
        content:
          "I evaluate: Does RN provide the required API? Is performance critical? Does it require OS-level/background functionality? Is there an existing native SDK? Is the functionality platform-specific? RN: UI and shared business logic Kotlin/Swift: OS-specific or performance-critical functionality Java/Objective-C: mainly when integrating existing legacy native libraries/code.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-handle-platform-specific-code-without-duplicating-the-enti",
    question:
      "How would you handle platform-specific code without duplicating the entire feature?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Share the feature's domain logic and UI structure, and isolate only the platform-specific implementation. Feature ├── business logic ├── shared UI └── platform adapter ├── Android └── iOS Use .android.ts, .ios.ts, Platform, or native modules.",
      },
    ],
  },
  {
    id: "how-would-you-design-an-architecture-that-allows-react-native-and-native",
    question:
      "How would you design an architecture that allows React Native and native screens to coexist?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Use native navigation as the application-level shell and embed RN screens/modules where appropriate. Native App ├── Native Screen ├── React Native Screen ├── Native Screen └── React Native Screen Define clear navigation and lifecycle contracts between native and RN. This is particularly useful for incremental migration or applications with heavy native functionality.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-approach-migrating-a-legacy-react-native-application-to-th",
    question:
      "How would you approach migrating a legacy React Native application to the New Architecture?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "I would migrate incrementally: Audit third-party dependencies and native modules. Upgrade React Native and dependencies. Identify incompatible libraries. Replace deprecated/native integrations. Enable New Architecture in development. Test Fabric/TurboModules/JSI integrations. Monitor performance and crashes. Roll out gradually. I would avoid enabling it blindly across a large production application without dependency and native-module validation.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "what-architectural-problems-become-more-visible-as-a-react-native-applic",
    question:
      "What architectural problems become more visible as a React Native application grows?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Common problems: Tight coupling Large global state Circular dependencies Duplicate business logic God components Poor feature boundaries Excessive re-renders Slow builds Difficult testing Inconsistent UI Native/JS boundary problems Increasing dependency complexity",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-design-a-react-native-application-for-millions-of-users",
    question:
      "How would you design a React Native application for millions of users?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Focus on reliability, performance and scalability across the entire system. CDN and optimized assets API scalability and caching Pagination/lazy loading Efficient local caching Crash/ANR monitoring Offline handling Feature flags CI/CD with staged rollout Remote configuration Performance monitoring Secure storage and API communication Mobile clients should remain lightweight while scalability is primarily handled through resilient backend infrastructure and efficient client-server communication.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-design-react-native-applications-for-multiple-white-label-",
    question:
      "How would you design React Native applications for multiple white-label clients?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Separate core functionality from client configuration and branding. Core ├── Features ├── Business Logic └── Design System",
      },
      {
        type: "paragraph",
        content:
          "Client A → Theme + Config + Assets Client B → Theme + Config + Assets Client C → Theme + Config + Assets Use: Environment/client configuration Theme tokens Asset configuration Feature flags Client-specific adapters where required For larger scale, use monorepo/workspace packages and separate app targets.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-handle-multiple-app-environments-such-as-development-stagi",
    question:
      "How would you handle multiple app environments such as development, staging, UAT, and production?",
    topic: "Build & release",
    answer: [
      {
        type: "paragraph",
        content:
          "Use environment-specific configuration, not hardcoded values. .env.development .env.staging .env.uat .env.production Separate: API endpoints Firebase projects Bundle/application IDs where required Feature flags Signing configurations Analytics configuration Use CI/CD to select the environment and inject configuration during builds. Production secrets should never be committed to the repository.",
      },
      {
        type: "ordered-list",
        items: [
          {
            heading: "React Native New Architecture",
            content: "",
          },
        ],
      },
    ],
  },
  {
    id: "what-are-the-major-differences-between-the-old-and-new-architecture-of-r",
    question:
      "What are the major differences between the old and New Architecture of React Native?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Old Architecture New Architecture Bridge-based communication JSI-based interop Batched/serialized communication More direct native/JS interaction Legacy Native Modules TurboModules Legacy renderer Fabric Runtime-dynamic interfaces Codegen-generated interfaces More bridge overhead Reduced communication overhead",
      },
      {
        type: "paragraph",
        content:
          "Key point: The New Architecture is designed to reduce JS-native communication overhead and provide better extensibility and performance.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-do-fabric-turbomodules-jsi-and-codegen-work-together",
    question: "How do Fabric, TurboModules, JSI, and Codegen work together?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "TypeScript Spec ↓ Codegen ↓ Native Interfaces ↓ TurboModules ──────→ Native APIs │ ↓ JSI ↑ │ Fabric ← React rendering JSI → low-level JS ↔ native interoperability. TurboModules → modern native module system using JSI. Fabric → modern rendering system. Codegen → generates type-safe native interfaces from JS/TS specifications.",
      },
      {
        type: "diagram",
        title: "How the New Architecture pieces fit",
        nodes: [
          {
            label: "Typed specs",
            detail: "Codegen creates native interfaces",
          },
          {
            label: "JSI",
            detail: "JavaScript/native interoperability",
          },
          {
            label: "TurboModules",
            detail: "Lazy, typed native modules",
          },
          {
            label: "Fabric",
            detail: "Concurrent renderer and native host views",
          },
        ],
        note: "The pieces solve different parts of the integration; enabling the architecture does not make every workload faster automatically.",
      },
    ],
  },
  {
    id: "what-problem-does-jsi-solve-in-react-native",
    question: "What problem does JSI solve in React Native?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "JSI provides a direct C++ interface between JavaScript and native/C++ code, avoiding the traditional serialized Bridge communication model. This enables: Lower communication overhead Synchronous calls when appropriate Direct access to native/C++ objects Better support for high-performance libraries",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-are-turbomodules-different-from-the-legacy-native-module-system",
    question:
      "How are TurboModules different from the legacy Native Module system?",
    topic: "Native & tooling",
    answer: [
      {
        type: "paragraph",
        content:
          "Legacy: Uses the Bridge. Module initialization can be eager. Data is serialized between JS and native. TurboModules: Use JSI. Support lazy module loading. Use Codegen-generated interfaces. Reduce communication overhead. Provide stronger type contracts.",
      },
    ],
  },
  {
    id: "what-problem-does-fabric-solve",
    question: "What problem does Fabric solve?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Fabric is React Native's new rendering architecture. It improves: Rendering consistency JS/native interoperability Concurrent React support Component interoperability Rendering performance It replaces the legacy UIManager/renderer approach.",
      },
    ],
  },
  {
    id: "how-does-the-new-architecture-affect-application-performance",
    question: "How does the New Architecture affect application performance?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Potential improvements include: Reduced JS-native communication overhead Faster native module access Lazy TurboModule initialization More efficient rendering with Fabric Better handling of concurrent rendering But: New Architecture does not automatically make every application faster. Poor React rendering, excessive state updates, large lists, network latency, or inefficient business logic can still be bottlenecks.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "what-migration-problems-have-you-encountered-when-moving-a-project-to-th",
    question:
      "What migration problems have you encountered when moving a project to the New Architecture?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Typical issues include: Third-party libraries using legacy Native Modules. Custom native modules requiring migration. Fabric incompatibilities. Codegen/specification errors. Android/iOS build failures. Changes in lifecycle or initialization behavior. Native dependencies relying on deprecated APIs. I would migrate dependencies first, then custom native modules, followed by application-level validation.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-identify-whether-a-third-party-library-is-compatible-with-",
    question:
      "How would you identify whether a third-party library is compatible with the New Architecture?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "I would check: Library documentation. Current release/changelog. Whether it explicitly supports Fabric/TurboModules. GitHub issues and migration status. Native implementation for legacy Bridge dependencies. Test it in a New Architecture-enabled sample/application. I would not assume compatibility just because the library works with the latest React Native version.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "what-happens-if-a-critical-dependency-is-not-compatible-with-the-new-arc",
    question:
      "What happens if a critical dependency is not compatible with the New Architecture?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "I would evaluate: Upgrade to a compatible version. Replace the dependency. Patch/fork and migrate it. Temporarily isolate the dependency if technically possible. Delay migration if it is business-critical and cannot safely be replaced. Never force the migration at the expense of production stability.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-design-a-custom-native-module-using-turbomodules",
    question: "How would you design a custom native module using TurboModules?",
    topic: "Native & tooling",
    answer: [
      {
        type: "paragraph",
        content:
          "Define a typed JS/TS specification first: TypeScript Spec ↓ Codegen ↓ TurboModule interface ↓ Android implementation ↓ iOS implementation The JS layer interacts only with the generated interface, while Kotlin/Swift implements the platform-specific behavior.",
      },
    ],
  },
  {
    id: "what-is-codegen-and-why-is-it-important-in-the-new-architecture",
    question:
      "What is Codegen and why is it important in the New Architecture?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Codegen automatically generates native interfaces and boilerplate from typed JS/TS specifications. It provides: Type safety Consistent JS/native contracts Less manual boilerplate Earlier detection of API mismatches Better TurboModule/Fabric integration",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "what-is-the-difference-between-synchronous-and-asynchronous-native-calls",
    question:
      "What is the difference between synchronous and asynchronous native calls?",
    topic: "Native & tooling",
    answer: [
      {
        type: "paragraph",
        content:
          "Synchronous: JS → Native → result → JS JS waits for the native result. Asynchronous: JS → Native ↓ later result ↓ Promise/Event/Callback JS continues execution without waiting.",
      },
    ],
  },
  {
    id: "what-risks-are-associated-with-using-synchronous-jsi-calls",
    question: "What risks are associated with using synchronous JSI calls?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Main risk: blocking the JavaScript thread. If the native operation is expensive, it can cause: UI freezes Frame drops Increased input latency ANRs/jank indirectly through JS work Use synchronous calls only for small, fast operations where blocking is predictable.",
      },
    ],
  },
  {
    id: "how-would-you-debug-a-crash-that-occurs-only-after-enabling-the-new-arch",
    question:
      "How would you debug a crash that occurs only after enabling the New Architecture?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "I would isolate the problem systematically: Confirm the crash disappears when New Architecture is disabled. Check native crash logs and stack traces. Identify recently migrated/third-party native modules. Verify TurboModule/Fabric compatibility. Check Codegen-generated interfaces. Reproduce in a minimal environment. Test Android and iOS independently. Upgrade/patch the problematic dependency. Add a staged rollout after fixing. The key is to determine whether the failure is in Fabric, TurboModules, Codegen, JSI, or a third-party native dependency.",
      },
      {
        type: "diagram",
        title: "Narrow down a New Architecture crash",
        nodes: [
          {
            label: "Reproduce",
            detail: "Confirm it is tied to the architecture setting",
          },
          {
            label: "Inspect",
            detail: "Native stack, Codegen output, and library compatibility",
          },
          {
            label: "Isolate",
            detail: "Test Fabric, TurboModules, and dependencies",
          },
          {
            label: "Roll out",
            detail: "Patch, verify, then stage the release",
          },
        ],
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
    ],
  },
  {
    id: "how-would-you-investigate-a-screen-that-takes-3-4-seconds-to-become-inte",
    question:
      "How would you investigate a screen that takes 3–4 seconds to become interactive?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "Measure startup → JS execution → API → rendering → interaction. Profile JS thread and UI thread. Check slow synchronous initialization and large component trees. Check API latency. Check bundle loading/parsing. Identify expensive effects, calculations and renders. Reproduce in release build, not only debug.",
      },
    ],
  },
  {
    id: "how-do-you-identify-whether-a-performance-issue-is-in-javascript-native-",
    question:
      "How do you identify whether a performance issue is in JavaScript, native code, rendering, or the network?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Use profiling and timing: JS: CPU profile, long JS tasks, excessive renders. Native/UI: Android Studio Profiler / Xcode Instruments. Rendering: dropped frames, UI thread activity, React DevTools/Profiler. Network: request duration, DNS, TLS, server response and payload size.",
      },
      {
        type: "diagram",
        title: "Isolate the slow layer",
        nodes: [
          {
            label: "Measure",
            detail: "Capture the user-visible delay",
          },
          {
            label: "JS",
            detail: "Look for long tasks and excess renders",
          },
          {
            label: "UI/native",
            detail: "Profile frames, layout, and native work",
          },
          {
            label: "Network",
            detail: "Measure DNS, TLS, server time, and payload",
          },
        ],
      },
    ],
    references: [
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "how-would-you-optimize-a-component-that-renders-thousands-of-times-durin",
    question:
      "How would you optimize a component that renders thousands of times during an interaction?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "First identify what triggers each render. Then: Localize state. Split the component. Narrow state subscriptions/selectors. Memoize stable child components. Remove unnecessary context dependencies. Avoid creating unnecessary objects/functions. Virtualize large lists.",
      },
    ],
  },
  {
    id: "when-should-you-use-react-memo-usememo-and-usecallback",
    question: "When should you use React.memo, useMemo, and useCallback?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "React.memo → prevent child re-render when props haven't meaningfully changed. useMemo → cache an expensive calculated value. useCallback → preserve function reference when reference stability matters. Use them based on profiling, not by default.",
      },
    ],
  },
  {
    id: "when-can-usememo-or-usecallback-make-performance-worse",
    question: "When can useMemo or useCallback make performance worse?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "They introduce: Dependency comparison overhead. Memory usage. More complex code. Potentially unnecessary work when computation is already cheap. If the component rarely re-renders or the calculation is trivial, memoization may provide no benefit.",
      },
    ],
    references: [
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "how-do-flatlist-sectionlist-scrollview-and-virtualizedlist-differ",
    question:
      "How do FlatList, SectionList, ScrollView, and VirtualizedList differ?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Component Use ScrollView Small content; renders everything FlatList Large flat lists; virtualized SectionList Large grouped/sectioned lists VirtualizedList Lower-level/custom virtualization",
      },
    ],
    references: [
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "how-do-you-handle-10-000-records",
    question: "How do you handle 10,000+ records?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Don't render/load all records at once. Use: Server-side pagination/infinite scrolling. FlatList virtualization. Database/local storage pagination if offline. Memoized rows. Efficient selectors. Search/filter on the backend where appropriate.",
      },
    ],
  },
  {
    id: "how-do-you-optimize-images",
    question: "How do you optimize images?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Use appropriately sized/compressed images. Prefer thumbnails for lists. Lazy-load images. Cache frequently used images. Avoid unnecessarily large resolution. Use modern formats where supported. Prevent repeated image downloads.",
      },
    ],
  },
  {
    id: "how-do-you-diagnose-excessive-memory-consumption",
    question: "How do you diagnose excessive memory consumption?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Reproduce the scenario repeatedly. Monitor memory over time. Capture heap/native memory snapshots. Look for objects continuously increasing. Check images, large arrays, caches and native resources. Compare memory before/after navigation cycles.",
      },
    ],
    references: [
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "what-causes-memory-leaks",
    question: "What causes memory leaks?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Common causes: Unremoved event listeners. Timers/intervals. Subscriptions. WebSockets. Long-lived references/closures. Large caches. Native resources not released. Incorrect lifecycle handling.",
      },
    ],
    references: [
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "how-do-you-identify-and-fix-event-listener-memory-leaks",
    question: "How do you identify and fix event-listener memory leaks?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Check whether listeners increase after every mount. useEffect(() => { const subscription = emitter.addListener('event', handler);",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "return () => {\n    subscription.remove();\n  };\n}, []);\nEnsure every subscription has a corresponding cleanup.",
      },
    ],
    references: [
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "what-techniques-reduce-the-javascript-bundle-size",
    question: "What techniques reduce JavaScript bundle size?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Remove unused dependencies. Prefer smaller libraries. Enable tree shaking where applicable. Split/lazy-load features where supported. Avoid importing entire utility libraries. Compress production assets. Analyze the bundle to find large dependencies.",
      },
    ],
  },
  {
    id: "how-does-hermes-affect-react-native-performance",
    question: "How does Hermes affect React Native performance?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Hermes is a JavaScript engine optimized for React Native. It can improve: Startup time. Memory usage. JavaScript execution efficiency. Production runtime characteristics. The actual benefit depends on the application and device.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "how-do-you-investigate-frame-drops-during-scrolling",
    question: "How do you investigate frame drops during scrolling?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Check both JS and UI threads. Profile scrolling. Look for expensive renderItem. Check image decoding/loading. Check excessive JS work. Check layout calculations. Check animations. Check list configuration.",
      },
    ],
  },
  {
    id: "how-do-the-javascript-and-ui-threads-differ",
    question: "How do the JavaScript and UI threads differ?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "JS thread: executes React/JavaScript logic, state updates and JS event handling. UI/main thread: handles native UI operations, layout and drawing. A bottleneck on either can cause poor user experience.",
      },
      {
        type: "diagram",
        title: "A frame depends on timely work",
        nodes: [
          {
            label: "JavaScript",
            detail: "App logic, React work, and event handlers",
          },
          {
            label: "Renderer",
            detail: "Schedules and commits view updates",
          },
          {
            label: "UI thread",
            detail: "Applies native view updates and draws",
          },
        ],
        note: "Thread responsibilities vary by work and architecture; profile the actual bottleneck.",
      },
    ],
    references: [
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "what-happens-when-js-thread-is-blocked-for-500-ms",
    question: "What happens when JS thread is blocked for 500 ms?",
    topic: "Architecture",
    answer: [
      {
        type: "paragraph",
        content:
          "JavaScript work cannot execute during that period. Potential effects: Delayed state updates. Delayed event handling. Unresponsive interactions. JS-driven animations stutter. UI can appear frozen depending on what work depends on JS.",
      },
    ],
    references: [
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "how-do-you-handle-cpu-intensive-processing",
    question: "How do you handle CPU-intensive processing?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Move expensive work away from the main JS execution path. Options: Native Kotlin/Swift modules. JSI/C++ for performance-critical workloads. Worker/background processing where appropriate. Server-side processing. Chunk the work into smaller operations.",
      },
    ],
  },
  {
    id: "how-do-you-optimize-animations",
    question: "How do you optimize animations?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Prefer UI-thread/native-driven animation systems. Use Reanimated. Avoid heavy JS work during animation. Avoid unnecessary component re-renders. Animate transform/opacity where possible. Avoid expensive layout changes every frame.",
      },
    ],
  },
  {
    id: "why-can-js-driven-animations-cause-problems",
    question: "Why can JS-driven animations cause problems?",
    topic: "Animation",
    answer: [
      {
        type: "paragraph",
        content:
          "Animations requiring JS execution depend on the JS thread. If JS is busy: Heavy JS work ↓ JS thread blocked ↓ Animation updates delayed ↓ Dropped frames",
      },
    ],
  },
  {
    id: "how-do-reanimated-worklets-improve-animation-performance",
    question: "How do Reanimated worklets improve animation performance?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Worklets allow animation logic to execute outside the normal JS execution path, typically on the UI thread. Therefore animation can continue smoothly even when the JS thread is busy.",
      },
    ],
    references: [
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "how-would-you-investigate-a-performance-issue-that-appears-only-on-low-e",
    question:
      "How would you investigate a performance issue that appears only on low-end Android devices?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Compare: CPU usage Memory pressure JS execution time UI thread frame time Image sizes Network latency Device-specific native behavior Then reproduce on a representative low-end device in release mode and optimize the actual bottleneck.",
      },
    ],
    references: [
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "how-do-you-monitor-react-native-performance-in-production",
    question: "How do you monitor React Native performance in production?",
    topic: "Performance",
    answer: [
      {
        type: "paragraph",
        content:
          "Track: Crash-free sessions ANRs App startup time Screen/load time API latency JS errors Memory usage Frame/render performance Network failures Use tools such as Firebase Performance/Crashlytics, Sentry, native profilers and custom performance metrics.",
      },
    ],
    references: [
      {
        label: "React Native architecture",
        href: "https://reactnative.dev/architecture/landing-page",
      },
      {
        label: "React Native performance",
        href: "https://reactnative.dev/docs/performance",
      },
    ],
  },
  {
    id: "what-is-ssl-pinning-in-react-native",
    question: "What is SSL pinning in React Native?",
    topic: "Security",
    answer: [
      {
        type: "callout",
        tone: "caution",
        title: "Optional hardening, with an availability cost",
        content:
          "Pinning tightens normal TLS trust evaluation; it should not replace certificate-chain or hostname validation. Android Developers caution that pinning can lock out installed apps after server or CA changes. Use it only when the threat model justifies it, and plan key rotation and recovery.",
      },
      {
        type: "paragraph",
        content:
          "What is SSL Pinning in react native SSL pinning (also called certificate pinning) is a security technique where your app is configured to trust only a specific certificate or public key when talking to your server, instead of trusting any certificate signed by a trusted Certificate Authority (CA). Why it's needed Normally, a device trusts hundreds of CAs. If an attacker installs a rogue CA on the device (or compromises a CA), they can run a man-in-the-middle (MITM) attack using tools like Charles Proxy, Burp Suite, or mitmproxy, and read or modify your app's HTTPS traffic. Pinning blocks this: even if the certificate is \"valid\" by the system's standards, the connection fails if it doesn't match what your app expects. What can be pinned Certificate: the full server certificate. Strongest, but you must update the app whenever the cert is renewed. Public key (SPKI hash): the key inside the certificate. More flexible, since the key can stay the same across renewals. This is the commonly recommended approach. Intermediate/root CA: less strict, easier to maintain. How to implement it in React Native React Native's built-in fetch and XMLHttpRequest don't support pinning, so you need a library or native configuration. 1. react-native-ssl-pinning Replaces fetch with a pinned version. import { fetch } from 'react-native-ssl-pinning';",
      },
      {
        type: "paragraph",
        content:
          "fetch('https://api.example.com/data', { method: 'GET', timeoutInterval: 10000, sslPinning: { certs: ['my_cert'], // cert file(s) bundled in the app (e.g., my_cert.cer) }, headers: { Accept: 'application/json' }, }) .then(res => res.json()) .then(data => console.log(data)) .catch(err => console.log('Pinning failed:', err));",
      },
      {
        type: "paragraph",
        content:
          "You place the .cer file in android/app/src/main/assets/ and add it to the Xcode project for iOS. 2. react-native-ssl-public-key-pinning Pins by public key hash, so it's more maintainable. import { initializeSslPinning, } from 'react-native-ssl-public-key-pinning';",
      },
      {
        type: "code",
        language: "JavaScript",
        content:
          "await initializeSslPinning({\n  'api.example.com': {\n    includeSubdomains: true,\n    publicKeyHashes: [\n      'sha256/primaryKeyHash=',\n      'sha256/backupKeyHash=', // always include a backup\n    ],\n  },\n});",
      },
      {
        type: "paragraph",
        content:
          "After initialization, normal fetch/axios calls to that domain are pinned. 3. Native configuration Android: Use network_security_config.xml with <pin-set>, or OkHttp's CertificatePinner. iOS: Use TrustKit or NSAppTransportSecurity / NSPinnedDomains in Info.plist (iOS 14+). Getting a public key hash openssl s_client -servername api.example.com -connect api.example.com:443 </dev/null 2>/dev/null \\ | openssl x509 -pubkey -noout \\ | openssl pkey -pubin -outform der \\ | openssl dgst -sha256 -binary | openssl enc -base64",
      },
      {
        type: "paragraph",
        content:
          "Drawbacks and best practices Certificate expiry can break your app. If the pinned cert changes and users haven't updated the app, requests fail. Always include backup pins. Plan for rotation. Pin the public key, and keep a backup key ready. Don't rely on it alone. Determined attackers can bypass pinning on rooted/jailbroken devices using tools like Frida or objection. Combine it with root detection, obfuscation, and server-side validation. Test with a proxy (Charles/mitmproxy) to confirm requests actually fail when intercepted. Consider remote-configurable pins or a kill switch for emergencies. Summary SSL pinning in React Native makes your app accept only your server's known certificate or public key, protecting against MITM attacks. Since React Native doesn't support it out of the box, you use a library like react-native-ssl-public-key-pinning or configure it natively on Android and iOS, and always plan for certificate rotation. If you tell me whether you're using Expo or bare React Native, and which HTTP client (fetch or axios), I can give you a more specific setup.",
      },
      {
        type: "diagram",
        title: "Where pinning fits in HTTPS",
        nodes: [
          {
            label: "React Native request",
            detail: "Use the app networking path",
          },
          {
            label: "Platform TLS checks",
            detail: "Validate trust chain, hostname, and certificate dates",
          },
          {
            label: "Optional pin check",
            detail: "Match a controlled public key or certificate",
          },
          {
            label: "API server",
            detail: "Proceed only when every check passes",
          },
        ],
        note: "Keep a backup pin and verify that the implementation covers the networking clients and WebView paths your app uses.",
      },
    ],
    references: [
      {
        label: "Android network security configuration",
        href: "https://developer.android.com/privacy-and-security/security-config",
      },
      {
        label: "Apple server trust authentication",
        href: "https://developer.apple.com/documentation/Foundation/performing-manual-server-trust-authentication",
      },
      {
        label: "OWASP certificate pinning guidance",
        href: "https://mas.owasp.org/MASTG-KNOW-0015/",
      },
    ],
  },
  {
    id: "why-we-should-not-store-in-async-storage",
    question: "Why not store sensitive information in AsyncStorage?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "AsyncStorage is intended for persistent non-sensitive data. It should not be treated as a secure vault. Use it for preferences/cache, not: Access tokens Refresh tokens Passwords Encryption keys Financial information",
      },
    ],
  },
  {
    id: "how-implement-secure-token-storage-on-android-ios",
    question: "How do you implement secure token storage on Android and iOS?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "React Native ↓ Secure Storage abstraction ↙           ↘ Android      iOS Keystore     Keychain Keep the storage implementation behind a common TypeScript interface.",
      },
    ],
  },
  {
    id: "how-protect-an-application-against-reverse-engineering",
    question:
      "How do you protect a React Native app against reverse engineering?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "You cannot completely prevent reverse engineering. Use defense in depth: Minification/obfuscation. Remove debug information. Don't embed secrets. Runtime integrity checks. Root/jailbreak detection where justified. Secure API authentication/authorization. Code signing. Play Integrity/App Attest where applicable.",
      },
    ],
  },
  {
    id: "what-sensitive-information-should-never-be-hardcoded",
    question: "What sensitive information should never be hardcoded?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Never hardcode: Private API secrets. Database credentials. Private encryption keys. Signing credentials. Passwords. Long-lived authentication tokens. Cloud service private keys.",
      },
    ],
  },
  {
    id: "how-protect-api-communication-from-mitm-attacks",
    question: "How do you protect API communication from MITM attacks?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "HTTPS/TLS. Proper certificate validation. Modern TLS configuration. Certificate/public-key pinning where justified. Don't disable hostname/certificate verification. Strong server-side authentication.",
      },
    ],
  },
  {
    id: "how-implement-certificate-pinning",
    question: "How do you implement certificate pinning?",
    topic: "Security",
    answer: [
      {
        type: "callout",
        tone: "caution",
        title: "Keep the pin check in the networking path",
        content:
          "React Native fetch and XMLHttpRequest do not expose a JavaScript pin policy. Use native network configuration or a maintained library that enforces pins in the native HTTP stack, and confirm every relevant client and WebView path is covered. Keep standard TLS validation enabled and test certificate rotation before release.",
      },
      {
        type: "callout",
        tone: "caution",
        title: "Check the platform guidance first",
        content:
          "Android documentation warns that pinning can lock out installed apps after server or CA changes. If your threat model still calls for pinning, keep backup keys and a managed rotation plan. On iOS, preserve App Transport Security and tighten server trust evaluation rather than weakening it.",
      },
      {
        type: "paragraph",
        content:
          "Implement pinning at the native networking layer or through a trusted library that supports Android/iOS pinning. RN API Client ↓ Native HTTP stack ↓ TLS validation + pinned certificate/public key ↓ Server Validate the expected certificate/public key before trusting the connection.",
      },
    ],
    references: [
      {
        label: "Android network security configuration",
        href: "https://developer.android.com/privacy-and-security/security-config",
      },
      {
        label: "Apple server trust authentication",
        href: "https://developer.apple.com/documentation/Foundation/performing-manual-server-trust-authentication",
      },
      {
        label: "OWASP certificate pinning guidance",
        href: "https://mas.owasp.org/MASTG-KNOW-0015/",
      },
    ],
  },
  {
    id: "what-are-the-limitations-of-certificate-pinning",
    question: "What are the limitations of certificate pinning?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Certificate rotation can break the app. Requires careful backup pins. Operational complexity. Complicates debugging. Pinning does not protect a compromised/rooted device completely.",
      },
      {
        type: "callout",
        tone: "caution",
        title: "Android operational caveat",
        content:
          "Android Developers do not recommend pinning for most apps because server or certificate-authority changes can break connectivity until users install an app update. If pinning is required, use backup keys, an expiration/rotation strategy, and a tested recovery path.",
      },
    ],
    references: [
      {
        label: "Android network security configuration",
        href: "https://developer.android.com/privacy-and-security/security-config",
      },
      {
        label: "Apple server trust authentication",
        href: "https://developer.apple.com/documentation/Foundation/performing-manual-server-trust-authentication",
      },
      {
        label: "OWASP certificate pinning guidance",
        href: "https://mas.owasp.org/MASTG-KNOW-0015/",
      },
    ],
  },
  {
    id: "how-design-authentication-and-authorization",
    question: "How do you design authentication and authorization?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Login ↓ Access + Refresh Token ↓ Secure Storage ↓ API requests ↓ Server validates token ↓ Authorization based on user roles/permissions Authentication answers “Who are you?” Authorization answers “What are you allowed to do?” Authorization must ultimately be enforced server-side.",
      },
      {
        type: "diagram",
        title: "Session and API authorization",
        nodes: [
          {
            label: "Sign in",
            detail: "Server issues short-lived access and refresh credentials",
          },
          {
            label: "Secure persistence",
            detail: "Keep refresh credential in Keychain or Keystore",
          },
          {
            label: "API request",
            detail: "Attach access credential over TLS",
          },
          {
            label: "Server",
            detail: "Authorize the requested resource",
          },
        ],
        note: "Client-side UI checks improve flow but never replace server authorization.",
      },
    ],
  },
  {
    id: "how-handle-token-expiration-during-multiple-api-requests",
    question:
      "How do you handle token expiration during multiple API requests?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Use a centralized API interceptor: Request → 401 ↓ Refresh token ↓ Retry failed requests Queue requests while refresh is happening instead of independently refreshing for every request.",
      },
      {
        type: "diagram",
        title: "Single-flight token refresh",
        nodes: [
          {
            label: "Several requests get 401",
            detail: "Pause and share one refresh operation",
          },
          {
            label: "Refresh once",
            detail: "Rotate credentials with the server",
          },
          {
            label: "Retry requests",
            detail: "Resume with the new access token",
          },
          {
            label: "Refresh fails",
            detail: "Clear session and request sign-in",
          },
        ],
      },
    ],
  },
  {
    id: "how-prevent-simultaneous-refresh-requests",
    question: "How do you prevent simultaneous token refresh requests?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Use a single-flight refresh mechanism: Request A ─┐ Request B ─┼→ Refresh Lock → One refresh request Request C ─┘                     ↓ Retry queued requests Only the first request performs the refresh; others wait for its result.",
      },
      {
        type: "diagram",
        title: "Single-flight token refresh",
        nodes: [
          {
            label: "Several requests get 401",
            detail: "Pause and share one refresh operation",
          },
          {
            label: "Refresh once",
            detail: "Rotate credentials with the server",
          },
          {
            label: "Retry requests",
            detail: "Resume with the new access token",
          },
          {
            label: "Refresh fails",
            detail: "Clear session and request sign-in",
          },
        ],
      },
    ],
  },
  {
    id: "how-protect-locally-stored-offline-data",
    question: "How do you protect locally stored offline data?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Encrypt sensitive data at rest. Store encryption keys in Keystore/Keychain. Minimize stored data. Apply data expiration/cleanup. Use database-level encryption where appropriate. Never log sensitive offline data.",
      },
    ],
  },
  {
    id: "how-detect-rooted-jailbroken-devices",
    question: "How do you detect rooted or jailbroken devices?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Use platform-specific integrity/root detection mechanisms and security libraries. Look for signals such as: Suspicious filesystem access. Modified system binaries. Debugging/instrumentation indicators. Platform integrity failures. Treat detection as a risk signal, not proof.",
      },
    ],
  },
  {
    id: "should-the-app-completely-trust-root-jailbreak-detection",
    question: "Should the app completely trust root/jailbreak detection?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "No. Detection can be bypassed. Use it as one signal in a broader defense strategy, especially for high-risk operations.",
      },
    ],
  },
  {
    id: "how-protect-a-payment-related-application",
    question: "How do you protect a payment-related application?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Use: TLS and appropriate pinning. Secure token storage. Strong server-side authorization. Token rotation. Device/app integrity checks. Minimal local sensitive data. No payment secrets in the app. Secure WebViews/payment SDKs. Transaction verification on the backend. Audit/security monitoring. Never trust the mobile client to authorize a payment.",
      },
    ],
  },
  {
    id: "how-prevent-sensitive-information-in-logs",
    question:
      "How do you prevent sensitive information from appearing in logs?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Never log tokens/passwords/payment data. Create a centralized logging wrapper. Redact sensitive fields automatically. Disable verbose logs in production. Review third-party SDK logging. Ensure crash-reporting tools don't capture secrets.",
      },
    ],
  },
  {
    id: "how-implement-biometric-authentication",
    question: "How do you implement biometric authentication?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Use platform biometric APIs through a trusted RN/native module. RN ↓ Biometric API ↓ Android BiometricPrompt / iOS LocalAuthentication ↓ Success/Failure Prefer biometrics to unlock a locally stored credential rather than treating biometric data itself as application data.",
      },
    ],
  },
  {
    id: "how-protect-screenshots-on-sensitive-android-screens",
    question: "How do you protect screenshots on sensitive Android screens?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Use Android's FLAG_SECURE on sensitive activities/windows. This can prevent screenshots and screen recording in supported Android scenarios. iOS requires different platform-specific handling and has different limitations.",
      },
    ],
  },
  {
    id: "how-prevent-sensitive-information-through-deep-links",
    question:
      "How do you prevent sensitive information from leaking through deep links?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Never put secrets in URLs. Avoid: myapp://reset?token=SECRET Prefer a short-lived identifier/code and exchange it securely with the backend.",
      },
    ],
  },
  {
    id: "how-securely-handle-deep-links",
    question: "How do you handle deep links securely?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Validate: Scheme/domain. Path. Parameters. Authentication state. Authorization. For sensitive links, prefer Universal Links/App Links + HTTPS and validate everything server-side.",
      },
    ],
  },
  {
    id: "how-secure-webview-communication",
    question: "How do you secure WebView communication?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Load only trusted origins. Validate URLs/navigation. Minimize JavaScript injection. Restrict postMessage communication. Validate message origin/content. Don't expose unnecessary native methods. Never pass secrets unnecessarily.",
      },
    ],
  },
  {
    id: "how-identify-vulnerabilities-in-third-party-dependencies",
    question:
      "How do you identify vulnerabilities in third-party dependencies?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Use: npm audit GitHub Dependabot/security alerts SCA/dependency scanners Lockfiles Package changelogs/security advisories Regular dependency updates Also review native Android/iOS dependencies, not just npm packages.",
      },
    ],
  },
  {
    id: "what-would-you-do-if-a-vulnerability-were-discovered-in-production",
    question:
      "What would you do if a vulnerability were discovered in production?",
    topic: "Security",
    answer: [
      {
        type: "paragraph",
        content:
          "Assess severity and exploitability. Identify affected versions. Check whether the vulnerability is actually reachable in the app. Upgrade/patch immediately if possible. Replace or temporarily isolate the dependency if necessary. Release through an expedited/staged deployment. Revoke/rotate exposed credentials if applicable. Monitor for exploitation. Document the incident and remediation.",
      },
    ],
  },
  {
    id: "how-do-you-choose-a-local-database-for-react-native-offline-data",
    question:
      "How do you choose a local database for offline React Native data?",
    topic: "State & data",
    answer: [
      paragraph(
        "Choose storage from the data model and access patterns. For structured, relational, frequently updated, or large datasets, compare database options such as SQLite-based storage and Realm against the app's requirements. A key-value store is better suited to small preferences or simple caches than complex relational queries.",
      ),
      namedPoints([
        [
          "Query patterns",
          "List the filters, sorts, joins, and pagination the app needs, then compare query performance.",
        ],
        [
          "Consistency",
          "Check transaction support and how multi-record changes remain atomic.",
        ],
        [
          "Security",
          "Review encryption at rest, key handling, backups, and data deletion behavior.",
        ],
        [
          "Offline sync",
          "Check how the chosen storage fits the app's conflict and synchronization model.",
        ],
        [
          "Operations",
          "Consider React Native integration, maintenance, migration tooling, and the team's experience.",
        ],
      ]),
      paragraph(
        "Keep the database behind a repository interface so screens and features do not depend on a specific storage library.",
      ),
    ],
  },
  {
    id: "how-do-you-design-offline-sync-and-conflict-resolution",
    question:
      "How do you design offline synchronization and conflict resolution?",
    topic: "State & data",
    answer: [
      diagram("A synchronization cycle", [
        {
          label: "Local edits",
          detail: "Save record IDs, versions, and pending status",
        },
        {
          label: "Push",
          detail: "Send queued operations with stable operation IDs",
        },
        {
          label: "Pull",
          detail: "Fetch server changes since the last sync cursor",
        },
        { label: "Resolve", detail: "Apply explicit conflict rules" },
        {
          label: "Update local DB",
          detail: "Commit server state and sync status",
        },
      ]),
      namedPoints([
        [
          "Last-write-wins",
          "Simple, but timestamps can overwrite a meaningful concurrent change.",
        ],
        [
          "Server-wins or client-wins",
          "Useful only when one side has a clearly defined priority.",
        ],
        [
          "Field-level merge",
          "Combine independent changes when the domain permits it.",
        ],
        [
          "Domain-specific resolution",
          "Best for important records where business rules determine how competing edits should be reconciled.",
        ],
      ]),
      paragraph(
        "Use versions, updated timestamps, or ETags to detect stale writes. Do not rely only on device clocks for ordering changes.",
      ),
    ],
  },
  {
    id: "how-do-you-build-a-durable-offline-operation-queue",
    question: "How do you build a durable offline operation queue?",
    topic: "State & data",
    answer: [
      code(
        "TypeScript",
        "type PendingOperation = {\n  id: string; // stable client operation ID\n  type: string;\n  payload: unknown;\n  status: 'pending' | 'in-progress' | 'failed';\n  retryCount: number;\n  createdAt: number;\n};",
      ),
      namedPoints([
        [
          "Persist before sending",
          "Write the operation and its ID to the local database before attempting delivery.",
        ],
        [
          "Make retries safe",
          "Send an idempotency key and have the server return the same result for a repeated operation ID.",
        ],
        [
          "Retry selectively",
          "Use exponential backoff with jitter and a maximum retry count; retry transient failures, respect Retry-After, and do not retry permanent client errors blindly.",
        ],
        [
          "Recover after restart",
          "On startup, inspect pending and in-progress records and reconcile them with server state or idempotency results.",
        ],
        [
          "Track each operation",
          "A failed operation should not erase successful neighboring operations; retry only the failed work.",
        ],
      ]),
      diagram("Safe retry path", [
        { label: "Save operation ID", detail: "Persist the outbox entry" },
        { label: "Send request", detail: "Include the same idempotency key" },
        {
          label: "Server deduplicates",
          detail: "Return the stored result on a repeat",
        },
        { label: "Mark complete", detail: "Remove or archive the operation" },
      ]),
    ],
  },
  {
    id: "how-do-you-present-cached-data-and-detect-connectivity-offline",
    question:
      "How do you present cached data and detect connectivity in an offline-first app?",
    topic: "State & data",
    answer: [
      diagram(
        "Stale-while-revalidate",
        [
          { label: "Read local cache", detail: "Render immediately" },
          {
            label: "Refresh from API",
            detail: "Run without blocking the current screen",
          },
          {
            label: "Update local DB",
            detail: "Notify subscribers of fresh data",
          },
        ],
        "Show a small refresh or stale-data indicator instead of blanking the screen while refreshing.",
      ),
      paragraph(
        "Use a connectivity monitor for connection type and reachability changes, but do not treat a connected network interface as proof that the backend can be reached. DNS, captive portals, TLS errors, or server outages can still prevent a request. For critical actions, confirm reachability through the API request itself.",
      ),
      paragraph(
        "Represent sync status explicitly, for example: synced, pending, syncing, or failed. Let the user understand whether a local edit has reached the server.",
      ),
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
        {
          label: "Mark pending",
          detail: "Show that synchronization is needed",
        },
        { label: "Sync later", detail: "Send when the service is reachable" },
      ]),
      namedPoints([
        [
          "Minimize",
          "Store only fields and records needed for the offline workflow.",
        ],
        [
          "Protect",
          "Encrypt sensitive data at rest when appropriate and keep encryption keys in platform-backed secure storage.",
        ],
        [
          "Separate credentials",
          "Keep refresh credentials in Keychain/Keystore-backed storage; do not treat an offline cache as authorization.",
        ],
        [
          "Clear and expire",
          "Apply retention rules and remove account data on logout or account removal.",
        ],
      ]),
      paragraph(
        "A cached record must never grant permission by itself. The server remains responsible for authorization when data is synchronized or an action is performed.",
      ),
    ],
  },

  {
    id: "how-design-redux-state-large-scale",
    question: "How would you design Redux state for a large-scale application?",
    topic: "State & data",
    answer: [
      paragraph(
        "Organize the store by business domain and feature. Keep the state minimal, normalize relational entities when useful, and keep UI-only state separate from domain data.",
      ),
      code(
        "text",
        "store/\n├── auth/\n├── users/\n├── orders/\n├── payments/\n└── settings/",
      ),
      namedPoints([
        [
          "Selectors",
          "Keep selectors separate from reducers and memoize expensive derived data.",
        ],
        [
          "Async behavior",
          "Put request workflows in the appropriate thunk or middleware layer.",
        ],
        [
          "Normalized entities",
          "Store related records by ID where it makes updates and subscriptions more focused.",
        ],
        [
          "Server state",
          "Use an API cache or server-state layer for remote data that needs staleness, refetch, or invalidation behavior.",
        ],
      ]),
    ],
  },
  {
    id: "how-do-you-handle-server-state-differently-from-client-state",
    question: "How do you handle server state differently from client state?",
    topic: "State & data",
    answer: [
      namedPoints([
        [
          "Server state",
          "Data owned by an API. It can become stale, needs caching/refetching, may be shared across screens, and needs invalidation after mutations. A server-state tool such as TanStack Query can own those cache rules.",
        ],
        [
          "Client state",
          "Local interactions, temporary UI, preferences, and client-owned session/configuration state. Manage it with local state, Context, Redux Toolkit, Zustand, or another store chosen for its scope.",
        ],
      ]),
      paragraph(
        "Keep one clear owner for each piece of data. Avoid copying every API response into a global client store if the query cache already owns its freshness and lifecycle.",
      ),
    ],
    references: [
      {
        label: "TanStack Query documentation",
        href: "https://tanstack.com/query/latest/docs/framework/react/overview",
      },
    ],
  },
  {
    id: "what-problems-occur-when-api-data-and-ui-state-are-stored-together",
    question:
      "What problems occur when API data and UI state are stored together?",
    topic: "State & data",
    answer: [
      points([
        "API data can become stale or duplicated across different store slices.",
        "Cache invalidation and refresh rules become difficult to reason about.",
        "Reducers accumulate loading, error, and synchronization details unrelated to client UI state.",
        "Broad updates can cause extra re-renders.",
        "It becomes harder to reconcile local interaction state with backend-owned data.",
      ]),
      paragraph(
        "Give remote data a clear cache owner and keep temporary view state close to the UI that owns it.",
      ),
    ],
  },
  {
    id: "how-do-you-handle-cache-invalidation",
    question: "How do you handle cache invalidation?",
    topic: "State & data",
    answer: [
      paragraph(
        "Define cache ownership and invalidation rules around queries and mutations. For example, after creating an order, invalidate the affected orders query so the cache refreshes the relevant data.",
      ),
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
      paragraph(
        "An optimistic update changes the visible client/cache state before the server confirms the mutation. Capture enough previous state to restore it if the request fails.",
      ),
      diagram("Optimistic update lifecycle", [
        { label: "User action", detail: "Save the previous state" },
        {
          label: "Update cache",
          detail: "Show the expected result immediately",
        },
        {
          label: "Send request",
          detail: "Ask the server to commit the change",
        },
        {
          label: "Success / failure",
          detail: "Keep the update or restore prior state",
        },
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
      paragraph(
        "The user should not be left with a success-looking screen after the server rejected the change.",
      ),
    ],
  },
  {
    id: "how-do-you-prevent-race-conditions-between-api-requests",
    question:
      "How do you prevent race conditions between API requests that update the same state?",
    topic: "State & data",
    answer: [
      diagram("Latest valid response wins", [
        { label: "Request A", detail: "Version 1" },
        { label: "Request B", detail: "Version 2, sent later" },
        { label: "Responses arrive", detail: "May arrive out of order" },
        {
          label: "Apply safely",
          detail: "Ignore stale response A when B supersedes it",
        },
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
    question:
      "How do you manage authentication state across application restarts?",
    topic: "Security",
    answer: [
      diagram("Restore a session safely", [
        {
          label: "App starts",
          detail: "Read refresh credential from secure storage",
        },
        { label: "Refresh session", detail: "Exchange it with the backend" },
        {
          label: "Validate user",
          detail: "Fetch current account and permissions",
        },
        {
          label: "Continue or sign in",
          detail: "Restore session or clear invalid credentials",
        },
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
    id: "how-do-you-migrate-persisted-redux-state",
    question:
      "How do you handle state migration when persisted Redux structure changes?",
    topic: "State & data",
    answer: [
      paragraph(
        "Version the persisted schema. When the app loads an older version, run a migration that maps it to the new shape before reducers and screens consume it.",
      ),
      code(
        "TypeScript",
        "type PersistedStateV2 = {\n  version: 2;\n  preferences: { theme: 'light' | 'dark' };\n};\n\nfunction migrateV1ToV2(old: { theme?: string }): PersistedStateV2 {\n  return {\n    version: 2,\n    preferences: {\n      theme: old.theme === 'dark' ? 'dark' : 'light',\n    },\n  };\n}",
      ),
      paragraph(
        "Test migrations against representative old snapshots. If data is corrupt or cannot be migrated safely, fall back to a known initial state and preserve a recoverable error report without leaking user data.",
      ),
    ],
  },
  {
    id: "how-do-you-debug-a-production-only-state-management-issue",
    question:
      "How do you debug a state-management issue that only occurs in production?",
    topic: "Testing & debugging",
    answer: [
      list(
        [
          {
            heading: "Capture context",
            content:
              "Add structured action/request diagnostics while redacting tokens, passwords, and personal data.",
          },
          {
            heading: "Reconstruct sequence",
            content:
              "Record the order of relevant actions, requests, responses, and persistence events.",
          },
          {
            heading: "Compare versions",
            content:
              "Check app version, persisted schema version, and production configuration.",
          },
          {
            heading: "Check timing",
            content:
              "Look for request races, retries, cancellations, and startup hydration order.",
          },
          {
            heading: "Reproduce",
            content:
              "Replay the same state and action sequence in a production-like build.",
          },
          {
            heading: "Add focused telemetry",
            content:
              "If the cause remains unclear, measure the affected transition without logging sensitive payloads.",
          },
        ],
        true,
      ),
    ],
  },
];
