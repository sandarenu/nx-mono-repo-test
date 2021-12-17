import {call, put, takeLatest} from "redux-saga/effects";
import produce from "immer"
import {useApplicationStateSelector} from "../store/store"

export enum ProductPageEvent{
    GET_PRODUCT_DATA = "GET_PRODUCT_DATA"
}

export interface GetProductsRequest{
    type: ProductPageEvent
}

export type ProductPageActions = GetProductsRequest;

export interface ProductsPageData {

}

const initialState = {}

export function productPageReducer(state: ProductsPageData = initialState, action: ProductPageActions) {
    return produce(state, draft => {
            switch (action.type) {

                case ProductPageEvent.GET_PRODUCT_DATA: {
                    break;
                }

            }
        }
    )
}


export function useProductPageDataSelector(): ProductsPageData {
    return useApplicationStateSelector<ProductsPageData>(ev => ev.productsData)
}

export const productPageSagas = [getProductDataSaga]

function* getProductDataSaga() {
    yield takeLatest(ProductPageEvent.GET_PRODUCT_DATA, getProductData)
}

function getProductData(){

}