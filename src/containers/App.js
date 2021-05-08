import { ChakraProvider } from '@chakra-ui/react'
import SimpleBar from 'simplebar-react'
import Header from '../components/Header'
import Main from '../components/Main'
import Provider from '../context'
import { theme } from '../config/theme'
import styles from './App.module.css'

export default function App() {
  return (
    <Provider>
      <SimpleBar className={styles.scrollbar}>
        <ChakraProvider theme={theme}>
          <Header />
          <Main />
        </ChakraProvider>
      </SimpleBar>
    </Provider>
  )
}
