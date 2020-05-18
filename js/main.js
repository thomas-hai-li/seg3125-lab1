// pages
const pages = {
  page1: document.querySelector('.featured'),
  page2: document.querySelector('.todo')
}

// state var for pages
let currentPage = 1;
const maxPageNumber = Object.keys(pages).length;

// nav buttons for pages
const btnToPage1 = document.querySelector('#to-page-1');
const btnToPage2 = document.querySelector('#to-page-2');

const goToPage = (pageNumber) => {
  const page = `page${pageNumber}`;

  for (const key in pages) {
    if (key === page) {
      pages[key].classList.remove('hidden');
    } else {
      pages[key].classList.add('hidden');
    }
  }
  currentPage = pageNumber;
}

// event listeners for buttons
btnToPage1.addEventListener('click', (e) => goToPage(1));
btnToPage2.addEventListener('click', (e) => goToPage(2));

// event listener for arrow keys
document.onkeydown = function (e) {
  switch (e.which) {

    case 37: // left
      if (currentPage > 1) {
        goToPage(--currentPage);
      }
      break;

    case 39: // right
      if (currentPage < maxPageNumber) {
        goToPage(++currentPage);
      }
      break;

    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
};