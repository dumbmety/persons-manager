import React, { useContext, useEffect, useRef } from 'react';

import { IconButton, Input, InputGroup } from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';

import MyContext from '../context/MyContext';

const AddPerson = () => {
  const context = useContext(MyContext);

  const addPersonInput = useRef(null);
  useEffect(() => addPersonInput.current.focus(), []);

  return (
    <form onSubmit={context.handleAddPerson}>
      <InputGroup size="lg" mt="1.2rem">
        <Input
          id="add-person"
          value={context.person}
          variant="outline"
          onChange={context.setPerson}
          ref={addPersonInput}
          placeholder="Add new person ..."
        />
        <IconButton
          ml="8px"
          as="button"
          type="submit"
          colorScheme="green"
          aria-label="Add New Person"
          icon={<BiPlus size="1.2rem" />}
        />
      </InputGroup>
    </form>
  );
};

export default AddPerson;
