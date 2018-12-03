/**
 * geth doesnt support anything beyond ES5.
 * For simplicity this is written directly in ES5, instead of compiling down with babel or anything.
 */

var toWei = web3.toWei;

// maps private keys to desired ether balances
var accounts = {
  "47be2b1589bb515b76b47c514be96b23cd60ee37e81d63c2ae9c92f7d7667e1a": toWei(10000, "ether"),
  "72a4d3589099f14b31725dee59b186419bac41c42d2d02b2c70c1a8af2a2b6bb": toWei(10000, "ether"),
  "1ff8271bf14ac9bef0b641cced40dc2a7ebd2e37d8e16d25b4aa1911364219af": toWei(10000, "ether"),
  "1444ab10c1d1e8aabb89534218854df60d90bb45f39b55634777461d5a465e2e": toWei(10000, "ether"),
  "bff5647520d5e327178330ec0085ab27a58fb26ecb942f770397a940fa5c5d29": toWei(10000, "ether"),
  "8db53d08e85593ffb623e89e352bfed4eea350e6cc9812f11eac4de576f3cfda": toWei(10000, "ether"),
  "24e467ab36f3cf70767135775ec1f7cc2a8b17363055e548113d85072136f945": toWei(10000, "ether"),
  "c3bc1a16a82622f9bddf48f8e754c98092755e2e3782aafdca4ce21a1082747f": toWei(10000, "ether"),
  "e54c55b3c5d80d445841afa3141e52592bec8523d8993d8df1811bfc5bf64d59": toWei(10000, "ether"),
};
// # Corresponding public keys:
// # (0) 0xe6ac5629b9ade2132f42887fbbc3a3860afbd07b (~10000 ETH)
// # (1) 0x700f98b33992cc073744d331d70037ba0d2bca45 (~10000 ETH)
// # (2) 0x79d7176ae8f93a04bc73b9bc710d4b44f9e362ce (~10000 ETH)
// # (3) 0xf18938a83cff0ae67dc105155469556d4224c48f (~10000 ETH)
// # (4) 0x84b07cd505f3257782b96a3e121ac1f5d1cae32f (~10000 ETH)
// # (5) 0x7bd1e022bdfbd45d77913bec1582dc095cb5fa31 (~10000 ETH)
// # (6) 0x627d795782f653c8ea5e7a63b9cdfe5cb6846d9f (~10000 ETH)
// # (7) 0x2e6d01625685281a1e3d10e4b41a61b4e6acb55f (~10000 ETH)
// # (8) 0xf40011040398947b3c6b7532ed23fbc8c19c9654 (~10000 ETH)

console.log("Running DEV MODE SETUP...");

function getLastArrayElement(arr) {
  return arr[arr.length - 1];
}

/**
 * Imports private key, unlocks account and transfers eth
 */
function importAndSetupAccount(privateKey, balance, fromAccount) {
  personal.importRawKey(privateKey, "");
  var publicKey = getLastArrayElement(eth.accounts);
  personal.unlockAccount(publicKey, "", 0);
  eth.sendTransaction({ from: mainAccount, to: publicKey, value: balance });

  console.log(
    "Loaded account:",
    JSON.stringify({
      publicKey: publicKey,
      balance: balance,
      privateKey: privateKey,
    })
  );
}

var mainAccount = eth.accounts[0]; // pre-setup account having shit load of ether, with random public key

Object.keys(accounts).forEach(function(privateKey) {
  var balance = accounts[privateKey];
  importAndSetupAccount(privateKey, balance, mainAccount);
});

console.log("DEV MODE SETUP DONE!");
