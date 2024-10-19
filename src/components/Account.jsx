import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUserContext } from "../context/UserContext"; // Import the context

const Account = ({ closeModal, onLogin }) => {
  const { users, setUsers } = useUserContext();
  const [isSignup, setIsSignup] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleOutsideClick = (event) => {
    const modal = document.getElementById("account-modal");
    if (modal && !modal.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    address: Yup.string().required("Address is required"),
  });

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSignup = (values) => {
    setUsers((prevUsers) => [...prevUsers, values]);
    console.log("Signing up:", values);
    setIsSignup(false);
  };

  const handleLogin = (values) => {
    const user = users.find((user) => user.email === values.email && user.password === values.password);

    if (!user) {
      setLoginError("Invalid email or password.");
    } else {
      setLoginError("");
      console.log("Logging in:", values);
      closeModal();
      onLogin(user);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  flex z-50">
      <div
        id="account-modal"
        className="bg-white p-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl  rounded-lg lg:ml-[400px] lg:w-[400px] mx-auto  lg:mt-[100px] h-[500px] mt-12 relative"
      >
        <button
          className="absolute top-1 right-2 text-red-700 font-semibold text-3xl hover:text-gray-800"
          onClick={closeModal}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Account Details</h2>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            address: "",
          }}
          validationSchema={isSignup ? signupSchema : loginSchema}
          onSubmit={(values) => {
            if (isSignup) {
              handleSignup(values);
            } else {
              handleLogin(values);
            }
          }}
        >
          {() => (
            <Form className="space-y-4 ">
              {isSignup ? (
                <>
                  <h3 className="text-lg font-semibold text-center">Signup Form</h3>
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="border border-gray-300 p-2 w-full"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="border border-gray-300 p-2 w-full"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="border border-gray-300 p-2 w-full"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="border border-gray-300 p-2 w-full"
                    />
                    <ErrorMessage name="address" component="div" className="text-red-500" />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded w-full"
                  >
                    Signup
                  </button>
                  <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setIsSignup(false)}
                    >
                      Go to Login
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-center">Login Form</h3>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="border border-gray-300 p-2 w-full"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="border border-gray-300 p-2 w-full"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                  </div>
                  {loginError && (
                    <div className="text-red-500">{loginError}</div>
                  )}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                  >
                    Login
                  </button>
                  <p className="mt-4 text-center">
                    Don't have an account?{" "}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setIsSignup(true)}
                    >
                      Signup
                    </span>
                  </p>
                </>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Account;
