"use client";

import { useState } from "react";

type SearchProps = {
    label: string;
    id: string;
    show: boolean;
};

export default function Sort({ searchFeature }: { searchFeature: SearchProps[] }) {
    const [search, setSearch] = useState("");

    const handleClick = (id: string) => {
        console.log("Search clicked:", id, "value:", search);
    };

    return (
        <div className="flex gap-2">
            {searchFeature.map(
                (btn) =>
                    btn.show && (
                        <div key={btn.id} className="flex gap-2">
                            <input
                                className="px-2 py-1 border border-slate-200 rounded"
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button
                                id={btn.id}
                                type="button"
                                className="px-2 py-1 border border-slate-200 rounded cursor-pointer"
                                onClick={() => handleClick(btn.id)}
                            >
                                {btn.label}
                            </button>
                        </div>
                    )
            )}
        </div>
    );
}
