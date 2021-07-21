let brands = [];

let contains = function (arr, elem) {
   for (var i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
         return true;
      }
   }
   return false;
}

for (let item in myData){   
   let herBrand = myData[item].brand;
   let toPush = contains(brands,herBrand);

   if (!toPush) {
      brands.push(herBrand);
   }   
}


const selectBrand = document.getElementById('brand');

brands.forEach(element => {

   const optionBrand = document.createElement('option');
   optionBrand.classList.add('brand-item');

   optionBrand.textContent = element;
   selectBrand.append(optionBrand);

});
