
import LandingBanner from "@/components/usable/landing-banner/LandingBanner";
import MyStack from "@/components/usable/my-stack/MyStack";
import ProjectTimeline from "@/components/usable/project-timeline/ProjectTimeline";
import Testimonial from "@/components/usable/testimonials/Testimonial";


export default function Home() {
  return (
    <main>
      <LandingBanner />
      <MyStack />
     <ProjectTimeline />
     <Testimonial />
    </main>
  );
}
