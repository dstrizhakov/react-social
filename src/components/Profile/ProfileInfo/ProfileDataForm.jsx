import style from "./ProfileInfo.module.css";
import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {connect} from "react-redux";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return   <form  onSubmit={()=>{}}>
        <div><button onClick={handleSubmit}>Save</button></div>
            { error && <div className={style.formSummaryError}>
                {error}
            </div>}
        <div className={style.name}>
            {createField("Full name", [], "fullName", Input)}
        </div>
        <div>
            <b>Looking for a job</b>:{createField("", [], "lookingForAJob", Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills</b>:{createField("My professional skills", [], "lookingForAJobDescription", Textarea)}
        </div>
        <div>
            <b>About me</b>:{createField("About me", [], "aboutMe", Textarea)}
        </div>
            <div className={style.contacts}>
                <div>
                    <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={style.contact}>
                    <b> {key}: {createField(key, [], "contacts." + key, Input)}</b>
                    </div>
                })}
                </div>
            </div>
        </form>
}





const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'
}) (ProfileDataForm);


export default ProfileDataFormReduxForm

