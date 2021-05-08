import { createContext, useContext, useState } from 'react'
import update from 'immutability-helper'

export const initialData = {
  persons: [],
  person: '',
  showPersons: true
}

export const Context = createContext(initialData)

export const Provider = ({ children }) => {
  const [data, setData] = useState(initialData)

  const addPerson = event => {
    event.preventDefault()
    const { person, persons } = { ...data }

    if (person.trim() === '') {
      return alert('Please enter a person name.')
    }

    if (person.trim().length > 30) {
      return alert('The number of characters allowed is 50 characters.')
    }

    setData(
      update(data, {
        person: { $set: '' },
        persons: { $push: [{ id: persons.length + 1, name: person }] }
      })
    )
  }

  const deletePerson = id => {
    // const allPersons = [...persons]
    // const personName = allPersons.filter(p => p.id === id)[0].fullName
    // const filteredPersons = allPersons.filter(p => p.id !== id)
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Delete Person',
    //   text: `Are you sure you want to delete "${personName}"?`,
    //   showCancelButton: true,
    //   confirmButtonText: 'Delete',
    //   confirmButtonColor: '#e41b1b'
    // }).then(result => result.isConfirmed && setPersons(filteredPersons))
  }

  const editPerson = (event, id) => {
    // const allPersons = [...persons]
    // const personIndex = allPersons.findIndex(p => p.id === id)
    // const targetPerson = allPersons[personIndex]
    // Swal.fire({
    //   title: 'Edit Person',
    //   input: 'text',
    //   inputValue: targetPerson.fullName,
    //   showCancelButton: true,
    //   confirmButtonText: 'Edit',
    //   confirmButtonColor: '#2f855a',
    //   cancelButtonColor: '#718096'
    // }).then(({ value, isConfirmed }) => {
    //   if (isConfirmed) {
    //     if (value.trim().length > 30) {
    //       return Swal.fire({
    //         icon: 'warning',
    //         title: 'Warning',
    //         text: 'The number of characters allowed is 50 characters.'
    //       })
    //     }
    //     targetPerson.fullName = value
    //     setPersons(allPersons)
    //   }
    // })
  }

  const changeName = ({ target }) => {
    setData(
      update(data, {
        person: { $set: target.value }
      })
    )
  }

  return (
    <Context.Provider
      value={{
        ...data,
        addPerson,
        deletePerson,
        editPerson,
        changeName
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useDataHandler = () => {
  return useContext(Context)
}
