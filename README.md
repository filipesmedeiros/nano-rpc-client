<p style="text-align:center;"><img src="/assets/logo.svg" height="auto" alt="Nano RPC client logo"></p>

# Nano RPC client

A simple and strongly typed client for [Nano's RPC](https://docs.nano.org/commands/rpc-protocol/), written in Typescript.

## Usage

In node, you have to provide a `fetch` function

```typescript
import NanoRpcClient from 'nano-rpc-client'
import nodeFetch from 'node-fetch'

const client = new NanoRpcClient('https://my.nano.node/rpc', nodeFetch)
```

---

If you're in the browser, `window.fetch` is used by default

```typescript
import NanoRpcClient from 'nano-rpc-client'

const client = new NanoRpcClient('https://my.nano.node/rpc')
```

---

RPC command arguments and their results are strongly typed

```typescript
const info = await client.accountInfo('nano_1pnano1yzoxyk11geczosh1bwh97w5t1kfmokwz8hkgiy55h6a7rz6dyr1tm')

info.balance // this is a bigint
info.confirmedBalance // this throws an error at compile time because it doesn't exist

const confirmedInfo = await client.accountInfo('nano_1pnano1yzoxyk11geczosh1bwh97w5t1kfmokwz8hkgiy55h6a7rz6dyr1tm', { includeConfirmed: true })

confirmedInfo.confirmedBalance // this exists (and is a bigint) at compile time because you added the `includeConfirmed` option
```

---

You can pass an `AbortSignal` to all calls to cancel them

```typescript
const controller = new AbortController()

const confirmedInfo = await client.accountInfo('nano_1pnano1yzoxyk11geczosh1bwh97w5t1kfmokwz8hkgiy55h6a7rz6dyr1tm', undefined, { abortSignal: controller.signal })

if('someCondition')
    controller.abort()
```

---

Errors in the RPC command (normally returned in the body) are thrown as `RpcError`s that contain a `message`

```typescript
try {
    const info = await client.accountInfo('')
} catch (e) {
    console.log(e.message) // logs "Bad account number"
}
```

## Goals

- To be the _de facto_ JS RPC client, with strong argument typing and great autocomplete
- To eventually be included as an official package of the nano ecosystem (meaning, distributed under an easily recognizable name like `@nano/rpc` or `@nano-utils/rpc` or something like that)
- To support the most current version of the [RPC spec](https://docs.nano.org/commands/rpc-protocol/)
- In the future, validate arguments before the request is made (for example, validate nano address strings or number strings)

## Non-goals

- To support versions of the [RPC spec](https://docs.nano.org/commands/rpc-protocol/) other than latest
