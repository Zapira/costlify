'use client';
import { useState } from "react";
import { CiCalculator1, CiTrash } from "react-icons/ci";

export default function Content() {
    const [materials, setMaterials] = useState([{ name: "" }]);

    const addMaterial = (e: any) => {
        e.preventDefault();
        setMaterials([...materials, { name: "" }]);
    }

    const handleOnlyNumber = (e: any) => {
        let value = e.target.value;
        value = value.replace(/[^0-9]/g, '');

        const numberValue = Number(value);

        const formatedValue = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(numberValue);

        e.target.value = formatedValue;
    }


    return (
        <div className="mt-5">
            <div className="border border-slate-200 rounded mt-5 p-6 bg-white">
                <div className="flex items-center gap-2">
                    <CiCalculator1 size={40}></CiCalculator1> <h2 className="font-bold text-lg">Kalkulator HPP & Harga Jual</h2>
                </div>
                <form className="mt-5">
                    <div className="mt-3">
                        <label htmlFor="name_product" className="font-bold text-gray-700">Nama Produk</label>
                        <input type="text" name="name_product" id="name_product" className="w-full border rounded-md border-gray-200  flex justify-between p-4 mt-3" placeholder="Contoh: Kue Brownies" />
                    </div>
                    <div className="mt-5" >
                        <div className="flex gap-2 justify-between">
                            <label htmlFor="name_product" className="font-bold text-gray-700">Nama Produk</label>
                            <button className="text-blue-500 cursor-pointer" onClick={addMaterial}>+ Tambah Bahan</button>
                        </div>

                        <div className="flex flex-col gap2">
                            {materials.map((material, index) => (
                                <div key={index} className="flex justify-between gap-2 items-center ">
                                    <div className="flex justify-between gap-2 items-center w-full">
                                        <input type="text" name="material_name" id="material_name" className="w-full border rounded-md border-gray-200  flex justify-between p-4 mt-3" placeholder="Contoh: Tepung Terigu" />
                                        <input type="text" name="cost" id="cost" className="border rounded-md border-gray-200  flex justify-between p-4 mt-3" placeholder="Contoh: Kue Brownies" onChange={handleOnlyNumber} />
                                        {materials.length > 1 && (
                                            <CiTrash size={30} className="items-center text-red-500 cursor-pointer" onClick={() => {
                                                const newMaterials = materials.filter((_, i) => i !== index);
                                                setMaterials(newMaterials);
                                            }} />
                                        )}
                                    </div>

                                </ div>
                            ))}
                        </div>

                    </div>
                </form>

            </div>
        </div>
    );
}