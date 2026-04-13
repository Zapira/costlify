import Content from "@/app/_components/dashboard/content";
import Footer from "@/app/_components/footer";
import Menu from "@/app/_components/menu";
import Navbar from "@/app/_components/navbar";

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
                    {/* <main className="max-w-7xl mx-auto p-2">
                        <Content />
                    </main> */}
                </div>

            </div>
            <Footer />
        </>

    );
}