import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, WebView, Dimensions,TouchableWithoutFeedback ,Image,Animated,Easing} from 'react-native';

export default class detailTwo extends React.Component {

	constructor(props) {
        super(props)
		
		this.state = {
            animatedValue: new Animated.Value(0),
        }


    }
    _startAnimated =()=> {
		this.state.animatedValue.setValue(0);

		Animated.timing(
            this.state.animatedValue,
            {
                toValue: 1,
                duration: 10000,
                easing: Easing.in,
            }

        ).start(() => this._startAnimated());

    }
	_pressBackButton=() => {
		const { navigator } = this.props;
		if (navigator) {
			navigator.pop();
		}
	}
	
    render(){
		const rotateZ = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        const opacity = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        });

        const rotateX = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        });

        const textSize = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [18, 32, 18]
        });

        const marginLeft = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 200, 0]
        });

       return(
		<View style={styles.container}>
        
		<View style={[{ backgroundColor: 'white', marginLeft: 0, marginTop: 0, height: 64, width: Dimensions.get('window').width, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: "column" }]}>
				<TouchableOpacity onPress={this._pressBackButton}>
					 <Text style={styles.back}>返回</Text>
				 </TouchableOpacity>

				</View>

		<Animated.View
			style={{
				marginTop: 10,
				width: 100,
				height: 100,
				transform: [
					{rotateZ:rotateZ},
				]
			}}
		>
			<Image style={{width:100,height:100}}
					  source={require('./images/product-image-01.png')}
					  >
			</Image>
		</Animated.View>

		<Animated.View
			style={{
				marginTop: 10,
				width: 100,
				height: 100,
				opacity:opacity,
				backgroundColor:'red',
			}}
		/>

		<Animated.Text
			style={{
				marginTop: 10,
				width:100,
				fontSize: 18,
				color: 'white',
				backgroundColor:'red',
				transform: [
					{rotateX:rotateX},
				]
			}}
		>
			窗外风好大，我没有穿褂。
		</Animated.Text>

		<Animated.Text
			style={{
				marginTop: 10,
				height: 100,
				lineHeight: 100,
				fontSize: textSize,
				color: 'red'
			}}
		>
			IAMCJ嘿嘿嘿
		</Animated.Text>

		<Animated.View
			style={{
				marginTop: 10,
				width: 100,
				height: 100,
				marginLeft:marginLeft,
				backgroundColor:'red',
			}}
		/>

		<TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated}>
			<Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
		</TouchableOpacity>
	</View>


	   )

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
