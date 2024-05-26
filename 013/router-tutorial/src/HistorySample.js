import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HistorySample = () => {

    const navigate = useNavigate();
    // useBlocker()는 아직 실험적인 기능이므로 주석 처리합니다.
    // const blocker = useBlocker();
    
    // 뒤로 가기
    const handleGoBack = () => { navigate(-1); };

    // 홈으로 이동
    const handleGoHome = () => { navigate('/'); };

    useEffect(() => {
        // const unblock = blocker.block('정말 떠나실 건가요?');
        // return () => { unblock(); };
    }, []);

    return (
        <div>
            <button onClick={ handleGoBack }>뒤로</button>
            <button onClick={ handleGoHome }>홈으로</button>
        </div>
    );
};

export default HistorySample;