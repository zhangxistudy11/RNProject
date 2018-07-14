'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
class RotateArrow extends React.Component {
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
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.block()} >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: (this.props.setBackgroundColor) ? this.props.setBackgroundColor : this.props.defaultColor,
                    width: (this.props.setWidth !== 0) ? this.props.setWidth : 60,
                    height: (this.props.setHeight !== 0) ? this.props.setHeight : 20,
                }}
                >
                    <Text>{this.props.buttonName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
 module.exports = RotateArrow;
