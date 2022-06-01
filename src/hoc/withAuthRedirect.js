import {Navigate} from "react-router";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedidectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate replace to="/login" />;
            return <Component{...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedidectComponent);
    return ConnectedAuthRedirectComponent;
}