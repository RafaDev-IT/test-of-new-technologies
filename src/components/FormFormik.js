import React from "react";
import "../App.css";
import { Formik, Form } from "formik"
import TextField from './TextField'
import * as yup from "yup";

 const FormFormik= () => {

  const validation = yup.object().shape({
    firstName: yup.string().required("Campo Requerido"),
    lastName: yup.string().required('Campo Requerido'),
    email: yup.string().email('Debe ser un correo valido').required('Campo Requerido'),
    age: yup.number('Debe ser un numero').positive('Debe ser un numero positivo').integer('Debe ser un numero entero').required('Campo Requerido'),
    password: yup.string().min(4, 'La contraseña debe ser minimo de 4 letras').max(15, 'La contraseña debe ser maximo de 15 letras').required('Campo Requerido'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'Las contraseñas no coincicen'),
  });

  const dataInitialValues={
    firstName: '',
    lastName: '',
    email:'',
    age: '',
    password:'' ,
    confirmPassword: ''
  };
  
  return (
  
  <Formik
  initialValues={dataInitialValues}
  validationSchema={validation}
  onSubmit={values=>{console.log('data enviada',values)}}
  >
    {Formik=>(
    <div className="Form" style={{marginRight:100}}>
      <div className="title">Formulario Formik</div>
      <div className="inputs">
        <Form>
          <TextField label='Nombre' name='firstName' type='text'/>
          <TextField label='Apellido' name='lastName' type='text'/>
          <TextField label='Email' name='email' type='text'/>
          <TextField label='Edad' name='age' type='text'/>
          <TextField label='Contraseña' name='password' type='text'/>
          <TextField label='Repetir contraseña' name='confirmPassword' type='text'/>
          <button style={{margin:25, width:'25%', height:'30px'}} type="submit"> Registrar </button>
          <button style={{width:'25%', height:'30px'}} type="reset"> Limpiar </button>
        </Form>
      </div>
    </div>)}
    </Formik>
    
  );
}

export default FormFormik;
