import { combineReducers } from 'redux'
import graphCanvasReducer from './graphCanvasReducer'
import  AddnodeReducer  from './AddnodeReducer'


export default combineReducers({
  graph: graphCanvasReducer,
  
  
})