import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmployeesList from '../EmployeesList';
import FormAdd from '../FormAdd';
import { addEmploye } from '../../store/actions/departments';

class Employees extends Component {
  render() {
    const { allEmployees, addEmploye } = this.props;
    // console.log(allEmployees);
    return (
      <div className="w-50 m-auto">
        <FormAdd actionAddEmploye={addEmploye} name="employe" placeholder="Enter name of employe" />
        <EmployeesList employeesList={allEmployees} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addEmploye: (name, id) => {
    dispatch(addEmploye(name, id));
  },
});

const mapStateToProps = state => {
  let allEmployees = [];
  state.departments.data.forEach(value => {
    allEmployees = [...allEmployees, ...value.employeesList];
  });

  allEmployees = [...allEmployees, ...state.departments.employeesWithoutDepart];
  return {
    allEmployees,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
