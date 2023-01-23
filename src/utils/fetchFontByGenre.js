import { getFontLinkByGenre } from 'utils/getByGenre';

const loadFont = (url) => {
  if (url) {
    const linkList = document.getElementsByTagName('link');
    const fontLink = Array.prototype.find.call(linkList, (item) => item.getAttribute('href') === url);

    if (!fontLink) {
      const link = document.createElement('link');

      link.rel = 'stylesheet';
      link.href = url;

      document.head.appendChild(link);
    }
  }
};

export const fetchFontByGenre = (list) => {
  const fontLink = getFontLinkByGenre(list);

  loadFont(fontLink);
};
