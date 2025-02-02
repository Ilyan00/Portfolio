"use client";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import FormPage from "./FormPage";

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
  return (
    <div className="h-screen w-screen overflow-hidden">
      <HomePage scrollY={scrollY} />
      <AboutPage scrollY={scrollY} />
      <ProjectPage scrollY={scrollY} />
      <FormPage />
    </div>
  );
}
