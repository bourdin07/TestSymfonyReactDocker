import React, { useState } from "react";
import "./login.css";
import { FiLogIn } from "react-icons/fi";
import { services } from "../../..";
import { useDispatch } from "react-redux";
import loading from "../../../hoc/loading/loading";
import { NavLink } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Formik } from "formik";
import { Form, Col, Row, Button } from "react-bootstrap";
import * as Yup from "yup";

const Login = ({ setIsLoading }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const ValidationSchema = Yup.object().shape({
    username: Yup.string().required("L'identifiant est obligatoire"),
    password: Yup.string().required("Le mot de passe est obligatoire"),
  });

  const handleSubmit = (e) => {
    console.log(credentials)
    setIsLoading(true);
    services.authentication
      .login(credentials)
      .then((response) => {
        setIsLoading(false);
        console.log(response)
        dispatch({ type: "CONNECT", token: response.data.token });
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values) => {
          credentials.username = values.username;
          credentials.password = values.password;
          handleSubmit();
        }}
      >
        {({ errors, touched, values, handleSubmit, handleChange }) => (
          <Form>
            <Row>
              <Form.Group
                as={Col}
                controlId="username"
                className="form-group-required"
              >
                <Form.Label>Identifiant</Form.Label>
                <Form.Control
                  name="username"
                  type="username"
                  autoFocus={true}
                  onChange={handleChange("username")}
                  value={values.username}
                  isInvalid={touched.username && !!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                controlId="password"
                className="form-group-required"
              >
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  onChange={handleChange("password")}
                  value={values.password}
                  isInvalid={touched.password && !!errors.password}
                />
                <Form.Text className="text-muted">
                  <AiOutlineQuestionCircle className="btn-icon" />
                  <NavLink exact to="/reset-password">
                    Mot de passe oublié
                  </NavLink>
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mt-3 Standards-buttons-container">
              <Col>
                <Button
                  type="button"
                  variant="outline-info"
                  size="sm"
                  className="btn-validation justify-content-around align-item-baseline StandardForm-submit StandardForm-inline-submit-button d-block"
                  onClick={handleSubmit}
                >
                  <FiLogIn className="btn-icon" />
                  S'identifier
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default loading(Login, false);
