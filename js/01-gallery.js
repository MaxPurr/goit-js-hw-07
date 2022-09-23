import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector("div.gallery");
const images = galleryItems
  .map((galleryItem) => `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image"
            src="${galleryItem.preview}"
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}"/>
        </a>
    </div>`)
    .join("");
  
gallery.innerHTML = images;

let currentImageBox = null;
gallery.addEventListener("click", (event) => {
    event.preventDefault();
    const image = event.target;
    if (image.nodeName !== "IMG") {
        return;
    }
    currentImageBox = basicLightbox.create(`
        <img src="${image.dataset.source}" width="800" height="600">`,
        {closable: false});
    currentImageBox.show();
    addClosingFunction();
});

function addClosingFunction() {
    document.addEventListener("keydown",
    _.debounce(
    event => {
            if (event.key === "Escape" && currentImageBox.visible())
                currentImageBox.close();
            else addClosingFunction();
        },
        99999999,
    { leading: true, trailing: false, }));
}