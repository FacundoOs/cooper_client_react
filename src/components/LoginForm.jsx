import React from "react";
import { Segment, Form, Button, Grid} from "semantic-ui-react";


const LoginForm = ({ submitFormHandler }) => {
  return (
    <Segment inverted id="algo">
    <Form inverted
    onSubmit={submitFormHandler} id="login-form">

      <Form.Input fluid label='Email' placeholder='Email'
      name="email" type="email" id="email"/>

      <Form.Input fluid label='Password' placeholder='Password' 
      name="password" type="password" id="password"/>

      <Button type='submit' id="submit">Submit</Button>
    </Form>

    </Segment>

  );
};

export default LoginForm;
