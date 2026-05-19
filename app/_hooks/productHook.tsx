'use client';

import { useFieldArray, useForm } from "react-hook-form";
import { ProductType } from "../_types/productType";
import { useState } from "react";
import { createProduct } from "../_services/productService";
import axios from "axios";
import { ServerError } from "../_types/errorType";
import { toast } from "sonner";
import { Box, Layers, PackagePlus } from "lucide-react";

export default function ProductHook() {
    const { control, register, handleSubmit, formState: { errors }, setError } = useForm<ProductType>({
        defaultValues: {
            productName: "",
            items: [
                {
                    name: "",
                    type: "",
                    satuan: "",
                    qty: 0,
                    price: 0,
                },
            ],
        },
    });

    const [showAddForm, setShowAddForm] = useState(false);
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    })

    const handleAddItem = () => {
        append({
            name: "",
            type: "material",
            satuan: "kg",
            qty: 0,
            price: 0,
        })
    }

    const onSubmit = async (data: ProductType) => {
        try {
            console.log("Form Data:", data);

            const response = await createProduct(data);
            if (response.status === 'success') {
                toast.success("Produk berhasil ditambahkan!");
                setTimeout(() => {
                    setShowAddForm(false);
                }, 1000);
            }
            return response;
        } catch (error) {
            if (axios.isAxiosError<ServerError>(error)) {
                const status = error.response?.status;

                if (status === 422) {
                    setError("root.serverError", {
                        type: "server",
                        message: error.response?.data?.message || "Terjadi kesalahan pada server",
                    });
                } else {
                    setError("root.serverError", {
                        type: "server",
                        message: "Server sedang maintenance, silakan coba lagi nanti",
                    });
                }
            } else {
                setError("root.serverError", {
                    type: "server",
                    message: "Unexpected error",
                });
            }
        }
    }

    const infoCard = [
        {
            icon: <div className="bg-blue-200 p-4 rounded-lg">
                <Box size={30} className="text-blue-700" />
            </div>,
            title: "Total Produk",
            value: "0",
        },
        {
            icon: <div className="bg-green-200 p-4 rounded-lg">
                <Layers size={30} className="text-green-700" />
            </div>,
            title: "Total Bahan Baku",
            value: "0",
        },
        {
            icon: <div className="bg-yellow-200 p-4 rounded-lg">
                <PackagePlus size={30} className="text-yellow-700" />
            </div>,
            title: "Total Produk Baru",
            value: "0",
        },
    ];

    return {
        register,
        handleSubmit,
        errors,
        fields,
        handleAddItem,
        remove,
        showAddForm,
        setShowAddForm,
        onSubmit,
        infoCard,
    }
}