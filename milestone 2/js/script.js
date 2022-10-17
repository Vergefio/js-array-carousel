const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
];

let imagesTags = '';

const slider = document.querySelector('.slider');

for (let i = 0; i < imagesArray.lenght; i++) {
  imagesTags += `
  <img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">
  `;
}