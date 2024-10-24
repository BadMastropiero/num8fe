import {GraphQLClient} from "graphql-request";
import {getSdk} from "@/generated/graphql";

const client = new GraphQLClient(process.env.API_URL || "http://localhost:1/graphql", {
    headers: {
        "x-api-key": process.env.API_KEY || ""
    }
});
export const sdk = getSdk(client);
