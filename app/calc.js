const validate = (dice) => {
  if (dice === null) {
    throw new Error("No dice!");
  }

  if (dice.length !== 5) {
    throw new Error("I canne de it!");
  }
}

module.exports = (dice) => {
  let total = 0;
  let counts = {};
  dice.forEach((number) => {
    if (number in counts) {
      counts[number]++;
    } else {
      counts[number] = 1;
    }
  });

  validate(dice);

  for (let [score, occurrences] of Object.entries(counts)) {
    if (score === "1") {
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

    if (score === "5") {
      total += occurrences * 50;
    }
  }

  return total;
};