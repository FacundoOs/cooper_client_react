import React from "react";
import cooperCalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";
import { Button, Message } from 'semantic-ui-react'


const DisplayCooperResult = ({
  distance,
  gender,
  age,
  authenticated,
  entrySaved,
  entryHandler,
}) => {
  const result = cooperCalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  return (
    <>
      {propsPassed && (
  <Message info>
  <p id="cooper-message">
            {age} y/o {gender} running {distance} meters.
          </p>
          <p id="cooper-result">Result: {result}</p>
          {authenticated && !entrySaved ? (

           <Button
              inverted
              color="red"
                            id="save-result"
              onClick={() => saveData(result, age, distance, gender, entryHandler)}
            >
              Save entry
              </Button>
          ) : (
            <p id="response-message">Your entry was saved</p>
          )}
  </Message>
      )}
    </>
  );
};

export default DisplayCooperResult;
