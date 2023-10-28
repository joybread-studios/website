import AboutSection from "./templates/AboutSection";
import IntroSection from "./templates/IntroSection";
import ProjectSection from "./templates/ProjectSection";

export default function Home() {
  return (
    <main>
      <IntroSection/>
      <AboutSection/>
      <ProjectSection/>
    </main>
  )
}
