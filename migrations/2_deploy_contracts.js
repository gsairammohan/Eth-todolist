// to change the blockchain state i.e., to add proj to the blockchain


var TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};
