import React, { useState, useEffect } from "react";
import Cell from '../Cell';
import Row from '../Row';
import { v4 as uuidv4 } from 'uuid';

const CellContext = React.createContext({});

const CellContextProvider = ({ children }) => {

    const [rows, setRows] = React.useState([]);
    const [columns, setColumns] = React.useState([]);
    const [colArr, setColArr] = React.useState([]);

    // const [nearest, setNearest] = React.useState(0);
  
    useEffect(() => {
      makeRows(rows.length);
    }, [columns])    
  
    const makeRows = (number) => {
      const arr = [];
      for (let i = 0; i < number; i++) {
        arr.push(<React.Fragment key={uuidv4()}><Row columns={columns} /></React.Fragment>)
      }
      setRows(arr)
    }
  
    const makeColumns = (number1) => {
      const arr1 = [];
      for (let k = 0; k < number1; k++) {
        let randomNumber = Math.floor(100 + Math.random() * (999 + 1 - 100));
        console.log(randomNumber)
        arr1.push(<React.Fragment key={uuidv4()}><Cell>{randomNumber}</Cell></React.Fragment>)
      }
      setColumns(arr1)
      return arr1
    }
  

    const funfun = () => {
        console.log(12332536)
    }

    const context = {
      funfunCall : funfun,
      makeRows : makeRows,
      makeColumns : makeColumns,
      rows : rows,
      columns : columns,
      setColArr : setColArr,
      colArr : colArr
    };

    return (
        <CellContext.Provider value={context}>
            {children}
        </CellContext.Provider>
    );
};

export { CellContext, CellContextProvider };
