import React, { useState } from "react";
import { Button } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";

import { Task } from "../../utils/types";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import "./CheckoutTable.scss";

function CheckoutTable(props: {
  data: Task[];
  columns: any;
  onHide: () => void;
}) {
  const columns = props.columns;
  const data = props.data;
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters, // useFilters!
    useGlobalFilter // useGlobalFilter!
  );

  //Фильтрация данных в таблице
  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }: {
    preGlobalFilteredRows: any;
    globalFilter: any;
    setGlobalFilter: any;
  }) {
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 200);

    return (
      <span>
        Filter:{" "}
        <input
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={"Input something here..."}
          style={{
            fontSize: "1 rem",
            border: "0",
          }}
        />
      </span>
    );
  }
  //Оброботка сабмита
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    getPdf();
    props.onHide();
  };

  //Сохранение таблицы в pdf
  const getPdf = () => {
    const input = document.getElementById("table") as HTMLCanvasElement;
    console.log(input);

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "px", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      let width = pdf.internal.pageSize.getWidth() - 40;
      let height = (imgProps.height * width) / imgProps.width;

      pdf.addImage(imgData, "JPEG", 20, 20, width, height);
      pdf.save("total.pdf");
    });
  };

  return (
    <>
      <BTable
        className="CheckoutTable"
        striped
        bordered
        hover
        size="xl"
        {...getTableProps()}
        id="table"
      >
        <thead>
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "left",
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="CheckoutTable__column"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((group) => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </BTable>

      <Button
        className="GetTotalModal__button"
        variant="primary"
        type="submit"
        onClick={(e: React.MouseEvent) => handleClick(e)}
      >
        Save to PDF
      </Button>
    </>
  );
}

export default CheckoutTable;
