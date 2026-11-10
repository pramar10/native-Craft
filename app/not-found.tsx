import Link from "next/link";

export default function NotFound() {
  return <main className="not-found container"><span>404 · PAGE NOT FOUND</span><h1>That lesson took a wrong turn.</h1><p>Choose a subject and pick up a new path.</p><Link className="button button-primary" href="/learn">Browse subjects ↗</Link></main>;
}
