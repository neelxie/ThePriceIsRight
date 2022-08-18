// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc1, ctc0],
      3: [ctc0, ctc1, ctc0, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v75 = stdlib.protect(ctc0, await interact.getNumber(), {
    at: './index.rsh:47:52:application',
    fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:17:function exp)'],
    msg: 'getNumber',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v75],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:49:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v77], secs: v79, time: v78, didSend: v27, from: v76 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v77], secs: v79, time: v78, didSend: v27, from: v76 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v90], secs: v92, time: v91, didSend: v44, from: v89 } = txn3;
  ;
  const v93 = stdlib.addressEq(v85, v89);
  stdlib.assert(v93, {
    at: './index.rsh:60:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v95], secs: v97, time: v96, didSend: v50, from: v94 } = txn4;
  ;
  const v98 = stdlib.addressEq(v85, v94);
  stdlib.assert(v98, {
    at: './index.rsh:62:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  let v99;
  const v100 = stdlib.eq(v77, v86);
  const v101 = stdlib.eq(v77, v90);
  const v102 = v100 ? true : v101;
  const v103 = stdlib.eq(v77, v95);
  const v104 = v102 ? true : v103;
  if (v104) {
    v99 = stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    v99 = stdlib.checkedBigNumberify('./index.rsh:14:12:decimal', stdlib.UInt_max, '1');
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v99), {
    at: './index.rsh:69:24:application',
    fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v77], secs: v79, time: v78, didSend: v27, from: v76 } = txn1;
  ;
  const v82 = stdlib.protect(ctc0, await interact.getNumber(), {
    at: './index.rsh:53:54:application',
    fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:15:function exp)'],
    msg: 'getNumber',
    who: 'Bob'
    });
  const v83 = stdlib.protect(ctc0, await interact.getNumber(), {
    at: './index.rsh:54:55:application',
    fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:15:function exp)'],
    msg: 'getNumber',
    who: 'Bob'
    });
  const v84 = stdlib.protect(ctc0, await interact.getNumber(), {
    at: './index.rsh:55:54:application',
    fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:15:function exp)'],
    msg: 'getNumber',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v77, v82],
    evt_cnt: 1,
    funcNum: 1,
    lct: v78,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:58:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v77, v85, v86, v83],
    evt_cnt: 1,
    funcNum: 2,
    lct: v87,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v90], secs: v92, time: v91, didSend: v44, from: v89 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v90], secs: v92, time: v91, didSend: v44, from: v89 } = txn3;
  ;
  const v93 = stdlib.addressEq(v85, v89);
  stdlib.assert(v93, {
    at: './index.rsh:60:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v77, v85, v86, v90, v84],
    evt_cnt: 1,
    funcNum: 3,
    lct: v91,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v95], secs: v97, time: v96, didSend: v50, from: v94 } = txn4;
      
      ;
      let v99;
      const v100 = stdlib.eq(v77, v86);
      const v101 = stdlib.eq(v77, v90);
      const v102 = v100 ? true : v101;
      const v103 = stdlib.eq(v77, v95);
      const v104 = v102 ? true : v103;
      if (v104) {
        v99 = stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '0');
        }
      else {
        v99 = stdlib.checkedBigNumberify('./index.rsh:14:12:decimal', stdlib.UInt_max, '1');
        }
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v95], secs: v97, time: v96, didSend: v50, from: v94 } = txn4;
  ;
  const v98 = stdlib.addressEq(v85, v94);
  stdlib.assert(v98, {
    at: './index.rsh:62:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  let v99;
  const v100 = stdlib.eq(v77, v86);
  const v101 = stdlib.eq(v77, v90);
  const v102 = v100 ? true : v101;
  const v103 = stdlib.eq(v77, v95);
  const v104 = v102 ? true : v103;
  if (v104) {
    v99 = stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    v99 = stdlib.checkedBigNumberify('./index.rsh:14:12:decimal', stdlib.UInt_max, '1');
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v99), {
    at: './index.rsh:69:24:application',
    fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECAyYCAQAAIjUAMRhBAZ8pZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSQMQACXSSUMQAA0JRJEJTQBEkQ0BEkiEkw0AhIRRChkNQNJNQUXNf+ABNQMbNY0/xZQsDQDVwggMQASREIA50gkNAESRDQESSISTDQCEhFEKGRJNQNJSSJbNf9XCCA1/oEoWzX9STUFFzX8gASXTvcXNPwWULA0/jEAEkQ0/xY0/lA0/RZQNPwWUChLAVcAOGdIJTUBMgY1AkIApkkjDEAARkgjNAESRDQESSISTDQCEhFEKGRJNQMXNf9JNQUXNf6ABNUVGRQ0/hZQsDT/FjEAUDT+FlAoSwFXADBnSCQ1ATIGNQJCAFpIgaCNBogAoyI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/FihLAVcACGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000c7738038062000c778339810160408190526200002691620001ac565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000dc565b6040805160208082018352600080835284820151518084526001918290554390915583519182015290910160405160208183030381529060405260029080519060200190620000d392919062000106565b5050506200028b565b81620001025760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000114906200024e565b90600052602060002090601f01602090048101928262000138576000855562000183565b82601f106200015357805160ff191683800117855562000183565b8280016001018555821562000183579182015b828111156200018357825182559160200191906001019062000166565b506200019192915062000195565b5090565b5b8082111562000191576000815560010162000196565b6000818303604080821215620001c157600080fd5b80518082016001600160401b038082118383101715620001f157634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200020b57600080fd5b8351945060208501915084821081831117156200023857634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200026357607f821691505b602082108114156200028557634e487b7160e01b600052602260045260246000fd5b50919050565b6109dc806200029b6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806345f70396146100835780638323075714610096578063873779a1146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610776565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004610776565b6102f0565b3480156100ca57600080fd5b506100d361047d565b60405161007a929190610799565b61005d6100ef366004610776565b61051a565b610104600260005414600d610663565b61011e8135158061011757506001548235145b600e610663565b600080805560028054610130906107f6565b80601f016020809104026020016040519081016040528092919081815260200182805461015c906107f6565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610847565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516101f49291906108b6565b60405180910390a16102083415600b610663565b6020810151610223906001600160a01b03163314600c610663565b61025760405180608001604052806000815260200160006001600160a01b0316815260200160008152602001600081525090565b815181526020808301516001600160a01b03168183015260408084015181840152848201356060840152600360005543600155516102c691839101815181526020808301516001600160a01b031690820152604080830151908201526060918201519181019190915260800190565b604051602081830303815290604052600290805190602001906102ea929190610688565b50505050565b6103006001600054146009610663565b61031a8135158061031357506001548235145b600a610663565b60008080556002805461032c906107f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610358906107f6565b80156103a55780601f1061037a576101008083540402835291602001916103a5565b820191906000526020600020905b81548152906001019060200180831161038857829003601f168201915b50505050508060200190518101906103bd91906108dd565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f722533836040516103f09291906108b6565b60405180910390a161040434156008610663565b61043160405180606001604052806000815260200160006001600160a01b03168152602001600081525090565b815180825233602080840191825285810135604080860191825260026000554360015580519283019490945291516001600160a01b0316928101929092525160608201526080016102c6565b600060606000546002808054610492906107f6565b80601f01602080910402602001604051908101604052809291908181526020018280546104be906107f6565b801561050b5780601f106104e05761010080835404028352916020019161050b565b820191906000526020600020905b8154815290600101906020018083116104ee57829003601f168201915b50505050509050915091509091565b61052a6003600054146011610663565b6105448135158061053d57506001548235145b6012610663565b600080805560028054610556906107f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610582906107f6565b80156105cf5780601f106105a4576101008083540402835291602001916105cf565b820191906000526020600020905b8154815290600101906020018083116105b257829003601f168201915b50505050508060200190518101906105e7919061092d565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1338360405161061a9291906108b6565b60405180910390a161062e3415600f610663565b6020810151610649906001600160a01b031633146010610663565b6000808055600181905561065f9060029061070c565b5050565b8161065f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610694906107f6565b90600052602060002090601f0160209004810192826106b657600085556106fc565b82601f106106cf57805160ff19168380011785556106fc565b828001600101855582156106fc579182015b828111156106fc5782518255916020019190600101906106e1565b50610708929150610749565b5090565b508054610718906107f6565b6000825580601f10610728575050565b601f0160209004906000526020600020908101906107469190610749565b50565b5b80821115610708576000815560010161074a565b60006040828403121561077057600080fd5b50919050565b60006040828403121561078857600080fd5b610792838361075e565b9392505050565b82815260006020604081840152835180604085015260005b818110156107cd578581018301518582016060015282016107b1565b818111156107df576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061080a57607f821691505b6020821081141561077057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461084257600080fd5b919050565b60006060828403121561085957600080fd5b6040516060810181811067ffffffffffffffff8211171561088a57634e487b7160e01b600052604160045260246000fd5b6040528251815261089d6020840161082b565b6020820152604083015160408201528091505092915050565b6001600160a01b038316815260608101610792602083018480358252602090810135910152565b6000602082840312156108ef57600080fd5b6040516020810181811067ffffffffffffffff8211171561092057634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b60006080828403121561093f57600080fd5b6040516080810181811067ffffffffffffffff8211171561097057634e487b7160e01b600052604160045260246000fd5b604052825181526109836020840161082b565b60208201526040830151604082015260608301516060820152809150509291505056fea2646970667358221220dc767b301d9f0bffb5f0ca16db0e9364c2726c769067908f258c43af604c4c8364736f6c634300080c0033`,
  BytecodeLen: 3191,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:59:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:66:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
