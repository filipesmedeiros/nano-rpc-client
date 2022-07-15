import { NanoFetcher } from '../fetcher'

export interface TelemetryResponse {
  RESPONSE_TYPE: any
}

export default function telemetry(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<TelemetryResponse>(
    {
      action: 'telemetry',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
