import Persons from './Persons'
import { useDataHandler } from '../context'

export default function ShowPersons() {
  const { showPersons } = useDataHandler()
  return showPersons && <Persons />
}
