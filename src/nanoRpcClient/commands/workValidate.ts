import { NanoFetcher } from '../fetcher'

export type WorkValidateResponse<Difficulty extends boolean | undefined> = {
  valid_all: 1 | 0
  valid_receive: 1 | 0
  difficulty: string
  multiplier: number
} & (Difficulty extends true ? { valid: 1 | 0 } : {})

export default function workValidate(
  this: NanoFetcher,
  params: { work: string; hash: string },
  options: { difficulty?: string; multiplier?: number } = {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<
    WorkValidateResponse<
      typeof options['difficulty'] extends true ? true : false
    >
  >(
    {
      action: 'work_validate',
      data: {
        ...params,
        ...options,
      },
    },
    requestOptions
  )
}
