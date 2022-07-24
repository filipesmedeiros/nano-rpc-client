import { NanoFetcher } from '../fetcher'

export interface EpochUpgradeResponse {
  started: 1n
}

export default function epochUpgrade(
  this: NanoFetcher,
  args: {
    epoch: number
    key: string
  },
  options?: { count?: number; threads?: number },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<EpochUpgradeResponse>(
    {
      action: 'epoch_upgrade',
      data: {
        ...args,
        ...options,
      },
    },
    requestOptions
  )
}
