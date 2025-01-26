import Image from "next/image";

const HomePage = () => {
  return (
    <section className="relative w-full h-full">
      <Image
        src="/CloudFrontHome.svg"
        alt="Background image"
        height={100}
        width={100}
        className="absolute h-full w-full object-cover animate-slide-down "
      />
    </section>
  );
};

export default HomePage;
