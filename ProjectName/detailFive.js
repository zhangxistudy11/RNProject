import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, WebView, Dimensions, TouchableWithoutFeedback, Image, Animated, Easing, Modal, TouchableHighlight } from 'react-native';
import FlightChangeDetail from './Component/FlightChangeDetail';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import OrderDetailReducer from './Reducer/OrderDetailReducer'


const store = createStore(OrderDetailReducer)

export default class detailFive extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			modalVisible: false,
		}


	}

	_pressBackButton = () => {
		const { navigator } = this.props;
		if (navigator) {
			navigator.pop();
		}
	}

	render() {


		return (
			<Provider store={store}>

				<View style={styles.container}>

					<View style={[{ backgroundColor: 'white', marginLeft: 0, marginTop: 0, height: 64, width: Dimensions.get('window').width, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: "column" }]}>
						<TouchableOpacity onPress={this._pressBackButton}>
							<Text style={styles.back}>返回</Text>
						</TouchableOpacity>
					</View>

					<View style={{
						width: Dimensions.get('window').width,
						height: 180,
						backgroundColor: 'red'
					}}>
						<TouchableOpacity
							style={{
								width: 100,
								height: 50,
								backgroundColor: 'black'
							}}
							onPress={() => {
								store.dispatch({
									type: 'CHANGE_STATE',
									modalVisible: true,
									textStr: 'xxxxxx'
								})
								console.log('11111')
							}}>
							<Text style={styles.back}>弹出</Text>


						</TouchableOpacity>
					</View>

					<FlightChangeDetail></FlightChangeDetail>

				</View>

			</Provider>

		)

	}

	changeModalState(result) {
		let aa = result;
		this.setState({ modalVisible: aa })
	}


}
/*
		 <Modal
		 
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          
        >
		<View opacity={0.8}  style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}
		}>
				 <TouchableOpacity
			 style={{
				 marginLeft:80,
				 marginTop:40,
				width:100,
			  height: 50,
			  backgroundColor:'yellow'}}
			 onPress={() => {
				 this.changeModalState(false);
                     console.log('11111')
                }}>
		  
		  <Text style={styles.back}>隐藏</Text>

		 </TouchableOpacity>

		 <Text style={
             {
             width: 70,
             height: 40,
             backgroundColor:'gray'}
           }>我是弹框</Text>
			</View>

		 </Modal>
		 */
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
