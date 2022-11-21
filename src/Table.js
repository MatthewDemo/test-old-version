import Row from "./Row"

const Table = ({rows, columns}) => {
    return (
        <table>
            <tbody>{rows}</tbody>
            <tfoot className="average"><tr>{columns.map((item, idx) => <td key={idx}>Average</td>)}</tr></tfoot>
        </table>

    )
}

export default Table