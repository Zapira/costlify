'use client';

import { Eye, Layers, PackagePlus, Pencil, Plus, Trash2, X } from "lucide-react";
import ProductHook from "@/app/_hooks/productHook";
import ButtonCustom from "@/app/_components/shared/buttonCustom";
import Sort from "@/app/_components/shared/sort";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import CountHpp from "./countHpp";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Content() {
    const { handleSubmit, handleAddItem, onSubmit, register, errors, fields, remove, infoCard, page, setPage, products, loading, handleOpenCountHpp, detailProduct } = ProductHook();
    const [showAction, setShowAction] = useState(false);

    const toggleAction = () => {
        setShowAction(!showAction);
    }

    const totalMaterial = products.reduce((total, product) => {
        const materialCost = product.costs
            .filter(cost => cost.type === 'material')
            .reduce((sum, cost) => sum + (cost.total ?? 0), 0)
        return total + materialCost;
    }, 0);

    const totalLabor = products.reduce((total, product) => {
        const laborCost = product.costs
            .filter(cost => cost.type === 'labor')
            .reduce((sum, cost) => sum + (cost.total ?? 0), 0)
        return total + laborCost;
    }, 0);

    const totalOverhead = products.reduce((total, product) => {
        const overheadCost = product.costs
            .filter(cost => cost.type === 'overhead')
            .reduce((sum, cost) => sum + (cost.total ?? 0), 0)
        return total + overheadCost;
    }, 0);

    return (
        <div className="mt-5">
            <div className="bg-white rounded-2xl shadow-sm border-gray-200 p-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                {page === 'add' ? (
                    <>
                        <ButtonCustom
                            onClick={() => setPage('list')}
                        >
                            Batal
                        </ButtonCustom>
                        <button
                            type="submit"
                            form="product-form"
                            className="bg-black cursor-pointer text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
                        >
                            Simpan
                        </button>
                    </>
                ) : (
                    <>
                        <Sort
                            searchFeature={[
                                {
                                    label: "Search",
                                    id: "search",
                                    show: true,
                                },
                            ]}
                        />

                        <ButtonCustom
                            onClick={() => setPage('add')}
                        >
                            + Tambah Produk
                        </ButtonCustom>
                    </>
                )}
            </div>

            {page === 'add' ? (
                <div className="bg-linear-to-br from-gray-50 to-gray-100 mt-4 rounded-xl ">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-black p-3 rounded-xl">
                                    <PackagePlus className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>

                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                                    Informasi Produk
                                </h2>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Nama Produk *
                                </label>

                                <input
                                    type="text"
                                    {...register("productName", {
                                        required: "Nama produk wajib diisi",
                                    })}
                                    placeholder="Contoh: Roti Tawar Premium"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition text-base sm:text-lg"
                                />
                                {errors.productName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.productName.message}
                                    </p>
                                )}
                            </div>
                            <div className="mt-2">
                                <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                                    Jumlah Produksi
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    {...register("qty", {
                                        valueAsNumber: true,
                                        required: "Jumlah item wajib diisi",
                                    })}

                                    placeholder="0"
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition"
                                />
                                {errors.qty && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.qty.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-black p-3 rounded-xl">
                                        <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>

                                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                                        Komponen Biaya
                                    </h2>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleAddItem}
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition w-full sm:w-auto"
                                >
                                    <Plus className="w-5 h-5" />
                                    Tambah Item
                                </button>
                            </div>

                            <div className="space-y-6">
                                <form id="product-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    {fields.map((item, index) => (
                                        <div key={item.id}
                                            className="group relative bg-linear-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-all duration-300 hover:shadow-xl"
                                        >
                                            <div className="absolute -top-3 -left-3 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
                                                {index + 1}
                                            </div>

                                            {index > 0 && (
                                                <button
                                                    type="button"
                                                    onClick={() => remove(index)}
                                                    className="absolute top-3 right-3 text-red-600 cursor-pointer hover:text-red-700 transition"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                            )}

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="md:col-span-2">
                                                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                                                        Nama Item
                                                    </label>
                                                    <input
                                                        type="text"
                                                        {...register(`costs.${index}.name`, {
                                                            required: "Nama item wajib diisi",
                                                        })}
                                                        placeholder="Contoh: Tepung Terigu"
                                                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition"
                                                    />
                                                    {errors.costs?.[index]?.name && (
                                                        <p className="text-red-500 text-sm mt-1">
                                                            {errors.costs[index].name?.message}
                                                        </p>
                                                    )}
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                                                        Tipe
                                                    </label>
                                                    <select
                                                        {...register(`costs.${index}.type`, {
                                                            required: "Tipe item wajib diisi",
                                                        })}
                                                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition bg-white"
                                                    >
                                                        <option value="material">Material</option>
                                                        <option value="labor">Labor</option>
                                                        <option value="overhead">Overhead</option>
                                                        <option value="packaging">Packaging</option>
                                                    </select>
                                                    {errors.costs?.[index]?.type && (
                                                        <p className="text-red-500 text-sm mt-1">
                                                            {errors.costs[index].type?.message}
                                                        </p>
                                                    )}
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                                                        Satuan
                                                    </label>
                                                    <select
                                                        {...register(`costs.${index}.satuan`, {
                                                            required: "Satuan item wajib diisi",
                                                        })}

                                                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition bg-white"
                                                    >
                                                        <option value="kg">Kilogram (kg)</option>
                                                        <option value="gram">Gram (g)</option>
                                                        <option value="liter">Liter (L)</option>
                                                        <option value="ml">Mililiter (mL)</option>
                                                        <option value="pcs">Pieces (pcs)</option>
                                                        <option value="box">Box</option>
                                                        <option value="meter">Meter (m)</option>
                                                        <option value="hour">Jam (hour)</option>
                                                        <option value="botol">Botol</option>
                                                        <option value="tabung">Tabung</option>
                                                        <option value="orang">Orang</option>
                                                    </select>
                                                    {errors.costs?.[index]?.satuan && (
                                                        <p className="text-red-500 text-sm mt-1">
                                                            {errors.costs[index].satuan?.message}
                                                        </p>
                                                    )}
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                                                        Jumlah (Qty)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="0.01"
                                                        {...register(`costs.${index}.qty`, {
                                                            valueAsNumber: true,
                                                            required: "Jumlah item wajib diisi",
                                                        })}

                                                        placeholder="0"
                                                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition"
                                                    />
                                                    {errors.costs?.[index]?.qty && (
                                                        <p className="text-red-500 text-sm mt-1">
                                                            {errors.costs[index].qty?.message}
                                                        </p>
                                                    )}
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                                                        Harga per
                                                    </label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                                                            Rp
                                                        </span>
                                                        <input
                                                            type="number"
                                                            step="0.01"
                                                            {...register(`costs.${index}.price`, {
                                                                valueAsNumber: true,
                                                                required: "Harga item wajib diisi",
                                                            })}

                                                            placeholder="0"
                                                            className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition"
                                                        />
                                                        {errors.costs?.[index]?.price && (
                                                            <p className="text-red-500 text-sm mt-1">
                                                                {errors.costs[index].price?.message}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t-2 border-gray-200">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-semibold text-gray-600">Subtotal Item:</span>
                                                    <span className="text-2xl font-black text-black">
                                                        Rp
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : page === 'hpp' ? (
                <CountHpp key={detailProduct?.id} detailProduct={detailProduct} />
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                        {infoCard.map((item) => (
                            <div key={item.title}>
                                <div className="border border-slate-200 rounded-xl mt-5 p-4 sm:p-6 bg-white overflow-hidden">
                                    <div className="flex justify-between items-center gap-3">
                                        <div className="">
                                            <span>{item.title}</span>
                                            <h2 className="text-3xl font-bold text-black mt-2">{item.value}</h2>
                                        </div>
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="">
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                        {loading ? (
                            [...Array(3)].map((_, index) => (
                                <div key={index} className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                                    <Skeleton count={1} width={150} height={30} className="mb-2" />
                                    <Skeleton count={1} width={100} height={20} className="mb-4" />
                                    <Skeleton count={3} width={'100%'} height={20} className="mb-2" />
                                    <Skeleton count={1} width={120} height={30} className="mt-4" />
                                </div>
                            ))
                        ) : (
                            <>
                                {products.map((product, index) => (
                                    <div key={index} className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300">

                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h2 className="text-xl font-bold text-black">
                                                    {product.productName}
                                                </h2>

                                                <p className="text-sm text-slate-500 mt-1">
                                                    komponen biaya
                                                </p>
                                            </div>

                                            <button onClick={toggleAction} className="text-slate-500 hover:text-black transition cursor-pointer">
                                                <BsThreeDotsVertical size={18} />
                                            </button>
                                        </div>
                                        <div className="relative">
                                            <div className={`absolute -top-16 right-5 bg-white border border-gray-200 rounded-lg shadow-lg p-2 ${showAction ? 'block' : 'hidden'}`}>
                                                <button  onClick={() => handleOpenCountHpp(product.id)} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded">
                                                    <Pencil size={16} />
                                                    Edit
                                                </button>
                                                <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded">
                                                    <Trash2 size={16} />
                                                    Hapus
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-5 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                                                    <span className="text-sm text-slate-600">
                                                        Material
                                                    </span>
                                                </div>

                                                <span className="font-semibold text-black">
                                                    {totalMaterial.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                                    <span className="text-sm text-slate-600">
                                                        {totalLabor.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                    </span>
                                                </div>

                                                <span className="font-semibold text-black">
                                                    {totalLabor.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                                    <span className="text-sm text-slate-600">
                                                        {totalOverhead.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                    </span>
                                                </div>

                                                <span className="font-semibold text-black">
                                                    {totalOverhead.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div className="border-t border-slate-200 my-5"></div>

                                        {/* Total */}
                                        {/* <div className="flex items-end justify-between">
                                <div>
                                    <span className="text-sm font-semibold text-slate-600">
                                        Total HPP
                                    </span>
                                </div>

                                <h1 className="text-4xl font-black text-black">
                                    Rp 144
                                </h1>
                            </div> */}

                                        {/* Actions */}
                                        {product.already_generate_hpp ? (
                                            <div className="mt-5 rounded-xl border p-4 bg-gray-50">
                                                <span>Rekomendasi Harga Jual</span>
                                                <h1 className="text-3xl font-black text-black mt-2">
                                                    {product.hpp.SellingPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                </h1>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => handleOpenCountHpp(product.id)}
                                                className="flex items-center justify-center cursor-pointer gap-2 bg-blue-50 hover:bg-blue-100 text-blue-500 py-3 rounded-xl font-semibold transition w-full mt-5"
                                            >
                                                <Eye size={18} />
                                                <span className="hidden sm:block">Hitung HPP</span>
                                            </button>
                                        )}

                                        {/* Footer */}
                                        <div className="border-t border-slate-200 mt-5 pt-4">
                                            <p className="text-xs text-slate-400">
                                                Terakhir diupdate: 19 Mei 2026
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </>
            )
            }
        </div >
    );
}
