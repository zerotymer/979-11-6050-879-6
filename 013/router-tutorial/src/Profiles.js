import { Routes, Route, NavLink } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {

    const activceStyle = ({ isActive }) => {
        return {
            background: isActive ? 'black' : 'white',
            color: isActive ? 'white' : 'black'
        };
    };

    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <NavLink style={ activceStyle } to="/profiles/velopert" end >velopert</NavLink>
                </li>
                <li>
                    <NavLink style={ activceStyle } to="/profiles/gildong" end >gildong</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/"            element={ <div>사용자를 선택해 주세요.</div> } />
                <Route path="/:username"   element={ <Profile /> } />
            </Routes>

        </div>
    );
};

export default Profiles;