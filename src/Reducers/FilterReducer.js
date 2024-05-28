export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY":
      return { ...state, sorting: action.payload.sorting };
    case "RATINGS":
      return { ...state, Rating: action.payload.Rating };
    case "BEST_SELLER":
      return { ...state, BestSeller: action.payload.BestSeller };
    case "INSTOCK_ONLY":
      return { ...state, Instock: action.payload.Instock };
    case "PRODUCTLIST":
      return { ...state, ProductList: action.payload.products };
    case "CLEAR_FILTER":
      return {
        ...state,
        BestSeller: false,
        Instock: false,
        Rating: null,
        sorting: null,
      };
    default:
      return state;
  }
};
