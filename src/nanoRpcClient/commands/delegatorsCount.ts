import { NanoFetcher } from '../fetcher'

export interface DelegatorsCountResponse {
  count: number
}

export default function delegatorsCount(
  this: NanoFetcher,
  account: string,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<DelegatorsCountResponse>(
    {
      action: 'delegators_count',
      data: {
        account,
      },
    },
    requestOptions
  )
}
