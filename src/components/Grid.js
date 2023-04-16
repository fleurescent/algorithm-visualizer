import { useState } from 'react';

import Node from './Node'
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra'

const START_NODE_ROW = 10
const START_NODE_COL = 11
const FINISH_NODE_ROW = 10
const FINISH_NODE_COL = 39

const createNode = (row, col) => {
  return (
    <Node
      row={row}
      col={col}
      isStart= {row === START_NODE_ROW && col === START_NODE_COL}
      isFinish= {row === FINISH_NODE_ROW && col === FINISH_NODE_COL}
      isWall= {false}
      isVisited= {false}
      previousNode= {null}
      distance= {Infinity}
    />
  )
}

const getInitialGrid = () => {
  const grid = []
  for (let row = 0; row < 20; row++) {
    grid.push([])
    for (let col = 0; col < 50; col++) {
      grid[row].push(createNode(row, col))
    }
  }
  return grid
}

const animateShortestPath = (nodesInShortestPathOrder) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    setTimeout(() => {
      const node = nodesInShortestPathOrder[i]
      document.getElementById(`row: ${node.row} col: ${node.col}`).className =
        'node node-shortest-path'
    }, 50 * i);
  }
}

const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
  for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    if (i === visitedNodesInOrder.length) {
      setTimeout(() => {
        animateShortestPath(nodesInShortestPathOrder);
      }, 10 * i)
      return;
    }
    setTimeout(() => {
      const node = visitedNodesInOrder[i]
      document.getElementById(`row: ${node.row} col: ${node.col}`).className =
        'node node-visited'
    }, 10 * i);
  }
}

const Grid = () => {
  const [grid, setGrid] = useState([])

  useState(() => {
    console.log('effect')
    const initGrid = getInitialGrid()
    setGrid(initGrid)
    console.log(initGrid, grid)
  }, [])
  
  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL]
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL]
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode)
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode)
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder)
  }

  return (
    <>
      <button onClick={() => visualizeDijkstra()}>
        Visualize
      </button>
      <div className="grid">
        {grid}
      </div>
    </>
  )
}

export default Grid;