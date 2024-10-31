import { Boutton } from '../Boutton/Boutton';
import s from './style.module.css';
export function FirstRuban(){
    return(
        <div className={s.container}>
           <div className="row">
           <div className="col-lg-8 col-sm-12 text-center">
            <p style={{padding: "40px 0px"}}>John Doe, Coaching & Equilibre énergétique</p>
           </div>
           <div style={{padding: "20px 0px 20px 0px"}} className="col-lg-4 col-sm-12">
            <Boutton title={"Contacter John Doe pour plus..."}/>
           </div>
           </div>
        </div>
    );
}