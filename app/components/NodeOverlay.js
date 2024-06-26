import Image from "next/image";
import purpleBlur from "../../public/blur-radial.svg";

export default function NodeOverlay() {
  return (
    <div>
      <Image
        priority
        src={purpleBlur}
        alt="purple blur"
        className="absolute z-10 inset-x-3"
      />
      <Image
        priority
        src={purpleBlur}
        alt="purple blur"
        className="absolute z-10 end-4"
      />
    </div>
  );
}
