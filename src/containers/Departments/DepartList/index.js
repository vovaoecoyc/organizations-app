import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import FormEdit from '../../FormEdit';
import FormAdd from '../../FormAdd';
import DepartItem from '../DepartItem';
import { addDepartment, changeDepartment } from '../../../store/actions/departments';

class DepartList extends Component {
  state = {
    editItem: {
      id: null,
      value: '',
    },
    openModal: false,
  };

  handlerChangeEditItem = (value, id) => {
    this.props.changeDepartment(value, id);
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
    const { departments } = this.props;
    const content =
      departments.length > 0 ? (
        <Fragment>
          <FormAdd
            actionAddDepart={this.props.addDepartment}
            name="department"
            placeholder="Enter department name"
          />

          <div className="d-flex flex-column w-50 m-auto">
            {departments.map((value, i) => (
              <DepartItem
                changeModalStatus={this.changeModalStatus}
                changeEditItem={this.changeStateActiveEdit}
                item={value}
                number={i}
                key={value.id}
              >
                {value.name}
              </DepartItem>
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
        </Fragment>
      ) : (
        <Fragment>
          <FormAdd
            actionAddDepart={this.props.addDepartment}
            name="department"
            placeholder="Enter department name"
          />
          <div className="mt-3 text-secondary text-center">Departments list is empty</div>
        </Fragment>
      );
    return content;
  }
}

const mapDispatchToProps = dispatch => ({
  addDepartment: (name, id) => {
    dispatch(addDepartment(name, id));
  },

  changeDepartment: (name, id) => {
    dispatch(changeDepartment(name, id));
  },
});

const mapStateToProps = state => ({
  departments: state.departments.data,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartList);
