import Image from "next/image";
import foto from "@/assets/capcin.webp";
import { BiCalendar } from "react-icons/bi";
export default function ExampleListHppProduct() {
    const products = [
        {
            id: 1,
            name: "Cappucino Cincau",
            description: "Contoh produk minuman yang dijual oleh UMKM.",
            hpp: "Rp 8.000 - Rp 12.000",
            margin: "+60%",
            date: "09 September 2026",
            image: foto,
        },
    ];

    const newData = Array.from({ length: 6 }, (_, index) => ({
        ...products[0],
        id: index + 1,
    }))


    return (
        <section className="py-16 bg-slate-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col gap-4 mb-12 items-center">
                    <h2 className="text-5xl font-extrabold text-gray-900 rounded-2xl p-4 ml-4">Contoh Perhitungan HPP Produk</h2>
                    <p className="text-gray-600 text-lg text-center max-w-2xl">Berikut adalah contoh perhitungan HPP untuk sebuah produk yang dijual oleh UMKM.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {newData.map((product) => (
                        <div className="bg-white p-6 rounded-xl shadow-md" key={product.id}>
                            <div className="flex justify-between ">
                                <Image src={product.image} alt={product.name} width={150} height={150} className="rounded-lg mb-4 object-contain" />
                                <div className="flex flex-row gap-2">
                                    <BiCalendar size={15} className="text-gray-500 mb-1" />
                                    <span className="text-gray-500 text-sm">{product.date}</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.description}</p>
                            </div>
                            <div>
                                <h4 className="text-sm  text-gray-600 mt-4 mb-2">Estimasi HPP</h4>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-semibold text-gray-900">{product.hpp}</p>
                                    <span className="text-green-400 text-sm">+60% margin</span>
                                </div>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-pointer">
                                Lihat Detail
                            </button>
                        </div>
                    ))}

                </div>
            </div>
        </section >
    )
}