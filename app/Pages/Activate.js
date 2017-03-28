import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableNativeFeedback
} from 'react-native';
import { Header, Button } from 'native-base';

export default class Activate extends Component {

	constructor(props) {
		super(props);
		this.state = {
			area: 1,
			time: 1
		}
	}

	_activate() {

	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.areasSelect}>

					<Text style={styles.areasLabel}>Área</Text>
					<Picker
						style={styles.areasDropdown}
						selectedValue={this.state.area}
						onValueChange={(area) => this.setState({area: area})}>
						<Picker.Item label="Área Azul" value="1" />
						<Picker.Item label="Área Branca" value="2" />
					</Picker>

				</View>
				<View style={styles.timeSelect}>

					<Text style={styles.timeLabel}>Tempo</Text>
					<Picker
						style={styles.timeDropdown}
						selectedValue={this.state.time}
						onValueChange={(time) => this.setState({time: time})}>
						<Picker.Item label="60 Minutos - (R$2.50)" value="1" />
						<Picker.Item label="120 Minutos - (R$5.00)" value="2" />
						<Picker.Item label="180 Minutos - (R$7.50)" value="3" />
						<Picker.Item label="240 Minutos - (R$10.00)" value="4" />
					</Picker>

				</View>
				<View style={styles.activateButtonView}>
					<TouchableNativeFeedback>
						<View style={{width: 200, height: 200, borderRadius: 100, borderWidth: 3, borderColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2962FF'}}>
							<Text style={{fontSize: 25, color: 'white'}}>Ativar Ticket</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	areasSelect: {
		flex: 1,
		flexDirection: 'row'
	},
	areasLabel: {
		flex: 1.3,
		fontSize: 18,
		marginLeft: 20,
		marginTop: 10,
		color: 'black'
	},
	areasDropdown: {
		flex: 1,
		marginRight: 15
	},
	timeSelect: {
		flex: 1,
		flexDirection: 'row'
	},
	timeLabel: {
		flex: 1,
		fontSize: 18,
		marginLeft: 20,
		marginTop: 10,
		color: 'black'
	},
	timeDropdown: {
		flex: 2,
		marginRight: 15
	},
	activateButtonView: {
		flex: 8,
	    justifyContent: 'center',
	    alignItems: 'center'
	},
	activateButton: {
		backgroundColor: 'red',
		flex: 1
	}
});

AppRegistry.registerComponent('Activate', () => Activate);
