import React from "react";
import { Segment, Form } from "semantic-ui-react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <Segment inverted>
      <Form inverted>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Distance"
            placeholder="meters"
            onChange={onChangeHandler}
            name="distance"
            id="distance"
          />
          <Form.Field
            label="Sex"
            control="select"
            onChange={onChangeHandler}
            name="gender"
            id="gender"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </Form.Field>
          <Form.Input
            fluid
            label="Age"
            placeholder="years"
            onChange={onChangeHandler}
            name="age"
            id="age"
          />
        </Form.Group>
      </Form>
    </Segment>
  );
};

export default InputFields;
