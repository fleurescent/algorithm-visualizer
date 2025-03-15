const data1d = [1, 3, 5, 7, 9]
const data2d = [[1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10]]

export function Tracer() {
  let longestRow = data2d.reduce((longestRow, row) => longestRow.length < row.length ? row : longestRow, [])
  return (
    <table className="flex-shrink-0 table border-collapse">
      <tbody>
        <tr className="table-row h-7">
          {
            longestRow.map((_, i) => (
              <td className="table-cell text-center py-0 px-1" key={i}>
                <span className="text-sm">{i}</span>
              </td>
            ))
          }
        </tr>
        {
          data2d.map((row, i) => (
            <tr key={i}>
              {
                row.map((col, j) => (
                  <td className="table-cell text-center py-0 px-1"
                      key={j}>
                    <span className="text-sm">{col}</span>
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}