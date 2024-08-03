import { Routes, Route, useLocation  } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Mainp } from './Mainp';
import { Signup } from './components/Signup/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Room } from './components/Room/Room';

export const Home = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth)

    React.useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);

    const location = useLocation();
    const hideNavbarPaths = ['/signup'];

    return(
        <>
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
        <Routes>
            <Route path='/' element={<Mainp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path="/rooms/:roomCode" element={<Room />} />
        </Routes>
        </>
    );
}
