import Image from "next/image";
import BallonImage from "@/app/assets/Ballon.svg";
import ExplodeImage from "@/app/assets/ExplodeBallon.svg";

const animation = (handleResetScroll: () => void) => {
  const ballon: HTMLImageElement | null = document.querySelector("#ballon");
  if (ballon) {
    ballon.src = ExplodeImage.src;
    setTimeout(() => {
      ballon.src = BallonImage.src;
    }, 500);
    handleResetScroll();
  }
};

const Ballon = ({
  scrollY,
  handleResetScroll,
}: {
  scrollY: number;
  handleResetScroll: () => void;
}) => {
  return (
    <div
      onClick={() => animation(handleResetScroll)}
      className="absolute p-5 z-50 bottom-20 left-0 w-20"
      style={{
        transform: `translateY(${scrollY * -0.1}px)`,
      }}
    >
      <Image
        src={BallonImage}
        id="ballon"
        alt="Ballon image"
        height={150}
        width={150}
        className="absolute top-0 "
      />
    </div>
  );
};

export default Ballon;
