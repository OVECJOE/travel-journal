import './App.css';
import Header from './components/Header';
import TravelCard from './components/TravelCard';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        {data.map((item) => {
          return <TravelCard
            key={item.id}
            {...item}
          />
        })}
      </div>
    </div>
  );
}

export default App;
