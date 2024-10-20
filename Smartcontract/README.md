# Zooners Message Smartcontract

This project is a simple smart contract to storage any string to a storage public variable called message.

The project is part of the **NearX Innovation School** research group, specifically the 3rd version of DoJo, which aims to explore the integration of smart contracts with a user-friendly interface.





## 🛠 Tech Stack

![Solidity](https://img.shields.io/badge/Solidity-007EC6?style=for-the-badge&logo=solidity)

![Foundry](https://img.shields.io/badge/Foundry-6F3C2A?style=for-the-badge&logo=foundry)



## ⚙️ Installation

Install my-project with npm

Clone the repository:
```bash
    git clone https://github.com/costaadiego1989/Web2AndWeb3NearxDojoV3Project.git
    cd Web2AndWeb3NearxDojoV3Project
    cd Smartcontract
```
## 🧪 Running Tests

**Mannualy Tests:**

1. Run the Anvil devnet:
`> anvil`

2. Execute the deploy script:
`> forge script script/DeployMessage.s.sol`

3. Interact with the contract:

3.1 Writing operation:

_example:_
`> cast send --from [wallet address] [contract address] [method signature] [args] --rpc-url [url rpc provider] --unlocked`
```bash
 > cast send --from 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266  0x5FbDB2315678afecb367f032d93F642f64180aa3 "setMessage(string)" "Hello World" --rpc-url http://127.0.0.1:8545 --unlocked
```

3.2 Reading operation:

_example:_ `> cast call [contract address] [method signature] --rpc-url [url rpc provider]`
```bash
cast call 0x5FbDB2315678afecb367f032d93F642f64180aa3 "message()(string)" --rpc-url http://127.0.0.1:8545
```

**Automated Tests:**

`> forge test`
## 🆓 License

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
