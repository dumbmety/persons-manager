import { createContext } from 'react';

const MyContext = createContext({
  handleAddPerson: () => {},
  handleDeletePerson: () => {},
  handleEditPerson: () => {},
  setPerson: () => {},
  persons: [],
  person: '',
  showPersons: true
});

export default MyContext;
