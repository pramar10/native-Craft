"use client";

import { useMemo, useState } from "react";
import { categories, subjects } from "@/data/subjects";
import { SubjectCard } from "@/components/subject-card";

export function SubjectExplorer() {
  const [category, setCategory] = useState("All subjects");
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      subjects.filter((subject) => {
        const matchesCategory =
          category === "All subjects" || subject.category === category;
        const term = query.trim().toLowerCase();
        const matchesQuery =
          !term ||
          `${subject.title} ${subject.description} ${subject.category}`
            .toLowerCase()
            .includes(term);
        return matchesCategory && matchesQuery;
      }),
    [category, query],
  );

  return (
    <>
      <div className="catalog-controls">
        <label className="subject-search">
          <span>⌕</span>
          <input
            aria-label="Search subjects"
            placeholder="Search a subject..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <kbd>⌘ K</kbd>
        </label>
        <div className="category-filters" aria-label="Filter by category">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="subject-grid">
          {filtered.map((subject, index) => (
            <SubjectCard key={subject.slug} subject={subject} index={index} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>⌕</span>
          <h2>No subjects found</h2>
          <p>Try a different search or choose another category.</p>
          <button
            onClick={() => {
              setQuery("");
              setCategory("All subjects");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
      <p className="catalog-count">
        Showing {filtered.length} of {subjects.length} subjects
      </p>
    </>
  );
}
