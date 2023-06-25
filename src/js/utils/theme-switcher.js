const storageKey = 'theme';
const switcher = document.getElementById('switcher');
let currentTheme;

const getTheme = () => {
  const preference = localStorage.getItem(storageKey);
  if (preference) return preference;
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'dark'
    : 'light';
};

const setPreference = () => {
  localStorage.setItem(storageKey, currentTheme);
  setTheme();
};

const setTheme = () => {
  document.body.dataset.theme = currentTheme;
  switcher.dataset.theme = currentTheme;

  if (switcher.dataset.theme === 'light')
    switcher.setAttribute('checked', true);
};

window.onload = () => {
  setTheme();
  switcher.addEventListener('click', handleClick);
};

const handleClick = () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  setPreference();
};

window
  .matchMedia('(prefers-color-scheme: light)')
  .addEventListener('change', ({ matches: isDark }) => {
    currentTheme = isDark ? 'dark' : 'light';
    setPreference();
  });

currentTheme = getTheme();
