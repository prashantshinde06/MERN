import "bootstrap/scss/bootstrap.scss";
import "../userlogin/UserLogin.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";


function UserLogin() {
  const navigate = useNavigate();
  const userLoginData = (formData: any) => {
    const hashPass = CryptoJS.AES.encrypt(formData.userPass, 'secret key 123').toString();
    const loginData  = {...formData,userPass:hashPass}
    console.log(hashPass, "userlogindata");
    axios
      .post("http://localhost:4200/userLogin",loginData)
      .then((response: any) => {
        console.log(response);
        if (response.data.status === false) {
          toast.error("Invalid data..", {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }else{
          localStorage.setItem("login","true")
          navigate("/loginMessage")
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const initialValues = {
    userEmail: "",
    userPass: "",
  };
  const onSubmit = (values: any) => {
    // console.log("form data", values);
    userLoginData(values);
  };
  const validationSchema = Yup.object({
    userEmail: Yup.string()
      .email("Invalid email address format")
      .required("Enter User Email-ID"),
    userPass: Yup.string()
      .min(6, "Password must be 6 characters minimum")
      .required("Enter User Password"),
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="form-card">
            <h3 className="form-title">Log In</h3>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {({ touched, errors, values }) => (
                <Form>
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
                  <div className="mt-3 d-flex justify-content-end">
                    <a href="./" className="forgot-pass">
                      Forgot Password
                    </a>
                  </div>
                  <button type="submit" className=" btn submit-btn">
                    LOGIN
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

export default UserLogin;
