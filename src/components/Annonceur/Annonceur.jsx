import image from '../../image/img2.jpg'
import s from './style.module.css'

export function Annonceur(){
    return(
        <div className={`${s.container} container`}>
           <div className={`${s.logo} text-center`}>
             <img  className={s.img} style={{height: 200, width:200, borderRadius: 300}} src={image} alt=""  />
           </div>
            <div className={`${s.texte} text-center p-5`}>
                <h2 className={s.title}>Jonh Doe</h2>
                <h3 className={s.title}>Coach de Vie & Energéticienne</h3>
                <p className={s.title}>Je vous accompagne avec ma spécificité, ma sensibilité et mon intuition,
dans la plus grande bienveillance, en m'adaptant à votre besoin.
Je vous propose une écoute active et non jugeante dans un espace de confiance.</p>
            </div>
        </div>
    );
}