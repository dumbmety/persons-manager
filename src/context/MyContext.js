import { createContext } from 'react';

const MyContext = createContext({
  handleAddPerson: () => {},
  handleDeletePerson: () => {},
  handleNameChange: () => {},
  setPerson: () => {},
  persons: [],
  person: '',
  showPersons: true
});

export default MyContext;
