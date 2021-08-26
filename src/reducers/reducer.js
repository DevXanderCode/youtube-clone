const initialState = { searchResult: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        searchResult: action?.payload,
      };
    default:
      return state;
  }
};
