import { NanoFetcher } from './fetcher'

export interface BlockConfirmResponse {
  started: 1
}

export default function blockConfirm(
  this: NanoFetcher,
  hash: string,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlockConfirmResponse>(
    {
      action: 'block_confirm',
      data: {
        hash,
      },
    },
    requestOptions
  )
}
