import React from "react";
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router";

const LoginForm = (props) => {
return <form  onSubmit={props.handleSubmit}>
    <div>
        <Field placeholder={"Email"} validate={[required]} name={"email"} component={Input}/>
    </div>
    <div>
        <Field placeholder={"Password"} validate={[required]} type={"password"} name={"password"} component={Input}/>
    </div>
        <div>
            <Field component={Input}  name={"rememberMe"} type="checkbox"/> Remember me
        </div>
    { props.error && <div className={style.formSummaryError}>
        {props.error}
    </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}
const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login (formData.email,formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return <Navigate replace to="/dialogs" />;
    }
    return <div className={style.wrapper}>
        <h3>Login</h3>
       <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const LoginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm)

let mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);