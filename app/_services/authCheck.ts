// app/_services/authCheck.ts
const authCheck = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth-check`, {
            credentials: 'include', 
        });
        
        if (!response.ok) return null;
        
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

export default authCheck;