import { createContext, useContext, useState } from 'react'
import update from 'immutability-helper'

export const initialData = {
  persons: [],
  person: '',
  showPersons: true
}

export const Context = createContext(initialData)

export function Provider({ children }) {
  const [data, setData] = useState(initialData)

  function addPerson(event) {
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

  function deletePerson(id) {
    const allPersons = [...data.persons]
    const personIndex = allPersons.findIndex(p => p.id === id)
    const personName = allPersons[personIndex].name

    allPersons.splice(personIndex, 1)
    const result = window.confirm(
      `Are you sure you want to delete "${personName}"?`
    )

    if (result) {
      setData(
        update(data, {
          persons: { $set: allPersons }
        })
      )
    }
  }

  function editPerson(id) {
    const allPersons = [...data.persons]
    const personIndex = allPersons.findIndex(p => p.id === id)
    const targetPerson = allPersons[personIndex]

    const name = window.prompt('Edit Person', targetPerson.name)
    if (name.trim().length > 30) {
      return alert('The number of characters allowed is 50 characters.')
    }

    targetPerson.name = name.trim()
    setData(
      update(data, {
        persons: { $set: allPersons }
      })
    )
  }

  function changeName({ target }) {
    setData(
      update(data, {
        person: { $set: target.value }
      })
    )
  }

  function togglePersons() {
    setData(
      update(data, {
        showPersons: { $set: !data.showPersons }
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
        changeName,
        togglePersons
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useDataHandler() {
  return useContext(Context)
}
