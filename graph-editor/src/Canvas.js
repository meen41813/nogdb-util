import React, { Component } from 'react';
import { Graph } from 'react-d3-graph';

class Canvas extends React.Componet{
    render(){
      return(
        <canvas id="canvas" width={500} height={300}  style={{border:'1px solid #d3d3d3'}}>
        </canvas>
      );
    }
  }
export default Canvas;