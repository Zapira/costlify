import { BiBrain } from "react-icons/bi";
import { BsDiagram2 } from "react-icons/bs";
import { GoReport } from "react-icons/go";

export default function BestFeature() {
    return (
        <section className="py-16 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col gap-4 mb-12 items-center">
                    <h2 className="text-sm font-medium text-blue-600 rounded-2xl bg-blue-100 p-2 px-3">Costlify</h2>
                    <h2 className="text-5xl font-extrabold text-gray-900 rounded-2xl p-4 ml-4">Apa itu HPP ?</h2>
                    <p className="text-gray-600 text-lg text-center max-w-2xl">HPP (Harga Pokok Penjualan) adalah total biaya yang dikeluarkan untuk memproduksi barang atau jasa yang dijual oleh perusahaan/UMKM. HPP mencakup biaya bahan baku, tenaga kerja langsung, dan overhead produksi.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                        <BiBrain size={40} className="text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Calculation</h3>
                        <p className="text-gray-600">Gunakan kekuatan AI untuk menghitung HPP secara akurat dan cepat.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                        <BsDiagram2 size={40} className="text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Updates</h3>
                        <p className="text-gray-600">Dapatkan informasi terkini tentang harga pasar bahan baku secara real-time.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                        <GoReport size={40} className="text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Reporting & Analytics</h3>
                        <p className="text-gray-600">Lihat analisis dan laporan yang membantu dalam pengambilan keputusan.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}