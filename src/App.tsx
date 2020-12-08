import './App.scss';
import Calendar from './components/Calendar';
import TodoSummary from './components/TodoSummary';
import Weather from './components/Weather';

function App() {
  return (
    <div className="app container">
      <div className="row no-gutters">
        <div className="col-md-4 left-conatiner" >
          <Weather />
        </div>
        <div className="col-md-8" >
          <Calendar />
          <TodoSummary />
        </div>
      </div>
    </div>
  );
}

export default App;
