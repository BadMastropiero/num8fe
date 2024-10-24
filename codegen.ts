import type {CodegenConfig} from "@graphql-codegen/cli";

import dotenv from "dotenv";
dotenv.config();

const config: CodegenConfig = {
    overwrite: true,
    schema: process.env.API_URL,
    documents: "./src/graphql/**/*.graphql",
    generates: {
        "./src/generated/graphql.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-graphql-request",
            ],
            config: {
                rawRequest: true,
                avoidOptionals: true,
                nonOptionalTypename: true
            },
        },
    },
};

export default config;
