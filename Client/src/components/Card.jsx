import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, species, gender, image })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className = { styles.container }>
         <div className = { styles.buttonContainer }>
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' } </button>
            <button onClick={() => onClose( id )}>X</button>
         </div>
         <div className={ styles.dataContainer }>
            <NavLink to = { `/detail/${ id }` }>
               <h2>{ name }</h2>
            </NavLink>
            <h2>{ species }</h2>
            <h2>{ gender }</h2>
         </div>
         <img className = { styles.image } src = { image } alt = '' />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
