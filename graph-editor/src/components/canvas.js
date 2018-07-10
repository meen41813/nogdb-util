import React, { Component } from 'react';
import Graph from "react-graph-vis";




class Canvas extends Component {
    render () {
         const {state} = this.props;
       

        return (
            <div className="Canvas" align="center"> 
                   <Graph
              graph={state.graphCanvas} 
              options={state.options}
              events={{
                afterDrawing: function(event) {
                      //console.log("This is Select");
                    },
                    initRedraw: function(event){
                      //console.log("initredraw")
                    }
                  }}
              />
            
            </div>
        )
    }
}
export default Canvas