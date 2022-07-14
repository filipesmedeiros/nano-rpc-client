import accountBalance from './commands/accountBalance'
import accountBlockCount from './commands/accountBlockCount'
import accountCreate from './commands/accountCreate'
import accountGet from './commands/accountGet'
import accountHistory from './commands/accountHistory'
import accountInfo from './commands/accountInfo'
import accountKey from './commands/accountKey'
import accountList from './commands/accountList'
import accountMove from './commands/accountMove'
import accountRemove from './commands/accountRemove'
import accountRepresentative from './commands/accountRepresentative'
import accountRepresentativeSet from './commands/accountRepresentativeSet'
import accountWeight from './commands/accountWeight'
import accountsBalances from './commands/accountsBalances'
import accountsCreate from './commands/accountsCreate'
import accountsFrontiers from './commands/accountsFrontiers'
import accountsPending from './commands/accountsPending'
import accountsRepresentatives from './commands/accountsRepresentatives'
import blockAccount from './commands/blockAccount'
import blockConfirm from './commands/blockConfirm'
import blockCount from './commands/blockCount'
import blockCreate from './commands/blockCreate'
import blockHash from './commands/blockHash'
import blockInfo from './commands/blockInfo'
import blocks from './commands/blocks'
import blocksInfo from './commands/blocksInfo'
import bootstrap from './commands/bootstrap'
import bootstrapAny from './commands/bootstrapAny'
import bootstrapLazy from './commands/bootstrapLazy'
import bootstrapStatus from './commands/bootstrapStatus'
import chain from './commands/chain'
import confirmationActive from './commands/confirmationActive'
import confirmationHeightCurrentlyProcessing from './commands/confirmationHeightCurrentlyProcessing'
import confirmationHistory from './commands/confirmationHistory'
import confirmationInfo from './commands/confirmationInfo'
import confirmationQuorum from './commands/confirmationQuorum'
import databaseTxnTracker from './commands/databaseTxnTracker'
import delegators from './commands/delegators'
import delegatorsCount from './commands/delegatorsCount'
import deterministicKey from './commands/deterministicKey'
import epochUpgrade from './commands/epochUpgrade'
import frontierCount from './commands/frontierCount'
import frontiers from './commands/frontiers'
import keepalive from './commands/keepalive'
import keyCreate from './commands/keyCreate'
import keyExpand from './commands/keyExpand'
import ledger from './commands/ledger'
import nodeId from './commands/nodeId'
import nodeIdDelete from './commands/nodeIdDelete'
import passwordChange from './commands/passwordChange'
import passwordEnter from './commands/passwordEnter'
import passwordValid from './commands/passwordValid'
import peers from './commands/peers'
import process from './commands/process'
import receivable from './commands/receivable'
import receivableExists from './commands/receivableExists'
import receive from './commands/receive'
import receiveMinimum from './commands/receiveMinimum'
import receiveMinimumSet from './commands/receiveMinimumSet'
import representatives from './commands/representatives'
import representativesOnline from './commands/representativesOnline'
import republish from './commands/republish'
import searchPending from './commands/searchPending'
import searchPendingAll from './commands/searchPendingAll'
import send from './commands/send'
import sign from './commands/sign'
import stats from './commands/stats'
import statsClear from './commands/statsClear'
import stop from './commands/stop'
import successors from './commands/successors'
import telemetry from './commands/telemetry'
import unchecked from './commands/unchecked'
import uncheckedClear from './commands/uncheckedClear'
import uncheckedGet from './commands/uncheckedGet'
import uncheckedKeys from './commands/uncheckedKeys'
import unopened from './commands/unopened'
import uptime from './commands/uptime'
import validateAccountNumber from './commands/validateAccountNumber'
import version from './commands/version'
import walletAdd from './commands/walletAdd'
import walletAddWatch from './commands/walletAddWatch'
import walletBalances from './commands/walletBalances'
import walletChangeSeed from './commands/walletChangeSeed'
import walletContains from './commands/walletContains'
import walletCreate from './commands/walletCreate'
import walletDestroy from './commands/walletDestroy'
import walletExport from './commands/walletExport'
import walletFrontiers from './commands/walletFrontiers'
import walletHistory from './commands/walletHistory'
import walletInfo from './commands/walletInfo'
import walletLedger from './commands/walletLedger'
import walletLock from './commands/walletLock'
import walletLocked from './commands/walletLocked'
import walletPending from './commands/walletPending'
import walletRepresentative from './commands/walletRepresentative'
import walletRepresentativeSet from './commands/walletRepresentativeSet'
import walletRepublish from './commands/walletRepublish'
import walletWorkGet from './commands/walletWorkGet'
import workCancel from './commands/workCancel'
import workGenerate from './commands/workGenerate'
import workGet from './commands/workGet'
import workPeerAdd from './commands/workPeerAdd'
import workPeers from './commands/workPeers'
import workPeersClear from './commands/workPeersClear'
import workSet from './commands/workSet'
import workValidate from './commands/workValidate'
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
  public blockAccount = blockAccount
  public blockConfirm = blockConfirm
  public blockCount = blockCount
  public blockCreate = blockCreate
  public blockHash = blockHash
  public blockInfo = blockInfo
  public blocks = blocks
  public blocksInfo = blocksInfo
  public bootstrap = bootstrap
  public bootstrapAny = bootstrapAny
  public bootstrapLazy = bootstrapLazy
  public bootstrapStatus = bootstrapStatus
  public chain = chain
  public confirmationActive = confirmationActive
  public confirmationHeightCurrentlyProcessing =
    confirmationHeightCurrentlyProcessing
  public confirmationHistory = confirmationHistory
  public confirmationInfo = confirmationInfo
  public confirmationQuorum = confirmationQuorum
  public databaseTxnTracker = databaseTxnTracker
  public delegators = delegators
  public delegatorsCount = delegatorsCount
  public deterministicKey = deterministicKey
  public epochUpgrade = epochUpgrade
  public frontierCount = frontierCount
  public frontiers = frontiers
  public keepalive = keepalive
  public keyCreate = keyCreate
  public keyExpand = keyExpand
  public ledger = ledger
  public nodeId = nodeId
  public nodeIdDelete = nodeIdDelete
  public peers = peers
  public process = process
  public receivable = receivable
  public receivableExists = receivableExists
  public representatives = representatives
  public representativesOnline = representativesOnline
  public republish = republish
  public sign = sign
  public stats = stats
  public statsClear = statsClear
  public stop = stop
  public successors = successors
  public telemetry = telemetry
  public validateAccountNumber = validateAccountNumber
  public version = version
  public unchecked = unchecked
  public uncheckedClear = uncheckedClear
  public uncheckedGet = uncheckedGet
  public uncheckedKeys = uncheckedKeys
  public unopened = unopened
  public uptime = uptime
  public workCancel = workCancel
  public workGenerate = workGenerate
  public workPeerAdd = workPeerAdd
  public workPeers = workPeers
  public workPeersClear = workPeersClear
  public workValidate = workValidate
  public accountCreate = accountCreate
  public accountList = accountList
  public accountMove = accountMove
  public accountRemove = accountRemove
  public accountRepresentativeSet = accountRepresentativeSet
  public accountsCreate = accountsCreate
  public passwordChange = passwordChange
  public passwordEnter = passwordEnter
  public passwordValid = passwordValid
  public receive = receive
  public receiveMinimum = receiveMinimum
  public receiveMinimumSet = receiveMinimumSet
  public searchPending = searchPending
  public searchPendingAll = searchPendingAll
  public send = send
  public walletAdd = walletAdd
  public walletAddWatch = walletAddWatch
  public walletBalances = walletBalances
  public walletChangeSeed = walletChangeSeed
  public walletContains = walletContains
  public walletCreate = walletCreate
  public walletDestroy = walletDestroy
  public walletExport = walletExport
  public walletFrontiers = walletFrontiers
  public walletHistory = walletHistory
  public walletInfo = walletInfo
  public walletLedger = walletLedger
  public walletLock = walletLock
  public walletLocked = walletLocked
  public walletPending = walletPending
  public walletRepresentative = walletRepresentative
  public walletRepresentativeSet = walletRepresentativeSet
  public walletRepublish = walletRepublish
  public walletWorkGet = walletWorkGet
  public workGet = workGet
  public workSet = workSet
}
