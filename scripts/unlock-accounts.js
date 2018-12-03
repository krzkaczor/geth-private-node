console.log("Unlocking all the accounts...");
eth.accounts.forEach(function(publicKey) {
  console.log("Unlocking: ", publicKey);
  personal.unlockAccount(publicKey, "", 0);
});
