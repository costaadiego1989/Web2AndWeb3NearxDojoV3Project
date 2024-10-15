// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Message} from "../src/Message.sol";

contract MessageTest is Test {
    Message public messageContract;

    function setUp() public {
        messageContract = new Message();
        messageContract.setMessage("");
    }

    function test_setMessage(string memory message) public {
        messageContract.setMessage(message);
        assertEq(messageContract.message(), message);
    }

}
