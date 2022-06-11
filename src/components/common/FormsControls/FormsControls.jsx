import React from "react";
import style from "./FormsControls.module.css"
import {Field} from "redux-form";

const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>{children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl{...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl{...props}><input {...input} {...restProps}/></FormControl>
}
export const createField = (placeholder, validators, name, component, props={}, text = "" ) => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                validate={validators}
                name={name}
                component={component}
                {...props}/>{text}
        </div>)


}