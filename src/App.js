import './App.css';
import axios from 'axios';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters from './data.js';
import styles from './components/SearchBar.module.css'
import Nav from './components/Nav';
import About from './components/About/About';
import Detail from './components/Detail';
import Form from './components/Forms/Forms';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const email = 'ato@gmail.com';
const password = 'hola123';

function App() {
   const location = useLocation()
   const [characters, setCharacters] = useState([])
   const [acces, setAcces] = useState(false);
   const navigate = useNavigate();

   const login = (userData) => {
      if (userData.password === password && userData.email === email) {
         setAcces(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !acces && navigate('/')
   }, [acces])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter( character => character.id !== Number(id));
      setCharacters(charactersFiltered);

   }


   return (
      <div className='App'>
         
         {
            location.pathname !== '/' &&
               <div className={styles.nav}>
               <Nav onSearch={onSearch}/>
               </div>
         }
         
         <Routes>
            <Route path='/' element={ <Form login={login}/> }/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/detail/:id' element={ <Detail/> } />
            <Route path='/favorites' element={ <Favorites/> } />
         </Routes>
         
         
         
      </div>
   );
}

export default App;
