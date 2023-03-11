import * as React from "react";
//import logo from './logo.svg';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import clsx from "clsx";
//import './App.css';
//import Button from '@mui/material/Button';
//import FormGroup from '@mui/material/FormGroup';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import TextField from "@mui/material/TextField";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridColumnGroupingModel,
  DataGridProps,
  GridCellParams,
  GridRenderEditCellParams,
  GridValueSetterParams,
  GridCellEditStopParams,
  MuiEvent
} from "@mui/x-data-grid";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { RampRight } from "@mui/icons-material";


type EPF = {
  year: number,
  dividend_interest: number,

  open_acc1: number,
  open_acc2: number,  
  total: number,

  month: {
    jan : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    feb : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    mar : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    apr : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    may : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    jun : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    jul : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    aug : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    sep : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    oct : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    nov : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    dec : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
  },

  dividend_acc1: number,
  dividend_acc2: number,
  dividend_total: number,

  balance_acc1: number,
  balance_acc2: number,
  balance_total: number,
}

function App() {

  const ratio = 0.7;

  const initialState : EPF = {
    year: new Date().getFullYear() - 1,
    //year: 2012,
    dividend_interest: 5.35,
    open_acc1: 70000,
    open_acc2: 30000,
    get total () {
      return this.open_acc1 + this.open_acc2;
    },
    month: {
      jan : { employer : 1100, employee : 1200, 
              //get total_emp() {  return this.employer + this.employee}, 
              //set total_emp(v: number) {this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.open_acc1 + this.total_emp * ratio},
              //set account1(v) { this.account1 = v},
              account1: 71610,
              //get account2() { return initialState.open_acc2 + this.total_emp * (1-ratio)},
              //set account2(v) { this.account2 = v},
              account2: 30690,
              //get total() { return this.account1 + this.account2},
              //set total(v) { this.total = v},
              total: 102300,
            },
      feb : { employer : 1100, employee : 1200,
              //get total_emp() { return this.employer + this.employee}, 
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.jan.account1 + this.total_emp * ratio},
              //set account1(v) { this.account1 = v},
              account1: 73220,
              //get account2() { return initialState.month.jan.account2 + this.total_emp * (1-ratio)},
              //set account2(v) { this.account2 = v},
              account2: 31380,
              //get total() { return this.account1 + this.account2},
              //set total(v) { this.total = v},
              total: 104600,
            },
      mar : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.feb.account1 + this.total_emp * ratio},
              account1: 74830,
              //get account2() { return initialState.month.feb.account2 + this.total_emp * (1-ratio)},
              account2: 32070,
              //get total() { return this.account1 + this.account2}
              total: 106900,
            },
      apr : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.mar.account1 + this.total_emp * ratio},
              account1: 76440,
              //get account2() { return initialState.month.mar.account2 + this.total_emp * (1-ratio)},
              account2: 32760,
              //get total() { return this.account1 + this.account2}
              total: 109200,
            },
      may : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.apr.account1 + this.total_emp * ratio},
              account1: 78050,
              //get account2() { return initialState.month.apr.account2 + this.total_emp * (1-ratio)},
              account2: 33450,
              //get total() { return this.account1 + this.account2}
              total: 111500,
            },
      jun : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.may.account1 + this.total_emp * ratio},
              account1: 79660,
              //get account2() { return initialState.month.may.account2 + this.total_emp * (1-ratio)},
              account2: 34140,
              //get total() { return this.account1 + this.account2}
              total: 113800,
            },
      jul : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.jun.account1 + this.total_emp * ratio},
              account1: 81270,
              //get account2() { return initialState.month.jun.account2 + this.total_emp * (1-ratio)},
              account2: 34830,
              //get total() { return this.account1 + this.account2}
              total: 116100,
            },
      aug : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.jul.account1 + this.total_emp * ratio},
              account1: 82880,
              //get account2() { return initialState.month.jul.account2 + this.total_emp * (1-ratio)},
              account2: 35520,
              //get total() { return this.account1 + this.account2}
              total: 118400,
            },
      sep : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.aug.account1 + this.total_emp * ratio},
              account1: 84490,
              //get account2() { return initialState.month.aug.account2 + this.total_emp * (1-ratio)},
              account2: 36210,
              //get total() { return this.account1 + this.account2}
              total: 120700,
            },
      oct : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.sep.account1 + this.total_emp * ratio},
              account1: 86100,
              //get account2() { return initialState.month.sep.account2 + this.total_emp * (1-ratio)},
              account2: 36900,
              //get total() { return this.account1 + this.account2}
              total: 123000,
            },
      nov : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.oct.account1 + this.total_emp * ratio},
              account1: 87710,
              //get account2() { return initialState.month.oct.account2 + this.total_emp * (1-ratio)},
              account2: 37590,
              //get total() { return this.account1 + this.account2}
              total: 125300,
            },
      dec : { employer : 1100, employee : 1200,
              //get total_emp() {  return this.employer + this.employee},
              //set total_emp(v) { this.total_emp = v},
              total_emp : 2300,
              //get account1() { return initialState.month.nov.account1 + this.total_emp * ratio},
              account1: 89320,
              //get account2() { return initialState.month.nov.account2 + this.total_emp * (1-ratio)},
              account2: 38280,
              //get total() { return this.account1 + this.account2}
              total: 127600,
            },
    },
    dividend_acc1: 4854.48,
    dividend_acc2: 2080.36,
    dividend_total: 6934.55,

    balance_acc1: 94174.18,
    balance_acc2: 40360.36,
    balance_total: 134534.55,
  };

  const [state, setState] = React.useState(initialState);

  const rows1: GridRowsProp = [
    {
      id: "Jan",
      month: "Jan",
      employer: state.month.jan.employer,
      employee: state.month.jan.employee,
      total_emp: state.month.jan.employer + state.month.jan.employee,
      account1: state.open_acc1 + (state.month.jan.employer + state.month.jan.employee) * ratio,
      account2: state.open_acc2 + (state.month.jan.employer + state.month.jan.employee) * (1-ratio),
      total: (state.open_acc1 + (state.month.jan.employer + state.month.jan.employee) * ratio) + 
             (state.open_acc2 + (state.month.jan.employer + state.month.jan.employee) * (1-ratio)),
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
      total: state.month.dec.total,
    },
  ];

  type Item = typeof rows1[number];

  interface OpeningBalanceHeader {
    id: "Opening Balance";
    label: string;
    account1: number;
    account2: number;
    total: number;
  }

  interface DividenHeader {
    id: "Dividend Received for Year";
    label: string;
    account1: number;
    account2: number;
    total: number;
  }

  interface BalanceHeader {
    id: "Balance as of 31st Dec";
    label: string;
    account1: number;
    account2: number;
    total: number;
  }

  type Row = Item | OpeningBalanceHeader | DividenHeader | BalanceHeader;

  const rows: Row[] = [
    {
      id: "Opening Balance",
      label: "Opening Balance",
      account1: state.open_acc1,
      account2: state.open_acc2,
      total: state.total,
    },
    ...rows1,
    {
      id: "Dividend Received for Year",
      label: "Dividend Received for Year " + state.year,
      account1: state.dividend_acc1,
      account2: state.dividend_acc2,
      total: state.dividend_total,
    },
    {
      id: "Balance as of 31st Dec",
      label: "Balance as of 31st Dec " + state.year,
      account1: state.balance_acc1,
      account2: state.balance_acc2,
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
      cellClassName: "super-app-theme--cell",
      flex: 1,
      sortable: false,
    },
    {
      field: "employee",
      headerName: "Employee (RM)",
      type: "number",
      editable: true,
      width: 120,
      cellClassName: "super-app-theme--cell",
      flex: 1,
      sortable: false,
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
        if (params.id == "Opening Balance") {
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
        if (params.id == "Opening Balance") {
          return "super-app-theme--cell";
        }

        return "";
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
      description: "auto pop",
      headerAlign: "center",
      children: [
        { field: "account1" },
        { field: "account2" },
        { field: "total" },
      ],
    },
  ];

  /*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    <div>
      <Button variant="contained">Hello World</Button>
    </div>

     */

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

  const recalculate = () => {

    const newState = {...state};

    // total_emp
    // account 1
    // account 2
    // total
    newState.month.jan.total_emp = newState.month.jan.employee + newState.month.jan.employer;
    newState.month.jan.account1 = newState.open_acc1 + (newState.month.jan.total_emp * ratio);
    newState.month.jan.account2 = newState.open_acc2 + (newState.month.jan.total_emp * (1-ratio));
    newState.month.jan.total = newState.month.jan.account1 + newState.month.jan.account2;

    newState.month.feb.total_emp = newState.month.feb.employee + newState.month.feb.employer;
    newState.month.feb.account1 = newState.month.jan.account1 + (newState.month.feb.total_emp * ratio);
    newState.month.feb.account2 = newState.month.jan.account2 + (newState.month.feb.total_emp * (1-ratio));
    newState.month.feb.total = newState.month.feb.account1 + newState.month.feb.account2;

    newState.month.mar.total_emp = newState.month.mar.employee + newState.month.mar.employer;
    newState.month.mar.account1 = newState.month.feb.account1 + (newState.month.mar.total_emp * ratio);
    newState.month.mar.account2 = newState.month.feb.account2 + (newState.month.mar.total_emp * (1-ratio));
    newState.month.mar.total = newState.month.mar.account1 + newState.month.mar.account2;

    newState.month.apr.total_emp = newState.month.apr.employee + newState.month.apr.employer;
    newState.month.apr.account1 = newState.month.mar.account1 + (newState.month.apr.total_emp * ratio);
    newState.month.apr.account2 = newState.month.mar.account2 + (newState.month.apr.total_emp * (1-ratio));
    newState.month.apr.total = newState.month.apr.account1 + newState.month.apr.account2;
    
    newState.month.may.total_emp = newState.month.may.employee + newState.month.may.employer;
    newState.month.may.account1 = newState.month.apr.account1 + (newState.month.may.total_emp * ratio);
    newState.month.may.account2 = newState.month.apr.account2 + (newState.month.may.total_emp * (1-ratio));
    newState.month.may.total = newState.month.may.account1 + newState.month.may.account2;

    newState.month.jun.total_emp = newState.month.jun.employee + newState.month.jun.employer;
    newState.month.jun.account1 = newState.month.may.account1 + (newState.month.jun.total_emp * ratio);
    newState.month.jun.account2 = newState.month.may.account2 + (newState.month.jun.total_emp * (1-ratio));
    newState.month.jun.total = newState.month.jun.account1 + newState.month.jun.account2;

    newState.month.jul.total_emp = newState.month.jul.employee + newState.month.jul.employer;
    newState.month.jul.account1 = newState.month.jun.account1 + (newState.month.jul.total_emp * ratio);
    newState.month.jul.account2 = newState.month.jun.account2 + (newState.month.jul.total_emp * (1-ratio));
    newState.month.jul.total = newState.month.jul.account1 + newState.month.jul.account2;

    newState.month.aug.total_emp = newState.month.aug.employee + newState.month.aug.employer;
    newState.month.aug.account1 = newState.month.jul.account1 + (newState.month.aug.total_emp * ratio);
    newState.month.aug.account2 = newState.month.jul.account2 + (newState.month.aug.total_emp * (1-ratio));
    newState.month.aug.total = newState.month.aug.account1 + newState.month.aug.account2;

    newState.month.sep.total_emp = newState.month.sep.employee + newState.month.sep.employer;
    newState.month.sep.account1 = newState.month.aug.account1 + (newState.month.sep.total_emp * ratio);
    newState.month.sep.account2 = newState.month.aug.account2 + (newState.month.sep.total_emp * (1-ratio));
    newState.month.sep.total = newState.month.sep.account1 + newState.month.sep.account2;

    newState.month.oct.total_emp = newState.month.oct.employee + newState.month.oct.employer;
    newState.month.oct.account1 = newState.month.sep.account1 + (newState.month.oct.total_emp * ratio);
    newState.month.oct.account2 = newState.month.sep.account2 + (newState.month.oct.total_emp * (1-ratio));
    newState.month.oct.total = newState.month.oct.account1 + newState.month.oct.account2;

    newState.month.nov.total_emp = newState.month.nov.employee + newState.month.nov.employer;
    newState.month.nov.account1 = newState.month.oct.account1 + (newState.month.nov.total_emp * ratio);
    newState.month.nov.account2 = newState.month.oct.account2 + (newState.month.nov.total_emp * (1-ratio));
    newState.month.nov.total = newState.month.nov.account1 + newState.month.nov.account2;

    newState.month.dec.total_emp = newState.month.dec.employee + newState.month.dec.employer;
    newState.month.dec.account1 = newState.month.nov.account1 + (newState.month.dec.total_emp * ratio);
    newState.month.dec.account2 = newState.month.nov.account2 + (newState.month.dec.total_emp * (1-ratio));
    newState.month.dec.total = newState.month.dec.account1 + newState.month.dec.account2;

    
    
    // https://www.imoney.my/articles/what-does-the-6-40-epf-dividend-mean-to-your-savings
    // dividen account1 monthly
    /*
    Total contribution for Acc 1 x Dividend rate x (Total number of days in the year – Number of accumulated days for the month + 1) ÷ Total number of days in the year
    Example of calculation for January 2015 (Account 1):
    = RM1,137.50 x 6.40% x (365 – 31 + 1) ÷ 365
    = RM1,137.50 x 6.40% x (335) ÷ 365
    = RM66.82
    */
   const div_acc1_jan = newState.month.jan.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jan") / getTotalDaysInYear(newState.year);
   const div_acc1_feb = newState.month.feb.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "feb") / getTotalDaysInYear(newState.year);
   const div_acc1_mar = newState.month.mar.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "mar") / getTotalDaysInYear(newState.year);
   const div_acc1_apr = newState.month.apr.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "apr") / getTotalDaysInYear(newState.year);
   const div_acc1_may = newState.month.may.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "may") / getTotalDaysInYear(newState.year);
   const div_acc1_jun = newState.month.jun.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jun") / getTotalDaysInYear(newState.year);
   const div_acc1_jul = newState.month.jul.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jul") / getTotalDaysInYear(newState.year);
   const div_acc1_aug = newState.month.aug.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "aug") / getTotalDaysInYear(newState.year);
   const div_acc1_sep = newState.month.sep.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "sep") / getTotalDaysInYear(newState.year);
   const div_acc1_oct = newState.month.oct.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "oct") / getTotalDaysInYear(newState.year);
   const div_acc1_nov = newState.month.nov.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "nov") / getTotalDaysInYear(newState.year);
   const div_acc1_dec = newState.month.dec.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "dec") / getTotalDaysInYear(newState.year);
   console.log(div_acc1_jan);                         //482.15999999999997
   console.log(newState.month.jan.total_emp * ratio); //8540
   console.log(newState.dividend_interest / 100);     //0.061500000000000006
   console.log(getEPFDays(newState.year, "jan"));     //336
   console.log(getTotalDaysInYear(newState.year));    //366

    // dividen account2 monthly
    const div_acc2_jan = newState.month.jan.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jan") / getTotalDaysInYear(newState.year);
    const div_acc2_feb = newState.month.feb.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "feb") / getTotalDaysInYear(newState.year);
    const div_acc2_mar = newState.month.mar.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "mar") / getTotalDaysInYear(newState.year);
    const div_acc2_apr = newState.month.apr.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "apr") / getTotalDaysInYear(newState.year);
    const div_acc2_may = newState.month.may.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "may") / getTotalDaysInYear(newState.year);
    const div_acc2_jun = newState.month.jun.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jun") / getTotalDaysInYear(newState.year);
    const div_acc2_jul = newState.month.jul.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jul") / getTotalDaysInYear(newState.year);
    const div_acc2_aug = newState.month.aug.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "aug") / getTotalDaysInYear(newState.year);
    const div_acc2_sep = newState.month.sep.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "sep") / getTotalDaysInYear(newState.year);
    const div_acc2_oct = newState.month.oct.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "oct") / getTotalDaysInYear(newState.year);
    const div_acc2_nov = newState.month.nov.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "nov") / getTotalDaysInYear(newState.year);
    const div_acc2_dec = newState.month.dec.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "dec") / getTotalDaysInYear(newState.year);

    // dividen account1
    const dividend_acc1 = newState.open_acc1 * newState.dividend_interest / 100;
    newState.dividend_acc1 = div_acc1_jan + div_acc1_feb + div_acc1_mar + div_acc1_apr +
                             div_acc1_may + div_acc1_jun + div_acc1_jul + div_acc1_aug +
                             div_acc1_sep + div_acc1_oct + div_acc1_nov + div_acc1_dec +
                             dividend_acc1;

    // dividen account2
    const dividend_acc2 = newState.open_acc2 * newState.dividend_interest / 100;
    newState.dividend_acc2 = div_acc2_jan + div_acc2_feb + div_acc2_mar + div_acc2_apr +
                             div_acc2_may + div_acc2_jun + div_acc2_jul + div_acc2_aug +
                             div_acc2_sep + div_acc2_oct + div_acc2_nov + div_acc2_dec +
                             dividend_acc2;

    // dividen total
    newState.dividend_total = newState.dividend_acc1 + newState.dividend_acc2;

    // balance end
    newState.balance_acc1 = newState.month.dec.account1 + newState.dividend_acc1;
    newState.balance_acc2 = newState.month.dec.account2 + newState.dividend_acc2;
    newState.balance_total = newState.balance_acc1 + newState.balance_acc2;

   

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


    const newState = {...state};

    if (newRow.id == 'Opening Balance') {

      newState.open_acc1 = newRow.account1;
      newState.open_acc2 = newRow.account2;
      newState.total =  newRow.account1 + newRow.account2;

    } else {
    // https://stackoverflow.com/questions/40562647/what-is-the-most-efficient-way-to-copy-some-properties-from-an-object-in-javascr
    const { id, month, ...new1Row} = newRow;

    switch (newRow.id) {
      case 'Jan':    
        // https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react
        newState.month.jan = new1Row;
        break;
      case 'Feb':
        newState.month.feb = new1Row;
        break;
      case 'Mar':
        newState.month.mar = new1Row;
        break;
      case 'Apr':
        newState.month.apr = new1Row;
        break;
      case 'May':
        newState.month.may = new1Row;
        break;
      case 'Jun':
        newState.month.jun = new1Row;
        break;
      case 'Jul':
        newState.month.jul = new1Row;
        break;
      case 'Aug':
        newState.month.aug = new1Row;
        break;
      case 'Sep':
        newState.month.sep = new1Row;
        break;
      case 'Oct':
        newState.month.oct = new1Row;
        break;
      case 'Nov':
        newState.month.nov = new1Row;
        break;
      case 'Dec':
        newState.month.dec = new1Row;
        break;
    }
    }

    // total_emp
    // account 1
    // account 2
    // total
    newState.month.jan.total_emp = newState.month.jan.employee + newState.month.jan.employer;
    newState.month.jan.account1 = newState.open_acc1 + (newState.month.jan.total_emp * ratio);
    newState.month.jan.account2 = newState.open_acc2 + (newState.month.jan.total_emp * (1-ratio));
    newState.month.jan.total = newState.month.jan.account1 + newState.month.jan.account2;

    newState.month.feb.total_emp = newState.month.feb.employee + newState.month.feb.employer;
    newState.month.feb.account1 = newState.month.jan.account1 + (newState.month.feb.total_emp * ratio);
    newState.month.feb.account2 = newState.month.jan.account2 + (newState.month.feb.total_emp * (1-ratio));
    newState.month.feb.total = newState.month.feb.account1 + newState.month.feb.account2;

    newState.month.mar.total_emp = newState.month.mar.employee + newState.month.mar.employer;
    newState.month.mar.account1 = newState.month.feb.account1 + (newState.month.mar.total_emp * ratio);
    newState.month.mar.account2 = newState.month.feb.account2 + (newState.month.mar.total_emp * (1-ratio));
    newState.month.mar.total = newState.month.mar.account1 + newState.month.mar.account2;

    newState.month.apr.total_emp = newState.month.apr.employee + newState.month.apr.employer;
    newState.month.apr.account1 = newState.month.mar.account1 + (newState.month.apr.total_emp * ratio);
    newState.month.apr.account2 = newState.month.mar.account2 + (newState.month.apr.total_emp * (1-ratio));
    newState.month.apr.total = newState.month.apr.account1 + newState.month.apr.account2;
    
    newState.month.may.total_emp = newState.month.may.employee + newState.month.may.employer;
    newState.month.may.account1 = newState.month.apr.account1 + (newState.month.may.total_emp * ratio);
    newState.month.may.account2 = newState.month.apr.account2 + (newState.month.may.total_emp * (1-ratio));
    newState.month.may.total = newState.month.may.account1 + newState.month.may.account2;

    newState.month.jun.total_emp = newState.month.jun.employee + newState.month.jun.employer;
    newState.month.jun.account1 = newState.month.may.account1 + (newState.month.jun.total_emp * ratio);
    newState.month.jun.account2 = newState.month.may.account2 + (newState.month.jun.total_emp * (1-ratio));
    newState.month.jun.total = newState.month.jun.account1 + newState.month.jun.account2;

    newState.month.jul.total_emp = newState.month.jul.employee + newState.month.jul.employer;
    newState.month.jul.account1 = newState.month.jun.account1 + (newState.month.jul.total_emp * ratio);
    newState.month.jul.account2 = newState.month.jun.account2 + (newState.month.jul.total_emp * (1-ratio));
    newState.month.jul.total = newState.month.jul.account1 + newState.month.jul.account2;

    newState.month.aug.total_emp = newState.month.aug.employee + newState.month.aug.employer;
    newState.month.aug.account1 = newState.month.jul.account1 + (newState.month.aug.total_emp * ratio);
    newState.month.aug.account2 = newState.month.jul.account2 + (newState.month.aug.total_emp * (1-ratio));
    newState.month.aug.total = newState.month.aug.account1 + newState.month.aug.account2;

    newState.month.sep.total_emp = newState.month.sep.employee + newState.month.sep.employer;
    newState.month.sep.account1 = newState.month.aug.account1 + (newState.month.sep.total_emp * ratio);
    newState.month.sep.account2 = newState.month.aug.account2 + (newState.month.sep.total_emp * (1-ratio));
    newState.month.sep.total = newState.month.sep.account1 + newState.month.sep.account2;

    newState.month.oct.total_emp = newState.month.oct.employee + newState.month.oct.employer;
    newState.month.oct.account1 = newState.month.sep.account1 + (newState.month.oct.total_emp * ratio);
    newState.month.oct.account2 = newState.month.sep.account2 + (newState.month.oct.total_emp * (1-ratio));
    newState.month.oct.total = newState.month.oct.account1 + newState.month.oct.account2;

    newState.month.nov.total_emp = newState.month.nov.employee + newState.month.nov.employer;
    newState.month.nov.account1 = newState.month.oct.account1 + (newState.month.nov.total_emp * ratio);
    newState.month.nov.account2 = newState.month.oct.account2 + (newState.month.nov.total_emp * (1-ratio));
    newState.month.nov.total = newState.month.nov.account1 + newState.month.nov.account2;

    newState.month.dec.total_emp = newState.month.dec.employee + newState.month.dec.employer;
    newState.month.dec.account1 = newState.month.nov.account1 + (newState.month.dec.total_emp * ratio);
    newState.month.dec.account2 = newState.month.nov.account2 + (newState.month.dec.total_emp * (1-ratio));
    newState.month.dec.total = newState.month.dec.account1 + newState.month.dec.account2;

    
    
    // https://www.imoney.my/articles/what-does-the-6-40-epf-dividend-mean-to-your-savings
    // dividen account1 monthly
    /*
    Total contribution for Acc 1 x Dividend rate x (Total number of days in the year – Number of accumulated days for the month + 1) ÷ Total number of days in the year
    Example of calculation for January 2015 (Account 1):
    = RM1,137.50 x 6.40% x (365 – 31 + 1) ÷ 365
    = RM1,137.50 x 6.40% x (335) ÷ 365
    = RM66.82
    */
   const div_acc1_jan = newState.month.jan.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jan") / getTotalDaysInYear(newState.year);
   const div_acc1_feb = newState.month.feb.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "feb") / getTotalDaysInYear(newState.year);
   const div_acc1_mar = newState.month.mar.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "mar") / getTotalDaysInYear(newState.year);
   const div_acc1_apr = newState.month.apr.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "apr") / getTotalDaysInYear(newState.year);
   const div_acc1_may = newState.month.may.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "may") / getTotalDaysInYear(newState.year);
   const div_acc1_jun = newState.month.jun.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jun") / getTotalDaysInYear(newState.year);
   const div_acc1_jul = newState.month.jul.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jul") / getTotalDaysInYear(newState.year);
   const div_acc1_aug = newState.month.aug.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "aug") / getTotalDaysInYear(newState.year);
   const div_acc1_sep = newState.month.sep.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "sep") / getTotalDaysInYear(newState.year);
   const div_acc1_oct = newState.month.oct.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "oct") / getTotalDaysInYear(newState.year);
   const div_acc1_nov = newState.month.nov.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "nov") / getTotalDaysInYear(newState.year);
   const div_acc1_dec = newState.month.dec.total_emp * ratio * (newState.dividend_interest / 100) * getEPFDays(newState.year, "dec") / getTotalDaysInYear(newState.year);
   console.log(div_acc1_jan);                         //482.15999999999997
   console.log(newState.month.jan.total_emp * ratio); //8540
   console.log(newState.dividend_interest / 100);     //0.061500000000000006
   console.log(getEPFDays(newState.year, "jan"));     //336
   console.log(getTotalDaysInYear(newState.year));    //366

    // dividen account2 monthly
    const div_acc2_jan = newState.month.jan.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jan") / getTotalDaysInYear(newState.year);
    const div_acc2_feb = newState.month.feb.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "feb") / getTotalDaysInYear(newState.year);
    const div_acc2_mar = newState.month.mar.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "mar") / getTotalDaysInYear(newState.year);
    const div_acc2_apr = newState.month.apr.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "apr") / getTotalDaysInYear(newState.year);
    const div_acc2_may = newState.month.may.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "may") / getTotalDaysInYear(newState.year);
    const div_acc2_jun = newState.month.jun.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jun") / getTotalDaysInYear(newState.year);
    const div_acc2_jul = newState.month.jul.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "jul") / getTotalDaysInYear(newState.year);
    const div_acc2_aug = newState.month.aug.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "aug") / getTotalDaysInYear(newState.year);
    const div_acc2_sep = newState.month.sep.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "sep") / getTotalDaysInYear(newState.year);
    const div_acc2_oct = newState.month.oct.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "oct") / getTotalDaysInYear(newState.year);
    const div_acc2_nov = newState.month.nov.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "nov") / getTotalDaysInYear(newState.year);
    const div_acc2_dec = newState.month.dec.total_emp * (1-ratio) * (newState.dividend_interest / 100) * getEPFDays(newState.year, "dec") / getTotalDaysInYear(newState.year);

    // dividen account1
    const dividend_acc1 = newState.open_acc1 * newState.dividend_interest / 100;
    newState.dividend_acc1 = div_acc1_jan + div_acc1_feb + div_acc1_mar + div_acc1_apr +
                             div_acc1_may + div_acc1_jun + div_acc1_jul + div_acc1_aug +
                             div_acc1_sep + div_acc1_oct + div_acc1_nov + div_acc1_dec +
                             dividend_acc1;

    // dividen account2
    const dividend_acc2 = newState.open_acc2 * newState.dividend_interest / 100;
    newState.dividend_acc2 = div_acc2_jan + div_acc2_feb + div_acc2_mar + div_acc2_apr +
                             div_acc2_may + div_acc2_jun + div_acc2_jul + div_acc2_aug +
                             div_acc2_sep + div_acc2_oct + div_acc2_nov + div_acc2_dec +
                             dividend_acc2;

    // dividen total
    newState.dividend_total = newState.dividend_acc1 + newState.dividend_acc2;

    // balance end
    newState.balance_acc1 = newState.month.dec.account1 + newState.dividend_acc1;
    newState.balance_acc2 = newState.month.dec.account2 + newState.dividend_acc2;
    newState.balance_total = newState.balance_acc1 + newState.balance_acc2;

   

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
    return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
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
                  <TextField
                    sx={{ marginRight: 1 }}
                    label="Year"
                    variant="outlined"
                    value={state.year}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setState({...state, year: parseInt(ev.currentTarget.value)})}
                    onBlur={() => recalculate()}
                  />
                  <TextField
                    type="number"
                    sx={{ marginLeft: 1 }}
                    label="Dividend"
                    variant="filled"
                    value={state.dividend_interest}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setState({...state, dividend_interest: +ev.currentTarget.value})}
                    onBlur={() => recalculate()}
                  />
                </Grid>
                <Grid xs={12}>
                  <Box
                    sx={{
                      width: "100%",
                      "& .super-app-theme--cell": {
                        backgroundColor: "#b3e5fc",
                        color: "#03a9f4",
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
                          params.row.id == "Opening Balance" ||
                          params.field == "employer" ||
                          params.field == "employee"
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
