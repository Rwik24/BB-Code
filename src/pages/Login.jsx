import React, { useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from "../firebase"; // Import named exports
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const [loginError, setLoginError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = loginNameRef.current.value;
    const password = loginPasswordRef.current.value;

    try {
      const authInstance = getAuth(app);
      await signInWithEmailAndPassword(authInstance, email, password);
      console.log("Login successful");

      // Redirect using window.location or any suitable method
      window.location.href = "/dashboard"; // Redirect to dashboard or desired page
    } catch (error) {
      console.error("Login error:", error.message);
      setLoginError("Invalid email or password");
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
                {loginError && <p>{loginError}</p>}
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
