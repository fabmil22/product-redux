import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';
import * as actions from './product.actions'



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
  on( actions.toggleshowCodeProduct , (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  }),
  on( actions.setCurrentProduct, (state , action): ProductState => {
    return {
      ...state,
      currentProduct: action.product
    };
  }),

  on( actions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProduct: null
    };
  }),

  on( actions.clearCurrentProductById, (state , action): ProductState => {
    return {
      ...state,
      currentProduct: null
    };
  }),

  on( actions.initCurrentProduct , (state): ProductState => {
    return {
      ...state,
      currentProduct : {
            id: 0,
            productName: '',
            productCode: 'new',
            description: '',
            starRating: 0,
                      }
    };
  }),



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
