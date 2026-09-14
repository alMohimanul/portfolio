"use client";

import { useEffect, useSyncExternalStore } from "react";

const THEME_STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark";
}

function getServerSnapshot() {
  return false;
}

function setTheme(isDark: boolean) {
  window.localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  listeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setTheme(!isDark)}
      aria-label="Toggle color theme"
      className="rounded-full border px-3 py-1.5 text-sm transition hover:border-[var(--color-border-strong)]"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
