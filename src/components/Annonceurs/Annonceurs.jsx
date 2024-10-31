import { Annonceur } from '../Annonceur/Annonceur';
import s from './style.module.css'

export function Annonceurs(){
  return(
    <div className={s.container}>
     <Annonceur/>
    </div>
  );
}