import accountBalance from './accountBalance'
import accountBlock from './accountBlock'
import accountBlockCount from './accountBlockCount'
import accountGet from './accountGet'
import accountHistory from './accountHistory'
import accountInfo from './accountInfo'
import accountKey from './accountKey'
import accountRepresentative from './accountRepresentative'
import accountWeight from './accountWeight'
import accountsBalances from './accountsBalances'
import accountsFrontiers from './accountsFrontiers'
import accountsPending from './accountsPending'
import accountsRepresentatives from './accountsRepresentatives'
import { NanoFetcher } from './fetcher'

export class NanoRpcClient extends NanoFetcher {
  constructor(rpcBaseUrl?: string, fetcher?: typeof fetch) {
    super(rpcBaseUrl, fetcher)
  }

  public accountBalance = accountBalance
  public accountBlockCount = accountBlockCount
  public accountGet = accountGet
  public accountHistory = accountHistory
  public accountInfo = accountInfo
  public accountKey = accountKey
  public accountRepresentative = accountRepresentative
  public accountWeight = accountWeight
  public accountsBalances = accountsBalances
  public accountsFrontiers = accountsFrontiers
  public accountsPending = accountsPending
  public accountsRepresentatives = accountsRepresentatives
  public accountBlock = accountBlock
}
