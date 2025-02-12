export const TokenAddress = "0x35BD1509a00CE3D6a7969A97cB075e0086A943cB";
export const Token_abi = [ {inputs: [], stateMutability: 'nonpayable', type: 'constructor'}, {inputs: [], name: 'InvalidShortString', type: 'error'}, {inputs: [{internalType: 'string', name: 'str', type: 'string'}], name: 'StringTooLong', type: 'error'}, { anonymous: false, inputs: [ {indexed: true, internalType: 'address', name: 'owner', type: 'address'}, {indexed: true, internalType: 'address', name: 'spender', type: 'address'}, {indexed: false, internalType: 'uint256', name: 'value', type: 'uint256'}, ], name: 'Approval', type: 'event', }, {anonymous: false, inputs: [], name: 'EIP712DomainChanged', type: 'event'}, { anonymous: false, inputs: [ {indexed: false, internalType: 'address', name: 'previousOwner', type: 'address'}, {indexed: false, internalType: 'address', name: 'newOwner', type: 'address'}, ], name: 'OwnershipTransferred', type: 'event', }, { anonymous: false, inputs: [ {indexed: true, internalType: 'address', name: 'from', type: 'address'}, {indexed: true, internalType: 'address', name: 'to', type: 'address'}, {indexed: false, internalType: 'uint256', name: 'value', type: 'uint256'}, ], name: 'Transfer', type: 'event', }, {inputs: [], name: 'DOMAIN_SEPARATOR', outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}], stateMutability: 'view', type: 'function'}, { inputs: [ {internalType: 'address', name: 'owner', type: 'address'}, {internalType: 'address', name: 'spender', type: 'address'}, ], name: 'allowance', outputs: [{internalType: 'uint256', name: '', type: 'uint256'}], stateMutability: 'view', type: 'function', }, { inputs: [ {internalType: 'address', name: 'spender', type: 'address'}, {internalType: 'uint256', name: 'amount', type: 'uint256'}, ], name: 'approve', outputs: [{internalType: 'bool', name: '', type: 'bool'}], stateMutability: 'nonpayable', type: 'function', }, {inputs: [{internalType: 'address', name: 'account', type: 'address'}], name: 'balanceOf', outputs: [{internalType: 'uint256', name: '', type: 'uint256'}], stateMutability: 'view', type: 'function'}, {inputs: [{internalType: 'uint256', name: 'amount', type: 'uint256'}], name: 'burn', outputs: [], stateMutability: 'nonpayable', type: 'function'}, { inputs: [ {internalType: 'address', name: 'account', type: 'address'}, {internalType: 'uint256', name: 'amount', type: 'uint256'}, ], name: 'burnFrom', outputs: [], stateMutability: 'nonpayable', type: 'function', }, {inputs: [], name: 'decimals', outputs: [{internalType: 'uint8', name: '', type: 'uint8'}], stateMutability: 'view', type: 'function'}, { inputs: [ {internalType: 'address', name: 'spender', type: 'address'}, {internalType: 'uint256', name: 'subtractedValue', type: 'uint256'}, ], name: 'decreaseAllowance', outputs: [{internalType: 'bool', name: '', type: 'bool'}], stateMutability: 'nonpayable', type: 'function', }, { inputs: [], name: 'eip712Domain', outputs: [ {internalType: 'bytes1', name: 'fields', type: 'bytes1'}, {internalType: 'string', name: 'name', type: 'string'}, {internalType: 'string', name: 'version', type: 'string'}, {internalType: 'uint256', name: 'chainId', type: 'uint256'}, {internalType: 'address', name: 'verifyingContract', type: 'address'}, {internalType: 'bytes32', name: 'salt', type: 'bytes32'}, {internalType: 'uint256[]', name: 'extensions', type: 'uint256[]'}, ], stateMutability: 'view', type: 'function', }, { inputs: [ {internalType: 'address', name: 'spender', type: 'address'}, {internalType: 'uint256', name: 'addedValue', type: 'uint256'}, ], name: 'increaseAllowance', outputs: [{internalType: 'bool', name: '', type: 'bool'}], stateMutability: 'nonpayable', type: 'function', }, { inputs: [ {internalType: 'address', name: 'to', type: 'address'}, {internalType: 'uint256', name: 'amount', type: 'uint256'}, ], name: 'mint', outputs: [], stateMutability: 'nonpayable', type: 'function', }, {inputs: [], name: 'name', outputs: [{internalType: 'string', name: '', type: 'string'}], stateMutability: 'view', type: 'function'}, {inputs: [{internalType: 'address', name: 'owner', type: 'address'}], name: 'nonces', outputs: [{internalType: 'uint256', name: '', type: 'uint256'}], stateMutability: 'view', type: 'function'}, {inputs: [], name: 'owner', outputs: [{internalType: 'address', name: '', type: 'address'}], stateMutability: 'view', type: 'function'}, { inputs: [ {internalType: 'address', name: 'owner', type: 'address'}, {internalType: 'address', name: 'spender', type: 'address'}, {internalType: 'uint256', name: 'value', type: 'uint256'}, {internalType: 'uint256', name: 'deadline', type: 'uint256'}, {internalType: 'uint8', name: 'v', type: 'uint8'}, {internalType: 'bytes32', name: 'r', type: 'bytes32'}, {internalType: 'bytes32', name: 's', type: 'bytes32'}, ], name: 'permit', outputs: [], stateMutability: 'nonpayable', type: 'function', }, {inputs: [], name: 'symbol', outputs: [{internalType: 'string', name: '', type: 'string'}], stateMutability: 'view', type: 'function'}, {inputs: [], name: 'totalSupply', outputs: [{internalType: 'uint256', name: '', type: 'uint256'}], stateMutability: 'view', type: 'function'}, { inputs: [ {internalType: 'address', name: 'to', type: 'address'}, {internalType: 'uint256', name: 'amount', type: 'uint256'}, ], name: 'transfer', outputs: [{internalType: 'bool', name: '', type: 'bool'}], stateMutability: 'nonpayable', type: 'function', }, { inputs: [ {internalType: 'address', name: 'from', type: 'address'}, {internalType: 'address', name: 'to', type: 'address'}, {internalType: 'uint256', name: 'amount', type: 'uint256'}, ], name: 'transferFrom', outputs: [{internalType: 'bool', name: '', type: 'bool'}], stateMutability: 'nonpayable', type: 'function', }, {inputs: [{internalType: 'address payable', name: 'newOwner', type: 'address'}], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function'}, ];
export const ContractAddress = "0x4B633CA657CE2f6D3296Ac680d3a819aB6cb2ADb"
export const Contract_abi =  [{"inputs":[{"internalType":"address","name":"_developerWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"MAX_LOCK_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_REWARD_CAP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_LOCK_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"lockId","type":"uint256"}],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"developerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeSplit","outputs":[{"internalType":"uint256","name":"rewardPool","type":"uint256"},{"internalType":"uint256","name":"reserve","type":"uint256"},{"internalType":"uint256","name":"marketing","type":"uint256"},{"internalType":"uint256","name":"development","type":"uint256"},{"internalType":"uint256","name":"developerWallet","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"lockId","type":"uint256"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"dividends","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserLockDetails","outputs":[{"internalType":"uint256","name":"totalLockedAmount","type":"uint256"},{"internalType":"uint256","name":"totalExpectedRewards","type":"uint256"},{"internalType":"uint256","name":"totalClaimable","type":"uint256"},{"internalType":"uint256","name":"totalClaimed","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"lockDuration","type":"uint256"}],"name":"lockAssets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lockCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"participate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLocked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalParticipants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"lockId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unlockAssets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userLocks","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"lockStart","type":"uint256"},{"internalType":"uint256","name":"lockEnd","type":"uint256"},{"internalType":"uint256","name":"lastClaim","type":"uint256"},{"internalType":"uint256","name":"withdrawn","type":"uint256"},{"internalType":"uint256","name":"_days","type":"uint256"},{"internalType":"uint256","name":"rewardMultiplier","type":"uint256"},{"internalType":"address","name":"lockedToken","type":"address"},{"internalType":"bool","name":"autoCompound","type":"bool"}],"stateMutability":"view","type":"function"}]