import { NanoFetcher } from '../fetcher'

export interface WorkGenerateResponse {
  RESPONSE_TYPE: any
}

export default function workGenerate(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkGenerateResponse>(
    {
      action: 'work_generate',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
