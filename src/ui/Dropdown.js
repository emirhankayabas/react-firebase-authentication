import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dropdown({ label, handleLogout }) {
  return (
    <Menu>
      <Menu.Button className="flex items-center gap-x-1">
        {label}
        <BsChevronDown size={18} className="mt-[2px]" />
      </Menu.Button>
      <Menu.Items className="absolute top-full bg-white rounded-md shadow-wrapperFocus w-56 -right-1 mt-4">
        <Menu.Item>
          <Link
            to="/"
            className="flex py-3 px-3 text-black w-full items-center gap-x-2 text-sm hover:bg-zinc-50 transition-colors cursor-pointer"
          >
            <span>
              <FaRegUserCircle size={16} />
            </span>
            Profil
          </Link>
        </Menu.Item>
        <Menu.Item>
          <div className="flex py-3 px-3 text-black w-full items-center gap-x-2 text-sm hover:bg-zinc-50 transition-colors cursor-pointer">
            2
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="flex py-3 px-3 text-black w-full items-center gap-x-2 text-sm hover:bg-zinc-50 transition-colors cursor-pointer">
            3
          </div>
        </Menu.Item>
        <Menu.Item>
          <div
            className="flex py-3 px-3 text-black w-full items-center gap-x-2 text-sm hover:bg-zinc-50 transition-colors cursor-pointer border-t border-t-zinc-200"
            onClick={handleLogout}
          >
            Çıkış yap
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
