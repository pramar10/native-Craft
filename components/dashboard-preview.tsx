import Link from "next/link";
import { Progress } from "@/components/ui";

export function DashboardPreview() {
  return <div className="dash-window"><div className="dash-sidebar"><div className="dash-logo"><span className="brand-mark">N</span> NativeForge</div><div className="dash-nav-active">▦&nbsp; Overview</div><div>⌘&nbsp; Learning paths</div><div>⌁&nbsp; Challenges</div><div>◇&nbsp; My projects</div><div>◎&nbsp; Interview prep</div><div className="dash-user"><span>JD</span><div>Jordan Davis<small>Pro learner</small></div></div></div>
    <div className="dash-main"><div className="dash-overline">MONDAY, OCTOBER 21, 2026</div><h3>Good morning, Jordan <span>✦</span></h3><p>Your next breakthrough is one lesson away.</p><div className="dash-goal"><div><small>YOUR WEEKLY GOAL</small><strong>4.5 <i>/ 6 hours</i></strong></div><span className="goal-percent">75%</span><Progress value={75} /></div>
      <div className="dash-label-row"><strong>Continue learning</strong><Link href="/learn">View path ↗</Link></div><div className="dash-lower"><div className="dash-course"><span className="course-glyph">✳</span><div><strong>React Native foundations</strong><small>Lesson 08 · Navigation patterns</small></div><b>68%</b></div><div className="dash-streak"><small>CURRENT STREAK</small><strong>12 <i>days</i> 🔥</strong><span>Personal best: 18 days</span></div></div>
    </div></div>;
}
