import React from "react";
import {ErrorMessage , useField} from 'formik'
function TextField({label,...props}) {
    const [field, meta]=useField(props)
    return (
    <div>
        <input placeholder={label} {...field} {...props}/><br></br>
        <ErrorMessage name={field.name}/>
    </div>)
}
export default TextField