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
   }     
} 

   const myData = JSON.parse(localStorage.getItem('myGoods'));

   const cardPlace = document.querySelector('.artikul');

    for (let item in myData){
      const li = document.createElement('li');
      li.classList.add('cardGoodItem');

      const id      = myData[item].id;
      const preview = myData[item].preview;
      const cost    = myData[item].cost;
      const brand   = myData[item].brand;
      const name    = myData[item].name;
      const sizes   = myData[item].sizes;

      li.innerHTML = `<article class="good">
                <a class="good__link-img" href="card-good.html#${id}">
                    <img class="good__img" src="https://raw.githubusercontent.com/boyko1989/gloLamoda/main/goods-image/${preview}" alt="">
                </a>
                <div class="good__description">
                    <p class="good__price">${cost} &#8381;</p>
                    <h5 class="good__title">${brand} <span class="good__title__grey">/ ${name}</span></h5>
                    ${sizes ? 
                        `<p class="good__sizes">Размеры (RUS): <span class="good__sizes-list">${sizes.join(' ')}</span>
                    </p>` : 
                        ''}
                    
                    <a class="good__link" href="card-good.html#${id}">Подробнее</a>
                </div>
            </article>`;

      cardPlace.append(li);

   }
