import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { authUserCheck } from '../../store/actions/auth';

class FormAuth extends Component {
  state = {
    fields: {
      login: {
        name: 'login',
        type: 'text',
        placeholder: 'Enter login',
        value: '',
      },
      password: {
        name: 'password',
        type: 'password',
        placeholder: 'Enter password',
        value: '',
      },
    },
  };

  handlerChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      prevState.fields[name].value = value;
      return prevState;
    });
  };

  handlerSubmit = e => {
    const { authUserCheck } = this.props;
    const { login, password } = this.state.fields;
    e.preventDefault();
    authUserCheck(login.value, password.value);
  };

  render() {
    const { login, password } = this.state.fields;
    const content = this.props.isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <Card className="w-25 ml-auto mr-auto mt-3">
        <CardBody>
          <Form onSubmit={this.handlerSubmit}>
            <FormGroup className="d-flex flex-column justify-content-center">
              <Input onChange={this.handlerChange} {...login} />
              <Input onChange={this.handlerChange} className="mt-3" {...password} />
              <div className="mt-2 ml-auto mr-auto text-danger">{this.props.error}</div>
              <Button type="submit" className="w-35 btn btn-info ml-auto mr-auto mt-3">
                Log In
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
    return content;
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  authUserCheck: (login, password) => {
    dispatch(authUserCheck(login, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormAuth);
