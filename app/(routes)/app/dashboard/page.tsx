'use client'

import Footer from "@/app/_components/shared/footer";
import Menu from "@/app/_components/shared/menu";
import Navbar from "@/app/_components/shared/navbar";
import CardInformation from "./_section/cardInformation";
import TableRingkasan from "./_section/tableRingkasan";
import { AuthProvider } from "@/app/_contexts/authContext";

export default function Dashboard() {

    return (
        <>
                <div className="min-h-screen bg-slate-50">
                    <div className="bg-white shadow-sm border-b border-slate-200">
                        <Navbar />
                    </div>

                    <div className="bg-black">
                        <Menu />
                    </div>

                    <div>
                        <main className="max-w-7xl mx-auto p-2">
                            <CardInformation />
                            <TableRingkasan />
                        </main>
                    </div>

                </div>
                <Footer />
        </>
    );
}