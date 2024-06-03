import { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';


const SampleContainer = ({ post, users, loadingPost, loadingUsers, getPost, getUsers }) => {
    useEffect(() => {
        // useEffect에 파라미터로 넣는 함수는 async로 할 수 없기 때문에
        // 그 내부에서 async 함수를 선언하고 호출한다.
        // IIFE
        (async () => {
            try {
                await getPost(1);
                await getUsers(1);
            } catch (e) {
                console.log(e); // 에러 조회
            }
        })();

    }, [ getPost, getUsers]);

    return (
        <Sample post={ post } users={ users } loadingPost={ loadingPost } loadingUsers={ loadingUsers } />
    );
};

export default connect(
    ({ sample, loading }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading['sample/GET_POST'], //action.payload로 키를 설정함.
        loadingUsers: loading['sample/GET_USERS'] //action.payload로 키를 설정함.
    }),
    { getPost, getUsers }
)(SampleContainer);