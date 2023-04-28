import styles from './Tags.module.scss'
import fotos from "../Galeria/fotos.json"

export default function Tags({tags, filtrarFotos, setitens}){
return(
    <div className={styles.tags}>
        <p>Filtre por Tags</p>
        <ul className={styles.tags__lista}>
            {tags.map((tag)=>{
             return <li key={tag}  onClick={()=>filtrarFotos(tag)}>{tag}</li>    
            })}
            <li onClick={()=>setitens(fotos)}>todas</li>
        </ul>
    </div>
)

}