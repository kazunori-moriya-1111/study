import './App.css';
import LinePlot from './features/chart/LinePlot';
import PiePlot from './features/chart/PiePlot';

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
    </div>
  );
}

export default App;
