import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector("ul.gallery");
const images = galleryItems.map((galleryItem) => 
    `<a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
    </a>`)
    .join("");

gallery.innerHTML = images;

let galleryImages = new SimpleLightbox('ul.gallery a');
galleryImages.options.captionsData = "alt";
galleryImages.options.captionDelay = 250;