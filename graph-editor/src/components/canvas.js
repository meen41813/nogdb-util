import React, { Component } from "react";
import Graph from "react-graph-vis";
import { connect } from "react-redux";
import {
  getNodeID,
  getNodeClass,
  getNodename,
  getEdgeID
} from "../actions/dataAction.js";
import {
  getEdgeClass,
  getInRelation,
  getOutRelation
} from "../actions/dataAction.js";
import {
  showNodeMenu,
  hideNodeMenu,
  showEdgeMenu,
  hideEdgeMenu
} from "../actions/node-edgesmenu";
import { removeNode } from "../actions/menuAction";
import Modal from "react-modal";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";

const mapStateToProps = state => {
  return {
    graph: state.graph,
    scale: state.scale,
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetNodeID: NodeID => {
      dispatch(getNodeID(NodeID));
    },
    GetEdgeID: EdgeID => {
      dispatch(getEdgeID(EdgeID));
    },
    GetNodeClass: NodeClass => {
      dispatch(getNodeClass(NodeClass));
    },
    GetEdgeClass: EdgeClass => {
      dispatch(getEdgeClass(EdgeClass));
    },
    GetinRelation: number => {
      dispatch(getInRelation(number));
    },
    GetoutRelation: number => {
      dispatch(getOutRelation(number));
    },
    GetNodeName: NodeName => {
      dispatch(getNodename(NodeName));
    },
    ShowNodeMenu: () => {
      dispatch(showNodeMenu());
    },
    HideNodeMenu: () => {
      dispatch(hideNodeMenu());
    },
    ShowEdgeMenu: () => {
      dispatch(showEdgeMenu());
    },
    HideEdgeMenu: () => {
      dispatch(hideEdgeMenu());
    },
    RemoveNode: nodeID => {
      dispatch(removeNode(nodeID));
    }
  };
};
const customStyle = {
  content: {
    posittion: "absolute",
    top: "20px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    marginRight: "15%",
    marginLeft: "15%",
    marginTop: "15%",
    marginBottom: "15%"
  }
};
const customAddNodeStyle = {
  content: {
    posittion: "absolute",
    top: "20px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    marginRight: "15%",
    marginLeft: "15%",
    marginTop: "10%",
    marginBottom: "10%"
  }
};
const customEditRStyle = {
  content: {
    posittion: "absolute",
    top: "20px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    marginRight: "15%",
    marginLeft: "15%",
    marginTop: "10%",
    marginBottom: "10%"
  }
};
const customCreateEdgeModal = {
  content: {
    position: "absolute",
    top: "20px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    marginRight: "15%",
    marginLeft: "15%",
    marginTop: "15%",
    marginBottom: "15%"
  }
};

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.handleNodeID = this.handleNodeID.bind(this);
    this.handleGetNodeName = this.handleGetNodeName.bind(this);
    this.getinRelationNode = this.getinRelationNode.bind(this);
    this.getoutRelationNode = this.getoutRelationNode.bind(this);
    this.setDisplayFormat = this.setDisplayFormat.bind(this);
  }
  handleNodeID(nodeIDs) {
    this.props.GetNodeID(nodeIDs[0]);
  }

  handleGetNodeName = () => {
    for (let ele in this.props.graph.graphCanvas.nodes) {
      if (
        this.props.graph.graphCanvas.nodes[ele].id === this.props.data.nodeID
      ) {
        this.props.GetNodeName(this.props.graph.graphCanvas.nodes[ele].label);
      }
    }
  };
  handleNodeClass = () => {
    for (let ele in this.props.graph.graphCanvas.nodes) {
      if (
        this.props.graph.graphCanvas.nodes[ele].id === this.props.data.nodeID
      ) {
        // this.setState({
        //   nodeClass: this.state.graph.nodes[ele].group
        // });
        this.props.GetNodeClass(this.props.graph.graphCanvas.nodes[ele].group);
      }
    }
  };

  handlerelationID = relaID => {
    this.props.GetEdgeID(relaID[0]);
  };

  getinRelationNode = () => {
    for (let ele in this.props.graph.graphCanvas.edges) {
      if (
        this.props.graph.graphCanvas.edges[ele].id === this.props.data.edgeID
      ) {
        this.props.GetinRelation(this.props.graph.graphCanvas.edges[ele].to);
      }
    }
  };

  getoutRelationNode = () => {
    for (let ele in this.props.graph.graphCanvas.edges) {
      if (
        this.props.graph.graphCanvas.edges[ele].id === this.props.data.edgeID
      ) {
        this.props.GetoutRelation(this.props.graph.graphCanvas.edges[ele].from);
      }
    }
  };

  setDisplayFormat = dumb => {
    this.setState(prevState => {
      let canvasNode = this.props.graph.graphCanvas.nodes.slice();
      let canvasEdge = this.props.graph.grapCanvas.edges.slice();
      let BackupGraph = this.props.graph.graphCanvas.nodes.slice();
      let backUp;
      for (let ele in BackupGraph.nodes) {
        if (BackupGraph.nodes[ele].id === this.props.data.nodeID) {
          backUp = BackupGraph.nodes[ele];
          break;
        }
      }
      let chosen;
      for (let ele in canvasNode) {
        if (this.state.nodeID === canvasNode[ele].id) {
          chosen = canvasNode[ele];

          const update = { ...chosen, label: backUp.id };
          canvasNode[ele] = update;
          console.log(canvasNode[ele]);
        }
      }
      return {
        graph: {
          nodes: canvasNode,
          edges: canvasEdge
        }
      };
    });
  };

  handleRemoveNode = () => {
    this.props.RemoveNode(this.props.data.nodeID);
  };
  render() {
    const { state, scale, data } = this.props;
    let commandbox;
    if (scale.NodeMenu === true) {
      commandbox = (
        <div id="command-div">
          <div id="history-div">
            Command Menu : {data.nodeID}
            <button
              id="Incoming-button"
              title="Incoming Relationship"
              //    onClick={this.handleIncoming}
            >
              Incoming
            </button>
            <button
              id="Outcoming-button"
              title="Outcoming Relationship"
              //    onClick={this.handleOutcoming}
            >
              Outcoming
            </button>
            <button
              id="Edit-button"
              //  onClick={this.toggleEditnodeModal}
            >
              Edit node{data.nodeID}
            </button>
            {/* <Modal
                       isOpen={this.state.isEditNodeActive}
                       contentLabel="Node Editor"
                       onRequestClose={this.toggleEditnodeModal}
                       style={customCreateEdgeModal}
                     >
                       <div id="edit-top-div"> Edit Node : {this.state.nodeID}</div>
                       <div id="edit-middle-div"> Classname : {this.state.nodeClass} <br />
                         <div id="inside-editmid-div">
                           <br />
                           <h5 id="Editnode-classname">name </h5>
                           <input
                             type="node-edit"
                             placeholder="Edit...."
                             className="Node-editor"
                             onChange={this.handleEditNodeName}
                           />
                           <select id="select-nodetype">
                             <option value="String">String </option>
                             <option value="Integer">Integer </option>
                             <option value="etc">Etc </option>
                           </select>
                           <br />
                          
                           <form action="/action_page.php">
                             CreateDate: <input type="date" name="bday" />
                             <input type="submit" />
                             <input type="time" id="myTime" value="22:15:00" />
                             <select id="select-nodetype">       
                               <option value="String">String </option>
                               <option value="Integer">Integer </option>
                               <option value="etc">Etc </option>
                             </select>
                           </form>
                         </div>
                       </div>
                       <div id="edge-bottom-div">
                         <br />
                         <button id="cancel-edge" onClick={this.toggleEditnodeModal}>
                           Cancel
                         </button>
                         <button id="Edge-button" onClick={this.updateNodeName}>
                           Save Change
                         </button>
                       </div>
                     </Modal> */}
            <button
              id="createRelation-button"
              title="create relationship"
              //    onClick={this.handleCreateRelation}
            >
              CreateRelation
            </button>
            {/* <Modal
                       isOpen={this.state.isCreateRelationActive}
                       contentLabel="CreateRelation Modal"
                       onRequestClose={this.state.toggleCreateRelationModalFalse}
                       style={customStyle}
                     >  
                       <div id="Modal-header">Create Relationship from #inNodeID to #outNodeID 
                         <button id="hidemodal-button" onClick={this.toggleCreateRelationModalFalse}>Hide Modal</button>
                       </div>
                       {this.state.page === 1 ? (
                         <div id="modal-middle-div">
                         Class :   <select id="select-id"> {this.selectBoxList()} </select>
                         </div>
                       ) : (
                         <div id="modal-middle-div">
                           Relation Classname : <hr />
                           <div id="inside-box"> This relationship require no attribute</div>
                         </div>
                       )}
                       {this.state.page === 1 ? (
                         <div id="modal-bottom-div"> 
                           Bottom modal 1 <hr />
                           <button id="modal-cancel-button" onClick={this.toggleCreateRelationModalFalse}>Cancel</button>
                           <button id="modal-next-button" onClick={this.handleNextPage}>
                             Next
                           </button>
                         </div>
                       ) : (
                         <div id="modal-bottom-div">
                          
                           Bottom modal 2 <hr />
                           <button onClick={this.InitializePage}> Back </button>
                           <button id="modal-cancel-button" onClick={this.toggleCreateRelationModalFalse} > Cancel</button>
                           <button id="Addedge-button" onClick={this.handleCreateRelationbutton}>Create Relation</button>
                         </div>
                       )}
                     </Modal> */}
            <button
              id="removeNode-button"
              title="remove node from canvas"
              onClick={this.handleRemoveNode}
            >
              Remove
            </button>
            <button
              id="deleteNode-button"
              title="delete node from Database"
              //    onClick={this.toggleDeletenodeModal}
            >
              Delete
            </button>
            {/* <Modal
                       isOpen={this.state.isDeleteNodeActivate}
                       contentLabel="DeleteNodeModal"
                       onRequestClose={this.toggleDeletenodeModal}
                       style={customCreateEdgeModal}
                     >
                       <div id="top-deletenode-div"> DeleteNode </div>
                       <div id="middle-deletenode-div">
                         Deleting node {this.state.nodeID} will permanantly be removed
                         from your Database
                       </div>
                       <div id="bottom-deletenode-div">
                         <button onClick={this.toggleDeletenodeModal}>
                           No,keep Node
                         </button>
                         <Button color="danger" onClick={this.handleDeleteNode}>
                          
                           Yes,Delete Node!
                         </Button>
                       </div>
                     </Modal> */}
          </div>
        </div>
      );
    } else if (scale.NodeMenu === false) {
      commandbox = null;
    }
    let relationbox;

    if (scale.EdgeMenu === true) {
      relationbox = (
        <div id="relationMenu-div">
          Relationship Menu :
          {/* {this.state.relationID} */}
          <button
          // onClick={this.toggleEditRelationModal}
          >
            
            Edit Relationship
          </button>
          {/* <Modal isOpen={this.state.isEditRelationActive} contentLabel = "EditRelationship Modal" 
                            onRequestClose={this.toggleEditRelationModal}
                            style = {customEditRStyle} > <div id="editRModal-header">  Edit Relationship 
                     <button id="hidemodal-button" onClick={this.toggleEditRelationModal}>Hide Modal</button>
                     <hr></hr>
                     </div>
                    
                        <div id="editRmodal-middle-div"> relation <hr></hr>
                        <div id="ineditRmodal-middle-div">
                           inRelation <input type="text" placeholder="Node name...." className="Nodetext" onChange={this.handleChange} />
                               <select id="select-id"  > {this.selectBoxList()} </select> <br></br><br></br>
                             message   <input type="text" placeholder="Type message here...." className="msgTxt"  /> 
                               <select id="select-id"  > {this.selectBoxList()} </select>        <br></br><br></br>
                           outRelation  <input type="text" placeholder="Node name...." className="Nodetext" onChange={this.handleChange} />
                               <select id="select-id"  > {this.selectBoxList()} </select>
                           </div>
                        </div>
                        <br></br>
                        <div id="editRmodal-bottom-div">  
                        <button id="modal-cancel-button" onClick={this.toggleEditRelationModal}> Cancel </button>
                        <button id="Addnode-button" onClick={this.handleAddNodebutton} >Save Change</button>
                        </div>
        
                       
                     </Modal> */}
          <button
          // onClick={this.toggleDeleteRelationModal}
          >
            Delete Relationship
          </button>
          {/* <Modal
                    isOpen={this.state.isDeleteRelationActivate}
                    contentLabel="DeleteRelationModal"
                    onRequestClose={this.toggleDeleteRelationModal}
                    style={customCreateEdgeModal}
                  >
                    <div id="top-deletenode-div"> Delete Relation </div>
                    <div id="middle-deletenode-div">
                     
                      Deleting Relation {this.state.relationID} will permanantly be
                      removed from your Database
                    </div>
                    <div id="bottom-deletenode-div">
                      <button onClick={this.toggleDeleteRelationModal}>
                       
                        No,keep Relationship
                      </button>
                      <Button color="danger" onClick={this.handleDeleteRelation}>
                       
                        Yes,Delete Relationship!
                      </Button>
                    </div>
                  </Modal> */}
        </div>
      );
    } else if (scale.EdgeMenu === false) {
      relationbox = null;
    }

    return (
      <div className="Canvas" align="center">
        {commandbox}
        {relationbox}
        {/*console.log("NodeID :"+data.nodeID)*/}
        <Graph
          graph={state.graphCanvas}
          options={state.options}
          events={{
            selectNode: function(event) {
              // if (this.state.createEdgeMode === false) {
              //   this.handleNodeID(event.nodes);
              // } else {
              //   this.handleNodeID2(event.nodes);
              // }

              // if (this.state.createEdgeMode === true) {
              //   const src = this.state.prevNodeID.toString();
              //   const dest = this.state.nodeID.toString();
              //   this.setSrcEdge(src);
              //   this.setDecEdge(dest);
              //   this.toggleCreateRelationModalTrue();
              //   this.state.createEdgeMode = false;
              // }

              this.handleNodeID(event.nodes);
              this.props.ShowNodeMenu();
              this.props.HideEdgeMenu();
              this.handleGetNodeName();
              this.handleNodeClass();
              // this.getCreateDate();
            }.bind(this),
            deselectNode: function(event) {
              console.log(event), this.props.HideNodeMenu();
              // this.handleAlertFalse();
              // this.toggleCreateRAlertmsgFalse();
            }.bind(this),

            selectEdge: function(event) {
              this.handlerelationID(event.edges);
              this.getinRelationNode();
              this.getoutRelationNode();
              this.props.ShowEdgeMenu();
              this.props.HideNodeMenu();
              // this.setDisplayEdge();
            }.bind(this),
            deselectEdge: function(event) {
              // this.toggleRelationMenu();
              this.props.HideEdgeMenu();

              // this.setHideEdge();
              // this.setHideprop();
            }.bind(this)
          }}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
