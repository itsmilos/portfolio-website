import About from "@/components/About";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import SelectedWork from "@/components/SelectedWork";
import StackPage from "@/components/Stack";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Approach />
      <SelectedWork />
      <StackPage />
      <Resume />
      <Testimonial />
    </div>
  );
}
