"use client";
import Image from "next/image";

const HomePage = ({ scrollY }) => {
  return (
    <section
      className="relative h-screen bg-blue py-20"
      style={{
        transform: `translateY(${scrollY}px)`,
      }}
    >
      <div
        className="absolute h-full w-full flex z-20 flex-col items-center justify-center gap-10 text-center"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div>
          <p className="text-2xl opacity-50">Web Developer</p>
          <h1 className="text-4xl font-bold">
            BAIN-TRIMBACH{" "}
            <span className="opacity-75">
              {" "}
              <br />
              Ilyan-Jude
            </span>
          </h1>
        </div>
        <ul className="flex justify-around flex-wrap w-full">
          <li>[01 - About Me]</li>
          <li>[02 - Projects]</li>
          <li>[03 - Contacts]</li>
        </ul>
        <div className="flex flex-col items-center">
          <p className="text-center bg-pink p-3 rounded-full border-2 border-black z-20">
            Scroll <br /> Down
          </p>
          <Image
            src="/fleche.svg"
            alt="Background image"
            height={20}
            width={20}
            className="-mt-2 "
          />
        </div>
      </div>
      <Image
        src="/CloudFrontHome.svg"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        style={{
          transform: `translateY(${scrollY * 0.6}px)`,
        }}
        className="absolute h-full w-full object-cover animate-slide-down overflow-visible z-10"
      />
      <Image
        src="/CloudBackHome.svg"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
        className="absolute h-full w-full object-cover animate-slide-down overflow-visible z-0"
      />
    </section>
  );
};

export default HomePage;
