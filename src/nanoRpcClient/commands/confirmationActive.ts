import { NanoFetcher } from '../fetcher'

export interface ConfirmationActiveResponse {
  confirmations: string[]
  unconfirmed: bigint
  confirmed: bigint
}

export default function confirmationActive(
  this: NanoFetcher,
  announcements?: number,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ConfirmationActiveResponse>(
    {
      action: 'confirmation_active',
      data: {
        announcements,
      },
    },
    requestOptions
  )
}
