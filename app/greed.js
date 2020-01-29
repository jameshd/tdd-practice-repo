const validateRoll = dice => {
  if (dice === null) {
    throw Error("It does not work");
  }

  if (dice.length != 5) {
    throw Error("It does not work");
  }
};

const getScoreFrequencies = dice => {
  const frequencies = [];
  for (let i = 0; i < dice.length; i++) {
    const score = dice[i];

    if (!frequencies[score]) frequencies[score] = 0;

    frequencies[score] += 1;
  }

  return frequencies;
};

export const calculate = dice => {
  validateRoll(dice);

  let frequencies = getScoreFrequencies(dice);

  return frequencies.reduce((total, occurs, score) => {
    if (score == 1) {
      if (occurs >= 3) {
        total += 1000;
        occurs -= 3;
      }
      total += occurs * 100;
    }

    if (occurs >= 3) {
      total += 100 * score;
      occurs -= 3;
    }

    if (score == 5) {
      total += occurs * 50;
    }
    return total;
  }, 0)
  //   for (let score in frequencies) {
  //     let occurs = frequencies[score];

  //     if (score == 1) {
  //       if (occurs >= 3) {
  //         total += 1000;
  //         occurs -= 3;
  //       }
  //       total += occurs * 100;
  //     }

  //     if (occurs >= 3) {
  //       total += 100 * score;
  //       occurs -= 3;
  //     }

  //     if (score == 5) {
  //       total += occurs * 50;
  //     }
  //   }
};
