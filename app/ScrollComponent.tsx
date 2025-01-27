import Image from "next/image";
import Fleche from "@/app/assets/fleche.svg";
const Scroll = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center bg-pink p-3 rounded-full border-2 border-black z-50">
        Scroll <br /> Down
      </p>
      <Image
        src={Fleche}
        alt="Background image"
        height={20}
        width={20}
        className="-mt-2 "
      />
    </div>
  );
};

export default Scroll;
