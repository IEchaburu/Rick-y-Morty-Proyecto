import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
   const [id, setID] = useState('');

   const handleChange = (event) => {
      setID(event.target.value);
   }

   const handleSearch = () => {
      onSearch(id);
      setID('');
   }

   return (
      <div>
         <input onChange={handleChange} className={styles.input} type='search' value={id} />
         <button className={styles.button} onClick={handleSearch}>Agregar</button>
      </div>
   );
}
