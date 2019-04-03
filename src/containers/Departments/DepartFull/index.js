import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormAdd from '../../FormAdd';
import { addEmployToDepartment } from '../../../store/actions/departments';
import EmployeesList from '../../EmployeesList';

class DepartFull extends Component {
  render() {
    const {
      department,
      location: {
        state: { id: idDepart },
      },
    } = this.props;
    return (
      <div className="d-flex flex-column w-50 ml-auto mr-auto">
        <div className="mb-2 text-center">Department name: {department[0].name}</div>
        <FormAdd
          actionAddEmployeToDepart={this.props.addEmployToDepartment}
          name="employe"
          idDepart={department[0].id}
          placeholder="Enter name of employe"
        />
        <EmployeesList idDepart={idDepart} employeesList={department[0].employeesList} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  department: state.departments.data.filter(value => value.id === ownProps.location.state.id),
});

const mapDispatchToProps = dispatch => ({
  addEmployToDepartment: (name, idEmploye, idDepart) => {
    dispatch(addEmployToDepartment(name, idEmploye, idDepart));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartFull);
