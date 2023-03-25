const selectNotices = state => state.notices.items;
const selectLoadingStatus = state => state.notices.isLoading;
const selectErrorMessage = state => state.notices.error;
const selectIsAdded = state => state.notices.isAdded;

const selectors = {
  selectNotices,
  selectLoadingStatus,
  selectErrorMessage,
  selectIsAdded,
};
export default selectors;
