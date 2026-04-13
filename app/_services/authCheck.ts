import api from "../_api/interceptor"
import { setLoading, setlogin, setlogout } from "../_stores/authSlice";
import { store } from "../_stores/store";

export const AuthChecking = async () => {
    try {
        const response = await api.get("/v1/profile");
        store.dispatch(setlogin(response.data));

    } catch (error) {
        store.dispatch(setlogout());
    } finally {
        setTimeout(() => {
            store.dispatch(setLoading(false));
        }, 1000);
    }
};