'use client';
import { useState } from "react";
import ButtonCustom from "../shared/buttonCustom";
import Sort from "../shared/sort";
import { IoFastFoodOutline } from "react-icons/io5";
import { Layers, PackagePlus, Plus, X } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { createProduct } from "@/app/_services/productService";

export default function Content() {
    const { control, register, handleSubmit, formState: { errors }, setError } = useForm({
        defaultValues: {
            productName: "",
            items: [
                {
                    name: "",
                    type: "material",
                    satuan: "kg",
                    qty: 0,
                    price: 0,
                }
            ]
        }
    });
    const [showAddForm, setShowAddForm] = useState(false);
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    })

    const handleAddItems = () => {
        append({
            name: "",
            type: "material",
            satuan: "kg",
            qty: 0,
            price: 0,
        });
    }

    const onSubmit = async (data: any) => {
        try {
            console.log("Form Data:", data);

            const response = await createProduct(data);
            console.log(response);
        } catch (error) {
            console.error("Error creating product:", error.response);
        }
    }

    return (
        <div className="mt-5">
            <div className="flex gap-2 justify-between">
                {showAddForm ? (
                    <>
                        <ButtonCustom onClick={() => setShowAddForm(false)} >
                            Batal
                        </ButtonCustom>

                        <button type="submit" form="product-form" className="bg-black cursor-pointer text-white font-bold py-2 px-4 rounded">
                            Simpan
                        </button>
                    </>
                ) : (
                    <>
                        <Sort searchFeature={[
                            {
                                label: "Search",
                                id: "search",
                                show: true,
                            }
                        ]} />

                        <ButtonCustom onClick={() => setShowAddForm(true)} >
                            + Tambah Produk
                        </ButtonCustom>
                    </>

                )}


            </div>
            {showAddForm ? (
                <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 mt-4">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-black p-3 rounded-xl">
                                    <PackagePlus className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-black">Informasi Produk</h2>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Nama Produk *
                                </label>
                                <input
                                    type="text"
                                    {...register("productName", { required: "Nama produk wajib diisi" })}
                                    placeholder="Contoh: Roti Tawar Premium"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition text-lg"
                                />
                            </div>
                        </div>

                        {/* Item Costs Card */}

                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-black p-3 rounded-xl">
                                        <Layers className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-black">Komponen Biaya</h2>
                                </div>
                                <button
                                    onClick={handleAddItems}
                                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition"
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
                                            <div className="absolute -top-3 -left-3 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
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
                                                        {...register(`items.${index}.name`)}
                                                        placeholder="Contoh: Tepung Terigu"
                                                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                                                        Tipe
                                                    </label>
                                                    <select
                                                        {...register(`items.${index}.type`)}
                                                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition bg-white"
                                                    >
                                                        <option value="material">Material</option>
                                                        <option value="labor">Labor</option>
                                                        <option value="overhead">Overhead</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                                                        Satuan
                                                    </label>
                                                    <select
                                                        {...register(`items.${index}.satuan`)}

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
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                                                        Jumlah (Qty)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        step="0.01"
                                                        {...register(`items.${index}.qty` , {
                                                            valueAsNumber: true,
                                                        })}

                                                        placeholder="0"
                                                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition"
                                                    />
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
                                                            {...register(`items.${index}.price`, {
                                                                valueAsNumber: true,
                                                            })}

                                                            placeholder="0"
                                                            className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition"
                                                        />
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
            ) : (
                <div className="border border-slate-200 rounded mt-5 p-6 bg-white">
                    <div>
                        <div className="flex  justify-between gap-2">
                            <h2 className="font-bold ">#1 Kue Brownies</h2>
                            <IoFastFoodOutline size={24} />
                        </div>
                        <span className="text-sm text-slate-600">Produksi: 10 unit/batch</span>
                    </div>
                    <div className="border rounded-md border-transparent bg-gray-100 flex justify-between p-4 mt-3">
                        <span className="text-sm ">Biaya Bahan</span>
                        <span className="text-sm ">Rp. 10.000</span>
                    </div>
                    <div className="border rounded-md border-transparent bg-gray-100 flex justify-between p-4 mt-3">
                        <span className="text-sm ">Biaya Tenaga Kerja</span>
                        <span className="text-sm ">Rp. 10.000</span>
                    </div>
                    <div className="border rounded-md border-transparent bg-gray-100 flex justify-between p-4 mt-3">
                        <span className="text-sm ">Biaya Overhead</span>
                        <span className="text-sm ">Rp. 10.000</span>
                    </div>
                    <div className="border rounded-md border-blue-200 bg-blue-50 flex justify-between p-4 mt-3">
                        <span className="text-sm font-bold text-blue-600">HPP Per Unit</span>
                        <span className="text-sm font-bold text-blue-600">Rp. 10.000</span>
                    </div>
                    <div className="border rounded-md border-green-200 bg-green-50 flex justify-between p-4 mt-3">
                        <span className="text-sm font-bold text-green-600">Harga Jual</span>
                        <span className="text-sm font-bold text-green-600">Rp. 10.000</span>
                    </div>
                    <div className="border rounded-md border-purple-200 bg-purple-50 flex justify-between p-4 mt-3">
                        <span className="text-sm font-bold text-purple-600">Profit Per Unit</span>
                        <span className="text-sm font-bold text-purple-600">Rp. 10.000</span>
                    </div>
                </div>
            )}


        </div>
    );
}