import React from "react";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import style from "../Dialogs.module.css";


const maxLenght50 = maxLenghtCreator(50);

const AddMessageForm = (props) => {
    return <form className={style.input} onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
               validate={[required, maxLenght50]}/>
        <button>Send</button>
    </form>
}
export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)