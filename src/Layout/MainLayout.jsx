import React from "react";

import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Home/Hero";
import About from "../Components/About/About";
import SkillsSection from "../Components/SkillsSection";
import Experience from "../Components/Experience/Experience";
import MyWork from "../Components/Work/MyWork";
import Certificates from "../Components/Home/Certificates";
import ContactSection from "./../Components/Contact/ContactSection";
import Footer from "../Components/Common/Footer";
import FloatingButtons from "../Components/Common/FloatingButtons";

const MainLayout = () => {
  return (
    <div className=" bg-black">
      <Navbar />
      <main>
        <Hero />
        <About/>
        <SkillsSection/>
        <Experience />
        <MyWork/>
        <Certificates />
        <ContactSection/>
      </main>
        <Footer />
         <FloatingButtons />
    </div>
  );
};

export default MainLayout;