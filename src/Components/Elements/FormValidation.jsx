import React from "react";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
const FormValidation = () => {

    const defaultvalue={
        name: "",
        email: "",
        password: "",
        cpassword:""
    }
    const validation=yup.object().shape({
        name:yup.string().max(20, "Max character should be 20").required("Please enter name"),
        email:yup.string().email("invalid email").required("Enter an email"),
        password:yup.string().min(6, 'Must be at least 6 charaters').required('Password Required'),
        cpassword:yup.string().oneOf([yup.ref('password'), null] , 'password must be matched').required("Confirm password required")
    });
    
    const handleSubmit=(values)=>{
        console.log("Values", values )
    }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <Formik initialValues={defaultvalue}
            validationSchema={validation}
            onSubmit={handleSubmit}
            >
            <Form>
                <Field type="text" name="name" className="mt-5 border rounded-1" placeholder="Enter name"/><br/>
                <p className="text-danger"><ErrorMessage name="name" className="mt-1"/></p>
                <Field type="email" name="email" className="mt-2 border rounded-1" placeholder="Enter email"/><br/>
                <p className="text-danger"><ErrorMessage name="email" className="mt-1"/></p>
                <Field type="password" name="password" className="mt-2 border rounded-1" placeholder="Enter Password"/><br/>
                <p className="text-danger"><ErrorMessage name="password" className="mt-1"/></p>
                <Field type="password" name="cpassword" className="mt-2 border rounded-1" placeholder="Enter Password"/><br/>
                <p className="text-danger"><ErrorMessage name="cpassword" className="mt-1"/></p>
                <button type="submit" className="btn btn-outline-success mt-2">Submit</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormValidation
