import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menue from "./components/Menue";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText)

// gsap.registerPlugin(ScrollSmoother) 
// ScrollSmoother.create({
//   smooth: 1,
//   effects: true
// });
const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menue />
        <Contact />
    </main>
  );
}

export default App;
