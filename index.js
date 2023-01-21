const valueInputNode = document.querySelector('.js-value-input');
const currencySelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

valueInputNode.addEventListener('input', function () {
  const rub = Number(valueInputNode.value);
  const currency = currencySelectorNode.value;
  console.log(currency);
});
s;
