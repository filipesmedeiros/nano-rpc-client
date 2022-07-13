import { RpcAction, RpcResponse } from "../../types/types";
import { HttpError } from "../httpError";
import { RpcError } from "../rpcError";
import { keysToSnake, replacer, keysToCamel, reviver } from "../transformData";

export class NanoFetcher {
    constructor(
        protected rpcBaseUrl = "http://localhost:7076",
        protected fetcher = fetch
    ) {}

    protected async fetch<Data>(
        request: { action: RpcAction; data: any },
        options?: { abortSignal: AbortSignal }
    ) {
        const response = await this.fetcher(this.rpcBaseUrl, {
            headers: { "Content-Type": "application/json" },
            signal: options?.abortSignal,
            body: JSON.stringify(
                {
                    action: request.action,
                    ...keysToSnake(request.data),
                },
                replacer
            ),
        });

        if (!response.ok)
            throw new HttpError(response.status, response.statusText);

        const data: RpcResponse<Data> = keysToCamel(
            JSON.parse(await response.text(), reviver)
        );

        if ("error" in data) throw new RpcError(data.error);

        return data;
    }
}
