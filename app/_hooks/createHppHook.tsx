import { toast } from "sonner";
import { createHppCalculation } from "../_services/productService";

export default function CreateHppHook() {
    const handleSubmit = async (productId: string, hppData: any) => {
        try {
            const response = await createHppCalculation(productId, hppData);
            if (response.message === "Product created successfully") {
                toast.success("HPP Calculation saved successfully!")
                setTimeout(() => {
                    window.location.reload();
                }, 1500);

            }
        } catch (error) {
            console.error("Error in HPP Calculation:", error);
            toast.error("Failed to save HPP Calculation.");
        }
    }

    return {
        handleSubmit,
    };
}