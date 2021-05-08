import React from 'react'

import { Box, Flex, IconButton, Text, Spacer } from '@chakra-ui/react'
import { BiTrashAlt, BiEdit } from 'react-icons/bi'

const Person = props => {
  return (
    <Box
      p={4}
      as="li"
      w="100%"
      my="20px"
      rounded="md"
      textAlign="left"
      borderWidth="1px"
      fontSize="1.2rem"
      background="#fff"
      borderStyle="solid"
      listStyleType="none"
      borderColor="#d2d6dc"
    >
      <Flex alignItems="center">
        <Box>
          <Text>{props.name}</Text>
        </Box>
        <Spacer />
        <Box>
          <IconButton
            colorScheme="pink"
            onClick={props.changed}
            aria-label="Edit Person"
            icon={<BiEdit size="1.2rem" />}
          />
          <IconButton
            ml="8px"
            colorScheme="red"
            onClick={props.deleted}
            aria-label="Delete Person"
            icon={<BiTrashAlt size="1.2rem" />}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Person
