const Data = {
  nodeID:null,
  nodeClass:null,
  nodeName:null,
  edgeID:null,
  edgeClass:null,
  edgeIn:null,
  edgeOut:null  
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
       
          case 'GETEDGEID':
          state = {
            ...state,
            edgeID:action.payload
          }
          return state;
          break;    
         
        case 'GETNODECLASS':
          state = {
            ...state,
            nodeClass:action.payload
          }
          return state;
          break;

        case 'GETNODENAME':
          state = {
            ...state,
            nodeName:action.payload
          }
          return state;
          break;

        case 'GETEDGECLASS':
          state = {
            ...state,
            edgeClass:action.payload
          }
          return state;
          break;
         
        case 'GETINRELATION':
          state = {
            ...state,
            edgeIn:action.payload
          }
          return state;
          break;
        
        
        case 'GETOUTRELATION':
          state = {
            ...state,
            edgeOut:action.payload
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