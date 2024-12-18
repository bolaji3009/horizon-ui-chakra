// CheckTable.js (src/components/reusable/CheckTable.js)
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useMemo } from "react";

export default function CheckTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => {
    return columnsData.map((column) => {
      const { Header, accessor } = column;
      return (
        <Th key={accessor}>{Header}</Th>
      );
    });
  }, [columnsData]);

  const rows = useMemo(() => {
    return tableData.map((row) => {
      return (
        <Tr key={row.name}>
          {columnsData.map((column) => {
            const { accessor } = column;
            return (
              <Td key={accessor}>{row[accessor]}</Td>
            );
          })}
        </Tr>
      );
    });
  }, [tableData, columnsData]);

  return (
    <TableContainer
      overflowX={{ sm: "scroll", lg: "hidden" }}
      w='100%'>
      <Table variant='simple' size='md'>
        <Thead>
          <Tr>
            {columns}
          </Tr>
        </Thead>
        <Tbody>
          {rows}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

// Sample Usage

// import React from "react";
// import CheckTable from "./components/reusable/CheckTable"; // Update import path
//
// const columnsDataCheck = [
//   {
//     Header: "NAME",
//     accessor: "name",
//   },
//   {
//     Header: "PROGRESS",
//     accessor: "progress",
//   },
//   {
//     Header: "QUANTITY",
//     accessor: "quantity",
//   },
//   {
//     Header: "DATE",
//     accessor: "date",
//   },
// ];
// const tableDataCheck = [
//   {
//     name: "Mark",
//     progress: "Approved",
//     quantity: 3,
//     date: "23/04/18",
//   },
//   {
//     name: "Esthera Jackson",
//     progress: "Pending",
//     quantity: 40,
//     date: "20/04/18",
//   },
//   {
//     name: "Averie Mason",
//     progress: "Delayed",
//     quantity: 1,
//     date: "14/05/18",
//   },
//   {
//     name: "John Doe",
//     progress: "Approved",
//     quantity: 55,
//     date: "24/04/18",
//   },
// ];
//
// export default function CheckTableComponent() {
//   return (
//     <CheckTable
//       columnsData={columnsDataCheck}
//       tableData={tableDataCheck}
//     />
//   );
// }