
import { FaHome } from 'react-icons/fa';

import './Header.scss'
import  SearchBar from './Search'


function Header() {
    return (
        <header className='header'>
        <div className='header__logo' >
          <FaHome></FaHome>
        </div>
        <div className='header__text'>
          <h1>TodoList</h1>
          </div>
        <div className='header__search'>
            <SearchBar/>
          
        </div>
      </header>
    )
}

export default Header;