import React, { useState } from 'react';
import {
    Box,
    Button,
    Input,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Flex,
    SimpleGrid
} from '@chakra-ui/react';

const ClientManagement = () => {
    const initialMockClients = [
        {id: 1, name: 'Client A', address: 'Address 1', contact: '123'},
        {id: 2, name: 'Client B', address: 'Address 2', contact: '456'},
    ];
    const [clients, setClients] = useState(initialMockClients);
    const [newClient, setNewClient] = useState({
        name: '',
        address: '',
        contact: ''
    });

    const handleInputChange = (e) => {
        setNewClient({ ...newClient, [e.target.name]: e.target.value });
    };

    const addClient = () => {
        setClients([...clients, { ...newClient, id: Date.now() }]);
        setNewClient({ name: '', address: '', contact: '' });
    };

    return (
        <Box p={4}>
            <SimpleGrid columns={2} spacing={4} mb={4}>
                <Input type="text" placeholder="Client Name" name="name" value={newClient.name} onChange={handleInputChange} />
                <Input type="text" placeholder="Client Address" name="address" value={newClient.address} onChange={handleInputChange} />
                <Input type="text" placeholder="Client Contact" name="contact" value={newClient.contact} onChange={handleInputChange} />
                <Button onClick={addClient} colorScheme="blue">Add Client</Button>
            </SimpleGrid>

            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Address</Th>
                        <Th>Contact</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {clients.map(client => (
                        <Tr key={client.id}>
                            <Td>{client.name}</Td>
                            <Td>{client.address}</Td>
                            <Td>{client.contact}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default ClientManagement;