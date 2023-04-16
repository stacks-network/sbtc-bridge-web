
export const DEPLOYER_PK = {
    "privateKey": "753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601",
    "publicKey": "0390a5cac7c33fda49f70bc1b0866fa0ba7a9440d9de647fecb8132ceb76a94dfa",
    "address": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    "btcAddress": "mqVnk6NPRdhntvfm4hh9vvjiRkFDUuSYsH",
    "wif": "cRWawjcDj2J28jczAtjJGKs1pzFxM6V6tJHNZp3WrYoLhr2PLMVB",
    "index": 0
}
export const pegout1:any = {
    "net": {
        "bech32": "tb",
        "pubKeyHash": 111,
        "scriptHash": 196,
        "wif": 239
    },
    "ready": true,
    "fromBtcAddress": "tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq",
    "pegInData": {
        "stacksAddress": "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN",
        "sbtcWalletAddress": "tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7",
        "amount": 221122
    },
    "addressInfo": {
        "address": "tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq",
        "scriptPubKey": "0014a8933bcd8997039d6b7531e08a35f1c4bbea313b",
        "ismine": false,
        "solvable": false,
        "iswatchonly": false,
        "isscript": false,
        "iswitness": true,
        "witness_version": 0,
        "witness_program": "a8933bcd8997039d6b7531e08a35f1c4bbea313b",
        "ischange": false,
        "labels": [],
        "utxos": [
            {
                "txid": "c40b8cd078aaa183c14d6e8f2fc28645f65006bde137a20035f5d427bbca151b",
                "vout": 0,
                "status": {
                    "confirmed": true,
                    "block_height": 2421635,
                    "block_hash": "000000000000000659962c5abc3f7dfb4c3900523c389c282194d82acb9e35fe",
                    "block_time": 1677419505
                },
                "value": 4205867,
                "tx": {
                    "txid": "c40b8cd078aaa183c14d6e8f2fc28645f65006bde137a20035f5d427bbca151b",
                    "hash": "0865151e3af5ace8452467e3efc5ab24108220cbcc250ee9f7ed429c8165ea2c",
                    "version": 2,
                    "size": 362,
                    "vsize": 200,
                    "weight": 800,
                    "locktime": 2421626,
                    "vin": [
                        {
                            "txid": "e9f978d659774eb668ab527b4c0ddb3d213359ac1a4ecb36a250e240e870114e",
                            "vout": 0,
                            "scriptSig": {
                                "asm": "",
                                "hex": ""
                            },
                            "txinwitness": [
                                "30440220013d2b325844b416c7d200fb6c121965773ec1e3fbe597e22e89b6ea3f3e2f910220543335207b200f66ec0a88319931dc10a2bf92b6d35809d76675d3b25a19b30e01",
                                "02a8ac69fec1a5ef90184db8c7ffbd9aa2323ac9f4495baa7716691cf89d326520"
                            ],
                            "sequence": 4294967293
                        },
                        {
                            "txid": "5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508",
                            "vout": 0,
                            "scriptSig": {
                                "asm": "0014200eb26f7df8c1b7accb9595c6300f1d2e30e5a9",
                                "hex": "160014200eb26f7df8c1b7accb9595c6300f1d2e30e5a9"
                            },
                            "txinwitness": [
                                "304402207da88726469cfcd3fa641000eca820791e7f915855de2d7c86a066b3fb5c3984022018d21c16bccbafdd8276ea3c18c90330239c99e20921a25efec251383eca453401",
                                "033e6da8e9dd078e9c22dd625aea073381557b892e998800debddfbad8f0aaf119"
                            ],
                            "sequence": 4294967293
                        }
                    ],
                    "vout": [
                        {
                            "value": 0.04205867,
                            "n": 0,
                            "scriptPubKey": {
                                "asm": "0 a8933bcd8997039d6b7531e08a35f1c4bbea313b",
                                "hex": "0014a8933bcd8997039d6b7531e08a35f1c4bbea313b",
                                "address": "tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq",
                                "type": "witness_v0_keyhash"
                            }
                        }
                    ],
                    "hex": "020000000001024e1170e840e250a236cb4e1aac5933213ddb0d4c7b52ab68b64e7759d678f9e90000000000fdffffff08053809d0dbc171cc9c50c36cdcb73aed071c7dc7a0a59d34a0e6e83fff37500000000017160014200eb26f7df8c1b7accb9595c6300f1d2e30e5a9fdffffff012b2d400000000000160014a8933bcd8997039d6b7531e08a35f1c4bbea313b024730440220013d2b325844b416c7d200fb6c121965773ec1e3fbe597e22e89b6ea3f3e2f910220543335207b200f66ec0a88319931dc10a2bf92b6d35809d76675d3b25a19b30e012102a8ac69fec1a5ef90184db8c7ffbd9aa2323ac9f4495baa7716691cf89d3265200247304402207da88726469cfcd3fa641000eca820791e7f915855de2d7c86a066b3fb5c3984022018d21c16bccbafdd8276ea3c18c90330239c99e20921a25efec251383eca45340121033e6da8e9dd078e9c22dd625aea073381557b892e998800debddfbad8f0aaf1197af32400",
                    "blockhash": "000000000000000659962c5abc3f7dfb4c3900523c389c282194d82acb9e35fe",
                    "confirmations": 1502,
                    "time": 1677419505,
                    "blocktime": 1677419505
                }
            }
        ]
    },
    "fees": [
        480,
        600,
        720
    ],
    "fee": 600,
    "scureFee": 600,
    "dust": 500,
    "feeInfo": {
        "low_fee_per_kb": 12447,
        "medium_fee_per_kb": 30246,
        "high_fee_per_kb": 51156
    },
    "privKey": {
        "0": 1,
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 1,
        "5": 1,
        "6": 1,
        "7": 1,
        "8": 1,
        "9": 1,
        "10": 1,
        "11": 1,
        "12": 1,
        "13": 1,
        "14": 1,
        "15": 1,
        "16": 1,
        "17": 1,
        "18": 1,
        "19": 1,
        "20": 1,
        "21": 1,
        "22": 1,
        "23": 1,
        "24": 1,
        "25": 1,
        "26": 1,
        "27": 1,
        "28": 1,
        "29": 1,
        "30": 1,
        "31": 1
    }
}
