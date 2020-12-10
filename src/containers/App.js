import React, { Component } from 'react'

import {
    Alert,
    AlertIcon,
    Button,
    ChakraProvider,
    Container,
} from '@chakra-ui/react'

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
        const filteredPersons = persons.filter(p => p.id !== id)
        this.setState({ persons: filteredPersons })
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
        if (this.state.person.trim().length === 0) {
            return alert('Please enter a person name')
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
        const { persons, person, showPersons } = this.state

        return (
            <ChakraProvider>
                <Header length={persons.length} />
                <Container>
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
        )
    }
}

export default App
