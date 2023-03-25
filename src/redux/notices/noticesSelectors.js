const selectNotices = state => state.notices.items;
const selectLoadingStatus = state => state.notices.isLoading;
const selectErrorMessage = state => state.notices.error;

const selectors = {
  selectNotices,
  selectLoadingStatus,
  selectErrorMessage,
};
export default selectors;
