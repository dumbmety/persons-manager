import { useEffect, useRef } from 'react'
import { BiPlus } from 'react-icons/bi'
import { IconButton, Input, InputGroup } from '@chakra-ui/react'
import { useDataHandler } from '../../context'

export default function AddPerson() {
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
          ml={2}
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
