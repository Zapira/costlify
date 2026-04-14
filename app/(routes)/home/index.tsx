import Footer from "@/app/_components/shared/footer";
import Navbar from "@/app/_components/shared/navbar";
import Hero from "./_section/hero";
import Summary from "./_section/summary";
import BestFeature from "./_section/bestFeature";


export default function Index() {
    return (
        <>
            <div className="min-h-screen bg-slate-50">
                <div className="bg-white shadow-sm border-b border-slate-200">
                    <Navbar />
                </div>
                <div>
                    <Hero />
                    <Summary />
                    <BestFeature />
                    <main className="max-w-7xl mx-auto p-2">

                    </main>
                </div>

            </div>
            <Footer />
        </>
    );
}