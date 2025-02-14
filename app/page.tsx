"use client";

import { useEffect, useState, useRef } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import FormPage from "./FormPage";
import Ballon from "./Ballon";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const touchStartY = useRef(0);
  const maxScroll = useRef(5390);

  useEffect(() => {
    setIsClient(true);

    const controller = new AbortController();

    const updateScroll = (delta: number) => {
      setScrollY((prev) => {
        const newScrollY = Math.min(
          Math.max(0, prev + delta),
          maxScroll.current
        );
        return newScrollY !== prev ? newScrollY : prev;
      });
    };

    const handleWheel = (event: WheelEvent) => {
      requestAnimationFrame(() => updateScroll(event.deltaY * 0.5));
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touchY = event.touches[0].clientY;
      const deltaY = touchStartY.current - touchY;
      touchStartY.current = touchY;
      requestAnimationFrame(() => updateScroll(-deltaY));
    };

    if (typeof window !== "undefined") {
      window.addEventListener("wheel", handleWheel, {
        signal: controller.signal,
      });
      window.addEventListener("touchstart", handleTouchStart, {
        signal: controller.signal,
      });
      window.addEventListener("touchmove", handleTouchMove, {
        signal: controller.signal,
      });
    }

    return () => {
      controller.abort();
    };
  }, []);

  const handleResetScroll = () => setScrollY(0);
  const handleScroll = (scrollValue: number) => setScrollY(scrollValue);

  if (!isClient) return null;

  return (
    <div className="h-screen w-screen overflow-hidden scroll-smooth">
      <HomePage scrollY={scrollY} handleScroll={handleScroll} />
      <Ballon scrollY={scrollY} handleResetScroll={handleResetScroll} />
      <AboutPage scrollY={scrollY} />
      <ProjectPage scrollY={scrollY} />
      <FormPage scrollY={scrollY} />
    </div>
  );
}
