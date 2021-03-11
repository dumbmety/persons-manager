import React from 'react';

import { Box, Flex, IconButton, Input, Spacer } from '@chakra-ui/react';
import { BiTrashAlt } from 'react-icons/bi';

const Person = ({ fullName, deleted, changed }) => {
  return (
    <Box
      as="li"
      background="#fff"
      borderColor="#d2d6dc"
      borderStyle="solid"
      borderWidth="1px"
      fontSize="1.2rem"
      listStyleType="none"
      my="20px"
      p={4}
      rounded="md"
      textAlign="left"
      w="100%"
    >
      <Flex alignItems="center">
        <Box>
          <Input
            onChange={changed}
            placeholder={fullName}
            size="lg"
            value={fullName}
            variant="unstyled"
          />
        </Box>
        <Spacer />
        <Box>
          <IconButton
            aria-label="Delete Person"
            colorScheme="red"
            icon={<BiTrashAlt size="1.2rem" />}
            ml="8px"
            onClick={deleted}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Person;
