import React from 'react'

import { Box, Flex, IconButton, Input, Spacer } from '@chakra-ui/react'
import { BiTrashAlt } from 'react-icons/bi'

const Person = ({ fullName, deleted, changed }) => {
	return (
		<>
			<Box
				as="li"
				listStyleType="none"
				my="20px"
				rounded="md"
				background="#fff"
				borderWidth="1px"
				borderStyle="solid"
				borderColor="#d2d6dc"
				textAlign="left"
				fontSize="1.2rem"
				w="100%"
				p={4}
			>
				<Flex alignItems="center">
					<Box>
						<Input
							size="lg"
							variant="unstyled"
							onChange={changed}
							placeholder={fullName}
							value={fullName}
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
		</>
	)
}

export default Person
