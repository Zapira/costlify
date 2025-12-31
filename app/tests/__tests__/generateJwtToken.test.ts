import { generateToken } from "@/app/libs/jwt";

describe("generateJwtToken", () => {
    it("should generate a valid JWT token", () => {
        const user = { id: 1, email: "test@example.com", fullname: "Test User" };
        const token = generateToken(user);
        console.log(token);
        expect(token).toBeDefined();
    });

    it("should throw an error if the user is not provided", () => {
        expect(() => generateToken(null)).toThrow();
    });
});