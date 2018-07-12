import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,WebView,Dimensions} from 'react-native';

export default class detail extends React.Component {
	render() {
		return (
			<View style={styles.container}>
			    <View style={[{backgroundColor:'white',marginLeft:0,marginTop:0,height:64,width: Dimensions.get('window').width,justifyContent:'flex-start',alignItems:'flex-start',flexDirection:"column"}]}>
				 <TouchableOpacity onPress={this._pressBackButton.bind(this)}>
					 <Text style={styles.back}>返回</Text>
				 </TouchableOpacity>
				 {/* <Text style={styles.text}>
					 {this.props.productTitle}
				 </Text> */}
				</View>
				<View style={[{backgroundColor:'yellow',marginLeft:0,marginTop:0,height:90,width:200,justifyContent:'flex-start',alignItems:'flex-start',flexDirection:"row"}]}>
                   <View style={[{height:40,width:150}]}>
                            
				   </View>
				</View>
			</View>
		);
	}

	_pressBackButton() {
		const {navigator} = this.props;
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
		marginTop:20,
		marginLeft:18
	},
	web:{
		width:200,
		height:200
	}
});
