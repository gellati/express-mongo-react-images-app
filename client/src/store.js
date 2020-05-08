import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index.reducer'

const store = createStore(rootReducer, applyMiddleware(thunk)) // defaultState) //, enhancers)

/*
  Enable Hot Reloading for the reducers
  We re-require() the reducers whenever any new code has been written.
  Webpack will handle the rest
*/

if(module.hot) {
  module.hot.accept(['./reducers/index.reducer.js'], () => {
    const nextRootReducer = require('./reducers/index.reducer').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store