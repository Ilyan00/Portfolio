"use client";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleWheel = (event: any) => {
      setScrollY((prev) => Math.max(0, prev + event.deltaY * 0.5));
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div className="h-screen overflow-hidden">
      <HomePage scrollY={scrollY} />
      <AboutPage scrollY={scrollY} />
      <ProjectPage scrollY={scrollY} />
    </div>
  );
}
