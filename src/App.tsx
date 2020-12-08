import './App.scss';
import Calendar from './components/Calendar';
import Weather from './components/Weather';

function App() {
  return (
    <div className="app container">
      <div className="row">
        <div className="col-sm-4 left-conatiner" >
          <Weather />
        </div>
        <div className="col-sm-8" >
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
