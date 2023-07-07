import styles from './Cards.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { findAllByAltText } from '@testing-library/react';

 function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, species, gender, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className={styles.contenedor}>
         {
            isFav 
            ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => onClose(id)} className={styles.closeButton}>X</button>
         <div className={styles.imageContainer}>
            <img className={styles.contenedorImg} src={image} alt='' />
            <Link to={`/detail/${id}`}>
               <h2 className={styles.name}>{name}</h2>            
            </Link>
         </div>
         {/* <h2>Status: {status}</h2> */}
         <div className={styles.speciesAndGender}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         {/* <h2>Origin: {origin}</h2> */}
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispathToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispathToProps
)(Card);
