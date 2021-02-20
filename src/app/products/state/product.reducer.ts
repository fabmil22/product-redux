import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';
import * as actions from './product.actions'
import { toggleshowCodeProduct } from './product.actions';


export interface State extends AppState.State{
  products: ProductState
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product,
  products: Product[]
}
const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

export const productReducer = createReducer<ProductState >(
  initialState ,
  on( toggleshowCodeProduct , (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);

/*
& Selectors */

const getProductFeatureState =
  createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getProduct = createSelector(
  getProductFeatureState,
  state => state.products
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);
