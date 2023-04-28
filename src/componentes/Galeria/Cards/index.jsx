import React from "react"
import Card from "./Card";



export default function Cards({ itens, styles,aoDeletar }) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return <Card key={item.id} aoDeletar={aoDeletar}item={item} style={styles} />;
      })}
    </ul>
  );
}


