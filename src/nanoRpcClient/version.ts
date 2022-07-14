import { NanoFetcher } from './fetcher'

export interface VersionResponse {
  RESPONSE_TYPE: any
}

export default function version(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<VersionResponse>(
    {
      action: 'version',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
