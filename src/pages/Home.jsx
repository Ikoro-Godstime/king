/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Reason from "../components/Reason/Reason";
import Plan from "../components/Plan/Plan";
import Testimonials from "../components/Testimonials/Testimonials";
import Questions from "../components/faq/Questions";
import Forex from "../components/Forex/Forex";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
    const script = document.createElement("script");
    (script.async = true),
      (script.src = "//code.tidio.co/8izwkcoea2ynh8qhsvgxuiqjrrpohphi.js");
    document.body.append(script);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <About />
      <Forex />
      <Plan />
      <Testimonials />
      <Questions />
      <Footer />
    </React.Fragment>
  );
};

export default Home;