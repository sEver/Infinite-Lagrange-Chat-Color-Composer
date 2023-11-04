import './App.scss';
import { Composer } from './components/Composer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span>Infinite</span> <span>Lagrange</span> <span>Chat</span> <span>Formatter</span>
        </h1>
        <Composer></Composer>
      </header>
    </div>
  );
}

export default App;
