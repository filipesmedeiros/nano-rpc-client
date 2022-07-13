<p style="text-align:center;"><img src="/assets/logo.svg" height="auto" alt="Nano RPC client logo"></p>

# Nano RPC client

A simple and strongly typed client for Nano's RPC, written in Typescript.

## Usage

```typescript
import NanoRpcClient from 'nano-rpc-client'
import nodeFetch from 'node-fetch'

// in node, you have to provide a `fetch` function
let client = new NanoRpcClient('https://my.nano.node/rpc', nodeFetch)
// if you're in the browser, `window.fetch` is used by default
client = new NanoRpcClient('https://my.nano.node/rpc')

const info = await client.accountInfo('nano_1pnano1yzoxyk11geczosh1bwh97w5t1kfmokwz8hkgiy55h6a7rz6dyr1tm')

info.balance // this is a bigint
info.confirmedBalance // this throws an error at compile time because it doesn't exist

const confirmedInfo = await client.accountInfo('nano_1pnano1yzoxyk11geczosh1bwh97w5t1kfmokwz8hkgiy55h6a7rz6dyr1tm', { includeConfirmed: true })

confirmedInfo.confirmedBalance // this exists (and is a bigint) at compile time because you added the `includeConfirmed` option


// you can pass an `AbortSignal` to all calls to cancel them
const controller = new AbortController()

const confirmedInfo = await client.accountInfo('nano_1pnano1yzoxyk11geczosh1bwh97w5t1kfmokwz8hkgiy55h6a7rz6dyr1tm', { includeConfirmed: true }, { abortSignal: controller.signal })

if('someCondition')
    controller.abort()
```

## Goals

- To be the _de facto_ JS RPC client, with strong argument typing and great autocomplete
- To eventually be included as an official package of the nano ecosystem (meaning, distributed under an easily recognizable name like `@nano/rpc` or `@nano-utils/rpc` or something like that)
- To support the most current version of the RPC spec

## Non-goals

- To support versions of the RPC spec other than latest
