// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </div>`;
  })
  .join('');
galleryRef.insertAdjacentHTML('afterbegin', markup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
