import Link from "next/link";
import { CiCalculator1 } from "react-icons/ci";

export default function Navbar() {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <nav className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-3">
                    <div className="bg-black p-2 rounded-lg">
                        <CiCalculator1 size={40} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-black">
                            Costlify
                        </h1>
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
        </div>
    );
}