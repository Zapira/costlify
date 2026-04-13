'use client'

import LoginHook from "@/app/_hooks/loginHook";
import Link from "next/link";
import { BsEye } from "react-icons/bs";
import { CiCalculator1 } from "react-icons/ci";
import { FaInfoCircle } from "react-icons/fa";


export default function RegisterPage() {
    const { register, handleSubmit, errors, onSubmit, showPassword, setShowPassword } = LoginHook();
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
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-md p-4">
                        {errors.root?.serverError && (
                            <div className="flex items-center space-x-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                <FaInfoCircle size={20} className="text-red-500" />
                                <span>{errors.root.serverError.message}</span>
                            </div>
                        )}
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" {...register('email', { required: "Email wajib diisi", pattern: { value: /^\S+@\S+$/i, message: "Format email tidak valid" } })} id="email" className={`border p-2 rounded-lg w-full placeholder:text-sm ${errors.email ? 'border-red-500' : ''}`} placeholder="Masukkan Email" />
                            {errors.email && <div className="flex items-center space-x-2 mt-2"><FaInfoCircle size={15} className="text-red-500" /> <span className="text-red-500 text-sm">{errors.email.message}</span></div>}
                        </div>

                        <div>
                            <label htmlFor="">Password</label>
                            <div className="relative">
                                <input type="password" {...register('password', { required: "Password wajib diisi", minLength: { value: 6, message: "Password minimal 6 karakter" } })} id="password" className={`border p-2 rounded-lg w-full placeholder:text-sm ${errors.password ? 'border-red-500' : ''}`} placeholder="Masukkan Password" />
                                <BsEye size={20} className="text-black absolute right-4 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                            </div>
                            {errors.password && <div className="flex items-center space-x-2 mt-2"><FaInfoCircle size={15} className="text-red-500" /> <span className="text-red-500 text-sm">{errors.password.message}</span></div>}
                        </div>

                        <div className="flex flex-col space-y-4 text-center justify-center mt-5">
                            <button type="submit" className="bg-black text-white p-2 rounded-lg cursor-pointer">Masuk</button>
                            <Link href="/auth/login" className="text-black hover:underline">Belum punya akun ,Daftar sekarang?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}