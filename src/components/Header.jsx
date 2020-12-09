import React from 'react'

import { Badge, Box, Heading, Text } from '@chakra-ui/react'

const Header = ({ length }) => {
	return (
		<Box
			as='header'
			py='3rem'
			mb='1.2rem'
			bg='#f9fafb'
			border='1px solid #d2d6dc'
		>
			<Heading fontSize='3rem' fontWeight='400' lineHeight='5rem'>
				Person Manager
			</Heading>
			<Text fontSize='1.2rem'>
				The number of persons is:
				<Badge
					ml='0.5rem'
					fontSize='1rem'
					colorScheme={length === 0 ? 'red' : 'teal'}
				>
					{length}
				</Badge>
			</Text>
		</Box>
	)
}

export default Header
