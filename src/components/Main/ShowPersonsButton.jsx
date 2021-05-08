import { Button } from '@chakra-ui/react'
import { useDataHandler } from '../../context'

export default function ShowPersonsButton({ open, toggle }) {
  const { persons } = useDataHandler()

  return (
    <Button
      size="md"
      minWidth={140}
      onClick={toggle}
      colorScheme="blue"
      disabled={persons.length === 0}
    >
      {open ? 'Hide Persons' : 'Show Persons'}
    </Button>
  )
}
