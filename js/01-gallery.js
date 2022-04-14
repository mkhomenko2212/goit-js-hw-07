import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const bodyEl = document.querySelector('body');

let modalImage;
// console.log(galleryItems);

const cardsImages = createGalleryMarkuu(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsImages);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному 
// шаблону элемента галереи.

function createGalleryMarkuu(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');

    // console.log(galleryMarkup)
}
console.log(createGalleryMarkuu(galleryItems));


// Реализация делегирования на div.gallery и получение url большого изображения.
galleryContainer.addEventListener('click', onGalleryContainerClick);  

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return
  }
evt.target.classList.add('.gallery__image:hover')
  console.log(evt.target.dataset.source)

}




