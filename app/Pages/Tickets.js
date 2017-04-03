import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Picker,
  TouchableNativeFeedback
} from 'react-native';
import { Header, Button, Left, Icon, Title, Right, Text, Body } from 'native-base';

export default class Tickets extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Header style={{backgroundColor: '#387EF5'}} androidStatusBarColor="#1565C0">
					<Left>
						<Button onPress={() => this.props.navigator.pop()} transparent>
                            <Icon name='arrow-back' style={{color: 'white'}}/>
                        </Button>
					</Left>
					<Body>
						<Title>
							Tickets
						</Title>
					</Body>
					<Right></Right>
				</Header>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});

AppRegistry.registerComponent('Activate', () => Activate);
