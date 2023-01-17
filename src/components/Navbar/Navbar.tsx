// @ts-nocheck
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Navbar.scss';
import Resume from '../../img/Resume_Huseyn_Akhundov.pdf';

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center_nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >

        <li className='nav__list-item'>
          <a
            href='#projects'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Projects
          </a>
        </li>
      
    
        <li className='nav__list-item'>
          <a
            href='#skills'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Skills
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href={Resume}
            target='_blank'
            className='link link--nav'
          >
            Resume
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href='#contact'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Contact
          </a>
        </li>

      </ul>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <AiOutlineClose size='23' /> : <AiOutlineMenu size='23'/>}
      </button>
    </nav>
  )
}

export default Navbar;
