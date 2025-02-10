"use client";
import Image from "next/image";
import Scroll from "./ScrollComponent";
import CloudFrontHome from "@/app/assets/CloudFrontHome.svg";
import CloudBackHome from "@/app/assets/CloudBackHome.svg";

const HomePage = ({
  scrollY,
  handleScroll,
}: {
  scrollY: number;
  handleScroll: (scrollValue: number) => void;
}) => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute h-full w-full flex z-50 flex-col items-center justify-center pt-20 gap-10 text-center"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <div>
          <p className="text-cream text-4xl md:text-2xl opacity-75 ">
            Web Developer
          </p>
          <h1 className="text-cream text-4xl md:text-6xl font-bold font-modak">
            BAIN-TRIMBACH
            <span className="text-cream font-modak">
              <br />
              Ilyan-Jude
            </span>
          </h1>
        </div>
        <ul className="flex justify-around flex-wrap w-full">
          <li className="cursor-pointer" onClick={() => handleScroll(1805)}>
            [01 - About Me]
          </li>
          <li className="cursor-pointer" onClick={() => handleScroll(3899)}>
            [02 - Projects]
          </li>
          <li className="cursor-pointer" onClick={() => handleScroll(5390)}>
            [03 - Contacts]
          </li>
        </ul>
        <Scroll />
      </div>
      <Image
        src={CloudFrontHome}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
        className="absolute h-full w-full object-cover overflow-visible z-40 "
      />
      <Image
        src={CloudBackHome}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
        className="absolute h-full w-full object-cover overflow-visible z-30 "
      />
    </section>
  );
};

export default HomePage;
