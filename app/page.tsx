import { PageIntro } from "@/components/ui";
import { subjects } from "@/data/subjects";
import { SubjectExplorer } from "@/components/subject-explorer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore subjects",
  description:
    "Browse practical lessons across web, React, mobile, and developer tooling.",
};
export default function HomePage() {
  return (
    <main>
      <PageIntro
        eyebrow="THE SUBJECT LIBRARY"
        title="What would you like to learn?"
        description="Explore the technologies behind modern web and mobile apps. Each subject includes a guided curriculum and focused lessons."
        action={
          <span className="subject-total">
            <b>{subjects.length}</b> subjects · growing library
          </span>
        }
      />
      <section className="section container catalog-section">
        <SubjectExplorer />
      </section>
    </main>
  );
}
