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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc0, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1]
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
  
  
  const v95 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v98 = stdlib.protect(ctc0, await interact.getNumber(), {
    at: './index.rsh:51:52:application',
    fs: ['at ./index.rsh:49:13:application call to [unknown function] (defined at: ./index.rsh:49:17:function exp)'],
    msg: 'getNumber',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v95, v98],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:53:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v95, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v100, v101], secs: v103, time: v102, didSend: v31, from: v99 } = txn1;
      
      sim_r.txns.push({
        amt: v100,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v100, v101], secs: v103, time: v102, didSend: v31, from: v99 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v112], secs: v114, time: v113, didSend: v42, from: v111 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v116], secs: v118, time: v117, didSend: v48, from: v115 } = txn3;
  ;
  const v119 = stdlib.addressEq(v111, v115);
  stdlib.assert(v119, {
    at: './index.rsh:65:7:dot',
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
  const {data: [v121], secs: v123, time: v122, didSend: v56, from: v120 } = txn4;
  ;
  const v126 = stdlib.addressEq(v111, v120);
  stdlib.assert(v126, {
    at: './index.rsh:67:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  let v127;
  const v128 = stdlib.eq(v101, v112);
  const v129 = stdlib.eq(v101, v116);
  const v130 = v128 ? true : v129;
  const v131 = stdlib.eq(v101, v121);
  const v132 = v130 ? true : v131;
  if (v132) {
    v127 = stdlib.checkedBigNumberify('./index.rsh:14:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    v127 = stdlib.checkedBigNumberify('./index.rsh:17:12:decimal', stdlib.UInt_max, '1');
    }
  const v133 = stdlib.eq(v127, stdlib.checkedBigNumberify('./index.rsh:72:16:decimal', stdlib.UInt_max, '1'));
  const v134 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v135 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v136 = v133 ? v134 : v135;
  const v137 = v136[stdlib.checkedBigNumberify('./index.rsh:71:9:array', stdlib.UInt_max, '0')];
  const v138 = v136[stdlib.checkedBigNumberify('./index.rsh:71:9:array', stdlib.UInt_max, '1')];
  const v139 = stdlib.safeMul(v137, v100);
  ;
  const v144 = stdlib.safeMul(v138, v100);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v127), {
    at: './index.rsh:80:24:application',
    fs: ['at ./index.rsh:79:7:application call to [unknown function] (defined at: ./index.rsh:79:25:function exp)'],
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
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v100, v101], secs: v103, time: v102, didSend: v31, from: v99 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v100), {
    at: './index.rsh:57:25:application',
    fs: ['at ./index.rsh:56:11:application call to [unknown function] (defined at: ./index.rsh:56:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v108 = stdlib.protect(ctc0, await interact.getNumber(), {
    at: './index.rsh:58:54:application',
    fs: ['at ./index.rsh:56:11:application call to [unknown function] (defined at: ./index.rsh:56:15:function exp)'],
    msg: 'getNumber',
    who: 'Bob'
    });
  const v109 = stdlib.protect(ctc0, await interact.getNumber(), {
    at: './index.rsh:59:55:application',
    fs: ['at ./index.rsh:56:11:application call to [unknown function] (defined at: ./index.rsh:56:15:function exp)'],
    msg: 'getNumber',
    who: 'Bob'
    });
  const v110 = stdlib.protect(ctc0, await interact.getNumber(), {
    at: './index.rsh:60:54:application',
    fs: ['at ./index.rsh:56:11:application call to [unknown function] (defined at: ./index.rsh:56:15:function exp)'],
    msg: 'getNumber',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v99, v100, v101, v108],
    evt_cnt: 1,
    funcNum: 1,
    lct: v102,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v112], secs: v114, time: v113, didSend: v42, from: v111 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v112], secs: v114, time: v113, didSend: v42, from: v111 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v99, v100, v101, v111, v112, v109],
    evt_cnt: 1,
    funcNum: 2,
    lct: v113,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v116], secs: v118, time: v117, didSend: v48, from: v115 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v116], secs: v118, time: v117, didSend: v48, from: v115 } = txn3;
  ;
  const v119 = stdlib.addressEq(v111, v115);
  stdlib.assert(v119, {
    at: './index.rsh:65:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v99, v100, v101, v111, v112, v116, v110],
    evt_cnt: 1,
    funcNum: 3,
    lct: v117,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v100, []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v121], secs: v123, time: v122, didSend: v56, from: v120 } = txn4;
      
      sim_r.txns.push({
        amt: v100,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      let v127;
      const v128 = stdlib.eq(v101, v112);
      const v129 = stdlib.eq(v101, v116);
      const v130 = v128 ? true : v129;
      const v131 = stdlib.eq(v101, v121);
      const v132 = v130 ? true : v131;
      if (v132) {
        v127 = stdlib.checkedBigNumberify('./index.rsh:14:12:decimal', stdlib.UInt_max, '0');
        }
      else {
        v127 = stdlib.checkedBigNumberify('./index.rsh:17:12:decimal', stdlib.UInt_max, '1');
        }
      const v133 = stdlib.eq(v127, stdlib.checkedBigNumberify('./index.rsh:72:16:decimal', stdlib.UInt_max, '1'));
      const v134 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v135 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v136 = v133 ? v134 : v135;
      const v137 = v136[stdlib.checkedBigNumberify('./index.rsh:71:9:array', stdlib.UInt_max, '0')];
      const v138 = v136[stdlib.checkedBigNumberify('./index.rsh:71:9:array', stdlib.UInt_max, '1')];
      const v139 = stdlib.safeMul(v137, v100);
      sim_r.txns.push({
        kind: 'from',
        to: v99,
        tok: undefined /* Nothing */
        });
      const v144 = stdlib.safeMul(v138, v100);
      sim_r.txns.push({
        kind: 'from',
        to: v111,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v121], secs: v123, time: v122, didSend: v56, from: v120 } = txn4;
  ;
  const v126 = stdlib.addressEq(v111, v120);
  stdlib.assert(v126, {
    at: './index.rsh:67:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  let v127;
  const v128 = stdlib.eq(v101, v112);
  const v129 = stdlib.eq(v101, v116);
  const v130 = v128 ? true : v129;
  const v131 = stdlib.eq(v101, v121);
  const v132 = v130 ? true : v131;
  if (v132) {
    v127 = stdlib.checkedBigNumberify('./index.rsh:14:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    v127 = stdlib.checkedBigNumberify('./index.rsh:17:12:decimal', stdlib.UInt_max, '1');
    }
  const v133 = stdlib.eq(v127, stdlib.checkedBigNumberify('./index.rsh:72:16:decimal', stdlib.UInt_max, '1'));
  const v134 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v135 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v136 = v133 ? v134 : v135;
  const v137 = v136[stdlib.checkedBigNumberify('./index.rsh:71:9:array', stdlib.UInt_max, '0')];
  const v138 = v136[stdlib.checkedBigNumberify('./index.rsh:71:9:array', stdlib.UInt_max, '1')];
  const v139 = stdlib.safeMul(v137, v100);
  ;
  const v144 = stdlib.safeMul(v138, v100);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v127), {
    at: './index.rsh:80:24:application',
    fs: ['at ./index.rsh:79:7:application call to [unknown function] (defined at: ./index.rsh:79:25:function exp)'],
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
  appApproval: `BiAIAAECAwggKFAmAgEAACI1ADEYQQJuKWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kkDEABOkklDEAAxCUSRCU0ARJENARJIhJMNAISEUQoZEk1A0lJIQVbNf8hBls1/lcwIDX9STUFFzX8gATUDGzWNPwWULA0/4gCGDT9MQASRDT+NAMhB1sSNP40A4FYWxIRNP40/BIRQQAGIjX7QgADIzX7gBAAAAAAAAAAAAAAAAAAAAACgBAAAAAAAAAAAgAAAAAAAAAANPsjEk01+rEisgE0+iJbNP8LsggjshA0A1cAILIHs7EisgE0+iEEWzT/C7III7IQNP2yB7NCASZIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBVs1/iEGWzX9VzAgNfwhB1s1+0k1BRc1+oAEl073FzT6FlCwNPwxABJENP80/hZQNP0WUDT8UDT7FlA0+hZQKEsBVwBgZ0glNQEyBjUCQgDSSSMMQABbSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/iEGWzX9STUFFzX8gATVFRkUNPwWULA0/zT+FlA0/RZQMQBQNPwWUChLAVcAWGdIJDUBMgY1AkIAcUiBoI0GiAC6IjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQRbNf6ABKzRH8M0/xZQNP4WULA0/4gAiTEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
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
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v101",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v101",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
                "name": "v112",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
                "name": "v116",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
                "name": "v121",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
                "name": "v112",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v116",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
                "name": "v121",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
  Bytecode: `0x60806040526040516200100738038062001007833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b610d2580620002e26000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806345f70396146100835780638323075714610096578063873779a1146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610a1b565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004610a1b565b610329565b3480156100ca57600080fd5b506100d3610505565b60405161007a929190610a3e565b61005d6100ef366004610a1b565b6105a2565b610104600260005414600d610826565b61011e8135158061011757506001548235145b600e610826565b60008080556002805461013090610a9b565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610a9b565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610aec565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516101f4929190610b76565b60405180910390a16102083415600b610826565b6060810151610223906001600160a01b03163314600c610826565b61026e6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b019081528c88013560a0808d019182526003600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e0015b604051602081830303815290604052600290805190602001906103239291906108b5565b50505050565b6103396001600054146009610826565b6103538135158061034c57506001548235145b600a610826565b60008080556002805461036590610a9b565b80601f016020809104026020016040519081016040528092919081815260200182805461039190610a9b565b80156103de5780601f106103b3576101008083540402835291602001916103de565b820191906000526020600020905b8154815290600101906020018083116103c157829003601f168201915b50505050508060200190518101906103f69190610b9d565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253383604051610429929190610b76565b60405180910390a161043d34156008610826565b6104816040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152848201356080840152600260005543600155516102ff9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b60006060600054600280805461051a90610a9b565b80601f016020809104026020016040519081016040528092919081815260200182805461054690610a9b565b80156105935780601f1061056857610100808354040283529160200191610593565b820191906000526020600020905b81548152906001019060200180831161057657829003601f168201915b50505050509050915091509091565b6105b26003600054146011610826565b6105cc813515806105c557506001548235145b6012610826565b6000808055600280546105de90610a9b565b80601f016020809104026020016040519081016040528092919081815260200182805461060a90610a9b565b80156106575780601f1061062c57610100808354040283529160200191610657565b820191906000526020600020905b81548152906001019060200180831161063a57829003601f168201915b505050505080602001905181019061066f9190610c0c565b9050610679610939565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc133846040516106aa929190610b76565b60405180910390a16106c382602001513414600f610826565b60608201516106de906001600160a01b031633146010610826565b81608001518260400151146106fd578160a00151826040015114610700565b60015b610714576040820151602084013514610717565b60015b15610725576000815261072a565b600181525b60208082018051600290819052905160009083018190526040840180519190915251909101528051600114610763578060400151610769565b80602001515b606082018190528251905160208401516001600160a01b03909216916108fc9161079291610850565b6040518115909202916000818181858888f193505050501580156107ba573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc6107e28360600151602001518560200151610850565b6040518115909202916000818181858888f1935050505015801561080a573d6000803e3d6000fd5b5060008080556001819055610821906002906109b1565b505050565b8161084c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000811580610874575082826108668183610ca0565b92506108729083610ccd565b145b6108af5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610843565b92915050565b8280546108c190610a9b565b90600052602060002090601f0160209004810192826108e35760008555610929565b82601f106108fc57805160ff1916838001178555610929565b82800160010185558215610929579182015b8281111561092957825182559160200191906001019061090e565b506109359291506109ee565b5090565b604051806080016040528060008152602001610968604051806040016040528060008152602001600081525090565b815260200161098a604051806040016040528060008152602001600081525090565b81526020016109ac604051806040016040528060008152602001600081525090565b905290565b5080546109bd90610a9b565b6000825580601f106109cd575050565b601f0160209004906000526020600020908101906109eb91906109ee565b50565b5b8082111561093557600081556001016109ef565b600060408284031215610a1557600080fd5b50919050565b600060408284031215610a2d57600080fd5b610a378383610a03565b9392505050565b82815260006020604081840152835180604085015260005b81811015610a7257858101830151858201606001528201610a56565b81811115610a84576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610aaf57607f821691505b60208210811415610a1557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610ae757600080fd5b919050565b600060a08284031215610afe57600080fd5b60405160a0810181811067ffffffffffffffff82111715610b2f57634e487b7160e01b600052604160045260246000fd5b604052610b3b83610ad0565b81526020830151602082015260408301516040820152610b5d60608401610ad0565b6060820152608083015160808201528091505092915050565b6001600160a01b038316815260608101610a37602083018480358252602090810135910152565b600060608284031215610baf57600080fd5b6040516060810181811067ffffffffffffffff82111715610be057634e487b7160e01b600052604160045260246000fd5b604052610bec83610ad0565b815260208301516020820152604083015160408201528091505092915050565b600060c08284031215610c1e57600080fd5b60405160c0810181811067ffffffffffffffff82111715610c4f57634e487b7160e01b600052604160045260246000fd5b604052610c5b83610ad0565b81526020830151602082015260408301516040820152610c7d60608401610ad0565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000816000190483118215151615610cc857634e487b7160e01b600052601160045260246000fd5b500290565b600082610cea57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212206ff4cfcc3f4a8a2fa51b212cb8cd92a3b6b171627e3316fcc7fbc0202c1db63b64736f6c634300080c0033`,
  BytecodeLen: 4103,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:54:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:66:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:77:11:after expr stmt semicolon',
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
