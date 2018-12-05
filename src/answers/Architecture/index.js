import React, {Component} from "react";

//I created a container component (or smart component) that incorporates state to display the relative location of the mouse pointer in a div

export default class Move extends Component{
  constructor(){
    super()
    
    this.state = {
      x: null,
      y: null
    }
  }
  
  move = (e) => {
    let width = this.refs.container.clientWidth;
    let height = this.refs.container.clientHeight;

    let x = Math.floor((e.nativeEvent.offsetX/width) * 100)
    let y = Math.floor((e.nativeEvent.offsetY/height) * 100)

    this.setState({
      x,
      y
    })

  }
  
  render(){
    return(
      <div>
        <h1>Relative Coordinate Position</h1>
        <p>Move the cursor over the box to watch the X and Y values change</p>
          <div className="results">
            <div className={`${this.state.x > 75 ? 'bigger' : (this.state.x > 25) ? 'smaller': null} `}>X: {this.state.x}</div>
            <div className={`${this.state.y > 75 ? 'bigger' : (this.state.y > 25) ? 'smaller': null} `}>Y: {this.state.y}</div>
          </div>
        <div className="container" style={{border: 'solid red 1px', height: '300px', width: '300px', display: "flex", justifyContent: "space-around"}} ref="container" onMouseMove={this.move}>
        </div>
      </div>
    )
  }
}