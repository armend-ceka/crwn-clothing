import createSelector from '../../../node_modules/reselect/src/index';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)