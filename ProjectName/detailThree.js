import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, WebView, Dimensions, TouchableWithoutFeedback, Image, Animated, Easing } from 'react-native';
import RotateArrow from './Component/RotateArrow';
import RotateArrowTwo from './Component/RotateArrowTwo';


export default class detailThree extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			springValue: new Animated.Value(1),
			isTurnDown:true
		}


	}
	_startAnimated = () => {
		this.state.springValue.setValue(0.1);

		Animated.spring(
			this.state.springValue,
			{
				toValue: 1,
				friction: 2,    //弹跳系数
				tension: 10,   // 控制速度
			}
		).start();

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
				<Animated.View
					style={{
						marginLeft: 100,
						marginTop: 50,
						width: 282,
						height: 51,
						transform: [
							{ scale: this.state.springValue }
						]
					}}
				>
					<Image ref="image" style={{ width: 282, height: 51 }}
						source={require('./images/product-image-01.png')}
					>
					</Image>
				</Animated.View>

				<TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
					<Text style={{ width: 200, height: 35, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
				</TouchableOpacity>

				<RotateArrow setBackgroundColor='yellow' setWidth={100} setHeight={40} buttonName='ggsmifaf'
					block={() => {
						this.test()
					}}
				></RotateArrow>
				<View style={{ backgroundColor: '#999999', height: 45, width: 375, marginTop: 100, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
				>
					<TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => {
						this.test()
					}}>

						<Text style={{ flex: 1 }}>获奖项目</Text>
						<Text>{this.state.isTurnDown ?"展开":"收起"}</Text>
						<RotateArrowTwo ref='RotateArrow' setBackgroundColor='#999999' setWidth={16} setHeight={11} buttonName='ggsmifaf'
							block={() => {
								this.updateRotate()
							}}
						></RotateArrowTwo>
					</TouchableOpacity>

				</View>
				{this.state.isTurnDown ?null : <View style={{ backgroundColor: 'gray', height: 45*3, width: 375, marginTop: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
				<Text style={{ flex: 1 }}>金鸡奖</Text>
				<Text style={{ flex: 1 }}>百花奖</Text>
				<Text style={{ flex: 1 }}>参与奖</Text>
				</View>}
				

			</View>
		);

	}
	updateRotate() {
		let result = !this.state.isTurnDown ;
		this.setState({
			isTurnDown:result
		})
		this.refs.RotateArrow.changeRorateValue();
	}
	test() {
		let result = !this.state.isTurnDown ;
		this.setState({
			isTurnDown:result
		})
		this.refs.RotateArrow.changeRorateValue();
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
