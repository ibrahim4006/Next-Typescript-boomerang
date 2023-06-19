"use client"
import Link from "next/link";
import Image from "next/image";

import SquareButton from "./SquareButton";
import {useState} from 'react'
import PanoCard from "./PanoCard";

const Navbar = () => {
  const [showPano, setShowPano] = useState(false);

  const handleClickPano = () => {
    if (!showPano) {
      setShowPano(true);
    } else {
      setShowPano(false);
    }
  };
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
          <Link href="/mesajlar"><SquareButton title="Mesajlar" containerStyles={`square-btn`} /></Link>
          <SquareButton title="Arşiv" containerStyles={`square-btn`} />
          <SquareButton title="Kürsü" containerStyles={`square-btn`} />
          <SquareButton title="Takvim" containerStyles={`square-btn`}/>
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
            onClick={handleClickPano} 
          />
          {showPano && (
            <div className="absolute right-0 top-12 w-[30%] h-[47vw] bg-[#0D0D0D] pt-5 flex-col justify-start space-y-14">
              <PanoCard title="TYT" />
              <PanoCard title="AYT" />
              <PanoCard title="Yarışma" />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
