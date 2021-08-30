const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return action?.payload;
    case 'MORE_SEARCH':
      return [...state, ...action?.payload];
    default:
      return state;
  }
};
