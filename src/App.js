import Main from './components/Main'
import Navbar from './components/NavBar'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Main />
      </header>
    </div>
  );
}

export default App;