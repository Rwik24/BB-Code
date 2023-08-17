import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, db } from "../firebase"; // Import named exports
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const [registrationError, setRegistrationError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const name = signupNameRef.current.value;
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;

    try {
      const authInstance = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);

      // Store additional user information in Firestore
      await db.collection("users").doc(userCredential.user.uid).set({
        name: name,
        email: email,
      });

      console.log("Registration successful");
    } catch (error) {
      console.error("Registration error:", error.message);
      setRegistrationError("Registration failed");
    }
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
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
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
