'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
class Header extends React.Component {
    static propTypes = {
        themeColor: PropTypes.string
      }
    render() {
        return (
            <Text style={{color:this.props.themeColor}}>我是Heaer我是Header</Text>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor
    }
 }
 Header = connect(mapStateToProps)(Header)
 module.exports = Header;
