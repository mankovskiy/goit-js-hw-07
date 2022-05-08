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
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onOpenMaxImgModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originalImage = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${originalImage}">`, {
    onShow: () => {
      window.addEventListener("keydown", onEscKeyPress);
    },

    onClose: () => {
      window.removeEventListener("keydown", onEscKeyPress);
    },
  });
  instance.show();
  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      console.log("ESC");
      instance.close();
    }
  }
}
