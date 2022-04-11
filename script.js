'use strict';

document.querySelector('input#grocery').addEventListener('click', function () {
  document.querySelector('input#quantity').disabled = false;
});

const gPrices = {
  johnsons: 127.35,
  hShampoo: 77.94,
  jOil: 72.38,
  jBuds: 46.22,
  phenolClean: 89.09,
  refinedOil: 809.37,
  sensodyne: 66.32,
  vicoWSO: 98.46,
  bChana: 148.58,
  shoeBrush: 37.37,
  wHanki: 95.7,
  mCoil: 24.8,
  dShavingCream: 47.59,
  broom: 90.33,
  mOil: 404.5,
  bWipes: 121.41,
  bCream: 47.34,
  bDish: 266.2,
  dOil: 128.22,
  eDishBar: 29.62,
  fCream: 113.03,
  gHit: 87.53,
  antiDndrf: 160.79,
  hMaticF: 162.78,
  hMaticT: 143.84,
  lBlades: 3.97,
  lSoap: 37.24,
  mLxmRekha: 7.18,
  teaGold: 139.71,
  nMaggi: 8.52,
  rBlades: 8.68,
  sPad: 13.68,
  vVest: 95.48,
  mMasoor: 160.74,
  masoor: 140.55,
  rajma: 195.66,
  zTbrush: 12.39,
  rHarpic: 54.67,
  harpic: 55.36,
};

let totalSum = 0;
let notFound = [];

let gInput = function (inputQuantity, inputItem) {
  let totalExpense = inputItem * inputQuantity;
  return totalExpense.toFixed(2);
};

let sumFunc = function (singleSum) {
  totalSum += Number(singleSum);
  return totalSum;
};


document.getElementById('additem').addEventListener('click', function () {
  let inputValue = document.querySelector('input#grocery').value;
  let inputQuantity = Number(document.querySelector('input#quantity').value);
  let inputItem = gPrices[inputValue];
  document.getElementById('grocery-table').style.cssText = 'display: block';
  document.querySelector('table').style.cssText = 'display: table';
  let row = document.getElementById('body').rows.length;
  document.querySelector('tbody').innerHTML += `<tr>
    <th>${row + 1}.</th>
    <td>${inputValue}</td>
    <td>${inputQuantity}</td>
    <td>${inputItem}</td>
    <td>${gInput(inputQuantity, inputItem)}</td>
    </tr>
    `;
  document.querySelector('input#quantity').disabled = true;
  sumFunc(gInput(inputQuantity, inputItem));
  document.querySelector('input#grocery').value = '';
  document.querySelector('input#quantity').value = '';
});

document.getElementById('calculate').addEventListener('click', function () {
  document.getElementById('body').innerHTML += `<tr>
  <th>Total Amount</th>
  <td></td>
  <td></td>
  <td></td>
  <th>${totalSum}</th>`;
});
