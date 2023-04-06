/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 03/04/2023 - 08:37:09
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/04/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import Nav from './Nav'
import Header from './Header'
import styles from '../src/styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                 {children}
            </main>
        </div>
        </>
    )
}

export default Layout
 