import { CorrectProductType } from './../types/type';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../context/redux/store';

interface ProductsState {
  value: Array<CorrectProductType>;
}

const initialState: ProductsState = {
  value: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Array<CorrectProductType>>) => {
      state.value = action.payload;
    },
    deleteProductFromState(state, action: PayloadAction<number>) {
      const filteredState = state.value.filter(
        (products) => products.id !== action.payload
      );
      state.value = filteredState;
    },
    modyfyProductState(state, action: PayloadAction<CorrectProductType>) {
      const modyfyProduct = state.value.find(
        (product) => product.id === action.payload.id
      );
      if (modyfyProduct) {
        modyfyProduct.priceEU = action.payload.priceEU;
        modyfyProduct.pricePL = action.payload.pricePL;
        modyfyProduct.category = action.payload.category;
        modyfyProduct.delivery = action.payload.delivery;
        modyfyProduct.colorEN = action.payload.colorEN;
        modyfyProduct.colorPL = action.payload.colorPL;
        modyfyProduct.descriptionEN = action.payload.descriptionEN;
        modyfyProduct.descriptionPL = action.payload.descriptionPL;
        modyfyProduct.nameEN = action.payload.nameEN;
        modyfyProduct.namePL = action.payload.namePL;
        modyfyProduct.shipping = action.payload.shipping;
        modyfyProduct.image1 = action.payload.image1;
        modyfyProduct.image2 = action.payload.image2;
        modyfyProduct.image3 = action.payload.image3;
        modyfyProduct.weight = action.payload.weight;
      }
    },
  },
});

export const { getProducts, modyfyProductState, deleteProductFromState } =
  productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.value;
export default productsSlice.reducer;
