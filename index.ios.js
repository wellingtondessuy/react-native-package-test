/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';
import { Header, Left, Body, Right, Title, Icon } from 'native-base';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import Activate from './app/Pages/Activate';
import General from './app/Pages/General';
import Tickets from './app/Pages/Tickets';

export default class S2Parking extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'Ativar' },
        { key: '2', title: 'Desativar' },
        { key: '3', title: 'Recarga' },
        { key: '4', title: 'Gerais' },
      ],
    };
  }

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return (
      <View>
        <Header style={{backgroundColor: '#387EF5'}}>
          <Left>
            <Image
              style={styles.operationIcon}
              source={require('./resources/images/logo-icon.png')}
            />
          </Left>
          <Text style={styles.operationTitle}>Minha Vaga - Florianópolis</Text>
          <Right />
        </Header>
        <Header style={{backgroundColor: '#387EF5'}} androidStatusBarColor="#1565C0">
          <Left>
            <View style={styles.leftButton}>
              <Image
                style={styles.stretch}
                source={require('./resources/images/car.png')}
              />
              <Text style={styles.title}>NPH-3106</Text>
            </View>
          </Left>
          <Right>
            <View style={styles.rightButton}>
              <Text style={styles.rightText}>R$123,50</Text>
              <Image
                style={styles.rightImage}
                source={require('./resources/images/refresh.png')}
              />
            </View>
          </Right>
        </Header>
        <TabBar {...props}
          labelStyle={{
            fontSize: 13
          }}
          tabStyle={{
            backgroundColor: '#387EF5',
            padding: 0,
            height: 40
          }}
        />
      </View>
    );
  };

  _renderTab = ({ route }, navigator) => {
    switch (route.key) {
      case '1':
        return <Activate/>;
      case '2':
        return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]}><Text>TEXTINHO 2</Text></View>;
      case '3':
        return <View style={[ styles.page, { backgroundColor: '#F156C5' } ]}><Text>TEXTINHO 3</Text></View>;
      case '4':
        return <General navigator={navigator}/>;
      default:
        return null;
    }
  };

  _renderScene(route, navigator) {
    switch (route.name) {
      case 'tickets':
        return <Tickets navigator={navigator}/>
        break;
      default:
        return (
          <TabViewAnimated
            style={styles.tabs}
            navigationState={this.state}
            renderScene={o => {
              return this._renderTab(o, navigator)
            }}
            renderHeader={this._renderHeader}
            onRequestChangeTab={this._handleChangeTab}
          />
        );
        break;

    }
  }

  render() {
    return (
      <Navigator
            initialRoute={{ name: 'main', index: 0 }}
            renderScene={this._renderScene.bind(this)}
        configureScene={ (route) => {
          if (route.sceneConfig)
            return route.sceneConfig;
          else {
            transition = Navigator.SceneConfigs.HorizontalSwipeJump;
            transition.gestures = null;
            return transition;
          }

        }}
          />
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    title: {
    color: 'white',
    padding: 13,
    fontSize: 18
    },
  operationTitle: {
    color: 'white',
    padding: 15,
    fontSize: 18
  },
  operationIcon: {
    width: 25,
    height: 25,
  },
    stretch: {
    width: 25,
    height: 25,
    marginTop: 12
  },
  leftButton: {
    flexDirection: 'row'
  },
  rightButton: {
    flexDirection: 'row'
  },
  rightImage: {
    width: 25,
    height: 25
  },
  rightText: {
    color: 'white',
    fontSize: 18,
    marginRight: 5
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flexDirection: 'column',
    flex: 1
  }
});

AppRegistry.registerComponent('S2Parking', () => S2Parking);
