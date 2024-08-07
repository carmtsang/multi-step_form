import Image from "next/image";
import purpleBlur from "../../public/blur-radial.svg";

export default function NodeOverlay() {
  return (
    <div>
      <Image
        priority
        src={purpleBlur}
        alt="purple blur"
        className="absolute -left-1/4 -top-1/2"
      />
      <Image
        priority
        src={purpleBlur}
        alt="purple blur"
        className="absolute -bottom-1/2 -right-1/4"
      />
    </div>
  );
}
