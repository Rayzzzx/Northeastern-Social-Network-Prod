import Image from "next/image";
import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillMessage, AiFillBell, AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import { MdOutlineExpandMore, MdOutlineOndemandVideo } from "react-icons/md";
import { RiFlag2Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";


const Header = () => {
  const { data: session, status } = useSession();
  return (
<div className="sticky z-50 flex h-20 bg-gradient-to-r from-blue-400 to-red-600 items-center p-4 shadow-lg top-0 rounded-b-full">
  {/* Left */}
  <div className="flex items-center space-x-4 rounded-t-full">
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png"
      height={60}
      width={60}
      className="rounded-full border-2 border-white"
    />
    <div className="flex items-center space-x-2 px-4 rounded-full bg-white text-gray-800">
      <HiOutlineSearch size={24} />
      <input
        className="bg-transparent focus:outline-none outline-none flex-shrink w-40"
        type="text"
        placeholder="Search NEU SV"
      />
    </div>
  </div>

  {/* Center */}
  <div className="flex flex-grow justify-center mx-4">
    <div className="flex items-center">
      <div className="flex items-center h-16 px-6 md:px-12 bg-white rounded-b-full md:hover:bg-white cursor-pointer">
        <HiOutlineHome className="mx-auto text-yellow-400" size={32} />
      </div>
    </div>
  </div>

  {/* Right */}
  <div className="flex items-center space-x-4 justify-end min-w-fit rounded-b-full">
    {session.user.image ? (
      <Image
        src={session.user.image}
        height={60}
        width={60}
        onClick={signOut}
        className="rounded-full border-2 border-white cursor-pointer"
      />
    ) : (
      <AiOutlineUser
        size={24}
        className="hidden lg:inline-flex h-16 w-16 bg-gray-800 text-white rounded-full p-4 cursor-pointer hover:bg-gray-600"
        onClick={signOut}
      />
    )}

    <p className="hidden xl:inline-flex font-semibold text-lg text-white">
      {session?.user.name.split(" ")[0]}
    </p>
  </div>
</div>
  );
};

export default Header;