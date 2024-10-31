import { Annonceurs } from "./components/Annonceurs/Annonceurs";
import { BackToTop } from "./components/BackToTop/BackToTop";
import { Carrousel } from "./components/carrousel/Carrousel";
import { FirstRuban } from "./components/First-ruban/FirstRuban";
import { Heading } from "./components/Heading/Heading";
import { Presentation } from "./components/Presentation/Presentation";
import { Ruban } from "./components/Ruban/Ruban";
import { SearcBar } from "./components/SearchBar/SearcBar";
import { Spacing } from "./components/Spacing/Spacing";
import s from './global.module.css'
function App() {
  return (
    <div className={s.class}>
    <Heading />
    <SearcBar />
    <BackToTop/>
    <Carrousel/>
     <Presentation />
     <Spacing />
     <Ruban />
     <Annonceurs />
     <FirstRuban />
    </div>
  )
}

export default App;
