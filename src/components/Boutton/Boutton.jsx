import s from './style.module.css'

export function Boutton({title}){
    return(
        <div className={s.container}>
            <button className={s.button}>{title}</button>
        </div>
    )
}