export default function TableRingkasan() {
    return (
        <div className="mt-6 bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Ringkasan Produk
                </h2>
                <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-medium">
                    Preview
                </span>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-gray-700">
                    <thead>
                        <tr className="bg-gray-50 text-gray-600">
                            <th className="px-5 py-3 text-left font-medium">Produk</th>
                            <th className="px-5 py-3 text-right font-medium">HPP / Unit</th>
                            <th className="px-5 py-3 text-right font-medium">Harga Jual</th>
                            <th className="px-5 py-3 text-right font-medium">Profit / Unit</th>
                            <th className="px-5 py-3 text-right font-medium">Margin</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-orange-50 transition">
                            <td className="px-5 py-4 font-medium text-gray-800">
                                Produk 1
                            </td>
                            <td className="px-5 py-4 text-right">Rp 0</td>
                            <td className="px-5 py-4 text-right">Rp 0</td>
                            <td className="px-5 py-4 text-right text-green-600 font-semibold">
                                Rp 0
                            </td>
                            <td className="px-5 py-4 text-right">
                                <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-700">
                                    0%
                                </span>
                            </td>
                        </tr>

                        {/* contoh row kedua */}
                        <tr className="hover:bg-orange-50 transition">
                            <td className="px-5 py-4 font-medium text-gray-800">
                                Produk 2
                            </td>
                            <td className="px-5 py-4 text-right">Rp 5.000</td>
                            <td className="px-5 py-4 text-right">Rp 8.000</td>
                            <td className="px-5 py-4 text-right text-green-600 font-semibold">
                                Rp 3.000
                            </td>
                            <td className="px-5 py-4 text-right">
                                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                                    37.5%
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
