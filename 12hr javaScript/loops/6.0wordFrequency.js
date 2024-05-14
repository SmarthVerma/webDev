const wordfreq = (sentence) => {
  let freq = {};

  let words=sentence.trim().split(" ");

  for (const key of words) {
    if (freq[key]) {
      freq[key]++;
    } else freq[key] = 1;
  }

  return freq;
};

console.log(wordfreq(`hello lol i am lol`));
