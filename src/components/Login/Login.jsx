import React from "react";
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {
return <form  onSubmit={props.handleSubmit}>
    <div>
        <Field placeholder={"Login"} validate={[required]} name={"login"} component={Input}/>
    </div>
    <div>
        <Field placeholder={"Password"} validate={[required]} name={"password"} component={Input}/>
    </div>
        <div>
            <Field component={Input} validate={[required]} name={"rememberMe"} type="checkbox"/> Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}
const Login = () => {
    const onSubmit = (formData) =>{
        console.log (formData);
    }
    return <div className={style.wrapper}>
        <h3>Login</h3>
       <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const LoginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm)
export default Login;