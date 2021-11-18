'use strict';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector('.gallery')

const imgEl = galleryItems.map(img => 
    `<a class="gallery__link" href="${img.original}">
        <img
            class="gallery__image"
            src="${img.preview}"
            data-source="${img.original}"
            alt="${img.description}"
        />
    </a>`).join('');
    
galleryListEl.insertAdjacentHTML("afterbegin", imgEl);


const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt", captionDelay: 250, });







console.log(galleryItems);



