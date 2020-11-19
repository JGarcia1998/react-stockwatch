const initialState = {
  selectedStock: {},
  authenticated: false,
  userId: null,
  stocksSet: false,
  stockInfo: [],
  cryptosSet: false,
  cryptoInfo: [],
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
  } else if (action.type == "INITIALSET") {
    return {
      ...state,
      selectedStock: action.value,
    };
  } else if (action.type == "STOCKSSET") {
    return {
      ...state,
      stocksSet: action.value,
    };
  } else if (action.type == "SETSTOCKINFO") {
    return {
      ...state,
      stockInfo: action.value,
    };
  } else if (action.type == "SETCRYPTOINFO") {
    return {
      ...state,
      cryptoInfo: action.value,
    };
  } else if (action.type == "SETCRYPTO") {
    return {
      ...state,
      cryptosSet: action.value,
    };
  }
  return state;
};

export default reducer;
