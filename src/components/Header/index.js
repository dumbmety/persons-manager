import { Badge, Heading, Text, VStack } from '@chakra-ui/react'
import { useDataHandler } from '../../context'

export default function Header() {
  const { persons } = useDataHandler()
  const { length } = persons

  return (
    <VStack as="header" py={12} mb={5} bg="light" shadow="base">
      <Heading fontSize={48} fontWeight={600}>
        Person Manager
      </Heading>
      <Text fontSize={20}>
        The number of persons is:
        <Badge ml={1} fontSize={16} colorScheme={length === 0 ? 'red' : 'teal'}>
          {length}
        </Badge>
      </Text>
    </VStack>
  )
}
