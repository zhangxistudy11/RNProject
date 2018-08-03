import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, WebView, Dimensions, TouchableWithoutFeedback, Image, Animated, Easing } from 'react-native';
import Header from './Component/Header';
import Content from './Component/Content';
import ThemeSwitch from './Component/ThemeSwitch';





export default class detailFour extends React.Component {

	constructor(props) {
		super(props)

	
	}
	
	_pressBackButton = () => {
		const { navigator } = this.props;
		if (navigator) {
			navigator.pop();
		}
	}

	render() {

		return (
			

			<View style={styles.container}>
				<View style={[{ backgroundColor: 'white', marginLeft: 0, marginTop: 0, height: 64, width: Dimensions.get('window').width, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: "column" }]}>
					<TouchableOpacity onPress={this._pressBackButton}>
						<Text style={styles.back}>返回</Text>
					</TouchableOpacity>
				</View>
                <Header></Header>
				<Content ></Content>
				<ThemeSwitch style={{marginTop:30}}></ThemeSwitch>

			</View>
			
		);

	}


}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	text: {
		fontSize: 20
	},
	back: {
		fontSize: 20,
		color: 'blue',
		marginTop: 20,
		marginLeft: 18
	},
	web: {
		width: 200,
		height: 200
	}
});
