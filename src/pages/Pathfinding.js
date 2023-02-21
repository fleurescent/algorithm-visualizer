import Grid from '../components/Grid'

const Pathfinding = () => {
  return (
    <div className='Header'>
      <button onClick={() => console.log('visualizeDijkstra()')}>
        Visualize
      </button>
      <Grid />
    </div>
  );
}

export default Pathfinding;