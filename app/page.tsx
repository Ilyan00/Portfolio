"use client";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import FormPage from "./FormPage";
import Ballon from "./Ballon";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const handleWheel = (event: WheelEvent) => {
      setScrollY((prev) =>
        Math.min(Math.max(0, prev + event.deltaY * 0.5), 5390)
      );
    };

    const handleTouchStart = (event: TouchEvent) => {
      setTouchStartY(event.touches[0].clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touchY = event.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      setTouchStartY(touchY);
      setScrollY((prev) => Math.min(Math.max(0, prev - deltaY * 1), 5390));
    };

    window.addEventListener("wheel", handleWheel, {
      signal: controller.signal,
    });
    window.addEventListener("touchstart", handleTouchStart, {
      signal: controller.signal,
    });
    window.addEventListener("touchmove", handleTouchMove, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [touchStartY]);

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
