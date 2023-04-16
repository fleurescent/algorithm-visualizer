import { useState } from 'react'

import Node from './Node'
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra'

// const START_NODE_ROW = 10
// const START_NODE_COL = 11
// const FINISH_NODE_ROW = 10
// const FINISH_NODE_COL = 39

const START_NODE_ROW = 0
const START_NODE_COL = 1
const FINISH_NODE_ROW = 8
const FINISH_NODE_COL = 8

// const createNode = (row, col) => {
//   return (
//     <Node
//       row={row}
//       col={col}
//       isStart= {row === START_NODE_ROW && col === START_NODE_COL}
//       isFinish= {row === FINISH_NODE_ROW && col === FINISH_NODE_COL}
//       isWall= {false}
//       isVisited= {false}
//       previousNode= {null}
//       distance= {Infinity}
//     />
//   )
// }

const createNode = (row, col) => {
  return {
    row,
    col,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    isWall: false,
    isVisited: false,
    previousNode: null,
    distance: Infinity,
  }
}

const getInitialGrid = () => {
  const grid = []
  for (let row = 0; row < 10; row++) {
    grid.push([])
    for (let col = 0; col < 10; col++) {
      grid[row].push(createNode(row, col))
    }
  }
  return grid
}

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice()
  const node = newGrid[row][col]
  const newNode = {
    ...node,
    isWall: !node.isWall
  };
  newGrid[row][col] = newNode
  return newGrid
}

const animateShortestPath = (nodesInShortestPathOrder) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    setTimeout(() => {
      const node = nodesInShortestPathOrder[i]
      document.getElementById(`row: ${node.row} col: ${node.col}`).className =
        'node shortest-path-node'
    }, 50 * i);
  }
}

const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
  for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    if (i === visitedNodesInOrder.length) {
      setTimeout(() => {
        animateShortestPath(nodesInShortestPathOrder)
      }, 10 * i)
      return
    }
    setTimeout(() => {
      const node = visitedNodesInOrder[i]
      document.getElementById(`row: ${node.row} col: ${node.col}`).className =
        'node visited-node'
    }, 10 * i);
  }
}

const Grid = () => {
  const [grid, setGrid] = useState([])
  const [mouseIsPressed, setMouseIsPressed] = useState(false)

  useState(() => {
    setGrid(getInitialGrid())
  }, [])

  const handleMouseDown = (row, col) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col)
    setGrid(newGrid)
    setMouseIsPressed(true)
  }

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return
    const newGrid = getNewGridWithWallToggled(grid, row, col)
    setGrid(newGrid)
  }

  const handleMouseUp = () => {
    setMouseIsPressed(false)
  }

  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL]
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL]
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode)
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode)
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder)
  }

  // return (
  //   <>
  //     <button onClick={() => visualizeDijkstra()}>
  //       Visualize
  //     </button>
  //     <div className="grid">
  //       {grid}
  //     </div>
  //   </>
  // )
  return (
    <>
      <button onClick={() => visualizeDijkstra()}>
        Visualize
      </button>
      <div className="grid">
        {grid.map(row => {
          return (
            <div key={row.id}>
              {row.map(node => {
                const {row, col, isFinish, isStart, isWall} = node
                return (
                  <Node
                    row={row}
                    col={col}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    mouseIsPressed={mouseIsPressed}
                    onMouseDown={(row, col) => handleMouseDown(row, col)}
                    onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                    onMouseUp={() => handleMouseUp()}
                  >
                  </Node>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Grid;