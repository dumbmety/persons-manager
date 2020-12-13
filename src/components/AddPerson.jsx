import React from 'react'

import { IconButton, Input, InputGroup } from '@chakra-ui/react'
import { BiPlus } from 'react-icons/bi'

const AddPerson = ({ addPerson, setPerson, personName }) => {
    return (
        <form onSubmit={addPerson}>
            <InputGroup size="lg" mt="1.2rem">
                <Input
                    id="add-person"
                    variant="outline"
                    placeholder="Add new person ..."
                    onChange={setPerson}
                    value={personName}
                />
                <IconButton
                    as="button"
                    type="submit"
                    ml="8px"
                    aria-label="Add New Person"
                    colorScheme="green"
                    icon={<BiPlus size="1.2rem" />}
                />
            </InputGroup>
        </form>
    )
}

export default AddPerson
