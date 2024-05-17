// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import "./ReverseClaimer.sol";
import "./CriptoAventura.sol";

contract CriptoAventuraENS is CriptoAventura, ReverseClaimer { 
    constructor() CriptoAventura() ReverseClaimer(msg.sender) {
    }
}