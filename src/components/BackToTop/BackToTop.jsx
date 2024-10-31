import { useEffect, useState } from 'react';
import s from './style.module.css'

export function BackToTop(){
    const [isVisible, setIsVisible] = useState(false)

    function scrollToY(){
        setIsVisible(window.scrollY > 300);
    }

    useEffect(() =>{
      window.addEventListener('scroll', scrollToY)

      return() =>{window.removeEventListener('scroll', scrollToY)}
    }, [])

    const scrolTo = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(
    <div>
     {isVisible && (<button onClick={scrolTo} className={s.backTo}>
        ⬆ back to top
        </button>)}
    </div>
    );
}