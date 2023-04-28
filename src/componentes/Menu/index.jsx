import home from "../../assets/home.png"
import maiscurtidas from "../../assets/mais-curtidas.png"
import maisVistas from "../../assets/mais-vistas.png"
import novas from "../../assets/novas.png"
import surpreendaMe from "../../assets/surpreendaMe.png"
import styles from "./Menu.module.scss"



export default function Menu(){
return(
<nav className={styles.menu}>
    <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
         <img src={home} alt=""/>   
         <a href="/">inicio</a>
        </li>
        <li className={styles.menu__item}>
         <img src={maiscurtidas} alt=""/>   
         <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
         <img src={maisVistas} alt=""/>   
         <a href="/">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
         <img src={novas} alt=""/>   
         <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
         <img src={surpreendaMe} alt=""/>   
         <a href="/">Surpreenda-me</a>
        </li>
    </ul>
</nav>

)

}