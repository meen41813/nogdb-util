import React, { Component } from 'react';
import './App.css';
import Graph from 'react-graph-vis'

let graph = {
  nodes: [
      {id: "1", label: 'Node 1'},
      {id: "2", label: 'Node 2'},
      {id: "3", label: 'Node 3'},
      {id: "4", label: 'Node 4'},
      {id: "5", label: 'Node 5'}
    ],
  edges: [
      {from: "1", to: "2"},
      {from: "1", to: "3"},
      {from: "2", to: "4"},
      {from: "2", to: "5"}
    ]
};
const options = {
    groups: {
      test: {color:{background:'red'}}
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

const events = {
  select: function(event) {
    var { nodes, edges } = event;
    /*console.log("Selected nodes:");
    console.log(nodes);
    console.log("Selected edges:");
    console.log(edges);*/
  },
  doubleClick: function(event){
    //console.log(event)
  }
  };

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      graph: graph,
      textvalue: " ",
      srcvalue: " ",
      dscvalue: " "
      
    }
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSrcChange = this.handleSrcChange.bind(this);
    this.handleDscChange = this.handleDscChange.bind(this);
    this.handleAddEdge = this.handleAddEdge.bind(this);
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
  handleChange(e){
    this.setState({
      textvalue:e.target.value
    })
  }
  handleAddEdge(){
    let newEdge ={from: this.state.srcvalue,to: this.state.dscvalue}
    //console.log(newEdge)
    let copy3 =this.state.graph.nodes.slice()
    let copy4 =this.state.graph.edges.slice()
   
    
    let check
    for(let ele in copy4){
      //console.log(JSON.stringify(copy4[ele]))
      if ((JSON.stringify(newEdge.from)) === JSON.stringify(copy4[ele].from) && (JSON.stringify(newEdge.to)) === JSON.stringify(copy4[ele].to) ){
        check = false
        break        
      }
      else{     
        check = true
      }
    }
    //console.log(check)
    //console.log(newEdge)
    let checkHave1,checkHave2
    for(let ele in copy3){
      //console.log(JSON.stringify(newEdge.from))
      //console.log( JSON.stringify(copy3[ele].id))
      if((JSON.stringify(newEdge.from)) == JSON.stringify(copy3[ele].id) ){
        checkHave1 = true
        break
      }
      else{
        checkHave1 = false
      }
    }
    for(let ele in copy3){  
      //console.log( JSON.stringify(copy3[ele].id))
      if((JSON.stringify(newEdge.to)) == JSON.stringify(copy3[ele].id) ){
        checkHave2 = true
        break
      }
      else{
        checkHave2 = false
      }
    }
    //console.log(check)
    //console.log(checkHave1)
    //console.log(checkHave2)
    if (check == true && checkHave1 == true && checkHave2 == true){
      copy4.push(newEdge) 
      this.setState(
        {graph:{nodes:copy3,edges:copy4}}
      )
    }
    //console.log(graph.edges)
    //console.log(copy4)
  }
    
    
       
    
  
  handleAddTodoItem(){
      //console.log(this.state.graph.nodes)
      
      let newNode ={id:this.state.textvalue,label:this.state.textvalue}
      //console.log(this.state.graph.nodes.length)
      let copy1 =this.state.graph.nodes.slice()
      //console.log(copy1)
      let copy2 =this.state.graph.edges.slice()
      let check 
      //console.log(this.state.graph.nodes)
     // console.log(copy1)
       
      for(let ele in copy1){     
        if ((JSON.stringify(newNode)) === JSON.stringify(copy1[ele])){
          check = false      
          break         
        }
        else{ 
          check = true           
        }
      }     
      //console.log(check)
      if(check == true || check == undefined){
        copy1.push(newNode)  
        this.setState(
          {graph:{nodes:copy1,edges:copy2}}       
        )
        //console.log(this.state.graph.nodes)
     // console.log(copy1)
    } 
  }
  render() {
    return (
      <div id="App">
         
        <p className="App-intro"> NogDB Graph UI </p> 
        <div className="Top-Box" align="center">Limit</div>
        <p className="Display-msg">Displaying ... nodes, ... relationships. </p>
          <br/>
          <input type="text" placeholder="Inputhere" className="text" onChange={this.handleChange} />
           
          <button id="Addnode-button" onClick={this.handleAddTodoItem}>Add node</button>

          <input type="src-Edge" placeholder="Src-Edge..." className="src_Edgetxt" onChange={this.handleSrcChange}/>
          <input type="dsc-Edge" placeholder="Dsc-Edge..." className="dsc_Edgetxt" onChange={this.handleDscChange}/>
          <button id="Edge-button" onClick={this.handleAddEdge}>Create edge2</button>
           
          <button id="FullScreen-button" onClick={this.decrease}>Full screen</button>
          <button id="Clear-Canvas"> Clear Canvas </button>

          <div id="Canvas" align="center" style={{height: '600px'}}>Canvas area
            <Graph 
              graph={this.state.graph} 
              options={options} 
              events={events} 
            />        
            {console.log(this.state.graph)}
            
          </div> 
       </div>
    );
  }
}
export default App;