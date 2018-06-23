import React,{Component}from 'react';
import {TabBarIOS} from 'react-native';

import Home from  './home';
import More from './more';

export default class  main extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'home'
		}
	}
  render(){
    return(
    // <TabBarIOS unselectedTintColor='gray'>
      
      <Home navigator={this.props.navigator}></Home>
    );
  }
}
