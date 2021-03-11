import React from 'react';

import { Box, Flex, IconButton, Input, Spacer } from '@chakra-ui/react';
import { BiTrashAlt } from 'react-icons/bi';

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
          <Input
            size="lg"
            variant="unstyled"
            value={props.fullName}
            onChange={props.changed}
            placeholder={props.fullName}
          />
        </Box>
        <Spacer />
        <Box>
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
  );
};

export default Person;
