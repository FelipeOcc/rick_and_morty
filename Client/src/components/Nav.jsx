import SearchBar from "./SearchBar";
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = ({ onSearch }) => {
    return (
        <div className = {styles.navContainer}>
            <nav>
                <SearchBar onSearch = { onSearch } />
                <button>
                    <NavLink to = '/home' > Home </NavLink>
                </button>
                <button>
                    <NavLink to = '/about' > About </NavLink>
                </button>
                <button>
                    <NavLink to = '/favorites'> Favorites </NavLink>
                </button>
            </nav>
        </div>
    )
}

export default Nav;