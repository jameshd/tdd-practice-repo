const validate = (dice) => {
  if (dice === null) {
    throw new Error("No dice!");
  }

  if (dice.length !== 5) {
    throw new Error("I canne de it!");
  }
};

const countScores = (dice) => {
  let counts = new Map();
  dice.forEach((score) => {
    if (!counts.has(score)) {
      counts.set(score, 1);
    } else {
      counts.set(score, counts.get(score) + 1);
    }
  });

  return counts;
};

module.exports = (dice) => {
  let total = 0;

  validate(dice);

  for (let [score, occurrences] of countScores(dice).entries()) {
    if (score === 1) {
      if (occurrences >= 3) {
        total += 1000;
        occurrences -= 3;
      }
      total += occurrences * 100;
    }

    if (occurrences >= 3) {
      total += score * 100;
      occurrences -= 3;
    }

    if (score === 5) {
      total += occurrences * 50;
    }
  }

  return total;
};
