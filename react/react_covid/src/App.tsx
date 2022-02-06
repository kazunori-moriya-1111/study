import './App.css';
import BarPlot from './features/chart/BarPlot';
import LinePlot from './features/chart/LinePlot';
import PiePlot from './features/chart/PiePlot';

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
    </div>
  );
}

export default App;
