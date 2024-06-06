import logo from './logo.svg';
import './App.css';
// import notify from './notify';

function App() {

  const onClick = () => {
    // notify();
    import('./notify').then(notify => notify.default());
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={ onClick }>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
