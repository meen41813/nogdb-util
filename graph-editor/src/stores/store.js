import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/rootReducer'
// import { userSaga } from '../sagas/saga'

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//   , applyMiddleware(sagaMiddleware)
// sagaMiddleware.run()

export default store