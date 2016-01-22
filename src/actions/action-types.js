import Enum from 'es6-enum';

export const ActionTypes = Enum('ADD_TODO', 'COMPLETE_TODO', 'SET_VISIBILITY_FILTER');
export const VisibilityFilters = Enum('SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE');

