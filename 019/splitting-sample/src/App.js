import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  state = { SplitMe: null };

  handleClick = async () => {
    const loadMedModule = await import('./SplitMe');
    this.setState({ SplitMe: loadMedModule.default });
  };

  render() {
    const { SplitMe } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={ this.handleClick }>Hello React!</p>
          { SplitMe && <SplitMe /> }
        </header>
      </div>
    );
  }
}

export default App;
