// variables and consts
const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
const plainTextId = document.getElementById("view-text-area");
const btn = document.getElementById("enc-dec-btn");
const cypherTextId = document.getElementById("cypher-text-area");
const shift = document.getElementById("shift-value");
const displayShiftDesc = document.getElementById("display-desc");
const stepDown = document.getElementById("btn-step-down");
const stepUp = document.getElementById("btn-step-up");
const encodeBtn = document.getElementById("encode");
const decodeBtn = document.getElementById("decode");
const plainWrapper = document.getElementById("plain-text-wrapper");
const cypherWrapper = document.getElementById("cypher-text-wrapper");
const configWrapper = document.getElementById("config-wrapper");

let status = "encode";
let shiftNum = parseInt(shift.innerHTML);

// function to get shift description value
function shiftDesc(shift) {
  const shiftNum = shift % 26 ? shift % 26 : 0;
  return alphabets[shiftNum];
}

// event listner for converting plain to cypher text
btn.addEventListener("click", (e) => {
  if (status === "encode") {
    let plainText = plainTextId.value;
    cypherTextId.value = caesarCipher(plainText, shiftNum, status);
  }
  if (status === "decode") {
    let cypherText = cypherTextId.value;
    plainTextId.value = caesarCipher(cypherText, shiftNum, status);
  }
});

// event listner for increase and decrease shift number
// decrease shift number
stepDown.addEventListener("click", (e) => {
  if (shiftNum > 1) {
    shiftNum -= 1;
    shift.innerHTML = shiftNum;
    displayShiftDesc.innerHTML = shiftDisplay(shiftNum);
  }
});

// increase shift number
stepUp.addEventListener("click", (e) => {
  shiftNum += 1;
  shift.innerHTML = shiftNum;
  displayShiftDesc.innerHTML = shiftDisplay(shiftNum);
});

// event linstner for decode the cypher text
encodeBtn.addEventListener("click", (e) => {
  encodeBtn.style.borderBottom = "2px solid green";
  decodeBtn.style.borderBottom = "none";
  btn.innerHTML = "ENCODE";
  status = "encode";
  displayShiftDesc.innerHTML = shiftDisplay(shiftNum);
  plainWrapper.style.order = "1";
  configWrapper.style.order = "2";

  cypherWrapper.style.order = "3";
});

decodeBtn.addEventListener("click", (e) => {
  decodeBtn.style.borderBottom = "2px solid green";
  encodeBtn.style.borderBottom = "none";
  btn.innerHTML = "DECODE";
  status = "decode";
  displayShiftDesc.innerHTML = shiftDisplay(shiftNum);
  cypherWrapper.style.order = "1";
  configWrapper.style.order = "2";
  plainWrapper.style.order = "3";
});

// function to display shift description
function shiftDisplay(shiftNum) {
  if (status === "encode") {
    return "a→" + shiftDesc(shiftNum);
  } else {
    return shiftDesc(shiftNum) + "→a";
  }
}
