import React, { useEffect, useRef } from "react";


const Row = ({columns}) => {

    const sumRef = useRef()

    useEffect(() => {
        if (sumRef.current) {
                let cells = Array.from(sumRef.current.parentNode.children)
                let sum = 0;
                for (let i = 0; i < cells.length - 1; i++) {
                    sum += Number(cells[i].innerHTML)
                }
                sumRef.current.innerHTML = sum
        }
    }, [sumRef])

    return (
        <tr>
            {columns}
            <td
                ref={sumRef}
                className="summa"
            />
        </tr>
    )
}

export default Row