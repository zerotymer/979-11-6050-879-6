/*
 * SSR을 위한 엔트리 파일
 */

import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

const app = express();

// 서버 사이드 렌더링 처리 함수입니다.
const serverRender = (req, res, next) => {
    // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 합니다.
    const context = {};
    const jsx = (
        <StaticRouter location={ req.url } context={ context }>
            <App />
        </StaticRouter>
    );

    const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
    res.send(root); // 결과물을 응답합니다.
};

app.use(serverRender);

// 3000 포트로 서버를 가동합니다.
app.listen(3000, () => {
    console.log('Running on http://localhost:3000');
});