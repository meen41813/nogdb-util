import React, { Component } from 'react';
import {TabContent,TabPane,Nav,NavItem,NavLink,Card,Button,CardTitle,CardText,Row,Col} from "reactstrap";
import classnames from "classnames";


class NodePropertyMenu extends Component {
    render () {
       

        return (
            <div className="Left-tab">
          <div id="topbar-prop">
           Node <button onClick={this.setHideprop}>Hide </button>
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
                  @rid : {this.state.nodeID} <br />
                  @class : {this.state.nodeClass} <br />
                  CreatedDate : {this.state.CreateDate} <br />
                 name : {this.state.NodeName} <br />
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
                 <button onClick={this.setridDisplayFormat}> @rid</button>
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
export default NodePropertyMenu