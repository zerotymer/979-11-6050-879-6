import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App() {
  return (
    <div>
      <ul>
        <li><a href="/">홈</a></li>
        <li><a href="/about">소개</a></li>
        <li><a href="/profiles">프로필</a></li>
        <li><a href="/history">History 예제</a></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/"                   element={ <Home /> } />
        <Route path="/about"              element={ <About /> } />
        <Route path="/info"               element={ <About /> } />
        <Route path="/profiles/*"         element={ <Profiles /> } />
        <Route path="/history"            element={ <HistorySample /> } />
        <Route path="*" element={ 
          <div>
            <h2>이 페이지는 존재하지 않습니다:</h2>
            <p>{ useLocation().pathname }</p>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
