import React,{Component}from 'react';
import Home from  './home';

export default class  main extends React.Component {
  render(){
    return(
      <Home navigator={this.props.navigator}></Home>
    );
  }
}
