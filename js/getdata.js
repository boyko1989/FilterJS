// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/JSON

if (!localStorage.getItem('myGoods')){
   const requestURL = '../data/db.json';

   const request = new XMLHttpRequest();

   request.open('GET', requestURL);

   request.responseType = 'json';
   request.send();

   request.onload = function() {
      const data = request.response;
      localStorage.setItem('myGoods', JSON.stringify(data));
      const myData = JSON.parse(localStorage.getItem('myGoods'));
      console.log(myData);
   }  
   
} else {

   const myData = JSON.parse(localStorage.getItem('myGoods'));

   const cardPlace = document.querySelector('.artikul');

   for (let item in myData){
      const li = document.createElement('li');
      li.classList.add('cardGoodItem');
      li.innerHTML = `
      
         <h5>Продукция фабрики</h5><p>${myData[item].vendor}</p>
         
         `;
      cardPlace.append(li);
   }
   console.log(myData);
   
}
