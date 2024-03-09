import Footer from "@/components/footer";
import AboutUs from "@/components/home/about-us";
import ContactUs from "@/components/home/contact-us";
import Header from "@/components/home/header";
import Projects from "@/components/home/projects";
import Reputation from "@/components/home/reputation";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Reputation />
      <AboutUs />
      <Services />
      <Projects />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
