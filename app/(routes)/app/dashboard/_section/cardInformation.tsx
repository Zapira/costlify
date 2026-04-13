import { FaArrowTrendUp, FaMoneyBill } from "react-icons/fa6";

export default function CardInformation() {
    const cardInformation = [
        {
            title: "Total Pendapatan",
            value: "Rp. 0",
            bgColor: "bg-blue-100",
            icon: <FaArrowTrendUp size={20} className="text-green-500" />
        },
        {
            title: "Total Biaya Produksi",
            value: "Rp. 0",
            bgColor: "bg-red-100",
            icon: <FaMoneyBill size={20} className="text-red-500" />
        },
        {
            title: "Total Keuntungan",
            value: "Rp. 0",
            bgColor: "bg-green-100",
            icon: <FaArrowTrendUp size={20} className="text-green-500" />
        },
    ]
    return (
        <div className="space-y-5 mt-5">
            {cardInformation.map((item) => (
                <div
                    key={item.title}
                    className={`border border-slate-200 p-5 rounded-lg ${item.bgColor}`}
                >
                    <div className="flex justify-between">
                        <span>{item.title}</span>
                        {item.icon}
                    </div>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    );
}