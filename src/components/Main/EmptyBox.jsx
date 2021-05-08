import { Alert, AlertIcon } from '@chakra-ui/react'
import { useDataHandler } from '../../context'

export default function EmptyBox() {
  const { persons } = useDataHandler()

  return (
    persons.length === 0 && (
      <Alert mt="1.2rem" rounded="md" status="warning">
        <AlertIcon />
        There is no name, you can add one above.
      </Alert>
    )
  )
}
