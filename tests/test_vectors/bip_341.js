// @ts-nocheck

//Case: PSBT with one P2TR script path only input with dummy internal key, scripts, script key derivation paths, merkle root, and script path signatures
//decodepsbt cHNidP8BAF4CAAAAAZvUh2UjC/mnLmYgAflyVW5U8Mb5f+tWvLVgDYF/aZUmAQAAAAD/////AUjmBSoBAAAAIlEgg2mORYxmZOFZXXXaJZfeHiLul9eY5wbEwKS1qYI810MAAAAAAAEBKwDyBSoBAAAAIlEgwiR++/2SrEf29AuNQtFpF1oZ+p+hDkol1/NetN2FtpJBFCyxOsaCSN6AaqajZZzzwD62gh0JyBFKToaP696GW7bSzZcOFfU/wMgvlQ/VYP+pGbdhcr4Bc2iomROvB09ACwlAv4GNl1fW/+tTi6BX+0wfxOD17xhudlvrVkeR4Cr1/T1eJVHU404z2G8na4LJnHmu0/A5Wgge/NLMLGXdfmk9eUEUQyCwvxbwEbU+p75hWSSqfyfl0prSDqEVXYSGdsO60bIRXy5JCvfMRcT3hRHzYFfOXFpcVjJaKftE38ID81bh+EDh8atvq/omsjbyGDNxncHUKKt2jYD5H5mI2KvvR7+4Y7sfKlKfdowV8AzjTsKDzcB+iPhCi+KPbvZAQ8MpEYEaQRT6D3o87zsdDAps59JuF62gsuXJLRnvrUi0GFnLikUcqW99YgWelJehpKJnVp2YdtpgEBr/OONSm5uTnOf5GulwQOwfA3kgZGHIM0IoVCMyZwirAx8NpKJT7kWq+luMkgNNi2BUkPjNE+APmJmJuX4hX6o28S3uNpPS2szzeBwXV/ZiFcFQkpt0waBJVLeLS2A16XpeB4paDyjsltVHv+6azoA6wG99YgWelJehpKJnVp2YdtpgEBr/OONSm5uTnOf5GulwEV8uSQr3zEXE94UR82BXzlxaXFYyWin7RN/CA/NW4fgjICyxOsaCSN6AaqajZZzzwD62gh0JyBFKToaP696GW7bSrMBCFcFQkpt0waBJVLeLS2A16XpeB4paDyjsltVHv+6azoA6wJfG5v6l/3FP9XJEmZkIEOQG6YqhD1v35fZ4S8HQqabOIyBDILC/FvARtT6nvmFZJKp/J+XSmtIOoRVdhIZ2w7rRsqzAYhXBUJKbdMGgSVS3i0tgNel6XgeKWg8o7JbVR7/ums6AOsDNlw4V9T/AyC+VD9Vg/6kZt2FyvgFzaKiZE68HT0ALCRFfLkkK98xFxPeFEfNgV85cWlxWMlop+0TfwgPzVuH4IyD6D3o87zsdDAps59JuF62gsuXJLRnvrUi0GFnLikUcqazAIRYssTrGgkjegGqmo2Wc88A+toIdCcgRSk6Gj+vehlu20jkBzZcOFfU/wMgvlQ/VYP+pGbdhcr4Bc2iomROvB09ACwl3Ky2nVgAAgAEAAIACAACAAAAAAAAAAAAhFkMgsL8W8BG1Pqe+YVkkqn8n5dKa0g6hFV2EhnbDutGyOQERXy5JCvfMRcT3hRHzYFfOXFpcVjJaKftE38ID81bh+HcrLadWAACAAQAAgAEAAIAAAAAAAAAAACEWUJKbdMGgSVS3i0tgNel6XgeKWg8o7JbVR7/ums6AOsAFAHxGHl0hFvoPejzvOx0MCmzn0m4XraCy5cktGe+tSLQYWcuKRRypOQFvfWIFnpSXoaSiZ1admHbaYBAa/zjjUpubk5zn+RrpcHcrLadWAACAAQAAgAMAAIAAAAAAAAAAAAEXIFCSm3TBoElUt4tLYDXpel4HiloPKOyW1Ue/7prOgDrAARgg8DYuL3Wm9CClvePrIh2WrmcgzyX4GJDJWx13WstRXmUAAQUgESTaeuySzNBslUViZH9DexOLlXIahL4r8idrvdqz5nEhBxEk2nrskszQbJVFYmR/Q3sTi5VyGoS+K/Ina73as+ZxGQB3Ky2nVgAAgAEAAIAAAACAAAAAAAUAAAAA
const psbt = {
  "tx": {
    "txid": "d15e8d0a677a7d8120c5b3f643daea03ab53f36c2da908d97410163161a65af6",
    "hash": "d15e8d0a677a7d8120c5b3f643daea03ab53f36c2da908d97410163161a65af6",
    "version": 2,
    "size": 94,
    "vsize": 94,
    "weight": 376,
    "locktime": 0,
    "vin": [
      {
        "txid": "2695697f810d60b5bc56eb7ff9c6f0546e5572f90120662ea7f90b236587d49b",
        "vout": 1,
        "scriptSig": {
          "asm": "",
          "hex": ""
        },
        "sequence": 4294967295
      }
    ],
    "vout": [
      {
        "value": 49.99997000,
        "n": 0,
        "scriptPubKey": {
          "asm": "1 83698e458c6664e1595d75da2597de1e22ee97d798e706c4c0a4b5a9823cd743",
          "desc": "rawtr(83698e458c6664e1595d75da2597de1e22ee97d798e706c4c0a4b5a9823cd743)#lr3hfg6s",
          "hex": "512083698e458c6664e1595d75da2597de1e22ee97d798e706c4c0a4b5a9823cd743",
          "address": "tb1psd5cu3vvvejwzk2awhdzt977rc3wa97hnrnsd3xq5j66nq3u6aps0rtp4w",
          "type": "witness_v1_taproot"
        }
      }
    ]
  },
  "global_xpubs": [
  ],
  "psbt_version": 0,
  "proprietary": [
  ],
  "unknown": {
  },
  "inputs": [
    {
      "witness_utxo": {
        "amount": 50.00000000,
        "scriptPubKey": {
          "asm": "1 c2247efbfd92ac47f6f40b8d42d169175a19fa9fa10e4a25d7f35eb4dd85b692",
          "desc": "rawtr(c2247efbfd92ac47f6f40b8d42d169175a19fa9fa10e4a25d7f35eb4dd85b692)#cyyjcwg3",
          "hex": "5120c2247efbfd92ac47f6f40b8d42d169175a19fa9fa10e4a25d7f35eb4dd85b692",
          "address": "tb1pcgj8a7laj2ky0ah5pwx595tfzadpn75l5y8y5fwh7d0tfhv9k6fqgu3vml",
          "type": "witness_v1_taproot"
        }
      },
      "taproot_script_path_sigs": [
        {
          "pubkey": "2cb13ac68248de806aa6a3659cf3c03eb6821d09c8114a4e868febde865bb6d2",
          "leaf_hash": "cd970e15f53fc0c82f950fd560ffa919b76172be017368a89913af074f400b09",
          "sig": "bf818d9757d6ffeb538ba057fb4c1fc4e0f5ef186e765beb564791e02af5fd3d5e2551d4e34e33d86f276b82c99c79aed3f0395a081efcd2cc2c65dd7e693d79"
        },
        {
          "pubkey": "4320b0bf16f011b53ea7be615924aa7f27e5d29ad20ea1155d848676c3bad1b2",
          "leaf_hash": "115f2e490af7cc45c4f78511f36057ce5c5a5c56325a29fb44dfc203f356e1f8",
          "sig": "e1f1ab6fabfa26b236f21833719dc1d428ab768d80f91f9988d8abef47bfb863bb1f2a529f768c15f00ce34ec283cdc07e88f8428be28f6ef64043c32911811a"
        },
        {
          "pubkey": "fa0f7a3cef3b1d0c0a6ce7d26e17ada0b2e5c92d19efad48b41859cb8a451ca9",
          "leaf_hash": "6f7d62059e9497a1a4a267569d9876da60101aff38e3529b9b939ce7f91ae970",
          "sig": "ec1f0379206461c83342285423326708ab031f0da4a253ee45aafa5b8c92034d8b605490f8cd13e00f989989b97e215faa36f12dee3693d2daccf3781c1757f6"
        }
      ],
      "taproot_scripts": [
        {
          "script": "202cb13ac68248de806aa6a3659cf3c03eb6821d09c8114a4e868febde865bb6d2ac",
          "leaf_ver": 192,
          "control_blocks": [
            "c150929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac06f7d62059e9497a1a4a267569d9876da60101aff38e3529b9b939ce7f91ae970115f2e490af7cc45c4f78511f36057ce5c5a5c56325a29fb44dfc203f356e1f8"
          ]
        },
        {
          "script": "204320b0bf16f011b53ea7be615924aa7f27e5d29ad20ea1155d848676c3bad1b2ac",
          "leaf_ver": 192,
          "control_blocks": [
            "c150929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac097c6e6fea5ff714ff5724499990810e406e98aa10f5bf7e5f6784bc1d0a9a6ce"
          ]
        },
        {
          "script": "20fa0f7a3cef3b1d0c0a6ce7d26e17ada0b2e5c92d19efad48b41859cb8a451ca9ac",
          "leaf_ver": 192,
          "control_blocks": [
            "c150929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0cd970e15f53fc0c82f950fd560ffa919b76172be017368a89913af074f400b09115f2e490af7cc45c4f78511f36057ce5c5a5c56325a29fb44dfc203f356e1f8"
          ]
        }
      ],
      "taproot_bip32_derivs": [
        {
          "pubkey": "2cb13ac68248de806aa6a3659cf3c03eb6821d09c8114a4e868febde865bb6d2",
          "master_fingerprint": "772b2da7",
          "path": "m/86'/1'/2'/0/0",
          "leaf_hashes": [
            "cd970e15f53fc0c82f950fd560ffa919b76172be017368a89913af074f400b09"
          ]
        },
        {
          "pubkey": "4320b0bf16f011b53ea7be615924aa7f27e5d29ad20ea1155d848676c3bad1b2",
          "master_fingerprint": "772b2da7",
          "path": "m/86'/1'/1'/0/0",
          "leaf_hashes": [
            "115f2e490af7cc45c4f78511f36057ce5c5a5c56325a29fb44dfc203f356e1f8"
          ]
        },
        {
          "pubkey": "50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0",
          "master_fingerprint": "7c461e5d",
          "path": "m",
          "leaf_hashes": [
          ]
        },
        {
          "pubkey": "fa0f7a3cef3b1d0c0a6ce7d26e17ada0b2e5c92d19efad48b41859cb8a451ca9",
          "master_fingerprint": "772b2da7",
          "path": "m/86'/1'/3'/0/0",
          "leaf_hashes": [
            "6f7d62059e9497a1a4a267569d9876da60101aff38e3529b9b939ce7f91ae970"
          ]
        }
      ],
      "taproot_internal_key": "50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0",
      "taproot_merkle_root": "f0362e2f75a6f420a5bde3eb221d96ae6720cf25f81890c95b1d775acb515e65"
    }
  ],
  "outputs": [
    {
      "taproot_internal_key": "1124da7aec92ccd06c954562647f437b138b95721a84be2bf2276bbddab3e671",
      "taproot_bip32_derivs": [
        {
          "pubkey": "1124da7aec92ccd06c954562647f437b138b95721a84be2bf2276bbddab3e671",
          "master_fingerprint": "772b2da7",
          "path": "m/86'/1'/0'/0/5",
          "leaf_hashes": [
          ]
        }
      ]
    }
  ],
  "fee": 0.00003000
}

//Case: PSBT with one P2TR script path only output with dummy internal key, taproot tree, and script key derivation paths
//decodepsbt cHNidP8BAF4CAAAAASd0Srq/MCf+DWzyOpbu4u+xiO9SMBlUWFiD5ptmJLJCAAAAAAD/////AUjmBSoBAAAAIlEgCoy9yG3hzhwPnK6yLW33ztNoP+Qj4F0eQCqHk0HW9vUAAAAAAAEBKwDyBSoBAAAAIlEgWiws9bUs8x+DrS6Npj/wMYPs2PYJx1EK6KSOA5EKB1chFv40kGTJjW4qhT+jybEr2LMEoZwZXGDvp+4jkwRtP6IyGQB3Ky2nVgAAgAEAAIAAAACAAQAAAAAAAAABFyD+NJBkyY1uKoU/o8mxK9izBKGcGVxg76fuI5MEbT+iMgABBSBQkpt0waBJVLeLS2A16XpeB4paDyjsltVHv+6azoA6wAEGbwLAIiBzblcpAP4SUliaIUPI88efcaBBLSNTr3VelwHHgmlKAqwCwCIgYxxfO1gyuPvev7GXBM7rMjwh9A96JPQ9aO8MwmsSWWmsAcAiIET6pJoDON5IjI3//s37bzKfOAvVZu8gyN9tgT6rHEJzrCEHRPqkmgM43kiMjf/+zftvMp84C9Vm7yDI322BPqscQnM5AfBreYuSoQ7ZqdC7/Trxc6U7FhfaOkFZygCCFs2Fay4Odystp1YAAIABAACAAQAAgAAAAAADAAAAIQdQkpt0waBJVLeLS2A16XpeB4paDyjsltVHv+6azoA6wAUAfEYeXSEHYxxfO1gyuPvev7GXBM7rMjwh9A96JPQ9aO8MwmsSWWk5ARis5AmIl4Xg6nDO67jhyokqenjq7eDy4pbPQ1lhqPTKdystp1YAAIABAACAAgAAgAAAAAADAAAAIQdzblcpAP4SUliaIUPI88efcaBBLSNTr3VelwHHgmlKAjkBKaW0kVCQFi11mv0/4Pk/ozJgVtC0CIy5M8rngmy42Cx3Ky2nVgAAgAEAAIADAACAAAAAAAMAAAAA
const psbt2 = {
  "tx": {
    "txid": "1f9ab258e0ba15314f0a29e12e40ba17b65094c48d145d20376c211e6ea1381f",
    "hash": "1f9ab258e0ba15314f0a29e12e40ba17b65094c48d145d20376c211e6ea1381f",
    "version": 2,
    "size": 94,
    "vsize": 94,
    "weight": 376,
    "locktime": 0,
    "vin": [
      {
        "txid": "42b224669be683585854193052ef88b1efe2ee963af26c0dfe2730bfba4a7427",
        "vout": 0,
        "scriptSig": {
          "asm": "",
          "hex": ""
        },
        "sequence": 4294967295
      }
    ],
    "vout": [
      {
        "value": 49.99997000,
        "n": 0,
        "scriptPubKey": {
          "asm": "1 0a8cbdc86de1ce1c0f9caeb22d6df7ced3683fe423e05d1e402a879341d6f6f5",
          "desc": "rawtr(0a8cbdc86de1ce1c0f9caeb22d6df7ced3683fe423e05d1e402a879341d6f6f5)#fy5r9sy4",
          "hex": "51200a8cbdc86de1ce1c0f9caeb22d6df7ced3683fe423e05d1e402a879341d6f6f5",
          "address": "tb1pp2xtmjrdu88pcruu46ez6m0hemfks0lyy0s968jq92rexswk7m6s9rxqr0",
          "type": "witness_v1_taproot"
        }
      }
    ]
  },
  "global_xpubs": [
  ],
  "psbt_version": 0,
  "proprietary": [
  ],
  "unknown": {
  },
  "inputs": [
    {
      "witness_utxo": {
        "amount": 50.00000000,
        "scriptPubKey": {
          "asm": "1 5a2c2cf5b52cf31f83ad2e8da63ff03183ecd8f609c7510ae8a48e03910a0757",
          "desc": "rawtr(5a2c2cf5b52cf31f83ad2e8da63ff03183ecd8f609c7510ae8a48e03910a0757)#rvx6awna",
          "hex": "51205a2c2cf5b52cf31f83ad2e8da63ff03183ecd8f609c7510ae8a48e03910a0757",
          "address": "tb1ptgkzead49ne3lqad96x6v0lsxxp7ek8kp8r4zzhg5j8q8yg2qatsg5lw5v",
          "type": "witness_v1_taproot"
        }
      },
      "taproot_bip32_derivs": [
        {
          "pubkey": "fe349064c98d6e2a853fa3c9b12bd8b304a19c195c60efa7ee2393046d3fa232",
          "master_fingerprint": "772b2da7",
          "path": "m/86'/1'/0'/1/0",
          "leaf_hashes": [
          ]
        }
      ],
      "taproot_internal_key": "fe349064c98d6e2a853fa3c9b12bd8b304a19c195c60efa7ee2393046d3fa232"
    }
  ],
  "outputs": [
    {
      "taproot_internal_key": "50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0",
      "taproot_tree": [
        {
          "depth": 2,
          "leaf_ver": 192,
          "script": "20736e572900fe1252589a2143c8f3c79f71a0412d2353af755e9701c782694a02ac"
        },
        {
          "depth": 2,
          "leaf_ver": 192,
          "script": "20631c5f3b5832b8fbdebfb19704ceeb323c21f40f7a24f43d68ef0cc26b125969ac"
        },
        {
          "depth": 1,
          "leaf_ver": 192,
          "script": "2044faa49a0338de488c8dfffecdfb6f329f380bd566ef20c8df6d813eab1c4273ac"
        }
      ],
      "taproot_bip32_derivs": [
        {
          "pubkey": "44faa49a0338de488c8dfffecdfb6f329f380bd566ef20c8df6d813eab1c4273",
          "master_fingerprint": "772b2da7",
          "path": "m/86'/1'/1'/0/3",
          "leaf_hashes": [
            "f06b798b92a10ed9a9d0bbfd3af173a53b1617da3a4159ca008216cd856b2e0e"
          ]
        },
        {
          "pubkey": "50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0",
          "master_fingerprint": "7c461e5d",
          "path": "m",
          "leaf_hashes": [
          ]
        },
        {
          "pubkey": "631c5f3b5832b8fbdebfb19704ceeb323c21f40f7a24f43d68ef0cc26b125969",
          "master_fingerprint": "772b2da7",
          "path": "m/86'/1'/2'/0/3",
          "leaf_hashes": [
            "18ace409889785e0ea70ceebb8e1ca892a7a78eaede0f2e296cf435961a8f4ca"
          ]
        },
        {
          "pubkey": "736e572900fe1252589a2143c8f3c79f71a0412d2353af755e9701c782694a02",
          "master_fingerprint": "772b2da7",
          "path": "m/86'/1'/3'/0/3",
          "leaf_hashes": [
            "29a5b4915090162d759afd3fe0f93fa3326056d0b4088cb933cae7826cb8d82c"
          ]
        }
      ]
    }
  ],
  "fee": 0.00003000
}
