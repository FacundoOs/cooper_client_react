import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from "./modules/auth";
import DisplayPerformanceData from "./components/DisplayPerformanceData";
import {
  Button,
  Divider,
  Grid,
  Image,
  Segment,
} from "semantic-ui-react";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false,
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };

  render() {
    let performanceDataIndex;
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <Button
              color="blue"
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </Button>
            <p id="message">{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <Segment inverted textAlign="center">
            <p id="message">
              Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}
            </p>
          </Segment>
        );
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <Grid columns={2} divided>
              <Grid.Row >
                <Grid.Column verticalAlign='middle'>
                  <DisplayPerformanceData 
                    updateIndex={this.state.updateIndex}
                    indexUpdated={() => this.setState({ updateIndex: false })}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image src="https://www.thewellst.com/wp-content/uploads/2018/07/Cooper-Test-Results-Table.jpg" />
                </Grid.Column>
              </Grid.Row>
              <Button
                color="blue"
                onClick={() => this.setState({ renderIndex: false })}
              >
                Hide past entries
              </Button>
            </Grid>
          );
        } else {
          performanceDataIndex = (
            <Button
              color="blue"
              id="show-index"
              onClick={() => this.setState({ renderIndex: true })}
            >
              Show past entries
            </Button>
          );
        }
        break;
      default:
        break;
    }
    return (
      <>
        <h1>Cooper Test</h1>
        <Divider section />

        <InputFields onChangeHandler={this.onChangeHandler} />
        {renderLogin}

        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={() =>
            this.setState({ entrySaved: true, updateIndex: true })
          }
        />
        {performanceDataIndex}
      </>
    );
  }
  onLogin = async (e) => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };
}

export default App;
