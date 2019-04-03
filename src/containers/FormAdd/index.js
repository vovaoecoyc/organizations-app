import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';
import crypto from 'crypto';

class FormAdd extends Component {
  state = {
    fieldInput: {
      name: this.props.name,
      type: 'text',
      placeholder: this.props.placeholder,
      value: '',
    },
  };

  handlerChange = e => {
    const { value } = e.target;
    this.setState(prevState => {
      prevState.fieldInput.value = value;
      return prevState;
    });
  };

  handlerSumbit = e => {
    e.preventDefault();
    const { actionAddDepart, actionAddEmployeToDepart, actionAddEmploye, idDepart } = this.props,
      {
        fieldInput: { value },
      } = this.state,
      id = crypto
        .createHash('sha1')
        .update(`${value}${Math.random() * 100}`)
        .digest('hex');

    actionAddEmploye && actionAddEmploye(value, id);
    actionAddDepart && actionAddDepart(value, id);
    actionAddEmployeToDepart && actionAddEmployeToDepart(value, id, idDepart);
    this.setState(prevState => {
      prevState.fieldInput.value = '';
      return prevState;
    });
  };

  render() {
    const { fieldInput } = this.state;
    return (
      <Form
        className="d-flex flex-column mr-auto ml-auto mt-mb-3"
        style={{ width: '400px' }}
        onSubmit={this.handlerSumbit}
      >
        <Input className="mt-3 mb-2" {...fieldInput} onChange={this.handlerChange} />
        <Button
          disabled={!fieldInput.value}
          className=" m-auto btn btn-sm btn-success"
          type="submit"
        >
          Add
        </Button>
      </Form>
    );
  }
}

export default FormAdd;
