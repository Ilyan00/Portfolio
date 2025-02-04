"use client";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import FormPage from "./FormPage";
import Ballon from "./Ballon";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleWheel = (event: any) => {
      setScrollY((prev) =>
        Math.min(Math.max(0, prev + event.deltaY * 0.5), 5390)
      );
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleResetScroll = () => {
    setScrollY(0);
  };

  return (
    <div className="h-screen w-screen overflow-hidden scroll-smooth">
      <HomePage scrollY={scrollY} />
      <Ballon scrollY={scrollY} handleResetScroll={handleResetScroll} />
      <AboutPage scrollY={scrollY} />
      <ProjectPage scrollY={scrollY} />
      <FormPage />
    </div>
  );
}
