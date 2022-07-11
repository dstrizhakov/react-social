import React from 'react';
import style from '../Posts.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";


const maxLenght300 = maxLenghtCreator(300);
let AddNewPostForm = (props) => {
    return <form className={style.input} onSubmit={props.handleSubmit}>
        <Field name="newPostText" component={Textarea} validate={[required, maxLenght300]}/>
        <button>Add post</button>
    </form>
}
export default reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);