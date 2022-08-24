import { AboutCardType } from '../types/AboutCardType';

import ServerProcess from "../assets/icons/server-process.svg";
import BlockChain from "../assets/icons/blockchain.svg";
import Secure from "../assets/icons/fsecure.svg";
import Strapi from "../assets/icons/strapi.svg";


export const data: AboutCardType[] = [
  {
    icon: BlockChain,
    heading: 'Reliable, tamper-proof network',
    text: 'Use decentralized technology to build a tamper-proof network that is secure and reliable. To make sure that your data is safe and secure.',
  },
  {
    icon: Strapi ,
    heading: 'Seamless connection to any API',
    text: 'Build on an open source platform, with a focus on security and scalability. We are building the next generation of blockchain technology.',
  },
  {
    icon: Secure ,
    heading: 'Proven, ready-made solutions',
    text: 'We have built a number of blockchain solutions that are ready to use. We are building the next generation of blockchain technology.',
  },
  {
    icon: ServerProcess ,
    heading: 'Secure off-chain computation',
    text: 'Use a decentralized network to compute off-chain data. We are building the next generation of blockchain technology.',
  }
]