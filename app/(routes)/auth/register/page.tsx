'use client'
import Link from "next/link";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { CiCalculator1 } from "react-icons/ci";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-slate-50">
            <div className="flex flex-col justify-center items-center space-x-2 h-screen">
                <div className="flex flex-col space-y-2 border border-slate-50  p-8 rounded-lg items-center bg-white  shadow-lg ">
                    <div className="bg-black p-2 rounded-lg">
                        <CiCalculator1 size={40} className="text-white" />
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-black">Costlify</h1>
                        <span className="text-sm text-slate-500">
                            Hitung HPP & Keuntungan dengan mudah
                        </span>
                    </div>
                    <form action="" className="flex flex-col space-y-2 w-md p-4">
                        <label htmlFor="">Nama Lengkap</label>
                        <input type="text" name="fullname" id="fullname" className="border border-slate-100 p-2 rounded-lg placeholder:text-sm" placeholder="Masukkan Nama Lengkap" />
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="email" className="border border-slate-100 p-2 rounded-lg placeholder:text-sm" placeholder="Masukkan Email" />
                        <label htmlFor="">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" id="password" className="border border-slate-100 p-2 rounded-lg w-full placeholder:text-sm" placeholder="Masukkan Password" />
                            <BsEye size={20} className="text-black absolute right-4 top-3 cursor-pointer" onClick={togglePasswordVisibility} />
                        </div>
                        <label htmlFor="">Password Konfirmasi</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password_confirmation" id="password_confirmation" className="border border-slate-100 p-2 rounded-lg w-full placeholder:text-sm" placeholder="Masukkan Password Konfirmasi" />
                            <BsEye size={20} className="text-black absolute right-4 top-3 cursor-pointer" onClick={togglePasswordVisibility} />
                        </div>
                        <div className="flex flex-col space-y-4 text-center justify-center mt-5">
                            <button type="submit" className="bg-black text-white p-2 rounded-lg">Daftar</button>
                            <Link href="/auth/login" className="text-black">Sudah Punya Akun?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}