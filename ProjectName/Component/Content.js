'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
class Content extends React.Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    render() {
        return (
            <Text  style={{ fontSize: 30,color:this.props.themeColor }}>我是Content我是Content</Text>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor
    }
}

Content = connect(mapStateToProps)(Content)

export default Content
