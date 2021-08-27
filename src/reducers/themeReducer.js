const initialState = false;

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return !state;
    default:
      return state;
  }
};
