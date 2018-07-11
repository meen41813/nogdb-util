import React, { Component } from 'react';
import {TabContent,TabPane,Nav,NavItem,NavLink,Card,Button,CardTitle,CardText,Row,Col} from "reactstrap";
import classnames from "classnames";
import { connect} from 'react-redux';
import {getnodeid,updategraph} from '../actions/dataAction.js';
import {shownodemenu,hidenodemenu,showedgemenu,hideedgemenu,changesizes,changecolornode} from '../actions/node-edgesmenu';

const mapStateToProps = state => {
  return {
    graph:state.graph,
    scale:state.scale,
    data:state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    GetNodeID: NodeID => {
      dispatch (getnodeid(NodeID))
    },
    ShowNodeMenu : () => {
        dispatch(shownodemenu())
    },
    HideNodeMenu : () => {
        dispatch(hidenodemenu())
    },
    ShowEdgeMenu : () => {
      dispatch(showedgemenu())
    },
    HideEdgeMenu : () => {
      dispatch(hideedgemenu())
    },

    UpdateGraph : (NewNode,NewEdge) => {
      dispatch(updategraph(NewNode,NewEdge))
    },
    ChangeSizes : (id,size) =>{
      dispatch(changesizes(id,size))
    },
    ChangeColorNode:(id,colors)=>{
      dispatch(changecolornode(id,colors))
    }
  }
}

class NodePropertyMenu extends Component {
  constructor(props){
    super(props);
    this.state= {
     
    };
    this.toggle = this.toggle.bind(this);
    this.setDisplayFormat = this.setDisplayFormat.bind(this);
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
   handleSize25 = () => {
    
    this.handlechangesize(25);
   };
   handleSize50 = () => {
 
    this.handlechangesize(50);
   };
   handleSize75 = () => {

    this.handlechangesize(75);
   };
   handleSize100 = () => {

     this.handlechangesize(100);
   };
   handlechangesize = (size) =>{
     
     this.props.ChangeSizes(this.props.data.nodeID,size)
   }
   selectedColor = () => {
    let colors = document.getElementById("select-nodecolor").value;
    this.props.ChangeColorNode(this.props.data.nodeID,colors)
       
      };
      setDisplayFormat = (dumb) => {
        console.log(this.props.graph.graphCanvas)
          let canvasNode = this.props.graph.graphCanvas.nodes.slice();
          // let canvasEdge = this.props.graph.grapCanvas.edges.slice();
          // let BackupGraph = this.props.graph.graphCanvas.nodes.slice();
          // let backUp;
          // for (let ele in BackupGraph.nodes) {
          //   if ( BackupGraph.nodes[ele].id === this.props.data.nodeID) {      
          //     backUp = BackupGraph.nodes[ele];
          //     break;
          //   }
          // }
          // let chosen;
          // for (let ele in canvasNode) {
          //   if (this.state.nodeID === canvasNode[ele].id) {
          //     chosen = canvasNode[ele];
    
          //     const update = { ...chosen, label: backUp.id };
          //     canvasNode[ele] = update;
          //   }
          // }
         
          // this.props.UpdateGraph(canvasNode,canvasEdge)
            
           
          
       
      }
    render () {
      const {graph,scale,data} = this.props;
        return (
            <div className="Left-tab">
          <div id="topbar-prop">
           Node <button onClick={this.props.HideNodeMenu}>Hide </button>
         </div>

         <Nav tabs>
            <NavItem>
              <NavLink
               className={classnames({ active: this.state.activeTab === "1" })}
                 onClick={() => {
                  this.toggle("1");
                }}
              >
               Properties
               </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                 className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                 this.toggle("2");
                }}
               >
                Settings
               </NavLink>
           </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                 <h4>Tab 1 Contents</h4>
                  @rid : {data.nodeID} <br />
                  @class : {data.nodeClass} <br />
                  CreatedDate : {this.state.CreateDate} <br />
                 name : {data.nodeName} <br />
               </Col>
               </Row>
           </TabPane>
             <TabPane tabId="2">
             <Row>
                <Col sm="12">
                  <h4>Tab 2 Contents </h4>
                  <p> Display Format </p>
                 <input
                    type="text"
                   placeholder="display format..."
                     className="Displayformat-text"
                  />
                  <button onClick={this.setDisplayFormat}> @rid</button>
                  <button onClick={this.setclassDisplayFormat}>@class</button>
                 <button> createdate </button>
                 <button onClick={this.setNameDisplayFormat}> name </button>

                   <br />
                   <p> Node Size </p>
                 <button onClick={this.handleSize25}>25</button>
                   <button onClick={this.handleSize50}>50</button>
                  <button onClick={this.handleSize75}>75</button>
                 <button onClick={this.handleSize100}>100</button>
                  <p> display node size </p>
                  <p> Node Color </p>
                  <select id="select-nodecolor" onChange={this.selectedColor}>
                   <option value="red">Red</option>
                  <option value="orange">Orange</option>
                   <option value="green">Green</option>
                   <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="aqua">Aqua</option>
                  <option value="purple">Purple</option>
                  </select>
              </Col>
               </Row>
            </TabPane>
           </TabContent>
         </div> 
        )
    }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NodePropertyMenu);