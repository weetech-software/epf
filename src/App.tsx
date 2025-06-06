import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridColumnGroupingModel,
  DataGridProps,
  GridCellParams,
} from "@mui/x-data-grid";


interface IDividenHistory {
  year: number;
  dividend_interest: number;
  inputValue?: number;
}

const dividenHistories: readonly IDividenHistory[] = [
  { year: 2024, dividend_interest: 6.30 },
  { year: 2023, dividend_interest: 5.50 },
  { year: 2022, dividend_interest: 5.35 },
  { year: 2021, dividend_interest: 6.10 },
  { year: 2020, dividend_interest: 5.20 },
  { year: 2019, dividend_interest: 5.45 },
  { year: 2018, dividend_interest: 6.15 },
  { year: 2017, dividend_interest: 6.90 },
];

const filter = createFilterOptions<IDividenHistory>();


type EPF = {
  dividenHistory: IDividenHistory,

  open_acc1: number,
  open_acc2: number,
  open_acc3: number,
  empty_acc3: boolean,
  total: number,

  month: {
    jan : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
    feb : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
    mar : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
    apr : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
    may : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
    jun : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
    jul : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
    aug : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
    sep : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
    oct : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
    nov : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
    dec : { employer : number, employee : number, total_emp : number, account1: number, account2: number, account3: number, total: number},
  },

  dividend_acc1: number,
  dividend_acc2: number,
  dividend_acc3: number,
  dividend_total: number,

  balance_acc1: number,
  balance_acc2: number,
  balance_acc3: number,
  balance_total: number,
}

function App() {

  const ratioAcc1 = 0.75;
  const ratioAcc2 = 0.15;
  let ratioAcc3 = 0.10;

  const initialState : EPF = {
    dividenHistory: {
      year: new Date().getFullYear() - 1, //year: 2012,
      dividend_interest: 6.30,
      inputValue: -1,
    },
    open_acc1: 75000,
    open_acc2: 15000,
    open_acc3: 10000,
    empty_acc3: false,
    get total () {
      return this.open_acc1 + this.open_acc2 + this.open_acc3;
    },
    month: {
      jan : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v: number) {this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.open_acc1 + this.total_emp * ratio},
              //set account1(v) { this.account1 = v},
              account1: 76725,
              //get account2() { return initialState.open_acc2 + this.total_emp * (1-ratio)},
              //set account2(v) { this.account2 = v},
              account2: 15345,
              //get total() { return this.account1 + this.account2},
              //set total(v) { this.total = v},
              account3: 10230,
              total: 102300,
            },
      feb : { employer : 1100, employee : 1200,
              //get total_emp() { return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.jan.account1 + this.total_emp * ratio},
              //set account1(v) { this.account1 = v},
              account1: 78450,
              //get account2() { return initialState.month.jan.account2 + this.total_emp * (1-ratio)},
              //set account2(v) { this.account2 = v},
              account2: 15690,
              //get total() { return this.account1 + this.account2},
              //set total(v) { this.total = v},
              account3: 10460,
              total: 104600,
            },
      mar : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.feb.account1 + this.total_emp * ratio},
              account1: 80175,
              //get account2() { return initialState.month.feb.account2 + this.total_emp * (1-ratio)},
              account2: 16035,
              //get total() { return this.account1 + this.account2}
              account3: 10690,
              total: 106900,
            },
      apr : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.mar.account1 + this.total_emp * ratio},
              account1: 81900,
              //get account2() { return initialState.month.mar.account2 + this.total_emp * (1-ratio)},
              account2: 16380,
              //get total() { return this.account1 + this.account2}
              account3: 10920,
              total: 109200,
            },
      may : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.apr.account1 + this.total_emp * ratio},
              account1: 83625,
              //get account2() { return initialState.month.apr.account2 + this.total_emp * (1-ratio)},
              account2: 16725,
              //get total() { return this.account1 + this.account2}
              account3: 11150,
              total: 111500,
            },
      jun : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.may.account1 + this.total_emp * ratio},
              account1: 85350,
              //get account2() { return initialState.month.may.account2 + this.total_emp * (1-ratio)},
              account2: 17070,
              //get total() { return this.account1 + this.account2}
              account3: 11380,
              total: 113800,
            },
      jul : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.jun.account1 + this.total_emp * ratio},
              account1: 87075,
              //get account2() { return initialState.month.jun.account2 + this.total_emp * (1-ratio)},
              account2: 17415,
              //get total() { return this.account1 + this.account2}
              account3: 11610,
              total: 116100,
            },
      aug : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.jul.account1 + this.total_emp * ratio},
              account1: 88800,
              //get account2() { return initialState.month.jul.account2 + this.total_emp * (1-ratio)},
              account2: 17760,
              //get total() { return this.account1 + this.account2}
              account3: 11840,
              total: 118400,
            },
      sep : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.aug.account1 + this.total_emp * ratio},
              account1: 90525,
              //get account2() { return initialState.month.aug.account2 + this.total_emp * (1-ratio)},
              account2: 18105,
              //get total() { return this.account1 + this.account2}
              account3: 12070,
              total: 120700,
            },
      oct : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.sep.account1 + this.total_emp * ratio},
              account1: 92250,
              //get account2() { return initialState.month.sep.account2 + this.total_emp * (1-ratio)},
              account2: 18450,
              //get total() { return this.account1 + this.account2}
              account3: 12300,
              total: 123000,
            },
      nov : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.oct.account1 + this.total_emp * ratio},
              account1: 93975,
              //get account2() { return initialState.month.oct.account2 + this.total_emp * (1-ratio)},
              account2: 18795,
              //get total() { return this.account1 + this.account2}
              account3: 12530,
              total: 125300,
            },
      dec : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.nov.account1 + this.total_emp * ratio},
              account1: 95700,
              //get account2() { return initialState.month.nov.account2 + this.total_emp * (1-ratio)},
              account2: 19140,
              //get total() { return this.account1 + this.account2}
              account3: 12760,
              total: 127600,
            },
    },
    dividend_acc1: 4652.401,
    dividend_acc2: 930.48,
    dividend_acc3: 620.32,
    dividend_total: 6203.201,

    balance_acc1: 100352.401,
    balance_acc2: 20070.48,
    balance_acc3: 13380.32,
    balance_total: 133803.201,
  };

  const [state, setState] = React.useState(initialState);

  /* track when any of the state.month changed, then recalculate */
  React.useEffect(() => {

    if (state.month) {
      recalculate()
    }

  // eslint-disable-next-line
  }, [state.month])

  const rows1: GridRowsProp = [
    {
      id: "Jan",
      month: "Jan",
      employer: state.month.jan.employer,
      employee: state.month.jan.employee,
      total_emp: state.month.jan.employer + state.month.jan.employee,
      //account1: state.open_acc1 + (state.month.jan.employer + state.month.jan.employee) * ratioAcc1,
      account1: state.month.jan.account1,
      //account2: state.open_acc2 + (state.month.jan.employer + state.month.jan.employee) * ratioAcc2,
      account2: state.month.jan.account2,
      // account3: state.open_acc3 + (state.month.jan.employer + state.month.jan.employee) * ratioAcc3,
      account3: state.month.jan.account3,
      total: (state.open_acc1 + (state.month.jan.employer + state.month.jan.employee) * ratioAcc1) +
             (state.open_acc2 + (state.month.jan.employer + state.month.jan.employee) * ratioAcc2) +
             (state.open_acc3 + (state.month.jan.employer + state.month.jan.employee) * ratioAcc3),
    },
    {
      id: "Feb",
      month: "Feb",
      employer: state.month.feb.employer,
      employee: state.month.feb.employee,
      total_emp: state.month.feb.employer + state.month.feb.employee,
      //account1: state.month.feb.account1,
      //account2: state.month.feb.account2,
      //total: state.month.feb.total,
      //account1: state.open_acc1 + (state.month.feb.employer + state.month.feb.employee) * ratio,
      //account2: state.open_acc2 + (state.month.feb.employer + state.month.feb.employee) * (1-ratio),
      //total: (state.open_acc1 + (state.month.jan.employer + state.month.jan.employee) * ratio) +
             //(state.open_acc2 + (state.month.jan.employer + state.month.jan.employee) * (1-ratio)),
      account1: state.month.feb.account1,
      account2: state.month.feb.account2,
      account3: state.month.feb.account3,
      total: state.month.feb.total,
    },
    {
      id: "Mar",
      month: "Mar",
      employer: state.month.mar.employer,
      employee: state.month.mar.employee,
      total_emp: state.month.mar.employer + state.month.mar.employee,
      account1: state.month.mar.account1,
      account2: state.month.mar.account2,
      account3: state.month.mar.account3,
      total: state.month.mar.total,
    },
    {
      id: "Apr",
      month: "Apr",
      employer: state.month.apr.employer,
      employee: state.month.apr.employee,
      total_emp: state.month.apr.employer + state.month.apr.employee,
      account1: state.month.apr.account1,
      account2: state.month.apr.account2,
      account3: state.month.apr.account3,
      total: state.month.apr.total,
    },
    {
      id: "May",
      month: "May",
      employer: state.month.may.employer,
      employee: state.month.may.employee,
      total_emp: state.month.may.employer + state.month.may.employee,
      account1: state.month.may.account1,
      account2: state.month.may.account2,
      account3: state.month.may.account3,
      total: state.month.may.total,
    },
    {
      id: "Jun",
      month: "Jun",
      employer: state.month.jun.employer,
      employee: state.month.jun.employee,
      total_emp: state.month.jun.employer + state.month.jun.employee,
      account1: state.month.jun.account1,
      account2: state.month.jun.account2,
      account3: state.month.jun.account3,
      total: state.month.jun.total,
    },
    {
      id: "Jul",
      month: "Jul",
      employer: state.month.jul.employer,
      employee: state.month.jul.employee,
      total_emp: state.month.jul.employer + state.month.jul.employee,
      account1: state.month.jul.account1,
      account2: state.month.jul.account2,
      account3: state.month.jul.account3,
      total: state.month.jul.total,
    },
    {
      id: "Aug",
      month: "Aug",
      employer: state.month.aug.employer,
      employee: state.month.aug.employee,
      total_emp: state.month.aug.employer + state.month.aug.employee,
      account1: state.month.aug.account1,
      account2: state.month.aug.account2,
      account3: state.month.aug.account3,
      total: state.month.aug.total,
    },
    {
      id: "Sep",
      month: "Sep",
      employer: state.month.sep.employer,
      employee: state.month.sep.employee,
      total_emp: state.month.sep.employer + state.month.sep.employee,
      account1: state.month.sep.account1,
      account2: state.month.sep.account2,
      account3: state.month.sep.account3,
      total: state.month.sep.total,
    },
    {
      id: "Oct",
      month: "Oct",
      employer: state.month.oct.employer,
      employee: state.month.oct.employee,
      total_emp: state.month.oct.employer + state.month.oct.employee,
      account1: state.month.oct.account1,
      account2: state.month.oct.account2,
      account3: state.month.oct.account3,
      total: state.month.oct.total,
    },
    {
      id: "Nov",
      month: "Nov",
      employer: state.month.nov.employer,
      employee: state.month.nov.employee,
      total_emp: state.month.nov.employer + state.month.nov.employee,
      account1: state.month.nov.account1,
      account2: state.month.nov.account2,
      account3: state.month.nov.account3,
      total: state.month.nov.total,
    },
    {
      id: "Dec",
      month: "Dec",
      employer: state.month.dec.employer,
      employee: state.month.dec.employee,
      total_emp: state.month.dec.employer + state.month.dec.employee,
      account1: state.month.dec.account1,
      account2: state.month.dec.account2,
      account3: state.month.dec.account3,
      total: state.month.dec.total,
    },
  ];

  type Item = typeof rows1[number];

  interface OpeningBalanceHeader {
    id: "Opening Balance";
    label: string;
    account1: number;
    account2: number;
    account3: number;
    total: number;
  }

  interface DividenHeader {
    id: "Dividend Received for Year";
    label: string;
    account1: number;
    account2: number;
    account3: number;
    total: number;
  }

  interface BalanceHeader {
    id: "Balance as of 31st Dec";
    label: string;
    account1: number;
    account2: number;
    account3: number;
    total: number;
  }

  type Row = Item | OpeningBalanceHeader | DividenHeader | BalanceHeader;

  const rows: Row[] = [
    {
      id: "Opening Balance",
      label: "Opening Balance",
      account1: state.open_acc1,
      account2: state.open_acc2,
      account3: state.open_acc3,
      total: state.total,
    },
    { id: "Action Row", label: "", month: "", employer: null, employee: null },
    ...rows1,
    {
      id: "Dividend Received for Year",
      label: "Dividend Received for Year " + state.dividenHistory.year,
      account1: state.dividend_acc1,
      account2: state.dividend_acc2,
      account3: state.dividend_acc3,
      total: state.dividend_total,
    },
    {
      id: "Balance as of 31st Dec",
      label: "Balance as of 31st Dec " + state.dividenHistory.year,
      account1: state.balance_acc1,
      account2: state.balance_acc2,
      account3: state.balance_acc3,
      total: state.balance_total,
    },
  ];

  const columns: GridColDef<Row>[] = [
    {
      field: "month",
      headerName: "Month",
      flex: 1,
      colSpan: ({ row }) => {
        if (
          row.id === "Opening Balance" ||
          row.id === "Dividend Received for Year" ||
          row.id === "Balance as of 31st Dec"
        ) {
          return 4;
        }
        return undefined;
      },
      valueGetter: ({ value, row }) => {
        if (
          row.id === "Opening Balance" ||
          row.id === "Dividend Received for Year" ||
          row.id === "Balance as of 31st Dec"
        ) {
          return row.label;
        }
        return value;
      },
      sortable: false,
    },
    {
      field: "employer",
      headerName: "Employer (RM)",
      type: "number",
      editable: true,
      width: 120,
      cellClassName: (params: GridCellParams<Row>) => {
        // Exclude 'Action Row' from applying the class
        if (params.row.id === "Action Row") {
          return "";
        }
        return "super-app-theme--cell";
      },
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        if (params.row.id === "Action Row") {
          return (
            <button onClick={replicateEmployer} title="replicate on employer month January to remaining months">
              Employer
            </button>
          );
        }
        return params.value;
      },
    },
    {
      field: "employee",
      headerName: "Employee (RM)",
      type: "number",
      editable: true,
      width: 120,
      cellClassName: (params: GridCellParams<Row>) => {
        // Exclude 'Action Row' from applying the class
        if (params.row.id === "Action Row") {
          return "";
        }
        return "super-app-theme--cell";
      },
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        if (params.row.id === "Action Row") {
          return (
            <button onClick={replicateEmployee} title="replicate on employee month January to remaining months">
              Employee
            </button>
          );
        }
        return params.value;
      },
    },
    {
      field: "total_emp",
      headerName: "Total (RM)",
      type: "number",
      width: 120,
      flex: 1,
      sortable: false,
    },
    {
      field: "account1",
      headerName: "Account 1 (RM)",
      type: "number",
      width: 120,
      flex: 1,
      editable: true,
      cellClassName: (params: GridCellParams<Row>) => {
        if (params.id === "Opening Balance") {
          return "super-app-theme--cell";
        }

        return "";
      },
      sortable: false,
    },
    {
      field: "account2",
      headerName: "Account 2 (RM)",
      type: "number",
      width: 120,
      flex: 1,
      editable: true,
      cellClassName: (params: GridCellParams<Row>) => {
        if (params.id === "Opening Balance") {
          return "super-app-theme--cell";
        }

        return "";
      },
      sortable: false,
    },
    {
      field: "account3",
      headerName: "Account 3 (RM)",
      type: "number",
      width: 120,
      flex: 1,
      editable: true,
      cellClassName: (params: GridCellParams<Row>) => {
        if (params.id === "Opening Balance") {
          return "super-app-theme--cell";
        }

        return "";
      },
      renderCell: (params) => {
        if (params.row.id === "Action Row") {
          return (
            <button onClick={emptyAcc3} title="make all empty">
              Empty
            </button>
          );
        }
        if (params.row.id === "Dividend Received for Year" || params.row.id === "Balance as of 31st Dec") {
            return new Intl.NumberFormat('en-US', {
              minimumFractionDigits: 2,
             maximumFractionDigits: 2,
         }).format(params.value);
        }
        return params.value;
      },
      sortable: false,
    },
    {
      field: "total",
      headerName: "Total (RM)",
      type: "number",
      width: 120,
      flex: 1,
      sortable: false,
    },
  ];

  const columnGroupingModel: GridColumnGroupingModel = [
    {
      groupId: "Contributions",
      description: "enter below",
      headerAlign: "center",
      children: [
        { field: "employer" },
        { field: "employee" },
        { field: "total_emp" },
      ],
    },
    {
      groupId: "Account Details",
      description: "auto populate for account1 and account2",
      headerAlign: "center",
      children: [
        { field: "account1" },
        { field: "account2" },
        { field: "account3" },
        { field: "total" },
      ],
    },
  ];

  const getCellClassName: DataGridProps["getCellClassName"] = ({
    row,
    field,
  }) => {
    if (
      row.id === "Opening Balance" ||
      row.id === "Dividend Received for Year" ||
      row.id === "Balance as of 31st Dec"
    ) {
      if (field === "month") {
        return "bold";
      }
    }
    return "";
  };

  const replicateEmployer = () => {

    const currentAmount = state.month.jan.employer;

    setState({
      ...state,
      month : {
        ...state.month,
        feb: { ...state.month.feb, employer: currentAmount },
        mar: { ...state.month.mar, employer: currentAmount },
        apr: { ...state.month.apr, employer: currentAmount },
        may: { ...state.month.may, employer: currentAmount },
        jun: { ...state.month.jun, employer: currentAmount },
        jul: { ...state.month.jul, employer: currentAmount },
        aug: { ...state.month.aug, employer: currentAmount },
        sep: { ...state.month.sep, employer: currentAmount },
        oct: { ...state.month.oct, employer: currentAmount },
        nov: { ...state.month.nov, employer: currentAmount },
        dec: { ...state.month.dec, employer: currentAmount },
      }
    });

  }

  const replicateEmployee = () => {

    const currentAmount = state.month.jan.employee;

    setState({
      ...state,
      month : {
        ...state.month,
        feb: { ...state.month.feb, employee: currentAmount },
        mar: { ...state.month.mar, employee: currentAmount },
        apr: { ...state.month.apr, employee: currentAmount },
        may: { ...state.month.may, employee: currentAmount },
        jun: { ...state.month.jun, employee: currentAmount },
        jul: { ...state.month.jul, employee: currentAmount },
        aug: { ...state.month.aug, employee: currentAmount },
        sep: { ...state.month.sep, employee: currentAmount },
        oct: { ...state.month.oct, employee: currentAmount },
        nov: { ...state.month.nov, employee: currentAmount },
        dec: { ...state.month.dec, employee: currentAmount },
      }
    });

  }

  const emptyAcc3 = () => {

      setState({
      ...state,
      open_acc3: 0,
      empty_acc3: true,
      month : {
        ...state.month,
        jan: { ...state.month.jan, account3: 0 },
        feb: { ...state.month.feb, account3: 0 },
        mar: { ...state.month.mar, account3: 0 },
        apr: { ...state.month.apr, account3: 0 },
        may: { ...state.month.may, account3: 0 },
        jun: { ...state.month.jun, account3: 0 },
        jul: { ...state.month.jul, account3: 0 },
        aug: { ...state.month.aug, account3: 0 },
        sep: { ...state.month.sep, account3: 0 },
        oct: { ...state.month.oct, account3: 0 },
        nov: { ...state.month.nov, account3: 0 },
        dec: { ...state.month.dec, account3: 0 },
      }
    });

  }

  const recalculate = () => {

    const newState = {...state};

    if (newState.empty_acc3) {
      ratioAcc3 = 0
    }

    // total_emp
    // account 1
    // account 2
    // account 3
    // total
    newState.month.jan.total_emp = newState.month.jan.employee + newState.month.jan.employer;
    newState.month.jan.account1 = newState.open_acc1 + (newState.month.jan.total_emp * ratioAcc1);
    newState.month.jan.account2 = newState.open_acc2 + (newState.month.jan.total_emp * ratioAcc2);
    newState.month.jan.account3 = newState.open_acc3 + (newState.month.jan.total_emp * ratioAcc3);
    newState.month.jan.total = newState.month.jan.account1 + newState.month.jan.account2 + newState.month.jan.account3;

    newState.month.feb.total_emp = newState.month.feb.employee + newState.month.feb.employer;
    newState.month.feb.account1 = newState.month.jan.account1 + (newState.month.feb.total_emp * ratioAcc1);
    newState.month.feb.account2 = newState.month.jan.account2 + (newState.month.feb.total_emp * ratioAcc2);
    newState.month.feb.account3 = newState.month.jan.account3 + (newState.month.feb.total_emp * ratioAcc3);
    newState.month.feb.total = newState.month.feb.account1 + newState.month.feb.account2 + newState.month.feb.account3;

    newState.month.mar.total_emp = newState.month.mar.employee + newState.month.mar.employer;
    newState.month.mar.account1 = newState.month.feb.account1 + (newState.month.mar.total_emp * ratioAcc1);
    newState.month.mar.account2 = newState.month.feb.account2 + (newState.month.mar.total_emp * ratioAcc2);
    newState.month.mar.account3 = newState.month.feb.account3 + (newState.month.mar.total_emp * ratioAcc3);
    newState.month.mar.total = newState.month.mar.account1 + newState.month.mar.account2 + newState.month.mar.account3;

    newState.month.apr.total_emp = newState.month.apr.employee + newState.month.apr.employer;
    newState.month.apr.account1 = newState.month.mar.account1 + (newState.month.apr.total_emp * ratioAcc1);
    newState.month.apr.account2 = newState.month.mar.account2 + (newState.month.apr.total_emp * ratioAcc2);
    newState.month.apr.account3 = newState.month.mar.account3 + (newState.month.apr.total_emp * ratioAcc3);
    newState.month.apr.total = newState.month.apr.account1 + newState.month.apr.account2 + newState.month.apr.account3;

    newState.month.may.total_emp = newState.month.may.employee + newState.month.may.employer;
    newState.month.may.account1 = newState.month.apr.account1 + (newState.month.may.total_emp * ratioAcc1);
    newState.month.may.account2 = newState.month.apr.account2 + (newState.month.may.total_emp * ratioAcc2);
    newState.month.may.account3 = newState.month.apr.account3 + (newState.month.may.total_emp * ratioAcc3);
    newState.month.may.total = newState.month.may.account1 + newState.month.may.account2 + newState.month.may.account3;

    newState.month.jun.total_emp = newState.month.jun.employee + newState.month.jun.employer;
    newState.month.jun.account1 = newState.month.may.account1 + (newState.month.jun.total_emp * ratioAcc1);
    newState.month.jun.account2 = newState.month.may.account2 + (newState.month.jun.total_emp * ratioAcc2);
    newState.month.jun.account3 = newState.month.may.account3 + (newState.month.jun.total_emp * ratioAcc3);
    newState.month.jun.total = newState.month.jun.account1 + newState.month.jun.account2 + newState.month.jun.account3;

    newState.month.jul.total_emp = newState.month.jul.employee + newState.month.jul.employer;
    newState.month.jul.account1 = newState.month.jun.account1 + (newState.month.jul.total_emp * ratioAcc1);
    newState.month.jul.account2 = newState.month.jun.account2 + (newState.month.jul.total_emp * ratioAcc2);
    newState.month.jul.account3 = newState.month.jun.account3 + (newState.month.jul.total_emp * ratioAcc3);
    newState.month.jul.total = newState.month.jul.account1 + newState.month.jul.account2 + newState.month.jul.account3;

    newState.month.aug.total_emp = newState.month.aug.employee + newState.month.aug.employer;
    newState.month.aug.account1 = newState.month.jul.account1 + (newState.month.aug.total_emp * ratioAcc1);
    newState.month.aug.account2 = newState.month.jul.account2 + (newState.month.aug.total_emp * ratioAcc2);
    newState.month.aug.account3 = newState.month.jul.account3 + (newState.month.aug.total_emp * ratioAcc3);
    newState.month.aug.total = newState.month.aug.account1 + newState.month.aug.account2 + newState.month.aug.account3;

    newState.month.sep.total_emp = newState.month.sep.employee + newState.month.sep.employer;
    newState.month.sep.account1 = newState.month.aug.account1 + (newState.month.sep.total_emp * ratioAcc1);
    newState.month.sep.account2 = newState.month.aug.account2 + (newState.month.sep.total_emp * ratioAcc2);
    newState.month.sep.account3 = newState.month.aug.account3 + (newState.month.sep.total_emp * ratioAcc3);
    newState.month.sep.total = newState.month.sep.account1 + newState.month.sep.account2 + newState.month.sep.account3;

    newState.month.oct.total_emp = newState.month.oct.employee + newState.month.oct.employer;
    newState.month.oct.account1 = newState.month.sep.account1 + (newState.month.oct.total_emp * ratioAcc1);
    newState.month.oct.account2 = newState.month.sep.account2 + (newState.month.oct.total_emp * ratioAcc2);
    newState.month.oct.account3 = newState.month.sep.account3 + (newState.month.oct.total_emp * ratioAcc3);
    newState.month.oct.total = newState.month.oct.account1 + newState.month.oct.account2 + newState.month.oct.account3;

    newState.month.nov.total_emp = newState.month.nov.employee + newState.month.nov.employer;
    newState.month.nov.account1 = newState.month.oct.account1 + (newState.month.nov.total_emp * ratioAcc1);
    newState.month.nov.account2 = newState.month.oct.account2 + (newState.month.nov.total_emp * ratioAcc2);
    newState.month.nov.account3 = newState.month.oct.account3 + (newState.month.nov.total_emp * ratioAcc3);
    newState.month.nov.total = newState.month.nov.account1 + newState.month.nov.account2 + newState.month.nov.account3;

    newState.month.dec.total_emp = newState.month.dec.employee + newState.month.dec.employer;
    newState.month.dec.account1 = newState.month.nov.account1 + (newState.month.dec.total_emp * ratioAcc1);
    newState.month.dec.account2 = newState.month.nov.account2 + (newState.month.dec.total_emp * ratioAcc2);
    newState.month.dec.account3 = newState.month.nov.account3 + (newState.month.dec.total_emp * ratioAcc3);
    newState.month.dec.total = newState.month.dec.account1 + newState.month.dec.account2 + newState.month.dec.account3;



    // https://www.imoney.my/articles/what-does-the-6-40-epf-dividend-mean-to-your-savings
    // dividen account1 monthly
    /*
    Total contribution for Acc 1 x Dividend rate x (Total number of days in the year – Number of accumulated days for the month + 1) ÷ Total number of days in the year
    Example of calculation for January 2015 (Account 1):
    = RM1,137.50 x 6.40% x (365 – 31 + 1) ÷ 365
    = RM1,137.50 x 6.40% x (335) ÷ 365
    = RM66.82
    */
   const div_acc1_jan = newState.month.jan.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jan") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_feb = newState.month.feb.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "feb") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_mar = newState.month.mar.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "mar") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_apr = newState.month.apr.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "apr") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_may = newState.month.may.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "may") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_jun = newState.month.jun.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jun") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_jul = newState.month.jul.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jul") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_aug = newState.month.aug.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "aug") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_sep = newState.month.sep.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "sep") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_oct = newState.month.oct.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "oct") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_nov = newState.month.nov.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "nov") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_dec = newState.month.dec.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "dec") / getTotalDaysInYear(newState.dividenHistory.year);
   console.log(div_acc1_jan);                         //482.15999999999997
   console.log(newState.month.jan.total_emp * ratioAcc1); //8540
   console.log(newState.dividenHistory.dividend_interest / 100);     //0.061500000000000006
   console.log(getEPFDays(newState.dividenHistory.year, "jan"));     //336
   console.log(getTotalDaysInYear(newState.dividenHistory.year));    //366

    // dividen account2 monthly
    const div_acc2_jan = newState.month.jan.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jan") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_feb = newState.month.feb.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "feb") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_mar = newState.month.mar.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "mar") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_apr = newState.month.apr.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "apr") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_may = newState.month.may.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "may") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_jun = newState.month.jun.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jun") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_jul = newState.month.jul.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jul") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_aug = newState.month.aug.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "aug") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_sep = newState.month.sep.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "sep") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_oct = newState.month.oct.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "oct") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_nov = newState.month.nov.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "nov") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_dec = newState.month.dec.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "dec") / getTotalDaysInYear(newState.dividenHistory.year);

    // dividen account3 monthly
    const div_acc3_jan = newState.month.jan.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jan") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_feb = newState.month.feb.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "feb") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_mar = newState.month.mar.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "mar") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_apr = newState.month.apr.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "apr") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_may = newState.month.may.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "may") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_jun = newState.month.jun.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jun") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_jul = newState.month.jul.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jul") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_aug = newState.month.aug.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "aug") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_sep = newState.month.sep.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "sep") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_oct = newState.month.oct.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "oct") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_nov = newState.month.nov.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "nov") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_dec = newState.month.dec.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "dec") / getTotalDaysInYear(newState.dividenHistory.year);

    // dividen account1
    const dividend_acc1 = newState.open_acc1 * newState.dividenHistory.dividend_interest / 100;
    newState.dividend_acc1 = div_acc1_jan + div_acc1_feb + div_acc1_mar + div_acc1_apr +
                             div_acc1_may + div_acc1_jun + div_acc1_jul + div_acc1_aug +
                             div_acc1_sep + div_acc1_oct + div_acc1_nov + div_acc1_dec +
                             dividend_acc1;

    // dividen account2
    const dividend_acc2 = newState.open_acc2 * newState.dividenHistory.dividend_interest / 100;
    newState.dividend_acc2 = div_acc2_jan + div_acc2_feb + div_acc2_mar + div_acc2_apr +
                             div_acc2_may + div_acc2_jun + div_acc2_jul + div_acc2_aug +
                             div_acc2_sep + div_acc2_oct + div_acc2_nov + div_acc2_dec +
                             dividend_acc2;

    // dividen account3
    const dividend_acc3 = newState.open_acc3 * newState.dividenHistory.dividend_interest / 100;
    newState.dividend_acc3 = div_acc3_jan + div_acc3_feb + div_acc3_mar + div_acc3_apr +
                             div_acc3_may + div_acc3_jun + div_acc3_jul + div_acc3_aug +
                             div_acc3_sep + div_acc3_oct + div_acc3_nov + div_acc3_dec +
                             dividend_acc3;

    // dividen total
    newState.dividend_total = newState.dividend_acc1 + newState.dividend_acc2 + newState.dividend_acc3;

    // balance end
    newState.balance_acc1 = newState.month.dec.account1 + newState.dividend_acc1;
    newState.balance_acc2 = newState.month.dec.account2 + newState.dividend_acc2;
    newState.balance_acc3 = newState.month.dec.account3 + newState.dividend_acc3;
    newState.balance_total = newState.balance_acc1 + newState.balance_acc2 + newState.balance_acc3;



    setState(newState);

  }



  const processRowUpdate = (newRow : any, oldRow : any) => {
    console.log(JSON.stringify(newRow));
    console.log(JSON.stringify(oldRow));

    // new : {"id":"Opening Balance","label":"Opening Balance","account1":70003,"account2":30000,"total":100000}
    // old : {"id":"Opening Balance","label":"Opening Balance","account1":70000,"account2":30000,"total":100000}

    // new : {"id":"Opening Balance","label":"Opening Balance","account1":70000,"account2":30003,"total":100000}
    // old : {"id":"Opening Balance","label":"Opening Balance","account1":70000,"account2":30000,"total":100000}


    // new : {"id":"Feb","month":"Feb","employer":11000,"employee":1200,"total_emp":2300,"account1":73220,"account2":31380,"total":104600}
    // old : {"id":"Feb","month":"Feb","employer":11001,"employee":1200,"total_emp":2300,"account1":73220,"account2":31380,"total":104600}

    // new : {"id":"Jan","month":"Jan","employer":1100,"employee":1200,"total_emp":2300,"account1":76725,"account2":15345,"account3":0,"total":102300}
    // old : {"id":"Jan","month":"Jan","employer":1100,"employee":1200,"total_emp":2300,"account1":76725,"account2":15345,"account3":10230,"total":102300}


    const newState = {...state};

    if (newRow.id === 'Opening Balance') {

      newState.open_acc1 = newRow.account1;
      newState.open_acc2 = newRow.account2;
      newState.open_acc3 = newRow.account3;
      newState.total =  newRow.account1 + newRow.account2 + newRow.account3;

    } else {
      // {"id":"Jan","month":"Jan","employer":1100,"employee":1200,"total_emp":2300,"account1":76725,"account2":15345,"account3":0,"total":102300}
      // https://stackoverflow.com/questions/40562647/what-is-the-most-efficient-way-to-copy-some-properties-from-an-object-in-javascr
      const { id, month, ...new1Row} = newRow;

      switch (newRow.id) {
        case 'Jan':
          // https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react
          newState.month.jan = {...new1Row}
          break;
        case 'Feb':
          newState.month.feb = {...new1Row};
          break;
        case 'Mar':
          newState.month.mar = {...new1Row};
          break;
        case 'Apr':
          newState.month.apr = {...new1Row};
          break;
        case 'May':
          newState.month.may = {...new1Row};
          break;
        case 'Jun':
          newState.month.jun = {...new1Row};
          break;
        case 'Jul':
          newState.month.jul = {...new1Row};
          break;
        case 'Aug':
          newState.month.aug = {...new1Row};
          break;
        case 'Sep':
          newState.month.sep = {...new1Row};
          break;
        case 'Oct':
          newState.month.oct = {...new1Row};
          break;
        case 'Nov':
          newState.month.nov = {...new1Row};
          break;
        case 'Dec':
          newState.month.dec = {...new1Row};
          break;
      }

    }

    const isAcc3Change = oldRow.account3 !== newRow.account3
    const changeMonth = isAcc3Change ? newRow.month : -1

    // total_emp
    // account 1
    // account 2
    // account 3
    // total

    newState.month.jan.total_emp = newState.month.jan.employee + newState.month.jan.employer;
    newState.month.jan.account1 = newState.open_acc1 + (newState.month.jan.total_emp * ratioAcc1);
    newState.month.jan.account2 = newState.open_acc2 + (newState.month.jan.total_emp * ratioAcc2);
    newState.month.jan.account3 = changeMonth === "Jan" && isAcc3Change ? newRow.account3 : newState.open_acc3 + (newState.month.jan.total_emp * ratioAcc3);
    newState.month.jan.total = newState.month.jan.account1 + newState.month.jan.account2 + newState.month.jan.account3;

    newState.month.feb.total_emp = newState.month.feb.employee + newState.month.feb.employer;
    newState.month.feb.account1 = newState.month.jan.account1 + (newState.month.feb.total_emp * ratioAcc1);
    newState.month.feb.account2 = newState.month.jan.account2 + (newState.month.feb.total_emp * ratioAcc2);
    newState.month.feb.account3 = changeMonth === "Feb" && isAcc3Change ? newRow.account3 : newState.month.jan.account3 + (newState.month.feb.total_emp * ratioAcc3);
    newState.month.feb.total = newState.month.feb.account1 + newState.month.feb.account2 + newState.month.feb.account3;

    newState.month.mar.total_emp = newState.month.mar.employee + newState.month.mar.employer;
    newState.month.mar.account1 = newState.month.feb.account1 + (newState.month.mar.total_emp * ratioAcc1);
    newState.month.mar.account2 = newState.month.feb.account2 + (newState.month.mar.total_emp * ratioAcc2);
    newState.month.mar.account3 = changeMonth === "Mar" && isAcc3Change ? newRow.account3 : newState.month.feb.account3 + (newState.month.mar.total_emp * ratioAcc3);
    newState.month.mar.total = newState.month.mar.account1 + newState.month.mar.account2 + newState.month.mar.account3;

    newState.month.apr.total_emp = newState.month.apr.employee + newState.month.apr.employer;
    newState.month.apr.account1 = newState.month.mar.account1 + (newState.month.apr.total_emp * ratioAcc1);
    newState.month.apr.account2 = newState.month.mar.account2 + (newState.month.apr.total_emp * ratioAcc2);
    newState.month.apr.account3 = changeMonth === "Apr" && isAcc3Change ? newRow.account3 : newState.month.mar.account3 + (newState.month.apr.total_emp * ratioAcc3);
    newState.month.apr.total = newState.month.apr.account1 + newState.month.apr.account2 + newState.month.apr.account3;

    newState.month.may.total_emp = newState.month.may.employee + newState.month.may.employer;
    newState.month.may.account1 = newState.month.apr.account1 + (newState.month.may.total_emp * ratioAcc1);
    newState.month.may.account2 = newState.month.apr.account2 + (newState.month.may.total_emp * ratioAcc2);
    newState.month.may.account3 = changeMonth === "May" && isAcc3Change ? newRow.account3 : newState.month.apr.account3 + (newState.month.may.total_emp * ratioAcc3);
    newState.month.may.total = newState.month.may.account1 + newState.month.may.account2 + newState.month.may.account3;

    newState.month.jun.total_emp = newState.month.jun.employee + newState.month.jun.employer;
    newState.month.jun.account1 = newState.month.may.account1 + (newState.month.jun.total_emp * ratioAcc1);
    newState.month.jun.account2 = newState.month.may.account2 + (newState.month.jun.total_emp * ratioAcc2);
    newState.month.jun.account3 = changeMonth === "Jun" && isAcc3Change ? newRow.account3 : newState.month.may.account3 + (newState.month.jun.total_emp * ratioAcc3);
    newState.month.jun.total = newState.month.jun.account1 + newState.month.jun.account2 + newState.month.jun.account3;

    newState.month.jul.total_emp = newState.month.jul.employee + newState.month.jul.employer;
    newState.month.jul.account1 = newState.month.jun.account1 + (newState.month.jul.total_emp * ratioAcc1);
    newState.month.jul.account2 = newState.month.jun.account2 + (newState.month.jul.total_emp * ratioAcc2);
    newState.month.jul.account3 = changeMonth === "Jul" && isAcc3Change ? newRow.account3 : newState.month.jun.account3 + (newState.month.jul.total_emp * ratioAcc3);
    newState.month.jul.total = newState.month.jul.account1 + newState.month.jul.account2 + newState.month.jul.account3;

    newState.month.aug.total_emp = newState.month.aug.employee + newState.month.aug.employer;
    newState.month.aug.account1 = newState.month.jul.account1 + (newState.month.aug.total_emp * ratioAcc1);
    newState.month.aug.account2 = newState.month.jul.account2 + (newState.month.aug.total_emp * ratioAcc2);
    newState.month.aug.account3 = changeMonth === "Aug" && isAcc3Change ? newRow.account3 : newState.month.jul.account3 + (newState.month.aug.total_emp * ratioAcc3);
    newState.month.aug.total = newState.month.aug.account1 + newState.month.aug.account2 + newState.month.aug.account3;

    newState.month.sep.total_emp = newState.month.sep.employee + newState.month.sep.employer;
    newState.month.sep.account1 = newState.month.aug.account1 + (newState.month.sep.total_emp * ratioAcc1);
    newState.month.sep.account2 = newState.month.aug.account2 + (newState.month.sep.total_emp * ratioAcc2);
    newState.month.sep.account3 = changeMonth === "Sep" && isAcc3Change ? newRow.account3 : newState.month.aug.account3 + (newState.month.sep.total_emp * ratioAcc3);
    newState.month.sep.total = newState.month.sep.account1 + newState.month.sep.account2 + newState.month.sep.account3;

    newState.month.oct.total_emp = newState.month.oct.employee + newState.month.oct.employer;
    newState.month.oct.account1 = newState.month.sep.account1 + (newState.month.oct.total_emp * ratioAcc1);
    newState.month.oct.account2 = newState.month.sep.account2 + (newState.month.oct.total_emp * ratioAcc2);
    newState.month.oct.account3 = changeMonth === "Oct" && isAcc3Change ? newRow.account3 : newState.month.sep.account3 + (newState.month.oct.total_emp * ratioAcc3);
    newState.month.oct.total = newState.month.oct.account1 + newState.month.oct.account2 + newState.month.oct.account3;

    newState.month.nov.total_emp = newState.month.nov.employee + newState.month.nov.employer;
    newState.month.nov.account1 = newState.month.oct.account1 + (newState.month.nov.total_emp * ratioAcc1);
    newState.month.nov.account2 = newState.month.oct.account2 + (newState.month.nov.total_emp * ratioAcc2);
    newState.month.nov.account3 = changeMonth === "Nov" && isAcc3Change ? newRow.account3 : newState.month.oct.account3 + (newState.month.nov.total_emp * ratioAcc3);
    newState.month.nov.total = newState.month.nov.account1 + newState.month.nov.account2 + newState.month.nov.account3;

    newState.month.dec.total_emp = newState.month.dec.employee + newState.month.dec.employer;
    newState.month.dec.account1 = newState.month.nov.account1 + (newState.month.dec.total_emp * ratioAcc1);
    newState.month.dec.account2 = newState.month.nov.account2 + (newState.month.dec.total_emp * ratioAcc2);
    newState.month.dec.account3 = changeMonth === "Dec" && isAcc3Change ? newRow.account3 : newState.month.nov.account3 + (newState.month.dec.total_emp * ratioAcc3);
    newState.month.dec.total = newState.month.dec.account1 + newState.month.dec.account2 + newState.month.dec.account3;



    // https://www.imoney.my/articles/what-does-the-6-40-epf-dividend-mean-to-your-savings
    // dividen account1 monthly
    /*
    Total contribution for Acc 1 x Dividend rate x (Total number of days in the year – Number of accumulated days for the month + 1) ÷ Total number of days in the year
    Example of calculation for January 2015 (Account 1):
    = RM1,137.50 x 6.40% x (365 – 31 + 1) ÷ 365
    = RM1,137.50 x 6.40% x (335) ÷ 365
    = RM66.82
    */
   const div_acc1_jan = newState.month.jan.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jan") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_feb = newState.month.feb.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "feb") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_mar = newState.month.mar.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "mar") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_apr = newState.month.apr.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "apr") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_may = newState.month.may.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "may") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_jun = newState.month.jun.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jun") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_jul = newState.month.jul.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jul") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_aug = newState.month.aug.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "aug") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_sep = newState.month.sep.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "sep") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_oct = newState.month.oct.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "oct") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_nov = newState.month.nov.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "nov") / getTotalDaysInYear(newState.dividenHistory.year);
   const div_acc1_dec = newState.month.dec.total_emp * ratioAcc1 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "dec") / getTotalDaysInYear(newState.dividenHistory.year);
   console.log(div_acc1_jan);                         //482.15999999999997
   console.log(newState.month.jan.total_emp * ratioAcc1); //8540
   console.log(newState.dividenHistory.dividend_interest / 100);     //0.061500000000000006
   console.log(getEPFDays(newState.dividenHistory.year, "jan"));     //336
   console.log(getTotalDaysInYear(newState.dividenHistory.year));    //366

    // dividen account2 monthly
    const div_acc2_jan = newState.month.jan.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jan") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_feb = newState.month.feb.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "feb") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_mar = newState.month.mar.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "mar") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_apr = newState.month.apr.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "apr") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_may = newState.month.may.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "may") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_jun = newState.month.jun.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jun") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_jul = newState.month.jul.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jul") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_aug = newState.month.aug.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "aug") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_sep = newState.month.sep.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "sep") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_oct = newState.month.oct.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "oct") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_nov = newState.month.nov.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "nov") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc2_dec = newState.month.dec.total_emp * ratioAcc2 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "dec") / getTotalDaysInYear(newState.dividenHistory.year);

    // dividen account3 monthly
    const div_acc3_jan = newState.month.jan.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jan") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_feb = newState.month.feb.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "feb") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_mar = newState.month.mar.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "mar") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_apr = newState.month.apr.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "apr") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_may = newState.month.may.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "may") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_jun = newState.month.jun.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jun") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_jul = newState.month.jul.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "jul") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_aug = newState.month.aug.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "aug") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_sep = newState.month.sep.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "sep") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_oct = newState.month.oct.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "oct") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_nov = newState.month.nov.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "nov") / getTotalDaysInYear(newState.dividenHistory.year);
    const div_acc3_dec = newState.month.dec.total_emp * ratioAcc3 * (newState.dividenHistory.dividend_interest / 100) * getEPFDays(newState.dividenHistory.year, "dec") / getTotalDaysInYear(newState.dividenHistory.year);

    // dividen account1
    const dividend_acc1 = newState.open_acc1 * newState.dividenHistory.dividend_interest / 100;
    newState.dividend_acc1 = div_acc1_jan + div_acc1_feb + div_acc1_mar + div_acc1_apr +
                             div_acc1_may + div_acc1_jun + div_acc1_jul + div_acc1_aug +
                             div_acc1_sep + div_acc1_oct + div_acc1_nov + div_acc1_dec +
                             dividend_acc1;

    // dividen account2
    const dividend_acc2 = newState.open_acc2 * newState.dividenHistory.dividend_interest / 100;
    newState.dividend_acc2 = div_acc2_jan + div_acc2_feb + div_acc2_mar + div_acc2_apr +
                             div_acc2_may + div_acc2_jun + div_acc2_jul + div_acc2_aug +
                             div_acc2_sep + div_acc2_oct + div_acc2_nov + div_acc2_dec +
                             dividend_acc2;

    const dividend_acc3 = newState.open_acc3 * newState.dividenHistory.dividend_interest / 100;
    newState.dividend_acc3 = div_acc3_jan + div_acc3_feb + div_acc3_mar + div_acc3_apr +
                             div_acc3_may + div_acc3_jun + div_acc3_jul + div_acc3_aug +
                             div_acc3_sep + div_acc3_oct + div_acc3_nov + div_acc3_dec +
                             dividend_acc3;

    console.log("newState.dividend_acc1", newState.dividend_acc1)
    //console.log("", )
    //console.log("", )

    // dividen total
    newState.dividend_total = newState.dividend_acc1 + newState.dividend_acc2 + newState.dividend_acc3;

    // balance end
    newState.balance_acc1 = newState.month.dec.account1 + newState.dividend_acc1;
    newState.balance_acc2 = newState.month.dec.account2 + newState.dividend_acc2;
    newState.balance_acc3 = newState.month.dec.account3 + newState.dividend_acc3;
    newState.balance_total = newState.balance_acc1 + newState.balance_acc2 + newState.balance_acc3;



    setState(newState);
    console.log(state);

    return newRow;
  }

  // https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
  const daysInMonth = (year : number, month : string) : number => {
    let num : number = 0;
    switch (month) {
      case "jan":
        num = 1;
        break;
      case "feb":
        num = 2;
        break;
      case "mar":
        num = 3;
        break;
      case "apr":
        num = 4;
        break;
      case "may":
        num = 5;
        break;
      case "jun":
        num = 6;
        break;
      case "jul":
        num = 7;
        break;
      case "aug":
        num = 8;
        break;
      case "sep":
        num = 9;
        break;
      case "oct":
        num = 10;
        break;
      case "nov":
        num = 11;
        break;
      case "dec":
        num = 12;
        break;
    }
    return new Date(year, num, 0).getDate();
  }

  const getMonthInNum = (month : string) : number => {
    let num : number = 0;
    switch (month) {
      case "jan":
        num = 1;
        break;
      case "feb":
        num = 2;
        break;
      case "mar":
        num = 3;
        break;
      case "apr":
        num = 4;
        break;
      case "may":
        num = 5;
        break;
      case "jun":
        num = 6;
        break;
      case "jul":
        num = 7;
        break;
      case "aug":
        num = 8;
        break;
      case "sep":
        num = 9;
        break;
      case "oct":
        num = 10;
        break;
      case "nov":
        num = 11;
        break;
      case "dec":
        num = 12;
        break;
    }
    return num;
  }

  const getNumInMonth = (num : number) : string => {
    let month : string = "";
    switch (num) {
      case 1:
        month = "jan";
        break;
      case 2:
        month = "feb";
        break;
      case 3:
        month = "mar";
        break;
      case 4:
        month = "apr";
        break;
      case 5:
        month = "may";
        break;
      case 6:
        month = "jun";
        break;
      case 7:
        month = "jul";
        break;
      case 8:
        month = "aug";
        break;
      case 9:
        month = "sep";
        break;
      case 10:
        month = "oct";
        break;
      case 11:
        month = "nov";
        break;
      case 12:
        month = "dec";
        break;
    }
    return month;
  }

  // (Total number of days in the year – Number of accumulated days for the month + 1)
  const getEPFDays = (year : number, month : string) : number => {

    let days : number = 0;
    for (let i = 1; i <= getMonthInNum(month); i++) {
      days += daysInMonth(year, getNumInMonth(i));
    }
    return getTotalDaysInYear(year) - days + 1;
  }

  const getTotalDaysInYear = (year : number) : number => {
    return ((year % 4 === 0 && year % 100 > 0) || year %400 === 0) ? 366 : 365;
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ bgcolor: "#efeded" }}>
        <Container fixed>
          <Box sx={{ bgcolor: "#ffffff", height: "100vh" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography variant="h3" gutterBottom>
                    Employees Provident Fund (EPF) Dividend Calculator
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Autocomplete
                    value={state.dividenHistory}
                    sx={{ width: 300,  marginRight: 1 }}
                    onChange={(event, newValue: string | IDividenHistory | null) => {

                      if (typeof newValue === 'string') {
                        setState({...state,
                                  dividenHistory: {
                                   ...state.dividenHistory,
                                   year: +newValue,
                                  }
                        });
                      } else if (typeof newValue === 'object') {
                        setState({...state,
                                  dividenHistory: {
                                   ...state.dividenHistory,
                                   year: +newValue!.year,
                                   dividend_interest: +newValue!.dividend_interest,
                                  }
                        });
                      }
                    }}
                    filterOptions={(options, params) => {

                      const filtered = filter(options as IDividenHistory[], params);

                      const { inputValue } = params;
                      // Suggest the creation of a new value
                      const isExisting = options.some((option) =>
                        typeof option !== 'string' && +inputValue === option.year
                      );

                      if (inputValue !== '' && !isExisting) {
                        filtered.push({
                          inputValue: +inputValue,
                          year: +inputValue,
                          dividend_interest: 0, // custom year input , just set dividend_interest to 0
                        });
                      }
                      return filtered;

                    }}
                    getOptionLabel={(option: string | IDividenHistory) => typeof option === 'string' ? option : `${option.year}`}
                    options={dividenHistories}
                    renderInput={(params) => <TextField {...params} label="Year" />}
                    freeSolo
                    onBlur={() => recalculate()}
                  />
                  <TextField
                    sx={{ marginLeft: 1 }}
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    label="dividen"
                    variant="outlined"
                    value={state.dividenHistory.dividend_interest ? state.dividenHistory.dividend_interest : 0}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setState({...state, dividenHistory: {
                          ...state.dividenHistory,
                          dividend_interest: +event.target.value
                          } });
                    }}
                    onBlur={() => recalculate()}
                  />
                </Grid>
                <Grid xs={12}>
                  <Box
                    sx={{
                      width: "100%",
                      "& .super-app-theme--cell": {
                        backgroundColor: "#b3e5fc",
                        color: "#101a1e",
                        fontWeight: "600",
                      },
                      "& .bold": {
                        fontWeight: 800,
                        justifyContent: "flex-end !important",
                      },
                    }}
                  >
                    <DataGrid
                      sx={{ m: 5 }}
                      experimentalFeatures={{ columnGrouping: true }}
                      rows={rows}
                      columns={columns}
                      columnGroupingModel={columnGroupingModel}
                      getCellClassName={getCellClassName}
                      density="compact"
                      showColumnVerticalBorder
                      isCellEditable={(params) =>
                          (params.row.id === "Opening Balance" ||
                          params.field === "employer" ||
                          params.field === "employee" ||
                          params.field === "account3") &&
                          params.row.id !== "Action Row"
                      }
                      processRowUpdate = {processRowUpdate}
                      onProcessRowUpdateError = {(error) => console.log(error)}
                      autoHeight
                      hideFooter
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default App;
