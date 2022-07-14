import { NanoFetcher } from '../fetcher'

export interface TelemetryResponse {
  RESPONSE_TYPE: any
}

export default function telemetry(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<TelemetryResponse>(
    {
      action: 'telemetry',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
