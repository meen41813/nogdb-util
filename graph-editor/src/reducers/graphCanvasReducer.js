const GraphSetting = {

  graphCanvas : {
   nodes: [
     { id: "1", label: "Bill", group: "A" },
     { id: "2", label: "Queen", group: "A" },
     { id: "3", label: "King", group: "A" },
     { id: "4", label: "Jack", group: "A", title: "Popup show!!" },
     { id: "5", label: "Barry", group: "A" }
   ],
   edges: [
     { id: "1", from: "1", to: "2", label: "AAA", color: { color: "Crimson" } },
     {  from: "1", to: "4", label: "CCC", color: { color: "Magenta" } },
     {  from: "3", to: "5", label: "BBB", color: { color: "Navy" } },
     {  from: "4", to: "2", label: "DDD", color: { color: "YellowGreen" } }
   ]
 },
  options : {
   groups: {
     A: { color: { background: "red", border: "red" }, size: 25 },
     B: { color: { background: "orange", border: "orange" }, size: 25 },
     C: { color: { background: "green", border: "green" }, size: 25 },
     D: { color: { background: "pink", border: "pink" }, size: 25 }
   },
   layout: {
     hierarchical: false
   },
   edges: {
     color: {
       hover: "blue",
       highlight: "yellow"
     },
     width: 3
   },
   nodes: {
     color: {
       hover: {
         border: "blue"
       },
       highlight: {
         border: "yellow"
       }
     },
     shape: "dot",
     size: 25,
     font: {
       size: 22
     }
   },
   interaction: {
     hover: true,
     selectable: true,
     selectConnectedEdges: false
   },
   manipulation: {
     enabled: true
   }
 }

}
 

 const graphCanvasReducer = (state = GraphSetting,action) =>{
     switch(action.type){
        case 'ADDNODEACTION':
          const newGraphNodeCanvas = state.graphCanvas.nodes.slice();
          const newGraphEdgeCanvas = state.graphCanvas.edges.slice();          
          for (let ele in action.payload){
            if (
              JSON.stringify(newGraphNodeCanvas).includes(JSON.stringify(action.payload[ele])) ===
              false
            ) {
              newGraphNodeCanvas.push(action.payload[ele]);
            }
          }
          console.log(newGraphNodeCanvas)

          return  {
            ...state,
          graphCanvas: {
            nodes: newGraphNodeCanvas,
            edges: newGraphEdgeCanvas
          }
   
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
 export default graphCanvasReducer;