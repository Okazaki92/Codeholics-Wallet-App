export const selectUser = (state) => state.auth.user;

export const selectError = (state) => state.auth.error;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsPending = (state) => state.auth.isPending;

export const selectToken = (state) => state.auth.token;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
