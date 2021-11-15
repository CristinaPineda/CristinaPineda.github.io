import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import Formacao from "../components/Formacao";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Formacao />
      <Footer />
      <Contact />
    </>
  );
}
