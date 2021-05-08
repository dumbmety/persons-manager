import { Badge, Box, Heading, Text } from '@chakra-ui/react'
import { useDataHandler } from '../../context'

const Header = () => {
  const { persons } = useDataHandler()

  return (
    <Box
      py="3rem"
      mb="1.2rem"
      as="header"
      bg="#f9fafb"
      borderBottom="1px solid #d2d6dc"
    >
      <Heading fontSize="3rem" fontWeight="400" lineHeight="5rem">
        Person Manager
      </Heading>
      <Text fontSize="1.2rem">
        The number of persons is:
        <Badge
          colorScheme={persons.length === 0 ? 'red' : 'teal'}
          fontSize="1rem"
          ml="0.5rem"
        >
          {persons.length}
        </Badge>
      </Text>
    </Box>
  )
}

export default Header
