import React, { Component } from 'react';
import Modal from 'react-modal';
import Graph from 'react-graph-vis'
import $ from 'jquery'
import './App.css';
 const customStyle = { 
   content : {
     posittion:'absolute',
     top    : '20px',
     left   : '40px',
     right  : '40px',
     bottom : '40px',
     marginRight  : '15%',
     marginLeft   : '15%',
     marginTop    : '15%',
     marginBottom : '15%' 
   }
 } ;
 const customCreateEdgeModal = {
    content : {
      position:'absolute',
      top   : '20px',
      left  : '40px',
      right : '40px',
      bottom : '40px',
      marginRight : '15%',
      marginLeft  : '15%',
      marginTop   : '15%',
      marginBottom: '15%'
    }
 };
 let Nodenumber;
 let Relationnumber;
 let NodeValue;
 
 let graphDB = {
    nodes: [
      {id: "1", label: 'Bill', group: 'A'},
      {id: "2", label: 'Queen', group: 'A'},
      {id: "3", label: 'King', group: 'A'},
      {id: "4", label: 'Jack', group: 'A',title:'Popup show!!'},
      {id: "5", label: 'Barry', group: 'A'},
      {id: "6", label: 'Jane', group: 'B'},
      {id: "7", label: 'John', group: 'B'},
      {id: "8", label: 'Alex', group: 'B'},
      {id: "9", label: 'Bob',group: 'B'},
      {id: "10", label: 'Car',group: 'B'},
      {id: "11", label: 'Death',group: 'C'},
      {id: "12", label: 'Elf',group: 'C'},
      {id: "13", label: 'Frank',group: 'C'},
      {id: "14", label: 'Oliver',group: 'C'},
      {id: "15", label: 'Ryu',group: 'C'},
      {id: "16", label: 'Max',group: 'D'},
      {id: "17", label: 'Leon',group: 'D'},
      {id: "18", label: 'Chris',group: 'D'},
      {id: "19", label: 'Jill',group: 'D'},
      {id: "20", label: 'Herry',group: 'D'}
    ],
    edges: [
      {from: "1", to: "2" ,group:'EdgeA'},
      {from: "1", to: "4" ,group:'EdgeA'},
      {from: "1", to: "15" ,group:'EdgeB'},
      {from: "1", to: "18" ,group:'EdgeB'},
      {from: "2", to: "7" ,group:'EdgeA'},
      {from: "2", to: "14" ,group:'EdgeB'},
      {from: "2", to: "19" ,group:'EdgeC'},
      {from: "3", to: "5" ,group:'EdgeB'},
      {from: "4", to: "2" ,group:'EdgeC'},
      {from: "6", to: "10" ,group:'EdgeA'},
      {from: "6", to: "11" ,group:'EdgeC'},
      {from: "7", to: "8" ,group:'EdgeB'},
      {from: "7", to: "19" ,group:'EdgeB'},
      {from: "8", to: "2" ,group:'EdgeA'},
      {from: "8", to: "6" ,group:'EdgeC'},
      {from: "9", to: "17" ,group:'EdgeA'},
      {from: "10", to: "1" ,group:'EdgeB'},
      {from: "10", to: "8" ,group:'EdgeA'},
      {from: "12", to: "5" ,group:'EdgeC'},
      {from: "12", to: "11" ,group:'EdgeC'},
      {from: "12", to: "15" ,group:'EdgeA'},
      {from: "13", to: "17" ,group:'EdgeA'},
      {from: "14", to: "20" ,group:'EdgeA'},
      {from: "16", to: "3" ,group:'EdgeB'},
      {from: "16", to: "7" ,group:'EdgeA'},
      {from: "17", to: "19" ,group:'EdgeC'},
      {from: "18", to: "20" ,group:'EdgeB'},
      {from: "19", to: "4" ,group:'EdgeA'},
      {from: "20", to: "1" ,group:'EdgeC'},
    ]
};

let graphCanvas = {
  nodes: [
    {id: "1", label: 'Bill', group: 'A'},
    {id: "2", label: 'Queen', group: 'A'},
    {id: "3", label: 'King', group: 'A'},
    {id: "4", label: 'Jack', group: 'A',title:'Popup show!!'},
    {id: "5", label: 'Barry', group: 'A'}
  ],
  edges: [
    {from: "1", to: "2" ,group:'EdgeA'},
    {from: "1", to: "4" ,group:'EdgeA'},
    {from: "3", to: "5" ,group:'EdgeB'},
    {from: "4", to: "2" ,group:'EdgeC'} 
   ]
}; 
// let graph3 = {
//   nodes: [

//   ],
//   edges: [

//   ]
// };
const options = {
  groups: {
    A: {color:{background:'red',border:'red'},},
    B: {color:{background:'orange',border:'orange'}},
    C: {color:{background:'green',border:'green'}},
    D: {color:{background:'pink',border:'pink'}}
  },
  layout: {
    hierarchical: false
  },
  edges: {
    color:{
      hover: "blue",
      highlight: "yellow"
    }
  },
  nodes: {
    color:{
      hover: {
        border: "blue"
      },
      highlight:{
        border:"yellow"
      } 
    },
    
  },
  interaction:{
    hover:true  ,
    selectable: true,
    selectConnectedEdges: true
  },
  manipulation:{
    enabled: true    
  }
};

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      graph: graphDB,
      prevGraph: graphDB,
      textvalue :" ",
      srcvalue: " ",
      dscvalue: " ",
      //clear:[data],
      isActive:false,
      isActive2:false,
      page: 1,
      showMenu : false,
      isFullscreen:false,
      nodeID :" ",
  
      
    }
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSrcChange = this.handleSrcChange.bind(this);
    this.handleDscChange = this.handleDscChange.bind(this);
    this.handleDelTodoItem = this.handleAddTodoItem.bind(this);
    this.handleAddEdge = this.handleAddEdge.bind(this);
    this.handleClearCanvas = this.handleClearCanvas.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.toggleShowMenu = this.toggleShowMenu.bind(this);
    this.handleFullscreen = this.handleFullscreen.bind(this);
    this.handleNodeID = this.handleNodeID.bind(this);
    this.handleIncoming = this.handleIncoming.bind(this);
    this.handleOutcoming = this.handleOutcoming.bind(this);
    this.setToPreviousGraph = this.setToPreviousGraph.bind(this);

  }
    handleChange(e){
      this.setState({
        textvalue:e.target.value
      })
    }
    handleSrcChange(e){
      this.setState({
        srcvalue:e.target.value
      })
    }
    handleDscChange(e){
      this.setState({
        dscvalue:e.target.value
      })
    }
    
    
    handleAddTodoItem(){

      let newNode ={id:this.state.textvalue,label:this.state.textvalue}
      let copy1 =this.state.graph.nodes.slice()
      let copy2 =this.state.graph.edges.slice()
      let check 
      //console.log(graph.nodes[1])
      for(let ele in copy1){
        //  console.log(ele)
        if ((JSON.stringify(newNode)) === JSON.stringify(copy1[ele])){
  
          check = false
          
          break         
        }
        else{
        
          check = true
          
        }
      } 
      if(check == true || check == undefined){
        copy1.push(newNode)  
        //console.log(this.state.graph.edges)
        console.log(copy1)
        this.setState(
          {graph:{nodes:copy1,edges:copy2}}
        )
        
      } 
    }
    handleAddEdge(){
      let newEdge ={from: this.state.srcvalue,to: this.state.dscvalue}
    let copy3 =this.state.graph.nodes.slice()
    let copy4 =this.state.graph.edges.slice()
    copy4.push(newEdge)
    console.log(copy4)
    this.setState(
      {graph:{nodes:copy3,edges:copy4}}
    )
    }
    handleClearCanvas(){
    
      this.setState(
         {graph:{nodes:[],edges:[]}}
      )
     
    }
    toggleFullScreen() {
      if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
       (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {  
          document.documentElement.requestFullScreen();  
        } else if (document.documentElement.mozRequestFullScreen) {  
          document.documentElement.mozRequestFullScreen();  
        } else if (document.documentElement.webkitRequestFullScreen) {  
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
        }  
      } else {  
        if (document.cancelFullScreen) {  
          document.cancelFullScreen();  
        } else if (document.mozCancelFullScreen) {  
          document.mozCancelFullScreen();  
        } else if (document.webkitCancelFullScreen) {  
          document.webkitCancelFullScreen();  
        }  
      }  
    } 
       setToPreviousGraph = () => {
        this.setState({
          graph:this.state.prevGraph
        })
       }
      toggleModal = () => {
        this.setState({
          isActive:!this.state.isActive,
          page :1
        })
      }
      toggleModal2 = () =>{
        this.setState({
          isActive2:!this.state.isActive2
        })
      }
      toggleShowMenu = () => {
        this.setState(prevState => ({
          showMenu: !prevState.showMenu
        }))
      }
      handleFullscreen = () => {
        $('#Canvas').addClass('CanvasFullScreen')
        this.setState(prevState => ({
          isFullscreen:!prevState.isFullscreen
        }))
      }
      
      handleNextPage = () => {
        console.log('Next!!!')
        this.setState({ page: 2 });
      }
      InitializePage = () => {
        this.setState({
          page:1
        });
      }
      CalltMultiplefunctionAtonce=() =>{
        this.InitializePage;
        this.toggleModal;
      }
      handleNodeID (nodeIDs){
        this.setState({
          nodeID: nodeIDs[0]
        })

      }
      handleIncoming = () => {
        

        this.setState(prevState => {
          const newGraph = { nodes: [], edges: [] };

          for(let ele3 in prevState.graph.nodes){
            if(prevState.graph.nodes[ele3].id === prevState.nodeID){
              newGraph.nodes.push(prevState.graph.nodes[ele3])
            }   
          } 
          for(let ele in prevState.graph.edges){
            
            if(prevState.graph.edges[ele].to === prevState.nodeID ){
              newGraph.edges.push(prevState.graph.edges[ele])
            }   

          } console.log(newGraph.edges)

          for(let ele in newGraph.edges){
            for(let ele2 in prevState.graph.nodes){
                  if(newGraph.edges[ele].from === prevState.graph.nodes[ele2].id || prevState.graph.nodes[ele2].id === prevState.nodeID)
                  newGraph.nodes.push(prevState.graph.nodes[ele2])
            
            }
          } 
          

          return {
            graph: newGraph,
            prevGraph: prevState.graph
          };
        });
      
        
      }
      handleOutcoming = () => {
        this.setState(prevState => {
          const newOutGraph = { nodes: [], edges: [] };
           for(let ele3 in prevState.graph.nodes){
             if(prevState.graph.nodes[ele3].id === prevState.nodeID){
               newOutGraph.nodes.push(prevState.graph.nodes[ele3])
             }   
           }
           for(let ele1 in prevState.graph.edges){
          
             if(prevState.graph.edges[ele1].from === prevState.nodeID ){
             newOutGraph.edges.push(prevState.graph.edges[ele1])
             }   

           }
           for(let ele1 in newOutGraph.edges){
             for(let ele3 in prevState.graph.nodes){
                  if(newOutGraph.edges[ele1].to === prevState.graph.nodes[ele3].id ||prevState.graph.nodes[ele3].id === prevState.nodeID)
                    newOutGraph.nodes.push(prevState.graph.nodes[ele3])
          
            }
          } 


          return {
            graph: newOutGraph,
            prevGraph: prevState.graph
          };
        });
      }
  
    
  render() {
    let { value }  = this.state;
    return (
       <div className="App">
         <header className="App-header">  
         </header>
         {
           this.state.isFullscreen ===true? (
             null
           ) : (
         <p className="App-intro"> NogDB Graph UI </p> 
           )
         }
         {
           this.state.isFullscreen === true ? (
             null
           ) : (
         <div className="Top-Box" align="center">Limit</div>
           )
         }
         {/* <p className="Display-msg">Displaying { Nodenumber = this.graph.nodes.length} nodes, {Relationnumber = this.graph.edges.length} relationships. </p> */}
           <br/>
            <section>
            <button id ="Addnode-modal" onClick={this.toggleModal}>Add node </button>
             <Modal isOpen={this.state.isActive} contentLabel = "addnode Modal" 
                    onRequestClose={this.state.toggleModal}
                    style = {customStyle} > <div id="Modal-header"> Add new node 
             <button id="hidemodal-button" onClick={this.toggleModal}>Hide Modal</button>
             </div>
             {
               this.state.page === 1 ? (
                <div id="modal-middle-div"> Hello middle 1 <hr></hr>
                  <select id="select-id"  > <option value="Default Class">Default Class </option> 
                                          <option value="Class A">Class A </option>
                                          <option value="Class B">Class B </option>
                  </select>
                </div>
               ) : (
                <div id="modal-middle-div"> Hello middle 2 <hr></hr>
                   <input type="text" placeholder="Node name...." className="Nodetext" onChange={this.handleChange} />
                </div>
               )
             }
             
             {
               this.state.page === 1 ? (
              <div id="modal-bottom-div"> Bottom modal 1 <hr></hr>
              <button id="modal-cancel-button" onClick={this.toggleModal} >Cancel </button>
              <button id="modal-next-button" onClick={this.handleNextPage} >Next </button>
             
              </div>
               ) : (
                <div id="modal-bottom-div"> Bottom modal 2 <hr></hr>
                <button id="modal-cancel-button" onClick={this.toggleModal}> Cancel </button>
                <button id="Addnode-button" onClick={this.handleAddTodoItem} >Add node</button>
                </div>

               )
             }
             </Modal>
            </section>
           {/* CreateEdge Modal */}
           <section>
           <button id="Edge-modal" onClick={this.toggleModal2}>Create edge</button>
            <Modal isOpen={this.state.isActive2}  contentLabel="CreateEdge modal "
            onRequestClose={this.state.toggleModal2}
            style = {customCreateEdgeModal}>
            <div id="edge-top-div"> CreateEdge window</div>
            <div id="edge-middle-div">  hello middle edge1
              <input type="src-Edge" placeholder="Src-Edge..." className="src_Edgetxt" onChange={this.handleSrcChange}/>
              <input type="dsc-Edge" placeholder="Dsc-Edge..." className="dsc_Edgetxt" onChange={this.handleDscChange}/>
            </div>
            <div id ="edge-bottom-div">
            <button id="cancel-edge" onClick={this.toggleModal2}>Cancel </button>
            <button id="Edge-button" onClick={this.handleAddEdge}>Create edge2</button>
            </div>

            </Modal>
           </section>
           <button id="FullScreen-button" onClick={this.handleFullscreen}>Full screen</button>
          <button id="Clear-Canvas" onClick={this.handleClearCanvas}> Clear Canvas </button>
          {
            this.isFullscreen === true ? (
              <div> <p> Test parah </p> </div>
            ) : (
          <div className="Canvas" align="center">Canvas area 
            <Graph graph={this.state.graph} options={options} 
            events={{
              select: function(event) {
                var { nodes, edges } = event;
                // console.log("Selected nodes:");
                // console.log(nodes);
                // console.log("Selected edges:");
                // console.log(edges);
                console.log("This is Select")
                
              },
              selectNode : (function(event){
                console.log(event);
                this.handleNodeID(event.nodes);
                this.toggleShowMenu();
                console.log(event.nodes)
              }).bind(this),
              deselectNode : (function(event){
                console.log(event),
                this.toggleShowMenu();
                this.setToPreviousGraph();

              }).bind(this),
              showPopup : (function(event){
                console.log(event);
                console.log("This is popup!!")
            
              }).bind(this)
              }
            } />  
                   
           </div>
            )
          }
           <button id="his-button" onClick={this.toggleShowMenu}>History</button>
           {
             this.state.showMenu === true ? (
           <div id="history-div"> Command Menu {NodeValue=this.state.nodeID}
           <button title="Incoming Relationship" onClick={this.handleIncoming}> Incoming </button>
           {/* <button title="Incoming Relationship" onClick={this.handleIncoming(NodeValue)}> Incoming </button> */}
           <button title="Outcoming Relationship" onClick={this.handleOutcoming}> Outcoming </button>
           <button> Button3 </button>
           <button> Button4 </button>
           <button> Button5 </button>
           <button> Button6 </button>
           
            </div>
             
             ) : (
            null
             )
            } 
       </div>
    );
  }
}

export default App;