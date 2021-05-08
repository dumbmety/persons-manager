import { Box, Flex, IconButton, Text, Spacer } from '@chakra-ui/react'
import { BiTrashAlt, BiEdit } from 'react-icons/bi'

export default function Person({ name, changed, deleted }) {
  return (
    <Box
      p={4}
      my={5}
      as="li"
      w="full"
      rounded="md"
      textAlign="left"
      borderWidth={1}
      fontSize={20}
      borderStyle="solid"
      borderColor="gray.200"
      listStyleType="none"
      _hover={{ borderColor: 'gray.300' }}
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
