import { NanoFetcher } from '../fetcher'

export type WorkValidateResponse<Difficulty extends boolean | undefined> = {
  valid_all: 1n | 0n
  valid_receive: 1n | 0n
  difficulty: string
  multiplier: bigint
} & (Difficulty extends true ? { valid: 1n | 0n } : {})

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
