import s from './style.module.css'

import img from '../assets/logo.png'

export function Logo(props){
    return(
        <div className={s.container}>
        <img className={s.img} src={img} alt="logo" />
        
        </div>
    )
}