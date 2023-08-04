import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import styles from './Detail.module.css'

const Detail = () => {
    const { id } = useParams();
    const [ character, setCharacter ] = useState({});
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         });
         return setCharacter({});
      }, [ id ]);

    return (
        <div className = { styles.detailContainer } >
            <div className = { styles.dataContainer }>
                <h2> { character?.name } </h2>
                <h2> { character?.status } </h2>
                <h2> { character?.species } </h2>
                <h2> { character?.gender } </h2>
                <h2> { character?.origin?.name } </h2>
            </div>
                <img className= { styles.image } src = { character?.image } alt = { character?.name } />
        </div>
    )
}

export default Detail;