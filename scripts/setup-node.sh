#!/usr/bin/env sh
set -e
cd "$(dirname "$0")"

echo "Setting up private node"

# because of reasons preload flag doesnt work.
./run-node.sh&
geth_pid=$!

sleep 5 # give it some time to setup
geth --exec "loadScript('/chain/scripts/dev-mode.js')" attach http://127.0.0.1:8545
kill -2 $geth_pid
echo "Setting up DONE"