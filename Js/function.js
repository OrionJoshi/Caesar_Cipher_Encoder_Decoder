// function to convert plain text into  cypher text
function caesarCipher(str, shift, status) {
  const alphabetArr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphabetArr.indexOf(char);

    // if it is not a letter, don't shift it
    if (idx === -1) {
      result += char;
      continue;
    }
    // encode case

    if (status === "encode") {
      // check for uppercase alphabet
      if (idx >= 0 && idx <= 25) {
        const shiftIdx = (idx + shift) % 26;
        result += alphabetArr[shiftIdx];
      }

      // check for lowercase alphabet
      if (idx >= 26 && idx <= 52) {
        const shiftIdx = ((idx + shift) % 26) + 26;
        result += alphabetArr[shiftIdx];
      }
    }

    // decode case

    if (status === "decode") {
      // check for uppercase alphabet
      if (idx >= 0 && idx <= 25) {
        const shiftIdx = (idx - shift) % 26;
        result += alphabetArr[shiftIdx];
      }

      // check for lowercase alphabet
      if (idx >= 26 && idx <= 52) {
        const shiftIdx = ((idx - shift) % 26) + 26;
        result += alphabetArr[shiftIdx];
      }
    }
  }

  return result;
}
