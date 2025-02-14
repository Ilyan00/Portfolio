"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Moon from "@/app/assets/Moon.svg";
import CloudBackProject from "@/app/assets/CloudBackProject.svg";
import CloudFrontProject from "@/app/assets/CloudFrontProject.svg";
import CloudNigthProject from "@/app/assets/CloudNigthProject.svg";

import monito from "@/app/assets/monito.png";
import cannefy from "@/app/assets/Cannefy.png";
import pokemon from "@/app/assets/pokemon.png";
import Link from "next/link";
const projects = [
  {
    title: "Monito",
    description:
      "Projet de reproduction d'une maquette en SCSS en respectant la hiérarchie BEM.",
    image: monito,
    video: "/monito.mp4",
    link: "https://github.com/Ilyan00/sass_project",
  },
  {
    title: "Canne'fy",
    description:
      "Projet d'une application utilisant l'API Spotify pour lire les playlists de l'utilisateur, avec un vinyle animé et une interface minimaliste. Ce projet est fait en html, css et js.",
    image: cannefy,
    video: "/cannefy.mp4",
    link: "https://github.com/Ilyan00/Vinyle",
  },
  {
    title: "Pokemon",
    description:
      "Projet d'un jeu Pokémon où l'on peut choisir un Pokémon pour combattre un adversaire aléatoire. Ce projet est réalisé en PHP orienté objet.",
    image: pokemon,
    video: "/pokemon.mp4",
    link: "https://github.com/Yohzenn/pokemon_structure_objet",
  },
  {
    title: "Monito",
    description:
      "Projet de reproduction d'une maquette en SCSS en respectant la hiérarchie BEM.",
    image: monito,
    video: "/monito.mp4",
    link: "https://github.com/Ilyan00/sass_project",
  },
  {
    title: "Canne'fy",
    description:
      "Projet d'une application utilisant l'API Spotify pour lire les playlists de l'utilisateur, avec un vinyle animé et une interface minimaliste. Ce projet est fait en html, css et js.",
    image: cannefy,
    video: "/cannefy.mp4",
    link: "https://github.com/Ilyan00/Vinyle",
  },
  {
    title: "Pokemon",
    description:
      "Projet d'un jeu Pokémon où l'on peut choisir un Pokémon pour combattre un adversaire aléatoire. Ce projet est réalisé en PHP orienté objet.",
    image: pokemon,
    video: "/pokemon.mp4",
    link: "https://github.com/Yohzenn/pokemon_structure_objet",
  },
];

const AboutPage = ({ scrollY }: { scrollY: number }) => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  if (scrollY <= 3899) {
    if (scrollY <= 1805) {
      return;
    }
    scrollY = 0;
  } else {
    scrollY -= 3899;
  }

  return (
    <section
      className="absolute top-0 left-0 w-full h-screen pt-8 z-10"
      style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    >
      <div className="relative w-full h-full pt-24 z-30">
        <div
          className="w-full h-full bg-CloudBlue"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <Swiper
            className="h-full w-full relative"
            mousewheel={{
              forceToAxis: true,
              sensitivity: 2,
            }}
            freeMode={true}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 4 },
            }}
            loop={true}
            centeredSlides
            touchEventsTarget="container"
            onSlideChange={(swiper) =>
              setActiveProject(projects[swiper.realIndex])
            }
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="!h-1/2 bg-black transition-all"
              >
                <div className="h-full w-full relative">
                  <div className="w-full absolute z-10 h-2/3 bg-black bg-opacity-65 backdrop-blur-xl text-cream p-5 overflow-hidden">
                    <h2 className="text-md">{project.title}</h2>
                    <p className="text-sm">{project.description}</p>
                  </div>
                  <Image
                    src={project.image}
                    alt="Project image"
                    layout="fill"
                    objectFit="cover"
                    className="h-full w-auto absolute z-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div
        className="absolute top-[62%] flex justify-around w-full text-center text-white z-50"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="hidden lg:block w-1/3 h-52">
          <video
            src={activeProject.video}
            height={800}
            width={416}
            className="object-cover w-full h-full rounded-md"
            autoPlay={true}
            loop={true}
            muted={true}
            controls={true}
          ></video>
        </div>
        <div className="w-full flex flex-col items-center lg:w-1/3">
          <h2 className="font-modak text-6xl font-bold">
            {activeProject.title}
          </h2>
          <hr className="w-1/2 py-1" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-75 text-center w-4/5 lg:w-full underline py-1 "
            href={activeProject.link ?? "#"}
          >
            <p>Lien Github</p>
          </Link>
          <p className="opacity-75 text-center w-4/5 lg:w-full">
            {activeProject.description}
          </p>
        </div>
      </div>

      <Image
        src={Moon}
        alt="Moon image"
        height={150}
        width={150}
        style={{
          filter: "drop-shadow(0 4px 6px rgba(255, 223, 0, 0.5))",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
        className="absolute top-0 right-10 object-cover z-20 drop-shadow-lg"
      />

      <div className="absolute -top-24 h-full w-full">
        <Image
          src={CloudNigthProject}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          className="overflow-visible absolute z-0 !-top-36"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <Image
          src={CloudBackProject}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover overflow-visible absolute"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <Image
          src={CloudFrontProject}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover overflow-visible absolute z-20"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
      </div>
    </section>
  );
};

export default AboutPage;
