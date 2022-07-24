import { NanoFetcher } from '../fetcher'

export interface DatabaseTxnTrackerResponse {
  txn_tracking: {
    thread: string
    time_held_open: bigint
    write: boolean
    stacktrace: {
      name: string
      address: string
      source_file: string
      source_line: bigint
    }[]
  }[]
}

export default function databaseTxnTracker(
  this: NanoFetcher,
  args: {
    min_read_time: number
    min_write_time: number
  },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<DatabaseTxnTrackerResponse>(
    {
      action: 'database_txn_tracker',
      data: {
        ...args,
      },
    },
    requestOptions
  )
}
