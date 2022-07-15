import { NanoFetcher } from '../fetcher'

export interface WorkGenerateResponse {
  RESPONSE_TYPE: any
}

export default function workGenerate(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkGenerateResponse>(
    {
      action: 'work_generate',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
