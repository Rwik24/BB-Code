import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../firebase"; // Import named exports
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Register = () => {
  const signupNameRef = useRef();
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const reenterPasswordRef = useRef();
  const phoneNumberRef = useRef();
  const otpRef = useRef();

  const [registrationError, setRegistrationError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const name = signupNameRef.current.value;
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;
    const reenteredPassword = reenterPasswordRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const otp = otpRef.current.value;

    if (password !== reenteredPassword) {
      setRegistrationError("Passwords do not match");
      return;
    }

    try {
      const authInstance = getAuth(app);

      // Register the user with email and password
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);

      // Store additional user information in Firestore
      await db.collection("users").doc(userCredential.user.uid).set({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        // You can store additional user data as needed
      });

      console.log("Registration successful");
    } catch (error) {
      console.error("Registration error:", error.message);
      setRegistrationError("Registration failed");
    }
  };

  // Function to send OTP (You should implement this)
  const sendOTP = async () => {
    // Implement OTP sending logic using a service like Twilio or Firebase Auth
    // Set otpSent to true when OTP is successfully sent
    setOtpSent(true);
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input type="text" placeholder="Full name" required ref={signupNameRef} />
                </div>
                <div className="form__group">
                  <input type="email" placeholder="Email" required ref={signupEmailRef} />
                </div>
                <div className="form__group">
                  <input type="password" placeholder="Password" required ref={signupPasswordRef} />
                </div>
                <div className="form__group">
                  <input type="password" placeholder="Re-enter Password" required ref={reenterPasswordRef} />
                </div>
                <div className="form__group">
                  <input type="tel" placeholder="Phone Number" required ref={phoneNumberRef} />
                </div>
                {otpSent ? (
                  <div className="form__group">
                    <input type="text" placeholder="Enter OTP" required ref={otpRef} />
                  </div>
                ) : (
                  <button type="button" className="addTOCart__btn" onClick={sendOTP}>
                    Send OTP
                  </button>
                )}
                {otpSent && (
                  <button type="submit" className="addTOCart__btn">
                    Sign Up
                  </button>
                )}
                {registrationError && <p>{registrationError}</p>}
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
