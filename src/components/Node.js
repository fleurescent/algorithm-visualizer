import './Node.css'

const Node = ({ row,
                col,
                isStart,
                isFinish,
                isWall,
                isVisited,
                previousNode,
                distance,
                onMouseDown,
                onMouseEnter,
                onMouseUp
              }) => {
  const status = isStart
    ? 'start-node'
    : isFinish
    ? 'finish-node'
    : isWall
    ? 'wall-node'
    : '';

  return (
    <div
      id={`row: ${row} col: ${col}`}
      className={`node ${status}`}
      // onMouseDown={() => onMouseDown(row, col)}
      // onMouseEnter={() => onMouseEnter(row, col)}
      // onMouseUp={() => onMouseUp()}
    >
    </div>
  )
}

export default Node;