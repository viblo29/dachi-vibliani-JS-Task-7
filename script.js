const sentence = `I love learning JavaScript`;
const words = sentence.split(` `);

for (let index = 0; index < words.length; index++) {
  if (words[index].length >= 5) {
    words[index] = `LongWord`;
  } else {
    words[index] = `ShortWord`;
  }
}
console.log(words.join());

let sentence1 = `nikas gaumarjos, rogor xar?`;
let words1 = sentence1.split(` `);
let i = 0;
let letterA = 0;

while (i < words1.length) {
  if (words1[i].includes(`a`)) {
    letterA++;
  }
  i++;
}
console.log(letterA);

let i1 = 0;
do {
  console.log(words1[i1]);
  i1++;
} while (i1 < words1.length);
