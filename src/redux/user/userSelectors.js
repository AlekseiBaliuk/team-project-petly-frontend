export const getUserData = ({ user }) => user;

export const getLoading = ({ user }) => user.isLoading;
export const getError = ({ user }) => user.error;

//

export const selectUserData = state => state.user.user;

export const selectUserPets = state => state.user.userPets;

export const selectIsLoading = state => state.user.isLoading;

export const selectError = state => state.user.error;
