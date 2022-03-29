'use strict';

document.querySelector('input#grocery').addEventListener('click', function () {
  document.querySelector('input#quantity').disabled = false;
});

//Grocery items

const groceries = {
  johnsons: 127.35,
  hShampoo: 77.94,
  jOil: 72.38,
  jBuds: 46.22,
  phenolClean: 89.09,
  refinedOil: 809.37,
  sensodyne: 66.32,
  vicoWSO: 98.46,
};
let totalSum = 0;

let gInput = function (inputValue, inputQuantity, inputItem) {
  let totalExpense = inputItem * inputQuantity;
  let items = [inputValue, inputQuantity, inputItem, totalExpense];
  console.log(items);
  console.log(totalExpense);
  return totalExpense;
};

let sumFunc = function(singleSum){
     
     totalSum += singleSum;
     console.log(totalSum);
     return totalSum;
}
let displaySum = sumFunc;

document.querySelector('button').addEventListener('click', function () {
  let inputValue = document.querySelector('input#grocery').value;
  let inputQuantity = Number(document.querySelector('input#quantity').value);
  let inputItem = groceries[inputValue];
  document.getElementById('grocery-table').style.cssText = 'display: block';
  document.querySelector('table').style.cssText = 'display: table';
  let row = document.getElementById('body').rows.length;
  sumFunc(gInput(inputValue, inputQuantity, inputItem));
  document.querySelector('tbody').innerHTML += `<tr>
    <th>${row + 1}.</th>
    <td>${inputValue}</td>
    <td>${inputQuantity}</td>
    <td>${inputItem}</td>
    <td>${gInput(inputValue, inputQuantity, inputItem)}</td>
    </tr>
    `;
});

//  vico wso :98.46
//  black Chana : 148.58
//  Shoe Brush : 37.37
//  white Hanki :95.70
//  Mortien coil : 24.80
//  Dettol Shaving Cream :47.59
//  Broom : 90.33
