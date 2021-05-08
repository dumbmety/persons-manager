import {
  Alert,
  AlertIcon,
  Button,
  ChakraProvider,
  Container
} from '@chakra-ui/react'
import SimpleBar from 'simplebar-react'
import { Provider, useDataHandler } from '../context'
import AddPerson from '../components/AddPerson'
import Header from '../components/Header'
import Persons from '../components/Persons'
import styles from './App.module.css'

const App = () => {
  const { persons, showPersons } = useDataHandler()

  return (
    <Provider>
      <SimpleBar className={styles.scrollbar}>
        <ChakraProvider>
          <Header />
          <Container as="main">
            <Button
              size="md"
              colorScheme="blue"
              onClick={() => {}}
              disabled={persons.length === 0}
            >
              {showPersons ? 'Hide Persons' : 'Show Persons'}
            </Button>
            <AddPerson />
            {showPersons && <Persons />}
            {persons.length === 0 && (
              <Alert mt="1.2rem" rounded="md" status="warning">
                <AlertIcon />
                There is no name, you can add one above.
              </Alert>
            )}
          </Container>
        </ChakraProvider>
      </SimpleBar>
    </Provider>
  )
}

export default App
