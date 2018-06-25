import React, { Component } from 'react';
import './App.css';
import Graph from 'react-graph-vis'

let graph = {
  nodes: [
      {id: 1,  label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ],
  edges: [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]
};
const options = {
    /*groups: {
      test: {color:{background:'red'}}
    },*/
    layout: {
      hierarchical: true
    },
    edges: {
      color:{
        color: "blue",
        hover: "blue",
        highlight: "yellow"
      }
    },
    /*nodes: {
      color:{
        color: "blue",
        hover: {
          border: "blue"
        },
        highlight:{
          border:"yellow"
        } 
      }
    },*/
    interaction:{
      hover:true  
    },
    manipulation:{
      enabled: true    
    }
};

const events = {
  select: function(event) {
      var { nodes, edges } = event;
  }
};

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      graph: graph,
      textvalue : " ",
      
    }
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
    textvalue:e.target.value
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

    if(check == true){
      copy1.push(newNode)  
      //console.log(this.state.graph.edges)
      console.log(copy1)
      this.setState(
        {graph:{nodes:copy1,edges:copy2}}
      )
      
      

    }
    
   


    
  
     
  }
  render() {
    /*let show = document.getElementById("Canvas")
    if(graph.nodes.length == 0){
      
    }
    else{
      //console.log(data.nodes.length)
    }*/

   // console.log(value)
    return (
       <div id="App">
         
         <p className="App-intro"> NogDB Graph UI </p> 
         <div className="Top-Box" align="center">Limit</div>
         <p className="Display-msg">Displaying ... nodes, ... relationships. </p>
           <br/>
           <input type="text" placeholder="Inputhere" className="text" onChange={this.handleChange} />
           
           <button id="Addnode-button" onClick={this.handleAddTodoItem}>Add node</button>
           
           <button id="FullScreen-button" onClick={this.decrease}>Full screen</button>
           <button id="Clear-Canvas"> Clear Canvas </button>

          <div id="Canvas" align="center" style={{height: '600px'}}>Canvas area
            <Graph graph={this.state.graph} options={this.state.options} events={this.state.events} />
            {console.log(this.state.graph)}
            
          </div> 
       </div>
    );
  }
}
export default App;