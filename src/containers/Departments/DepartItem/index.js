import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import { removeDepartment } from '../../../store/actions/departments';

class DepartItem extends Component {
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
      removeDepartment,
      item: { id },
    } = this.props;
    removeDepartment(id);
  };

  render() {
    const { children, item, ...rest } = this.props;
    return (
      <div
        className="d-flex align-center justify-content-between mt-2 pl-3 pr-3 pt-2 pb-2 rounded-lg"
        style={{ backgroundColor: '#d4edda' }}
      >
        <Link to={{ pathname: `/departments/${+rest.number + 1}`, state: { id: item.id } }}>
          {children}
        </Link>
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
  removeDepartment: id => {
    dispatch(removeDepartment(id));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(DepartItem);
