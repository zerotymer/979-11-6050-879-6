import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

// const API_KEY = '0c7954c1ed8d4b1cb9db421301ae381b';


const App = () => {
  const [ category, setCategory ] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={ category } onSelect={ onSelect }/>
      <NewsList category={ category }/>
    </>
  );
};

export default App;