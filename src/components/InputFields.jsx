import React from "react";
import { Segment, Form } from "semantic-ui-react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <Segment inverted >
      <Form inverted>
      <Form.Group widths='equal'>
      <label>Distance</label>
      <input 
      onChange={onChangeHandler} name="distance" id="distance"></input>

      <select onChange={onChangeHandler} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

      <label>Age</label>
      <input onChange={onChangeHandler} name="age" id="age"></input>
      </Form.Group>
      </Form>
    </Segment>
  );
};

export default InputFields;