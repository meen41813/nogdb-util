const newNode = {
    id :null,
    label:null,
    group:null
    
}

const AddnodeReducer = (state = newNode, action) => {
    switch (action.type) {
        case 'ADDNODEACTION' :
        return  { ...state,
                id:action.payload.id,
                label:action.payload.label,
                group:action.payload.group}
        
        break;
        
        default:
        state = {
          ...state,
         
        }
        return state;
        break;
      }
   
      console.log(state);
  }
  
  export default AddnodeReducer 
  