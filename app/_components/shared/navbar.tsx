'use client'

import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { CiCalculator1 } from "react-icons/ci";
import { LuBox, LuCalculator, LuLayoutDashboard } from "react-icons/lu";
import { useState } from "react";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import DashboardHook from "@/app/_hooks/dashboardHook";


export default function Navbar() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const authChecking = useSelector((state: any) => state.auth);

    const menuItems = [
        { href: "/", icon: <LuLayoutDashboard />, label: "Dashboard" },
        { href: "/produk-saya", icon: <LuBox />, label: "Produk Saya" },
        { href: "/kalkulator-hpp", icon: <LuCalculator />, label: "Kalkulator HPP" },
    ];

    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar);
    };

    const { handlerLogout } = DashboardHook();

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
                    {authChecking.isLoggedIn ? (
                        <button onClick={handlerLogout}
                            className="flex items-center space-x-3 px-4 py-2 text-black rounded-lg hover:bg-slate-100 border-2 border-slate-300 hover:border-slate-400 transition-colors"
                        >
                            <CgLogOut size={24} className="text-black" />
                            <span>Keluar</span>
                        </button>
                    ) : (
                        <>
                            <Link
                                href="/auth/login   "
                                className="px-5 py-2 font-medium text-slate-600 hover:text-black hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                Masuk
                            </Link>
                            <Link
                                href="/auth/register"
                                className="px-6 py-2 font-medium bg-linear-to-r from-sky-500 to-emerald-500 text-white rounded-xl transition-colors flex items-center justify-center space-x-2 hover:bg-linear-to-r hover:from-sky-600 hover:to-emerald-600"
                            >
                                <span className="font-bold">Coba Gratis</span>
                                <FaArrowAltCircleRight size={15} />
                            </Link>
                        </>
                    )}

                </div>
            </nav>

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
