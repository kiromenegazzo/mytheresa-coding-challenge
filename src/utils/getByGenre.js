import { genreEnum } from 'constants/movie';

export const getVariantByGenre = (list) => {
  const genreNameList = (list || []).map((item) => item.id);

  switch (true) {
    case genreNameList.includes(genreEnum.Thriller):
      return 'secondary';
    case genreNameList.includes(genreEnum.Animation):
      return 'alternate';
    case genreNameList.includes(genreEnum.ScienceFiction):
    default:
      return 'primary';
  }
};

export const getFontLinkByGenre = (list) => {
  const genreNameList = (list || []).map((item) => item.id);

  switch (true) {
    case genreNameList.includes(genreEnum.Thriller):
      return 'https://fonts.googleapis.com/css2?family=Aboreto&display=swap';
    case genreNameList.includes(genreEnum.Animation):
      return 'https://fonts.googleapis.com/css2?family=Unbounded&display=swap';
    case genreNameList.includes(genreEnum.ScienceFiction):
    default:
      return 'https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap';
  }
};
