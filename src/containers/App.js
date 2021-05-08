import { ChakraProvider, Container } from '@chakra-ui/react'
import SimpleBar from 'simplebar-react'

import AddPerson from '../components/AddPerson'
import EmptyBox from '../components/EmptyBox'
import Header from '../components/Header'
import ShowPersons from '../components/ShowPersons'
import ShowPersonsButton from '../components/ShowPersonsButton'

import { Provider } from '../context'
import styles from './App.module.css'

const App = () => {
  return (
    <Provider>
      <SimpleBar className={styles.scrollbar}>
        <ChakraProvider>
          <Header />
          <Container as="main">
            <ShowPersonsButton />
            <AddPerson />
            <ShowPersons />
            <EmptyBox />
          </Container>
        </ChakraProvider>
      </SimpleBar>
    </Provider>
  )
}

export default App
