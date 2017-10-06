/**
 * Since this is a container, we want to set up the state to props and dispatch to
 * props for the TabBar presentational component.
 */
import React, {Component} from "react";
import {connect} from "react-redux";

import TabBar from "./TabBar";

import {selectCurrentTab} from "./tabSelectors";
import {selectTab} from "./tabActions";

const mapState = (state) => {
    const currentTab = selectCurrentTab(state);

    return {currentTab};
}

const actions = {onTabClick : selectTab};

export default connect(mapState, actions)(TabBar);