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
]

export default farms
