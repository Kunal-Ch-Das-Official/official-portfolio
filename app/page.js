import ProjectTimeline from "@/components/reusable/project-timeline/ProjectTimeline";
import LandingBanner from "@/components/usable/landing-banner/LandingBanner";
import MyStack from "@/components/usable/my-stack/MyStack";

export default function Home() {
  return (
    <main>
      <LandingBanner />
      <MyStack />
      <ProjectTimeline />
    </main>
  );
}
