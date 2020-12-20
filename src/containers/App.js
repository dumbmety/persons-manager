import React, { Component } from 'react'

import {
	Alert,
	AlertIcon,
	Button,
	ChakraProvider,
	Container,
} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import SimpleBar from 'simplebar-react'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

import 'simplebar/dist/simplebar.min.css'

import AddPerson from '../components/AddPerson'
import Header from '../components/Header'
import Persons from '../components/Persons'

class App extends Component {
	state = {
		persons: [],
		person: '',
		showPersons: true,
	}

	handleShowPersons = () => {
		this.setState({ showPersons: !this.state.showPersons })
	}

	handleDeletePerson = id => {
		const persons = [...this.state.persons]

		const personName = persons.filter(p => p.id === id)[0].fullName
		const filteredPersons = persons.filter(p => p.id !== id)

		Swal.fire({
			icon: 'error',
			title: 'Delete Person',
			text: `Are you sure you want to delete "${personName}"?`,
			showCancelButton: true,
			confirmButtonText: 'Delete',
			confirmButtonColor: '#e41b1b',
		}).then(result => result.isConfirmed && this.setState({ persons: filteredPersons }))
	}

	handleNameChange = (event, id) => {
		const { persons: allPersons } = this.state

		const personIndex = allPersons.findIndex(p => p.id === id)
		const person = allPersons[personIndex]
		person.fullName = event.target.value

		const persons = [...this.state.persons]
		persons[personIndex] = person
		this.setState({ persons })
	}

	handleAddPerson = event => {
		event.preventDefault()
		if (this.state.person.trim() === '') {
			return Swal.fire({
				icon: 'warning',
				title: 'Warning',
				text: 'Please enter a person name.',
			})
		}

		const persons = [...this.state.persons]
		const person = { id: persons.length + 1, fullName: this.state.person }

		persons.push(person)
		this.setState({ persons, person: '' })
	}

	setPerson = event => {
		this.setState({ person: event.target.value })
	}

	render() {
		const { person, persons, showPersons } = this.state

		window.onload = () => {
			document.querySelector('#add-person').focus()

			Scrollbar.use(OverscrollPlugin)
			Scrollbar.init(document.querySelector('div[data-simplebar="init"]'), {
				plugins: {
					overscroll: true,
				},
			})
		}

		return (
			<SimpleBar style={{ maxHeight: '100vh', textAlign: 'center' }}>
				<ChakraProvider>
					<Header length={persons.length} />
					<Container as="main">
						<Button
							disabled={persons.length === 0}
							colorScheme="blue"
							size="md"
							onClick={this.handleShowPersons}
						>
							{showPersons ? 'Hide Persons' : 'Show Persons'}
						</Button>

						<AddPerson
							addPerson={this.handleAddPerson}
							setPerson={this.setPerson}
							personName={person}
						/>

						{showPersons ? (
							<Persons
								persons={persons}
								deletePerson={this.handleDeletePerson}
								changePerson={this.handleNameChange}
							/>
						) : null}

						{persons.length === 0 ? (
							<Alert mt="1.2rem" rounded="md" status="warning">
								<AlertIcon />
                There is no name, you can add one above.
							</Alert>
						) : null}
					</Container>
				</ChakraProvider>
			</SimpleBar>
		)
	}
}

export default App
