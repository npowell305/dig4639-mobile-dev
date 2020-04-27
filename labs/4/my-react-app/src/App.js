import React from 'react';
import './App.css';
import CardList from "./components/CardList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CardList />
        <CardList></CardList>
      </div>
    );
  }
}

export default App;