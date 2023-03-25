export const categoriesHandler = category => {
  switch (category) {
    case 'sell':
      return 'Sell';
    case 'lost-found':
      return 'Lost/found';
    case 'in-good-hands':
      return 'In good hands';
    default:
      break;
  }
};
