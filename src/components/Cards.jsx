import Card from './Card';
import styles from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return (
      <div className={styles.contenedorCards}>
         {
            characters.map(({id, name, status, species, gender, origin, image}) => {
               return ( 
                  <div>
                     <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     onClose={onClose}
                     />
                  </div>
               )
            })
         }
      </div>
   )
}
