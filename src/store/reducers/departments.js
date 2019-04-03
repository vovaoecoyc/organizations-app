import { handleActions } from 'redux-actions';

import * as departmentActions from '../actions/departments';

const initialState = {
  data: [],
  employeesWithoutDepart: [],
};

const reducer = handleActions(
  {
    [departmentActions.addDepartment](state, action) {
      const newData = [...state.data];
      newData.push(action.payload);
      return { ...state, data: newData };
    },

    [departmentActions.changeDepartment](state, action) {
      const newData = state.data.map(value => {
        value.id === action.payload.id && (value.name = action.payload.name);
        return value;
      });
      return { ...state, data: newData };
    },

    [departmentActions.removeDepartment](state, action) {
      const newData = state.data.filter(value => {
        return value.id === action.payload.id ? false : true;
      });
      return { ...state, data: newData };
    },

    [departmentActions.addEmployToDepartment](state, action) {
      const newData = state.data.map(value => {
        if (value.id === action.payload.idDepart) {
          let newEmployeesList = [...value.employeesList];
          newEmployeesList.push({ id: action.payload.idEmploye, name: action.payload.name });
          value.employeesList = newEmployeesList;
        }
        return value;
      });
      return { ...state, data: newData };
    },

    [departmentActions.removeEmploye](state, action) {
      const newData = state.data.filter(value => {
        const newEmployeList = value.employeesList.filter(value => {
          return !(value.id === action.payload.idEmploye);
        });
        value.employeesList = newEmployeList;
        return value;
      });

      const newEmployeesWithoutDepart = state.employeesWithoutDepart.filter(value => {
        return !(value.id === action.payload.idEmploye);
      });
      return { ...state, data: newData, employeesWithoutDepart: newEmployeesWithoutDepart };
    },

    [departmentActions.addEmploye](state, action) {
      const newEmployeesWithoutDepart = [...state.employeesWithoutDepart];
      newEmployeesWithoutDepart.push(action.payload);
      return { ...state, employeesWithoutDepart: newEmployeesWithoutDepart };
    },

    [departmentActions.changeEmploye](state, action) {
      const newData = state.data.map(value => {
          let newEmployeesList = value.employeesList.map(value => {
            value.id === action.payload.id && (value.name = action.payload.name);
            return value;
          });
          value.employeesList = newEmployeesList;
          return value;
        }),
        newEmployeesWithoutDepart = state.employeesWithoutDepart.map(value => {
          value.id === action.payload.id && (value.name = action.payload.name);
          return value;
        });
      return { ...state, data: newData, employeesWithoutDepart: newEmployeesWithoutDepart };
    },
  },
  initialState
);

export default reducer;
