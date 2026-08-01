import React, { useEffect, useState } from "react";
import "./index.css";

/*
  App.js
  - Main application component and initialization entry point
  - Put startup logic (analytics, auth bootstrap, API client init)
    inside the useEffect below so it runs once on first render.
*/

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Example startup/initialization steps:
    // 1. Initialize analytics (e.g., window.analytics?.init(...))
    // 2. Initialize auth / restore session (e.g., authClient.restore())
    // 3. Configure API clients with tokens or base URLs
    // 4. Fetch minimal bootstrap data for the UI (current user, config)
    //
    // Replace the example timeout below with real initialization calls.

    let cancelled = false;

    async function bootstrap() {
      try {
        console.log("App bootstrap starting...");

        // Simulate async initialization (replace with real init)
        await new Promise((r) => setTimeout(r, 200));

        if (cancelled) return;

        console.log("Initialization complete.");
        setReady(true);
      } catch (err) {
        console.error("Initialization failed:", err);
        // handle/init error state here
      }
    }

    bootstrap();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return (
      <div className="app-loading">
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>My React App</h1>
      </header>

      <main className="app-main">
        <p>Welcome — the app is initialized.</p>
        {/* Add routes, context providers, and main UI here */}
      </main>

      <footer className="app-footer">
        <small>© {new Date().getFullYear()} Your Name</small>
      </footer>
    </div>
  );
}
