import {  useEffect, useRef, useState } from 'react';
import s from './style.module.css'

export function SearcBar(){
    const [isMouveA, setIsMouveA] = useState(false)
    const [isMouveAA, setIsMouveAA] = useState(false)
    const [isMouveS, setIsMouveS] = useState(false)
    const [isMouveC, setIsMouveC] = useState(false)
    const [isFixed, setIsFixed] = useState(false)
    
    const divRef = useRef(null);

    useEffect(()=>{
     function handleScroll(){
        if(divRef.current){
            if(window.scrollY > divRef.current.offsetTop){
                setIsFixed(true)
            }else{
                setIsFixed(false)
            }
        }
     }
    //  ajout de l'evènement 
    window.addEventListener('scroll', handleScroll);

    // nettoie l'évènement
    return ()=>{
     window.removeEventListener('scroll', handleScroll)
    }
    }, [])
    return (
        <div ref={divRef} className={isFixed ? `${s.container} ${s.fixed}` : s.container}>
            <div className={`row ${s.tainer}`}>
            <div
            onMouseEnter={()=> setIsMouveA(true)}
            onMouseLeave={()=> setIsMouveA(false)}
            style={{transition: "2s",color: isMouveA ? "brown":""}}
            className='col-lg-3 col-md-12'>Accueil</div>
            <div
            onMouseEnter={()=> setIsMouveAA(true)}
            onMouseLeave={()=> setIsMouveAA(false)}
            style={{transition: "2s",color: isMouveAA ? "blue":""}}
            className='col-lg-3 col-md-12'>A propos</div>
            <div
            onMouseEnter={()=> setIsMouveS(true)}
            onMouseLeave={()=> setIsMouveS(false)}
            style={{transition: "2s",color: isMouveS ? "blue":""}} 
            className='col-lg-3 col-md-12'>Services</div>
            <div
            onMouseEnter={()=> setIsMouveC(true)}
            onMouseLeave={()=> setIsMouveC(false)}
            style={{transition: "2s",color: isMouveC ? "blue":""}} 
            className='col-lg-3 col-md-12'>Contact</div>
            </div>
        </div>
    );
}