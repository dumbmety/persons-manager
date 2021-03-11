import React, { useState } from 'react';

import {
  Alert,
  AlertIcon,
  Button,
  ChakraProvider,
  Container
} from '@chakra-ui/react';
import Swal from 'sweetalert2';
import SimpleBar from 'simplebar-react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

import 'simplebar/dist/simplebar.min.css';

import MyContext from '../context/MyContext';
import AddPerson from '../components/AddPerson';
import Header from '../components/Header';
import Persons from '../components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState('');
  const [showPersons, setShowPersons] = useState(true);

  const handleShowPersons = () => {
    setShowPersons(!showPersons);
  };

  const handleDeletePerson = id => {
    const allPersons = [...persons];

    const personName = allPersons.filter(p => p.id === id)[0].fullName;
    const filteredPersons = allPersons.filter(p => p.id !== id);

    Swal.fire({
      icon: 'error',
      title: 'Delete Person',
      text: `Are you sure you want to delete "${personName}"?`,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#e41b1b'
    }).then(result => result.isConfirmed && setPersons(filteredPersons));
  };

  const handleNameChange = (event, id) => {
    const allPersons = [...persons];

    const personIndex = allPersons.findIndex(p => p.id === id);
    const person = allPersons[personIndex];
    person.fullName = event.target.value;
    allPersons[personIndex] = person;

    setPersons(allPersons);
  };

  const handleAddPerson = event => {
    event.preventDefault();
    if (person.trim() === '') {
      return Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'Please enter a person name.'
      });
    }

    const allPersons = [...persons];
    const newPerson = { id: allPersons.length + 1, fullName: person };

    allPersons.push(newPerson);
    setPersons(allPersons);
    setPerson('');
  };

  const setPersonName = event => {
    setPerson(event.target.value);
  };

  window.onload = () => {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('div[data-simplebar="init"]'), {
      plugins: {
        overscroll: true
      }
    });
  };

  return (
    <MyContext.Provider
      value={{
        handleAddPerson,
        handleDeletePerson,
        handleNameChange,
        setPerson: setPersonName,
        persons,
        person,
        showPersons
      }}
    >
      <SimpleBar style={{ maxHeight: '100vh', textAlign: 'center' }}>
        <ChakraProvider>
          <Header />
          <Container as="main">
            <Button
              size="md"
              colorScheme="blue"
              onClick={handleShowPersons}
              disabled={persons.length === 0}
            >
              {showPersons ? 'Hide Persons' : 'Show Persons'}
            </Button>
            <AddPerson />
            {showPersons && <Persons />}
            {persons.length === 0 && (
              <Alert mt="1.2rem" rounded="md" status="warning">
                <AlertIcon />
                There is no name, you can add one above.
              </Alert>
            )}
          </Container>
        </ChakraProvider>
      </SimpleBar>
    </MyContext.Provider>
  );
};

export default App;
