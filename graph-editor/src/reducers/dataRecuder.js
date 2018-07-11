const Data = {
    nodeID:null
}
const dataReducer = (state = Data,action) => {
    switch(action.type){
        case 'GETNODEID':
          state = {
            ...state,
            nodeID:action.payload
          }
          return state;
          break;
       
        default:
            state = {
              ...state
            }
            return state;
            break;
    }
}
export default dataReducer;