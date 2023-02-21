const Node = ({ row,
                col,
                isStart,
                isFinish
              }) => {
  const status = isStart
    ? 'start-node'
    : isFinish
    ? 'finish-node'
    : '';

  return (
    <div
      key={`row: ${row} col: ${col}`}
      className={`node ${status}`}
    >
    </div>
  )
}

export default Node;