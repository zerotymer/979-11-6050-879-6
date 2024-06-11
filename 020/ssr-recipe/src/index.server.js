/*
 * SSR을 위한 엔트리 파일
 */

import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div>Heelo Server Side Rendering!</div>
);

console.log(html);
