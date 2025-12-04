"use client";

export default function ButtonCustom({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            className="px-6 py-2 font-medium bg-black hover:bg-slate-800 text-white rounded-lg transition-colors cursor-pointer"
            onClick={onClick}
        >
            {children}
        </button>
    );
}