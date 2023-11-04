import './App.scss';
import { Composer } from './components/Composer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Infinite Lagrange Chat Formatter</h1>
        <Composer></Composer>
      </header>
    </div>
  );
}

export default App;
