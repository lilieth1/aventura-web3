// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import "@ensdomains/ens-contracts/contracts/reverseRegistrar/IReverseRegistrar.sol";

contract ReverseClaimer {

    IReverseRegistrar reverseRegistrar;

    constructor(address claimant) {
        reverseRegistrar = IReverseRegistrar(0xA0a1AbcDAe1a2a4A2EF8e9113Ff0e02DD81DC0C6);
        reverseRegistrar.claim(claimant);
    }

    function setReverseENS(string memory domain) public {
        reverseRegistrar.setNameForAddr(address(this), msg.sender, 0x8FADE66B79cC9f707aB26799354482EB93a5B7dD, domain);
    }
}