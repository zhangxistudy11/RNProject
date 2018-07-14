'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Text,
    Image,
    View,
    TouchableOpacity,
    Animated,Easing,
    TouchableWithoutFeedback
} from 'react-native';
class RotateArrowTwo extends React.Component {
    static defaultProps = {
        defaultColor: '#f44e14',
        buttonName: 'Button',
    }
    static propTypes = {
        setBackgroundColor: PropTypes.string,
        buttonName: PropTypes.string,
        block: PropTypes.func,
        setWidth: PropTypes.number,
        setHeight: PropTypes.number,
    }
    constructor(props){
        super(props);
        this.changeValue = 0;
        this.state = {
            rotateValue: new Animated.Value(0),
        }

    }
    changeRorateValue (){
        this.changeValue+=180;
        Animated.timing(                  // Animate over time
			this.state.rotateValue,            // The animated value to drive
			{
			  toValue: this.changeValue,                   // Animate to opacity: 1 (opaque)
			  duration: 400,              // Make it take a while
			}
		  ).start(()=>
		
           this.state.rotateValue.setValue(this.changeValue)
		  ); 
    }

    render() {
        return (
            <TouchableOpacity onPress={
                ()=>{
                    this.changeRorateValue()
                }} >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: (this.props.setBackgroundColor) ? this.props.setBackgroundColor : this.props.defaultColor,
                    width: (this.props.setWidth !== 0) ? this.props.setWidth : 60,
                    height: (this.props.setHeight !== 0) ? this.props.setHeight : 20,
                }}
                >
                <Animated.Image style={[{width:16,height:9, transform: [{
                                            rotate: this.state.rotateValue
                                                .interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] })
                                        }]}]}
					  source={require('../images/Down_Arrow.png')}
					 
					/>
                </View>
            </TouchableOpacity>
        );
    }
}
 module.exports = RotateArrowTwo;
