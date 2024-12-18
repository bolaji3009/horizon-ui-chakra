import React, { useState } from 'react';
import { SimpleGrid, Box, Button, Input, Text, Flex } from '@chakra-ui/react';
import ComplexTable from 'components/reusable/ComplexTable';

const PlanManagement = () => {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({ name: '', cost: '' });

  const handleInputChange = (e) => {
    setNewPlan({ ...newPlan, [e.target.name]: e.target.value });
  };

  const addPlan = () => {
    if (newPlan.name && newPlan.cost) {
      setPlans([...plans, { ...newPlan, id: Date.now() }]);
      setNewPlan({ name: '', cost: '' });
    }
  };

  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Cost', accessor: 'cost' },
    { Header: 'Actions', accessor: 'id' },
  ];

  const tableData = plans.map(plan => ({
    name: plan.name,
    cost: plan.cost,
    id: plan.id,
  }));

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box p={4} maxWidth="800px" width="100%">
        <Text fontSize="xl" fontWeight="bold" mb={4}>Add New Plan</Text>
        <SimpleGrid columns={2} spacing={4} mb={4}>
          <Input
            type="text"
            placeholder="Plan Name"
            name="name"
            value={newPlan.name}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            placeholder="Plan Cost"
            name="cost"
            value={newPlan.cost}
            onChange={handleInputChange}
          />
        </SimpleGrid>
        <Button onClick={addPlan} mb={4}>Add Plan</Button>
        <ComplexTable columns={columns} tableData={tableData} />
      </Box>
    </Flex>
  );
};

export default PlanManagement;
