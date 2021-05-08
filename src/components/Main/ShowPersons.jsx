import { SlideFade } from '@chakra-ui/react'
import Persons from './Persons'

export default function ShowPersons({ open }) {
  return (
    <SlideFade in={open}>
      <Persons />
    </SlideFade>
  )
}
