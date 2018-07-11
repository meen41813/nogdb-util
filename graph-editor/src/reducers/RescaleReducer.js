const ComponentScale = {
    isFullscreen : false,
    NodeMenu : false,
    EdgeMenu : false
}

const rescaleReducer = (state = ComponentScale,action) => {
    switch(action.type){
        case 'SETFULLSCREEN':
        return  {
            ...state,
            isFullscreen:true
          }
          break;
        
        case 'EXITFULLSCREEN':
        return  {
              ...state,
              isFullscreen:false
            }
            break;
///////////////////////////////////////////////////////////////////////

        case 'SHOWNODEMENU':
        return  {
              ...state,
              NodeMenu:true
            }
            break;
        
        case 'HIDENODEMENU':
        return  {
              ...state,
              NodeMenu:false
            }
            break;



        default:
            state = {
              ...state
            }
            return state;
            break;
    }
}
export default rescaleReducer;