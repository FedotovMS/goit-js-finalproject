import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");

list.addEventListener("click", onClick);

function onClick(e) {
  if (!e.target.classList.contains("gallery-image")) {
    return;
  }

  const bigImage = e.target.dataset.original;
  const altImg = e.target.alt;

  const instance = basicLightbox.create(
    `<div><img src="${bigImage}" alt="${altImg}" width="800"></div>`
  );

  instance.show();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
}

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ preview, original, description }) =>
        `
    <li class="gallery-item">
      <img class="gallery-image" alt="${description}" src="${preview}" data-original="${original}" width="350">
    </li>
  `
    )
    .join("");

  return list.insertAdjacentHTML("beforeend", markup);
}

createMarkup(galleryItems);

// console.log(galleryItems);
