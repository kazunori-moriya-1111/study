import './App.css';
import BarPlot from './features/chart/BarPlot';
import BubblePlot from './features/chart/BubblePlot';
import LinePlot from './features/chart/LinePlot';
import PiePlot from './features/chart/PiePlot';
import RadarPlot from './features/chart/RadarPlot';

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
      <BubblePlot />
    </div>
  );
}

export default App;
