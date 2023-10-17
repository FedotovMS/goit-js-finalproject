import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ preview, original, description }) =>
        `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
      `
    )
    .join("");
  console.log(markup);
  return list.insertAdjacentHTML("beforeend", markup);
}
createMarkup(galleryItems);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
