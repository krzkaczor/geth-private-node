#!/usr/bin/env sh
set -e
cd "$(dirname "$0")"

(sleep 3 && geth --exec "loadScript('/chain/scripts/unlock-accounts.js')" attach http://127.0.0.1:8545)&

exec ./run-node.sh