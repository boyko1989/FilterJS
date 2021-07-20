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
   console.log(myData);

   // let arrGoods = [];

   for (let item in myData){
      console.log(myData.S019188R);
      console.log(myData.item);
      console.log(typeof item);
   }

   // console.log(myData.S019188R);

   // const myDataArr = Array.from(myData);
   //    console.log(myDataArr);
   
}


