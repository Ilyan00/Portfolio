"use client";
import Image from "next/image";
import Link from "next/link";
import MyProfilImage from "@/app/assets/me.jpeg";
import { Linkedin, Github, Sun } from "lucide-react";

const AboutPage = ({ scrollY }: { scrollY: number }) => {
  if (scrollY <= 1805) {
    scrollY = 0;
  } else {
    scrollY -= 1805;
  }
  return (
    <section
      className="absolute top-0 left-0 w-full h-screen pt-8 px-5"
      style={{
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    >
      <div className="relative bg-blue w-full h-full pt-28">
        <div className="flex justify-around w-full">
          <div className="md:w-1/2 xl:w-1/4">
            <h2 className="text-cream text-6xl font-modak">About:</h2>
            <p className="text-cream pt-5">
              I’m a 19-year-old full-stack developer, student, and freelancer
              who loves building innovative projects. Self-taught, I’ve been
              learning web development since 2021. I enjoy designing
              applications and websites whenever inspiration strikes. Currently
              in my second year at IIM Digital School in Paris, I’m seeking
              internship opportunities to enhance my skills and take on new
              challenges.
            </p>
            <div className="flex text-black gap-10 flex-wrap w-full mt-5 ">
              <Link
                className="bg-cloudDarkBlue rounded-full border-black border-2 p-5 hover:bg-cloudBlue transition-all"
                href="https://www.linkedin.com/in/ilyan-jude-bain-trimbach-1687a9291/"
              >
                <Linkedin />
              </Link>
              <Link
                className="bg-cloudDarkBlue rounded-full border-black border-2 p-5 hover:bg-cloudBlue transition-all"
                href="https://github.com/Ilyan00"
              >
                <Github />
              </Link>
            </div>
          </div>
          <div className="hidden w-1/3 md:flex items-center relative">
            <div className="hidden lg:block absolute text-6xl top-16 left-60 text-cream">
              <p className="z-50 relative font-modak">Portfolio</p>
              <p className="z-30 relative opacity-50 font-modak">Portfolio</p>
              <p className="z-20 relative opacity-50 font-modak">Portfolio</p>
              <p className="z-10 relative opacity-50 font-modak">Portfolio</p>
            </div>
            <div className="relative z-40">
              <Image
                src={MyProfilImage}
                alt="My profile"
                height={150}
                width={150}
                className="object-cover w-full h-52"
              />
            </div>
          </div>
        </div>
        <Sun
          size={120}
          strokeWidth={1}
          className="absolute top-0 right-0 text-yellow-300"
        />
      </div>
    </section>
  );
};

export default AboutPage;
