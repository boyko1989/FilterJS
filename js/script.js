const getFilterButton = document.querySelector('.get-filter-panel');
const allContent = document.querySelector('body');
const divOfOverlay = document.querySelector('.Overlay');
const closeOverlay = document.querySelector('.Overlay-icon__close');

const moveFilterPanel = function (evt) {
   evt.preventDefault();
   allContent.style.marginRight = '20px';
   allContent.style.overflowY = 'hidden';
   divOfOverlay.classList.add('active');
}

const outFilterPanel = function (evt) {
   allContent.style.marginRight = 'none';
   allContent.style.overflowY = 'auto';
   divOfOverlay.classList.remove('active');
}

getFilterButton.addEventListener('click', moveFilterPanel);
closeOverlay.addEventListener('click', outFilterPanel);

