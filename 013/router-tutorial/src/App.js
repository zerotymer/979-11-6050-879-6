import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';

function App() {
  return (
    <div>
      <ul>
        <li><a href="/">홈</a></li>
        <li><a href="/about">소개</a></li>
        <li><a href="/profiles">프로필</a></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/"                   element={ <Home /> } />
        <Route path="/about"              element={ <About /> } />
        <Route path="/info"               element={ <About /> } />
        <Route path="/profiles/*"         element={ <Profiles /> } />
      </Routes>
    </div>
  );
}

export default App;
