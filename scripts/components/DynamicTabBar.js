import React from 'react'
import { connect } from 'react-redux';
import { BottomTabBar } from 'react-navigation-tabs';

class DynamicTabBar extends React.Component {
    render(){
        return (
            <BottomTabBar
                {...this.props}
                style={{
                    backgroundColor: this.props.color.tabBar
                }}
            />
        )
    }
}

const mapStateToProps = state => ({
	color: state.preferences.color
})

export default connect(mapStateToProps)(DynamicTabBar)