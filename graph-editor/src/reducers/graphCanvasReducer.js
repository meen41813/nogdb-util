const graphSetting = {
  graphCanvas: {
    nodes: [
      { id: "1", label: "Bill", group: "A", },
      { id: "2", label: "Queen", group: "A" },
      { id: "3", label: "King", group: "A" },
      { id: "4", label: "Jack", group: "A", title: "Popup show!!" },
      { id: "5", label: "Barry", group: "A" }
    ],
    edges: [
      {
        id: "1",
        from: "1",
        to: "2",
        label: "AAA",
        color: { color: "Crimson" }
      },
      { from: "1", to: "4", label: "CCC", color: { color: "Magenta" } },
      { from: "3", to: "5", label: "BBB", color: { color: "Navy" } },
      { from: "4", to: "2", label: "DDD", color: { color: "YellowGreen" } }
    ]
  },
  options: {
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
  },
  respondFromConsole: []
    

};

const graphCanvasReducer = (state = graphSetting, action) => {
  let nodeGroup;
  let externalOption = state.options.groups;
  let nodeForSizeAndColor = state.graphCanvas.nodes.slice();
  let backupNode = state.graphCanvas.nodes.slice();
  let backupEdge = state.graphCanvas.edges.slice();
  let updateColor, updateGroup, updateSize;
  switch (action.type) {
    case "ADD_NODE_ACTION":
      //const newGraphNodeCanvas = state.graphCanvas.nodes.slice();
      //const newGraphEdgeCanvas = state.graphCanvas.edges.slice();
      console.log(action.payload)
      for (let ele in action.payload) {
        if (
          JSON.stringify(backupNode).includes(
            JSON.stringify(action.payload[ele])
          ) === false
        ) {
          backupNode.push(action.payload[ele]);
        }
      }
      return {
        ...state,
        graphCanvas: {
          nodes: backupNode,
          edges: backupEdge
        }
      };
      break;
    case "CLEAR_CANVAS":
      return {
        ...state,
        graphCanvas: {
          nodes: action.payload.nodes,
          edges: action.payload.edges
        }
      };
    case "REMOVE_NODE":
      //let backupNode = state.graphCanvas.nodes.slice();
      //let backupEdge = state.graphCanvas.edges.slice();
      for (let ele in backupNode) {
        if (backupNode[ele].id === action.payload) {
          backupNode.splice(ele, 1);
        }
      }
      return {
        ...state,
        graphCanvas: {
          nodes: backupNode,
          edges: backupEdge
        }
      };

      case "REMOVE_EDGE":
      //let backupNode = state.graphCanvas.nodes.slice();
      //let backupEdge = state.graphCanvas.edges.slice();
      for (let ele in backupEdge) {
        if (backupEdge[ele].id === action.payload) {
          backupEdge.splice(ele, 1);
        }
      }
      return {
        ...state,
        graphCanvas: {
          nodes: backupNode,
          edges: backupEdge
        }
      }; 

    case "EDIT_SIZE":
      for (let ele in backupNode) {
        if (backupNode[ele].id === action.nodeID) {
          nodeGroup = backupNode[ele].group;
          break;
        }
      }
      switch (nodeGroup) {
        case "A":
          updateSize = { ...externalOption.A, size: action.size };
          updateGroup = { ...externalOption, A: updateSize };
          return {
            ...state,
            options: { ...state.options, groups: updateGroup }
          };
        case "B":
          updateSize = { ...externalOption.B, size: action.size };
          updateGroup = { ...externalOption, B: updateSize };
          return {
            ...state,
            options: { ...state.options, groups: updateGroup }
          };
        case "C":
          updateSize = { ...externalOption.C, size: action.size };
          updateGroup = { ...externalOption, C: updateSize };
          return {
            ...state,
            options: { ...state.options, groups: updateGroup }
          };
        case "D":
          updateSize = { ...externalOption.D, size: action.size };
          updateGroup = { ...externalOption, D: updateSize };
          return {
            ...state,
            options: { ...state.options, groups: updateGroup }
          };
      }

    case "CHANGE_COLOR_NODE":
      for (let ele in backupNode) {
        if (backupNode[ele].id === action.nodeID) {
          nodeGroup = backupNode[ele].group;
          break;
        }
      }
      switch (nodeGroup) {
        case "A":
          updateColor = {
            ...externalOption.A,
            color: { background: action.color, border: action.color }
          };
          updateGroup = { ...externalOption, A: updateColor };
          return {
            ...state,
            options: { ...state.options, groups: updateGroup }
          };
        case "B":
        updateColor = { ...externalOption.B, color: { background: action.color, border: action.color } };
          updateGroup = { ...externalOption, B: updateSize };
          return {
            ...state,
            options: { ...state.options, groups: updateGroup }
          };
        case "C":
        updateColor = { ...externalOption.C, color: { background: action.color, border: action.color }  };
          updateGroup = { ...externalOption, C: updateColor };
          return {
            ...state,
            options: { ...state.options, groups: updateGroup }
          };
        case "D":
        updateColor = { ...externalOption.D, color: { background: action.color, border: action.color }  };
          updateGroup = { ...externalOption, D: updateColor };
          return {
            ...state,
            options: { ...state.options, groups: updateGroup }
          };
      }
    case "UPDATE_GRAPH":
      return {
        ...state,
        graphCanvas: {
          nodes: action.payload1,
          edges: action.payload2
        }
      };break;

    case  'CONSOLE_RESPOND':
      return {
        ...state,
        respondFromConsole : action.payload
        
        }
      
      break;

    default:
      state = {
        ...state
      };
      return state;
      break;
  }
};

export default graphCanvasReducer;
