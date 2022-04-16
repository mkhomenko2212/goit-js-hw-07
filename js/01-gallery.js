import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const bodyEl = document.querySelector('body');

let modalImage;
// console.log(galleryItems);

const cardsImages = createGalleryMarkuu(galleryItems);


// Создание и рендер разметки по массиву данных galleryItems и предоставленному 
// шаблону элемента галереи.
galleryContainer.insertAdjacentHTML('beforeend', cardsImages);

function createGalleryMarkuu(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
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
    return;
  }
  onOpenModal(evt.target.dataset.source);
};

// Подключение скрипта и стилей библиотеки модального окна basicLightbox.


const onCreateModal = img => basicLightbox.create(`<img src="${img}" width="800" alt="${img}">`);

//  Открытие модального окна по клику на элементе галереи.

function onOpenModal (img) {
    modalImage = onCreateModal(img);
    modalImage.show();
    console.log("Open modal");
    document.addEventListener("keyup", onKeyPress);
};

function onCloseModal (evt) {
    if (evt === "click") modalImage.close();
    console.log("Close modal with click");
    document.removeEventListener("click", onKeyPress);
};


function onKeyPress(evt) {
    if (evt.code === "Escape") modalImage.close();
    console.log("Close modal with escape");
    document.removeEventListener("keyup", onKeyPress);
};
