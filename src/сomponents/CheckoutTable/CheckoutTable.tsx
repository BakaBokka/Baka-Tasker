import React from "react";
import BTable from "react-bootstrap/Table";
import { useTable } from "react-table";
import { Task } from "../../utils/types";
import "./CheckoutTable.scss";

function CheckoutTable(props: { data: Task[]; columns: any }) {
  const columns = props.columns;
  const data = props.data;
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })
  return (
    <BTable striped bordered hover size="lg" {...getTableProps()}>
     <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </BTable>
  );
}

export default CheckoutTable;
