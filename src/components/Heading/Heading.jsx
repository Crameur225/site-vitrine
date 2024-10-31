import { Logo } from '../../Logo/Logo';
import s from './style.module.css'


export function Heading(){
    return (
      <div style={{backgroundColor: "white"}}>
    <div className={`container ${s.head}`}>
    <div className="row">
      <div className='col-lg-2 col-sm-12'>
     <Logo/>
      </div>
      <div className={`col-lg-10 col-sm-12 ${s.container}`}>
        <h2 className={s.title}>John Doe Coach</h2>
        <p className={s.content}>Coaching de Vie & Equilibre énergétique à Fontenay le Comte.</p>
      </div>
    </div>
    </div>
    </div>);
}