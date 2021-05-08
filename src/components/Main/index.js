import { Container, useDisclosure } from '@chakra-ui/react'

import AddPerson from './AddPerson'
import EmptyBox from './EmptyBox'
import ShowPersons from './ShowPersons'
import ShowPersonsButton from './ShowPersonsButton'

export default function Main() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Container as="main">
      <ShowPersonsButton open={isOpen} toggle={onToggle} />
      <AddPerson />
      <ShowPersons open={isOpen} />
      <EmptyBox />
    </Container>
  )
}
