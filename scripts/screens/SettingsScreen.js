import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { connect } from "react-redux";

import { setColor, overrideState } from "../actions/Actions";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

class SettingsScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stateValue: JSON.stringify(this.props.state)
		};
		this.overrideState = this.overrideState.bind(this);
	}

	overrideState() {
		if (this.state.stateValue == "") return;
		this.props.overrideState(JSON.parse(this.state.stateValue));
	}

	render() {
		return (
			<View
				style={[
					styles.mainContainer,
					{
						backgroundColor: this.props.preferences.color
							.backgroundColor
					}
				]}
			>
				<TouchableOpacity
					onPress={() =>
						this.setState({
							stateValue: JSON.stringify(this.props.state)
						})
					}
				>
					<Text style={styles.mainLabel}>SETTINGS</Text>
				</TouchableOpacity>
				<ScrollView>
					<ColorLayout
						text="Default Color (Blue): "
						tintColor={Colors.defaultTint.tintColor}
						setColor={this.props.setColor}
						textColor={this.props.preferences.color.textColor}
					/>
					<View style={styles.verticalSep} />
					<ColorLayout
						text="Teal: "
						tintColor={Colors["#60ffaf"].tintColor}
						setColor={this.props.setColor}
						textColor={this.props.preferences.color.textColor}
					/>
					<View style={styles.verticalSep} />
					<ColorLayout
						text="Green: "
						tintColor={Colors["#60ff60"].tintColor}
						setColor={this.props.setColor}
						textColor={this.props.preferences.color.textColor}
					/>
					<View style={styles.verticalSep} />
					<ColorLayout
						text="Light Green: "
						tintColor={Colors["#cfff60"].tintColor}
						setColor={this.props.setColor}
						textColor={this.props.preferences.color.textColor}
					/>
					<View style={styles.verticalSep} />
					<ColorLayout
						text="Orange: "
						tintColor={Colors["#ffcf60"].tintColor}
						setColor={this.props.setColor}
						textColor={this.props.preferences.color.textColor}
					/>
					<View style={styles.verticalSep} />
					<ColorLayout
						text="Red: "
						tintColor={Colors["#ff6060"].tintColor}
						setColor={this.props.setColor}
						textColor={this.props.preferences.color.textColor}
					/>
					<View style={styles.verticalSep} />
					<ColorLayout
						text="Gray: "
						tintColor={Colors["#aaaaaa"].tintColor}
						setColor={this.props.setColor}
						textColor={this.props.preferences.color.textColor}
					/>
					<View style={styles.verticalSep} />
					<TextInput
						style={styles.inputBox}
						multiline={true}
						keyboardAppearance="dark"
						value={this.state.stateValue}
						onChangeText={text =>
							this.setState({ stateValue: text })
						}
					/>
					<TouchableOpacity
						style={{
							...styles.submitTO,
							backgroundColor: this.props.preferences.color
								.tintColor
						}}
						onPress={this.overrideState}
					>
						<Text style={styles.subLabel}>SUBMIT</Text>
					</TouchableOpacity>
					<View style={styles.bottomGap} />
				</ScrollView>
			</View>
		);
	}
}

class ColorLayout extends React.Component {
	constructor(props) {
		super(props);
		this.handlePress = this.handlePress.bind(this);
	}

	handlePress() {
		this.props.setColor(this.props.tintColor);
	}

	render() {
		return (
			<View style={styles.horizontalContainer}>
				<View style={styles.horizontalGap} />
				<TouchableOpacity
					style={[
						styles.square,
						{ backgroundColor: this.props.tintColor }
					]}
					onPress={this.handlePress}
				/>
				<View style={styles.horizontalGap} />
				<Text
					style={{
						...styles.label,
						color: this.props.textColor
					}}
				>
					{this.props.text}
					{this.props.tintColor}
				</Text>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	preferences: state.preferences,
	state: state
});

const mapDispatchToProps = dispatch => ({
	setColor: color => dispatch(setColor(color)),
	overrideState: newState => dispatch(overrideState(newState))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: Colors.defaultTint.backgroundColor
	},
	horizontalContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		maxHeight: Layout.width * 0.15
	},
	horizontalGap: {
		width: Layout.width * 0.1
	},
	verticalGap: {
		height: Layout.width * 0.1
	},
	bottomGap: {
		height: Layout.height * 0.35
	},
	verticalSep: {
		height: Layout.width * 0.05,
		marginTop: Layout.width * 0.05,
		marginHorizontal: Layout.width * 0.075,
		borderTopWidth: 1,
		borderColor: "white"
	},
	label: {
		fontSize: 20,
		color: Colors.defaultTint.textColor
	},
	square: {
		width: Layout.width * 0.15,
		height: Layout.width * 0.15,
		borderColor: "white",
		borderWidth: 1
	},
	inputBox: {
		borderColor: "white",
		borderWidth: 2,
		alignSelf: "center",
		width: Layout.width * 0.85,
		height: Layout.height * 0.3,
		paddingVertical: 3,
		paddingHorizontal: 5,
		marginBottom: 20,
		color: "white",
		fontSize: 24,
		fontWeight: "300"
	},
	submitTO: {
		borderColor: "white",
		borderWidth: 2,
		alignSelf: "center",
		width: Layout.width * 0.5,
		height: Layout.height * 0.05,
		marginHorizontal: Layout.width * 0.45,
		backgroundColor: Colors.defaultTint.tintColor,
		justifyContent: "center"
	},
	mainLabel: {
		fontSize: 48,
		fontWeight: "200",
		color: "white",
		alignSelf: "center",
		marginVertical: 10
	},
	subLabel: {
		fontSize: 36,
		fontWeight: "200",
		color: "white",
		alignSelf: "center",
		marginVertical: 5
	}
});
