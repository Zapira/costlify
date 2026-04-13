import { CgArrowRight } from "react-icons/cg";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden bg-linear-to-r from-sky-100 to-emerald-100 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-3xl text-xs md:text-sm mx-auto md:mx-0">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        AI-Powered HPP Calculation
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
                        Hitung
                        <span className="bg-linear-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent"> HPP </span>
                        bisnis Anda dalam hitungan detik
                    </h1>

                    <p className="text-base md:text-lg text-gray-600 max-w-md mt-4 mx-auto md:mx-0">
                        Platform modern untuk menghitung Harga Pokok Penjualan secara akurat, cepat, dan otomatis. Cocok untuk UMKM hingga manufaktur.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-4">
                        <button className="flex items-center cursor-pointer px-6 py-3 bg-gray-900 hover:bg-black text-white text-sm md:text-base font-semibold rounded-2xl shadow-lg transition">
                            Mulai Hitung Sekarang
                            <CgArrowRight size={20} className="ml-2 font-bold" />
                        </button>
                        <button className="px-6 py-3 cursor-pointer border border-gray-300 hover:border-gray-400 rounded-2xl text-sm md:text-base font-semibold transition">
                            Lihat Demo
                        </button>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-6 text-xs md:text-sm pt-2">
                        <div className="flex -space-x-3">
                            <div className="w-7 h-7 bg-blue-100 rounded-xl border-2 border-white flex items-center justify-center">🧾</div>
                            <div className="w-7 h-7 bg-emerald-100 rounded-xl border-2 border-white flex items-center justify-center">📊</div>
                        </div>
                        <p className="text-gray-500">
                            Dipercaya oleh <span className="font-semibold text-gray-700">1.284+</span> pelaku usaha Indonesia
                        </p>
                    </div>
                </div>

                <div className="hidden md:block relative">
                    <div className="bg-white rounded-3xl shadow-2xl p-3 border">
                        <div className="bg-linear-to-br from-gray-900 to-black rounded-3xl p-6 md:p-8 text-white">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <p className="text-sky-400 text-xs">HPP HARI INI</p>
                                    <p className="text-3xl md:text-5xl font-bold">Rp 2.847.500</p>
                                </div>
                                <div className="text-emerald-400 text-xs md:text-sm">
                                    ↑ 8.4%
                                </div>
                            </div>

                            <div className="space-y-3 text-xs md:text-sm">
                                <div className="flex justify-between"><span>📦 Bahan Baku</span><span>Rp 1.850.000</span></div>
                                <div className="flex justify-between"><span>⚙️ Tenaga Kerja</span><span>Rp 650.000</span></div>
                                <div className="flex justify-between"><span>🏭 Overhead</span><span>Rp 347.500</span></div>
                            </div>

                            <button className="mt-6 w-full py-3 bg-white text-gray-900 font-semibold rounded-2xl text-sm">
                                Hitung Ulang
                            </button>
                        </div>
                    </div>

                    <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-2xl shadow text-xs animate-bounce">
                        ⚡ AI Prediksi
                    </div>

                    <div className="absolute -bottom-4 left-8 bg-emerald-500 text-white px-4 py-2 rounded-2xl text-xs shadow">
                        ✅ 100% Akurat
                    </div>
                </div>
            </div>
        </section>
    );
}