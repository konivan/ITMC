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
                "name": "_approved",
                "type": "address",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_tokenId",
                "type": "uint256",
                "indexed": true
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
                "name": "_owner",
                "type": "address",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_operator",
                "type": "address",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_approved",
                "type": "bool",
                "indexed": false
            }
        ],
        "name": "ApprovalForAll",
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_breedCount",
                "type": "uint256",
                "indexed": true
            }
        ],
        "name": "AxieBreedCountUpdated",
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_genes",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "x",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "y",
                        "type": "uint256"
                    }
                ],
                "indexed": false
            }
        ],
        "name": "AxieEvolved",
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_axie",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "sireId",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "matronId",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "birthDate",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "genes",
                        "type": "tuple",
                        "components": [
                            {
                                "internal_type": "",
                                "name": "x",
                                "type": "uint256"
                            },
                            {
                                "internal_type": "",
                                "name": "y",
                                "type": "uint256"
                            }
                        ]
                    },
                    {
                        "internal_type": "",
                        "name": "breedCount",
                        "type": "uint8"
                    },
                    {
                        "internal_type": "",
                        "name": "level",
                        "type": "uint16"
                    }
                ],
                "indexed": false
            }
        ],
        "name": "AxieMinted",
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": true
            }
        ],
        "name": "AxieSpawn",
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_axie",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "sireId",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "matronId",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "birthDate",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "genes",
                        "type": "tuple",
                        "components": [
                            {
                                "internal_type": "",
                                "name": "x",
                                "type": "uint256"
                            },
                            {
                                "internal_type": "",
                                "name": "y",
                                "type": "uint256"
                            }
                        ]
                    },
                    {
                        "internal_type": "",
                        "name": "breedCount",
                        "type": "uint8"
                    },
                    {
                        "internal_type": "",
                        "name": "level",
                        "type": "uint16"
                    }
                ],
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_axiegg",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "sireGenes",
                        "type": "tuple",
                        "components": [
                            {
                                "internal_type": "",
                                "name": "x",
                                "type": "uint256"
                            },
                            {
                                "internal_type": "",
                                "name": "y",
                                "type": "uint256"
                            }
                        ]
                    },
                    {
                        "internal_type": "",
                        "name": "matronGenes",
                        "type": "tuple",
                        "components": [
                            {
                                "internal_type": "",
                                "name": "x",
                                "type": "uint256"
                            },
                            {
                                "internal_type": "",
                                "name": "y",
                                "type": "uint256"
                            }
                        ]
                    }
                ],
                "indexed": false
            }
        ],
        "name": "AxieggMinted",
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_sireId",
                "type": "uint256",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_matronId",
                "type": "uint256",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "birthDate",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "sireGenes",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "x",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "y",
                        "type": "uint256"
                    }
                ],
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "matronGenes",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "x",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "y",
                        "type": "uint256"
                    }
                ],
                "indexed": false
            }
        ],
        "name": "AxieggSpawned",
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
        "inputs": [
            {
                "internal_type": "",
                "name": "_tokenId",
                "type": "uint256",
                "indexed": true
            },
            {
                "internal_type": "",
                "name": "_nonce",
                "type": "uint256",
                "indexed": true
            }
        ],
        "name": "NonceUpdated",
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
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_funcSig",
                "type": "bytes4",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_approved",
                "type": "bool",
                "indexed": false
            }
        ],
        "name": "PermissionSet",
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
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_approved",
                "type": "bool",
                "indexed": false
            }
        ],
        "name": "PermissionSetAll",
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
                "name": "_seeder",
                "type": "address",
                "indexed": true
            }
        ],
        "name": "SeederAdded",
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
                "name": "_seeder",
                "type": "address",
                "indexed": true
            }
        ],
        "name": "SeederRemoved",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_approved",
                "type": "bool",
                "indexed": false
            }
        ],
        "name": "TokenOperatorSet",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_funcSig",
                "type": "bytes4",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_approved",
                "type": "bool",
                "indexed": false
            }
        ],
        "name": "TokenPermissionSet",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": true
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
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_addedSeeders",
                "type": "address[]",
                "indexed": false
            }
        ],
        "name": "addSeeders",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "approve",
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
                "name": "_sireId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_matronId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "areAxiesEligibleForPairing",
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
        "name": "axie",
        "outputs": [
            {
                "internal_type": "",
                "name": "sireId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "matronId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "birthDate",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "genes",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "x",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "y",
                        "type": "uint256"
                    }
                ],
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "breedCount",
                "type": "uint8",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "level",
                "type": "uint16",
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
        "name": "axieBreedLimit",
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
                "name": "",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "axiegg",
        "outputs": [
            {
                "internal_type": "",
                "name": "sireGenes",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "x",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "y",
                        "type": "uint256"
                    }
                ],
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "matronGenes",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "x",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "y",
                        "type": "uint256"
                    }
                ],
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
        "name": "balanceOf",
        "outputs": [
            {
                "internal_type": "",
                "name": "_balance",
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
        "name": "baseTokenURI",
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
        "inputs": [
            {
                "internal_type": "",
                "name": "_axieIds",
                "type": "uint256[]",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_seeds",
                "type": "uint256[]",
                "indexed": false
            }
        ],
        "name": "batchGrowAxieggsToAdults",
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
                "name": "_ids",
                "type": "uint256[]",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_axiePackages",
                "type": "bytes[]",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_axieggPackages",
                "type": "bytes[]",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_owner",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "batchMintAxieggs",
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
                "name": "_ids",
                "type": "uint256[]",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_packages",
                "type": "bytes[]",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_owner",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "batchMintAxies",
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
                "name": "_sireId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_matronId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "breedAxies",
        "outputs": [
            {
                "internal_type": "",
                "name": "_axieId",
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
        "constant": true,
        "inputs": [],
        "name": "breedingFee",
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
        "name": "breedingFeeToken",
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
        "name": "breedingPotion",
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
        "constant": true,
        "inputs": [],
        "name": "currentAxieId",
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_genes",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "x",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "y",
                        "type": "uint256"
                    }
                ],
                "indexed": false
            }
        ],
        "name": "evolveAxie",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "anonymous": false
    },
    {
        "constant": true,
        "inputs": [],
        "name": "geneBrewerContract",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "getApproved",
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "getAxie",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "sireId",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "matronId",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "birthDate",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "genes",
                        "type": "tuple",
                        "components": [
                            {
                                "internal_type": "",
                                "name": "x",
                                "type": "uint256"
                            },
                            {
                                "internal_type": "",
                                "name": "y",
                                "type": "uint256"
                            }
                        ]
                    },
                    {
                        "internal_type": "",
                        "name": "breedCount",
                        "type": "uint8"
                    },
                    {
                        "internal_type": "",
                        "name": "level",
                        "type": "uint16"
                    }
                ],
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "getAxiegg",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "sireGenes",
                        "type": "tuple",
                        "components": [
                            {
                                "internal_type": "",
                                "name": "x",
                                "type": "uint256"
                            },
                            {
                                "internal_type": "",
                                "name": "y",
                                "type": "uint256"
                            }
                        ]
                    },
                    {
                        "internal_type": "",
                        "name": "matronGenes",
                        "type": "tuple",
                        "components": [
                            {
                                "internal_type": "",
                                "name": "x",
                                "type": "uint256"
                            },
                            {
                                "internal_type": "",
                                "name": "y",
                                "type": "uint256"
                            }
                        ]
                    }
                ],
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "getRequirementsForBreeding",
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_seed",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "growAxieggToAdult",
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
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "hoppingAxieId",
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
        "inputs": [
            {
                "internal_type": "",
                "name": "_owner",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_operator",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internal_type": "",
                "name": "_approved",
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
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_funcSig",
                "type": "bytes4",
                "indexed": false
            }
        ],
        "name": "isAuthorized",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_funcSig",
                "type": "bytes4",
                "indexed": false
            }
        ],
        "name": "isFunctionOperatorOfToken",
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
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_funcSig",
                "type": "bytes4",
                "indexed": false
            }
        ],
        "name": "isPermissionSet",
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
                "name": "_owner",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_operator",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "isPermissionSetAll",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_operator",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "isTokenOperator",
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
                "name": "_axie",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "sireId",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "matronId",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "birthDate",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "genes",
                        "type": "tuple",
                        "components": [
                            {
                                "internal_type": "",
                                "name": "x",
                                "type": "uint256"
                            },
                            {
                                "internal_type": "",
                                "name": "y",
                                "type": "uint256"
                            }
                        ]
                    },
                    {
                        "internal_type": "",
                        "name": "breedCount",
                        "type": "uint8"
                    },
                    {
                        "internal_type": "",
                        "name": "level",
                        "type": "uint16"
                    }
                ],
                "indexed": false
            }
        ],
        "name": "mintAxie",
        "outputs": [
            {
                "internal_type": "",
                "name": "_axieId",
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_hoppingAxieId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_axie",
                "type": "tuple",
                "components": [
                    {
                        "internal_type": "",
                        "name": "sireId",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "matronId",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "birthDate",
                        "type": "uint256"
                    },
                    {
                        "internal_type": "",
                        "name": "genes",
                        "type": "tuple",
                        "components": [
                            {
                                "internal_type": "",
                                "name": "x",
                                "type": "uint256"
                            },
                            {
                                "internal_type": "",
                                "name": "y",
                                "type": "uint256"
                            }
                        ]
                    },
                    {
                        "internal_type": "",
                        "name": "breedCount",
                        "type": "uint8"
                    },
                    {
                        "internal_type": "",
                        "name": "level",
                        "type": "uint16"
                    }
                ],
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_to",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "mintPromoAxie",
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
        "constant": true,
        "inputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "neededPotionForBreeding",
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
        "inputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "nonces",
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
            },
            {
                "internal_type": "",
                "name": "",
                "type": "bytes4",
                "indexed": false
            }
        ],
        "name": "operatorPermission",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internal_type": "",
                "name": "_owner",
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
        "constant": true,
        "inputs": [],
        "name": "preExecutionLogicContract",
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
                "name": "_removedSeeders",
                "type": "address[]",
                "indexed": false
            }
        ],
        "name": "removeSeeders",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "safeTransferFrom",
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
                "name": "_tokenId",
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
        "name": "safeTransferFrom",
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
        "name": "seeder",
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
        "name": "seeders",
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
        "constant": false,
        "inputs": [
            {
                "internal_type": "",
                "name": "_toAdultDuration",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "setAdultDuration",
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
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_approved",
                "type": "bool",
                "indexed": false
            }
        ],
        "name": "setAllPermissionFor",
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
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_approved",
                "type": "bool",
                "indexed": false
            }
        ],
        "name": "setApprovalForAll",
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
                "name": "_axieBreedLimit",
                "type": "uint8",
                "indexed": false
            }
        ],
        "name": "setAxieBreedLimit",
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
                "name": "_baseTokenURI",
                "type": "string",
                "indexed": false
            }
        ],
        "name": "setBaseTokenURI",
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
                "name": "_breedingFee",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "setBreedingFee",
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
                "name": "_breedingFeeToken",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "setBreedingFeeToken",
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
                "name": "_breedingPotion",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "setBreedingPotionContract",
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
                "name": "_currentAxieId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "setCurrentAxieId",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_funcSig",
                "type": "bytes4",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_approved",
                "type": "bool",
                "indexed": false
            }
        ],
        "name": "setFunctionOperatorForToken",
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
                "name": "_geneBrewerContract",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "setGeneBrewerContract",
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
                "name": "_axieIds",
                "type": "uint256[]",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_hoppingAxieIds",
                "type": "uint256[]",
                "indexed": false
            }
        ],
        "name": "setHoppingAxieIds",
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
                "name": "_neededPotionForBreeding",
                "type": "uint256[]",
                "indexed": false
            }
        ],
        "name": "setNeededPotionForBreeding",
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
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_funcSig",
                "type": "bytes4",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_approved",
                "type": "bool",
                "indexed": false
            }
        ],
        "name": "setPermissionFor",
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
                "name": "_preExecutionLogicContract",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "setPreExecutionLogicContract",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_approved",
                "type": "bool",
                "indexed": false
            }
        ],
        "name": "setTokenOperator",
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
                "name": "_tokenReceiver",
                "type": "address",
                "indexed": false
            }
        ],
        "name": "setTokenReceiver",
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
                "name": "_axieId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "stageOf",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "stateOf",
        "outputs": [
            {
                "internal_type": "",
                "name": "",
                "type": "bytes",
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
                "name": "_interfaceId",
                "type": "bytes4",
                "indexed": false
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internal_type": "",
                "name": "_supported",
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
        "name": "toAdultDuration",
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
        "inputs": [
            {
                "internal_type": "",
                "name": "_index",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
                "internal_type": "",
                "name": "_tokenId",
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
                "name": "_owner",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "_index",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
                "internal_type": "",
                "name": "_tokenId",
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
                "name": "",
                "type": "uint256",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "",
                "type": "bytes4",
                "indexed": false
            }
        ],
        "name": "tokenPermission",
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
            },
            {
                "internal_type": "",
                "name": "",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "tokenPermissionInfos",
        "outputs": [
            {
                "internal_type": "",
                "name": "operator",
                "type": "address",
                "indexed": false
            },
            {
                "internal_type": "",
                "name": "funcSig",
                "type": "bytes4",
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
        "name": "tokenReceiver",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internal_type": "",
                "name": "_uri",
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
                "name": "_supply",
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
                "name": "_tokenId",
                "type": "uint256",
                "indexed": false
            }
        ],
        "name": "transferFrom",
        "outputs": [],
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