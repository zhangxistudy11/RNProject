'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
class ThemeSwitch extends React.Component {
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }
  
    constructor () {
      super()
      this.state = { themeColor: '' }
    }
    // dispatch action 去改变颜色
    handleSwitchColor (color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }
    render() {
        return (
            <View style={{marginTop:40,flexDirection:'row'}}>
                <TouchableOpacity onPress={() => {
                   this.handleSwitchColor('blue')
                }}>
                    <Text style={{ color: this.props.themeColor }}>蓝色按钮</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                   this.handleSwitchColor('red')
                }}>
                    <Text style={{ marginLeft:40,color: this.props.themeColor }}>红色按钮</Text>
                </TouchableOpacity>
            </View>
         
        );
    }
}
const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)


export default ThemeSwitch
