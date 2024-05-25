import { useLocation } from 'react-router-dom';
import qs from 'qs';

const About = () => {
    const query = qs.parse(useLocation().search, {
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === 'true';

    return (
        <div>
            <h1>About</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
            { showDetail && <p>detail 값을 true로 설정하셧군요!</p> }
        </div>
    );
};

export default About;