import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableNativeFeedback,
  ListView,
  Image,
  Navigator
} from 'react-native';
import { Header, Button } from 'native-base';
import Touchable from '../Components/Touchable';

export default class General extends Component {

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([
					{
						title: 'Mapa de vagas',
						icon: '',
						routeName: 'map'
					},
					{
						title: 'Extrato da conta',
						icon: '',
						routeName: 'extract'
					},
					{
						title: 'Irregularidades',
						icon: '',
						routeName: 'irregularities'
					},
					{
						title: 'Tickets',
						icon: '',
						routeName: 'tickets'
					},
					{
						title: 'Sair',
						icon: '',
						routeName: 'logout'
					}
			])
		};
	}

	_goToTickets() {
		this.props.navigator.push({name: 'tickets', sceneConfig: Navigator.SceneConfigs.VerticalUpSwipeJump});
	}

	_renderRow(rowData) {

		return (
			<Touchable onPress={this._goToTickets.bind(this)}>
				<View style={styles.listItem}>
					<Image
						source={require('../../resources/images/black_car.png')}
						style={styles.listItemImage}
						/>
					<Text
						style={styles.listItemLabel}>
						{rowData.title}
					</Text>
				</View>
			</Touchable>
		);

	}

	_renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {

		return(
			<View key={`${sectionID}-${rowID}`} style={styles.listSeparator}></View>
		);

	}

	render() {
		return (
			<ListView
				style={styles.container}
				dataSource={this.state.dataSource}
				renderRow={this._renderRow.bind(this)}
				renderSeparator={this._renderSeparator}
				/>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	listItem: {
		padding: 15,
		paddingLeft: 25,
		flexDirection: 'row'
	},
	listItemImage: {
		width: 25,
		height: 25
	},
	listItemLabel: {
		flex: 3,
		fontSize: 18,
		color: 'black',
		marginLeft: 20
	},
	listSeparator: {
		flex: 1,
		height: 1,
		backgroundColor: 'lightgray'
	}
});

AppRegistry.registerComponent('General', () => General);
