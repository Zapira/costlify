import { child, get, push, ref, set } from "firebase/database"
import database from "../config/firebase";

export const WriteData = async (path: any, data: any) => {
    try {
        const newRef = push(ref(database, path), data);
        await set(newRef, {
            id: newRef.key,
            ...data,
        })
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

export const ReadData = async (path: any) => {
    const dbRef = ref(database, path);
    const snapshot = await get(child(dbRef, path));
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        return null;
    }
}