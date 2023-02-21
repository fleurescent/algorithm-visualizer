import { useState } from 'react';

import Node from './Node'

const START_NODE_ROW = 10;
const START_NODE_COL = 18;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 32;

const Grid = () => {
  const [nodes, setNodes] = useState(Array().fill(''));
  
  const handleClick = (i) => {
    const nextNodes = nodes.slice();
    nextNodes[i] = nextNodes[i] + 1;
    setNodes(nextNodes);
  }
  
  const grid = []

  for (let row = 0; row < 20; row ++) {
    grid.push([])
    for (let col = 0; col < 50; col ++) {
      grid[row].push(<Node
                        row={row}
                        col={col}
                        isStart={false}
                        isFinish={false}
                    />)
    }
  }

  // grid[START_NODE_ROW][START_NODE_COL]
  // grid[FINISH_NODE_ROW][FINISH_NODE_COL]

  return (
    <div className='grid'>
      {grid}
    </div>
  );
}

export default Grid;