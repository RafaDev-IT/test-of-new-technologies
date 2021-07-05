import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SaveExcel from 'exceljs-export'
import axios from 'axios'

const schema = yup.object().shape({
  firstName: yup.string().required("Campo Requerido"),
  lastName: yup.string().required('Campo Requerido'),
  email: yup.string().email('Debe ser un correo valido').required('Campo Requerido'),
  age: yup.number('Debe ser un numero').positive('Debe ser un numero positivo').integer('Debe ser un numero entero').required('Campo Requerido'),
  password: yup.string().min(4, 'La contraseña debe ser minimo de 4 letras').max(15, 'La contraseña debe ser maximo de 15 letras').required('Campo Requerido'),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'Las contraseñas no coincicen'),
});

function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = () => {
    alert('Registrado')
    console.log('data',data)
  };
  return (
    <div className="Form">
      <div className="title">Formulario YUP</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="firstName"
            ref={register}
            placeholder="First Name..."
          />
          <p> {errors.firstName?.message} </p>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name..."
            ref={register}
          />
          <p> {errors.lastName?.message} </p>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            ref={register}
          />
          <p> {errors.email?.message} </p>
          <input type="text" name="age" placeholder="Age..." ref={register} />
          <p> {errors.age?.message} </p>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            ref={register}
          />
          <p> {errors.password?.message} </p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password..."
            ref={register}
          />
          <p> {errors.confirmPassword && "Las contraseñas no coinciden!"} </p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
