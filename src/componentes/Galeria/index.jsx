import Tags from "../Tags";
import fotos from "./fotos.json";
import styles from "./Galeria.module.scss";
import Cards from "./Cards";
import { useState } from "react";


export default function Galeria(){
const [itens, setItens] = useState(fotos)

const tags = [...new Set(fotos.map((valor)=>valor.tag))]

const filtrarFotos = (tag)=>{
const novasfotos = fotos.filter((foto)=>{
   return foto.tag === tag;
})
setItens(novasfotos);

}


const retirar = (id)=>{
setItens(itens.filter(item=>item.id !== id))

}



return(
    <section className={styles.galeria}>
        <h2>Navegue pela Galeria</h2>
        <Tags tags={tags} filtrarFotos={filtrarFotos} setitens={setItens}/>
        <Cards itens={itens} styles={styles} aoDeletar={retirar}/>
        
</section>
    
    
    
)

}