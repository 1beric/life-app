import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";

function TabBarIcon(props) {
    return (
        <Ionicons
            name={props.name}
            size={26}
            style={{ marginBottom: -3 }}
            color={props.focused ? props.selected : props.unselected}
        />
    );
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    selected: state.preferences.color.tabIconSelected,
    unselected: state.preferences.color.tabIconDefault
});

export default connect(mapStateToProps)(TabBarIcon)