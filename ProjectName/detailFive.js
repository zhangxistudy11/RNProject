import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, WebView, Dimensions, TouchableWithoutFeedback, Image, Animated, Easing, Modal, TouchableHighlight } from 'react-native';
import FlightChangeDetail from './Component/FlightChangeDetail';

import { connect } from 'react-redux';



 class detailFive extends React.Component {

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

	// handleSwitchColor (color) {
    //     if (this.props.onSwitchColor) {
    //         this.props.onSwitchColor(color)
    //     }
    // }

	changeModalState1= () =>{
        if (this.props.changeModalState) {
            this.props.changeModalState()
        }
    }
	render() {
		return (
			// <Provider store={store}>
				<View style={{
					flex: 1,
					justifyContent: 'flex-start',
					alignItems: 'flex-start'
				}}>

					<View style={[{ backgroundColor: 'white', marginLeft: 0, marginTop: 0, height: 64, width: Dimensions.get('window').width, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: "column" }]}>
						<TouchableOpacity onPress={this._pressBackButton}>
							<Text style={{
			fontSize: 20,
			color: 'blue',
			marginTop: 20,
			marginLeft: 18
		}}>返回</Text>
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
							onPress={
								this.changeModalState1
							}>
							<Text style={ {
			fontSize: 20,
			color: 'blue',
			marginTop: 20,
			marginLeft: 18
		}}>弹出</Text>


						</TouchableOpacity>
					</View>

					<FlightChangeDetail></FlightChangeDetail>

				</View>

			// </Provider>

		)

	}

	// const styles = StyleSheet.create({
	// 	container: {
	// 		flex: 1,
	// 		justifyContent: 'flex-start',
	// 		alignItems: 'flex-start'
	// 	},
	// 	text: {
	// 		fontSize: 20
	// 	},
	// 	back: {
	// 		fontSize: 20,
	// 		color: 'blue',
	// 		marginTop: 20,
	// 		marginLeft: 18
	// 	},
	// 	web: {
	// 		width: 200,
	// 		height: 200
	// 	}
	// });	


}


function mapStateToProps(state) {
    return state;
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeModalState: () => {
      dispatch({ type: 'CHANGE_STATE', textStr: '00000',modalVisible:true })
    }
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSwitchColor: (color) => {
//             dispatch({ type: 'CHANGE_COLOR', themeColor: color })
//         }
//     }
// }



detailFive = connect(mapStateToProps,mapDispatchToProps)(detailFive)

export default detailFive



