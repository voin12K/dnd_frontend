import style from './Navbar.module.css';

export function Navbar() {

    const isAuth = false;

    return (
        <div className={style.boxa}>
            <div className={style.polo}>
                <label className={style.text}>Dungeon Room</label>
                <div className={style.buttonContainer}>
                {isAuth ?(
                    <>
                    <label style={{
                        color: 'white'
                    }}>You logined</label>
                    <label>Username</label>
                    </>
                ):(
                    <>
                    <label style={{
                        color: 'white'
                    }}>You not logined</label>
                    <button className={style.butt}>Log in</button>
                    <button className={style.butt}>Sign up</button>
                    </>
                )}
                </div>
            </div>
        </div>
    );
}
