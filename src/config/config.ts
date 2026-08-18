import "dotenv/config";
import { config as dotenvConfig } from "dotenv";
const env = process.env.ENV || "qa";

const environments: Record<string, string> = {
    qa: "https://www.automationexercise.com",
    uat: "https://www.automationexercise.com",
    prod: "https://www.automationexercise.com"
};

export const config = {
    environment: env,
    baseUrl: environments[env],
    headless: process.env.HEADLESS === "true",
    browser: process.env.BROWSER || "chromium",

    credentials: {
        email: process.env.USER_EMAIL || "",
        password: process.env.USER_PASSWORD || ""
    }
};