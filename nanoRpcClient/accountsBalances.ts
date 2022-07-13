import { NanoAccountWeight } from "./accountWeight";

export type AccountsBalancesResponseBalances<
    Accounts extends readonly string[]
> = {
    [account in Accounts[number]]: {
        balance: bigint;
        pending: bigint;
        receivable: bigint;
    };
};

export interface AccountsBalancesResponse<Accounts extends readonly string[]> {
    balances: AccountsBalancesResponseBalances<Accounts>;
}

export class NanoAccountsBalances extends NanoAccountWeight {
    constructor(rpcBaseUrl: string, fetcher: typeof fetch) {
        super(rpcBaseUrl, fetcher);
    }

    /**
     *
     * @param accounts use `as const` to enable autocomplete on the return data
     * @param requestOptions
     * @returns Account balances
     */
    async accountsBalances<Accounts extends readonly string[]>(
        accounts: Accounts,
        requestOptions?: { abortSignal: AbortSignal }
    ) {
        return this.fetch<AccountsBalancesResponse<Accounts>>(
            {
                action: "accounts_balances",
                data: {
                    accounts,
                },
            },
            requestOptions
        );
    }
}
