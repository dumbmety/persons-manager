import { useEffect, useRef } from 'react'
import { IconButton, Input, InputGroup } from '@chakra-ui/react'
import { BiPlus } from 'react-icons/bi'
import { useDataHandler } from '../context'

const AddPerson = () => {
  const { person, addPerson, changeName } = useDataHandler()
  const addPersonInput = useRef(null)

  useEffect(() => {
    addPersonInput.current.focus()
  }, [])

  return (
    <form onSubmit={addPerson}>
      <InputGroup size="lg" mt="1.2rem">
        <Input
          value={person}
          variant="outline"
          onChange={changeName}
          ref={addPersonInput}
          placeholder="Add new person..."
        />
        <IconButton
          ml={4}
          as="button"
          type="submit"
          colorScheme="green"
          aria-label="Add New Person"
          icon={<BiPlus size="1.2rem" />}
        />
      </InputGroup>
    </form>
  )
}

export default AddPerson
