import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

// const Number = ['Rock', 'Paper', 'Scissors'];
const OUTCOME = ['Bob wins', 'Alice wins'];
const Player = (Who) => ({
  getNumber: () => {
    const guessedNumber = Math.floor(Math.random() * 100);
    console.log(`${Who} played ${guessedNumber}`);
    return guessedNumber;
  },
  seeOutcome: (outcome) => {
    console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
  },
});

await Promise.all([
  ctcAlice.p.Alice({
    ...Player('Alice'),
  }),
  ctcBob.p.Bob({
    ...Player('Bob'),
  }),
]);