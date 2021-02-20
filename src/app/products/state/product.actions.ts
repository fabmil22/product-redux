import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleshowCodeProduct =  createAction('[Product] Toggle Product Code');
export const setCurrentProduct =             createAction('[Product] set current Product ' , props<{product: Product}>());
export const clearCurrentProduct  =         createAction('[Product] clear Current product ');
export const initCurrentProduct =             createAction('[Product] Init  Current Product');
