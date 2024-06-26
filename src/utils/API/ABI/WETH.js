export default
[
    {
        "constant": false,
        "inputs": [],
        "name": "",
        "outputs": null,
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "anonymous": false
    },
    {
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_owner",
                "type": "address",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_spender",
                "type": "address",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_value",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "Approval",
        "outputs": null,
        "payable": false,
        "stateMutability": "",
        "type": "event",
        "anonymous": false
    },
    {
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_sender",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_value",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "Deposit",
        "outputs": null,
        "payable": false,
        "stateMutability": "",
        "type": "event",
        "anonymous": false
    },
    {
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_from",
                "type": "address",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_to",
                "type": "address",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_value",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "Transfer",
        "outputs": null,
        "payable": false,
        "stateMutability": "",
        "type": "event",
        "anonymous": false
    },
    {
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_sender",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_value",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "Withdrawal",
        "outputs": null,
        "payable": false,
        "stateMutability": "",
        "type": "event",
        "anonymous": false
    },
    {
        "constant": true,
        "inputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "uint256",
                "indexed": false
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_spender",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_value",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internal_type": "",
                "name": "_success",
                "type": "bool",
                "indexed": false
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": true,
        "inputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "uint256",
                "indexed": false
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "uint8",
                "indexed": false
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": false,
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "string",
                "indexed": false
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "string",
                "indexed": false
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "uint256",
                "indexed": false
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_to",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_value",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internal_type": "",
                "name": "_success",
                "type": "bool",
                "indexed": false
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_from",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_to",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_value",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internal_type": "",
                "name": "_success",
                "type": "bool",
                "indexed": false
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_wad",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "anonymous": false
    }
]