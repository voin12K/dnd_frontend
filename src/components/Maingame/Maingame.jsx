import style from './Maingame.module.css'

export function Maingame(){
    return <div>
        <div class='games' className={style.games}>
        <div>
            <label className={style.tetx}>Companies as player</label>
            <div className={style.opo}>
                <div className={style.img}></div>
                <div className={style.img}></div>
                <button className={style.btn}>Enter using code</button>
            </div>
            <label className={style.tetx}>Companies as master</label>
            <div className={style.opo}>
                <div className={style.img}></div>
                <div className={style.img}></div>
                <button className={style.btn}>New game</button>  
            </div>
        </div>
    </div>
    </div>
}