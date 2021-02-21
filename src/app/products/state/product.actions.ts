import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleshowCodeProduct =      createAction('[Product] Toggle Product Code');
export const setCurrentProduct =          createAction('[Product] set current Product ' , props<{product: Product}>());
export const clearCurrentProduct  =       createAction('[Product] clear Current product ');
export const clearCurrentProductById  =   createAction('[Product] clear Current product by id' , props<{products: Product[]}>());
export const initCurrentProduct =         createAction('[Product] Init  Current Product');

/**loadProduct */
export const LoadProduct =                createAction('[Product] Load Product');
export const LoadProductFailure =         createAction('[Product] Load Product Failure' , props<{error: String}>());
export const LoadProductSuccess =         createAction('[Product] Load Product Success' , props<{product: Product}>());

