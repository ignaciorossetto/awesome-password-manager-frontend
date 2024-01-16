import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { GiOpenTreasureChest } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          // Check if the clicked element is outside the header
          if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
            setOpenMenu(false);
          }
        };
    
        // Attach the event listener
        document.addEventListener("mousedown", handleOutsideClick);
    
        // Cleanup the event listener on component unmount
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, []);

  return (
    <header
    ref={headerRef}
    className='w-full flex-col px-3 xs:px-5 sm:px-16 py-10  bg-black text-white relative'
    >
        <div
        className="flex justify-between"
        >
            <Link
            to={'/'}
            className="font-thin text-3xl font-mono italic"
            >
                AwesomePm
            </Link>
            <div
            className='flex gap-5 sm:gap-10 [&>button]:text-3xl [&>button]:scale-animation'
            >
                <button
                className="hidden scale-animation xs:block"
                >
                    <FaGithub />
                </button>
                {
                    !openMenu ? 
                    <button
                    className="scale-animation"
                    onClick={()=>setOpenMenu(true)}
                    >
                        <MdMenu />
                    </button>
                :
                <button
                className="scale-animation"
                onClick={()=>setOpenMenu(false)}
                >
                    <FaArrowDownWideShort />
                </button>
                }
            </div>
        </div>
        {
            openMenu && 
        <div
        className='flex flex-col items-start gap-1 py-10 px-5 absolute bg-black w-full left-0 text-xl'
        >
            <div
            className="flex gap-2 items-center xs:hidden cursor-pointer scale-animation"
            >
                <FaGithub />
                <span>
                    Login
                </span>
            </div>
            <div
            className="flex gap-2 items-center cursor-pointer scale-animation"
            >
                <BsFillPersonPlusFill />
                <span>
                    Signup
                </span>
            </div>
            <div
            className="flex gap-2 items-center cursor-pointer scale-animation"
            >
                <IoIosInformationCircle />
                <span>
                    About
                </span>
            </div>
            <Link
            to={'/vault'}
            className="flex gap-2 items-center cursor-pointer scale-animation"
            >
                <GiOpenTreasureChest />
                <span>
                    Vault
                </span>
            </Link>
        </div>
        }
    
    </header>
  )
}

export default Header