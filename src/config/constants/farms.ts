import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PASTA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x788fdceb07AFABB2e0fd920651D292088Fb96752',
    },
    tokenSymbol: 'PASTA',
    tokenAddresses: {
      97: '',
      56: '0xAB9D0Fae6eB062F2698C2D429a1BE9185A5D4F6E',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'PASTA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7C516F8CB24F89fc689C31655304e70812dC1F75',
    },
    tokenSymbol: 'PASTA',
    tokenAddresses: {
      97: '',
      56: '0xAB9D0Fae6eB062F2698C2D429a1BE9185A5D4F6E',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    risk: 5,
    lpSymbol: 'PASTA-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x6F7B21bA93d99682BD2D6896bc7E183b5692cFc5',
    },
    tokenSymbol: 'PASTA',
    tokenAddresses: {
      97: '',
      56: '0xab9d0fae6eb062f2698c2d429a1be9185a5d4f6e',
    },
    quoteTokenSymbol: QuoteToken.PASTA,
    quoteTokenAdresses: contracts.pasta,
  },
  {
    pid: 10,
    risk: 5,
    lpSymbol: 'PASTA-DODO LP',
    lpAddresses: {
      97: '',
      56: '0xa23B52C017b247169e54499Cc83Cb3F098D450C3',
    },
    tokenSymbol: 'PASTA',
    tokenAddresses: {
      97: '',
      56: '0xab9d0fae6eb062f2698c2d429a1be9185a5d4f6e',
    },
    quoteTokenSymbol: QuoteToken.PASTA,
    quoteTokenAdresses: contracts.pasta,
  },
  {
    pid: 12,
    risk: 5,
    lpSymbol: 'PASTA-DOT LP',
    lpAddresses: {
      97: '',
      56: '0x57FB28bf9E293a57A8EcD7cDd43268a95bAD6C12',
    },
    tokenSymbol: 'PASTA',
    tokenAddresses: {
      97: '',
      56: '0xab9d0fae6eb062f2698c2d429a1be9185a5d4f6e',
    },
    quoteTokenSymbol: QuoteToken.PASTA,
    quoteTokenAdresses: contracts.pasta,
  },
   {
     pid: 13,
     risk: 5,
     lpSymbol: 'PASTA-UNI LP',
     lpAddresses: {
       97: '',
       56: '0xCf7e52aD2dd7A39fA9Df39a3A90c64F799580248',
     },
     tokenSymbol: 'PASTA',
     tokenAddresses: {
       97: '',
       56: '0xab9d0fae6eb062f2698c2d429a1be9185a5d4f6e',
     },
     quoteTokenSymbol: QuoteToken.PASTA,
     quoteTokenAdresses: contracts.pasta,
   },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PASTA',
    lpAddresses: {
      97: '',
      56: '0x788fdceb07AFABB2e0fd920651D292088Fb96752', // PASTA-BUSD LP
    },
    tokenSymbol: 'PASTA',
    tokenAddresses: {
      97: '',
      56: '0xAB9D0Fae6eB062F2698C2D429a1BE9185A5D4F6E',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'DODO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9e642d174b14faea31d842dc83037c42b53236e6',
    },
    tokenSymbol: 'DODO',
    tokenAddresses: {
      97: '',
      56: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 5,
    lpSymbol: 'REEF-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58B58cab6C5cF158f63A2390b817710826d116D0',
    },
    tokenSymbol: 'REEF',
    tokenAddresses: {
      97: '',
      56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 5,
    lpSymbol: 'XVS-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb',
    },
    tokenSymbol: 'XVS',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 5,
    lpSymbol: 'HARD-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d',
    },
    tokenSymbol: 'HARD',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
