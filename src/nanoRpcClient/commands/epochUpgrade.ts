import { NanoFetcher } from '../fetcher'

export interface EpochUpgradeResponse {
  RESPONSE_TYPE: any
}

export default function epochUpgrade(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<EpochUpgradeResponse>(
    {
      action: 'epoch_upgrade',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
