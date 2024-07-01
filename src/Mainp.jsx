import { Mainpage } from "./components/Mainpage/Mainpage"
import { Maingame } from "./components/Maingame/Maingame"

export function Mainp(){
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: '90px',
    }}>
        <Mainpage />
        <Maingame />
    </div>
}
