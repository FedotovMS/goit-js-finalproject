import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");

list.addEventListener("click", onClick);

let instance;

function onClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery-image")) {
    return;
  }

  const bigImage = e.target.dataset.original;
  const altImg = e.target.alt;

  instance = basicLightbox.create(
    `<div><img src="${bigImage}" alt="${altImg}" width="800"></div>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEsc);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEsc);
      },
    }
  );
  instance.show();
}

function onEsc(e) {
  if (e.code !== "Escape") return;
  instance.close();
}

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ preview, original, description }) =>
        `
    <li class="gallery-item">
    <a class="gallery-link" href="large-image.jpg">
      <img class="gallery-image" alt="${description}" src="${preview}" data-original="${original}" width="350">
     </a>
      </li>
  `
    )
    .join("");

  return list.insertAdjacentHTML("beforeend", markup);
}

createMarkup(galleryItems);
