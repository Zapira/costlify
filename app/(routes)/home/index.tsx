import Footer from "@/app/_components/shared/footer";
import Hero from "./_section/hero";
import Summary from "./_section/summary";
import BestFeature from "./_section/bestFeature";
import NavbarHome from "@/app/_components/shared/navbarHome";
import ExampleListHppProduct from "./_section/exampleListHppProduct";


export default function Index() {
    return (
        <>
            <div className="min-h-screen bg-slate-50">
                <div className="bg-white shadow-sm border-b border-slate-200">
                    <NavbarHome />
                </div>
                <div>
                    <Hero />
                    <Summary />
                    <BestFeature />
                    <ExampleListHppProduct />
                    <main className="max-w-7xl mx-auto p-2">

                    </main>
                </div>

            </div>
            <Footer />
        </>
    );
}