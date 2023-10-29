import AboutSection from "./templates/AboutSection";
import IntroSection from "./templates/IntroSection";
import ProjectSection from "./templates/ProjectSection";
import NavItemsContainer from "./components/navItems";
export default function Home() {
  return (
    <main>
      <IntroSection/>
      <AboutSection/>
      <ProjectSection/>
      <NavItemsContainer/>
    </main>
  )
}
