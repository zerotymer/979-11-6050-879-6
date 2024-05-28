import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';

const API_KEY = '0c7954c1ed8d4b1cb9db421301ae381b';
const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
};

const getUrl = (category, country = 'kr', apikey = API_KEY) => {
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`;
  if (category && category !== 'all') {
    url += `&category=${category}`;
  }
  return url;
};

const NewsList = ({ category }) => {
    const [ loading, response, error ] = usePromise(() => {
        return axios.get(getUrl(category), );
    }, [ category]);


    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    // 아직 response 값이 설정되지 않았을 때
    if (!response) {
        return null;
    }
    // 에러가 발생했을 때
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>;
    }

    const { articles } = response.data;
    // response 값이 유효할 때
    return (
        <NewsListBlock>
            { articles.map(article => (
                <NewsItem key={ article.url } article={ article } />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;