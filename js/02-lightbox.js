import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const cardsImages = createGalleryMarkuu(galleryItems);

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

galleryContainer.insertAdjacentHTML('beforeend', cardsImages);

console.log(createGalleryMarkuu(galleryItems));

const lightboxOptions = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};

const lightboxGallery = new SimpleLightbox(".gallery a", lightboxOptions);










// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');

const cardsImages = createGalleryMarkuu(galleryItems);

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

galleryContainer.insertAdjacentHTML('beforeend', cardsImages);

console.log(createGalleryMarkuu(galleryItems));

const lightboxOptions = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};

const lightboxGallery = new SimpleLightbox(".gallery a", lightboxOptions);









const iframe = document.querySelector('#vimeo-player')
import throttle from 'lodash.throttle';

const player = new Vimeo.Player(iframe);

const onTimeUpdate= date => {
    localStorage.setItem('videoplayer-current-time', date.seconds);

    console.log(parseInt(localStorage.getItem('videoplayer-current-time')))
};

player.on('timeupdate ', throttle(onTimeUpdate, 1000));


player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});









import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const FORM_KEY = "feedback-form-state";

const onFormInput = () => {
    const formData = new FormData(form);
    let userForm = {};
    formData.forEach((value, name) => userForm[name] = value.trim());
    localStorage.setItem(FORM_KEY, JSON.stringify(userForm));
};

form.addEventListener("input", throttle(onFormInput, 500));


const onPopulateForm = () => {
    if (localStorage.getItem(FORM_KEY)) {
        Object.entries(JSON.parse(localStorage.getItem(FORM_KEY))).forEach(([name, value]) => form.elements[name].value = value);
    }
};

onPopulateForm();

const onFormSubmit = event => {
    event.preventDefault();
    if (form.elements.email.value && form.elements.message.value !== "") {
        console.log('Форма с данными: ', JSON.parse(localStorage.getItem(FORM_KEY)));
        event.currentTarget.reset();
        localStorage.removeItem(FORM_KEY);
    };
};
  
form.addEventListener("submit", onFormSubmit);