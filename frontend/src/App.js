import { useState, useEffect } from 'react';

import './App.css';

import Header from './containers/header/Header';
import Main from './containers/main/Main';
import Footer from './containers/footer/Footer';

const backendURL = 'http://localhost:3000';
const dinosaursURL = `${backendURL}/dinosaurs`;

function App() {

  const [dinosaurs, setDinosaurs] = useState([]);

  const byName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  }

  const getDinosaurs = () => {
    fetch(dinosaursURL)
      .then(response => response.json())
      .then(dinosaurs => {
        dinosaurs.sort(byName);
        setDinosaurs(dinosaurs);
      });
  }

  useEffect(getDinosaurs, []);

  return (
    <div className="App">
      <Header />
      <Main dinosaurs={dinosaurs} setDinosaurs={setDinosaurs}/>
      <Footer />
    </div>
  );
}

export default App;
