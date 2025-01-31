/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.92.0
  Forc version: 0.61.2
  Fuel-Core version: 0.31.0
*/

import {
  Account,
  BigNumberish,
  BN,
  Script,
} from 'fuels';

type TestScriptAbiInputs = [input: BigNumberish];
type TestScriptAbiOutput = BN;

const _abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "input",
          "type": 0,
          "typeArguments": null
        }
      ],
      "name": "main",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": null
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
}

const _bin = '0x1af030007400000200000000000002085dffc00110ffff001aec5000910001a05053b0e06140000a5fed0031614000045fed002b5043b1887244000828ed0440504bb0f072400008284bb4005043b16872440008284124405d43b02d5d4100005fed00335d43b02d724400081b441440104104405fed002d5d43b0335047b0085fed00015043b0f872480008284114805047b10072480008284504805043b16072480008284114805d43b02c1ae9000020f8330058fbe00250fbe004740000471a43d0005fed00325043b19072440400264400001a447000504bb0285fed1005724404005fed10065fec00075047b058724c0018284524c0504bb108724c0018284914c05047b0b0724c0018284524c0504bb010724c0018284914c05d47b002504920085d4fb004105514c072580008285505807240000810413400504fb0705fed100e5045300872540008284525405fed00105043b09872440018284134405047b12072480018284504805043b17072480018284114805043b1705047b0c872480018284504805043b04072480018284114805d47b00850410010504bb0885fed101150452008724c0008284504c05043b13872440010284124405047b148724800102845048072400010285114005d4140015d5140002551000095000003960800001aec50001a43a0001a47e0001af500001af9100098080000970000034af8000047000000'

export const TestScriptAbi__factory = {

  abi: _abi,
  bin: _bin,

  createInstance(wallet: Account) {

    const script = new Script<
      TestScriptAbiInputs,
      TestScriptAbiOutput
    >(_bin, _abi, wallet);

    return script;

  }

}
