import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Mainp } from './Mainp';
import { Signup } from './components/Signup/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import React from 'react';

export function Home() {

    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth)

    React.useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);

    return(
        <>
        <Routes>
            <Route path='/' element={<Mainp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />

        </Routes>
        </>
    );
}
