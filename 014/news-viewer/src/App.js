import { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const API_KEY = '0c7954c1ed8d4b1cb9db421301ae381b';
const getUrl = (category, country = 'kr', apikey = API_KEY) => {
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`;
  if (category) {
    url += `&category=${category}`;
  }
  return url;
};

const App = () => {
  const [ data, setData ] = useState(null);

  // const onClick = () => {
  //   axios.get(getUrl())
  //     .then(response => {
  //       setData(response.data);
  //     });
  // };

  const asyncClick = async () => {
    try {
      const response = await axios.get(getUrl());
      setData(response.data);
    } catch (e) {
      console.log(e); 
    }
  };

  return <NewsList />;
};

export default App;