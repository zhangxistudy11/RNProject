import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, WebView, Dimensions,TouchableWithoutFeedback ,Image,Animated,Easing} from 'react-native';


export default class detail extends React.Component {

	constructor(props) {
        super(props)
		
		this.roatValue = 0;
        this.state = {
			fadeOutOpacitya: new Animated.Value(this.roatValue),
			fadeOutOpacity: new Animated.Value(1),

        }

		// this.fadeOutAnimated = Animated.timing(
        //     this.state.fadeOutOpacity,
        //     {
        //         toValue: 0,  //透明度动画最终值
        //         duration: 3000,   //动画时长3000毫秒
        //         easing: Easing.linear,
        //     }
        // );


    }

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
					<TouchableOpacity onPress={()=>{
						this.onPressButtonOne()

					}
					}>

						<Text style={styles.text}>
							btn1
				        </Text>
					</TouchableOpacity>	
					</View>
					<View style={[{ height: 40, width: 70 ,backgroundColor:'red'}]}>
					<TouchableOpacity onPress={()=>{
						this.onPressButtonTwo()
					}
					}>
						<Text style={styles.text}>
							btn2
				        </Text>
					</TouchableOpacity>	
					</View>
				</View>

				<View style={[{  marginLeft: 0, marginTop: 0, height: 40, width: 375, justifyContent: 'flex-start', alignItems: 'center', flexDirection: "row" }]}>
					<Animated.Image style={[{width:16,height:9, transform: [{
                                            rotate: this.state.fadeOutOpacitya
                                                .interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] })
                                        }]}]}
					  source={require('./images/Down_Arrow.png')}
					 
                      
					/>
				</View>

				<View style={[{   height: 100, width: 375, justifyContent: 'flex-start', alignItems: 'center', flexDirection: "row" }]}>
				<Animated.View style={{width: 200, height: 100, opacity: this.state.fadeOutOpacity}}>
                    <Image ref="image" style={{width:200,height:100}}
					  source={require('./images/product-image-01.png')}
					  >
                    </Image>
                 </Animated.View>

                <TouchableOpacity style={{width:200,height:40,backgroundColor:'red'}} onPress={this._startAnimated}>
                    <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
                </TouchableOpacity>
				</View>

				
			</View>
		);
	}
	_startAnimated =()=> {
		// this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(1));
		//this.fadeOutAnimated = 
		Animated.timing(
            this.state.fadeOutOpacity,
            {
                toValue: 0,  //透明度动画最终值
                duration: 1000,   //动画时长3000毫秒
                easing: Easing.linear,
            }
        ).start(() => this.state.fadeOutOpacity.setValue(1));

    }
    onPressButtonOne(){
		this.roatValue +=180;
		Animated.timing(                  // Animate over time
			this.state.fadeOutOpacitya,            // The animated value to drive
			{
			  toValue: this.roatValue,                   // Animate to opacity: 1 (opaque)
			  duration: 1000,              // Make it take a while
			}
		  ).start((finished)=>
		
           this.state.fadeOutOpacitya.setValue(this.roatValue)
		  ); 
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
