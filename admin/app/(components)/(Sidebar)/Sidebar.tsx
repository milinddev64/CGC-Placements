"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IconType } from "react-icons";
import Link from "next/link";
import { useExpandContext } from "@/app/(Context)/ExpandContext";
import { links } from "@/app/(Constants)/student_links";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface ILink {
  name: string;
  path: string;
  icon: IconType;
}

const Sidebar = () => {
  const { expand, setExpand } = useExpandContext();
  const pathname = usePathname();
  return (
    <aside className="h-screen fixed z-99 overflow-hidden">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm transition-all duration-300 ${
          expand ? "w-56" : "w-20"
        }`}
      >
        <div
          onClick={() => setExpand(!expand)}
          className={`flex cursor-pointer overflow-hidden justify-between items-center py-4 px-2 pb-4 border-b h-[80px]`}
        >
          {/* <div className="bg-[url('/images/IIITDWD.jpeg')] w-[300px] h-[64px] bg-cover bg-no-repeat"></div> */}
          <div className="bg-[url('/images/CGC-5.jpg')] w-[300px] h-[64px] bg-cover bg-no-repeat"></div>
          {/* <button
            onClick={() => setExpand(!expand)}
            className="p-1.5 mx-3 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expand ? (
              <FaChevronLeft className="text-xl" />
            ) : (
              <FaChevronRight className="text-xl" />
            )}
          </button> */}
        </div>

        {/* Student Links */}
        <h1 className="text-md font-medium px-2 pt-2 text-gray-400">Student</h1>
        <ul className="flex-1">
          {links.map((link: ILink) => {
            const isActive = link.path === pathname;
            return (
              <li key={link.name} className={`relative group`}>
                <Link
                  href={link.path}
                  className={`flex gap-4 ml-[26px] my-4 items-center py-2`}
                >
                  <div
                    className={`text-sm flex items-center gap-2 transition-all ${
                      isActive
                        ? "text-black font-semibold gap-3"
                        : "text-gray-700 group-hover:text-black group-hover:font-medium"
                    }`}
                  >
                    <link.icon
                      className={`text-[1.4rem] transition-all ${
                        isActive && "text-black"
                      }`}
                    />
                    <p
                      className={`truncate font-regular overflow-hidden transition-opacity duration-300 ${
                        !expand && "opacity-0"
                      }`}
                    >
                      {link.name}
                    </p>
                  </div>

                  {!expand && (
                    <div
                      className={`
                        absolute left-full rounded-md px-2 py-1 z-50 ml-6
                        bg-black text-white text-md
                        invisible opacity-100 -translate-x-3 transition-all
                        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                    `}
                    >
                      {link.name}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* <div className="border-t flex p-3 items-center">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-[53px] h-[53px] rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expand ? "w-52 ml-2" : "w-0"
            }`}
          >
            <div className="leading-4">
              <p
                className={`text-md font-semibold transition-transform duration-300 ${
                  !expand && "-translate-x-[300px]"
                }`}
              >
                John Doe
              </p>
              <p
                className={`text-xs text-gray-500 transition-transform duration-300 ${
                  !expand && "-translate-x-[300px]"
                }`}
              >
                Admin
              </p>
            </div>
            <BsThreeDotsVertical className="text-xl" />
          </div>
        </div> */}
        
      </nav>
    </aside>
  );
};

export default Sidebar;