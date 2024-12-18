import { SimpleGrid, Box, Button, Input, Text, Flex } from '@chakra-ui/react';
import ComplexTable from "components/reusable/ComplexTable";
import PieCard from "views/admin/default/components/PieCard";
import DailyTraffic from "components/reusable/DailyTraffic";
import TotalSpent from "components/reusable/TotalSpent";
import UserActivity from "components/reusable/UserActivity";
import WeeklyRevenue from "components/reusable/WeeklyRevenue";
import Tasks from "components/reusable/Tasks";


export default function Default() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb="20px">
        <PieCard />
        <DailyTraffic />
        <TotalSpent />
        <UserActivity />
        <WeeklyRevenue />
        <Tasks />
      </SimpleGrid>
      {/* <ComplexTable tableData={tableDataComplex} /> */}
    </Box>
  );
}
