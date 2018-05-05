import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';

export const AppNavigator = StackNavigator({
    Screen1: { screen: Screen1 },
    Screen2: { screen: Screen2 },
});

class ReactNavigation extends React.Component {
  render() {
    const { dispatch, nav } = this.props;
    const addListener = createReduxBoundAddListener('root');
    return (
      <AppNavigator
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
