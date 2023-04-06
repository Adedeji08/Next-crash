/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 03/04/2023 - 09:05:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/04/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import Link from 'next/link'
import navStyles from '../src/styles/Layout.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
           <Link href='/'>Home</Link>
        </li>
        <li>
           <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav