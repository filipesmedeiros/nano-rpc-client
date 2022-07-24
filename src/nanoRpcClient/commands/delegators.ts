import { NanoFetcher } from '../fetcher'

export interface DelegatorsResponse {
  delegators: {
    [account: string]: bigint
  }
}

export default function delegators(
  this: NanoFetcher,
  account: string,
  options?: { threshold?: bigint; count?: number; start: string },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<DelegatorsResponse>(
    {
      action: 'delegators',
      data: {
        account,
        ...options,
      },
    },
    requestOptions
  )
}
