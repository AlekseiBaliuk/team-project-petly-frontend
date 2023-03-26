const selectNotices = state => state.notices.items;
const selectLoadingStatus = state => state.notices.isLoading;
const selectErrorMessage = state => state.notices.error;
const selectIsAdded = state => state.notices.isAdded;
const selectTotal = state => state.notices.total;

const selectors = {
  selectNotices,
  selectLoadingStatus,
  selectErrorMessage,
  selectIsAdded,
  selectTotal,
};
export default selectors;
