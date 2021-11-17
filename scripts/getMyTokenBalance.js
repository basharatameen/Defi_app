const MyToken = artifacts.require("MyToken")
const FarmToken = artifacts.require("FarmToken")

module.exports = async function (callback) {
  myToken = await MyToken.deployed()
  farmToken = await FarmToken.deployed()
  balance = await myToken.balanceOf(farmToken.address)
  //balance = await MyToken.balanceOf()
  console.log(new web3.utils.fromWei(balance.toString()))
  callback()
}