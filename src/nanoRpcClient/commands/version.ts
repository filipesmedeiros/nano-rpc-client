import { NanoFetcher } from '../fetcher'

export interface VersionResponse {
  RESPONSE_TYPE: any
}

export default function version(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<VersionResponse>(
    {
      action: 'version',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
