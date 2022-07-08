import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Form from "../components/login-form/Form";
import Navbar from "../components/Navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <React.Fragment>
      <Navbar />
      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default Login;
