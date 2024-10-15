// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Message {
    string public message;

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
