// app/_services/authCheck.ts
const authCheck = async () => {
    try {
        const response = await fetch("/api/auth/me", {
            credentials: 'include', // Untuk mengirim cookies
        });
        
        if (!response.ok) return null;
        
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

export default authCheck;