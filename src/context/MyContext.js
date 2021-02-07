import { createContext } from 'react'

const MyContext = createContext({
  handleAddPerson: () => {},
  handleDeletePerson: () => {},
  handleNameChange: () => {},
  setPerson: () => {},
  state: {}
})

export default MyContext
