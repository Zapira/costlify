export default function BestFeature() {
    return (
        <section className="py-16 bg-slate-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-row gap-4 mb-12 items-center">
                    <h2 className="text-3xl font-bold text-gray-900 rounded-2xl bg-blue-100 p-4">Fitur Unggulan</h2>
                    <h2 className="text-3xl font-bold text-gray-900 rounded-2xl bg-blue-100 p-4 ml-4">Semua yang Anda Butuhkan untuk HPP</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Calculation</h3>
                        <p className="text-gray-600">Gunakan kekuatan AI untuk menghitung HPP secara akurat dan cepat.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Updates</h3>
                        <p className="text-gray-600">Dapatkan pembaruan langsung tentang perubahan biaya dan harga.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Reporting & Analytics</h3>
                        <p className="text-gray-600">Lihat analisis dan laporan yang membantu dalam pengambilan keputusan.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}