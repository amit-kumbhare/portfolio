import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import YoutubeVideos from "../components/YoutubeVideos";
import Skills from "../components/Skills";
import CompetitiveProgramming from "../components/CompetitiveProgramming";
import Education from "../components/Education";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <Intro />
      <About />
      <WorkExperience />
      <Achievements />
      <Projects />
      <YoutubeVideos />
      <Skills />
      <CompetitiveProgramming />
      <Education />
    </div>
  );
}
