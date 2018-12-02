# Geth Private Node

Easy to setup geth private node with lots of ether!

## Features:

💪 geth node running in `dev` mode

💦 no difficult PoW mining algorithm

⌛ waits for transactions before mining

💸 preloads and unlocks multiple accounts

```
0xe6ac5629b9ade2132f42887fbbc3a3860afbd07b (~10000 ETH)
0x700f98b33992cc073744d331d70037ba0d2bca45 (~10000 ETH)
0x79d7176ae8f93a04bc73b9bc710d4b44f9e362ce (~10000 ETH)
0xf18938a83cff0ae67dc105155469556d4224c48f (~10000 ETH)
0x84b07cd505f3257782b96a3e121ac1f5d1cae32f (~10000 ETH)
0x7bd1e022bdfbd45d77913bec1582dc095cb5fa31 (~10000 ETH)
0x627d795782f653c8ea5e7a63b9cdfe5cb6846d9f (~10000 ETH)
0x2e6d01625685281a1e3d10e4b41a61b4e6acb55f (~10000 ETH)
0xf40011040398947b3c6b7532ed23fbc8c19c9654 (~10000 ETH)
```

## Running

You will need docker to run it:

```bash
docker run -p 8545:8545 -p 8546:8546 krzkaczor/geth-private-node
```

aaand that's it! If you want to use metamask just import private key. Private keys are [here](https://github.com/krzkaczor/geth-private-node/blob/master/scripts/dev-mode.js#L11).

## Development

### Local build

```bash
docker build -t geth-private-node .
```
