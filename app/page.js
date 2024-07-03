import LandingBanner from "@/components/usable/landing-banner/LandingBanner";
import LatestProjects from "@/components/usable/latest-projects/LatestProjects";
import MyStack from "@/components/usable/my-stack/MyStack";


export default function Home() {
  return (
    <main>
      <LandingBanner />
      <MyStack />
      <LatestProjects />
      
     
    </main>
  );
}
