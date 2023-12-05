import React, { useRef, useState } from "react";
import { getAuth, signInWithPhoneNumber } from 'firebase/auth';
import { app } from "../firebase";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const phoneNumberRef = useRef();
  const otpRef = useRef();

  const [loginError, setLoginError] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const sendOTP = async () => {
    const phoneNumber = phoneNumberRef.current.value;
    const authInstance = getAuth(app);

    try {
      const result = await signInWithPhoneNumber(authInstance, phoneNumber);
      setLoginError(null); // Clear any previous error
      setConfirmationResult(result);
    } catch (error) {
      console.error("OTP sending error:", error.message);
      setLoginError("Error sending OTP");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const code = otpRef.current.value;
      await confirmationResult.confirm(code);
      console.log("Login successful");

      // Redirect using window.location or any suitable method
      window.location.href = "/dashboard"; // Redirect to dashboard or desired page
    } catch (error) {
      console.error("Login error:", error.message);
      setLoginError("Invalid OTP");
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
                    type="tel"
                    placeholder="Phone Number"
                    required
                    ref={phoneNumberRef}
                  />
                </div>
                <button type="button" className="addTOCart__btn" onClick={sendOTP}>
                  Send OTP
                </button>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    required
                    ref={otpRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Verify OTP
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
