import { APIRequestContext } from "@playwright/test";

export class LoginApi {
    constructor(private apiRequest: APIRequestContext) {}

    async login(email: string, password: string) {
        return this.apiRequest.post("/api/verifyLogin", {
            form: {
                email,
                password
            }
        });
    }
}