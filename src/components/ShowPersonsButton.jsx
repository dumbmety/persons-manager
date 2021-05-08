import { Button } from '@chakra-ui/react'
import { useDataHandler } from '../context'

export default function ShowPersonsButton() {
  const { persons, showPersons, togglePersons } = useDataHandler()

  return (
    <Button
      size="md"
      colorScheme="blue"
      onClick={togglePersons}
      disabled={persons.length === 0}
    >
      {showPersons ? 'Hide Persons' : 'Show Persons'}
    </Button>
  )
}
