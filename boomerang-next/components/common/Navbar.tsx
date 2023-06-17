import Link from "next/link";
import Image from "next/image";

import SquareButton from "./SquareButton";

const Navbar = () => {
  return (
    <header className="w-full relative z-10 border-b-2 border-black">
      <nav className="max-w-full flex justify-between items-center">
        <Link href="/" className="flex justify-start items-center">
          <Image
            src="/headerlogo.svg"
            alt="Bommerang Logo"
            width={200}
            height={50}
            className="object-contain border-r-2 border-r-black "
          />
        </Link>
        <div className="flex justify-center items-center space-x-4 font-medium text-sm mr-6">
          <SquareButton title="Mesajlar" containerStyles={`square-btn`} />
          <SquareButton title="Arşiv" containerStyles={`square-btn`} />
          <SquareButton title="Kürsü" containerStyles={`square-btn`} />
          <SquareButton title="Takvim" containerStyles={`square-btn`} />
          <Image
            src="/headerpolygon.svg"
            alt="Polygon logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <Image
            src="/headermenu.svg"
            alt="Polygon logo"
            width={25}
            height={25}
            className="object-contain cursor-pointer ml-8"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
