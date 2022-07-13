import { NanoFetcher } from './fetcher'

export interface AccountWeightResponse {
  weight: bigint
}

export default async function accountWeight(
  this: NanoFetcher,
  account: string,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountWeightResponse>(
    {
      action: 'account_weight',
      data: {
        account,
      },
    },
    requestOptions
  )
}
