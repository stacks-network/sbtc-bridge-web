import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';

const fetchMock = createFetchMock(vi);

fetchMock.enableMocks();
// changes default behavior of fetchMock to use the real 'fetch' implementation and not mock responses
//fetchMock.dontMock();

//023cf12f5d86c3fd1ad27ea144682a6172d3a4d606c059e3385ec40d1c603721b1
//024d0130b8812bc5aca6089f19852df2f5db5df05f16e7b80a0aec00133697ed5b
const tms= {
  "tx": {
    "txid": "3809c827caeb00ed4542f9a3d0020720bec03010e9e21c540fa6d0871c6f6509",
    "hash": "3809c827caeb00ed4542f9a3d0020720bec03010e9e21c540fa6d0871c6f6509",
    "version": 2,
    "size": 160,
    "vsize": 160,
    "weight": 640,
    "locktime": 0,
    "vin": [
      {
        "txid": "b75cc611acc142fa682fddc9b4e1b63aad2f554e28d8dc511687e28d919dfeb8",
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
        "value": 0.00000000,
        "n": 0,
        "scriptPubKey": {
          "asm": "OP_RETURN 58323c1a6bd5cc732fbd4699ed2069bad872c860a5fd1ac6",
          "desc": "raw(6a1858323c1a6bd5cc732fbd4699ed2069bad872c860a5fd1ac6)#52my903x",
          "hex": "6a1858323c1a6bd5cc732fbd4699ed2069bad872c860a5fd1ac6",
          "type": "nulldata"
        }
      },
      {
        "value": 0.00007777,
        "n": 1,
        "scriptPubKey": {
          "asm": "1 b8c8b0652cb2851a52374c7acd47181eb031e8fa5c62883f636e0d4fe695d6ca",
          "desc": "rawtr(b8c8b0652cb2851a52374c7acd47181eb031e8fa5c62883f636e0d4fe695d6ca)#cmxfmvp9",
          "hex": "5120b8c8b0652cb2851a52374c7acd47181eb031e8fa5c62883f636e0d4fe695d6ca",
          "address": "tb1phrytqefvk2z3553hf3av63ccr6crr686t33gs0mrdcx5le546m9qx7uvcl",
          "type": "witness_v1_taproot"
        }
      },
      {
        "value": 0.00091223,
        "n": 2,
        "scriptPubKey": {
          "asm": "0 764ad6983a6455cca54cd6a4f7b0da71ba6a0bab",
          "desc": "addr(tb1qwe9ddxp6v32uef2v66j00vx6wxax5zat223tms)#tlu5uldz",
          "hex": "0014764ad6983a6455cca54cd6a4f7b0da71ba6a0bab",
          "address": "tb1qwe9ddxp6v32uef2v66j00vx6wxax5zat223tms",
          "type": "witness_v0_keyhash"
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
        "amount": 0.00100000,
        "scriptPubKey": {
          "asm": "0 764ad6983a6455cca54cd6a4f7b0da71ba6a0bab",
          "desc": "addr(tb1qwe9ddxp6v32uef2v66j00vx6wxax5zat223tms)#tlu5uldz",
          "hex": "0014764ad6983a6455cca54cd6a4f7b0da71ba6a0bab",
          "address": "tb1qwe9ddxp6v32uef2v66j00vx6wxax5zat223tms",
          "type": "witness_v0_keyhash"
        }
      },
      "non_witness_utxo": {
        "txid": "b75cc611acc142fa682fddc9b4e1b63aad2f554e28d8dc511687e28d919dfeb8",
        "hash": "fcfd38e069bc64cc7f22a8d65b6204b85e08febb0bb1b3b45f1be0786388a798",
        "version": 2,
        "size": 223,
        "vsize": 141,
        "weight": 562,
        "locktime": 0,
        "vin": [
          {
            "txid": "14ed9389ac61a5e9cc5e6cbae955a2c12b0fc4ec921b2a024a9c652f99b819bd",
            "vout": 0,
            "scriptSig": {
              "asm": "",
              "hex": ""
            },
            "txinwitness": [
              "3045022100a5936c579c3970188f0a5dce9b3c29abcd2390d3944fb12bdbe873404c1b638f022014af2402afc082ed26d591372149b4a7ab1e92695060bdfb5f1a407cd109d29701",
              "03665ca3afcd61141e97aa9706d180514e28ef8fa29e0425e82a78e5e3b25f2b36"
            ],
            "sequence": 0
          }
        ],
        "vout": [
          {
            "value": 0.00100000,
            "n": 0,
            "scriptPubKey": {
              "asm": "0 764ad6983a6455cca54cd6a4f7b0da71ba6a0bab",
              "desc": "addr(tb1qwe9ddxp6v32uef2v66j00vx6wxax5zat223tms)#tlu5uldz",
              "hex": "0014764ad6983a6455cca54cd6a4f7b0da71ba6a0bab",
              "address": "tb1qwe9ddxp6v32uef2v66j00vx6wxax5zat223tms",
              "type": "witness_v0_keyhash"
            }
          },
          {
            "value": 0.00898454,
            "n": 1,
            "scriptPubKey": {
              "asm": "0 09c7efcd51a08da9b4e38345645866c2a270eb39",
              "desc": "addr(tb1qp8r7ln235zx6nd8rsdzkgkrxc238p6eecys2m9)#dvekv8lq",
              "hex": "001409c7efcd51a08da9b4e38345645866c2a270eb39",
              "address": "tb1qp8r7ln235zx6nd8rsdzkgkrxc238p6eecys2m9",
              "type": "witness_v0_keyhash"
            }
          }
        ]
      }
    }
  ],
  "outputs": [
    {
    },
    {
    },
    {
    }
  ],
  "fee": 0.00001000
}
