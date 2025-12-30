'use client'

import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { CiCalculator1 } from "react-icons/ci";
import { LuBox, LuCalculator, LuLayoutDashboard } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ImProfile } from "react-icons/im";
import { RiProfileFill } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";


export default function Navbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    const pathname = usePathname();
    const menuItems = [
        { href: "/", icon: <LuLayoutDashboard />, label: "Dashboard" },
        { href: "/produk-saya", icon: <LuBox />, label: "Produk Saya" },
        { href: "/kalkulator-hpp", icon: <LuCalculator />, label: "Kalkulator HPP" },
    ];

    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar);
    };

    return (
        <div className="max-w-7xl mx-auto px-4">
            {/* Desktop Navbar */}
            <nav className="hidden md:flex justify-between items-center py-4">
                <div className="flex items-center space-x-3">
                    <div className="bg-black p-2 rounded-lg">
                        <CiCalculator1 size={40} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-black">Costlify</h1>
                        <span className="text-sm text-slate-500">
                            Hitung HPP & Keuntungan dengan mudah
                        </span>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <Link
                        href="/login"
                        className="px-5 py-2 font-medium text-slate-600 hover:text-black hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        Masuk
                    </Link>
                    <Link
                        href="/register"
                        className="px-6 py-2 font-medium bg-black hover:bg-slate-800 text-white rounded-lg transition-colors"
                    >
                        Daftar Gratis
                    </Link>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="flex md:hidden justify-between items-center py-4">
                <div className="flex items-center space-x-3">
                    <div className="bg-black p-2 rounded-lg">
                        <CiCalculator1 size={32} className="text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-black">Costlify</h1>
                </div>

                <div className="flex items-center space-x-2">
                    <button onClick={toggleNavbar}>
                        <BiMenu size={24} className="text-black" />
                    </button>
                </div>

                <div
                    className={`fixed inset-0 z-50 bg-black/30 transition-opacity duration-300
        ${openNavbar ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    onClick={() => setOpenNavbar(false)}
                >

                    <div
                        className={`absolute top-0 right-0 h-full w-64 bg-white
            transform transition-transform duration-300 ease-in-out
            ${openNavbar ? "translate-x-0" : "translate-x-full"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className=" border-b-gray-200 border-b-2   p-4">
                            <Link
                                href="/setting"
                                className="flex items-center space-x-3 px-4 py-2 text-black rounded-lg hover:bg-slate-100"
                            >
                                <CgProfile size={24} className="text-black" />
                                <span>Muhammad Rizki</span>
                            </Link>
                        </div>
                        <ul className="flex flex-col p-4 space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="flex items-center space-x-3 px-4 py-2 text-black rounded-lg hover:bg-slate-100"
                                        onClick={() => setOpenNavbar(false)}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
}
