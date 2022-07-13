export class HttpError extends Error {
    constructor(public statusCode: number, public statusText: string) {
        super(`HTTP error: ${statusCode} ${statusText}`);
    }
}
