
let formElement = document.querySelector(".js-form"); 
let valueElement = document.querySelector(".js-cashInput");
let currencyElement = document.querySelector(".js-currencyType");
let outputElement = document.querySelector(".js-output")


let EURrate = 4.5565;
let USDrate = 3.7657;
let GBPrate = 5.2359;
let COPrate = 0.1055;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let amount = valueElement.value;
let currency = currencyElement.value;
console.log(amount, currency)

let result;

switch (currency) {
    case "EUR":
      result = amount / EURrate;
      break;
    case "USD":
      result = amount / USDrate;
      break;
    case "GBP":
      result = amount / GBPrate;
      break;
    case "COP":
        result = amount / COPrate;
}
    
        outputElement.innerText = `${result.toFixed(2)} ${currency}`
});

