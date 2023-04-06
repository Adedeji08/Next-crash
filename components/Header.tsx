/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 03/04/2023 - 15:41:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/04/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import headerStyles from '../src/styles/Header.module.css'

const Header = () => {
    const x = 5
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>WebDev</span>News
        </h1>
        <p className={headerStyles.description}>Keep up to date with the latest WebDev news</p>
        <style jsx>
            {`
            .title{
                color: ${x > 3 ? 'red' : 'blue'};
            }
            `}
        </style>
    </div>
  )
}

export default Header