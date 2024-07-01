import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Mainp } from './Mainp';
import { Signup } from './components/Signup/Signup';

export function Home() {
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
