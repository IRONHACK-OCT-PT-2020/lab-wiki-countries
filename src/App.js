import './App.css';
import countries from './countries.json';
import { Switch, Route, Link } from 'react-router-dom'

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <CountriesList listOfCountries={countries} />
        </div>
      </div>
    </div>
  );
}

export default App;
