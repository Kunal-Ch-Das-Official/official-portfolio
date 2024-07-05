
import LandingBanner from "@/components/usable/landing-banner/LandingBanner";
import MyStack from "@/components/usable/my-stack/MyStack";
import ProjectTimeline from "@/components/usable/project-timeline/ProjectTimeline";
import ResumeShowcase from "@/components/usable/resume-showcase/ResumeShowcase";

export default function Home() {
  return (
    <main>
      <LandingBanner />
      <MyStack />
     <ProjectTimeline />
     <ResumeShowcase />
    </main>
  );
}
