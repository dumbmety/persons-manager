import { Box, Flex, IconButton, Text, Spacer } from '@chakra-ui/react'
import { BiTrashAlt, BiEdit } from 'react-icons/bi'

export default function Person({ name, changed, deleted }) {
  return (
    <Box
      p={4}
      as="li"
      w="full"
      my={5}
      rounded="md"
      textAlign="left"
      borderWidth={1}
      fontSize="1.2rem"
      background="#fff"
      borderStyle="solid"
      listStyleType="none"
      borderColor="#d2d6dc"
    >
      <Flex alignItems="center">
        <Box>
          <Text>{name}</Text>
        </Box>
        <Spacer />
        <Box>
          <IconButton
            colorScheme="pink"
            onClick={changed}
            aria-label="Edit Person"
            icon={<BiEdit size="1.2rem" />}
          />
          <IconButton
            ml="8px"
            colorScheme="red"
            onClick={deleted}
            aria-label="Delete Person"
            icon={<BiTrashAlt size="1.2rem" />}
          />
        </Box>
      </Flex>
    </Box>
  )
}
