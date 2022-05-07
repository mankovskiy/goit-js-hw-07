import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imgItems = document.querySelector(".gallery");

const imgMarkup = createImgItemsMarkup(galleryItems);

imgItems.addEventListener("click", onOpenMaxImgModal);

imgItems.insertAdjacentHTML("beforeend", imgMarkup);

function createImgItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

function onOpenMaxImgModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    showCounter: false,
    alertError: false,
    captionsData: "alt",
  });
  //   const lightbox = basicLightbox.create(`
  //     <img src="${event.target.dataset.source}">
  // `);
  //   instance.show();
  //   lightbox.option({
  //     animationSpeed: 250,
  //     animationSlide: true,
  //   });
}
