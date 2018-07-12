import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, WebView, Dimensions,TouchableWithoutFeedback } from 'react-native';

export default class detail extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={[{ backgroundColor: 'white', marginLeft: 0, marginTop: 0, height: 64, width: Dimensions.get('window').width, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: "column" }]}>
				<TouchableOpacity onPress={this._pressBackButton.bind(this)}>
					 <Text style={styles.back}>返回</Text>
				 </TouchableOpacity>

				</View>
				
				<View style={[{  marginLeft: 0, marginTop: 0, height: 40, width: 375, justifyContent: 'flex-start', alignItems: 'center', flexDirection: "row" }]}>
					<View style={[{ height: 40, width: 70 ,backgroundColor:'yellow'}]}>
					<TouchableWithoutFeedback onPress={
						this.onPressButtonOne()
					}>

						<Text style={styles.text}>
							btn1
				        </Text>
					</TouchableWithoutFeedback>	
					</View>
					<View style={[{ height: 40, width: 70 ,backgroundColor:'red'}]}>
					<TouchableOpacity onPress={
						this.onPressButtonTwo()
					}>
						<Text style={styles.text}>
							btn2
				        </Text>
					</TouchableOpacity>	
					</View>
				</View>
				
			</View>
		);
	}

    onPressButtonOne(){
        
	}
    onPressButtonTwo(){
		
	}
	_pressBackButton() {
		const { navigator } = this.props;
		if (navigator) {
			navigator.pop();
		}
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
