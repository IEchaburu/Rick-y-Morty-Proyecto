import React from 'react';
import SearchBar from './SearchBar';
import styles from './SearchBar.module.css'
import { Link } from 'react-router-dom';
import About from './About/About';

export default function Nav({onSearch}) {
    return (
        <nav className={styles.nav}>
            <SearchBar onSearch={onSearch} />
        <button>
        <Link to='/about'>About</Link>
        </button>

        <button>
        <Link to='/home'>Home</Link>
        </button>

        <button>
        <Link to='/favorites'>Favorites</Link>
        </button>
        
        </nav>
    );
}
