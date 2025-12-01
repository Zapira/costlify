"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuBox, LuCalculator, LuLayoutDashboard } from "react-icons/lu";

export default function Menu() {
    const pathname = usePathname();

    const menuItems = [
        { href: "/", icon: <LuLayoutDashboard />, label: "Dashboard" },
        { href: "/dashboard", icon: <LuBox />, label: "Produk Saya" },
        { href: "/dashboard/calc", icon: <LuCalculator />, label: "Kalkulator HPP" },
    ];

    return (
        <div className="max-w-7xl mx-auto flex space-x-2 px-3">
            {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`flex items-center space-x-2 text-white px-2 py-5 border-b-2 transition-all 
                            ${isActive ? "border-b-white" : "border-b-transparent"}
                            hover:bg-gray-800 hover:border-b-gray-800`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </div>
    );
}
