import { child, get, ref, set } from "firebase/database"
import database from "../config/firebase";

export const WriteData = (path: any, data: any) => {
    return set(ref(database, path), data);
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