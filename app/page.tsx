"use client";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleWheel = (event) => {
      // Simule un déplacement vertical basé sur la molette
      setScrollY((prev) => Math.max(0, prev + event.deltaY * 0.5));
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div>
      <HomePage scrollY={scrollY} />
      <AboutPage scrollY={scrollY} />
    </div>
  );
}
