import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {all, fork} from "redux-saga/effects";
import {shallowEqual, useSelector} from "react-redux";
import {connectRouter, routerMiddleware, RouterState} from "connected-react-router";

import { ProductsPageData , productPageReducer, productPageSagas} from "../product";

import {createBrowserHistory, Location} from "history";

export const history = createBrowserHistory({
    basename:'admin'
})

export interface ApplicationState{
    router: RouterState<unknown>,
    productsData: ProductsPageData
}

const rootReducer = (history: any) => combineReducers<ApplicationState>({
    router: connectRouter(history),
    productsData: productPageReducer,
});


export function useApplicationStateSelector<T>(selector: (ev: ApplicationState) => T): T {
    return useSelector<ApplicationState, T>(ev => selector(ev), shallowEqual)

}

function* rootSaga(){
    let sagas = [...productPageSagas];

    yield all(sagas.map(s => fork(s)));
}



export function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    //const logger = createLogger();
    const middlewares = [routerMiddleware(history), sagaMiddleware];
    const store = createStore(rootReducer(history), {}, applyMiddleware(...middlewares));
    sagaMiddleware.run(rootSaga);
    return store;
}


