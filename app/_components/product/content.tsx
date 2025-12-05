'use client';
import ButtonCustom from "../shared/buttonCustom";
import Sort from "../shared/sort";
import { useRouter } from "next/navigation";
import { IoFastFoodOutline } from "react-icons/io5";

export default function Content() {
    const router = useRouter();
    return (
        <div className="mt-5">
            <div className="flex gap-2 justify-between">
                <Sort searchFeature={[
                    {
                        label: "Search",
                        id: "search",
                        show: true,
                    }
                ]} />
                <ButtonCustom onClick={() => { router.push("/kalkulator-hpp") }}>
                    + Tambah Produk
                </ButtonCustom>
            </div>
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
        </div>
    );
}