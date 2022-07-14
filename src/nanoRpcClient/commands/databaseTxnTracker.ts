import { NanoFetcher } from '../fetcher'

export interface DatabaseTxnTrackerResponse {
  RESPONSE_TYPE: any
}

export default function databaseTxnTracker(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<DatabaseTxnTrackerResponse>(
    {
      action: 'database_txn_tracker',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}