import React from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    drawerToggleClicked = () => {
        this.setState((prevState) => ({
            showSideDrawer: !prevState.showSideDrawer
        }));
    }
    render = () => (
        <Aux>
            <Toolbar drawerToggleClicked={this.drawerToggleClicked} />
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    );
}

export default Layout;