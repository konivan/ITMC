export default[
    {
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_dailyPotionLimit",
                "type": "uint256",
                "indexed": false
            }
        ],
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
                "name": "_oldAdmin",
                "type": "address",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_newAdmin",
                "type": "address",
                "indexed": true
            }
        ],
        "name": "AdminChanged",
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
                "name": "_oldAdmin",
                "type": "address",
                "indexed": true
            }
        ],
        "name": "AdminRemoved",
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
                "name": "_minter",
                "type": "address",
                "indexed": true
            }
        ],
        "name": "MinterAdded",
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
                "name": "_minter",
                "type": "address",
                "indexed": true
            }
        ],
        "name": "MinterRemoved",
        "outputs": null,
        "payable": false,
        "stateMutability": "",
        "type": "event",
        "anonymous": false
    },
    {
        "constant": false,
        "inputs": [],
        "name": "Paused",
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
                "name": "_owner",
                "type": "address",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_amount",
                "type": "uint256",
                "indexed": true
            }
        ],
        "name": "SmoothLovePotionCheckpoint",
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
                "name": "_spender",
                "type": "address",
                "indexed": true
            }
        ],
        "name": "SpenderUnwhitelisted",
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
                "name": "_spender",
                "type": "address",
                "indexed": true
            }
        ],
        "name": "SpenderWhitelisted",
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
        "inputs": [],
        "name": "Unpaused",
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
                "name": "_addedMinters",
                "type": "address[]",
                "indexed": false
            }
        ],
        "name": "addMinters",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "address",
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
        "inputs": [
            {
                "internal_type": "",
                "name": "_owner",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_spender",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internal_type": "",
                "name": "_value",
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
            },
            {
                "internal_type": "",
                "name": "_data",
                "type": "bytes",
                "indexed": false
            }
        ],
        "name": "approveAndCall",
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
                "name": "_spender",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_value",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_data",
                "type": "bytes",
                "indexed": false
            }
        ],
        "name": "approveAndCallPayable",
        "outputs": [
            {
                "internal_type": "",
                "name": "_success",
                "type": "bool",
                "indexed": false
            }
        ],
        "payable": true,
        "stateMutability": "payable",
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
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_value",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "burn",
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
                "name": "_value",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "burnFrom",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
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
        "inputs": [],
        "name": "cappedSupply",
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
                "name": "_newAdmin",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "changeAdmin",
        "outputs": [],
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
                "name": "_owner",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_amount",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_createdAt",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_signature",
                "type": "bytes",
                "indexed": false
            }
        ],
        "name": "checkpoint",
        "outputs": [
            {
                "internal_type": "",
                "name": "_balance",
                "type": "uint256",
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
                "name": "_amount",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_createdAt",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_signature",
                "type": "bytes",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_spender",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_approvedAmount",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_data",
                "type": "bytes",
                "indexed": false
            }
        ],
        "name": "checkpointAndCall",
        "outputs": [
            {
                "internal_type": "",
                "name": "_balance",
                "type": "uint256",
                "indexed": false
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": true,
        "inputs": [],
        "name": "dailyPotionLimit",
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
        "constant": true,
        "inputs": [
            {
                "internal_type": "",
                "name": "_owner",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "getCheckpoint",
        "outputs": [
            {
                "internal_type": "",
                "name": "_amount",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_createdAt",
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
        "inputs": [
            {
                "internal_type": "",
                "name": "_addr",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "isMinter",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "bool",
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
        "name": "mint",
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
        "name": "minter",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "bool",
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
        "inputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "minters",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "address",
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
        "constant": false,
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": true,
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "bool",
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
        "name": "removeAdmin",
        "outputs": [],
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
                "name": "_removedMinters",
                "type": "address[]",
                "indexed": false
            }
        ],
        "name": "removeMinters",
        "outputs": [],
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
                "name": "_dailyPotionLimit",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "setDailyPotionLimit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
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
        "inputs": [],
        "name": "unpause",
        "outputs": [],
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
                "name": "_spender",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "unwhitelist",
        "outputs": [],
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
                "name": "_spender",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "whitelist",
        "outputs": [],
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
        "name": "whitelisted",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "bool",
                "indexed": false
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "anonymous": false
    }
]