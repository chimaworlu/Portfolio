import Nav from "../components/layout/Nav.jsx";
import Hero from "../components/home/Hero.jsx";
import ProjectGrid from "../components/home/ProjectGrid.jsx";
import Experience from "../components/home/Experience.jsx";
import About from "../components/home/About.jsx";
import Contact from "../components/home/Contact.jsx";

export default function HomePage() {
  return (
    <>
      <Nav variant="home" />
      <main>
        <Hero />
        <ProjectGrid />
        <Experience />
        <About />
      </main>
      <Contact />
    </>
  );
}
