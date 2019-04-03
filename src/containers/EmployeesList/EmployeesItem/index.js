import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import { removeEmploye } from '../../../store/actions/departments';

class EmployeesItem extends Component {
  handlerEdit = () => {
    const {
      changeModalStatus,
      changeEditItem,
      item: { id, name },
    } = this.props;
    changeEditItem(id, name);
    changeModalStatus();
  };

  handlerRemove = () => {
    const {
      removeEmploye,
      item: { id: idEmploye },
    } = this.props;
    removeEmploye(idEmploye);
  };

  render() {
    const { children } = this.props;
    return (
      <div
        className="mt-2 pt-2 pb-2 pl-3 pr-3 rounded-lg d-flex justify-content-between"
        style={{ backgroundColor: '#d4edda' }}
      >
        <div>{children}</div>
        <div>
          <Button onClick={this.handlerEdit} className="btn btn-sm btn-warning">
            Edit
          </Button>
          <Button onClick={this.handlerRemove} className="btn btn-sm btn-danger ml-2">
            Remove
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeEmploye: (idEmploye, idDepart) => {
    dispatch(removeEmploye(idEmploye, idDepart));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(EmployeesItem);
