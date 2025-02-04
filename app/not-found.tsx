"use client";
import Image from "next/image";
import CloudFrontNotFound from "@/app/assets/CloudFrontNotFound.svg";
import CloudBackNotFound from "@/app/assets/CloudBackNotFound.svg";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-cloudDarkViolet h-screen w-screen">
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
        <h2
          className="text-cloudViolet md:-mb-10 text-9xl font-modak md:text-[20rem]"
          style={{
            textShadow: "-5px 5px #A18CFF",
          }}
        >
          404
        </h2>
        <div className="text-center md:text-xl lg:text-2xl">
          <p
            className="text-cream pb-1"
            style={{
              textShadow: "-2px 2px #aaa",
            }}
          >
            Oups... Vous êtes perdu dans les nuages !
          </p>
          <Link
            href="/"
            className="text-cream"
            style={{
              textShadow: "-2px 2px #aaa",
            }}
          >
            Pas de panique, suivez le vent et retournez en lieu sûr en cliquant
            ici
          </Link>
        </div>
      </div>

      <Image
        src={CloudFrontNotFound}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="absolute h-full w-full object-cover overflow-visible z-10 "
      />
      <Image
        src={CloudBackNotFound}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="absolute !-top-24 h-full w-full object-cover overflow-visible z-0 "
      />
    </main>
  );
}
