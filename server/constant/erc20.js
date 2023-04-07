module.exports = {
    ERC20_ABI : [
        {
          constant: false,
          inputs: [
            { name: '_spender', type: 'address' },
            { name: '_value', type: 'uint256' },
          ],
          name: 'approve',
          outputs: [{ name: 'success', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'totalSupply',
          outputs: [{ name: 'supply', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { name: '_from', type: 'address' },
            { name: '_to', type: 'address' },
            { name: '_value', type: 'uint256' },
          ],
          name: 'transferFrom',
          outputs: [{ name: 'success', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [{ name: 'digits', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [{ name: '_owner', type: 'address' }],
          name: 'balanceOf',
          outputs: [{ name: 'balance', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { name: '_to', type: 'address' },
            { name: '_value', type: 'uint256' },
          ],
          name: 'transfer',
          outputs: [{ name: 'success', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { name: '_owner', type: 'address' },
            { name: '_spender', type: 'address' },
          ],
          name: 'allowance',
          outputs: [{ name: 'remaining', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: '_owner', type: 'address' },
            { indexed: true, name: '_spender', type: 'address' },
            { indexed: false, name: '_value', type: 'uint256' },
          ],
          name: 'Approval',
          type: 'event',
        },
      ],

      
    PAN_ROUTER : '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', // 0x10ED43C718714eb63d5aA57B78B54704E256024E
    WBNB : '0xd0A1E359811322d97991E03f863a0C30C2cF029C' // 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c

};