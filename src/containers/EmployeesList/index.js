import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmployeesItem from './EmployeesItem';
import FormEdit from '../FormEdit';
import { changeEmploye } from '../../store/actions/departments';

class EmployeesList extends Component {
  state = {
    editItem: {
      id: null,
      value: '',
    },
    openModal: false,
  };

  handlerChangeEditItem = (value, id) => {
    this.props.changeEmploye(value, id);
  };

  changeStateActiveEdit = (id, value) => {
    this.setState(prevState => {
      prevState.editItem.id = id;
      prevState.editItem.value = value;
      return prevState;
    });
  };

  changeModalStatus = () => {
    this.setState(prevState => {
      prevState.openModal = !prevState.openModal;
      return prevState;
    });
  };

  render() {
    const { employeesList, idDepart } = this.props,
      content =
        employeesList.length > 0 ? (
          <div className="d-flex flex-column">
            {employeesList.map((value, i) => (
              <EmployeesItem
                idDepart={idDepart}
                key={value.id}
                item={value}
                changeModalStatus={this.changeModalStatus}
                changeEditItem={this.changeStateActiveEdit}
              >
                {value.name}
              </EmployeesItem>
            ))}
            <FormEdit
              action={this.handlerChangeEditItem}
              openModal={this.state.openModal}
              changeModalStatus={this.changeModalStatus}
              placeholder="Enter name of department"
              value={this.state.editItem.value}
              id={this.state.editItem.id}
            />
          </div>
        ) : (
          <div className="mt-3 text-secondary text-center">Employees list is empty</div>
        );
    return content;
  }
}

const mapDispatchToProps = dispatch => ({
  changeEmploye: (name, id) => {
    dispatch(changeEmploye(name, id));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(EmployeesList);
