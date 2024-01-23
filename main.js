const withTextDiv = document.getElementById("withTextDiv");
const noTextDiv = document.getElementById("noTextDiv");
const buttonCopy = document.getElementById("buttonCopy");
const inputText = document.getElementById("inputText");
const resultText = document.getElementById("resultText");

function encrypt() {
  let encryptedText;
  if (inputText.value) {
    encryptedText = inputText.value
      .replace(/e/g, "enter")
      .replace(/i/g, "imer")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }
  switchDisplay(encryptedText);
}

function decrypt() {
  let encryptedText;
  if (inputText.value) {
    encryptedText = inputText.value
      .replace(/enter/g, "e")
      .replace(/imer/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }
  switchDisplay(encryptedText);
}

function switchDisplay(encryptedText) {
  if (inputText.value) {
    noTextDiv.style.display = "none";
    withTextDiv.style.display = "flex";

    resultText.style.display = "flex";
    buttonCopy.style.display = "flex";

    resultText.textContent = encryptedText;
  } else {
    noTextDiv.style.display = "flex";
    withTextDiv.style.display = "none";

    resultText.style.display = "none";
    buttonCopy.style.display = "none";
  }
}

function copy() {
  var resultText = document.getElementById("resultText").innerHTML;
  var copyMessage = document.getElementById("copyMessage");

  navigator.clipboard
    .writeText(resultText)
    .then(function () {
      copyMessage.textContent = "Texto copiado!";

      setTimeout(function () {
        copyMessage.textContent = "";
      }, 1000);
    })
    .catch(function (err) {
      console.error("Erro ao copiar texto: ", err);
      copyMessage.textContent = "Erro ao copiar texto!";
    });
}

function erase() {
  document.getElementById("resultText").innerHTML = "";
}

function eraseFirst() {
  document.getElementById("inputText").value = "";
}
