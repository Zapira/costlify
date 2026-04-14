'use client'

import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { CiCalculator1 } from "react-icons/ci";
import { LuBox, LuCalculator, LuLayoutDashboard } from "react-icons/lu";
import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";


export default function NavbarHome() {
    const [openNavbar, setOpenNavbar] = useState(false);


    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar);
    };

    return (
        <div className="max-w-7xl mx-auto px-4">
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
                        href="/auth/login"
                        className="px-6 py-2 font-medium bg-linear-to-r from-sky-500 to-emerald-500 text-white rounded-xl transition-colors flex items-center justify-center space-x-2 hover:bg-linear-to-r hover:from-sky-600 hover:to-emerald-600"
                    >
                        <span className="font-bold">Coba Gratis</span>
                        <FaArrowAltCircleRight size={15} />
                    </Link>

                </div>
            </nav>

            <nav className="flex md:hidden justify-between items-center py-4 relative">
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
            </nav>

            <div
                className={`
        absolute left-0 right-0  bg-white shadow-md border-t border-slate-200 z-50
        overflow-hidden transition-all duration-300 ease-in-out
        ${openNavbar ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
    `}
            >
                <ul className="flex flex-col p-4 space-y-2">
                    <Link
                        href="/auth/login"
                        className="px-6 py-2 font-medium bg-linear-to-r from-sky-500 to-emerald-500 text-white rounded-xl transition-colors flex items-center justify-center space-x-2 hover:bg-linear-to-r hover:from-sky-600 hover:to-emerald-600"
                    >
                        <span className="font-bold">Coba Gratis</span>
                        <FaArrowAltCircleRight size={15} />
                    </Link>
                </ul>
            </div>
        </div>
    );
}
