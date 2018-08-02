'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, WebView, Dimensions, TouchableWithoutFeedback, Image, Animated, Easing, Modal, TouchableHighlight } from 'react-native';





class FlightChangeDetail extends React.Component {
    static propTypes = {
        textStr: PropTypes.string,
        modalVisible: PropTypes.bool,
    }
    static defaultProps = {
        textStr: '我是弹框',
        modalVisible: false,
    }
    render() {
        return (
            <Modal

                animationType="fade"
                transparent={true}
                visible={this.props.modalVisible}

            >
                <View opacity={0.8} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }
                }>
                    <TouchableOpacity
                        style={{
                            marginLeft: 80,
                            marginTop: 40,
                            width: 100,
                            height: 50,
                            backgroundColor: 'yellow'
                        }}
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
                            backgroundColor: 'gray'
                        }
                    }>{this.props.textStr}</Text>
                </View>

            </Modal>);
    }
}
const mapStateToProps = (state) => {
    return {
        textStr: state.string,
        modalVisible: state.modalVisible,
    }
}
FlightChangeDetail = connect(mapStateToProps)(FlightChangeDetail)
module.exports = FlightChangeDetail;
