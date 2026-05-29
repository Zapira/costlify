'use client';

import { useEffect, useState } from "react";
import {
    Layers,
    PackagePlus,
    Plus,
    Sparkles,
    Calculator,
    BadgeDollarSign
} from "lucide-react";
import { ProductType } from "@/app/_types/productType";


export default function CountHpp({ detailProduct }: { detailProduct: ProductType | null }) {


    const [mode, setMode] = useState<'auto' | 'manual'>('auto');
    const [margin, setMargin] = useState(30);

    const fullText =
        "Hitung HPP membantu menentukan harga jual ideal berdasarkan total biaya produksi, jumlah hasil produksi, dan margin keuntungan.";

    console.log("Detail Product in CountHpp:", detailProduct);

    let totalCost = 0;


    if (detailProduct) {
        totalCost = (detailProduct.costs ?? []).reduce((costAcc, item) => {
            return costAcc + (item.total ?? 0);
        }, 0);
    }

    const mappingNewData = (detailProduct?.costs ?? []).map((item) => ({
        name: item.name,
        type: item.type,
        satuan: item.satuan,
        qty: item.qty,
        price: item.price,
        total: item.total,
    }));

    let hppPerProduct = 0;

    hppPerProduct = totalCost / (detailProduct?.qty ?? 1);

    console.log("Mapped Items for HPP Calculation:", mappingNewData);

    return (
        <div className="bg-linear-to-br from-gray-50 to-gray-100 mt-4 rounded-xl p-2 sm:p-4">

            {/* HERO */}
            <div className="bg-black rounded-3xl p-6 sm:p-8 text-white overflow-hidden relative mb-6">

                <div className="absolute top-0 right-0 opacity-10">
                    <Sparkles size={200} />
                </div>

                <div className="relative z-10">

                    <div className="flex items-center gap-3 mb-4">

                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl">
                            <Calculator className="w-7 h-7" />
                        </div>

                        <div>
                            <h1 className="text-2xl sm:text-4xl font-black">
                                Hitung HPP Produk
                            </h1>

                            <p className="text-gray-300 text-sm mt-1">
                                Simulasi harga jual & keuntungan produk
                            </p>
                        </div>

                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mt-5 border border-white/10">
                        <p className="text-sm sm:text-base text-gray-100 leading-relaxed min-h-[60px]">
                            {fullText}
                            <span className="animate-pulse">|</span>
                        </p>
                    </div>

                </div>

            </div>

            {/* PRODUCT INFO */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8 mb-6">

                <div className="flex items-center gap-3 mb-6">

                    <div className="bg-black p-3 rounded-xl">
                        <PackagePlus className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black">
                            Informasi Produk
                        </h2>

                        <p className="text-sm text-gray-500">
                            Ringkasan data produk dan biaya produksi
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* Product Name */}
                    <div className="border border-gray-200 rounded-xl p-4">
                        <p className="text-sm text-gray-500">
                            Nama Produk
                        </p>

                        <h2 className="text-xl font-bold mt-2">
                            {detailProduct?.productName ?? "Nama Produk"}
                        </h2>

                        <p className="text-xs text-gray-400 mt-2">
                            Produk bakery
                        </p>
                    </div>

                    {/* Total Components */}
                    <div className="border border-gray-200 rounded-xl p-4">
                        <p className="text-sm text-gray-500">
                            Total Komponen
                        </p>

                        <h2 className="text-2xl font-black mt-2">
                            {mappingNewData.length} Item
                        </h2>

                        <p className="text-xs text-gray-400 mt-2">
                            Material, labor & overhead
                        </p>
                    </div>

                    {/* Total Modal */}
                    <div className="border border-gray-200 rounded-xl p-4">
                        <p className="text-sm text-gray-500">
                            Total Modal Produksi
                        </p>

                        <h2 className="text-2xl font-black mt-2">
                            Rp. {totalCost.toLocaleString('id-ID')}
                        </h2>

                        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                            Akumulasi material, tenaga kerja, dan overhead
                        </p>
                    </div>

                    {/* Production Result */}
                    <div className="bg-black text-white rounded-xl p-4">
                        <p className="text-sm text-gray-300">
                            HPP per Produk
                        </p>

                        <h2 className="text-3xl font-black mt-2">
                            Rp. {hppPerProduct.toLocaleString('id-ID')}
                        </h2>

                        <p className="text-xs text-gray-400 mt-2">
                            Berdasarkan total modal ÷ jumlah produksi
                        </p>
                    </div>

                </div>

                {/* Production Count */}
                <div className="mt-5 border border-dashed border-gray-300 rounded-2xl p-5 bg-gray-50">

                    <div className="flex items-center justify-between flex-wrap gap-3">

                        <div>
                            <p className="text-sm text-gray-500">
                                Jumlah Produksi
                            </p>

                            <h2 className="text-3xl font-black mt-1">
                                pcs
                            </h2>
                        </div>

                        <div className="text-right">
                            <p className="text-sm text-gray-500">
                                Rumus
                            </p>

                            <h2 className="font-bold text-lg">
                                Total Modal ÷ Total Produksi
                            </h2>
                        </div>

                    </div>

                </div>

            </div>

            {/* PRICING MODE */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8 mb-6">

                <div className="flex items-center gap-3 mb-6">

                    <div className="bg-black p-3 rounded-xl">
                        <BadgeDollarSign className="w-5 h-5 text-white" />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black">
                            Metode Penentuan Harga
                        </h2>

                        <p className="text-sm text-gray-500">
                            Pilih metode menentukan harga jual produk
                        </p>
                    </div>

                </div>

                {/* TOGGLE */}
                <div className="grid grid-cols-2 gap-3 mb-6">

                    <button
                        onClick={() => setMode('auto')}
                        className={`rounded-2xl border-2 p-4 transition-all ${mode === 'auto'
                            ? 'border-black bg-black text-white'
                            : 'border-gray-200 bg-white text-black'
                            }`}
                    >
                        <h2 className="font-bold text-lg">
                            Otomatis
                        </h2>

                        <p className="text-sm opacity-80 mt-1">
                            Menggunakan margin keuntungan
                        </p>
                    </button>

                    <button
                        onClick={() => setMode('manual')}
                        className={`rounded-2xl border-2 p-4 transition-all ${mode === 'manual'
                            ? 'border-black bg-black text-white'
                            : 'border-gray-200 bg-white text-black'
                            }`}
                    >
                        <h2 className="font-bold text-lg">
                            Manual
                        </h2>

                        <p className="text-sm opacity-80 mt-1">
                            Input harga jual sendiri
                        </p>
                    </button>

                </div>

                {/* AUTO MODE */}
                {mode === 'auto' && (

                    <div className="space-y-6">

                        <div>

                            <div className="flex justify-between items-center mb-3">

                                <label className="font-semibold text-gray-700">
                                    Margin Keuntungan
                                </label>

                                <span className="font-black text-2xl">
                                    {margin}%
                                </span>

                            </div>

                            <input
                                type="range"
                                min={0}
                                max={1000}
                                value={margin}
                                onChange={(e) => setMargin(Number(e.target.value))}
                                className="w-full cursor-pointer"
                            />

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">

                                <p className="text-sm text-gray-500">
                                    HPP per Produk
                                </p>

                                <h2 className="text-2xl font-black mt-2">
                                    Rp {hppPerProduct.toLocaleString('id-ID')}
                                </h2>

                            </div>

                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">

                                <p className="text-sm text-gray-500">
                                    Margin
                                </p>

                                <h2 className="text-2xl font-black mt-2">
                                    {margin}%
                                </h2>

                            </div>

                            <div className="bg-black text-white rounded-2xl p-5">

                                <p className="text-sm text-gray-300">
                                    Harga Jual Rekomendasi
                                </p>

                                <h2 className="text-3xl font-black mt-2">
                                    Rp {((hppPerProduct * margin) / 100 + hppPerProduct).toLocaleString('id-ID')}
                                </h2>  

                            </div>

                        </div>

                    </div>

                )}

                {/* MANUAL MODE */}
                {mode === 'manual' && (

                    <div className="space-y-5">

                        <div>

                            <label className="block font-semibold text-gray-700 mb-2">
                                Input Harga Jual
                            </label>

                            <div className="relative">

                                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-gray-500">
                                    Rp
                                </span>

                                <input
                                    type="number"

                                    placeholder="Masukkan harga jual"
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-black focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                                <p className="text-sm text-gray-500">
                                    HPP per Produk
                                </p>

                                <h2 className="text-2xl font-black mt-2">
                                    Rp
                                </h2>
                            </div>

                            {/* <div className={`rounded-2xl p-5 text-white ${manualProfit >= 0
                                ? 'bg-black'
                                : 'bg-red-500'
                                }`}>

                                <p className="text-sm text-gray-300">
                                    Estimasi Profit
                                </p>

                                <h2 className="text-3xl font-black mt-2">
                                    Rp {manualProfit.toLocaleString('id-ID')}
                                </h2>
                            </div> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}