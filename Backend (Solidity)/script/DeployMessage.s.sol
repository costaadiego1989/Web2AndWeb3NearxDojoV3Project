//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import { Script, console } from "../lib/forge-std/src/Script.sol";
import { Message } from "../src/Message.sol";

contract DeployMessage is Script {
  Message public messageContract;

  function run() external {
    uint256 deployerPrivateKey = vm.envUint("PV_KEY");

    vm.startBroadcast(deployerPrivateKey);

    messageContract = new Message();

    console.log("Message contract created at address: ", address(messageContract));

    vm.stopBroadcast();
  }
}