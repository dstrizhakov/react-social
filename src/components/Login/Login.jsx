import React from "react";
import style from './Login.module.css';
import {reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
return <form  onSubmit={handleSubmit}>
        {createField("Email",[required],"email", Input)}
        {createField("Password",[required],"password", Input, {type:"password"})}
        {createField(null,[],"rememberMe", Input, {type:"checkbox"}, "Remember me")}

    {captchaUrl && <img src={captchaUrl} />}
    {captchaUrl && createField("Antibot symbols",[required],"captcha", Input, { })}
    { error && <div className={style.formSummaryError}>
        {error}
    </div>
    }
        <div>
            <button>Login</button>
        </div>
    </form>
}
const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login (formData.email,formData.password, formData.rememberMe, formData.captcha);
    }
    if(props.isAuth) {
        return <Navigate replace to="/profile/:userId" />;
    }
    return <div className={style.wrapper}>
        <h3>Login</h3>
       <LoginReduxForm onSubmit={onSubmit} captchaUrl = {props.captchaUrl}/>
    </div>
}
const LoginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm)

let mapStateToProps = (state) =>({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);