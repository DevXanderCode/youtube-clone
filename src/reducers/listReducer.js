const initialState = {
  trending: [],
  random: [],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRENDING':
      return {
        ...state,
        trending: action?.payload,
      };
    case 'SHOW_MORE':
      return {
        ...state,
        trending: [...state?.trending, ...action?.payload],
      };
    case 'RANDOM':
      return {
        ...state,
        random: action?.payload,
      };
    default:
      return state;
  }
};
