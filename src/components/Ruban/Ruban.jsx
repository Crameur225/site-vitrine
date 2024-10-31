import s from './style.module.css';
import image from '../../image/img1.jpg'
export function Ruban(){
    return(
       <div style={{backgroundColor: "white"}}>
          <div className='container'>
            <h2 className='text-center pt-5'>Coaching & Equilibre énergétique à Fontenay le Comte.</h2>
             <div>
                <div className={`row ${s.items}`}>
                   <div className={`col-lg-3 col-sm-12 ${s.item}`}>
                       <img className={s.imageA} src={image} alt="" />
                       <p className={`${s.paraGraphe} text-center`}>Coaching de Vie</p>
                   </div>
                   <div className={`col-lg-3 col-sm-12 ${s.item}`}>
                       <img className={s.imageA} src={image} alt="" />
                       <p className={`${s.paraGraphe} text-center`}>Equilibre énergétique</p>
                   </div>
                   <div className={`col-lg-3 col-sm-12 ${s.item}`}>
                       <img className={s.imageA} src={image} alt="" />
                       <p className={`${s.paraGraphe} text-center`}>Développement personnel</p>
                   </div>
                   <div className={`col-lg-3 col-sm-12 ${s.item}`}>
                       <img className={s.imageA} src={image} alt="" />
                       <p className={`${s.paraGraphe} text-center`}>Accompagnement à distance</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    );
}