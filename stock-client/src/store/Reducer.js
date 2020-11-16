const initialState = {
  selectedStock: {
    name: "GOOGL",
    price: "1,999",
    symbol: "G",
    open: "$" + "122.45",
    close: "$" + "134.56",
    high: "$" + "188.94",
    low: "$" + "111.23",
  },

  authenticated: false,

  userId: null,
};

const reducer = (state = initialState, action) => {
  if (action.type == "SETSELECTEDSTOCK") {
    return {
      ...state,
      selectedStock: action.value,
    };
  } else if (action.type == "SETAUTHENTICATED") {
    return {
      ...state,
      authenticated: action.value,
    };
  } else if (action.type == "SETLOGOUT") {
    return {
      ...state,
      authenticated: action.value,
    };
  } else if (action.type == "SETID") {
    return {
      ...state,
      userId: action.value,
    };
  }
  return state;
};

export default reducer;
