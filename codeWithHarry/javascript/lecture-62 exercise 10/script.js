let adj = {
  ad1: "crazy",
  ad2: "amazing",
  ad3: "fire",
};
let name = {
  nam1: "Engine",
  nam2: "Foods",
  nam3: "Garments",
};

let word = {
  wo1: "bros",
  wo2: "limited",
  wo3: "hub",
};

let word1;
let word2;
let word3;

let rando = Math.random();

if (rando < 0.33) {
  word1 = adj["ad1"];
} else if (rando < 0.66) {
  word1 = adj["ad2"];
} else {
  word1 = adj["ad3"];
}

rando = Math.random();

if (rando < 0.33) {
  word2 = name["nam1"];
} else if (rando < 0.66) {
  word2 = name["nam2"];
} else {
  word2 = name["nam3"];
}

rando = Math.random();

if (rando < 0.33) {
  word3 = word["wo1"];
} else if (rando < 0.66) {
  word3 = word["wo2"];
} else {
  word3 = word["wo3"];
}

console.log(word1, word2, word3);
