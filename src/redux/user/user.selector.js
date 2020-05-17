import createSelector from '../../../node_modules/reselect/src/index';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user)=> user.currentUser
);