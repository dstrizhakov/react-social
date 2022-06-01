import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../../redux/profile-reducer";
import {Route, Routes, useMatch, useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


const withRouter = WrappedComponent => props => {
    //const params = useParams();
    let match = useMatch("/profile/:userId");
    return (
        <WrappedComponent
            {...props}
            //params={params}
            match={match}
        />
    );
};

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 23982
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
                <Routes>
                    <Route path=":id" element={<Profile {...this.props} profile={this.props.profile}/>}/>
                </Routes>

            </div>

        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

