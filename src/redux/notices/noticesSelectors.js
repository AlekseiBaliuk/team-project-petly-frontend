const selectNotices = state => state.notices.items;
const selectLoadingStatus = state => state.notices.isLoading;
const selectErrorMessage = state => state.notices.error;
const selectUserFavorites = state => state.notices.userFavorite.favorite;

const selectors = {
  selectNotices,
  selectLoadingStatus,
  selectErrorMessage,
  selectUserFavorites,
};
export default selectors;
