import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Tools } from "@/components/Tools";
import { Portfolio } from "@/components/Portfolio";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Tools />
      <Portfolio />
      <BeforeAfter />
      <Contact />
    </div>
  );
};

export default Index;
