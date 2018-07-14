/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';

import Home from './home';
import Main from './main';
import NavigationExperimental from 'react-native-deprecated-custom-components';




export default class App extends React.Component  {
 render() {
	   return (
		   <NavigationExperimental.Navigator
			   initialRoute={{
			   name: 'main',
			   component: Main
		   }}
			   configureScene={(route) => {
			   return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight;
		   }}
			   renderScene={(route, navigator) => {
			   const Component = route.component;
			   return <Component {...route.params} navigator={navigator}/>
		   }}/>
	   );
   }

 }
