import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
      <ul>
        <li><a href="/">홈</a></li>
        <li><a href="/about">소개</a></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" exact element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
