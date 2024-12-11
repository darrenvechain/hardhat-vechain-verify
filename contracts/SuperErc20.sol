// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SuperErc20 is ERC20 {
    constructor() ERC20("MySuperErc20", "MSE") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}