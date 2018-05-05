import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';


class Screen2 extends Component {
    render() {
        return (
            <View>
                <Text>Screen 2</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})

const mapStateToProps = (state, ownProps) => {
   return {};
}
 
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);