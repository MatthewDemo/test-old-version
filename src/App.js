import './App.css';
import React, { useEffect } from 'react';
import Table from './Table';
import { CellContext } from './context/CellContext';
import { useContext } from 'react';


function App() {

  const {makeRows, makeColumns, rows, columns} = useContext(CellContext)



  return (
    <div className='App'>
      <div className="inputs">
        <input type="number" placeholder='Строк' onChange={(e) => makeRows(e.target.value)} />
        <input type="number" placeholder='Столбцов' onChange={(e) => makeColumns(e.target.value)} />
        {/* <input type="number" placeholder='Ближайших элементов' onChange={event => setNearest(event.target.value)} /> */}
      </div>
      <Table rows={rows} columns={columns} />
    </div>
  );
}

export default App;
