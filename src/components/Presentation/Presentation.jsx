import s from "./style.module.css"

export function Presentation(){
    return(
    <div className="pt-5 pb-4" style={{backgroundColor: "white"}}>
       <div className={`container mt-5 mb-3 ${s.container}`}>
         <div className="row">
           <div className={`col-lg-6 col-sm-12 ${s.div1}`}>
            Ce <span style={{fontWeight: "900"}}>Coaching</span>  est avant tout une rencontre, un voyage que nous faisons ensemble vers une transformation profonde amenant un regard différent sur vous (votre Être), les autres et sur votre vie.

            Il se fait à votre rythme, dans le respect, la douceur et la bienveillance.

            Nous partons de ce qui vous préoccupe, de votre demande et vous découvrirez, au fil des séances, une nouvelle façon d'être et d'accueillir ce qui se vit en vous et dans votre vie.

            A la différence de la psychothérapie qui explore le passé, pour expliquer le présent, nous explorons ce qui est ici maintenant pour comprendre et transformer le malaise ou la difficulté présents.

            Libérez vous....
           <div className="text-danger text-center"> Prenez votre envol !</div>
           </div>
           <div className={`col-lg-6  col-sm-12`}>
              <img className={s.img} src="https://files.sbcdnsb.com/images/Sc9IWd4UfQQkZU1TT5SnAA/content/1614098514/1589190/600/bienvenue-sur-le-site-de-quetzal-coach-coaching-de-vie.jpeg" alt="" />
           </div>
         </div>
       </div>
    </div>
    );
}