#!/usr/bin/env sh
set -e
cd "$(dirname "$0")"

exec geth --identity PrivateNode --rpc --rpcapi db,eth,net,web3,personal --rpcaddr "0.0.0.0" --rpccorsdomain="*" --ws --wsorigins="*" --wsaddr "0.0.0.0" --wsport=8546 --networkid 1337 --dev --datadir ./data