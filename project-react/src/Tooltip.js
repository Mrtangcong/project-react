import React, { Component } from 'react';
import './Tooltip.css';
class Tooltip extends Component {
  constructor(props){
      super(props);
      this.onMouse = this.onMouse.bind(this);
      this.outMouse = this.outMouse.bind(this);
      this.state = {//定一个一个tooltip的显示开关
          show:false
      }
  }
  onMouse = () => {//鼠标移入开关变为true
    this.setState({
        show: true
    });
  };
  outMouse = () => {//鼠标移出开关变为false
    this.setState({
        show: false
    });
  };
  getpos(){
      var pos = this.props.pos;//获取通过props传递的样式
      var tl = {//定义不同样式
          top: -32,
          left: 0
      }
      var tr = {
          top: -32,
          right: 0
      }
      var t = {
          top: -32,
          left: '-50%'
      }
      var r = {
          top: 0,
          left: 70
      }
      var b = {
          top: 32,
          left: '-50%'
      }
      var l = {
          top: 0,
          right:70
      }
      console.log(pos);
      var overlay = this.props.overlay;//获取通过props传递的文本
      var show = this.state.show;
      if(show){
        switch (pos){
            case "tl":
        return (<div className="overlay" style={ tl }>{overlay}</div>);
            case "tr":
        return (<div className="overlay" style={ tr }>{overlay}</div>);
            case "t":
        return (<div className="overlay" style={ t }>{overlay}</div>);
            case "b":
        return (<div className="overlay" style={ b }>{overlay}</div>);
            case "r":
        return (<div className="overlay" style={ r }>{overlay}</div>);
            case "l":
        return (<div className="overlay" style={ l }>{overlay}</div>);
            default:
        return false;
        }
    }
  }
  render() {
    
    return (
      <div>
        <div className="tooltip" onMouseMove={this.onMouse} onMouseOut={this.outMouse}>
          {this.props.pos}
          {this.getpos()}
        </div>
      </div>
    );
  }
}
export default Tooltip;