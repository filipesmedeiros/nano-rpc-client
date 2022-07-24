import { NanoFetcher } from '../fetcher'

export interface FrontiersResponse {
  frontiers: {
    [account: string]: string
  }
}

export default function frontiers(
  this: NanoFetcher,
  args: {
    account: string
    count: number
  },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<FrontiersResponse>(
    {
      action: 'frontiers',
      data: {
        ...args,
      },
    },
    requestOptions
  )
}
