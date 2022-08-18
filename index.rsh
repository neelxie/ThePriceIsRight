"reach 0.1";

// const [isHand, ROCK, PAPER, SCISSORS] = makeEnum(3);
const [isOutcome, B_WINS, A_WINS] = makeEnum(2);

// const winner = (handAlice, handBob) => (handAlice + (4 - handBob)) % 3;
const solu = (handAlice, firstNumber, secondNumber, thirdNumber) => {
  if (
    handAlice == firstNumber ||
    handAlice == secondNumber ||
    handAlice == thirdNumber
  ) {
    // outcome = A_WINS;
    return 0;
  } else {
    // outcome = B_WINS;
    return 1;
  }
};
// assert(winner(ROCK, PAPER) == B_WINS);
// assert(winner(PAPER, ROCK) == A_WINS);
// assert(winner(ROCK, ROCK) == LOSE);

// forall(UInt, (handAlice) =>
//   forall(UInt, (handBob) => assert(isOutcome(winner(handAlice, handBob))))
// );

// forall(UInt, (hand) => assert(winner(hand, hand) == LOSE));

const Player = {
  // ...hasRandom,
  getNumber: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  // informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    ...Player,
    wager: UInt, // atomic units of currency
    // deadline: UInt, // time delta (blocks/rounds)
  });
  const Bob = Participant("Bob", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  Alice.only(() => {
    const wager = declassify(interact.wager);
    const handAlice = declassify(interact.getNumber());
  });
  Alice.publish(wager, handAlice).pay(wager);
  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
    const firstNumber = declassify(interact.getNumber());
    const secondNumber = declassify(interact.getNumber());
    const ThirdNumber = declassify(interact.getNumber());
  });

  Bob.publish(firstNumber);
  commit();
  Bob.publish(secondNumber);
  commit();
  Bob.publish(ThirdNumber).pay(wager);

  const outcome = solu(handAlice, firstNumber, secondNumber, ThirdNumber);

  const [forAlice, forBob] =
    outcome == 1 ? [2, 0] :
    /* alice    */ [0, 2];
  transfer(forAlice * wager).to(Alice);
  transfer(forBob * wager).to(Bob);

  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });

  // const informTimeout = () => {
  //   each([Alice, Bob], () => {
  //     interact.informTimeout();
  //   });
  // };

  // Alice.only(() => {
  //   const wager = declassify(interact.wager);
  //   const deadline = declassify(interact.deadline);
  // });
  // Alice.publish(wager, deadline).pay(wager);
  // commit();

  // Bob.only(() => {
  //   interact.acceptWager(wager);
  // });
  // Bob.pay(wager).timeout(relativeTime(deadline), () =>
  //   closeTo(Alice, informTimeout)
  // );

  // var outcome = LOSE;
  // invariant(balance() == 2 * wager && isOutcome(outcome));
  // while (outcome == LOSE) {
  //   commit();

  //   Alice.only(() => {
  //     const _handAlice = interact.getNumber();
  //     const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
  //     const commitAlice = declassify(_commitAlice);
  //   });
  //   Alice.publish(commitAlice).timeout(relativeTime(deadline), () =>
  //     closeTo(Bob, informTimeout)
  //   );
  //   commit();

  //   unknowable(Bob, Alice(_handAlice, _saltAlice));
  //   Bob.only(() => {
  //     const handBob = declassify(interact.getNumber());
  //   });
  //   Bob.publish(handBob).timeout(relativeTime(deadline), () =>
  //     closeTo(Alice, informTimeout)
  //   );
  //   commit();

  //   Alice.only(() => {
  //     const saltAlice = declassify(_saltAlice);
  //     const handAlice = declassify(_handAlice);
  //   });
  //   Alice.publish(saltAlice, handAlice).timeout(relativeTime(deadline), () =>
  //     closeTo(Bob, informTimeout)
  //   );
  //   checkCommitment(commitAlice, saltAlice, handAlice);

  //   outcome = winner(handAlice, handBob);
  //   continue;
  // }

  // assert(outcome == A_WINS || outcome == B_WINS);
  // transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
  // commit();

  // each([Alice, Bob], () => {
  //   interact.seeOutcome(outcome);
  // });
});
