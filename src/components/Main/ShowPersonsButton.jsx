import { Button } from '@chakra-ui/react'
import { useDataHandler } from '../../context'

export default function ShowPersonsButton({ open, toggle }) {
  const { persons } = useDataHandler()

  return (
    <Button
      size="md"
      colorScheme="blue"
      minWidth={140}
      onClick={toggle}
      disabled={persons.length === 0}
    >
      {open ? 'Hide Persons' : 'Show Persons'}
    </Button>
  )
}
