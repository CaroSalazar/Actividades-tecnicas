import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { swal } from "../utils/swal";
import "../styles/form.styles.css";

export const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    textarea: "",
  };

  const required = "Required";

  const validationSchema = () =>
    Yup.object().shape({
      name: Yup.string()
        .min(4, "La cantidad mínima de caracteres es 4")
        .matches(
          /^[aA-zZ\s]+$/,
          "El nombre de usuario debe contener solo letras"
        )
        .required(required),
      email: Yup.string().email("Debe ser un email válido").required(required),
      password: Yup.string()
        .min(6, "La cantidad mínima de caracteres es 6")
        .matches(
          /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/,
          "Debe contener al menos 1 mayúscula, 1 minúscula y 1 número"
        )
        .required(required),
    });

  const onSubmit = (values) => {
    swal(values);
    resetForm();
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  } = formik;

  return (
    <>
      <div className="auth">
        <form onSubmit={handleSubmit}>
          <h1>Form</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Woody Allen"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              className={errors.name && touched.name ? "error" : ""}
            />

            {errors.name && touched.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="correo@correo.com"
              onChange={handleChange}
              value={values.email}
              className={errors.email && touched.email ? "error" : ""}
              onBlur={handleBlur}
            />

            {errors.email && touched.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="provide a password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              className={errors.password && touched.password ? "error" : ""}
            />

            {errors.password && touched.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          <div>
            <label htmlFor="textarea">Text Area</label>
            <textarea
              name="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.textarea}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
