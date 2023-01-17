import InvestmentPortfolio from './img/InvestmentPortfolio.gif';
import DietPlanner from './img/DietPlanner.gif';
import Website from './img/website.png';
import Messenger from './img/messenger.png';
import MultiSig from './img/multisig.png';
import Cloud from './img/cloud.jpg';
import Resume from './img/Resume_Huseyn_Akhundov.pdf';



const projects = [
  {
    image: InvestmentPortfolio,
    name: 'Investment Portfolio',
    description:
      'React + JS Investment Portfolio integrated with multiple financial APIs ',
    stack: ['React', 'JavaScript', 'Node.js'],
    sourceCode: 'https://github.com/HuseynAkh/InvestmentPortfolio',
    livePreview: 'https://huseynakh.github.io/InvestmentPortfolio/',
  },
  {
    image: DietPlanner,
    name: 'Diet Planner',
    description:
      'Java based Diet Planner. Plans meals and helps meet nutritional goals',
    stack: [ 'Java', 'Swing'],
    sourceCode: 'https://github.com/HuseynAkh/DietPlanner',
  },
  {
    image: Website,
    name: 'This Website',
    description:
      'An elegant mobile compatible Web Portfolio',
    stack: ['TypeScript', 'React'],
    sourceCode: 'https://huseyn-akh.com',
  },
  {
    image: Messenger,
    name: 'Encrypted Messenger',
    description:
      'An encrypted CLI tool for user communication ',
    stack: ['Python', 'PyCryptodome', 'bcrypt'],
  },
  {
    image: Cloud,
    name: 'Self Hosted',
    description:
      'A personal home server with task management, calendar, and file storage',
    stack: ['Ubuntu Server', 'MariaDB', 'Apache VirtualHost'],
  },
  {
    image: MultiSig,
    name: 'Multi-Sig Wallet',
    description:
      'Auditable Multi-signature wallet solidity contract',
    stack: ['Solidity', 'Remix'],
  },
];

const contact = {
  email: 'huseyn.akh@gmail.com',
}

const resume = {
  resume: Resume,
}

export { resume, projects, contact };
