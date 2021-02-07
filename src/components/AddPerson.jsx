import React, { useContext } from 'react'

import { IconButton, Input, InputGroup } from '@chakra-ui/react'
import { BiPlus } from 'react-icons/bi'

import MyContext from '../context/MyContext'

const AddPerson = () => {
  const { handleAddPerson, setPerson, state } = useContext(MyContext)

  return (
    <form onSubmit={handleAddPerson}>
      <InputGroup size="lg" mt="1.2rem">
        <Input
          id="add-person"
          onChange={setPerson}
          placeholder="Add new person ..."
          value={state.person}
          variant="outline"
        />
        <IconButton
          aria-label="Add New Person"
          as="button"
          colorScheme="green"
          icon={<BiPlus size="1.2rem" />}
          ml="8px"
          type="submit"
        />
      </InputGroup>
    </form>
  )
}

export default AddPerson
