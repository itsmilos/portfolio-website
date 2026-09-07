import About from "@/components/About";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
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
      <Testimonial />
      <Footer />
    </div>
  );
}
