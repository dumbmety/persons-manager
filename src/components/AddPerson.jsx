import React from 'react'

import { IconButton, Input, InputGroup } from '@chakra-ui/react'
import { BiPlus } from 'react-icons/bi'

const AddPerson = ({ addPerson, setPerson, personName }) => {
  return (
    <form onSubmit={addPerson}>
      <InputGroup size="lg" mt="1.2rem">
        <Input
          id="add-person"
          onChange={setPerson}
          placeholder="Add new person ..."
          value={personName}
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
