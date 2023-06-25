import { genres } from '/src/data/genres.json';
import { renderFilteredLibrary } from './library';

const dropdownSelect = document.querySelector('.dropdown__select');
const markup = genres
  .map(
    ({ name }) =>
      `<li class="dropdown__select-option" role="option">${name}</li>`
  )
  .join('');
dropdownSelect.insertAdjacentHTML('beforeend', markup);

// Change option selected
const label = document.querySelector('.dropdown__filter-selected');
const options = Array.from(
  document.querySelectorAll('.dropdown__select-option')
);

options.forEach(option => {
  option.addEventListener('click', () => {
    label.textContent = option.textContent;
    renderFilteredLibrary(option.textContent);
  });
});

// Close dropdown onclick outside
document.addEventListener('click', e => {
  const toggle = document.querySelector('.dropdown__switch');
  const element = e.target;

  if (element == toggle) return;

  const isDropdownChild = element.closest('.dropdown__filter');

  if (!isDropdownChild) {
    toggle.checked = false;
  }
});
