import React, { useContext } from 'react'

import { Badge, Box, Heading, Text } from '@chakra-ui/react'

import MyContext from '../context/MyContext'

const Header = () => {
  const { state } = useContext(MyContext)

  return (
    <Box
      as="header"
      bg="#f9fafb"
      borderBottom="1px solid #d2d6dc"
      mb="1.2rem"
      py="3rem"
    >
      <Heading fontSize="3rem" fontWeight="400" lineHeight="5rem">
        Person Manager
      </Heading>
      <Text fontSize="1.2rem">
        The number of persons is:
        <Badge
          colorScheme={state.persons.length === 0 ? 'red' : 'teal'}
          fontSize="1rem"
          ml="0.5rem"
        >
          {state.persons.length}
        </Badge>
      </Text>
    </Box>
  )
}

export default Header
