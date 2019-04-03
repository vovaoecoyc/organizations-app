import { createAction } from 'redux-actions';

export const addDepartment = createAction('ADD_DEPARTMENT', (name, id) => ({
  name,
  id,
  employeesList: [],
}));

export const changeDepartment = createAction('CHANGE_DEPARTMENT', (name, id) => ({ name, id }));
export const removeDepartment = createAction('REMOVE_DEPARTMENT', id => ({ id }));
export const addEmployToDepartment = createAction(
  'ADD_EMPLOY_TO_DEPARTMENT',
  (name, idEmploye, idDepart) => ({
    name,
    idEmploye,
    idDepart,
  })
);
export const removeEmploye = createAction('REMOVE_EMPLOYE_FROM_DEPARTMENT', idEmploye => ({
  idEmploye,
}));

export const addEmploye = createAction('ADD_EMPLOYE', (name, id) => ({ name, id }));
export const changeEmploye = createAction('CHANGE_EMPLOYE', (name, id) => ({ name, id }));
