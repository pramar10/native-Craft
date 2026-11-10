import Link from "next/link";
import { subjects } from "@/data/subjects";

export function SiteFooter() {
  const groups = [
    { title: "Foundations", subjects: ["javascript", "typescript", "html"] },
    { title: "Frameworks", subjects: ["react", "next-js", "react-native"] },
    { title: "Tools & state", subjects: ["vite", "expo", "redux-toolkit"] },
  ];
  return (
    <footer className="site-footer">
      <div className="container footer-grid learning-footer">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <span className="brand-mark">N</span>
            <span>
              Native<span className="brand-light">Forge</span>
            </span>
          </Link>
          <p>
            Learn the tools, build real skills,
            <br />
            and get interview-ready.
          </p>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            {group.subjects.map((slug) => {
              const subject = subjects.find((item) => item.slug === slug)!;
              return (
                <Link href={`/learn/${slug}`} key={slug}>
                  {subject.title}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© 2026 NativeForge · Learn at your own pace.</span>
        <Link href="/learn">Browse all subjects ↗</Link>
      </div>
    </footer>
  );
}
