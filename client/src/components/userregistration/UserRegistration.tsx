import "bootstrap/scss/bootstrap.scss";
import UserRegistrationImg from "../../assets/images/user-registration.jpg"
import "../userregistration/UserRegistration.scss";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import CryptoJS from "crypto-js";
// import bcrypt from "bcrypt";

function UserRegistration() {
  const saveUserData = (formData: any) => {
    // const saltRounds = 10;
    // const salt = bcrypt.genSaltSync(saltRounds);
    // const hashPass = bcrypt.hashSync(formData.userPass, salt);
    const hashPass = CryptoJS.AES.encrypt(formData.userPass, 'secret key 123').toString();
    const userData  = {...formData,userPass:hashPass}
    
    axios
      .post("http://localhost:4200/insertData",userData)
      .then((response: any) => {
        if (response.data.status === false) {
          toast.error("User Email Already Exist..", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          successMsg();
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();
  const successMsg = () => {
    toast.success(
      `Thanks for signing up...
    Please login your account`,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    setTimeout(() => {
      navigate("/login");
    });
  };
 

  const initialValues = {
    userName: "",
    userEmail: "",
    userPass: "",
    userRePass: "",
  };
  const onSubmit = (values: any) => {
    const { userName, userEmail, userPass } = values;
    saveUserData({ userName, userEmail, userPass });
  };
  const validationSchema = Yup.object({
    userName: Yup.string().required("Enter Valid User Name"),
    userEmail: Yup.string()
      .email("Invalid email address format")
      .required("Enter User Email-ID"),
    userPass: Yup.string()
      .min(6, "Password must be 6 characters minimum")
      .required("Enter User Password"),
    userRePass: Yup.string()
      .required("Enter User Password")
      .oneOf([Yup.ref("userPass"), null], "Passwords must match"),
  });
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-lg-5 col-md-6 col-sm-12 d-none d-lg-block d-md-block">
          <img
            src={UserRegistrationImg}
            className="form-bg-img"
            alt="NoImage"
          />
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 bg-light">
          <div className="form-card">
            <h3 className="form-title">Sign up</h3>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {({ touched, errors, values }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="userName" className="form-label">
                      Username
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text input-username-icon "></span>
                      </div>
                      <Field
                        type="text"
                        id="userName"
                        name="userName"
                        className={`form-input form-control ${
                          touched.userName && errors.userName
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Enter Valid Name"
                      />
                    </div>
                    <ErrorMessage
                      component="div"
                      name="userName"
                      className="error-msg"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userEmail" className="form-label">
                      Email
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text input-useremail-icon "></span>
                      </div>
                      <Field
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        className={`form-input form-control ${
                          touched.userEmail && errors.userEmail
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Enter Valid Email"
                      />
                    </div>
                    <ErrorMessage
                      component="div"
                      name="userEmail"
                      className="error-msg"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userPass" className="form-label">
                      Password
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text input-userpass-icon "></span>
                      </div>
                      <Field
                        type="password"
                        id="userPass"
                        name="userPass"
                        className={`form-input form-control ${
                          touched.userPass && errors.userPass
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Password"
                      />
                    </div>
                    <ErrorMessage
                      component="div"
                      name="userPass"
                      className="error-msg"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userRePass" className="form-label">
                      Confirm Password
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text input-user-re-pass-icon "></span>
                      </div>
                      <Field
                        type="password"
                        id="userRePass"
                        name="userRePass"
                        className={`form-input form-control ${
                          touched.userRePass && errors.userRePass
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Confirm Password"
                      />
                    </div>
                    <ErrorMessage
                      component="div"
                      name="userRePass"
                      className="error-msg"
                    />
                  </div>
                  <button
                    type="submit"
                    className=" btn submit-btn"
                    onClick={() =>
                      `${
                        values.userName &&
                        values.userEmail &&
                        values.userPass === values.userRePass &&
                        values.userRePass === values.userPass
                      }`
                    }
                  >
                    Register
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
