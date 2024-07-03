import style from './Mainpage.module.css'
import { Settings, Users, User, Home, Gamepad2, Coins, SquareGanttChart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import { Link } from 'react-router-dom';

export function Mainpage() {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch();

    const onClickLogout = () =>{
        if (window.confirm('Are you sure you wont to logout')){
            dispatch(logout())
            window.localStorage.removeItem('token')
        }
    };

    return(
    <div className={style.container}>
        <div>
            
        </div>
        <div class='conmain' className={style.conmain}>
           <div class='mainbut' className={style.mainbut}>
                <button class='mainbutt' className={style.mainbutt}><Home />Home</button>
                <button class='mainbutt' className={style.mainbutt}><Gamepad2 />My games</button>
                <button class='mainbutt' className={style.mainbutt}><SquareGanttChart />Wiki</button>
                <button class='mainbutt' className={style.mainbutt}><User />Profile</button>
                <button class='mainbutt' className={style.mainbutt}><Users />Community Content</button>
                <button class='mainbutt' className={style.mainbutt}><Settings />Settings</button>
                <button class='mainbuttsup' className={style.mainbuttsup}><Coins />Suport Us</button>
                {isAuth ?(
                    <>
                    <label style={{
                        color: 'white'
                    }}>You logined</label>
                    <button onClick={onClickLogout} style={{backgroundColor: 'rgb(202, 47, 47)'}} className={style.mainbutt}><Settings />Log Out</button>
                    </>
                ):(
                    <>
                    <label style={{
                        color: 'white'
                    }}>You not logined</label>
                    <Link to="/login" className={style.mainbutt}><Settings />Log in</Link>
                    </>
                )}
           </div>
       </div>
   </div>
   );   
}