(() => {
  const setActivePage = list => {
    const activeLink = [...list.children].find(item => {
      const currentLocation = location.pathname.endsWith('/')
        ? location.origin + location.pathname + 'index.html'
        : location.origin + location.pathname;

      return item.querySelector('a').href === currentLocation;
    });

    activeLink.querySelector('a').classList.add('nav__link--active');
  };

  const navLinkList = document.querySelectorAll('.nav__list');

  navLinkList.forEach(setActivePage);
})();
