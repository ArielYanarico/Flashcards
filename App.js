import React, { Component } from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import thunk from 'redux-thunk';
import { lightblue } from './utils/colors';
import { setLocalNotification } from './utils/notification';
import reducer from './reducers';
import Navigator from './utils/navigator';

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: lightblue, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={lightblue} barStyle="light-content" />
          </View>
          <Navigator/>
        </View>
      </Provider>
    );
  }
}

export default App;
