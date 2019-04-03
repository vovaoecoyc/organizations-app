import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldInput: {
        name: 'name',
        type: 'text',
        placeholder: this.props.placeholder,
        value: this.props.value,
      },
      initRender: true,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.fieldInput.value && prevState.initRender) {
      prevState.fieldInput.value = nextProps.value;
      prevState.initRender = false;
      return prevState;
    }
    return null;
  }

  closeModal = () => {
    this.props.changeModalStatus();
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
    const { action, changeModalStatus } = this.props,
      { value } = this.state.fieldInput;
    action(value, this.props.id);
    changeModalStatus();
  };

  render() {
    const { fieldInput } = this.state;
    return (
      <Modal style={customStyles} onRequestClose={this.closeModal} isOpen={this.props.openModal}>
        <Form onSubmit={this.handlerSumbit} className="d-flex flex-column justify-content-center">
          <Input {...fieldInput} onChange={this.handlerChange} />
          <Button
            type="submit"
            disabled={this.state.fieldInput.value ? false : true}
            className="ml-auto mr-auto mt-2 btn btn-sm btn-success"
          >
            Save
          </Button>
        </Form>
      </Modal>
    );
  }
}

const customStyles = {
  content: {
    width: '400px',
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default FormEdit;
