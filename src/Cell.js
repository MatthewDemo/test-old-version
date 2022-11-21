import { CellContext } from './context/CellContext';
import { useContext } from 'react';

const Cell = ({children}) => {
    const {setColArr, colArr} = useContext(CellContext)

    // function randomInteger(min, max) {
    //     let rand = min + Math.random() * (max + 1 - min);
    //     return Math.floor(rand);
    // }

    // const cellObj = {id : uuidv4(), amount : randomInteger(100, 999)}

    const onPlus = (event) => {
        event.target.innerHTML++
        // setColArr(current => {
        //     console.log("current", current)
        // })
        console.log(colArr)
    }

    

    return (
        <td onClick={onPlus} >
           {children}
        </td>
        
    )
}

export default Cell