// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  //const quantity = product.querySelector('.quantity');
  const input = document.querySelector('input').value;
  console.log(input)
  let actualPrice = price.innerText;

  let actualQuantity = input;

  let updatedSubtotal = actualPrice*actualQuantity; 
  console.log(updatedSubtotal);
  return  updatedSubtotal;
}

function calculateAll() {
  const products = document.querySelectorAll(".product");
  let total = 0;

  products.forEach((product) => {
    const subtotal = updateSubtotalFunction(product);
    total += subtotal;
  })
  document.querySelector("#total-value span").innerText = Math.round(total * 100) / 100;
}


  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
