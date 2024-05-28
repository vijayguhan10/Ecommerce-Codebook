import { useContext, useReducer, createContext } from "react";
import { FilterReducer } from "./../Reducers/FilterReducer";

const FilterInitialState = {
  ProductList: [],
  BestSeller: false,
  Instock: false,
  Rating: null,
  sorting: null,
};

export const FilterContext = createContext(FilterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, FilterInitialState);

  function ProductListUpdate(products) {
    dispatch({
      type: "PRODUCTLIST",
      payload: {
        products: products,
      },
    });
  }
  function BestSellerOnly1(products) {
    return state.BestSeller
      ? products.filter((product) => product.best_seller)
      : products;
  }

  function in_stock1(products) {
    return state.Instock
      ? products.filter((product) => product.in_stock)
      : products;
  }
  function RatingProduct(products) {
    if (state.rating === "4")
      return products.filter((product) => product.rating >= 4);

    if (state.Rating === "3")
      return products.filter((product) => product.rating <= 3);
    if (state.Rating === "2")
      return products.filter((product) => product.rating <= 2);
    if (state.Rating === "1")
      return products.filter((product) => product.rating <= 1);
    else return products;
  }
  function sortProducts(products) {
    if (state.sorting === "HighToLow") {
      return [...products].sort((a, b) => b.price - a.price);
    }
    if (state.sorting === "LowToHigh") {
      return [...products].sort((a, b) => a.price - b.price);
    }
    return products;
  }
  const FinalCartReview =
    state.ProductList &&
    in_stock1(BestSellerOnly1(sortProducts(RatingProduct(state.ProductList))));

  const value = {
    state,
    dispatch,
    ProductList: FinalCartReview,
    ProductListUpdate,
    FinalCartReview,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
export const useFilter = () => {
  return useContext(FilterContext);
};
